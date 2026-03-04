export default function IconProductivity() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      {/* Rocket */}
      <circle cx="24" cy="24" r="20" fill="#fff8e8" stroke="#002329" strokeWidth="1.5" />
      {/* Rocket body */}
      <path d="M24 10 C20 16, 18 22, 18 28 L24 34 L30 28 C30 22, 28 16, 24 10Z" fill="#002329" />
      {/* Window */}
      <circle cx="24" cy="22" r="3.5" fill="#ce2124" />
      {/* Fins */}
      <path d="M18 28 L13 35 L18 33Z" fill="#002329" opacity="0.5" />
      <path d="M30 28 L35 35 L30 33Z" fill="#002329" opacity="0.5" />
      {/* Flame */}
      <ellipse cx="24" cy="36" rx="4" ry="6" fill="#ce2124" opacity="0.7" />
      <ellipse cx="24" cy="37" rx="2.5" ry="4" fill="#ffffff" opacity="0.5" />
    </svg>
  );
}
