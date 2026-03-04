/**
 * HeroHome — "Don't just adopt AI. AIQUIRE it."
 *
 * Concept: A central crystalline form (faceted hexagon) in dark teal,
 * with scattered geometric fragments converging inward from all sides.
 * Fragments closer to the centre are darker and more defined (acquired);
 * outer fragments are lighter, smaller, still in motion.
 *
 * Colours: #002329 (teal shades), #ce2124 (orange-red), #fff8e8 (cream)
 * Background: transparent — page grid pattern shows through.
 */
export default function HeroHome() {
  return (
    <svg
      viewBox="0 0 1200 300"
      width="100%"
      height="auto"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* ── Connection lines from fragments toward the crystal ── */}
      <g stroke="#002329" strokeWidth="0.7" fill="none" opacity="0.2">
        {/* Left side */}
        <line x1="390" y1="148" x2="520" y2="162" />
        <line x1="424" y1="196" x2="520" y2="175" strokeDasharray="5 3" />
        <line x1="296" y1="218" x2="540" y2="200" strokeDasharray="5 3" />
        <line x1="148" y1="132" x2="516" y2="157" />
        {/* Right side */}
        <line x1="810" y1="148" x2="680" y2="162" />
        <line x1="776" y1="196" x2="680" y2="175" strokeDasharray="5 3" />
        <line x1="904" y1="218" x2="660" y2="200" strokeDasharray="5 3" />
        <line x1="1052" y1="132" x2="684" y2="157" />
        {/* Top inbound */}
        <line x1="460" y1="52" x2="572" y2="100" strokeDasharray="4 4" />
        <line x1="740" y1="52" x2="628" y2="100" strokeDasharray="4 4" />
      </g>

      {/* ── Central Crystal ──
          Flat-top regular hexagon, centre (600,160), circumradius 88.
          Vertices: (688,160) (644,236) (556,236) (512,160) (556,84) (644,84)
          Six triangular facets from centre — teal shades simulate overhead lighting. */}

      {/* Facet 1 — Top (lightest: direct overhead light) */}
      <polygon points="600,160 556,84 644,84" fill="#004a5c" />
      {/* Facet 2 — Top-right */}
      <polygon points="600,160 644,84 688,160" fill="#003648" />
      {/* Facet 3 — Bottom-right */}
      <polygon points="600,160 688,160 644,236" fill="#002329" />
      {/* Facet 4 — Bottom (deepest shadow) */}
      <polygon points="600,160 644,236 556,236" fill="#001218" />
      {/* Facet 5 — Bottom-left */}
      <polygon points="600,160 556,236 512,160" fill="#001c24" />
      {/* Facet 6 — Top-left */}
      <polygon points="600,160 512,160 556,84" fill="#002d3a" />

      {/* Facet edge lines */}
      <g stroke="rgba(255,255,255,0.14)" strokeWidth="0.9" fill="none">
        <polygon points="556,84 644,84 688,160 644,236 556,236 512,160" />
        <line x1="600" y1="160" x2="556" y2="84" />
        <line x1="600" y1="160" x2="644" y2="84" />
        <line x1="600" y1="160" x2="688" y2="160" />
        <line x1="600" y1="160" x2="644" y2="236" />
        <line x1="600" y1="160" x2="556" y2="236" />
        <line x1="600" y1="160" x2="512" y2="160" />
      </g>

      {/* Subtle outer rings */}
      <circle cx="600" cy="160" r="96" fill="none" stroke="#002329" strokeWidth="1" opacity="0.12" />
      <circle cx="600" cy="160" r="112" fill="none" stroke="#002329" strokeWidth="0.5" opacity="0.07" />

      {/* Nucleus */}
      <circle cx="600" cy="160" r="11" fill="#ce2124" />
      <circle cx="600" cy="160" r="5" fill="#ff7040" />

      {/* ── LEFT FRAGMENTS (converging rightward) ── */}

      {/* Ring 1 — close, dark, defined */}
      <polygon points="390,132 406,160 374,160" fill="#002329" opacity="0.72" />
      <rect
        x="410" y="182" width="22" height="22"
        fill="none" stroke="#002329" strokeWidth="1.8" opacity="0.52"
        transform="rotate(14, 421, 193)"
      />

      {/* Ring 2 — mid distance */}
      <polygon points="286,210 304,240 268,240" fill="#002329" opacity="0.42" />
      <circle cx="320" cy="116" r="8" fill="#ce2124" opacity="0.52" />
      <polygon
        points="200,62 218,72 218,92 200,102 182,92 182,72"
        fill="#fff8e8" stroke="#002329" strokeWidth="1.1" opacity="0.42"
      />

      {/* Ring 3 — far, light, scattered */}
      <polygon points="142,120 162,150 122,150" fill="#002329" opacity="0.28" />
      <rect
        x="186" y="194" width="15" height="15"
        fill="none" stroke="#002329" strokeWidth="1.1" opacity="0.22"
        transform="rotate(22, 193, 201)"
      />
      <circle cx="78" cy="148" r="5" fill="#002329" opacity="0.16" />
      <circle cx="94" cy="166" r="3" fill="#ce2124" opacity="0.16" />

      {/* Accent fragment — close-upper */}
      <polygon points="456,50 474,78 438,78" fill="#ce2124" opacity="0.38" />
      <circle cx="488" cy="248" r="4" fill="#002329" opacity="0.28" />
      <circle cx="248" cy="252" r="6" fill="#002329" opacity="0.18" />

      {/* ── RIGHT FRAGMENTS (converging leftward) ── */}

      {/* Ring 1 — close, dark, defined */}
      <polygon points="810,132 826,160 794,160" fill="#002329" opacity="0.72" />
      <rect
        x="768" y="182" width="22" height="22"
        fill="none" stroke="#002329" strokeWidth="1.8" opacity="0.52"
        transform="rotate(-14, 779, 193)"
      />

      {/* Ring 2 — mid distance */}
      <polygon points="914,210 932,240 896,240" fill="#002329" opacity="0.42" />
      <circle cx="880" cy="116" r="8" fill="#ce2124" opacity="0.52" />
      <polygon
        points="1000,62 1018,72 1018,92 1000,102 982,92 982,72"
        fill="#fff8e8" stroke="#002329" strokeWidth="1.1" opacity="0.42"
      />

      {/* Ring 3 — far, light, scattered */}
      <polygon points="1058,120 1078,150 1038,150" fill="#002329" opacity="0.28" />
      <rect
        x="999" y="194" width="15" height="15"
        fill="none" stroke="#002329" strokeWidth="1.1" opacity="0.22"
        transform="rotate(-22, 1006, 201)"
      />
      <circle cx="1122" cy="148" r="5" fill="#002329" opacity="0.16" />
      <circle cx="1106" cy="166" r="3" fill="#ce2124" opacity="0.16" />

      {/* Accent fragment — close-upper */}
      <polygon points="744,50 762,78 726,78" fill="#ce2124" opacity="0.38" />
      <circle cx="712" cy="248" r="4" fill="#002329" opacity="0.28" />
      <circle cx="952" cy="252" r="6" fill="#002329" opacity="0.18" />

      {/* ── TOP / BOTTOM ANCHORS ── */}
      <polygon points="600,22 614,46 586,46" fill="#002329" opacity="0.22" />
      <circle cx="544" cy="274" r="5" fill="#002329" opacity="0.16" />
      <circle cx="656" cy="274" r="5" fill="#ce2124" opacity="0.2" />
    </svg>
  );
}
