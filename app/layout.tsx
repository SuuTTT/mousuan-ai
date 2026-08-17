import type { Metadata } from "next";
import "./globals.css";
import "./book-title-fix.css";
import "./section-title-fix.css";
import "./hero-responsive-fix.css";
import "./brand-logo.css";
import "./theme-citation-fix.css";
import SafeAnchorNavigation from "./SafeAnchorNavigation";

export const metadata: Metadata = {
  metadataBase: new URL("https://mousuan.net"),
  title: "Structural Information & Machine Intelligence | 结构信息与机器智能",
  description: "A bilingual research hub for structural information, MouSuan Intelligence (MSI), and Science and Technology of MouSuan Strategy.",
  alternates: { canonical: "/" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Structural Information & Machine Intelligence | 结构信息与机器智能",
    description: "Principles · Learning · MouSuan Strategy",
    images: [{ url: "/og-frontier-research.png", width: 1774, height: 887, alt: "Structural Information and Machine Intelligence" }],
  },
  twitter: { card: "summary_large_image", title: "Structural Information & Machine Intelligence", images: ["/og-frontier-research.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body><SafeAnchorNavigation />{children}</body></html>;
}
