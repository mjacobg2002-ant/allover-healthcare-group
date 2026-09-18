/**
 * The brand's connected-pathways / overlapping-circles motif.
 * Decorative only (aria-hidden). Used behind the hero and CTA sections.
 */
export function PathwayMotif({ className = '' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 400"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="pm-stroke" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#0b9fe8" stopOpacity="0.9" />
          <stop offset="1" stopColor="#0a2a80" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      {/* gentle directional pathways */}
      <path
        d="M-20 320 C 120 300, 180 180, 320 190 S 520 120, 640 60"
        stroke="url(#pm-stroke)"
        strokeWidth="1.5"
        opacity="0.5"
      />
      <path
        d="M-20 360 C 140 360, 220 260, 360 250 S 560 210, 640 150"
        stroke="url(#pm-stroke)"
        strokeWidth="1.5"
        opacity="0.35"
      />
      {/* overlapping circles = connected people, care, community */}
      <circle cx="320" cy="190" r="7" fill="#0b9fe8" />
      <circle cx="360" cy="250" r="5" fill="#0a2a80" />
      <circle cx="180" cy="180" r="5" fill="#0a2a80" />
      <g opacity="0.5">
        <circle cx="470" cy="140" r="46" stroke="#0b9fe8" strokeWidth="1.2" />
        <circle cx="510" cy="170" r="46" stroke="#0a2a80" strokeWidth="1.2" />
      </g>
    </svg>
  )
}
