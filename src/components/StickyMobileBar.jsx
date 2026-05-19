import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PhoneCall, MessageCircleMore } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import { telLink, whatsappLink } from '../utils/links';

export function StickyMobileBar() {
  const { language } = useLanguage();
  const t = content[language];
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 360);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show ? (
        <motion.div
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 120, opacity: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="fixed inset-x-3 bottom-3 z-50 rounded-full border border-black/10 bg-white p-2 shadow-[0_18px_60px_rgba(2,6,23,0.18)] md:hidden"
        >
          <div className="grid grid-cols-2 gap-2">
            <a
              href={telLink}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-navy-900 px-4 py-3 text-sm font-bold text-white"
            >
              <PhoneCall className="h-4 w-4" />
              {t.mobile.call}
            </a>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-sm font-bold text-white"
            >
              <MessageCircleMore className="h-4 w-4" />
              {t.mobile.whatsapp}
            </a>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
