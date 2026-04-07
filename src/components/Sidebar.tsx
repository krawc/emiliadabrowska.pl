"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { label: "Strona główna", href: "/" },
  { label: "Współpraca", href: "/wspolpraca" },
  { label: "Podcast", href: "/podcast" },
  { label: "Wydarzenia", href: "/wydarzenia" },
  { label: "Sklep", href: "/sklep" },
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
          <span className="font-serif text-2xl leading-tight tracking-tight text-stone-900">
            [emilia
            <br />
            :dąbrowska]
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
              href="#"
              className="text-stone-400 hover:text-stone-900 transition-colors"
              aria-label="Instagram"
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
              aria-label="LinkedIn"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="2" y="2" width="20" height="20" rx="3"/>
                <path d="M7 10v7M7 7v.01M12 17v-4a2 2 0 014 0v4M12 10v7"/>
              </svg>
            </a>
          </div>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white border-b border-stone-100 flex items-center justify-between px-6 h-14">
        <Link href="/" className="font-serif text-lg tracking-tight text-stone-900">
          [emilia :dąbrowska]
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
