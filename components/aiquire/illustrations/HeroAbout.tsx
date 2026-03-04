export default function HeroAbout() {
  // Five hexagons representing Design Thinking stages
  const stages = [
    { label: "Empathise", x: 150, color: "#fff8e8", stroke: "#002329", textColor: "#002329" },
    { label: "Define", x: 330, color: "#fff8e8", stroke: "#002329", textColor: "#002329" },
    { label: "Ideate", x: 510, color: "#002329", stroke: "#002329", textColor: "#ffffff" },
    { label: "Prototype", x: 690, color: "#fff8e8", stroke: "#002329", textColor: "#002329" },
    { label: "Test", x: 870, color: "#ce2124", stroke: "#002329", textColor: "#002329" },
  ];

  const hexPath = (cx: number, cy: number, r: number) => {
    const pts = Array.from({ length: 6 }, (_, i) => {
      const angle = (Math.PI / 180) * (60 * i - 30);
      return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
    });
    return `M ${pts.join(" L ")} Z`;
  };

  const cy = 140;
  const r = 90;

  return (
    <svg
      viewBox="0 0 1200 280"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Connecting lines between hexagons */}
      <g stroke="#e5e5e5" strokeWidth="1" fill="none">
        {stages.slice(0, 4).map((s, i) => (
          <line
            key={i}
            x1={s.x + r * Math.cos(0)}
            y1={cy}
            x2={stages[i + 1].x - r * Math.cos(0)}
            y2={cy}
          />
        ))}
      </g>

      {/* Hexagons */}
      {stages.map((s) => (
        <g key={s.label}>
          <path
            d={hexPath(s.x, cy, r)}
            fill={s.color}
            stroke={s.stroke}
            strokeWidth="1.5"
            opacity={s.color === "#002329" ? 1 : 0.9}
          />
          <text
            x={s.x}
            y={cy - 10}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={s.textColor}
            fontSize="13"
            fontFamily="Inter, sans-serif"
            fontWeight="500"
            letterSpacing="0.05em"
          >
            0{stages.indexOf(s) + 1}
          </text>
          <text
            x={s.x}
            y={cy + 12}
            textAnchor="middle"
            dominantBaseline="middle"
            fill={s.textColor}
            fontSize="14"
            fontFamily="Inter, sans-serif"
            fontWeight="600"
          >
            {s.label}
          </text>
        </g>
      ))}

      {/* Decorative nodes at edges */}
      <circle cx="60" cy="140" r="4" fill="#e5e5e5" />
      <circle cx="1140" cy="140" r="4" fill="#e5e5e5" />
      <line x1="60" y1="140" x2={stages[0].x - r} y2={140} stroke="#e5e5e5" strokeWidth="1" />
      <line x1={stages[4].x + r} y1={140} x2="1140" y2={140} stroke="#e5e5e5" strokeWidth="1" />
    </svg>
  );
}
