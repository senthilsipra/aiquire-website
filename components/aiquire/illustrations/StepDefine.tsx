export default function StepDefine() {
  return (
    <svg
      viewBox="0 0 560 380"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Outer rings */}
      <circle cx="280" cy="185" r="160" fill="none" stroke="#e5e5e5" strokeWidth="1" strokeDasharray="4 4" />
      <circle cx="280" cy="185" r="120" fill="none" stroke="#e5e5e5" strokeWidth="1" strokeDasharray="3 4" />
      <circle cx="280" cy="185" r="80" fill="none" stroke="#002329" strokeWidth="1.5" opacity="0.3" />
      <circle cx="280" cy="185" r="45" fill="#fff8e8" stroke="#002329" strokeWidth="2" />
      <circle cx="280" cy="185" r="20" fill="#002329" />
      <circle cx="280" cy="185" r="7" fill="#ce2124" />

      {/* Converging lines from edge to centre */}
      <g stroke="#002329" strokeWidth="1" opacity="0.2">
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => {
          const rad = (angle * Math.PI) / 180;
          return (
            <line
              key={angle}
              x1={280 + 160 * Math.cos(rad)}
              y1={185 + 160 * Math.sin(rad)}
              x2={280 + 45 * Math.cos(rad)}
              y2={185 + 45 * Math.sin(rad)}
            />
          );
        })}
      </g>

      {/* Cardinal nodes on outer ring */}
      {[0, 90, 180, 270].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <g key={angle}>
            <circle
              cx={280 + 160 * Math.cos(rad)}
              cy={185 + 160 * Math.sin(rad)}
              r={7}
              fill="#002329"
            />
            <circle
              cx={280 + 120 * Math.cos(rad)}
              cy={185 + 120 * Math.sin(rad)}
              r={5}
              fill="#ce2124"
            />
          </g>
        );
      })}

      {/* Diagonal nodes on mid ring */}
      {[45, 135, 225, 315].map((angle) => {
        const rad = (angle * Math.PI) / 180;
        return (
          <circle
            key={angle}
            cx={280 + 80 * Math.cos(rad)}
            cy={185 + 80 * Math.sin(rad)}
            r={4}
            fill="#e5e5e5"
            stroke="#002329"
            strokeWidth="1"
          />
        );
      })}

      {/* Label */}
      <text x="280" y="360" textAnchor="middle" fill="#737373" fontSize="12" fontFamily="Inter, sans-serif">
        Frame · Focus · Prioritise
      </text>
    </svg>
  );
}
