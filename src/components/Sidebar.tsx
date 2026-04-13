"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Strona główna", href: "/" },
  { label: "Współpraca", href: "/wspolpraca" },
  { label: "Podcast", href: "/podcast" },
  { label: "Wydarzenia", href: "/wydarzenia" },
  { label: "Sklep", href: "/sklep" },
  { label: "Newsletter", href: "/newsletter" },
  { label: "Kontakt", href: "/kontakt" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-full w-64 bg-white border-r border-stone-100 z-40 px-8 py-10">
        <Link href="/" className="block mb-12">
          <Image
            src="/images/ed_monogram.webp"
            alt="Emilia Dąbrowska"
            width={56}
            height={56}
            className="mb-3"
            unoptimized
          />
          <span className="font-serif text-xl leading-tight tracking-tight text-stone-900">
            Emilia
            <br />
            Dąbrowska
          </span>
        </Link>

        <nav className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-xs tracking-widest uppercase py-2 transition-colors ${
                  isActive
                    ? "text-stone-900 font-semibold"
                    : "text-stone-400 hover:text-stone-900"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto flex flex-col gap-3">
          <div className="flex gap-3">
            <a
              href="https://www.facebook.com/emiliadabrowskapl"
              className="text-stone-400 hover:text-stone-900 transition-colors"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/emiliadabrowska.pl"
              className="text-stone-400 hover:text-stone-900 transition-colors"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="5"/>
                <circle cx="12" cy="12" r="4"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
              </svg>
            </a>
            <a
              href="#"
              className="text-stone-400 hover:text-stone-900 transition-colors"
              aria-label="Spotify"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/>
                <path d="M8 13.5c2.5-1 5.5-.8 7.5.5M7 10.5c3-1.3 6.5-1 9 .8M9 16.5c1.8-.7 4-.6 5.5.3"/>
              </svg>
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-100 flex items-center justify-between px-6 h-14">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo.svg"
            alt="Emilia Dąbrowska"
            width={32}
            height={32}
            unoptimized
          />
          <span className="font-serif text-base tracking-tight text-stone-900">
            Emilia Dąbrowska
          </span>
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-stone-600 hover:text-stone-900 transition-colors"
          aria-label={mobileOpen ? "Zamknij menu" : "Otwórz menu"}
        >
          {mobileOpen ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          ) : (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 z-40 bg-white pt-14">
          <nav className="flex flex-col px-8 py-8 gap-1">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm tracking-widest uppercase py-3 border-b border-stone-100 transition-colors ${
                    isActive
                      ? "text-stone-900 font-semibold"
                      : "text-stone-400 hover:text-stone-900"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </>
  );
}
