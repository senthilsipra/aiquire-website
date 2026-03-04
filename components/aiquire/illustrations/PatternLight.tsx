// Subtle dot grid pattern for light grey (#f5f5f5) sections
// Rendered as an absolute-positioned overlay; parent must be position:relative
export default function PatternLight() {
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
      {/* Dot grid */}
      <g fill="#002329" opacity="0.05">
        {Array.from({ length: 10 }, (_, row) =>
          Array.from({ length: 25 }, (_, col) => (
            <circle key={`${row}-${col}`} cx={col * 50} cy={row * 34} r="2" />
          ))
        )}
      </g>

      {/* Subtle diagonal lines */}
      <g stroke="#002329" strokeWidth="0.5" opacity="0.04">
        {Array.from({ length: 8 }, (_, i) => (
          <line key={i} x1={i * 200 - 100} y1="0" x2={i * 200 + 200} y2="300" />
        ))}
      </g>
    </svg>
  );
}
