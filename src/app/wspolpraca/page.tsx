import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HtmlContent from "@/components/HtmlContent";
import content from "@/content/wspolpraca.json";

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function WspolpracaPage() {
  return (
    <div className="max-w-2xl px-8 lg:px-16 py-12 lg:py-20">
      <h1
        className="text-4xl lg:text-5xl font-normal mb-12 text-stone-900"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {content.heading}
      </h1>

      <div className="flex flex-col">
        {content.sections.map((section) => (
          <div key={section.id} className="border-t border-stone-100 py-10">
            {section.image && (
              <div className="relative w-full aspect-[3/2] mb-6 overflow-hidden">
                <Image
                  src={section.image}
                  alt={section.imageAlt}
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>
            )}
            <h2 className="text-xs tracking-widest uppercase text-stone-900 font-semibold mb-4">
              {section.title}
            </h2>
            <p className="text-stone-600 leading-relaxed mb-4">
              {section.intro}
            </p>

            {section.detail !== null && (
              <details className="group">
                <summary className="cursor-pointer list-none flex items-center gap-2 text-xs tracking-widest uppercase text-stone-400 hover:text-stone-900 transition-colors select-none">
                  <span>Więcej</span>
                  <svg
                    className="transition-transform group-open:rotate-180"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </summary>
                <div className="mt-4">
                  <HtmlContent html={section.detail} />
                </div>
              </details>
            )}

            {section.linkHref !== null && (
              <Link
                href={section.linkHref}
                className="inline-flex items-center gap-1 text-xs tracking-widest uppercase text-stone-400 hover:text-stone-900 transition-colors"
              >
                <span>› {section.linkText}</span>
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
