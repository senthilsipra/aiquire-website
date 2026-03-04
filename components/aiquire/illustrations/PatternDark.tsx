// Subtle circuit/node pattern for dark teal (#002329) sections
// Rendered as an absolute-positioned overlay; parent must be position:relative
export default function PatternDark() {
  return (
    <svg
      viewBox="0 0 1200 300"
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
      className="absolute inset-0 pointer-events-none"
    >
      {/* Horizontal circuit rails */}
      <g stroke="#ffffff" strokeWidth="0.5" opacity="0.06">
        {[50, 100, 150, 200, 250].map((y) => (
          <line key={y} x1="0" y1={y} x2="1200" y2={y} />
        ))}
        {Array.from({ length: 13 }, (_, i) => (
          <line key={i} x1={i * 100} y1="0" x2={i * 100} y2="300" />
        ))}
      </g>

      {/* Node dots at intersections */}
      <g fill="#ffffff" opacity="0.08">
        {[50, 100, 150, 200, 250].flatMap((y) =>
          Array.from({ length: 13 }, (_, i) => (
            <circle key={`${y}-${i}`} cx={i * 100} cy={y} r="2.5" />
          ))
        )}
      </g>

      {/* Accent nodes */}
      <g fill="#ce2124" opacity="0.15">
        <circle cx="200" cy="100" r="5" />
        <circle cx="500" cy="200" r="5" />
        <circle cx="800" cy="100" r="5" />
        <circle cx="1100" cy="150" r="5" />
      </g>

      {/* Accent connection lines */}
      <g stroke="#ce2124" strokeWidth="0.75" opacity="0.1">
        <line x1="200" y1="100" x2="500" y2="200" />
        <line x1="500" y1="200" x2="800" y2="100" />
        <line x1="800" y1="100" x2="1100" y2="150" />
      </g>
    </svg>
  );
}
