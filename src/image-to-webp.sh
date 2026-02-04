#!/bin/bash
# Convert images to WebP + compress + clean filenames

if [ $# -eq 0 ]; then
    echo "Usage: $0 <folder or image files>"
    exit 1
fi

QUALITY=85

# Function to clean filenames
clean_name() {
    local name="$1"
    name=$(echo "$name" | tr '[:upper:]' '[:lower:]')      # lowercase
    name=$(echo "$name" | tr ' ' '-')                      # spaces → dash
    name=$(echo "$name" | tr -cd '[:alnum:]._-' )          # keep safe chars
    name=$(echo "$name" | sed 's/-\+/-/g')                 # collapse ---
    name=$(echo "$name" | sed 's/^-//;s/-$//')             # trim leading/trailing -
    echo "$name"
}

# Function to process each image
process_file() {
    local file="$1"
    local ext="${file##*.}"
    local dir="$(dirname "$file")"
    local base="$(basename "$file" ".$ext")"

    local clean_base
    clean_base=$(clean_name "$base")
    local output="${dir}/${clean_base}.webp"

    # Convert to webp (compressed)
    if cwebp -q "$QUALITY" "$file" -o "$output" >/dev/null 2>&1; then
        echo "✅ Converted: $file → $output"
    else
        echo "❌ Failed: $file"
    fi
}

# If a folder is passed
if [ -d "$1" ]; then
    find "$1" -type f \( -iname '*.png' -o -iname '*.jpg' -o -iname '*.jpeg' \) -print0 |
    while IFS= read -r -d '' img; do
        process_file "$img"
    done
else
    # If specific files are passed
    for img in "$@"; do
        process_file "$img"
    done
fi

echo "🎉 Done! All images converted to WebP."
 
























































