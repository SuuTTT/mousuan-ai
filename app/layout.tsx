import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Structural Information & Artificial Intelligence | 结构信息与人工智能",
  description: "A bilingual research hub for structural information, strategic-computational intelligence, and the Sun Tzu model.",
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
  openGraph: {
    title: "Structural Information & Artificial Intelligence | 结构信息与人工智能",
    description: "Principles · Learning · Strategy",
    images: [{ url: "/og.png", width: 1728, height: 910, alt: "Structural Information and Artificial Intelligence" }],
  },
  twitter: { card: "summary_large_image", title: "Structural Information & Artificial Intelligence", images: ["/og.png"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="zh-CN"><body>{children}</body></html>;
}
