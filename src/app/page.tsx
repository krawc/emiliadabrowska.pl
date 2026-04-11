import { Metadata } from "next";
import Image from "next/image";
import HtmlContent from "@/components/HtmlContent";
import content from "@/content/home.json";

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function HomePage() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      {/* Hero image — sticky on desktop */}
      <div className="lg:w-1/2 lg:sticky lg:top-0 lg:h-screen overflow-hidden bg-stone-100">
        <Image
          src={content.heroImage}
          alt={content.heroImageAlt}
          width={800}
          height={900}
          className="w-full h-64 lg:h-full object-cover"
          priority
          unoptimized
        />
      </div>

      {/* Text content */}
      <div className="lg:w-1/2 px-8 lg:px-16 py-12 lg:py-20">
        <h1
          className="text-4xl lg:text-5xl font-normal mb-3 text-stone-900"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          {content.heading}
        </h1>
        <p className="text-xs tracking-widest uppercase text-stone-400 mb-10 whitespace-pre-line leading-6">
          {content.subheading}
        </p>
        <HtmlContent html={content.content} />
      </div>
    </div>
  );
}
