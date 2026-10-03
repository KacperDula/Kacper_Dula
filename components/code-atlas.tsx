"use client";

import { motion, useReducedMotion } from "framer-motion";

export function CodeAtlas() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_22%,rgba(197,240,107,0.10),transparent_36%),radial-gradient(circle_at_82%_76%,rgba(157,155,255,0.16),transparent_38%)]" />

      <motion.svg
        viewBox="0 0 1000 520"
        className="absolute inset-0 h-full w-full opacity-45"
        animate={reduceMotion ? undefined : { x: [0, 5, 0], y: [0, -3, 0] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <pattern id="atlas-grid" width="42" height="42" patternUnits="userSpaceOnUse">
            <path d="M 42 0 L 0 0 0 42" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="1000" height="520" fill="url(#atlas-grid)" />

        <path
          d="M130 210 C175 170, 260 170, 300 205 C338 240, 338 280, 278 300 C210 324, 142 295, 120 255 Z"
          fill="rgba(197,240,107,0.14)"
        />
        <path
          d="M388 198 C430 176, 505 183, 550 216 C590 246, 582 285, 545 302 C505 322, 445 315, 400 290 C365 268, 360 220, 388 198 Z"
          fill="rgba(157,155,255,0.16)"
        />
        <path
          d="M658 176 C705 152, 776 165, 825 208 C858 237, 866 272, 830 296 C780 330, 702 322, 662 281 C628 247, 628 196, 658 176 Z"
          fill="rgba(157,155,255,0.10)"
        />
      </motion.svg>
    </div>
  );
}
