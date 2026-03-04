export default function HeroPackages() {
  const tiers = [
    { label: "Starter Sprint", price: "$4K–6K", x: 150, stepH: 60, color: "#fff8e8", textColor: "#002329" },
    { label: "Jumpstart", price: "$12K–18K", x: 370, stepH: 110, color: "#fff8e8", textColor: "#002329" },
    { label: "Quick Win", price: "$15K–25K", x: 590, stepH: 160, color: "#002329", textColor: "#ffffff" },
    { label: "Transformation", price: "$40K–60K", x: 810, stepH: 220, color: "#ce2124", textColor: "#002329" },
  ];

  const baseY = 240;
  const w = 180;

  return (
    <svg
      viewBox="0 0 1200 280"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Ascending line connecting tier tops */}
      <polyline
        points={tiers.map((t) => `${t.x + w / 2},${baseY - t.stepH - 14}`).join(" ")}
        fill="none"
        stroke="#ce2124"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        opacity="0.6"
      />

      {/* Grid lines */}
      <g stroke="#f5f5f5" strokeWidth="1">
        {[80, 120, 160, 200].map((y) => (
          <line key={y} x1="80" y1={y} x2="1120" y2={y} />
        ))}
      </g>

      {/* Tier blocks */}
      {tiers.map((t) => (
        <g key={t.label}>
          <rect
            x={t.x}
            y={baseY - t.stepH}
            width={w}
            height={t.stepH}
            rx={12}
            ry={12}
            fill={t.color}
            stroke={t.color === "#fff8e8" ? "#002329" : "none"}
            strokeWidth="1"
            opacity={0.95}
          />
          {/* Label */}
          <text
            x={t.x + w / 2}
            y={baseY - t.stepH / 2 - 8}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={t.textColor}
            fontSize="12"
            fontFamily="Inter, sans-serif"
            fontWeight="600"
          >
            {t.label}
          </text>
          <text
            x={t.x + w / 2}
            y={baseY - t.stepH / 2 + 12}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={t.textColor}
            fontSize="11"
            fontFamily="Inter, sans-serif"
            opacity="0.75"
          >
            {t.price}
          </text>
          {/* Node at top */}
          <circle
            cx={t.x + w / 2}
            cy={baseY - t.stepH}
            r={6}
            fill={t.color === "#ce2124" ? "#002329" : "#ce2124"}
          />
        </g>
      ))}

      {/* Arrow at end */}
      <g transform={`translate(${tiers[3].x + w + 20}, ${baseY - tiers[3].stepH})`}>
        <line x1="0" y1="0" x2="40" y2="0" stroke="#002329" strokeWidth="1.5" opacity="0.4" />
        <polygon points="40,0 32,-5 32,5" fill="#002329" opacity="0.4" />
      </g>
    </svg>
  );
}
