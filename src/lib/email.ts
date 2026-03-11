import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendWelcomeEmail(email: string) {
  const { error } = await resend.emails.send({
    from: "Skattio <hej@skattio.se>",
    to: email,
    subject: "Välkommen till Skattios väntelista!",
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 520px; margin: 0 auto; padding: 0;">
        <div style="padding: 32px 32px 24px; border-bottom: 1px solid #F0F0F0;">
          <img src="https://skattio.se/logo.png" alt="Skattio" width="140" height="auto" style="display: block;" />
        </div>
        <div style="padding: 32px;">
          <h1 style="font-size: 22px; font-weight: 700; color: #0F1629; margin: 0 0 16px;">
            Välkommen till Skattio!
          </h1>
          <p style="font-size: 15px; line-height: 1.7; color: #525252; margin: 0 0 20px;">
            Tack för att du anmält dig till vår väntelista. Vi jobbar hårt för att göra deklarationen enklare med AI-stöd.
          </p>
          <p style="font-size: 15px; line-height: 1.7; color: #525252; margin: 0 0 20px;">
            Du är bland de första att få tillgång när vi lanserar. Vi hör av oss!
          </p>
        </div>
        <div style="padding: 24px 32px; border-top: 1px solid #F0F0F0; background: #FAFAFA;">
          <p style="font-size: 13px; color: #A3A3A3; margin: 0;">
            / Teamet bakom Skattio
          </p>
          <p style="font-size: 12px; color: #C4C4C4; margin: 8px 0 0;">
            © 2026 Skattio AB · <a href="https://skattio.se" style="color: #C4C4C4;">skattio.se</a>
          </p>
        </div>
      </div>
    `,
  });

  if (error) {
    throw new Error(error.message);
  }
}
