import { motion } from 'framer-motion';
import { ShieldCheck, GraduationCap, Target, CircleDollarSign } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';

const icons = [ShieldCheck, GraduationCap, Target, CircleDollarSign];

export function WhySection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="why" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t.why.kicker} title={t.why.title} sub={t.why.sub} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {t.why.items.map((item, index) => {
            const Icon = icons[index % icons.length];
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                whileHover={{ y: -6 }}
                className="group relative overflow-hidden rounded-[28px] border border-black/10 bg-white p-6 shadow-soft"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(232,163,23,.11),transparent_38%),linear-gradient(180deg,rgba(11,26,63,.02),transparent_40%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-white shadow-soft">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="relative mt-5 text-xl font-display text-navy-950">{item.title}</h3>
                <p className="relative mt-3 text-sm leading-7 text-slate-600">{item.desc}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
