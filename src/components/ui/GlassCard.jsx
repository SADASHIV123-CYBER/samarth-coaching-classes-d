import { cn } from '../../utils/cn';

export function GlassCard({ className, children }) {
  return (
    <div
      className={cn(
        'rounded-[28px] border border-white/15 bg-white/10 shadow-[0_18px_80px_rgba(2,6,23,0.18)] backdrop-blur-xl',
        className
      )}
    >
      {children}
    </div>
  );
}
