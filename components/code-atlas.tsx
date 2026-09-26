"use client";

import { motion, useReducedMotion } from "framer-motion";

type IconicSnippet = {
  line: string;
  source: string;
};

const iconicSnippets: IconicSnippet[] = [
  { line: 'printf("hello, world\\n");', source: "C (1978)" },
  { line: 'print("Hello, World!")', source: "Python" },
  { line: "10 PRINT \"HELLO, WORLD!\"", source: "BASIC" },
  { line: "GOTO 10", source: "BASIC" },
  { line: "public static void main(String[] args)", source: "Java" },
  { line: "console.log('Hello, world');", source: "JavaScript" },
  { line: "SELECT * FROM users;", source: "SQL" },
  { line: "for(;;) { /* ... */ }", source: "C/C++" },
  { line: "lambda x: x * x", source: "Lisp/Python style" },
  { line: "git commit -m \"initial commit\"", source: "Git" }
];

function seededRandom(seed: number): number {
  const x = Math.sin(seed * 9973.17) * 10000;
  return x - Math.floor(x);
}

function markerPosition(index: number) {
  return {
    x: 8 + seededRandom(index + 1) * 84,
    y: 16 + seededRandom(index + 101) * 62
  };
}

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

      {iconicSnippets.map((snippet, index) => {
        const { x, y } = markerPosition(index);
        const floatDuration = 5 + seededRandom(index + 301) * 4;
        const delay = seededRandom(index + 701) * 2;

        return (
          <motion.div
            key={snippet.line}
            className="absolute hidden lg:block"
            style={{ left: `${x}%`, top: `${y}%` }}
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={
              reduceMotion
                ? { opacity: 0.8, scale: 1, y: 0 }
                : { opacity: [0.45, 0.9, 0.55], y: [0, -10, 0], scale: [0.98, 1, 0.98] }
            }
            transition={
              reduceMotion
                ? { duration: 0.2, delay: index * 0.04 }
                : { duration: floatDuration, repeat: Infinity, ease: "easeInOut", delay }
            }
          >
            <span className="absolute -left-2 -top-2 h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_rgba(197,240,107,0.8)]" />
            <div className="max-w-[220px] rounded-lg border border-accent/25 bg-bg/70 px-3 py-2 shadow-[0_8px_30px_rgba(0,0,0,0.45)] backdrop-blur">
              <code className="text-[11px] text-text">{snippet.line}</code>
              <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-accent/85">{snippet.source}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
