import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter – Emilia Dąbrowska",
  description: "Zapisz się do newslettera i odbierz prezent powitalny. Wiedza, narzędzia i inspiracje prosto na Twoją skrzynkę.",
};

export default function NewsletterPage() {
  return (
    <div className="max-w-xl px-8 lg:px-16 py-12 lg:py-20">
      <h1
        className="text-4xl lg:text-5xl font-normal mb-6 text-stone-900"
        style={{ fontFamily: "var(--font-playfair)" }}
      >
        Newsletter
      </h1>
      <p className="text-stone-600 leading-relaxed mb-4">
        Wiedza, narzędzia i konkretne strategie — prosto na Twoją skrzynkę.
        Bez spamu, bez lania wody. Tylko to, co naprawdę może wnieść różnicę.
      </p>
      <p className="text-stone-600 leading-relaxed mb-10">
        Za zapis czeka na Ciebie prezent powitalny.
      </p>

      {/*
        Wklej tutaj kod formularza z MailerLite:
        Forms → Embedded forms → wybierz formularz → "Embed code" → skopiuj div + script
        Przykład: <div class="ml-embedded" data-form="TWÓJ_FORM_ID"></div>
      */}
    </div>
  );
}
