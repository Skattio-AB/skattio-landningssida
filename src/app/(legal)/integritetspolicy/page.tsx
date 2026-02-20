import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description:
    "Integritetspolicy för Skattio — så hanterar vi dina personuppgifter.",
};

export default function IntegritetspolicyPage() {
  return (
    <>
      <h1>Integritetspolicy</h1>
      <p className="lead">
        Senast uppdaterad: 2026-02-20
      </p>

      <h2>1. Personuppgiftsansvarig</h2>
      <p>
        Skattio AB är personuppgiftsansvarig för behandlingen av dina
        personuppgifter i samband med användning av våra tjänster.
      </p>

      <h2>2. Vilka uppgifter vi samlar in</h2>
      <p>
        Vi samlar in de uppgifter du själv lämnar till oss, såsom namn,
        e-postadress och ekonomisk information som behövs för att tillhandahålla
        våra tjänster.
      </p>

      <h2>3. Hur vi använder uppgifterna</h2>
      <p>
        Dina personuppgifter används för att tillhandahålla, underhålla och
        förbättra våra tjänster, samt för att kommunicera med dig om ditt konto
        och våra tjänster.
      </p>

      <h2>4. Laglig grund</h2>
      <p>
        Vi behandlar dina personuppgifter baserat på avtal (för att leverera
        tjänsten), berättigat intresse (för att förbättra tjänsten) och samtycke
        (för marknadsföring).
      </p>

      <h2>5. Delning av uppgifter</h2>
      <p>
        Vi delar inte dina personuppgifter med tredje part utöver vad som krävs
        för att leverera tjänsten eller vad som krävs enligt lag.
      </p>

      <h2>6. Dina rättigheter</h2>
      <p>
        Du har rätt att begära tillgång till, rättelse av och radering av dina
        personuppgifter. Du kan också begära begränsning av behandling och
        dataportabilitet.
      </p>

      <h2>7. Kontakt</h2>
      <p>
        Har du frågor om hur vi hanterar dina personuppgifter? Kontakta oss på{" "}
        <a href="mailto:info@skattio.se">info@skattio.se</a>.
      </p>
    </>
  );
}
