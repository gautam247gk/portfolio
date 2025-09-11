import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SiteHeader } from "../components/site-header";
import { SiteFooter } from "../components/site-footer";
import dynamic from "next/dynamic";
import AnimatedBackground from "@/components/AnimatedBackground";

const AosProvider = dynamic(() => import("@/components/AosProvider"), {
  ssr: true,
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Portfolio - Gautam Krishnan",
  description: "Find out more about Gautam Krishnan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-white text-ink antialiased font-sans",
          poppins.variable,
          // include Next/font generated classnames and fallback name provided
          "__Poppins_fb1a21",
          "__Poppins_Fallback_fb1a21"
        )}
      >
        {/* Animated background */}
        <AnimatedBackground />
        {/* Header and content */}
        <SiteHeader />
        <AosProvider />
        <main
          id="content"
          className="flex min-h-screen  flex-col items-start justify-center whitespace-pre-wrap"
        >
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
