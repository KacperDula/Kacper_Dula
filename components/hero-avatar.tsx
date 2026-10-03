import Image from "next/image";
import { personalInfo } from "@/lib/data";

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
