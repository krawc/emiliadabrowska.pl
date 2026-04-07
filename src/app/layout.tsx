import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "latin-ext"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "Emilia Dąbrowska — Psycholożka & Coachka",
  description: "Psycholożka, coachka i mówczyni. Pomagam kobietom odkrywać swój potencjał i żyć w zgodzie z sobą.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pl"
      className={`${playfair.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full bg-white text-stone-900 antialiased">
        <Sidebar />
        {/* Offset for sidebar on desktop, top bar on mobile */}
        <main className="lg:ml-64 pt-14 lg:pt-0 min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}
