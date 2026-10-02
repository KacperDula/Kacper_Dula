"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { Project, ProjectShot } from "@/lib/data";

type Featured = Project & { shots: NonNullable<Project["shots"]> };

function hostLabel(repo: string) {
  return `github.com/${repo.split("github.com/")[1] ?? ""}`;
}

function DeviceStage({ project, onOpen, flip }: { project: Featured; onOpen: () => void; flip: boolean }) {
  const cover = project.shots.desktop[0];
  const phone = project.shots.mobile;

  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label={`Open ${project.title} screenshots`}
      className="group/stage relative block w-full px-4 pb-10 [perspective:1600px] focus-visible:outline-none sm:px-8"
    >
      <div className="absolute inset-x-10 bottom-0 h-10 rounded-[50%] bg-black/70 blur-2xl" aria-hidden="true" />
      <div
        className={`relative overflow-hidden rounded-xl border border-white/10 bg-[#0d0d12] shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8),0_0_60px_-10px_rgba(157,155,255,0.25)] transition-transform duration-700 ease-out group-hover/stage:[transform:none] group-focus-visible/stage:[transform:none] group-focus-visible/stage:ring-2 group-focus-visible/stage:ring-accent motion-reduce:[transform:none] ${
          flip ? "[transform:rotateY(10deg)_rotateX(4deg)]" : "[transform:rotateY(-10deg)_rotateX(4deg)]"
        }`}
      >
        <div className="flex items-center gap-2 border-b border-white/[0.06] px-3 py-2">
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="h-2 w-2 rounded-full bg-white/20" />
          <span className="mx-auto truncate rounded-md bg-white/[0.05] px-6 py-0.5 font-mono text-[10px] text-muted">
            {hostLabel(project.repo)}
          </span>
        </div>
        <Image src={cover.src} alt={cover.alt} width={1600} height={1000} className="block h-auto w-full" />
      </div>

      {phone && (
        <div
          className={`absolute bottom-4 w-[22%] overflow-hidden rounded-[18px] border-[3px] border-[#1c1c22] bg-black shadow-[0_30px_60px_-10px_rgba(0,0,0,0.9)] transition-transform duration-700 ease-out group-hover/stage:-translate-y-2 motion-reduce:transition-none ${
            flip ? "left-0" : "right-0"
          }`}
        >
          <Image src={phone.src} alt={phone.alt} width={508} height={1100} className="block h-auto w-full" />
        </div>
      )}

      <span className="absolute left-3 top-12 rounded-full border border-white/15 bg-bg/80 px-3 py-1 text-xs font-medium text-text opacity-0 backdrop-blur transition-opacity group-hover/stage:opacity-100 group-focus-visible/stage:opacity-100">
        View {project.shots.desktop.length + (phone ? 1 : 0)} screenshots
      </span>
    </button>
  );
}

function Gallery({ project, onClose }: { project: Featured | null; onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const [index, setIndex] = useState(0);
  const shots: ProjectShot[] = project
    ? [...project.shots.desktop, ...(project.shots.mobile ? [project.shots.mobile] : [])]
    : [];
  const current = shots[index];
  const isMobileShot = !!project?.shots.mobile && current === project.shots.mobile;

  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (project) {
      setIndex(0);
      dialog.showModal();
    } else if (dialog.open) {
      dialog.close();
    }
  }, [project]);

  const step = (delta: number) => setIndex((i) => (i + delta + shots.length) % shots.length);

  return (
    <dialog
      ref={ref}
      onClose={onClose}
      onClick={(event) => event.target === ref.current && ref.current?.close()}
      onKeyDown={(event) => {
        if (event.key === "ArrowRight") step(1);
        if (event.key === "ArrowLeft") step(-1);
      }}
      aria-label={project ? `${project.title} screenshots` : undefined}
      className="m-auto max-h-[92vh] w-[min(1200px,94vw)] overflow-visible bg-transparent p-0 text-text backdrop:bg-black/85 backdrop:backdrop-blur-sm"
    >
      {project && current && (
        <div className="panel p-3 sm:p-4">
          <div className="mb-3 flex items-center justify-between gap-3">
            <p className="text-sm text-muted">
              <span className="font-semibold text-white">{project.title}</span> · {current.alt}
            </p>
            <button
              type="button"
              onClick={() => ref.current?.close()}
              className="rounded-md border border-white/15 px-2.5 py-1 text-sm hover:border-accent hover:text-accent"
            >
              Close
            </button>
          </div>

          <div className="relative flex max-h-[68vh] items-center justify-center overflow-hidden rounded-lg bg-black/40">
            <Image
              key={current.src}
              src={current.src}
              alt={current.alt}
              width={isMobileShot ? 508 : 1600}
              height={isMobileShot ? 1100 : 1000}
              className={`h-auto max-h-[68vh] w-auto ${isMobileShot ? "max-w-[40%]" : "max-w-full"}`}
            />
            {shots.length > 1 && (
              <>
                <button
                  type="button"
                  onClick={() => step(-1)}
                  aria-label="Previous screenshot"
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-bg/80 px-3 py-2 hover:text-accent"
                >
                  ←
                </button>
                <button
                  type="button"
                  onClick={() => step(1)}
                  aria-label="Next screenshot"
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/15 bg-bg/80 px-3 py-2 hover:text-accent"
                >
                  →
                </button>
              </>
            )}
          </div>

          <ul className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {shots.map((shot, i) => (
              <li key={shot.src} className="shrink-0">
                <button
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show ${shot.alt}`}
                  aria-current={i === index}
                  className={`block overflow-hidden rounded-md border-2 transition ${
                    i === index ? "border-accent" : "border-transparent opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image src={shot.src} alt="" width={160} height={100} className="h-14 w-auto object-cover" />
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </dialog>
  );
}

export function ProjectShowcase({ projects }: { projects: Project[] }) {
  const featured = projects.filter((p): p is Featured => !!p.shots);
  const [open, setOpen] = useState<Featured | null>(null);

  return (
    <div className="space-y-20 sm:space-y-28">
      {featured.map((project, i) => {
        const flip = i % 2 === 1;
        return (
          <article key={project.title} className="grid items-center gap-10 lg:grid-cols-[1fr,1.35fr] lg:gap-14 [&>*]:min-w-0">
            <div className={flip ? "lg:order-2" : undefined}>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
                {String(i + 1).padStart(2, "0")} / Featured
              </p>
              <h4 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">{project.title}</h4>
              {project.tagline && <p className="mt-1 text-sm text-accent-2">{project.tagline}</p>}
              <p className="mt-4 text-muted">{project.description}</p>
              <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${project.title} stack`}>
                {project.stack.map((tech) => (
                  <li key={tech} className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-text/80">
                    {tech}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <button
                  type="button"
                  onClick={() => setOpen(project)}
                  className="rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-bg transition hover:brightness-95"
                >
                  View screenshots
                </button>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-lg border border-white/20 px-4 py-2 text-sm font-semibold text-white transition hover:border-accent/80 hover:text-accent"
                  aria-label={`View ${project.title} repository`}
                >
                  Repository -&gt;
                </a>
              </div>
            </div>
            <div className={flip ? "lg:order-1" : undefined}>
              <DeviceStage project={project} flip={flip} onOpen={() => setOpen(project)} />
            </div>
          </article>
        );
      })}
      <Gallery project={open} onClose={() => setOpen(null)} />
    </div>
  );
}
