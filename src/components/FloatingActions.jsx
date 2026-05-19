import { motion } from 'framer-motion';
import { PhoneCall, MessageCircleMore } from 'lucide-react';
import { telLink, whatsappLink } from '../utils/links';

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-40 hidden flex-col gap-3 md:flex">
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        className="grid h-14 w-14 place-items-center rounded-full bg-[#25D366] text-white shadow-[0_18px_50px_rgba(37,211,102,0.35)]"
        aria-label="WhatsApp"
      >
        <MessageCircleMore className="h-6 w-6" />
      </motion.a>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.96 }}
        href={telLink}
        className="grid h-14 w-14 place-items-center rounded-full bg-navy-900 text-white shadow-[0_18px_50px_rgba(11,26,63,0.35)]"
        aria-label="Call"
      >
        <PhoneCall className="h-6 w-6" />
      </motion.a>
    </div>
  );
}
