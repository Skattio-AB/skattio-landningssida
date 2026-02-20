import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GDPR",
  description:
    "Information om hur Skattio efterlever GDPR och skyddar dina rättigheter.",
};

export default function GdprPage() {
  return (
    <>
      <h1>GDPR</h1>
      <p className="lead">
        Senast uppdaterad: 2026-02-20
      </p>

      <h2>1. Vårt åtagande</h2>
      <p>
        Skattio är engagerade i att skydda dina personuppgifter i enlighet med
        EU:s dataskyddsförordning (GDPR). Vi vidtar lämpliga tekniska och
        organisatoriska åtgärder för att säkerställa en hög skyddsnivå.
      </p>

      <h2>2. Dina rättigheter enligt GDPR</h2>
      <p>Som registrerad har du följande rättigheter:</p>
      <ul>
        <li>
          <strong>Rätt till tillgång</strong> — Du kan begära en kopia av de
          personuppgifter vi har om dig.
        </li>
        <li>
          <strong>Rätt till rättelse</strong> — Du kan begära att felaktiga
          uppgifter korrigeras.
        </li>
        <li>
          <strong>Rätt till radering</strong> — Du kan begära att dina
          personuppgifter raderas.
        </li>
        <li>
          <strong>Rätt till begränsning</strong> — Du kan begära att
          behandlingen av dina uppgifter begränsas.
        </li>
        <li>
          <strong>Rätt till dataportabilitet</strong> — Du kan begära att få
          dina uppgifter i ett maskinläsbart format.
        </li>
        <li>
          <strong>Rätt att göra invändningar</strong> — Du kan invända mot viss
          behandling av dina uppgifter.
        </li>
      </ul>

      <h2>3. Dataskyddsombud</h2>
      <p>
        Du kan kontakta oss angående dataskyddsfrågor på{" "}
        <a href="mailto:info@skattio.se">info@skattio.se</a>.
      </p>

      <h2>4. Klagomål</h2>
      <p>
        Om du anser att vi inte hanterar dina personuppgifter korrekt har du
        rätt att lämna in ett klagomål till Integritetsskyddsmyndigheten (IMY).
      </p>
    </>
  );
}
