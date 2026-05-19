import { Languages } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from './Button';
import { useLanguage } from '../../hooks/useLanguage';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <Button
      type="button"
      variant="secondary"
      onClick={toggleLanguage}
      className="gap-2 px-4 py-2.5 text-xs font-bold uppercase tracking-[0.14em]"
      aria-label="Toggle language"
    >
      <Languages className="h-4 w-4" />
      <span>{language === 'en' ? 'मराठी' : 'EN'}</span>
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 35 }}
        className="ml-1 inline-flex h-2.5 w-2.5 rounded-full bg-premiumRed"
      />
    </Button>
  );
}
