import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookies",
  description:
    "Cookiepolicy för Skattio — information om hur vi använder cookies.",
};

export default function CookiesPage() {
  return (
    <>
      <h1>Cookiepolicy</h1>
      <p className="lead">
        Senast uppdaterad: 2026-02-20
      </p>

      <h2>1. Vad är cookies?</h2>
      <p>
        Cookies är små textfiler som lagras på din enhet när du besöker en
        webbplats. De används för att webbplatsen ska fungera korrekt och för
        att ge oss information om hur webbplatsen används.
      </p>

      <h2>2. Vilka cookies använder vi?</h2>
      <p>
        Vi använder följande typer av cookies:
      </p>
      <ul>
        <li>
          <strong>Nödvändiga cookies</strong> — Krävs för att webbplatsen ska
          fungera, t.ex. för inloggning och sessionshantering.
        </li>
        <li>
          <strong>Analyscookies</strong> — Hjälper oss förstå hur besökare
          använder webbplatsen så att vi kan förbättra den.
        </li>
        <li>
          <strong>Funktionella cookies</strong> — Sparar dina inställningar och
          preferenser för en bättre upplevelse.
        </li>
      </ul>

      <h2>3. Hantera cookies</h2>
      <p>
        Du kan själv hantera och radera cookies via din webbläsares
        inställningar. Observera att vissa delar av webbplatsen kan sluta
        fungera om du blockerar nödvändiga cookies.
      </p>

      <h2>4. Kontakt</h2>
      <p>
        Har du frågor om vår användning av cookies? Kontakta oss på{" "}
        <a href="mailto:info@skattio.se">info@skattio.se</a>.
      </p>
    </>
  );
}
