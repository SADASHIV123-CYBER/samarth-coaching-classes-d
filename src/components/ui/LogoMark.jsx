export function LogoMark({ className = 'h-11 w-11' }) {
  return (
    <svg className={className} viewBox="0 0 96 96" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="logo-grad" x1="16" y1="12" x2="80" y2="84" gradientUnits="userSpaceOnUse">
          <stop stopColor="#C92A3A" />
          <stop offset=".55" stopColor="#1565C0" />
          <stop offset="1" stopColor="#E8A317" />
        </linearGradient>
      </defs>
      <rect x="4" y="4" width="88" height="88" rx="28" fill="#0B1A3F" />
      <path d="M23 62c10-18 17-27 25-27s15 9 25 27" stroke="url(#logo-grad)" strokeWidth="6" strokeLinecap="round" />
      <path d="M25 32h46" stroke="#FFFFFF" strokeOpacity=".22" strokeWidth="2" strokeLinecap="round" />
      <circle cx="33" cy="32" r="3.5" fill="#E8A317" />
      <circle cx="48" cy="24" r="3.5" fill="#FFFFFF" />
      <circle cx="63" cy="32" r="3.5" fill="#1F7A5C" />
      <path d="M27 68h42" stroke="#FFFFFF" strokeOpacity=".2" strokeWidth="2" strokeLinecap="round" />
      <path d="M38 47c4 3 7 5 10 12" stroke="#FFFFFF" strokeOpacity=".45" strokeWidth="2" strokeLinecap="round" />
      <path d="M58 47c-4 3-7 5-10 12" stroke="#FFFFFF" strokeOpacity=".45" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}
