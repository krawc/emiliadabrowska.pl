"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !message) {
    return { success: false, error: "Uzupełnij wszystkie wymagane pola." };
  }

  try {
    await resend.emails.send({
      from: "Formularz kontaktowy <onboarding@resend.dev>",
      to: "kontakt@emiliadabrowska.pl",
      replyTo: email,
      subject: subject ? `[Kontakt] ${subject}` : `[Kontakt] Nowa wiadomość od ${name}`,
      text: `Imię i nazwisko: ${name}\nEmail: ${email}\nTemat: ${subject || "—"}\n\n${message}`,
    });

    return { success: true };
  } catch {
    return { success: false, error: "Coś poszło nie tak. Spróbuj ponownie." };
  }
}
