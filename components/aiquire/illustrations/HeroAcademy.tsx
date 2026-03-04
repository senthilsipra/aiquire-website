export default function HeroAcademy() {
  // People/team nodes growing in capability — circles with skill rings expanding outward
  const people = [
    { cx: 180, cy: 140, rings: [20, 35, 52], color: "#002329" },
    { cx: 380, cy: 180, rings: [20, 36, 56], color: "#ce2124" },
    { cx: 580, cy: 120, rings: [20, 38, 60], color: "#002329" },
    { cx: 780, cy: 170, rings: [20, 35, 54], color: "#ce2124" },
    { cx: 980, cy: 130, rings: [20, 37, 58], color: "#002329" },
  ];

  return (
    <svg
      viewBox="0 0 1200 280"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Connection lines between people nodes */}
      <g stroke="#e5e5e5" strokeWidth="1" fill="none">
        {people.slice(0, -1).map((p, i) => (
          <line
            key={i}
            x1={p.cx + people[i].rings[0]}
            y1={p.cy}
            x2={people[i + 1].cx - people[i + 1].rings[0]}
            y2={people[i + 1].cy}
          />
        ))}
      </g>

      {/* Accent path — learning pathway */}
      <path
        d={`M ${people.map((p) => `${p.cx},${p.cy}`).join(" L ")}`}
        fill="none"
        stroke="#ce2124"
        strokeWidth="1.5"
        strokeDasharray="5 4"
        opacity="0.4"
      />

      {/* Person nodes */}
      {people.map((p) => (
        <g key={p.cx}>
          {/* Outer capability rings */}
          {p.rings.map((r, ri) => (
            <circle
              key={r}
              cx={p.cx}
              cy={p.cy}
              r={r}
              fill="none"
              stroke={p.color}
              strokeWidth={ri === 0 ? 0 : 0.75}
              opacity={ri === 0 ? 0 : 0.1 + ri * 0.08}
              strokeDasharray={ri === 1 ? "3 3" : "none"}
            />
          ))}
          {/* Core person circle */}
          <circle cx={p.cx} cy={p.cy} r={20} fill={p.color} />
          {/* Head */}
          <circle cx={p.cx} cy={p.cy - 8} r={6} fill={p.color === "#ce2124" ? "#002329" : "#ce2124"} />
          {/* Body line */}
          <line
            x1={p.cx}
            y1={p.cy - 2}
            x2={p.cx}
            y2={p.cy + 10}
            stroke={p.color === "#ce2124" ? "#002329" : "#ce2124"}
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>
      ))}

      {/* Floating label badges */}
      {[
        { x: 130, y: 80, text: "Literacy" },
        { x: 330, y: 220, text: "Hands-On" },
        { x: 530, y: 70, text: "Champions" },
        { x: 730, y: 215, text: "Policy" },
        { x: 930, y: 75, text: "Governance" },
      ].map((badge) => (
        <g key={badge.text}>
          <rect
            x={badge.x}
            y={badge.y}
            width={80}
            height={22}
            rx={11}
            fill="#fff8e8"
            stroke="#002329"
            strokeWidth="1"
          />
          <text
            x={badge.x + 40}
            y={badge.y + 14}
            textAnchor="middle"
            fill="#002329"
            fontSize="9"
            fontFamily="Inter, sans-serif"
            fontWeight="600"
            letterSpacing="0.03em"
          >
            {badge.text}
          </text>
        </g>
      ))}

      {/* Growth arrow */}
      <g transform="translate(1100, 100)">
        <line x1="0" y1="60" x2="0" y2="10" stroke="#ce2124" strokeWidth="2" strokeLinecap="round" />
        <polygon points="0,6 -5,18 5,18" fill="#ce2124" />
        <text x="0" y="75" textAnchor="middle" fill="#737373" fontSize="9" fontFamily="Inter, sans-serif">Growth</text>
      </g>
    </svg>
  );
}
