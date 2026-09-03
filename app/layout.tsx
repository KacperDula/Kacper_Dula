import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import "./globals.css";

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
  themeColor: "#020617"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
