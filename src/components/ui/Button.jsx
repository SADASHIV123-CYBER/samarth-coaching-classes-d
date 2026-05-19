import { cn } from '../../utils/cn';

export function Button({
  as: Comp = 'button',
  variant = 'primary',
  className,
  children,
  ...props
}) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-premiumRed focus-visible:ring-offset-2 focus-visible:ring-offset-paper';
  const variants = {
    primary: 'bg-premiumRed text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#b72231]',
    secondary:
      'bg-white text-navy-900 border border-black/10 shadow-soft hover:-translate-y-0.5 hover:border-navy-900/20',
    dark:
      'bg-navy-900 text-white shadow-soft hover:-translate-y-0.5 hover:bg-navy-800',
    ghost:
      'bg-transparent text-navy-900 border border-black/10 hover:bg-navy-900/5',
    whatsapp:
      'bg-[#25D366] text-white shadow-soft hover:-translate-y-0.5 hover:bg-[#1fb155]',
  };

  return (
    <Comp className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Comp>
  );
}
