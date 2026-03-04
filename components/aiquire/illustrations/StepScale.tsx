export default function StepScale() {
  const rings = [33, 72, 112, 155, 195];

  return (
    <svg
      viewBox="0 0 560 380"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Concentric rings */}
      {rings.map((r, i) => (
        <circle
          key={r}
          cx="280"
          cy="185"
          r={r}
          fill="none"
          stroke={i === 0 ? "#ce2124" : i === 1 ? "#002329" : "#e5e5e5"}
          strokeWidth={i === 0 ? 3 : i === 1 ? 2.5 : 1.5}
          opacity={i === 0 ? 1 : i === 1 ? 0.6 : 0.3 + 0.05 * i}
          strokeDasharray={i > 1 ? "4 3" : "none"}
        />
      ))}

      {/* Core node */}
      <circle cx="280" cy="185" r="25" fill="#002329" />
      <circle cx="280" cy="185" r="10" fill="#ce2124" />

      {/* Satellite nodes on rings */}
      {[
        { r: 72, angle: 0 },
        { r: 72, angle: 120 },
        { r: 72, angle: 240 },
        { r: 112, angle: 60 },
        { r: 112, angle: 180 },
        { r: 112, angle: 300 },
        { r: 155, angle: 30 },
        { r: 155, angle: 150 },
        { r: 155, angle: 270 },
      ].map(({ r, angle }, i) => {
        const rad = (angle * Math.PI) / 180;
        const cx = 280 + r * Math.cos(rad);
        const cy = 185 + r * Math.sin(rad);
        return (
          <g key={i}>
            <circle
              cx={cx}
              cy={cy}
              r={r === 72 ? 10 : r === 112 ? 7 : 6}
              fill={r === 72 ? "#002329" : r === 112 ? "#fff8e8" : "#e5e5e5"}
              stroke={r === 72 ? "none" : "#002329"}
              strokeWidth="1"
            />
            {r === 72 && <circle cx={cx} cy={cy} r={4} fill="#ce2124" />}
          </g>
        );
      })}

      {/* Upward arrows indicating growth */}
      <g stroke="#ce2124" strokeWidth="2" fill="none" opacity="0.5">
        <line x1="460" y1="260" x2="460" y2="120" />
        <polygon points="460,115 453,132 467,132" fill="#ce2124" stroke="none" />
        <line x1="492" y1="280" x2="492" y2="155" />
        <polygon points="492,150 485,167 499,167" fill="#ce2124" stroke="none" />
        <line x1="524" y1="300" x2="524" y2="195" />
        <polygon points="524,190 517,207 531,207" fill="#ce2124" stroke="none" />
      </g>

      {/* Label */}
      <text x="280" y="358" textAnchor="middle" fill="#737373" fontSize="24" fontFamily="Inter, sans-serif">
        Optimise · Expand · Compound
      </text>
    </svg>
  );
}
