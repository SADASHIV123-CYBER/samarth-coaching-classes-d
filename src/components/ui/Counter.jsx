import { useEffect, useMemo, useState } from 'react';
import { useInViewOnce } from '../../hooks/useInViewOnce';

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export function Counter({ value, suffix = '', duration = 1400, className = '' }) {
  const [setRef, inView] = useInViewOnce();
  const [current, setCurrent] = useState(0);

  const display = useMemo(() => {
    if (Number.isInteger(value)) return current.toFixed(0);
    return current.toFixed(1);
  }, [current, value]);

  useEffect(() => {
    if (!inView) return undefined;
    let raf = 0;
    const start = performance.now();

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = easeOutCubic(progress);
      setCurrent(value * eased);
      if (progress < 1) raf = requestAnimationFrame(step);
      else setCurrent(value);
    };

    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, duration, value]);

  return (
    <div ref={setRef} className={className}>
      <div className="font-display text-4xl leading-none text-navy-950 sm:text-5xl">
        {display}
        {suffix}
      </div>
    </div>
  );
}
