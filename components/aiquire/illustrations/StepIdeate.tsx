export default function StepIdeate() {
  return (
    <svg
      viewBox="0 0 560 380"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Lightbulb outline */}
      {/* Bulb */}
      <path
        d="M 280 80
           C 220 80, 180 125, 180 175
           C 180 210, 198 238, 228 255
           L 228 285
           L 332 285
           L 332 255
           C 362 238, 380 210, 380 175
           C 380 125, 340 80, 280 80 Z"
        fill="#fff8e8"
        stroke="#002329"
        strokeWidth="2"
      />
      {/* Base rings */}
      <rect x="228" y="285" width="104" height="18" rx="6" fill="#002329" opacity="0.8" />
      <rect x="236" y="305" width="88" height="16" rx="5" fill="#002329" opacity="0.6" />
      <rect x="244" y="323" width="72" height="14" rx="4" fill="#ce2124" />

      {/* Circuit node pattern inside bulb */}
      <g opacity="0.6">
        <circle cx="280" cy="175" r="8" fill="#002329" />
        <circle cx="240" cy="160" r="5" fill="#002329" opacity="0.5" />
        <circle cx="320" cy="160" r="5" fill="#002329" opacity="0.5" />
        <circle cx="255" cy="200" r="5" fill="#002329" opacity="0.5" />
        <circle cx="305" cy="200" r="5" fill="#002329" opacity="0.5" />
        <circle cx="280" cy="215" r="5" fill="#ce2124" />
        <line x1="280" y1="175" x2="240" y2="160" stroke="#002329" strokeWidth="1" />
        <line x1="280" y1="175" x2="320" y2="160" stroke="#002329" strokeWidth="1" />
        <line x1="280" y1="175" x2="255" y2="200" stroke="#002329" strokeWidth="1" />
        <line x1="280" y1="175" x2="305" y2="200" stroke="#002329" strokeWidth="1" />
        <line x1="255" y1="200" x2="280" y2="215" stroke="#002329" strokeWidth="1" />
        <line x1="305" y1="200" x2="280" y2="215" stroke="#002329" strokeWidth="1" />
      </g>

      {/* Spark lines radiating from bulb */}
      <g stroke="#ce2124" strokeWidth="1.5" strokeLinecap="round" opacity="0.7">
        <line x1="150" y1="120" x2="172" y2="140" />
        <line x1="140" y1="170" x2="168" y2="174" />
        <line x1="410" y1="120" x2="388" y2="140" />
        <line x1="420" y1="170" x2="392" y2="174" />
        <line x1="280" y1="50" x2="280" y2="72" />
      </g>

      {/* Label */}
      <text x="280" y="360" textAnchor="middle" fill="#737373" fontSize="12" fontFamily="Inter, sans-serif">
        Generate · Explore · Innovate
      </text>
    </svg>
  );
}
