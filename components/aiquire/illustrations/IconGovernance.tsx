export default function IconGovernance() {
  return (
    <svg viewBox="0 0 48 48" width="48" height="48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <circle cx="24" cy="24" r="20" fill="#ffffff" stroke="#002329" strokeWidth="1.5" />
      {/* Shield */}
      <path
        d="M24 10 L34 15 L34 26 C34 32, 29 37, 24 39 C19 37, 14 32, 14 26 L14 15 Z"
        fill="#002329"
      />
      {/* Checkmark inside shield */}
      <polyline
        points="19,25 23,29 30,20"
        fill="none"
        stroke="#ce2124"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
