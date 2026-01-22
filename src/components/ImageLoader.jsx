import React, { useState, useEffect, useRef } from 'react';
import { generateBlurPlaceholder, isWebPSupported } from '../utils/imageUtils';

const ImageLoader = ({
  src,
  alt,
  className,
  onClick,
  loading = 'lazy',
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  placeholder = 'blur', // 'blur' | 'color' | 'none'
  placeholderColor = '#f3f4f6',
  webpSrc = null,
  blurSrc = null, // Low quality placeholder image
  quality = 80 // Quality percentage for optimization
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const imgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [supportsWebP, setSupportsWebP] = useState(false);

  useEffect(() => {
    // Check WebP support
    isWebPSupported().then(support => setSupportsWebP(support));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(imgRef.current);
        }
      },
      { threshold: 0.1, rootMargin: '100px' } // Increased root margin for earlier loading
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  const handleLoad = () => {
    setImageLoaded(true);
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  // Determine the image source (WebP if supported and provided)
  const imageSrc = supportsWebP && webpSrc ? webpSrc : src;

  // Generate blur placeholder if needed
  const blurPlaceholder = placeholder === 'blur' && !blurSrc
    ? generateBlurPlaceholder(placeholderColor)
    : blurSrc;

  return (
    <div ref={imgRef} className={`relative overflow-hidden ${className || ''}`}>
      {/* Blur-up placeholder */}
      {placeholder === 'blur' && blurPlaceholder && (
        <img
          src={blurPlaceholder}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
            imageLoaded ? 'opacity-0' : 'opacity-100'
          }`}
          aria-hidden="true"
          loading="eager"
        />
      )}

      {/* Color placeholder */}
      {placeholder === 'color' && !blurPlaceholder && (
        <div
          className="absolute inset-0"
          style={{ backgroundColor: placeholderColor }}
        />
      )}

      {/* Loading spinner */}
      {isLoading && !hasError && !blurPlaceholder && placeholder !== 'none' && (
        <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-[#8F6573] rounded-full animate-spin"></div>
        </div>
      )}

      {/* Main image */}
      {isVisible && (
        <img
          src={imageSrc}
          alt={alt}
          className={`${className || ''} ${
            isLoading ? 'opacity-0 scale-105 blur-[2px]' : 'opacity-100 scale-100 blur-0'
          } transition-all duration-700 ease-out object-cover`}
          onLoad={handleLoad}
          onError={handleError}
          onClick={onClick}
          loading={loading}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
          sizes={sizes}
        />
      )}

      {/* Fallback placeholder when not visible */}
      {!isVisible && !hasError && placeholder !== 'none' && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse"></div>
      )}
    </div>
  );
};

export default ImageLoader;