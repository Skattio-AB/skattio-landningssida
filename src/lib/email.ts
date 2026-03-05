import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(email: string) {
  await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL || "Skattio <hej@skattio.se>",
    to: email,
    subject: "Välkommen till Skattios väntelista!",
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px;">
        <h1 style="font-size: 24px; font-weight: 700; color: #0F1629; margin-bottom: 16px;">
          Välkommen till Skattio!
        </h1>
        <p style="font-size: 16px; line-height: 1.6; color: #525252; margin-bottom: 24px;">
          Tack för att du anmält dig till vår väntelista. Vi jobbar hårt för att göra deklarationen enklare med AI-stöd.
        </p>
        <p style="font-size: 16px; line-height: 1.6; color: #525252; margin-bottom: 24px;">
          Du är bland de första att få tillgång när vi lanserar. Vi hör av oss!
        </p>
        <p style="font-size: 14px; color: #A3A3A3;">
          / Teamet bakom Skattio
        </p>
      </div>
    `,
  });
}
