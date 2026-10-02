"use client";

import { motion, useReducedMotion } from "framer-motion";
import dynamic from "next/dynamic";

// WebGL can't render at build time (static export), so the 3D scene is client-only.
const Hero3D = dynamic(() => import("@/components/hero-3d"), { ssr: false, loading: () => <HeroSvg /> });

export function HeroVisual() {
  const reduceMotion = useReducedMotion();

  return (
    <div className="pointer-events-none absolute -top-6 right-0 z-0 hidden h-[430px] w-[460px] md:block" aria-hidden="true">
      {reduceMotion ? <HeroSvg /> : <Hero3D fallback={<HeroSvg />} />}
    </div>
  );
}

function HeroSvg() {
  const reduceMotion = useReducedMotion();

  const floatTransition = reduceMotion
    ? { duration: 0 }
    : {
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse" as const,
        ease: "easeInOut" as const
      };

  const pulseTransition = reduceMotion
    ? { duration: 0 }
    : {
        duration: 3,
        repeat: Infinity,
        repeatType: "mirror" as const,
        ease: "easeInOut" as const
      };

  return (
    <div className="absolute inset-0">
      <motion.div
        className="absolute inset-8 rounded-full bg-accent-2/20 blur-3xl"
        animate={reduceMotion ? undefined : { scale: [0.92, 1.08, 0.95], opacity: [0.45, 0.72, 0.52] }}
        transition={pulseTransition}
      />

      <motion.div
        className="absolute right-6 top-4 rounded-md border border-white/20 bg-surface/80 px-2 py-1 text-[11px] text-accent"
        animate={reduceMotion ? undefined : { y: [0, -9, 0] }}
        transition={{ ...floatTransition, duration: 4.4 }}
      >
        const api = await fetch();
      </motion.div>

      <motion.div
        className="absolute left-6 top-28 rounded-md border border-white/20 bg-surface/80 px-2 py-1 text-[11px] text-accent"
        animate={reduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ ...floatTransition, duration: 5.6 }}
      >
        docker compose up
      </motion.div>

      <motion.svg
        viewBox="0 0 460 430"
        className="absolute inset-0"
        animate={reduceMotion ? undefined : { y: [0, -6, 0] }}
        transition={{ ...floatTransition, duration: 6 }}
      >
        <defs>
          <linearGradient id="screen" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c5f06b" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#9d9bff" stopOpacity="0.9" />
          </linearGradient>
        </defs>

        <rect x="72" y="280" width="315" height="18" rx="8" fill="rgba(157, 157, 170, 0.3)" />
        <rect x="88" y="170" width="200" height="118" rx="10" fill="rgba(23, 23, 28, 0.95)" stroke="rgba(157, 157, 170, 0.35)" />
        <rect x="101" y="183" width="174" height="80" rx="7" fill="url(#screen)" />
        <rect x="167" y="288" width="42" height="12" rx="4" fill="rgba(157, 157, 170, 0.45)" />

        <rect x="312" y="210" width="58" height="58" rx="10" fill="rgba(23, 23, 28, 0.9)" stroke="rgba(157, 157, 170, 0.3)" />

        <ellipse cx="322" cy="190" rx="26" ry="30" fill="rgba(232, 232, 236, 0.92)" />
        <rect x="293" y="214" width="58" height="70" rx="20" fill="rgba(157, 157, 170, 0.86)" />

        <rect x="322" y="264" width="48" height="9" rx="4" fill="rgba(157, 157, 170, 0.62)" />
        <rect x="104" y="300" width="130" height="10" rx="5" fill="rgba(110, 110, 122, 0.52)" />
      </motion.svg>

      <motion.div
        className="absolute left-[108px] top-[194px] h-1 rounded bg-bg/70"
        animate={reduceMotion ? undefined : { width: [62, 122, 78] }}
        transition={{ ...pulseTransition, duration: 2.5 }}
      />
      <motion.div
        className="absolute left-[108px] top-[212px] h-1 rounded bg-bg/60"
        animate={reduceMotion ? undefined : { width: [96, 52, 106] }}
        transition={{ ...pulseTransition, duration: 3.2 }}
      />
      <motion.div
        className="absolute left-[108px] top-[230px] h-1 rounded bg-bg/55"
        animate={reduceMotion ? undefined : { width: [82, 118, 70] }}
        transition={{ ...pulseTransition, duration: 2.8 }}
      />
    </div>
  );
}
