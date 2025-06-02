import React, { useState, useEffect } from 'react';

interface ImageLoaderProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  onError?: () => void;
}

const ImageLoader: React.FC<ImageLoaderProps> = ({
  src,
  fallbackSrc = '/placeholder.svg',
  onError,
  alt,
  className,
  ...props
}) => {
  const [imgSrc, setImgSrc] = useState<string>(src || fallbackSrc);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (src) {
      console.log(`Loading image from: ${src}`);
      setIsLoading(true);
      setHasError(false);
      setImgSrc(src);
    }
  }, [src]);

  const handleError = () => {
    console.error(`Failed to load image: ${imgSrc}`);
    if (!hasError) {
      setHasError(true);
      console.log(`Falling back to: ${fallbackSrc}`);
      setImgSrc(fallbackSrc);
      onError?.();
    }
  };

  const handleLoad = () => {
    console.log(`Successfully loaded image: ${imgSrc}`);
    setIsLoading(false);
  };

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
      onLoad={handleLoad}
      onError={handleError}
    />
  );
};

export default ImageLoader; 