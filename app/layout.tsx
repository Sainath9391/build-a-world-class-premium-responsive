import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Sora } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/site/footer";
import { Navbar } from "@/components/site/navbar";
import { OpeningRibbon } from "@/components/site/opening-ribbon";
import { ProgressBar } from "@/components/ui/progress-bar";
import { MobileStickyCTA } from "@/components/ui/mobile-sticky-cta";

const bodyFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

const headingFont = Sora({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Hai Buddy | AI Learning for School Students",
  description:
    "Hai Buddy teaches AI to students in classes 6 to 12 through storytelling, live classes, missions, workshops, and camps.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${headingFont.variable}`}>
      <body className="font-[var(--font-body)]">
        <ProgressBar />
        <OpeningRibbon />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileStickyCTA />
      </body>
    </html>
  );
}
