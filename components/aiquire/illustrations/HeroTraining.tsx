export default function HeroTraining() {
  // Neural network visualization: 4 layers
  const layers = [
    { x: 160, nodes: [60, 110, 160, 210, 260] },
    { x: 380, nodes: [80, 140, 200, 260] },
    { x: 600, nodes: [90, 155, 220] },
    { x: 820, nodes: [80, 140, 200, 260] },
    { x: 1040, nodes: [90, 140, 190] },
  ];

  // Active (highlighted) connections
  const activeConnections = [
    { x1: 160, y1: 160, x2: 380, y2: 140 },
    { x1: 380, y1: 140, x2: 600, y2: 155 },
    { x1: 600, y1: 155, x2: 820, y2: 140 },
    { x1: 820, y1: 140, x2: 1040, y2: 140 },
  ];

  return (
    <svg
      viewBox="0 0 1200 280"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* All connections (dim) */}
      <g stroke="#e5e5e5" strokeWidth="0.75" fill="none">
        {layers.slice(0, -1).map((layer, li) =>
          layer.nodes.flatMap((y1) =>
            layers[li + 1].nodes.map((y2) => (
              <line
                key={`${li}-${y1}-${y2}`}
                x1={layer.x}
                y1={y1}
                x2={layers[li + 1].x}
                y2={y2}
              />
            ))
          )
        )}
      </g>

      {/* Active path connections */}
      <g stroke="#ce2124" strokeWidth="1.5" fill="none" opacity="0.7">
        {activeConnections.map((c, i) => (
          <line key={i} x1={c.x1} y1={c.y1} x2={c.x2} y2={c.y2} />
        ))}
      </g>

      {/* All nodes (dim) */}
      {layers.map((layer) =>
        layer.nodes.map((y) => (
          <circle
            key={`${layer.x}-${y}`}
            cx={layer.x}
            cy={y}
            r={8}
            fill="#ffffff"
            stroke="#e5e5e5"
            strokeWidth="1.5"
          />
        ))
      )}

      {/* Active nodes (highlighted) */}
      {[
        { x: 160, y: 160 },
        { x: 380, y: 140 },
        { x: 600, y: 155 },
        { x: 820, y: 140 },
        { x: 1040, y: 140 },
      ].map((n) => (
        <g key={`${n.x}-${n.y}`}>
          <circle cx={n.x} cy={n.y} r={8} fill="#002329" />
          <circle cx={n.x} cy={n.y} r={4} fill="#ce2124" />
          <circle cx={n.x} cy={n.y} r={14} fill="none" stroke="#ce2124" strokeWidth="0.75" opacity="0.4" />
        </g>
      ))}

      {/* Layer labels */}
      {["Input", "Hidden", "Process", "Hidden", "Output"].map((label, i) => (
        <text
          key={label + i}
          x={layers[i].x}
          y={280}
          textAnchor="middle"
          fill="#737373"
          fontSize="10"
          fontFamily="Inter, sans-serif"
          letterSpacing="0.05em"
        >
          {label}
        </text>
      ))}
    </svg>
  );
}
