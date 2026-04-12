import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HtmlContent from "@/components/HtmlContent";
import rawContent from "@/content/sklep.json";

type ShopItem = {
  id: string;
  title: string;
  description: string;
  price: string;
  image: string;
  badge: string | null;
  url: string;
};

type Category = {
  id: string;
  name: string;
  items: ShopItem[];
};

const content = { ...rawContent, categories: rawContent.categories as Category[] };

export const metadata: Metadata = {
  title: content.meta.title,
  description: content.meta.description,
};

export default function SklepPage() {
  return (
    <div className="px-8 lg:px-16 py-12 lg:py-20 max-w-5xl">
      <h1
        className="text-4xl lg:text-5xl font-normal mb-6 text-stone-900"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        {content.heading}
      </h1>
      <HtmlContent html={content.content} className="mb-12" />

      {content.categories.length === 0 && (
        <p className="text-stone-400 text-sm">Ta sekcja jest na razie pusta.</p>
      )}

      {content.categories.map((category) => (
        <section key={category.id} className="mb-16">
          <h2 className="text-xs tracking-widest uppercase text-stone-400 mb-6 pb-3 border-b border-stone-100">
            {category.name}
          </h2>
          {category.items.length === 0 && (
            <p className="text-stone-400 text-sm">Ta sekcja jest na razie pusta.</p>
          )}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.items.map((item) => (
              <div
                key={item.id}
                className="flex flex-col border border-stone-100 overflow-hidden hover:border-stone-300 transition-colors"
              >
                <div className="relative bg-stone-50 aspect-square overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                  {item.badge && (
                    <span className="absolute top-3 left-3 bg-stone-900 text-white text-xs px-2 py-1 tracking-wider uppercase">
                      {item.badge}
                    </span>
                  )}
                </div>
                <div className="p-5 flex flex-col flex-1">
                  <h3 className="font-medium text-stone-900 mb-2 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed mb-4 flex-1">
                    {item.description}
                  </p>
                  <div className="flex items-center justify-between mt-auto">
                    <span
                      className="text-lg font-normal"
                      style={{ fontFamily: "var(--font-playfair)" }}
                    >
                      {item.price}
                    </span>
                    <Link
                      href={item.url}
                      className="text-xs tracking-widest uppercase border border-stone-900 text-stone-900 px-4 py-2 hover:bg-stone-900 hover:text-white transition-colors"
                    >
                      Kup
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
