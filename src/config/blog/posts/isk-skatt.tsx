import type { BlogPost } from "../types";

export const iskSkatt: BlogPost = {
  slug: "isk-skatt",
  title: "ISK-skatt 2026 — Så fungerar skatten på investeringssparkonto",
  description:
    "Hur beskattas ett ISK-konto 2026? Vi förklarar schablonbeskattning, skattesats, och när ISK är bättre än vanligt aktiekonto.",
  publishedAt: "2026-02-15",
  keywords: [
    "skatt isk",
    "isk skatt 2026",
    "isk konto",
    "investeringssparkonto skatt",
    "schablonbeskattning",
  ],
  category: "Sparande & investering",
  content: () => (
    <>
      <h1>ISK-skatt 2026 — Så fungerar skatten på investeringssparkonto</h1>

      <p>
        Investeringssparkontot (ISK) är en av de populäraste sparformerna i
        Sverige. Anledningen är enkel: du betalar skatt på ISK baserat på
        en schablonberäkning istället för på faktiska vinster och utdelningar.
        Det gör skattereglerna förutsägbara och förenklar deklarationen
        avsevärt. Men hur fungerar ISK-skatten egentligen, och vad är
        skattesatsen 2026? I den här guiden förklarar vi allt du behöver veta
        om schablonbeskattning, kapitalunderlag och när ISK är mer fördelaktigt
        än ett vanligt aktie- och fondkonto.
      </p>

      <h2>Så fungerar schablonbeskattning på ISK</h2>

      <p>
        Till skillnad från ett vanligt aktie- och fondkonto, där du betalar
        30 procent skatt på varje realiserad vinst och utdelning, beskattas
        ISK med en årlig schablonskatt. Skatten baseras inte på om du gjort
        vinst eller förlust — istället beräknas den utifrån värdet på dina
        tillgångar på kontot.
      </p>
      <p>
        Schablonbeskattningen innebär att du betalar skatt varje år oavsett
        om dina investeringar gått bra eller dåligt. Vid kraftiga
        börsnedgångar kan det upplevas som en nackdel, men över tid har
        ISK visat sig vara skattemässigt fördelaktigt för de allra flesta
        sparare.
      </p>

      <h2>Hur beräknas kapitalunderlaget?</h2>

      <p>
        Kapitalunderlaget är grunden för ISK-skatten och beräknas i fyra steg:
      </p>
      <ul>
        <li>
          Marknadsvärdet på tillgångarna per den 1 januari, 1 april,
          1 juli och 1 oktober summeras.
        </li>
        <li>
          Alla insättningar under året (inklusive överföringar av
          värdepapper) läggs till.
        </li>
        <li>
          Summan av kvartalsvärden plus insättningar divideras med fyra
          för att ge ett genomsnittligt kapitalunderlag.
        </li>
        <li>
          Om det genomsnittliga kapitalunderlaget är lägre än de totala
          insättningarna under året används insättningarna istället.
        </li>
      </ul>
      <p>
        Kapitalunderlaget multipliceras sedan med den så kallade
        schablonintäkten (statslåneräntan den 30 november föregående år
        plus 1 procentenhet, dock lägst 1,25 procent). Det resulterande
        beloppet, schablonintäkten, beskattas sedan som kapitalinkomst
        med 30 procent.
      </p>

      <h2>ISK-skattesats 2026</h2>

      <p>
        Skattesatsen på ISK för 2026 beror på statslåneräntan den
        30 november 2025. Antag att statslåneräntan ligger på
        2,08 procent — då blir schablonintäkten 3,08 procent
        (2,08 + 1,0). Den faktiska skatten blir då:
      </p>
      <p>
        <strong>
          3,08 % × 30 % = 0,924 % av kapitalunderlaget
        </strong>
      </p>
      <p>
        I praktiken innebär det att om du har 500 000 kronor på ditt
        ISK betalar du cirka 4 620 kronor i skatt under 2026,
        oavsett om du gjort vinst eller förlust. Jämfört med
        tidigare år då statslåneräntan var lägre har ISK-skatten
        ökat, men den är fortfarande förmånlig vid god avkastning.
      </p>
      <p>
        Det finns en golvnivå: schablonintäkten kan aldrig vara lägre
        än 1,25 procent, vilket ger en minimiskattesats på 0,375 procent
        av kapitalunderlaget. Under perioden 2020–2022, när
        statslåneräntan var nära noll, gällde denna golvnivå.
      </p>

      <h2>ISK jämfört med vanligt aktiekonto</h2>

      <p>
        På ett vanligt aktie- och fondkonto (även kallat depå) beskattas
        du med 30 procent på realiserade kapitalvinster och utdelningar.
        Det innebär att du inte betalar någon skatt förrän du säljer med
        vinst eller får utdelning. Förluster kan kvittas mot vinster.
      </p>
      <p>
        Fördelarna med ISK är tydligast vid hög avkastning. Nackdelarna
        märks framför allt vid negativ avkastning, då du fortfarande
        betalar schablonskatt trots att portföljen sjunkit i värde. Här
        är en jämförelse vid olika avkastningsnivåer med ett
        kapitalunderlag på 500 000 kronor:
      </p>

      <table>
        <thead>
          <tr>
            <th>Årlig avkastning</th>
            <th>Vinst (kr)</th>
            <th>Skatt ISK (kr)</th>
            <th>Skatt depå (kr)</th>
            <th>Fördel</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>-10 %</td>
            <td>-50 000</td>
            <td>4 620</td>
            <td>0</td>
            <td>Depå</td>
          </tr>
          <tr>
            <td>0 %</td>
            <td>0</td>
            <td>4 620</td>
            <td>0</td>
            <td>Depå</td>
          </tr>
          <tr>
            <td>3 %</td>
            <td>15 000</td>
            <td>4 620</td>
            <td>4 500</td>
            <td>Depå (marginellt)</td>
          </tr>
          <tr>
            <td>5 %</td>
            <td>25 000</td>
            <td>4 620</td>
            <td>7 500</td>
            <td>ISK</td>
          </tr>
          <tr>
            <td>10 %</td>
            <td>50 000</td>
            <td>4 620</td>
            <td>15 000</td>
            <td>ISK</td>
          </tr>
          <tr>
            <td>20 %</td>
            <td>100 000</td>
            <td>4 620</td>
            <td>30 000</td>
            <td>ISK</td>
          </tr>
        </tbody>
      </table>

      <p>
        Som tabellen visar är ISK fördelaktigt så fort din avkastning
        överstiger schablonintäkten (cirka 3 procent i detta exempel). Vid
        en avkastning på 10 procent betalar du bara en tredjedel av den
        skatt du hade betalat på en vanlig depå. Vid negativ avkastning
        eller nollavkastning är däremot depån mer fördelaktig.
      </p>

      <h2>När bör du välja ISK — och när inte?</h2>

      <p>
        ISK är generellt sett det bästa valet för långsiktigt sparande i
        aktier och fonder. Historiskt har Stockholmsbörsen avkastat
        omkring 8–10 procent per år i genomsnitt, vilket innebär att ISK
        har varit klart fördelaktigt under de flesta år.
      </p>
      <p>
        Det finns dock situationer där ett vanligt aktiekonto kan vara
        bättre:
      </p>
      <ul>
        <li>
          <strong>Mycket låg förväntad avkastning</strong> — Om du
          placerar i tillgångar med låg förväntad avkastning, exempelvis
          obligationsfonder med låg ränta, kan schablonskatten äta upp en
          större andel av vinsten.
        </li>
        <li>
          <strong>Kortvariga nedgångar</strong> — Under år med kraftiga
          börsnedgångar betalar du fortfarande schablonskatt. På en depå
          hade du inte betalat någon skatt alls vid förlust.
        </li>
        <li>
          <strong>Orealiserade vinster och skatteplanering</strong> — På en
          depå kan du styra när du realiserar vinster och därmed styra
          skatteutfallet. Den möjligheten finns inte på ISK.
        </li>
        <li>
          <strong>Förluster att kvitta</strong> — Om du har stora
          realiserade förluster på en depå kan du kvitta dem mot vinster,
          vilket inte är möjligt på ISK.
        </li>
      </ul>
      <p>
        För de allra flesta privatpersoner som sparar regelbundet och
        långsiktigt i breda aktiefonder eller enskilda aktier är ISK det
        mest skatteeffektiva alternativet.
      </p>

      <h2>Vanliga frågor</h2>

      <h3>Behöver jag deklarera mitt ISK själv?</h3>
      <p>
        Nej, inte i praktiken. Din bank eller mäklare rapporterar automatiskt
        ditt kapitalunderlag och din schablonintäkt till Skatteverket.
        Uppgifterna förtrycks i din deklaration. Du behöver bara kontrollera
        att beloppet stämmer. Skatten dras sedan som en del av din slutskatt
        — du behöver inte själv beräkna eller betala in den separat.
      </p>

      <h3>Vad händer om jag har flera ISK-konton?</h3>
      <p>
        Om du har ISK hos flera banker eller mäklare beräknas
        schablonintäkten separat för varje konto. Varje kontohållare
        rapporterar sitt eget kapitalunderlag. I deklarationen summeras
        schablonintäkterna från alla dina ISK. Det finns ingen fördel
        eller nackdel med att sprida dina investeringar på flera ISK
        ur skattesynpunkt — den totala skatten blir densamma.
      </p>

      <h3>Beskattas utdelningar på ISK?</h3>
      <p>
        Nej, inte separat. Utdelningar som betalas ut till ditt ISK ingår
        i schablonbeskattningen. Du betalar ingen extra skatt på
        utdelningarna. Det är en av de stora fördelarna med ISK — alla
        utdelningar och vinster återinvesteras skattefritt inom kontot.
        Den enda skatten du betalar är den årliga schablonskatten baserad
        på kapitalunderlaget.
      </p>

      <p>
        Vill du räkna ut exakt hur mycket ISK-skatt du betalar 2026?
        Med <a href="https://app.skattio.se">Skattio</a> kan du beräkna
        din totala skatt inklusive schablonintäkt på ISK och se hur det
        påverkar din deklaration.
      </p>
    </>
  ),
};
