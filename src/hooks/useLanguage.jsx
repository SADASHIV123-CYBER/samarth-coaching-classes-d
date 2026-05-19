import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const LanguageContext = createContext(null);
const STORAGE_KEY = 'scc-lang';

export function LanguageProvider({ children, initialLanguage = 'en' }) {
  const [language, setLanguage] = useState(() => {
    if (typeof window === 'undefined') return initialLanguage;
    return window.localStorage.getItem(STORAGE_KEY) || initialLanguage;
  });

  useEffect(() => {
    document.documentElement.lang = language === 'mr' ? 'mr' : 'en';
    document.documentElement.dataset.lang = language;
    window.localStorage.setItem(STORAGE_KEY, language);
  }, [language]);

  const value = useMemo(
    () => ({
      language,
      setLanguage,
      toggleLanguage: () => setLanguage((current) => (current === 'en' ? 'mr' : 'en')),
    }),
    [language]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used inside LanguageProvider');
  }
  return context;
}
