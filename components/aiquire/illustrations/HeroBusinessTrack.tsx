export default function HeroBusinessTrack() {
  return (
    <svg
      viewBox="0 0 1200 280"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Root node */}
      <circle cx="600" cy="40" r="22" fill="#002329" />
      <circle cx="600" cy="40" r="10" fill="#ce2124" />
      <circle cx="600" cy="40" r="32" fill="none" stroke="#002329" strokeWidth="1" opacity="0.2" />

      {/* Level 1 connections */}
      <g stroke="#e5e5e5" strokeWidth="1.5">
        <line x1="600" y1="62" x2="280" y2="120" />
        <line x1="600" y1="62" x2="600" y2="120" />
        <line x1="600" y1="62" x2="920" y2="120" />
      </g>

      {/* Level 1 nodes */}
      {[280, 600, 920].map((x) => (
        <g key={x}>
          <circle cx={x} cy="140" r="18" fill="#fff8e8" stroke="#002329" strokeWidth="1.5" />
          <circle cx={x} cy="140" r="8" fill="#002329" />
        </g>
      ))}

      {/* Level 2 connections */}
      <g stroke="#e5e5e5" strokeWidth="1">
        <line x1="280" y1="158" x2="120" y2="210" />
        <line x1="280" y1="158" x2="280" y2="210" />
        <line x1="280" y1="158" x2="440" y2="210" />
        <line x1="600" y1="158" x2="540" y2="210" />
        <line x1="600" y1="158" x2="660" y2="210" />
        <line x1="920" y1="158" x2="780" y2="210" />
        <line x1="920" y1="158" x2="920" y2="210" />
        <line x1="920" y1="158" x2="1060" y2="210" />
      </g>

      {/* Level 2 nodes */}
      {[120, 280, 440, 540, 660, 780, 920, 1060].map((x, i) => (
        <g key={x}>
          <rect
            x={x - 28}
            y={210}
            width={56}
            height={28}
            rx={8}
            fill={i % 3 === 0 ? "#ce2124" : "#fff8e8"}
            stroke="#002329"
            strokeWidth="1"
            opacity="0.8"
          />
          <circle cx={x} cy={210} r={4} fill="#002329" />
        </g>
      ))}

      {/* Level 2 label boxes */}
      <g fill="#002329" fontSize="8" fontFamily="Inter, sans-serif" textAnchor="middle" dominantBaseline="middle">
        {[
          { x: 120, label: "Strategy" },
          { x: 280, label: "Planning" },
          { x: 440, label: "Execution" },
          { x: 540, label: "Training" },
          { x: 660, label: "Adoption" },
          { x: 780, label: "Metrics" },
          { x: 920, label: "Scaling" },
          { x: 1060, label: "Govern" },
        ].map((n) => (
          <text key={n.x} x={n.x} y={224}>
            {n.label}
          </text>
        ))}
      </g>

      {/* Root label */}
      <text x="600" y="82" textAnchor="middle" fill="#737373" fontSize="10" fontFamily="Inter, sans-serif">
        Business Track
      </text>
    </svg>
  );
}
