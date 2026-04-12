import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HtmlContent from "@/components/HtmlContent";
import content from "@/content/wydarzenia.json";

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function WydarzeniaPage() {
  return (
    <div className="px-8 lg:px-16 py-12 lg:py-20 max-w-4xl">
      <h1
        className="text-4xl lg:text-5xl font-normal mb-6 text-stone-900"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {content.heading}
      </h1>
      <HtmlContent html={content.content} className="mb-12" />

      {content.events.length === 0 && (
        <p className="text-stone-400 text-sm">Ta sekcja jest na razie pusta.</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {content.events.map((event) => (
          <div key={event.id} className="flex flex-col border border-stone-100 overflow-hidden hover:border-stone-300 transition-colors">
            <div className="relative overflow-hidden bg-stone-50 aspect-[3/2]">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
                unoptimized
              />
              {event.spotsLeft <= 4 && (
                <span className="absolute top-3 left-3 bg-stone-900 text-white text-xs px-2 py-1 tracking-wider uppercase">
                  Ostatnie miejsca
                </span>
              )}
            </div>
            <div className="p-6 flex flex-col flex-1">
              <span className="text-xs tracking-widest uppercase text-stone-400 mb-2">
                {event.type}
              </span>
              <h2
                className="text-xl font-normal mb-3 text-stone-900"
                style={{ fontFamily: "var(--font-playfair)" }}
              >
                {event.title}
              </h2>
              <div className="text-sm text-stone-500 space-y-1 mb-4">
                <p>📅 {event.date}, {event.time}</p>
                <p>📍 {event.location}</p>
                <p>💰 {event.price}</p>
              </div>
              <p className="text-sm text-stone-600 leading-relaxed mb-6 flex-1">
                {event.description}
              </p>
              <Link
                href={event.ticketUrl}
                className="block text-center border border-stone-900 text-stone-900 text-xs tracking-widest uppercase py-3 hover:bg-stone-900 hover:text-white transition-colors"
              >
                Kup bilet
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
