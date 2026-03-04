export default function StepImplement() {
  return (
    <svg
      viewBox="0 0 560 380"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Gear 1 — large, dark teal */}
      <g transform="translate(180, 180)">
        <circle cx="0" cy="0" r="80" fill="#002329" />
        <circle cx="0" cy="0" r="36" fill="#f5f5f5" />
        <circle cx="0" cy="0" r="12" fill="#ce2124" />
        {Array.from({ length: 10 }, (_, i) => {
          const angle = (i / 10) * Math.PI * 2;
          const x1 = Math.cos(angle) * 78;
          const y1 = Math.sin(angle) * 78;
          const x2 = Math.cos(angle) * 97;
          const y2 = Math.sin(angle) * 97;
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#002329" strokeWidth="10" strokeLinecap="round" />
          );
        })}
      </g>

      {/* Gear 2 — medium, green */}
      <g transform="translate(340, 140)">
        <circle cx="0" cy="0" r="52" fill="#ce2124" />
        <circle cx="0" cy="0" r="21" fill="#f5f5f5" />
        <circle cx="0" cy="0" r="9" fill="#002329" />
        {Array.from({ length: 8 }, (_, i) => {
          const angle = (i / 8) * Math.PI * 2 + Math.PI / 8;
          const x1 = Math.cos(angle) * 50;
          const y1 = Math.sin(angle) * 50;
          const x2 = Math.cos(angle) * 65;
          const y2 = Math.sin(angle) * 65;
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#ce2124" strokeWidth="8" strokeLinecap="round" />
          );
        })}
      </g>

      {/* Gear 3 — small, light */}
      <g transform="translate(360, 260)">
        <circle cx="0" cy="0" r="36" fill="#fff8e8" stroke="#002329" strokeWidth="1.5" />
        <circle cx="0" cy="0" r="14" fill="#ffffff" />
        <circle cx="0" cy="0" r="6" fill="#002329" />
        {Array.from({ length: 7 }, (_, i) => {
          const angle = (i / 7) * Math.PI * 2;
          const x1 = Math.cos(angle) * 35;
          const y1 = Math.sin(angle) * 35;
          const x2 = Math.cos(angle) * 46;
          const y2 = Math.sin(angle) * 46;
          return (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#002329" strokeWidth="6" strokeLinecap="round" opacity="0.6" />
          );
        })}
      </g>

      {/* Deploy arrow */}
      <g transform="translate(430, 180)">
        <line x1="0" y1="0" x2="80" y2="0" stroke="#ce2124" strokeWidth="3" strokeLinecap="round" />
        <polygon points="80,0 68,-9 68,9" fill="#ce2124" />
        <circle cx="0" cy="0" r="6" fill="#002329" />
        <circle cx="40" cy="0" r="4" fill="#ce2124" opacity="0.6" />
      </g>

      {/* Label */}
      <text x="280" y="358" textAnchor="middle" fill="#737373" fontSize="24" fontFamily="Inter, sans-serif">
        Build · Deploy · Integrate
      </text>
    </svg>
  );
}
