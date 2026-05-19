import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';

import logo from '../../public/logo.png';

export function Footer() {
  const { language } = useLanguage();
  const t = content[language];

  return (
    <footer className="border-t border-black/10 bg-navy-950 text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          
          {/* Logo + Branding */}
          <div>
            <div className="flex items-center gap-3">
              
              <div className="rounded-2xl bg-white p-1.5 shadow-md">
                <img
                  src={logo}
                  alt="Samarth Coaching Logo"
                  className="h-12 w-12 rounded-xl object-cover"
                />
              </div>

              <div>
                <div className="font-display text-2xl">
                  Samarth Coaching Classes
                </div>

                <div className="mt-1 text-[11px] font-bold uppercase tracking-[0.22em] text-warmGold">
                  {t.footer.line1}
                </div>
              </div>
            </div>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/72">
              {t.footer.line2}
            </p>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-warmGold">
              {language === 'mr' ? 'अभ्यासक्रम' : 'Courses'}
            </h4>

            <div className="mt-4 space-y-2 text-sm text-white/75">
              <div>{language === 'mr' ? '११वी जीवशास्त्र' : '11th Biology'}</div>
              <div>{language === 'mr' ? '१२वी जीवशास्त्र' : '12th Biology'}</div>
              <div>MHT-CET</div>
              <div>HSC Board</div>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-warmGold">
              {language === 'mr' ? 'संपर्क' : 'Contact'}
            </h4>

            <div className="mt-4 space-y-2 text-sm text-white/75">
              <div>{t.contact.phone}</div>
              <div>{t.contact.hours}</div>
              <div>{t.contact.address}</div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/45">
          <span>{t.footer.rights}</span>

          <span>
            {language === 'mr'
              ? 'स्थानिक · विश्वासू · निकालाभिमुख'
              : 'Local · Trusted · Result-oriented'}
          </span>
        </div>
      </div>
    </footer>
  );
}