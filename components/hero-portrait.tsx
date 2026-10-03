import Image from "next/image";
import { TiltCard } from "@/components/tilt-card";
import { experience, personalInfo } from "@/lib/data";

const current = experience[0];

export function HeroPortrait() {
  return (
    <div className="relative mx-auto w-full max-w-[340px]">
      {/* soft brand glow behind the card */}
      <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-accent/20 via-transparent to-accent-2/25 blur-2xl" aria-hidden="true" />
      <TiltCard className="group relative overflow-hidden rounded-2xl border border-white/10 bg-surface p-1.5 shadow-soft">
        <div className="relative overflow-hidden rounded-xl">
          <Image
            src="/kacper-portrait.jpg"
            alt={`Portrait of ${personalInfo.name}`}
            width={640}
            height={800}
            priority
            className="block h-auto w-full"
          />
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-4 pb-4 pt-16">
            <p className="font-display text-lg font-semibold text-white">{personalInfo.name}</p>
            <p className="text-sm text-text/80">
              {current.role.split(" - ")[0]} · {current.company}
            </p>
            <p className="mt-2 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/40 px-2.5 py-1 text-xs text-text backdrop-blur">
              <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_rgba(197,240,107,0.9)]" />
              Open to opportunities
            </p>
          </div>
        </div>
      </TiltCard>
    </div>
  );
}

export function HeroAvatar() {
  return (
    <Image
      src="/kacper-avatar.jpg"
      alt={`Portrait of ${personalInfo.name}`}
      width={240}
      height={240}
      priority
      className="mb-5 h-24 w-24 rounded-full border-2 border-accent/50 object-cover shadow-soft"
    />
  );
}
