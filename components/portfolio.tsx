"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { CodeAtlas } from "@/components/code-atlas";
import { ContactForm } from "@/components/contact-form";
import { HeroAvatar, HeroPortrait } from "@/components/hero-portrait";
import { Nav } from "@/components/nav";
import { ProjectShowcase } from "@/components/project-showcase";
import { PWARegister } from "@/components/pwa-register";
import { TerminalMode } from "@/components/terminal-mode";
import { TiltCard } from "@/components/tilt-card";
import { ViewTransitions } from "@/components/view-transitions";
import {
  about,
  education,
  experience,
  languages,
  personalInfo,
  projects,
  sectionIds,
  skills
} from "@/lib/data";

const reveal = {
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.45 },
  viewport: { once: true, amount: 0.2 }
};

export function Portfolio() {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const observers = sectionIds.map((id) => {
      const element = document.getElementById(id);
      if (!element) return null;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id);
          }
        },
        {
          rootMargin: "-40% 0px -50% 0px",
          threshold: 0.01
        }
      );

      observer.observe(element);
      return observer;
    });

    return () => {
      observers.forEach((observer) => observer?.disconnect());
    };
  }, []);

  return (
    <>
      <TerminalMode />
      <ViewTransitions />
      <PWARegister />
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-md focus:bg-surface focus:px-3 focus:py-2"
      >
        Skip to main content
      </a>
      <Nav sections={sectionIds} activeSection={activeSection} />

      <main id="main-content" className="blueprint-canvas mx-auto max-w-6xl space-y-28 px-4 py-12 sm:px-6 sm:py-20">
        <section id="home" className="hero-noise relative isolate min-h-[72vh] scroll-mt-28 overflow-hidden pt-8">
          <CodeAtlas />
          <div className="relative z-10 grid items-center gap-12 lg:grid-cols-[1.35fr,0.9fr]">
            <div>
              <div className="lg:hidden">
                <HeroAvatar />
              </div>
              <motion.p
                {...reveal}
                viewport={{ once: true }}
                className="mb-4 text-sm font-semibold tracking-[0.2em] text-accent uppercase"
              >
                {personalInfo.location}
              </motion.p>
              <motion.h1
                {...reveal}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.06 }}
                className="text-4xl font-bold tracking-tight text-white sm:text-6xl"
              >
                {personalInfo.name}
              </motion.h1>
              <motion.h2
                {...reveal}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.12 }}
                className="mt-3 text-2xl font-semibold text-text/80 sm:text-4xl"
              >
                {personalInfo.title}
              </motion.h2>
              <motion.p
                {...reveal}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.18 }}
                className="mt-5 max-w-2xl text-base text-muted sm:text-lg"
              >
                {personalInfo.subtitle} {personalInfo.intro}
              </motion.p>
              <motion.div
                {...reveal}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: 0.24 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                <a
                  href="#projects"
                  className="rounded-lg bg-accent px-5 py-2.5 text-sm font-semibold text-bg transition hover:brightness-95"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-accent/80 hover:text-accent"
                >
                  Contact Me
                </a>
              </motion.div>
            </div>
            <motion.div
              className="hidden lg:block"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <HeroPortrait />
            </motion.div>
          </div>
        </section>

        <motion.section
          id="about"
          className="scroll-mt-24"
          {...reveal}
        >
          <h3 className="section-heading">About</h3>
          <div className="panel p-6">
            <div className="space-y-4 text-muted">
              {about.map((line) => (
                <p key={line}>{line}</p>
              ))}
            </div>
            <p className="mt-5 text-sm text-text/80">
              Military Service: <span className="font-medium text-white">{personalInfo.militaryService}</span>
            </p>
          </div>
        </motion.section>

        <motion.section
          id="experience"
          className="scroll-mt-24"
          {...reveal}
        >
          <h3 className="section-heading">Experience</h3>
          <div className="space-y-4">
            {experience.map((item) => (
              <article key={`${item.role}-${item.period}`} className="panel p-6">
                <p className="text-sm font-semibold tracking-wide text-accent">{item.period}</p>
                <h4 className="mt-2 text-xl font-semibold text-white">
                  {item.role} <span className="inline-block text-muted">- {item.company}</span>
                </h4>
                {item.details.length > 0 && (
                  <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
                    {item.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                )}
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="projects"
          className="scroll-mt-24"
          {...reveal}
        >
          <h3 className="section-heading">Projects</h3>
          <ProjectShowcase projects={projects} />
          <h4 className="mb-5 mt-24 text-lg font-semibold text-white">More projects</h4>
          <div className="grid gap-4 md:grid-cols-2">
            {projects.filter((project) => !project.shots).map((project) => (
              <TiltCard
                key={project.title}
                className="group panel h-full p-6 transition-colors hover:border-accent/40"
              >
                <h4 className="text-xl font-semibold text-white">{project.title}</h4>
                <p className="mt-3 text-sm text-muted">{project.description}</p>
                <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} stack`}>
                  {project.stack.map((tech) => (
                    <li key={tech} className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-text/80">
                      {tech}
                    </li>
                  ))}
                </ul>
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-block text-sm font-semibold text-accent transition group-hover:translate-x-1"
                  aria-label={`View ${project.title} repository`}
                >
                  View Repository -&gt;
                </a>
              </TiltCard>
            ))}
          </div>
        </motion.section>

        <motion.section id="skills" className="scroll-mt-24" {...reveal}>
          <h3 className="section-heading">Skills</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            {Object.entries(skills).map(([category, items]) => (
              <article key={category} className="panel p-5">
                <h4 className="text-base font-semibold text-white">{category}</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {items.map((item) => (
                    <span key={item} className="rounded-full border border-white/15 px-2.5 py-1 text-xs text-muted">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="education"
          className="scroll-mt-24"
          {...reveal}
        >
          <h3 className="section-heading">Education</h3>
          <div className="space-y-4">
            {education.map((item) => (
              <article key={`${item.degree}-${item.period}`} className="panel p-6">
                <p className="text-sm font-semibold tracking-wide text-accent">{item.period}</p>
                <h4 className="mt-2 text-xl font-semibold text-white">{item.degree}</h4>
                <p className="mt-1 text-sm text-text/80">{item.school}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section
          id="languages"
          className="scroll-mt-24"
          {...reveal}
        >
          <h3 className="section-heading">Languages</h3>
          <div className="panel p-6">
            <ul className="flex flex-wrap gap-3">
              {languages.map((language) => (
                <li key={language} className="rounded-full border border-accent/30 px-3 py-1.5 text-sm text-text">
                  {language}
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        <motion.section
          id="contact"
          className="scroll-mt-24"
          {...reveal}
        >
          <h3 className="section-heading">Contact</h3>
          <div className="grid gap-4 lg:grid-cols-[1.1fr,1fr]">
            <div className="panel p-6">
              <p className="text-muted">
                I am open to junior backend or full-stack opportunities where I can contribute quickly and grow
                long-term.
              </p>
              <ul className="mt-5 space-y-3 text-sm">
                <li>
                  <span className="text-muted">Email: </span>
                  <a href={`mailto:${personalInfo.email}`} className="text-accent hover:underline">
                    {personalInfo.email}
                  </a>
                </li>
                <li>
                  <span className="text-muted">Phone: </span>
                  <a href={`tel:${personalInfo.phone.replace(/\s/g, "")}`} className="text-accent hover:underline">
                    {personalInfo.phone}
                  </a>
                </li>
              </ul>
              <div className="mt-5 flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="rounded-lg border border-white/20 bg-bg/70 p-2 text-text transition hover:border-accent/70 hover:text-accent"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5zM3 9h4v12H3zm7 0h3.83v1.64h.05c.53-1 1.83-2.06 3.77-2.06C21.08 8.58 22 10.6 22 13.3V21h-4v-6.8c0-1.62-.03-3.7-2.26-3.7-2.26 0-2.61 1.77-2.61 3.59V21h-4z" />
                  </svg>
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="rounded-lg border border-white/20 bg-bg/70 p-2 text-text transition hover:border-accent/70 hover:text-accent"
                >
                  <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden="true">
                    <path d="M12 .5a12 12 0 0 0-3.79 23.39c.6.1.82-.26.82-.58v-2.2c-3.34.73-4.04-1.41-4.04-1.41-.55-1.38-1.33-1.75-1.33-1.75-1.1-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.08 1.84 2.83 1.31 3.52 1 .1-.78.42-1.32.75-1.62-2.67-.3-5.48-1.34-5.48-5.97 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.24a11.4 11.4 0 0 1 6 0c2.3-1.56 3.3-1.24 3.3-1.24.66 1.65.24 2.87.12 3.17.77.84 1.24 1.92 1.24 3.24 0 4.64-2.82 5.67-5.5 5.96.43.37.82 1.1.82 2.23v3.3c0 .32.21.69.83.57A12 12 0 0 0 12 .5z" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="panel p-6">
              <ContactForm />
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-2 pl-4 pr-12 text-sm text-muted sm:pl-6">
          <p>(c) {new Date().getFullYear()} {personalInfo.name}. All rights reserved.</p>
          <div className="flex items-center gap-3">
            {sectionIds.slice(1, 5).map((section) => (
              <a key={section} href={`#${section}`} className="capitalize hover:text-white">
                {section}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
