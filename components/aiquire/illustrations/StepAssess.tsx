export default function StepAssess() {
  return (
    <svg
      viewBox="0 0 560 380"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Background grid */}
      <g stroke="#f0f0f0" strokeWidth="1">
        {Array.from({ length: 8 }, (_, i) => (
          <line key={`h${i}`} x1="40" y1={50 + i * 40} x2="520" y2={50 + i * 40} />
        ))}
        {Array.from({ length: 7 }, (_, i) => (
          <line key={`v${i}`} x1={80 + i * 65} y1="50" x2={80 + i * 65} y2="330" />
        ))}
      </g>

      {/* Scatter plot data points */}
      <g fill="#e5e5e5">
        {[
          [120, 280], [160, 240], [180, 260], [200, 200], [220, 220],
          [260, 180], [300, 160], [320, 200], [360, 140], [400, 120],
          [420, 150], [440, 110], [460, 130],
        ].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={7} />
        ))}
      </g>

      {/* Highlighted cluster */}
      <g fill="#002329" opacity="0.7">
        {[[300, 160], [320, 200], [360, 140]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={9} />
        ))}
      </g>
      <g fill="#ce2124">
        {[[400, 120], [440, 110]].map(([x, y]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={11} />
        ))}
      </g>

      {/* Trend line */}
      <line x1="120" y1="290" x2="460" y2="100" stroke="#002329" strokeWidth="2" strokeDasharray="6 3" opacity="0.3" />

      {/* Magnifying glass */}
      <circle cx="360" cy="210" r="84" fill="none" stroke="#002329" strokeWidth="4" />
      <circle cx="360" cy="210" r="84" fill="#002329" opacity="0.04" />
      <line x1="424" y1="274" x2="482" y2="332" stroke="#002329" strokeWidth="7" strokeLinecap="round" />
      {/* Inner lens glare */}
      <circle cx="338" cy="185" r="25" fill="none" stroke="#ce2124" strokeWidth="2" opacity="0.4" />

      {/* Axis labels */}
      <text x="280" y="358" textAnchor="middle" fill="#737373" fontSize="24" fontFamily="Inter, sans-serif">
        AI Readiness Score
      </text>
      <text x="25" y="190" textAnchor="middle" fill="#737373" fontSize="24" fontFamily="Inter, sans-serif" transform="rotate(-90, 25, 190)">
        Opportunity
      </text>
    </svg>
  );
}
