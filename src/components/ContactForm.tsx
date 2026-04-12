"use client";

import { useState } from "react";
import { sendContactEmail } from "@/app/actions/sendEmail";

interface FormField {
  name: string;
  label: string;
  type: string;
  required: boolean;
  options?: string[];
}

interface ContactFormProps {
  fields: FormField[];
  submitLabel: string;
}

export default function ContactForm({ fields, submitLabel }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [values, setValues] = useState<Record<string, string>>({});

  function handleChange(name: string, value: string) {
    setValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const formData = new FormData(e.currentTarget);
    const result = await sendContactEmail(formData);
    setLoading(false);
    if (result.success) {
      setSubmitted(true);
    } else {
      setError(result.error ?? "Coś poszło nie tak.");
    }
  }

  if (submitted) {
    return (
      <div className="border border-stone-200 p-8 text-center">
        <p className="text-stone-600">Dziękuję za wiadomość! Odezwę się wkrótce.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-1.5">
          <label
            htmlFor={field.name}
            className="text-xs tracking-widest uppercase text-stone-500"
          >
            {field.label}
            {field.required && <span className="text-stone-300 ml-1">*</span>}
          </label>

          {field.type === "textarea" ? (
            <textarea
              id={field.name}
              name={field.name}
              required={field.required}
              rows={5}
              value={values[field.name] ?? ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="border border-stone-200 px-4 py-3 text-sm text-stone-900 placeholder-stone-300 focus:outline-none focus:border-stone-500 resize-none transition-colors"
            />
          ) : field.type === "select" ? (
            <select
              id={field.name}
              name={field.name}
              required={field.required}
              value={values[field.name] ?? ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="border border-stone-200 px-4 py-3 text-sm text-stone-900 focus:outline-none focus:border-stone-500 transition-colors bg-white appearance-none"
            >
              <option value="">— wybierz —</option>
              {field.options?.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              required={field.required}
              value={values[field.name] ?? ""}
              onChange={(e) => handleChange(field.name, e.target.value)}
              className="border border-stone-200 px-4 py-3 text-sm text-stone-900 placeholder-stone-300 focus:outline-none focus:border-stone-500 transition-colors"
            />
          )}
        </div>
      ))}

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-2 border border-stone-900 text-stone-900 text-xs tracking-widest uppercase py-4 hover:bg-stone-900 hover:text-white transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
      >
        {loading ? "Wysyłanie…" : submitLabel}
      </button>
    </form>
  );
}
