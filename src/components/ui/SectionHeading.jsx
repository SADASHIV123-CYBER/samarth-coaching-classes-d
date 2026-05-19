import { motion } from 'framer-motion';

export function SectionHeading({ kicker, title, sub, align = 'left' }) {
  const alignClasses = align === 'center' ? 'mx-auto text-center' : '';
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
      className={alignClasses}
    >
      {kicker ? (
        <p className="mb-3 inline-flex items-center gap-3 text-xs font-bold uppercase tracking-[0.22em] text-premiumRed/90">
          <span className="h-px w-8 bg-premiumRed/70" />
          {kicker}
        </p>
      ) : null}
      <h2 className="max-w-3xl font-display text-3xl leading-[1.05] tracking-tight text-navy-950 sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {sub ? (
        <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
          {sub}
        </p>
      ) : null}
    </motion.div>
  );
}
