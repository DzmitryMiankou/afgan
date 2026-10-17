import { useEffect, useState } from "react";

export const useSizeHTMLElement = (
  elementRef: React.RefObject<HTMLElement | null>,
) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    if (elementRef.current) {
      const rect = elementRef.current.getBoundingClientRect();
      setDimensions({ width: rect.width, height: rect.height });
    }
  }, [elementRef]);

  return { dimensions };
};
