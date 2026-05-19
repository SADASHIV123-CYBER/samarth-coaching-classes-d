import { motion } from 'framer-motion';
import { CheckCircle2, MapPin, Waves } from 'lucide-react';

import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';

import logo from '../../public/logo.png';

export function AboutSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="grid gap-6 lg:grid-cols-[1.08fr_.92fr] lg:items-center">
          
          {/* Left Content */}
          <div>
            <SectionHeading
              kicker={t.about.kicker}
              title={t.about.title}
              sub={t.about.body}
            />

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {t.about.bullets.map((bullet, index) => (
                <motion.li
                  key={bullet}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex items-start gap-3 rounded-2xl border border-black/10 bg-white p-4 shadow-soft"
                >
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-biologyGreen" />

                  <span className="text-sm leading-7 text-slate-700">
                    {bullet}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Right Card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[34px] border border-black/10 bg-white p-6 shadow-[0_18px_70px_rgba(2,6,23,0.12)]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(21,101,192,.12),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(232,163,23,.13),transparent_30%)]" />

            <div className="relative">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-paper px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-slate-700">
                <Waves className="h-4 w-4 text-academicBlue" />

                {language === 'mr'
                  ? 'स्थानिक विश्वास'
                  : 'Local trust'}
              </div>

              {/* Logo + Founder */}
              <div className="mt-6 flex items-center gap-4">
                
                <div className="rounded-3xl bg-paper p-3 shadow-soft">
                  <img
                    src={logo}
                    alt="Samarth Coaching Logo"
                    className="h-20 w-20 rounded-2xl object-cover"
                  />
                </div>

                <div>
                  <div className="font-display text-3xl text-navy-950">
                    Sardeshpande Sir
                  </div>

                  <div className="mt-1 text-sm font-semibold uppercase tracking-[0.18em] text-premiumRed">
                    {language === 'mr'
                      ? 'संस्थापक · जीवशास्त्र प्राध्यापक'
                      : 'Founder · Biology Faculty'}
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  [
                    language === 'mr'
                      ? 'लहान बॅच'
                      : 'Small batch',

                    language === 'mr'
                      ? 'वैयक्तिक लक्ष'
                      : 'Personal attention'
                  ],

                  [
                    '1 : 1',

                    language === 'mr'
                      ? 'संवाद'
                      : 'Guidance'
                  ],

                  [
                    language === 'mr'
                      ? 'साप्ताहिक'
                      : 'Weekly',

                    language === 'mr'
                      ? 'चाचण्या'
                      : 'Tests'
                  ],

                  [
                    language === 'mr'
                      ? 'नियमित'
                      : 'Regular',

                    language === 'mr'
                      ? 'पालक अपडेट'
                      : 'Parent updates'
                  ],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-black/10 bg-white p-4"
                  >
                    <div className="font-display text-2xl text-navy-950">
                      {value}
                    </div>

                    <div className="mt-1 text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">
                      {label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Location */}
              <div className="mt-8 rounded-[28px] bg-navy-950 p-5 text-white">
                <div className="flex items-start gap-3">
                  
                  <MapPin className="mt-1 h-5 w-5 text-warmGold" />

                  <div>
                    <div className="text-sm font-semibold uppercase tracking-[0.16em] text-white/60">
                      {language === 'mr'
                        ? 'ठिकाण'
                        : 'Location'}
                    </div>

                    <div className="mt-2 text-base leading-7 text-white/90">
                      {t.contact.address}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}