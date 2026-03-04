export default function StepPrototype() {
  return (
    <svg
      viewBox="0 0 560 380"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Wireframe stack — staggered boxes creating depth */}

      {/* Back frame */}
      <rect x="140" y="100" width="300" height="200" rx="12" fill="none" stroke="#e5e5e5" strokeWidth="1.5" strokeDasharray="6 4" />

      {/* Mid frame */}
      <rect x="120" y="115" width="300" height="200" rx="12" fill="none" stroke="#002329" strokeWidth="1.5" strokeDasharray="5 3" opacity="0.4" />

      {/* Front frame (main wireframe) */}
      <rect x="100" y="130" width="300" height="200" rx="12" fill="#ffffff" stroke="#002329" strokeWidth="2" />

      {/* Wireframe elements inside */}
      {/* Header bar */}
      <rect x="116" y="148" width="268" height="24" rx="6" fill="#fff8e8" stroke="#002329" strokeWidth="1" opacity="0.8" />

      {/* Image placeholder */}
      <rect x="116" y="184" width="120" height="80" rx="6" fill="#f5f5f5" stroke="#e5e5e5" strokeWidth="1" />
      <line x1="116" y1="184" x2="236" y2="264" stroke="#e5e5e5" strokeWidth="1" />
      <line x1="236" y1="184" x2="116" y2="264" stroke="#e5e5e5" strokeWidth="1" />

      {/* Text lines */}
      <rect x="252" y="188" width="120" height="8" rx="3" fill="#e5e5e5" />
      <rect x="252" y="206" width="100" height="8" rx="3" fill="#e5e5e5" />
      <rect x="252" y="224" width="110" height="8" rx="3" fill="#e5e5e5" />

      {/* CTA button placeholder */}
      <rect x="116" y="278" width="120" height="28" rx="14" fill="#ce2124" />
      <rect x="252" y="278" width="80" height="28" rx="14" fill="none" stroke="#002329" strokeWidth="1.5" />

      {/* Iteration arrows */}
      <path
        d="M 440 200 C 480 160, 480 240, 440 280"
        fill="none"
        stroke="#ce2124"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <polygon points="440,280 434,265 448,268" fill="#ce2124" />
      <text x="462" y="235" textAnchor="middle" fill="#737373" fontSize="10" fontFamily="Inter, sans-serif">
        iterate
      </text>

      {/* Label */}
      <text x="280" y="360" textAnchor="middle" fill="#737373" fontSize="12" fontFamily="Inter, sans-serif">
        Build · Show · Iterate
      </text>
    </svg>
  );
}
