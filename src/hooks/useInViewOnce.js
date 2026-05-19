import { useEffect, useState } from 'react';

export function useInViewOnce(options) {
  const [ref, setRef] = useState(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref || inView) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
        ...(options || {}),
      }
    );

    observer.observe(ref);
    return () => observer.disconnect();
  }, [ref, inView, options]);

  return [setRef, inView];
}
