import type { BlogPost } from "../types";

export const skattPaFonder: BlogPost = {
  slug: "skatt-pa-fonder",
  title: "Skatt på fonder 2026 — Så deklarerar du fondinnehav",
  description:
    "Hur beskattas fonder i Sverige 2026? Vi förklarar skillnaden mellan ISK, kapitalförsäkring och vanligt fondkonto samt hur du deklarerar.",
  publishedAt: "2026-02-15",
  keywords: [
    "skatt på fonder",
    "fonder försäljning",
    "fondskatt",
    "deklarera fonder",
    "skatt fondkonto",
  ],
  category: "Sparande & investering",
  content: () => (
    <>
      <h1>Skatt på fonder 2026 — Så deklarerar du fondinnehav</h1>

      <p>
        Sparar du i fonder? Då är det viktigt att förstå hur skatt på fonder
        fungerar i Sverige. Beskattningen skiljer sig kraftigt beroende på
        vilken typ av konto du har — ISK, kapitalförsäkring eller vanligt
        fondkonto. Det påverkar både hur mycket skatt du betalar och hur du
        deklarerar. I den här guiden går vi igenom de olika kontotyperna,
        förklarar hur du räknar ut skatten och ger dig konkreta tips för att
        deklarera ditt fondinnehav 2026.
      </p>

      <h2>Tre kontotyper — tre olika skatteregler</h2>

      <p>
        I Sverige kan du äga fonder på tre sätt, och varje typ beskattas
        helt olika:
      </p>

      <ul>
        <li>
          <strong>Investeringssparkonto (ISK)</strong> — schablonbeskattning
          baserat på värdet, oavsett vinst eller förlust.
        </li>
        <li>
          <strong>Kapitalförsäkring (KF)</strong> — schablonbeskattning
          liknande ISK, men med vissa skillnader i ägande och rösträtt.
        </li>
        <li>
          <strong>Traditionellt fondkonto (depå)</strong> — 30 procent skatt
          på faktisk vinst vid försäljning och på utdelningar.
        </li>
      </ul>

      <h2>Jämförelse av kontotyper</h2>

      <table>
        <thead>
          <tr>
            <th>Egenskap</th>
            <th>ISK</th>
            <th>Kapitalförsäkring</th>
            <th>Fondkonto (depå)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Beskattningsmodell</td>
            <td>Schablonskatt</td>
            <td>Schablonskatt</td>
            <td>Reavinstskatt (30 %)</td>
          </tr>
          <tr>
            <td>Skattesats 2026</td>
            <td>~0,89 % av kapitalunderlaget</td>
            <td>~0,89 % av kapitalunderlaget</td>
            <td>30 % på vinst</td>
          </tr>
          <tr>
            <td>Skatt vid vinst</td>
            <td>Samma oavsett vinst</td>
            <td>Samma oavsett vinst</td>
            <td>30 % på vinsten</td>
          </tr>
          <tr>
            <td>Skatt vid förlust</td>
            <td>Betalar ändå schablonskatt</td>
            <td>Betalar ändå schablonskatt</td>
            <td>Avdrag för förlust</td>
          </tr>
          <tr>
            <td>Deklaration</td>
            <td>Automatiskt förfylld</td>
            <td>Automatiskt förfylld</td>
            <td>Du deklarerar själv (K4)</td>
          </tr>
          <tr>
            <td>Utdelning</td>
            <td>Ingen extra skatt</td>
            <td>Ingen extra skatt</td>
            <td>30 % skatt på utdelning</td>
          </tr>
        </tbody>
      </table>

      <h2>ISK — Investeringssparkonto</h2>

      <p>
        ISK är den populäraste kontotypen för fondsparande i Sverige, och av
        goda skäl. I stället för att betala skatt på varje vinst betalar du
        en låg årlig schablonskatt baserad på kontots totala värde. Det
        innebär att du inte behöver tänka på skatt vid köp, sälj eller byten
        av fonder inom kontot.
      </p>

      <p>
        Schablonintäkten beräknas som kapitalunderlaget (genomsnittet av
        kontots värde vid årets fyra kvartalsskiften plus insättningar)
        multiplicerat med statslåneräntan den 30 november föregående år plus
        ett procenttillägg. För 2026 beräknas schablonintäkten ligga kring
        2,96 procent av kapitalunderlaget. Du beskattas sedan med 30 procent
        på schablonintäkten, vilket ger en effektiv skatt på cirka 0,89
        procent av ditt kapital.
      </p>

      <p>
        <strong>Exempel:</strong> Om du har 500 000 kronor på ditt ISK i
        genomsnitt under 2026 blir schablonintäkten 14 800 kronor (500 000 ×
        2,96 %) och skatten 4 440 kronor (14 800 × 30 %). Du betalar denna
        skatt oavsett om kontot gått upp eller ner i värde.
      </p>

      <p>
        ISK-skatten deklareras automatiskt — Skatteverket hämtar uppgifterna
        från din bank eller fondhandlare. Du behöver normalt inte göra något
        alls.
      </p>

      <h2>Kapitalförsäkring</h2>

      <p>
        En kapitalförsäkring fungerar skattemässigt mycket likt ett ISK.
        Skillnaden är juridisk: med en kapitalförsäkring äger
        försäkringsbolaget formellt dina fonder, medan du är förmånstagare.
        Det innebär att du inte har rösträtt på bolagsstämmor och att
        kapitalförsäkringen inte omfattas av insättningsgarantin.
      </p>

      <p>
        Skatteberäkningen är densamma som för ISK — en schablonintäkt
        baserad på kapitalunderlaget, beskattad med 30 procent. Den
        effektiva skattesatsen blir alltså samma, cirka 0,89 procent för
        2026.
      </p>

      <p>
        Kapitalförsäkring kan vara intressant om du vill kunna byta
        förmånstagare (t.ex. vid arvsplanering) eller om din bank erbjuder
        fonder som inte finns tillgängliga på ISK.
      </p>

      <h2>Traditionellt fondkonto (depå) — reavinstskatt</h2>

      <p>
        Med ett vanligt fondkonto (depå) beskattas du på traditionellt
        sätt: 30 procent kapitalskatt på vinsten vid försäljning och 30
        procent skatt på utdelningar. Det innebär att du inte betalar någon
        skatt förrän du faktiskt säljer — men när du gör det kan skatten
        bli betydligt högre än på ett ISK.
      </p>

      <p>
        Å andra sidan: om dina fonder går ner i värde och du säljer med
        förlust kan du dra av förlusten mot andra kapitalvinster. Det är en
        fördel som ISK-sparare inte har.
      </p>

      <h3>Hur beräknar du vinsten? Genomsnittsmetoden</h3>

      <p>
        När du säljer fonder på en depå använder du genomsnittsmetoden
        (även kallad snittkursmetoden) för att beräkna ditt
        omkostnadsbelopp. Det fungerar så här:
      </p>

      <ul>
        <li>Summera det totala beloppet du betalat för alla andelar i fonden.</li>
        <li>Dela med det totala antalet andelar du äger.</li>
        <li>Det ger ditt genomsnittliga anskaffningsvärde per andel.</li>
        <li>
          Vid försäljning: Vinst = Försäljningspris − (Genomsnittligt
          anskaffningsvärde × Antal sålda andelar).
        </li>
      </ul>

      <p>
        <strong>Exempel:</strong> Du har köpt fondandelar vid tre tillfällen:
      </p>

      <table>
        <thead>
          <tr>
            <th>Köp</th>
            <th>Antal andelar</th>
            <th>Pris per andel</th>
            <th>Totalt</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Januari 2023</td>
            <td>100</td>
            <td>150 kr</td>
            <td>15 000 kr</td>
          </tr>
          <tr>
            <td>Juni 2024</td>
            <td>80</td>
            <td>175 kr</td>
            <td>14 000 kr</td>
          </tr>
          <tr>
            <td>Mars 2025</td>
            <td>60</td>
            <td>200 kr</td>
            <td>12 000 kr</td>
          </tr>
        </tbody>
      </table>

      <p>
        Totalt har du 240 andelar för 41 000 kronor. Genomsnittligt
        anskaffningsvärde: 41 000 / 240 = 170,83 kronor per andel. Om du
        säljer 100 andelar för 220 kronor styck (22 000 kronor) blir
        vinsten: 22 000 − (170,83 × 100) = 4 917 kronor. Skatten blir
        4 917 × 30 % = 1 475 kronor.
      </p>

      <h2>Deklarera fondförsäljning — K4-blanketten</h2>

      <p>
        Fondförsäljningar på en traditionell depå deklareras på blankett K4,
        avsnitt D (Övriga värdepapper). Du fyller i:
      </p>

      <ul>
        <li>Fondnamn och ISIN-nummer.</li>
        <li>Antal sålda andelar.</li>
        <li>Försäljningspris (totalt).</li>
        <li>Omkostnadsbelopp (genomsnittsmetoden).</li>
        <li>Vinst eller förlust.</li>
      </ul>

      <p>
        De flesta banker skickar kontrolluppgifter till Skatteverket som
        förfyller delar av K4, men det är ditt ansvar att kontrollera att
        uppgifterna stämmer — särskilt omkostnadsbeloppet, som inte alltid
        förfylls korrekt.
      </p>

      <p>
        Har du inte sålt några fonder under året behöver du inte göra något
        för din depå. Det är bara vid försäljning (eller utdelning) som skatt
        uppstår.
      </p>

      <h2>Vanliga frågor</h2>

      <h3>Är det alltid bättre att spara på ISK?</h3>
      <p>
        I de allra flesta fall ja, särskilt om du förväntar dig en avkastning
        som överstiger schablonintäkten (cirka 2,96 procent 2026). Men om
        du förväntar dig mycket låg avkastning, eller om du vill kunna kvitta
        förluster mot vinster, kan en depå vara fördelaktigare. Generellt
        rekommenderas ISK för de flesta långsiktiga fondsparare.
      </p>

      <h3>Måste jag deklarera mina ISK-fonder?</h3>
      <p>
        Nej, inte aktivt. Skatteverket hämtar automatiskt uppgifter om ditt
        ISK från din bank och fyller i schablonintäkten i deklarationen. Du
        behöver bara kontrollera att uppgifterna ser rimliga ut. Du behöver
        aldrig deklarera enskilda köp eller försäljningar inom ett ISK.
      </p>

      <h3>Vad händer med utländska fonder på en depå?</h3>
      <p>
        Utländska fonder (fonder som inte är registrerade i Sverige) kan ha
        annan beskattning. Utdelning från utländska fonder kan beläggas med
        källskatt i ursprungslandet. Denna skatt kan du i regel avräkna mot
        din svenska skatt genom att begära avräkning i deklarationen. Se till
        att du har kontrolluppgifter som visar eventuell innehållen utländsk
        skatt.
      </p>

      <h2>Sammanfattning</h2>

      <p>
        Skatt på fonder behöver inte vara krångligt. Sparar du på ISK eller
        kapitalförsäkring sköts det mesta automatiskt. Har du ett
        traditionellt fondkonto bör du ha koll på genomsnittsmetoden och
        K4-blanketten. Oavsett kontotyp lönar det sig att förstå hur
        beskattningen fungerar — det kan spara dig tusentals kronor.
      </p>

      <p>
        Behöver du hjälp att deklarera dina fondinnehav eller vill du se
        hur skatten påverkar just ditt sparande? Med{" "}
        <a href="https://app.skattio.se">Skattio</a> kan du enkelt få
        överblick över din skattesituation och deklarera korrekt — snabbt,
        digitalt och utan krångel.
      </p>
    </>
  ),
};
