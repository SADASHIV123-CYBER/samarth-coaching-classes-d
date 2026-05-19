import { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Clock3, MessageCircleMore, PhoneCall, MapPinned } from 'lucide-react';
import { useLanguage } from '../hooks/useLanguage';
import { content } from '../data/content';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Button } from '../components/ui/Button';
import { telLink, whatsappLink } from '../utils/links';

export function ContactSection() {
  const { language } = useLanguage();
  const t = content[language];
  const [form, setForm] = useState({
    name: '',
    phone: '',
    standard: t.contact.standards[2],
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    setForm((current) => ({ ...current, standard: t.contact.standards[2] }));
  }, [t.contact.standards]);

  const whatsappHref = useMemo(() => whatsappLink, []);

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    window.setTimeout(() => setSubmitted(false), 5500);
  }

  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker={t.contact.kicker} title={t.contact.title} sub={t.contact.sub} />
        <div className="mt-10 grid gap-6 lg:grid-cols-[.92fr_1.08fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="rounded-[32px] border border-black/10 bg-white p-6 shadow-soft"
          >
            <ContactLine icon={MapPinned} label={language === 'mr' ? 'पत्ता' : 'Address'} value={t.contact.address} />
            <ContactLine icon={PhoneCall} label={language === 'mr' ? 'फोन' : 'Phone'} value={t.contact.phone} />
            <ContactLine icon={Clock3} label={language === 'mr' ? 'वर्गाची वेळ' : 'Class hours'} value={t.contact.hours} />

            <div className="mt-6 flex flex-wrap gap-3">
              <Button as="a" href={telLink} variant="dark">
                <PhoneCall className="h-4 w-4" />
                {language === 'mr' ? 'फोन करा' : 'Call now'}
              </Button>
              <Button as="a" href={whatsappHref} target="_blank" rel="noreferrer" variant="whatsapp">
                <MessageCircleMore className="h-4 w-4" />
                WhatsApp
              </Button>
            </div>

            <div className="mt-6 rounded-[28px] border border-biologyGreen/20 bg-biologyGreen/8 p-5">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-biologyGreen" />
                <div>
                  <div className="font-semibold text-navy-950">{language === 'mr' ? 'थेट संदेश' : 'Direct message'}</div>
                  <p className="mt-1 text-sm leading-7 text-slate-600">
                    {language === 'mr'
                      ? 'WhatsApp वर मेसेज पाठवल्यास सर लवकर उत्तर देतात.'
                      : 'Sir usually replies fastest on WhatsApp. Use the green button for a quick start.'}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65 }}
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-black/10 bg-white p-6 shadow-soft"
          >
            <div>
              <h3 className="font-display text-3xl text-navy-950">{t.contact.formTitle}</h3>
              <p className="mt-2 text-sm leading-7 text-slate-600">{t.contact.formSub}</p>
            </div>

            {submitted ? (
              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-biologyGreen/20 bg-biologyGreen/10 px-4 py-3 text-biologyGreen">
                <CheckCircle2 className="h-5 w-5" />
                <span className="text-sm font-semibold">{t.contact.sent}</span>
              </div>
            ) : null}

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <Field
                label={t.contact.fields.name}
                value={form.name}
                onChange={(name) => setForm((s) => ({ ...s, name }))}
                required
              />
              <Field
                label={t.contact.fields.phone}
                value={form.phone}
                onChange={(phone) => setForm((s) => ({ ...s, phone }))}
                required
              />
            </div>

            <div className="mt-4 grid gap-4">
              <div className="grid gap-2">
                <label className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  {t.contact.fields.standard}
                </label>
                <select
                  className="h-12 rounded-2xl border border-black/10 bg-paper px-4 text-sm outline-none transition focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10"
                  value={form.standard}
                  onChange={(e) => setForm((s) => ({ ...s, standard: e.target.value }))}
                >
                  {t.contact.standards.map((standard) => (
                    <option key={standard} value={standard}>{standard}</option>
                  ))}
                </select>
              </div>
              <div className="grid gap-2">
                <label className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
                  {t.contact.fields.message}
                </label>
                <textarea
                  rows={4}
                  className="rounded-2xl border border-black/10 bg-paper px-4 py-3 text-sm outline-none transition focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10"
                  value={form.message}
                  onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
                />
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button type="submit" variant="primary">
                {t.contact.submit}
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button as="a" href={whatsappHref} target="_blank" rel="noreferrer" variant="ghost">
                {t.contact.whatsapp}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactLine({ icon: Icon, label, value }) {
  return (
    <div className="flex gap-4 py-4 first:pt-0">
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-navy-900 text-white">
        <Icon className="h-4.5 w-4.5" />
      </div>
      <div>
        <div className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{label}</div>
        <div className="mt-1 text-base leading-7 text-navy-950">{value}</div>
      </div>
    </div>
  );
}

function Field({ label, value, onChange, required = false }) {
  return (
    <div className="grid gap-2">
      <label className="text-xs font-bold uppercase tracking-[0.16em] text-slate-500">
        {label}
      </label>
      <input
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 rounded-2xl border border-black/10 bg-paper px-4 text-sm outline-none transition focus:border-navy-900 focus:ring-2 focus:ring-navy-900/10"
      />
    </div>
  );
}
