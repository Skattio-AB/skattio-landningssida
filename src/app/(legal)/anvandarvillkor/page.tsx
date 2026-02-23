import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Allmänna Villkor",
  description:
    "Allmänna villkor för användning av Skattio AB — villkor som gäller när du använder våra tjänster.",
};

export default function AnvandarvillkorPage() {
  return (
    <>
      <h1>Allmänna Villkor för Användning av Skattio AB produkter</h1>
      <p className="lead">Senast uppdaterad: 2026-02-23</p>

      <h2>1. Introduktion</h2>
      <p>
        Välkommen till Skattio AB! Skattio tillhandahåller verktyg för att samla
        in, bearbeta och skicka in skattedeklarationer. Tjänsten är informativ
        och rådgivande.
      </p>

      <h2>2. Ansvarsfriskrivning &amp; begränsning</h2>
      <ul>
        <li>
          Vi strävar efter att tillhandahålla korrekt information men garanterar
          inte att tjänsten är helt felfri.
        </li>
        <li>
          Skattio ansvarar inte för eventuella fel i deklarationen orsakade av
          inmatning av felaktiga uppgifter av användaren.
        </li>
        <li>
          Skattio ansvarar inte för direkta, indirekta eller oavsiktliga skador
          som uppstår vid användning av tjänsten.
        </li>
        <li>
          Vårt ansvar är begränsat till det belopp du har betalat för tjänsten
          under den aktuella perioden.
        </li>
      </ul>

      <h2>3. Integritet och Dataskydd</h2>
      <p>
        Vi tar din integritet på största allvar och följer GDPR och andra
        tillämpliga lagar.
      </p>
      <ul>
        <li>
          <strong>Datainsamling:</strong> Vi samlar endast in data som är
          nödvändig för att tillhandahålla våra tjänster, t.ex. personuppgifter
          och skatteuppgifter. Vi använder kryptering och andra
          säkerhetsåtgärder för att skydda dina data.
        </li>
        <li>
          <strong>Tredje parter:</strong> Vi delar inte dina personuppgifter med
          tredje part utan ditt uttryckliga medgivande, utom när det krävs enligt
          lag (t.ex. till skattemyndigheter) och vi säljer inte din information.
          Läs vår fullständiga{" "}
          <a href="/integritetspolicy">Integritetspolicy</a> för mer
          information.
        </li>
      </ul>

      <h2>4. Immateriella Rättigheter</h2>
      <ul>
        <li>
          Alla rättigheter till tjänsten, inklusive men inte begränsat till
          design, logotyper och programvara, tillhör Skattio AB.
        </li>
        <li>
          Du får inte kopiera, distribuera eller använda innehåll från tjänsten
          utan skriftligt medgivande.
        </li>
      </ul>

      <h2>5. Uppsägning av Konto</h2>
      <ul>
        <li>
          Tjänsten upphör att gälla i samband med avslutningen av det aktuella
          deklarationsåret.
        </li>
        <li>
          Du kan när som helst avsluta ditt konto genom att kontakta kundtjänst.
        </li>
        <li>
          Vi förbehåller oss rätten att avsluta konton som bryter mot dessa
          villkor.
        </li>
      </ul>

      <h2>6. Ändringar i Villkor</h2>
      <p>
        Skattio kan komma att uppdatera dessa villkor. Du informeras om större
        ändringar via e-post eller en notis i tjänsten. Fortsatt användning
        innebär att du accepterar de uppdaterade villkoren.
      </p>
    </>
  );
}
