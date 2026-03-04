export default function HeroEngineeringTrack() {
  const lines = [
    { y: 60, content: "const ai = await model.load();", indent: 0, highlight: false },
    { y: 95, content: "const pipeline = ai.createPipeline({", indent: 0, highlight: true },
    { y: 125, content: "model: 'claude-sonnet-4',", indent: 1, highlight: false },
    { y: 155, content: "tools: [...agentTools],", indent: 1, highlight: false },
    { y: 185, content: "stream: true,", indent: 1, highlight: true },
    { y: 215, content: "});", indent: 0, highlight: false },
    { y: 245, content: "await pipeline.run(context);", indent: 0, highlight: false },
  ];

  return (
    <svg
      viewBox="0 0 1200 280"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Terminal window frame */}
      <rect x="80" y="20" width="760" height="250" rx="12" fill="#002329" />
      {/* Window chrome */}
      <rect x="80" y="20" width="760" height="36" rx="12" fill="#001a1f" />
      <rect x="80" y="44" width="760" height="12" fill="#001a1f" />
      {/* Traffic lights */}
      <circle cx="108" cy="38" r="6" fill="#ff5f57" />
      <circle cx="128" cy="38" r="6" fill="#febc2e" />
      <circle cx="148" cy="38" r="6" fill="#28c840" />
      {/* Terminal title */}
      <text x="440" y="43" textAnchor="middle" fill="#737373" fontSize="11" fontFamily="Inter, monospace">
        engineering-track — claude-sdk
      </text>

      {/* Code lines */}
      {lines.map((line) => (
        <g key={line.y}>
          {line.highlight && (
            <rect x="96" y={line.y - 13} width="728" height="22" fill="#ffffff" opacity="0.05" rx="2" />
          )}
          {/* Line number */}
          <text
            x="112"
            y={line.y}
            fill="#404040"
            fontSize="11"
            fontFamily="monospace"
          >
            {lines.indexOf(line) + 1}
          </text>
          {/* Code text */}
          <text
            x={136 + line.indent * 20}
            y={line.y}
            fill={line.highlight ? "#ce2124" : "#9ca3af"}
            fontSize="11"
            fontFamily="monospace"
          >
            {line.content}
          </text>
        </g>
      ))}

      {/* Cursor blink */}
      <rect x="560" y="234" width="8" height="14" fill="#ce2124" opacity="0.9" rx="1" />

      {/* Side decorative nodes */}
      <g fill="#e5e5e5">
        {[60, 100, 140, 180, 220, 260].map((y) => (
          <circle key={y} cx="1060" cy={y} r="4" />
        ))}
      </g>
      <g stroke="#e5e5e5" strokeWidth="1">
        {[60, 100, 140, 180, 220].map((y) => (
          <line key={y} x1="1060" y1={y} x2="1060" y2={y + 40} />
        ))}
      </g>
      <g fill="#ce2124">
        <circle cx="1060" cy="140" r="6" />
      </g>

      {/* Far side nodes */}
      <g fill="#e5e5e5">
        {[80, 140, 200].map((y) => (
          <circle key={y} cx="1130" cy={y} r="3" />
        ))}
      </g>
      <line x1="1060" y1="140" x2="1130" y2="140" stroke="#ce2124" strokeWidth="1" opacity="0.5" />
      <line x1="1060" y1="60" x2="1130" y2="80" stroke="#e5e5e5" strokeWidth="1" opacity="0.4" />
      <line x1="1060" y1="260" x2="1130" y2="200" stroke="#e5e5e5" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}
