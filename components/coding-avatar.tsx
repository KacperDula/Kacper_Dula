// Animated "developer at a laptop" logo. Inline SVG + CSS keyframes (see .av-* in globals.css)
// instead of a GIF: crisp at any size, tiny, themeable, and it respects prefers-reduced-motion.
export function CodingAvatar({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={`av ${className ?? ""}`} aria-hidden="true">
      <defs>
        <clipPath id="av-clip">
          <circle cx="32" cy="32" r="30" />
        </clipPath>
        <radialGradient id="av-glow" cx="50%" cy="100%" r="70%">
          <stop offset="0%" stopColor="#c5f06b" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#c5f06b" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="32" cy="32" r="30" fill="#17171c" />
      <g clipPath="url(#av-clip)">
        {/* hoodie + head */}
        <path d="M12 64 C12 50 20 44 32 44 C44 44 52 50 52 64 Z" fill="#9d9bff" />
        <path d="M27 44 L32 50 L37 44 Z" fill="#7d7be0" />
        <circle cx="32" cy="27" r="10" fill="#f0c9a6" />
        <path d="M21.5 26 C21 17 27 14.5 32 14.5 C38 14.5 43 17.5 42.5 25 C40 21.5 35 20.5 31 21 C27 21.5 24 23 21.5 26 Z" fill="#2a2a33" />
        {/* glasses + blinking eyes */}
        <g fill="none" stroke="#2a2a33" strokeWidth="1.2">
          <circle cx="28" cy="28" r="3" />
          <circle cx="36" cy="28" r="3" />
          <path d="M31 28 H33" />
        </g>
        <g className="av-blink" fill="#2a2a33">
          <circle cx="28" cy="28.3" r="1" />
          <circle cx="36" cy="28.3" r="1" />
        </g>
        {/* screen light on the face */}
        <rect className="av-glow" x="14" y="20" width="36" height="30" fill="url(#av-glow)" />

        {/* laptop lid (back faces us) + keyboard edge */}
        <path d="M17 40 H47 L45 55 H19 Z" fill="#2a2a33" stroke="#3a3a46" strokeWidth="0.8" />
        <rect x="14" y="55" width="36" height="3" rx="1.5" fill="#3a3a46" />
        <text x="32" y="50.5" textAnchor="middle" fontSize="7" fontFamily="ui-monospace, monospace" fontWeight="700" fill="#c5f06b">
          {"</>"}
        </text>

        {/* typing hands */}
        <circle className="av-hand av-hand-l" cx="22" cy="55.5" r="2.6" fill="#f0c9a6" />
        <circle className="av-hand av-hand-r" cx="42" cy="55.5" r="2.6" fill="#f0c9a6" />
      </g>

      {/* code glyphs floating up from the keyboard */}
      <g fontFamily="ui-monospace, monospace" fontWeight="700" fontSize="8">
        <text className="av-glyph" x="8" y="22" fill="#c5f06b">{"{"}</text>
        <text className="av-glyph av-glyph-2" x="50" y="20" fill="#9d9bff">{"}"}</text>
      </g>
      <circle cx="32" cy="32" r="30" fill="none" stroke="#c5f06b" strokeOpacity="0.45" strokeWidth="1.5" />
    </svg>
  );
}
