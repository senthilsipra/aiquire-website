export default function HeroIndustries() {
  const buildings = [
    { x: 80, w: 60, h: 160 },
    { x: 160, w: 80, h: 100 },
    { x: 260, w: 50, h: 200 },
    { x: 330, w: 70, h: 130 },
    { x: 420, w: 90, h: 180 },
    { x: 530, w: 55, h: 240 },
    { x: 605, w: 75, h: 110 },
    { x: 700, w: 60, h: 170 },
    { x: 780, w: 85, h: 140 },
    { x: 885, w: 55, h: 200 },
    { x: 960, w: 70, h: 120 },
    { x: 1050, w: 60, h: 180 },
    { x: 1130, w: 40, h: 100 },
  ];

  const baseY = 250;
  const colors = ["#fff8e8", "#002329", "#e5e5e5", "#ce2124", "#fff8e8", "#002329", "#e5e5e5"];

  return (
    <svg
      viewBox="0 0 1200 280"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Ground grid */}
      <g stroke="#f0f0f0" strokeWidth="0.75">
        <line x1="0" y1="250" x2="1200" y2="250" />
        {Array.from({ length: 13 }, (_, i) => (
          <line key={i} x1={i * 100} y1="200" x2={i * 100} y2="260" />
        ))}
      </g>

      {/* Circuit lines at base */}
      <g stroke="#e5e5e5" strokeWidth="1">
        <line x1="0" y1="260" x2="1200" y2="260" />
        <line x1="0" y1="270" x2="1200" y2="270" />
      </g>
      <g fill="#e5e5e5">
        {[100, 200, 300, 400, 500, 600, 700, 800, 900, 1000, 1100].map((x) => (
          <circle key={x} cx={x} cy="265" r="2.5" />
        ))}
      </g>

      {/* Buildings */}
      {buildings.map((b, i) => (
        <g key={i}>
          <rect
            x={b.x}
            y={baseY - b.h}
            width={b.w}
            height={b.h}
            rx={4}
            ry={4}
            fill={colors[i % colors.length]}
            stroke="#e5e5e5"
            strokeWidth="1"
            opacity={colors[i % colors.length] === "#002329" ? 0.9 : 0.7}
          />
          {/* Window grid on taller buildings */}
          {b.h > 130 && (
            <g fill="none" stroke={colors[i % colors.length] === "#002329" ? "#ffffff" : "#002329"} strokeWidth="0.5" opacity="0.3">
              {Array.from({ length: Math.floor(b.h / 30) }, (_, r) =>
                Array.from({ length: Math.floor(b.w / 20) }, (_, c) => (
                  <rect
                    key={`${r}-${c}`}
                    x={b.x + 6 + c * 20}
                    y={baseY - b.h + 10 + r * 28}
                    width={10}
                    height={16}
                    rx={1}
                  />
                ))
              )}
            </g>
          )}
        </g>
      ))}

      {/* Accent nodes on rooftops */}
      <circle cx={80 + 30} cy={baseY - 160} r="4" fill="#ce2124" />
      <circle cx={530 + 27} cy={baseY - 240} r="5" fill="#ce2124" />
      <circle cx={885 + 27} cy={baseY - 200} r="4" fill="#ce2124" />
    </svg>
  );
}
