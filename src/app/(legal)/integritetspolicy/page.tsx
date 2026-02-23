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
      <p className="lead">Senast uppdaterad: 2026-02-23</p>

      <h2>1. Insamling av Information</h2>
      <p>Vi samlar in följande typer av information:</p>
      <ul>
        <li>
          <strong>Personuppgifter:</strong> Namn, adress, personnummer.
        </li>
        <li>
          <strong>Ekonomisk data:</strong> Skatteunderlag och avdrag.
        </li>
        <li>
          <strong>Teknisk data:</strong> IP-adress, webbläsartyp.
        </li>
      </ul>

      <h2>2. Hur Använder vi Dina Uppgifter?</h2>
      <ul>
        <li>
          För att bearbeta din deklaration och uppfylla lagliga krav.
        </li>
        <li>
          För att förbättra våra tjänster genom anonymiserad dataanalys.
        </li>
      </ul>

      <h2>3. Dina Rättigheter</h2>
      <ul>
        <li>
          <strong>Åtkomst:</strong> Du har rätt att begära en kopia av de
          personuppgifter vi lagrar om dig.
        </li>
        <li>
          <strong>Radering:</strong> Du kan begära att dina uppgifter raderas,
          förutsatt att de inte längre behövs för lagliga ändamål.
        </li>
      </ul>
    </>
  );
}
