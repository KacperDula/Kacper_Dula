"use client";

import { useEffect, useMemo, useState } from "react";
import { personalInfo, projects } from "@/lib/data";

function buildTerminalLines() {
  const lines = [
    "$ whoami",
    personalInfo.name,
    "$ role --current",
    personalInfo.title,
    `$ location --base "${personalInfo.location}"`,
    "$ ls projects/"
  ];

  projects.forEach((project) => {
    lines.push(`- ${project.title}`);
  });

  lines.push("$ git status");
  lines.push("On branch career-growth");
  lines.push("Ready to build production software.");
  return lines;
}

export function TerminalMode() {
  const [open, setOpen] = useState(false);
  const lines = useMemo(buildTerminalLines, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="fixed right-1.5 bottom-3 z-[70] flex h-8 w-8 items-center justify-center rounded-full border border-accent/45 bg-bg/90 font-mono text-xs font-semibold text-accent shadow-[0_12px_30px_rgba(0,0,0,0.45)] backdrop-blur hover:bg-surface min-[1440px]:right-6 min-[1440px]:bottom-6 min-[1440px]:h-auto min-[1440px]:w-auto min-[1440px]:px-4 min-[1440px]:py-2 min-[1440px]:font-sans min-[1440px]:tracking-[0.14em] min-[1440px]:uppercase"
        aria-expanded={open}
        aria-controls="terminal-overlay"
      >
        <span aria-hidden="true" className="min-[1440px]:hidden">
          {open ? "×" : ">_"}
        </span>
        <span className="sr-only min-[1440px]:not-sr-only">{open ? "Close Terminal" : "Terminal Mode"}</span>
      </button>

      {open && (
        <div className="fixed inset-0 z-[65] bg-bg/70 backdrop-blur-sm">
          <section
            id="terminal-overlay"
            className="mx-auto mt-16 w-[min(920px,92vw)] rounded-xl border border-accent/40 bg-bg/95 shadow-[0_24px_80px_rgba(0,0,0,0.55)]"
            aria-label="Terminal mode summary"
          >
            <header className="flex items-center justify-between border-b border-accent/20 px-4 py-3">
              <p className="font-mono text-sm text-accent">kacper@portfolio:~</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded border border-accent/35 px-2 py-1 text-xs text-accent hover:bg-accent/10"
              >
                ESC
              </button>
            </header>
            <div className="max-h-[70vh] overflow-y-auto p-4 font-mono text-sm leading-7 text-text">
              {lines.map((line, index) => (
                <p key={`${line}-${index}`} className={line.startsWith("$") ? "text-accent" : "text-text"}>
                  {line}
                </p>
              ))}
            </div>
          </section>
        </div>
      )}
    </>
  );
}
