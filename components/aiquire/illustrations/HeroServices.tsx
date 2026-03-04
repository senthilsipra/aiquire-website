export default function HeroServices() {
  const pillars = [
    { label: "AI Strategy", height: 180, x: 160, color: "#002329" },
    { label: "AI Productivity", height: 140, x: 340, color: "#fff8e8", stroke: "#002329" },
    { label: "Customer & Revenue", height: 220, x: 520, color: "#ce2124" },
    { label: "Operations AI", height: 160, x: 700, color: "#fff8e8", stroke: "#002329" },
    { label: "AI Governance", height: 120, x: 880, color: "#002329" },
  ];

  const baseY = 240;
  const w = 100;
  const r = 12;

  return (
    <svg
      viewBox="0 0 1200 280"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Grid lines */}
      <g stroke="#f0f0f0" strokeWidth="1">
        {[60, 100, 140, 180, 220].map((y) => (
          <line key={y} x1="60" y1={y} x2="1140" y2={y} />
        ))}
      </g>

      {/* Connector at top between pillars */}
      <g stroke="#e5e5e5" strokeWidth="1" fill="none">
        {pillars.slice(0, 4).map((p, i) => (
          <line
            key={i}
            x1={p.x + w / 2}
            y1={baseY - p.height}
            x2={pillars[i + 1].x + w / 2}
            y2={baseY - pillars[i + 1].height}
          />
        ))}
      </g>

      {/* Pillars */}
      {pillars.map((p) => (
        <g key={p.label}>
          <rect
            x={p.x}
            y={baseY - p.height}
            width={w}
            height={p.height}
            rx={r}
            ry={r}
            fill={p.color}
            stroke={p.stroke || "none"}
            strokeWidth={p.stroke ? "1.5" : 0}
            opacity={p.color === "#fff8e8" ? 0.9 : 1}
          />
          {/* Node dot at top of each pillar */}
          <circle
            cx={p.x + w / 2}
            cy={baseY - p.height}
            r={6}
            fill={p.color === "#fff8e8" ? "#002329" : p.color === "#ce2124" ? "#002329" : "#ce2124"}
          />
          {/* Label */}
          <text
            x={p.x + w / 2}
            y={baseY - p.height / 2}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={p.color === "#fff8e8" ? "#002329" : "#ffffff"}
            fontSize="10"
            fontFamily="Inter, sans-serif"
            fontWeight="500"
            transform={`rotate(-90, ${p.x + w / 2}, ${baseY - p.height / 2})`}
          >
            {p.label}
          </text>
        </g>
      ))}

      {/* Decorative side nodes */}
      <circle cx="60" cy="240" r="4" fill="#e5e5e5" />
      <circle cx="1140" cy="240" r="4" fill="#e5e5e5" />
      <line x1="60" y1="240" x2="160" y2="240" stroke="#e5e5e5" strokeWidth="1" />
      <line x1="980" y1="240" x2="1140" y2="240" stroke="#e5e5e5" strokeWidth="1" />
    </svg>
  );
}
