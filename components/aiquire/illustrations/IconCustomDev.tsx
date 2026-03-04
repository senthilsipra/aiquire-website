export default function IconCustomDev() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="#fff8e8" stroke="#002329" strokeWidth="1.5" />
      {/* Code brackets */}
      <text
        x="24"
        y="29"
        textAnchor="middle"
        fill="#002329"
        fontSize="16"
        fontFamily="monospace"
        fontWeight="700"
        letterSpacing="-1"
      >
        {"</>"}
      </text>
      {/* Node dots */}
      <circle cx="24" cy="11" r="2.5" fill="#ce2124" />
      <circle cx="11" cy="24" r="2" fill="#ce2124" opacity="0.6" />
      <circle cx="37" cy="24" r="2" fill="#ce2124" opacity="0.6" />
    </svg>
  );
}
