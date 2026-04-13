import { Metadata } from "next";
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
      <p className="text-stone-600 leading-relaxed mb-10">{content.intro}</p>

      {/* 1. Formularz */}
      <ContactForm fields={content.formFields} submitLabel={content.submitLabel} />

      {/* 2. Kontakt telefoniczny (manager) */}
      <div className="mt-12 border-t border-stone-100 pt-10">
        <p className="text-stone-600 text-sm leading-relaxed mb-3">
          {content.manager.context}
        </p>
        <p className="text-stone-900 font-medium">{content.manager.name}</p>
        <a
          href={`tel:${content.manager.phone.replace(/\s/g, "")}`}
          className="text-stone-500 hover:text-stone-900 transition-colors text-sm"
        >
          {content.manager.phone}
        </a>
      </div>

      {/* 3. Email + social */}
      <div className="mt-10 border-t border-stone-100 pt-10 flex flex-col gap-3 text-sm">
        <a
          href={`mailto:${content.email}`}
          className="text-stone-900 underline underline-offset-2 hover:text-stone-500 transition-colors"
        >
          {content.email}
        </a>
        <div className="flex gap-4">
          {content.social.map((s) => (
            <a
              key={s.name}
              href={s.url}
              className="text-stone-400 hover:text-stone-900 transition-colors"
            >
              {s.name}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
