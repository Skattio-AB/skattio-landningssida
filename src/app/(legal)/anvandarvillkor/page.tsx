import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Användarvillkor",
  description:
    "Användarvillkor för Skattio — villkor som gäller när du använder våra tjänster.",
};

export default function AnvandarvillkorPage() {
  return (
    <>
      <h1>Användarvillkor</h1>
      <p className="lead">
        Senast uppdaterad: 2026-02-20
      </p>

      <h2>1. Allmänt</h2>
      <p>
        Dessa användarvillkor reglerar din användning av Skattios tjänster.
        Genom att använda våra tjänster godkänner du dessa villkor.
      </p>

      <h2>2. Tjänstebeskrivning</h2>
      <p>
        Skattio tillhandahåller digitala verktyg för skatteberäkning och
        deklarationshjälp. Tjänsten är avsedd som ett stöd och ersätter inte
        professionell skatterådgivning.
      </p>

      <h2>3. Användarkonto</h2>
      <p>
        För att använda tjänsten behöver du skapa ett konto. Du ansvarar för att
        hålla dina inloggningsuppgifter säkra och för all aktivitet som sker
        under ditt konto.
      </p>

      <h2>4. Betalning och priser</h2>
      <p>
        Aktuella priser visas på vår webbplats. Vi förbehåller oss rätten att
        ändra priserna med 30 dagars förvarning.
      </p>

      <h2>5. Ansvarsbegränsning</h2>
      <p>
        Skattio ansvarar inte för eventuella fel i skatteberäkningar. Användaren
        bär alltid det slutgiltiga ansvaret för sin deklaration.
      </p>

      <h2>6. Ändringar av villkoren</h2>
      <p>
        Vi kan komma att uppdatera dessa villkor. Vid väsentliga ändringar
        meddelar vi dig via e-post eller genom ett meddelande i tjänsten.
      </p>

      <h2>7. Kontakt</h2>
      <p>
        Har du frågor om våra användarvillkor? Kontakta oss på{" "}
        <a href="mailto:info@skattio.se">info@skattio.se</a>.
      </p>
    </>
  );
}
