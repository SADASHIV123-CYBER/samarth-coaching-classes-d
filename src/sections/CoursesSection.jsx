import { motion } from 'framer-motion';
import { BookOpen, FlaskConical, BrainCircuit, ClipboardCheck } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';

const iconMap = [BookOpen, BrainCircuit, FlaskConical, ClipboardCheck];

export function CoursesSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="courses" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t.courses.kicker} title={t.courses.title} sub={t.courses.sub} />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {t.courses.items.map((course, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <motion.article
                key={course.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.18 }}
                transition={{ duration: 0.6, delay: index * 0.06 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-[28px] border border-black/10 bg-white p-6 shadow-soft"
              >
                <div className="absolute right-0 top-0 h-36 w-36 -translate-y-1/2 translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(21,101,192,.10),transparent_70%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative flex items-start justify-between gap-3">
                  <span className="inline-flex items-center rounded-full border border-black/10 bg-paper px-3 py-1 text-[11px] font-bold uppercase tracking-[0.16em] text-navy-900">
                    {course.tag}
                  </span>
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-navy-900 text-white shadow-soft">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="relative mt-5 text-2xl font-display leading-tight text-navy-950">{course.title}</h3>
                <p className="relative mt-3 text-sm leading-7 text-slate-600">{course.desc}</p>
                <ul className="relative mt-5 space-y-3 border-t border-dashed border-black/10 pt-5">
                  {course.points.map((point) => (
                    <li key={point} className="flex items-start gap-3 text-sm text-slate-700">
                      <span className="mt-1.5 h-2 w-2 rounded-full bg-premiumRed" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
