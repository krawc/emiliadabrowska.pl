import { Metadata } from "next";
import HtmlContent from "@/components/HtmlContent";
import ContactForm from "@/components/ContactForm";
import content from "@/content/kontakt.json";

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function KontaktPage() {
  return (
    <div className="px-8 lg:px-16 py-12 lg:py-20 max-w-2xl">
      <h1
        className="text-4xl lg:text-5xl font-normal mb-6 text-stone-900"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {content.heading}
      </h1>
      <HtmlContent html={content.content} className="mb-2" />

      <div className="mb-8 text-sm text-stone-500">
        <a
          href={`mailto:${content.email}`}
          className="text-stone-900 underline underline-offset-2 hover:text-stone-500 transition-colors"
        >
          {content.email}
        </a>
        <div className="flex gap-4 mt-3">
          {content.social.map((s) => (
            <a
              key={s.name}
              href={s.url}
              className="text-stone-400 hover:text-stone-900 transition-colors text-sm"
            >
              {s.name}: {s.handle}
            </a>
          ))}
        </div>
      </div>

      <ContactForm fields={content.formFields} submitLabel={content.submitLabel} />
    </div>
  );
}
