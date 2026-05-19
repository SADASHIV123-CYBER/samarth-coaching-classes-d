import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { PhoneCall } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import { Button } from './ui/Button';
import { LanguageToggle } from './ui/LanguageToggle';
import { telLink } from '../utils/links';

import logo from '../../public/logo.png';

const navItems = ['home', 'why', 'courses', 'trust', 'biology', 'about', 'contact'];

export function Navbar() {
  const { language } = useLanguage();
  const t = content[language];

  const [scrolled, setScrolled] = useState(false);

  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 24], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollY.on('change', (v) => setScrolled(v > 18));
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      style={{
        backgroundColor: 'rgba(250,247,242, var(--tw-bg-opacity, 0.84))'
      }}
      className={[
        'sticky top-0 z-50 border-b backdrop-blur-xl transition-all duration-300',
        scrolled
          ? 'border-black/10 bg-white/90 shadow-[0_8px_30px_rgba(2,6,23,0.05)]'
          : 'border-transparent'
      ].join(' ')}
    >
      <motion.div
        style={{ opacity }}
        className="pointer-events-none absolute inset-0 bg-white/30"
      />

      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
        
        {/* Logo Section */}
        <a href="#top" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="Samarth Coaching Logo"
            className="h-12 w-12 shrink-0 rounded-full object-cover border border-black/10 shadow-sm"
          />

          <div className="min-w-0">
            <div className="truncate font-display text-lg leading-none text-navy-950 sm:text-xl">
              Samarth Coaching Classes
            </div>

            <div className="mt-1 truncate text-[10px] font-bold uppercase tracking-[0.22em] text-premiumRed">
              {language === 'mr'
                ? 'सरदेशपांडे सरांचे · बसमत'
                : "Sardeshpande Sir's · Basmath"}
            </div>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((key) => (
            <a
              key={key}
              href={`#${key === 'hero' ? 'top' : key}`}
              className="text-sm font-medium text-slate-700 transition hover:text-navy-950"
            >
              {t.nav[key]}
            </a>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageToggle />

          <Button
            as="a"
            href={telLink}
            variant="primary"
            className="hidden sm:inline-flex"
          >
            <PhoneCall className="h-4 w-4" />
            <span>{language === 'mr' ? 'फोन करा' : 'Call'}</span>
          </Button>
        </div>
      </div>
    </motion.header>
  );
}