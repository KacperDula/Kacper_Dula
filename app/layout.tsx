import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque, Instrument_Sans, JetBrains_Mono } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "Kacper Dula | Software Engineer",
  description:
    "Portfolio of Kacper Dula, a software engineer in Athens building scalable, secure, multi-tenant systems.",
  manifest: "/manifest.webmanifest",
  keywords: [
    "Kacper Dula",
    "Software Engineer",
    "Backend Developer",
    "ASP.NET Core",
    "Spring Boot",
    "React",
    "Portfolio"
  ],
  openGraph: {
    title: "Kacper Dula | Software Engineer",
    description:
      "Portfolio showcasing backend systems, full-stack projects, and engineering experience.",
    type: "website"
  },
  appleWebApp: {
    capable: true,
    title: "Kacper Dula Portfolio",
    statusBarStyle: "black-translucent"
  }
};

export const viewport: Viewport = {
  themeColor: "#0c0c0f"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`dark ${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
