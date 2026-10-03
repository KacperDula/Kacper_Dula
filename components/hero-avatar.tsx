import Image from "next/image";
import { personalInfo } from "@/lib/data";

export function HeroAvatar() {
  return (
    <Image
      src="/kacper-avatar.jpg"
      alt={`Avatar of ${personalInfo.name}`}
      width={320}
      height={320}
      priority
      className="mb-5 h-24 w-24 sm:h-28 sm:w-28 rounded-full border-2 border-accent/50 object-cover shadow-soft"
    />
  );
}
