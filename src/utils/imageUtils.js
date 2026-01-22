/**
 * Utility functions for image optimization
 */

// Generate a small base64 placeholder for blur-up effect
export const generateBlurPlaceholder = (color = '#e5e7eb') => {
  // Create a tiny SVG that serves as a placeholder
  const svgString = `
    <svg xmlns="http://www.w3.org/2000/svg" width="1" height="1">
      <rect width="1" height="1" fill="${color}" />
    </svg>
  `;
  
  return `data:image/svg+xml;base64,${btoa(svgString)}`;
};

// Function to get image dimensions (this would typically come from a build process)
export const getImageDimensions = async (src) => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      resolve({
        width: img.naturalWidth,
        height: img.naturalHeight
      });
    };
    img.onerror = reject;
    img.src = src;
  });
};

// Format for responsive images
export const getResponsiveSizes = (breakpoint = 'large') => {
  switch(breakpoint) {
    case 'small':
      return '(max-width: 640px) 100vw, (max-width: 768px) 50vw, 25vw';
    case 'medium':
      return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
    case 'large':
    default:
      return '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw';
  }
};

// Check if WebP is supported
export const isWebPSupported = async () => {
  if (typeof document === 'undefined') return false;
  
  const canvas = document.createElement('canvas');
  return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0;
};