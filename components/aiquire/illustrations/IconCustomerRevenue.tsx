export default function IconCustomerRevenue() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="#ffffff" stroke="#002329" strokeWidth="1.5" />
      {/* Bar chart with upward trend */}
      <rect x="11" y="30" width="6" height="8" rx="1.5" fill="#002329" opacity="0.4" />
      <rect x="20" y="24" width="6" height="14" rx="1.5" fill="#002329" opacity="0.6" />
      <rect x="29" y="18" width="6" height="20" rx="1.5" fill="#002329" />
      {/* Trend line */}
      <polyline points="14,28 23,22 32,16" fill="none" stroke="#ce2124" strokeWidth="2" strokeLinecap="round" />
      {/* Dots on trend */}
      <circle cx="14" cy="28" r="2.5" fill="#ce2124" />
      <circle cx="23" cy="22" r="2.5" fill="#ce2124" />
      <circle cx="32" cy="16" r="2.5" fill="#ce2124" />
      {/* Arrow up */}
      <line x1="36" y1="14" x2="36" y2="10" stroke="#ce2124" strokeWidth="1.5" />
      <polygon points="36,9 33,13 39,13" fill="#ce2124" />
    </svg>
  );
}
