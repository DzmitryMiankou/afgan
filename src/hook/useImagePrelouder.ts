import { useState, useEffect } from "react";

export function useImagePreloader(imageUrls: string[]): boolean {
  const [isReady, setIsReady] = useState<boolean>(false);

  useEffect(() => {
    if (!imageUrls || imageUrls.length === 0) {
      setIsReady(true);
      return;
    }

    let pending: number = imageUrls.length;

    const onImageLoadOrError = (): void => {
      pending -= 1;
      if (pending === 0) setIsReady(true);
    };

    imageUrls.forEach((url: string) => {
      const img: HTMLImageElement = new Image();
      img.src = url;

      if (img.complete) onImageLoadOrError();
      else {
        img.onload = onImageLoadOrError;
        img.onerror = onImageLoadOrError;
      }
    });
  }, [imageUrls]);

  return isReady;
}
