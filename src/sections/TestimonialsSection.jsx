import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';

export function TestimonialsSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t.testimonials.kicker} title={t.testimonials.title} />
        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {t.testimonials.items.map((item, index) => (
            <motion.article
              key={item.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.06 }}
              whileHover={{ y: -6 }}
              className="relative overflow-hidden rounded-[28px] border border-black/10 bg-white p-6 shadow-soft"
            >
              <div className="absolute right-5 top-5 text-premiumRed/15">
                <Quote className="h-12 w-12" />
              </div>
              <div className="flex items-center gap-1 text-warmGold">
                {[0,1,2,3,4].map((n) => <Star key={n} className="h-4 w-4 fill-current" />)}
              </div>
              <p className="mt-5 text-base leading-8 text-slate-700">“{item.quote}”</p>
              <div className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-premiumRed/90">
                {item.name}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
