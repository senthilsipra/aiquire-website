export default function IconManufacturing() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="#fff8e8" stroke="#002329" strokeWidth="1.5" />
      {/* Factory silhouette */}
      <rect x="12" y="28" width="24" height="12" rx="1" fill="#002329" />
      {/* Chimneys */}
      <rect x="14" y="20" width="5" height="10" rx="1" fill="#002329" />
      <rect x="22" y="22" width="5" height="8" rx="1" fill="#002329" />
      {/* Smoke / signal */}
      <circle cx="16.5" cy="18" r="2" fill="#ce2124" opacity="0.7" />
      <circle cx="24.5" cy="19" r="2" fill="#ce2124" opacity="0.5" />
      {/* Windows */}
      <rect x="15" y="31" width="5" height="5" rx="1" fill="#ce2124" />
      <rect x="24" y="31" width="5" height="5" rx="1" fill="#ce2124" />
    </svg>
  );
}
