import { motion } from 'framer-motion';
import {
  ArrowRight,
  PhoneCall,
  MessageCircleMore,
  Sparkles,
  ShieldCheck,
  Brain,
  Zap,
} from 'lucide-react';

import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import { Button } from '../components/ui/Button';
import { telLink, whatsappLink } from '../utils/links';
import { GlassCard } from '../components/ui/GlassCard';

import logo from '../../public/logo.png';

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export function HeroSection() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(232,163,23,.20),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(21,101,192,.12),transparent_36%),linear-gradient(180deg,rgba(11,26,63,.03),transparent_28%)]" />

      <div className="absolute left-[-12%] top-[-8%] -z-10 h-80 w-80 rounded-full bg-premiumRed/20 blur-3xl animate-floaty" />
      <div className="absolute right-[-10%] top-20 -z-10 h-96 w-96 rounded-full bg-academicBlue/15 blur-3xl animate-floaty [animation-delay:1.4s]" />
      <div className="absolute bottom-[-12%] left-10 -z-10 h-80 w-80 rounded-full bg-warmGold/20 blur-3xl animate-floaty [animation-delay:2s]" />

      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_.9fr] lg:gap-12">
          {/* LEFT */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-2xl"
          >
            <motion.div
              variants={item}
              className="mb-5 flex items-center gap-3"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-premiumRed/20 bg-white/90 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.22em] text-premiumRed shadow-soft backdrop-blur">
                <Sparkles className="h-3.5 w-3.5" />
                {t.hero.eyebrow}
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="font-display text-5xl leading-[0.95] tracking-tight text-navy-950 sm:text-6xl lg:text-[5.6rem]"
            >
              {t.hero.title}

              <span className="mt-3 block bg-gradient-to-r from-premiumRed via-[#ff5d6f] to-academicBlue bg-clip-text text-transparent">
                {t.hero.accent}
              </span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-base leading-8 text-slate-700 sm:text-lg"
            >
              {t.hero.sub}
            </motion.p>

            {/* CTA */}
            <motion.div
              variants={item}
              className="mt-7 flex flex-wrap gap-3"
            >
              <Button as="a" href={telLink} variant="primary">
                <PhoneCall className="h-4 w-4" />
                {t.hero.ctas.call}
              </Button>

              <Button
                as="a"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                variant="whatsapp"
              >
                <MessageCircleMore className="h-4 w-4" />
                {t.hero.ctas.whatsapp}
              </Button>

              <Button as="a" href="#courses" variant="ghost">
                {t.hero.ctas.courses}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>

            {/* BADGES */}
            <motion.div
              variants={item}
              className="mt-7 flex flex-wrap gap-2.5"
            >
              {t.hero.badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center rounded-full border border-black/10 bg-white/90 px-4 py-2 text-xs font-semibold text-slate-800 shadow-soft backdrop-blur"
                >
                  {badge}
                </span>
              ))}
            </motion.div>

            {/* TRUST */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center gap-4 rounded-3xl border border-black/10 bg-white/85 p-4 shadow-soft backdrop-blur"
            >
              <div className="flex items-center gap-2 text-warmGold">
                {[0, 1, 2, 3, 4].map((n) => (
                  <ShieldCheck key={n} className="h-4 w-4" />
                ))}
              </div>

              <p className="text-sm font-medium text-slate-700">
                {t.hero.trust}
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT CARD */}
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative"
          >
            <div className="absolute inset-0 -z-10 mx-auto h-[105%] w-[105%] rounded-[36px] bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,.22),transparent_28%),radial-gradient(circle_at_80%_70%,rgba(232,163,23,.20),transparent_30%),linear-gradient(180deg,rgba(11,26,63,.98),rgba(8,18,41,.98))]" />

            <GlassCard className="relative overflow-hidden border border-white/20 bg-[#081226]/92 p-5 shadow-[0_25px_100px_rgba(0,0,0,.45)] backdrop-blur-2xl sm:p-6">
              {/* EFFECTS */}
              <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,.12),transparent_30%,transparent_70%,rgba(255,255,255,.08))] opacity-60" />

              <div className="absolute left-4 top-4 h-24 w-24 rounded-full bg-white/10 blur-2xl" />

              <div className="absolute right-4 top-16 h-40 w-40 rounded-full bg-warmGold/15 blur-3xl" />

              {/* TOP */}
              <div className="relative flex items-center justify-between gap-4">
                {/* <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white">
                  <Brain className="h-3.5 w-3.5 text-warmGold" />

                  {language === 'mr'
                    ? 'जीवशास्त्र विशेष'
                    : 'Biology Specialist'}
                </span> */}


                <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/30 backdrop-blur-md px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white shadow-lg">
                  <Brain className="h-3.5 w-3.5 text-warmGold" />

                  {language === 'mr'
                    ? 'जीवशास्त्र विशेष'
                    : 'Biology Specialist'}
                </span>



                {/* LOGO */}
                <div className="rounded-full bg-white p-1.5 shadow-[0_14px_40px_rgba(0,0,0,.24)]">
                  <img
                    src={logo}
                    alt="Samarth Coaching Classes"
                    className="h-14 w-14 rounded-full object-cover ring-2 ring-white/30 shadow-2xl"
                  />
                </div>
              </div>

              {/* CONTENT */}
              <div className="relative mt-8 grid gap-6 lg:grid-cols-[1.05fr_.95fr]">
                {/* LEFT */}
                <div className="rounded-[28px] border border-white/20 bg-[#11203d]/80 p-5 shadow-[0_20px_80px_rgba(2,6,23,.20)] backdrop-blur">
                  <p className="font-display text-2xl leading-tight text-white sm:text-[2rem]">
                    {language === 'mr'
                      ? 'जीवन समजून घ्या.'
                      : 'Understand life.'}

                    <span className="block text-warmGold">
                      {language === 'mr'
                        ? 'केवळ पाठ करू नका.'
                        : "Don't just memorise it."}
                    </span>
                  </p>

                  {/* STATS */}
                  <div className="mt-5 grid grid-cols-3 gap-3 text-center">
                    {[
                      [
                        '11',
                        language === 'mr' ? 'इयत्ता' : 'Standards',
                      ],
                      ['CET', language === 'mr' ? 'ट्रॅक' : 'Track'],
                      ['HSC', language === 'mr' ? 'बोर्ड' : 'Board'],
                    ].map(([n, label]) => (
                      <div
                        key={n}
                        className="rounded-2xl border border-white/20 bg-[#172848]/90 px-3 py-4"
                      >
                        <div className="font-display text-2xl text-white">
                          {n}
                        </div>

                        <div className="mt-1 text-[11px] uppercase tracking-[0.16em] text-white/90">
                          {label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* DNA CARD */}
                <div className="relative overflow-hidden rounded-[28px] border border-white/20 bg-[#11203d]/80 p-5 backdrop-blur">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(232,163,23,.18),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(31,122,92,.16),transparent_32%)]" />

                  <div className="relative flex h-full min-h-[260px] items-center justify-center">
                    {/* FLOATING DOTS */}
                    <div className="absolute left-8 top-10 h-3 w-3 rounded-full bg-warmGold animate-pulseSoft" />

                    <div className="absolute right-10 top-12 h-2.5 w-2.5 rounded-full bg-white/90 animate-floaty" />

                    <div className="absolute bottom-12 left-12 h-2 w-2 rounded-full bg-white/90 animate-floaty [animation-delay:1.3s]" />

                    <div className="absolute bottom-20 right-8 h-2.5 w-2.5 rounded-full bg-premiumRed/80 animate-pulseSoft [animation-delay:1s]" />

                    {/* DNA */}
                    <div className="absolute inset-0 mx-auto my-auto h-[230px] w-[210px] opacity-90">
                      <Helix />
                    </div>

                    {/* NOTE */}
                    <div className="absolute inset-x-6 bottom-4 rounded-2xl border border-white/20 bg-[#07101f]/90 p-4 shadow-xl backdrop-blur-xl">
                      <div className="flex items-center gap-3">
                        <Zap className="h-5 w-5 text-warmGold" />

                        <p className="text-sm leading-6 text-white/95">
                          {t.hero.note}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Helix() {
  return (
    <svg
      viewBox="0 0 220 400"
      className="h-full w-full"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id="helix-grad"
          x1="28"
          y1="10"
          x2="182"
          y2="390"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E8A317" />
          <stop offset=".5" stopColor="#ffffff" stopOpacity=".95" />
          <stop offset="1" stopColor="#1F7A5C" />
        </linearGradient>
      </defs>

      <path
        d="M90 18c56 34 56 92 0 126s-56 92 0 126 56 92 0 126"
        stroke="url(#helix-grad)"
        strokeOpacity=".88"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      <path
        d="M130 18c-56 34-56 92 0 126s56 92 0 126-56 92 0 126"
        stroke="url(#helix-grad)"
        strokeOpacity=".68"
        strokeWidth="2.8"
        strokeLinecap="round"
      />

      {Array.from({ length: 11 }).map((_, index) => {
        const y = 20 + index * 35;
        const phase = (index / 10) * Math.PI * 2;

        const x1 = 110 + Math.sin(phase) * 58;
        const x2 = 110 - Math.sin(phase) * 58;

        return (
          <g key={index}>
            <line
              x1={x1}
              y1={y}
              x2={x2}
              y2={y}
              stroke="rgba(255,255,255,0.45)"
            />

            <circle cx={x1} cy={y} r="4" fill="#E8A317" />

            <circle
              cx={x2}
              cy={y}
              r="4"
              fill="#ffffff"
              fillOpacity=".95"
            />
          </g>
        );
      })}
    </svg>
  );
}