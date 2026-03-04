export default function IconFinancialServices() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="#fff8e8" stroke="#002329" strokeWidth="1.5" />
      {/* Dollar / currency symbol with circuit */}
      <circle cx="24" cy="24" r="11" fill="none" stroke="#002329" strokeWidth="2" />
      <text x="24" y="29" textAnchor="middle" fill="#002329" fontSize="14" fontFamily="Inter, sans-serif" fontWeight="700">$</text>
      {/* Circuit nodes */}
      <circle cx="24" cy="10" r="2.5" fill="#ce2124" />
      <circle cx="24" cy="38" r="2.5" fill="#ce2124" />
      <circle cx="10" cy="24" r="2.5" fill="#ce2124" />
      <circle cx="38" cy="24" r="2.5" fill="#ce2124" />
    </svg>
  );
}
