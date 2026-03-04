export default function HeroContact() {
  return (
    <svg
      viewBox="0 0 1200 280"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Main bezier bridge */}
      <path
        d="M 200 140 C 400 60, 800 220, 1000 140"
        fill="none"
        stroke="#e5e5e5"
        strokeWidth="2"
      />
      <path
        d="M 200 140 C 400 60, 800 220, 1000 140"
        fill="none"
        stroke="#ce2124"
        strokeWidth="1.5"
        strokeDasharray="6 4"
        opacity="0.7"
      />

      {/* Parallel offset path */}
      <path
        d="M 200 155 C 400 75, 800 235, 1000 155"
        fill="none"
        stroke="#fff8e8"
        strokeWidth="1"
        opacity="0.8"
      />

      {/* Data packet nodes along the path */}
      <g fill="#002329" opacity="0.6">
        <circle cx="340" cy="112" r="4" />
        <circle cx="500" cy="120" r="4" />
        <circle cx="660" cy="145" r="4" />
        <circle cx="820" cy="155" r="4" />
      </g>
      <g fill="#ce2124">
        <circle cx="420" cy="108" r="3" />
        <circle cx="600" cy="130" r="3" />
        <circle cx="760" cy="150" r="3" />
      </g>

      {/* Left hub node */}
      <circle cx="200" cy="140" r="28" fill="#fff8e8" stroke="#002329" strokeWidth="1.5" />
      <circle cx="200" cy="140" r="16" fill="#002329" />
      <circle cx="200" cy="140" r="6" fill="#ce2124" />
      {/* Left spoke lines */}
      <g stroke="#002329" strokeWidth="1" opacity="0.25">
        <line x1="60" y1="60" x2="180" y2="125" />
        <line x1="60" y1="140" x2="172" y2="140" />
        <line x1="60" y1="220" x2="180" y2="155" />
      </g>
      <g fill="#e5e5e5">
        <circle cx="60" cy="60" r="5" />
        <circle cx="60" cy="140" r="5" />
        <circle cx="60" cy="220" r="5" />
      </g>

      {/* Right hub node */}
      <circle cx="1000" cy="140" r="28" fill="#fff8e8" stroke="#002329" strokeWidth="1.5" />
      <circle cx="1000" cy="140" r="16" fill="#002329" />
      <circle cx="1000" cy="140" r="6" fill="#ce2124" />
      {/* Right spoke lines */}
      <g stroke="#002329" strokeWidth="1" opacity="0.25">
        <line x1="1140" y1="60" x2="1020" y2="125" />
        <line x1="1140" y1="140" x2="1028" y2="140" />
        <line x1="1140" y1="220" x2="1020" y2="155" />
      </g>
      <g fill="#e5e5e5">
        <circle cx="1140" cy="60" r="5" />
        <circle cx="1140" cy="140" r="5" />
        <circle cx="1140" cy="220" r="5" />
      </g>
    </svg>
  );
}
