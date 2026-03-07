export default function IconStrategy() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Compass */}
      <circle cx="24" cy="24" r="20" fill="#ffffff" stroke="#002329" strokeWidth="1.5" />
      <circle cx="24" cy="24" r="3" fill="#002329" />
      {/* North needle */}
      <polygon points="24,6 21,24 27,24" fill="#ce2124" />
      {/* South needle */}
      <polygon points="24,42 21,24 27,24" fill="#002329" opacity="0.4" />
      {/* Cardinal ticks */}
      <line x1="24" y1="4" x2="24" y2="8" stroke="#002329" strokeWidth="1.5" />
      <line x1="44" y1="24" x2="40" y2="24" stroke="#002329" strokeWidth="1.5" />
      <line x1="24" y1="44" x2="24" y2="40" stroke="#002329" strokeWidth="1.5" />
      <line x1="4" y1="24" x2="8" y2="24" stroke="#002329" strokeWidth="1.5" />
    </svg>
  );
}
