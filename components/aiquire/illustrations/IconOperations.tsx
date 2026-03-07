export default function IconOperations() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="#ffffff" stroke="#002329" strokeWidth="1.5" />
      {/* Gear / cog */}
      <circle cx="24" cy="24" r="8" fill="#002329" />
      <circle cx="24" cy="24" r="3.5" fill="#ce2124" />
      {Array.from({ length: 8 }, (_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const x1 = 24 + 8 * Math.cos(angle);
        const y1 = 24 + 8 * Math.sin(angle);
        const x2 = 24 + 13 * Math.cos(angle);
        const y2 = 24 + 13 * Math.sin(angle);
        return (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#002329" strokeWidth="4" strokeLinecap="round" />
        );
      })}
    </svg>
  );
}
