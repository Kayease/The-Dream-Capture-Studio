import React from 'react';

function buildUnsplashFallback({ width = 800, height = 600, topic = 'wedding' }) {
  const safeWidth = Number(width) || 800;
  const safeHeight = Number(height) || 600;
  const params = `?w=${safeWidth}&h=${safeHeight}&fit=crop&auto=format&q=80`;
  return `https://images.unsplash.com/photo-1555252333-9f8e92e65df9${params}`;
}

function Image({
  src,
  alt = "Image Name",
  className = "",
  width,
  height,
  sizes,
  priority = false,
  decoding = 'async',
  loading: loadingProp,
  fallbackTopic = 'wedding',
  ...props
}) {
  const loading = priority ? 'eager' : (loadingProp || 'lazy');
  const fetchPriority = priority ? 'high' : 'auto';

  const handleError = (e) => {
    const img = e?.target;
    if (!img) return;
    // If already set to local fallback, do nothing more
    if (img.dataset.fallbackApplied === 'true') return;

    // Try Unsplash fallback first with provided dimensions
    const unsplash = buildUnsplashFallback({ width, height, topic: fallbackTopic });
    img.src = unsplash;
    img.dataset.fallbackApplied = 'true';
  };

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      sizes={sizes}
      decoding={decoding}
      loading={loading}
      fetchpriority={fetchPriority}
      onError={handleError}
      {...props}
    />
  );
}

export default Image;
