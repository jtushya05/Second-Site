'use client';

import { useState, useEffect } from 'react';

interface UseImageFallbackOptions {
  primaryImageUrl: string;
  fallbackImageUrl: string;
}

export function useImageFallback({ primaryImageUrl, fallbackImageUrl }: UseImageFallbackOptions) {
  const [currentImageUrl, setCurrentImageUrl] = useState(primaryImageUrl);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    setHasError(false);
    setCurrentImageUrl(primaryImageUrl);

    // Create a new image to test if the primary URL loads
    const testImage = new Image();
    
    testImage.onload = () => {
      console.log(`Primary image loaded successfully: ${primaryImageUrl}`);
      setCurrentImageUrl(primaryImageUrl);
      setIsLoading(false);
      setHasError(false);
    };
    
    testImage.onerror = () => {
      console.warn(`Primary image failed to load: ${primaryImageUrl}`);
      console.log(`Using fallback image: ${fallbackImageUrl}`);
      setCurrentImageUrl(fallbackImageUrl);
      setIsLoading(false);
      setHasError(true);
    };
    
    // Start loading the image
    testImage.src = primaryImageUrl;
    
    // Cleanup function
    return () => {
      testImage.onload = null;
      testImage.onerror = null;
    };
  }, [primaryImageUrl, fallbackImageUrl]);

  return { currentImageUrl, isLoading, hasError };
}
