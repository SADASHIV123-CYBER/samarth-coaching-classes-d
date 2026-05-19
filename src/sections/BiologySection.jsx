import { motion } from 'framer-motion';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';

export function BiologySection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section id="biology" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[36px] border border-navy-900/10 bg-navy-950 px-5 py-12 text-white shadow-[0_28px_100px_rgba(2,6,23,0.22)] sm:px-8 lg:px-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(232,163,23,.20),transparent_26%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,.10),transparent_24%),radial-gradient(circle_at_70%_80%,rgba(31,122,92,.18),transparent_28%)]" />
          <div className="absolute inset-0 opacity-25">
            <BiologyParticles />
          </div>
          <div className="relative">
            <SectionHeading kicker={t.biology.kicker} title={t.biology.title} sub={t.biology.sub} />
            <div className="mt-10 grid gap-4 lg:grid-cols-3">
              {t.biology.pillars.map((pillar, index) => (
                <motion.article
                  key={pillar.title}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.22 }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="rounded-[28px] border border-white/12 bg-white/8 p-6 backdrop-blur-xl"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-warmGold shadow-soft">
                    <span className="font-display text-2xl">{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-display text-white">{pillar.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-white/75">{pillar.desc}</p>
                </motion.article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BiologyParticles() {
  const dots = [
    { top: '16%', left: '12%', size: 8 },
    { top: '26%', left: '74%', size: 6 },
    { top: '68%', left: '18%', size: 5 },
    { top: '56%', left: '84%', size: 9 },
    { top: '80%', left: '52%', size: 7 },
    { top: '38%', left: '54%', size: 5 },
  ];

  return (
    <div className="relative h-full min-h-[320px] overflow-hidden">
      <div className="absolute inset-x-[-10%] top-0 h-[1px] bg-white/15" />
      <div className="absolute inset-y-0 left-1/2 w-[1px] bg-white/10" />
      <div className="absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(232,163,23,.18),transparent_55%)] blur-2xl" />
      <Helix />
      {dots.map((dot, idx) => (
        <span
          key={idx}
          className="absolute rounded-full bg-white/80 shadow-[0_0_18px_rgba(255,255,255,0.35)]"
          style={{
            top: dot.top,
            left: dot.left,
            width: dot.size,
            height: dot.size,
            animationDelay: `${idx * 0.5}s`,
          }}
        />
      ))}
    </div>
  );
}

function Helix() {
  return (
    <svg viewBox="0 0 320 420" className="absolute inset-0 h-full w-full" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="bi-grad" x1="80" y1="20" x2="240" y2="400" gradientUnits="userSpaceOnUse">
          <stop stopColor="#E8A317" />
          <stop offset=".45" stopColor="#FFFFFF" stopOpacity=".9" />
          <stop offset="1" stopColor="#1F7A5C" />
        </linearGradient>
      </defs>
      <path d="M118 20c70 40 70 100 0 140s-70 100 0 140 70 100 0 140" stroke="url(#bi-grad)" strokeOpacity=".8" strokeWidth="3" strokeLinecap="round" />
      <path d="M202 20c-70 40-70 100 0 140s70 100 0 140-70 100 0 140" stroke="url(#bi-grad)" strokeOpacity=".42" strokeWidth="3" strokeLinecap="round" />
      {Array.from({ length: 12 }).map((_, i) => {
        const y = 24 + i * 32;
        const phase = (i / 11) * Math.PI * 2;
        const x1 = 160 + Math.sin(phase) * 62;
        const x2 = 160 - Math.sin(phase) * 62;
        return (
          <g key={i}>
            <line x1={x1} y1={y} x2={x2} y2={y} stroke="rgba(255,255,255,0.22)" />
            <circle cx={x1} cy={y} r="4.2" fill="#E8A317" />
            <circle cx={x2} cy={y} r="4.2" fill="#fff" fillOpacity=".95" />
          </g>
        );
      })}
    </svg>
  );
}
