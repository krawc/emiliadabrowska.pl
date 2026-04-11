import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HtmlContent from "@/components/HtmlContent";
import content from "@/content/podcast.json";

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function PodcastPage() {
  return (
    <div className="px-8 lg:px-16 py-12 lg:py-20 max-w-3xl">
      <h1
        className="text-4xl lg:text-5xl font-normal mb-12 text-stone-900"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {content.heading}
      </h1>

      {/* Podcast header */}
      <div className="flex flex-col sm:flex-row gap-8 mb-12">
        <div className="shrink-0">
          <Image
            src={content.coverImage}
            alt={content.coverImageAlt}
            width={180}
            height={180}
            className="rounded-lg"
            unoptimized
          />
        </div>
        <div>
          <h2
            className="text-2xl font-normal mb-2 text-stone-900"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            {content.podcastName}
          </h2>
          <p className="text-stone-500 text-sm mb-3 leading-relaxed">
            {content.podcastDescription}
          </p>
          <p className="text-xs tracking-widest uppercase text-stone-400 mb-5">
            {content.hosts}
          </p>
          <div className="flex flex-wrap gap-2">
            {content.platforms.map((p) => (
              <Link
                key={p.name}
                href={p.url}
                className="text-xs tracking-wider uppercase border border-stone-200 px-4 py-2 text-stone-600 hover:border-stone-900 hover:text-stone-900 transition-colors"
              >
                {p.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <HtmlContent html={content.content} className="mb-12" />

      {/* Episode list */}
      <div>
        <h2
          className="text-sm tracking-widest uppercase text-stone-400 mb-6"
        >
          Odcinki
        </h2>
        <div className="flex flex-col divide-y divide-stone-100">
          {content.episodes.map((ep) => (
            <Link
              key={ep.number}
              href={ep.url}
              className="group py-6 flex flex-col gap-1 hover:bg-stone-50 -mx-4 px-4 transition-colors"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs text-stone-400 mb-1 block">
                    #{ep.number} · {ep.date} · {ep.duration}
                  </span>
                  <h3 className="font-medium text-stone-900 group-hover:underline underline-offset-2">
                    {ep.title}
                  </h3>
                  <p className="text-sm text-stone-500 mt-1">
                    {ep.guest}{ep.guestTitle ? ` — ${ep.guestTitle}` : ""}
                  </p>
                </div>
                <svg
                  className="shrink-0 mt-1 text-stone-300 group-hover:text-stone-600 transition-colors"
                  width="16" height="16" viewBox="0 0 24 24"
                  fill="none" stroke="currentColor" strokeWidth="1.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
              <p className="text-sm text-stone-400">{ep.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
