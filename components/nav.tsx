"use client";

import { motion } from "framer-motion";
import Image from "next/image";

type NavProps = {
  sections: readonly string[];
  activeSection: string;
};

export function Nav({ sections, activeSection }: NavProps) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-bg/85 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-3 sm:px-6" aria-label="Main navigation">
        <a href="#home" className="group shrink-0" aria-label="Kacper Dula - back to top">
          <Image
            src="/kacper-avatar.jpg"
            alt=""
            width={80}
            height={80}
            className="h-10 w-10 rounded-full border border-accent/50 object-cover transition-transform group-hover:scale-110"
          />
        </a>
        <ul className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto">
          {sections.map((section) => {
            const label = section[0].toUpperCase() + section.slice(1);
            const isActive = activeSection === section;
            return (
              <li key={section} className="relative shrink-0">
                <a
                  href={`#${section}`}
                  className={`rounded-md px-3 py-2 text-sm transition-colors ${
                    isActive ? "text-accent" : "text-muted hover:text-white"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  {label}
                </a>
                {isActive && (
                  <motion.span
                    layoutId="active-section"
                    className="absolute right-2 bottom-0 left-2 h-0.5 rounded bg-accent"
                  />
                )}
              </li>
            );
          })}
        </ul>
        <a
          href="#contact"
          className="shrink-0 rounded-md border border-accent/40 px-3 py-1.5 text-xs font-semibold text-accent transition hover:bg-accent/10 md:text-sm"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
