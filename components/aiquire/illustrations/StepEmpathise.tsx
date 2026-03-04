export default function StepEmpathise() {
  return (
    <svg
      viewBox="0 0 560 380"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Human figure — abstract geometric */}
      {/* Head */}
      <circle cx="280" cy="100" r="36" fill="#fff8e8" stroke="#002329" strokeWidth="2" />
      <circle cx="280" cy="100" r="16" fill="#002329" />
      <circle cx="280" cy="100" r="6" fill="#ce2124" />

      {/* Body */}
      <rect x="252" y="136" width="56" height="80" rx="12" fill="#002329" />

      {/* Arms */}
      <line x1="252" y1="155" x2="200" y2="195" stroke="#002329" strokeWidth="10" strokeLinecap="round" />
      <line x1="308" y1="155" x2="360" y2="195" stroke="#002329" strokeWidth="10" strokeLinecap="round" />

      {/* Thought bubbles */}
      <g opacity="0.8">
        {/* Bubble 1 */}
        <circle cx="380" cy="60" r="35" fill="#fff8e8" stroke="#002329" strokeWidth="1.5" />
        <circle cx="358" cy="95" r="8" fill="#fff8e8" stroke="#002329" strokeWidth="1" />
        <circle cx="345" cy="112" r="5" fill="#fff8e8" stroke="#002329" strokeWidth="1" />
        <circle cx="338" cy="124" r="3" fill="#fff8e8" stroke="#002329" strokeWidth="1" />
        {/* Icon inside bubble 1 */}
        <text x="380" y="66" textAnchor="middle" dominantBaseline="middle" fontSize="20" fill="#002329">?</text>
      </g>

      <g opacity="0.6">
        {/* Bubble 2 */}
        <circle cx="460" cy="130" r="28" fill="#ce2124" opacity="0.3" stroke="#002329" strokeWidth="1" />
        <circle cx="438" cy="155" r="6" fill="#e5e5e5" stroke="#002329" strokeWidth="0.75" />
        <circle cx="428" cy="165" r="4" fill="#e5e5e5" stroke="#002329" strokeWidth="0.75" />
        <text x="460" y="134" textAnchor="middle" dominantBaseline="middle" fontSize="16" fill="#002329">!</text>
      </g>

      <g opacity="0.5">
        {/* Bubble 3 */}
        <circle cx="160" cy="80" r="24" fill="#fff8e8" stroke="#002329" strokeWidth="1" />
        <circle cx="184" cy="104" r="6" fill="#fff8e8" stroke="#002329" strokeWidth="1" />
        <circle cx="195" cy="117" r="4" fill="#fff8e8" stroke="#002329" strokeWidth="1" />
        <text x="160" y="84" textAnchor="middle" dominantBaseline="middle" fontSize="14" fill="#002329">…</text>
      </g>

      {/* Label */}
      <text x="280" y="360" textAnchor="middle" fill="#737373" fontSize="12" fontFamily="Inter, sans-serif">
        Listen · Observe · Understand
      </text>
    </svg>
  );
}
