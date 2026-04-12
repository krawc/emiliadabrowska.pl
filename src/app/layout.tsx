import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
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
  title: "Emilia Dąbrowska — Psycholożka & Coach",
  description: "Psycholożka, coach i mówczyni. Pomagam kobietom odkrywać swój potencjał i żyć w zgodzie z sobą.",
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
        <Script id="mailerlite-universal" strategy="afterInteractive">{`
          (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
          .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
          n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
          (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
          ml('account', '1817847');
        `}</Script>
      </body>
    </html>
  );
}
