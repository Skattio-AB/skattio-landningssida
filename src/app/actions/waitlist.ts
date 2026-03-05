"use server";

import { sql } from "@/lib/db";
import { sendWelcomeEmail } from "@/lib/email";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export type WaitlistState = {
  success: boolean;
  error?: string;
};

export async function joinWaitlist(
  _prev: WaitlistState | null,
  formData: FormData
): Promise<WaitlistState> {
  const email = (formData.get("email") as string)?.trim().toLowerCase();

  if (!email || !EMAIL_RE.test(email)) {
    return { success: false, error: "Ange en giltig e-postadress." };
  }

  try {
    const result = await sql`
      INSERT INTO waitlist (email)
      VALUES (${email})
      ON CONFLICT (email) DO NOTHING
      RETURNING id
    `;

    // Only send welcome email for new signups (not duplicates)
    if (result.length > 0) {
      sendWelcomeEmail(email).catch(() => {
        // Non-blocking — don't fail the signup if email fails
      });
    }

    return { success: true };
  } catch {
    return { success: false, error: "Något gick fel. Försök igen." };
  }
}
