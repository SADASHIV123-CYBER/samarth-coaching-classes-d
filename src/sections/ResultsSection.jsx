import { motion } from 'framer-motion';
import { Trophy, Users, ClipboardList, BadgeCheck } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Counter } from '../components/ui/Counter';

const statsIcons = [BadgeCheck, Users, ClipboardList, Trophy];

export function ResultsSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="trust" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t.results.kicker} title={t.results.title} sub={t.results.sub} />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {t.results.stats.map((stat, index) => {
            const Icon = statsIcons[index % statsIcons.length];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.04 }}
                className="rounded-[28px] border border-black/10 bg-white p-6 shadow-soft"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-navy-900 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="text-right text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
                    {language === 'mr' ? 'विश्वास' : 'Trust'}
                  </div>
                </div>
                <Counter value={stat.value} className="mt-5" />
                <p className="mt-2 text-sm font-medium text-slate-600">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {t.results.quotes.map((quote, index) => (
            <motion.article
              key={quote.author}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.05 }}
              className="rounded-[28px] border border-black/10 bg-[linear-gradient(180deg,#fff,rgba(250,247,242,.92))] p-6 shadow-soft"
            >
              <p className="text-lg leading-8 text-navy-950">“{quote.quote}”</p>
              <div className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-premiumRed/90">
                {quote.author}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
