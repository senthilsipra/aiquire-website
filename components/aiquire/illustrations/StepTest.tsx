export default function StepTest() {
  const results = [
    { label: "User Adoption", value: 87, color: "#ce2124" },
    { label: "Task Accuracy", value: 94, color: "#ce2124" },
    { label: "Time Savings", value: 72, color: "#002329" },
    { label: "ROI Signal", value: 81, color: "#002329" },
  ];

  return (
    <svg
      viewBox="0 0 560 380"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Node grid background */}
      <g fill="#f0f0f0">
        {Array.from({ length: 6 }, (_, row) =>
          Array.from({ length: 9 }, (_, col) => (
            <circle key={`${row}-${col}`} cx={70 + col * 60} cy={40 + row * 55} r="3" />
          ))
        )}
      </g>

      {/* Big checkmark */}
      <g transform="translate(280, 170)">
        <circle cx="0" cy="0" r="80" fill="#fff8e8" stroke="#002329" strokeWidth="2" />
        <polyline
          points="-35,5 -10,32 42,-28"
          fill="none"
          stroke="#002329"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      {/* Accent ring */}
      <circle cx="280" cy="170" r="92" fill="none" stroke="#ce2124" strokeWidth="1.5" opacity="0.4" />

      {/* Metric bars — bottom */}
      {results.map((r, i) => {
        const barW = (r.value / 100) * 200;
        const y = 295 + i * 0; // We'll use a different layout
        return null; // Will use cards instead
      })}

      {/* Metric cards — 2×2 grid around the checkmark */}
      {results.map((r, i) => {
        const positions = [
          { x: 60, y: 80 },
          { x: 380, y: 80 },
          { x: 60, y: 240 },
          { x: 380, y: 240 },
        ];
        const pos = positions[i];
        return (
          <g key={r.label} transform={`translate(${pos.x}, ${pos.y})`}>
            <rect x="0" y="0" width="110" height="60" rx="10" fill="#f5f5f5" stroke="#e5e5e5" strokeWidth="1" />
            <text x="55" y="22" textAnchor="middle" fill="#737373" fontSize="9" fontFamily="Inter, sans-serif">
              {r.label}
            </text>
            <text x="55" y="46" textAnchor="middle" fill={r.color} fontSize="22" fontFamily="Inter, sans-serif" fontWeight="700">
              {r.value}%
            </text>
          </g>
        );
      })}

      {/* Label */}
      <text x="280" y="360" textAnchor="middle" fill="#737373" fontSize="12" fontFamily="Inter, sans-serif">
        Measure · Validate · Refine
      </text>
    </svg>
  );
}
