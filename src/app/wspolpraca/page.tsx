import { Metadata } from "next";
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
      <HtmlContent html={content.content} />
    </div>
  );
}
