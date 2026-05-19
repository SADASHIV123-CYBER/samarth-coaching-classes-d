import { HeroSection } from '../sections/HeroSection';
import { WhySection } from '../sections/WhySection';
import { CoursesSection } from '../sections/CoursesSection';
import { ResultsSection } from '../sections/ResultsSection';
import { BiologySection } from '../sections/BiologySection';
import { TestimonialsSection } from '../sections/TestimonialsSection';
import { AboutSection } from '../sections/AboutSection';
import { ContactSection } from '../sections/ContactSection';
import { useEffect } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

export function HomePage() {
  const { language } = useLanguage();
  const t = content[language];

  useEffect(() => {
    document.title = 'Samarth Coaching Classes — Basmath';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        language === 'mr'
          ? 'बसमतमधील प्रीमियम जीवशास्त्र-फोकस्ड कोचिंग — ११वी, १२वी, CET आणि महाराष्ट्र बोर्डसाठी.'
          : 'Premium biology-focused coaching in Basmath for 11th, 12th, CET and Maharashtra Board students.'
      );
    }
  }, [language]);

  return (
    <div id="top" className="scroll-smooth">
      <HeroSection />
      <WhySection />
      <CoursesSection />
      <ResultsSection />
      <BiologySection />
      <TestimonialsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
