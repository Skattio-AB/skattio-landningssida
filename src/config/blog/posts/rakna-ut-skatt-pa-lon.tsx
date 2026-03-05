import type { BlogPost } from "../types";

export const raknautSkattpLon: BlogPost = {
  slug: "rakna-ut-skatt-pa-lon",
  title: "Räkna ut skatt på lön 2026 — Så mycket får du kvar",
  description:
    "Lär dig räkna ut skatten på din lön 2026. Vi förklarar kommunalskatt, statlig skatt, jobbskatteavdrag och hur mycket som blir kvar efter skatt.",
  publishedAt: "2026-02-15",
  keywords: [
    "lön efter skatt",
    "räkna skatt",
    "skattetabell",
    "räkna ut skatt på lön",
    "nettolön",
    "bruttolön",
  ],
  category: "Skatt på lön",
  content: () => (
    <>
      <h1>Räkna ut skatt på lön 2026 — Så mycket får du kvar</h1>

      <p>
        Att räkna ut skatt på lön kan kännas krångligt, men grundprincipen är
        enklare än du tror. Varje månad dras skatt från din bruttolön innan
        pengarna når ditt konto. Det du får ut — din nettolön — beror på var du
        bor, hur mycket du tjänar och vilka avdrag du har rätt till. I den här
        guiden förklarar vi hur du räknar ut skatten på din lön för 2026, vilka
        komponenter som påverkar och hur mycket du faktiskt får kvar.
      </p>

      <h2>Så fungerar skatt på lön i Sverige</h2>

      <p>
        I Sverige betalar du inkomstskatt på din lön i flera steg. Den största
        delen utgörs av kommunalskatt, som varierar beroende på vilken kommun du
        bor i. Utöver det kan du behöva betala statlig inkomstskatt om du tjänar
        över en viss nivå. Samtidigt finns det avdrag som minskar din totala
        skatt, framför allt jobbskatteavdraget och grundavdraget.
      </p>
      <p>
        Din arbetsgivare drar skatten direkt från din bruttolön varje månad
        enligt den skattetabell som gäller för din kommun. Skattetabellen tar
        hänsyn till kommunalskatt, grundavdrag och jobbskatteavdrag och ger ett
        ungefärligt belopp som ska dras varje månad.
      </p>

      <h2>Kommunalskatt — den största skatten</h2>

      <p>
        Kommunalskatten är den skatt som de flesta löntagare betalar. Den
        finansierar kommunal och regional verksamhet som skola, sjukvård och
        äldreomsorg. Den genomsnittliga kommunala skattesatsen i Sverige 2026
        ligger på cirka 32,37 procent, men den varierar kraftigt mellan
        kommuner. I Dorotea kommun betalar du exempelvis runt 35,15 procent
        medan invånare i Solna betalar cirka 29,18 procent.
      </p>
      <p>
        Kommunalskatten beräknas på din beskattningsbara förvärvsinkomst, det
        vill säga din bruttolön minus grundavdraget. Grundavdraget varierar
        beroende på din inkomstnivå och ligger 2026 på mellan 24 000 och
        40 500 kronor per år för de flesta löntagare.
      </p>

      <h2>Statlig inkomstskatt — för höga inkomster</h2>

      <p>
        Om din totala förvärvsinkomst överstiger skiktgränsen betalar du
        dessutom statlig inkomstskatt på 20 procent av den del som överstiger
        gränsen. För inkomståret 2026 ligger skiktgränsen på 613 900 kronor per
        år, vilket motsvarar ungefär 51 158 kronor per månad före skatt.
      </p>
      <p>
        Det innebär att om du har en månadslön på 55 000 kronor brutto betalar
        du 20 procent extra i skatt på de 3 842 kronor per månad som överstiger
        brytpunkten. Observera att brytpunkten (den inkomst där du faktiskt
        börjar betala statlig skatt) ligger högre än skiktgränsen på grund av
        grundavdraget — brytpunkten för 2026 är cirka 625 800 kronor.
      </p>

      <h2>Jobbskatteavdrag och grundavdrag</h2>

      <p>
        Jobbskatteavdraget infördes för att göra det mer lönsamt att arbeta.
        Avdraget minskar den skatt du betalar och görs automatiskt — du behöver
        inte ansöka om det. Storleken på jobbskatteavdraget beror på din
        inkomst, din ålder och din kommunala skattesats. För en person med
        genomsnittlig kommunalskatt och en månadslön på 35 000 kronor ligger
        jobbskatteavdraget på ungefär 2 900 kronor per månad.
      </p>
      <p>
        Grundavdraget är ett annat avdrag som minskar din beskattningsbara
        inkomst. Det görs automatiskt och varierar med inkomstnivån.
        Grundavdraget är som störst för låg- och medelinkomsttagare och minskar
        gradvis vid högre inkomster. Sammantaget gör dessa avdrag att den
        effektiva skattesatsen i Sverige är lägre än vad den nominella
        kommunala skattesatsen antyder.
      </p>

      <h2>Exempel: Nettolön vid olika bruttolöner 2026</h2>

      <p>
        Tabellen nedan visar ungefärlig nettolön för olika bruttolöner, baserat
        på en genomsnittlig kommunalskatt på 32,37 procent. Beloppen är
        avrundade och tar hänsyn till grundavdrag och jobbskatteavdrag.
      </p>

      <table>
        <thead>
          <tr>
            <th>Bruttolön (kr/mån)</th>
            <th>Skatt (kr/mån)</th>
            <th>Nettolön (kr/mån)</th>
            <th>Effektiv skattesats</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>25 000</td>
            <td>5 250</td>
            <td>19 750</td>
            <td>21,0 %</td>
          </tr>
          <tr>
            <td>30 000</td>
            <td>6 900</td>
            <td>23 100</td>
            <td>23,0 %</td>
          </tr>
          <tr>
            <td>35 000</td>
            <td>8 550</td>
            <td>26 450</td>
            <td>24,4 %</td>
          </tr>
          <tr>
            <td>40 000</td>
            <td>10 400</td>
            <td>29 600</td>
            <td>26,0 %</td>
          </tr>
          <tr>
            <td>50 000</td>
            <td>14 200</td>
            <td>35 800</td>
            <td>28,4 %</td>
          </tr>
          <tr>
            <td>60 000</td>
            <td>19 500</td>
            <td>40 500</td>
            <td>32,5 %</td>
          </tr>
        </tbody>
      </table>

      <p>
        Som du ser ökar den effektiva skattesatsen med inkomsten. En person som
        tjänar 25 000 kronor betalar drygt 21 procent i effektiv skatt tack
        vare jobbskatteavdraget, medan någon med 60 000 kronor betalar runt
        32,5 procent inklusive statlig skatt.
      </p>

      <h2>Hur läser du skattetabellen?</h2>

      <p>
        Skattetabellen är det verktyg din arbetsgivare använder för att veta hur
        mycket skatt som ska dras varje månad. Det finns olika tabeller beroende
        på om du har en kolumn (engångsbelopp eller oregelbunden inkomst) eller
        en löpande månadslön. Den vanligaste tabellen är kolumn 1, som gäller
        för de flesta heltidsanställda.
      </p>
      <p>
        Vilken skattetabell du tillhör beror på din kommuns totala
        skattesats. Skatteverket publicerar nya tabeller varje år. Du hittar din
        tabell genom att söka på din kommun på Skatteverkets webbplats, eller så
        kan du använda en skatteberäknare. Tabellen visar hur mycket skatt som
        ska dras för varje inkomstintervall, redan med hänsyn till grundavdrag
        och jobbskatteavdrag.
      </p>

      <h2>Vanliga frågor</h2>

      <h3>Vad är skillnaden mellan bruttolön och nettolön?</h3>
      <p>
        Bruttolön är din lön innan skatt dras. Det är det belopp som står i
        ditt anställningsavtal. Nettolön är det du faktiskt får utbetalt till
        ditt bankkonto efter att skatt och eventuella andra avdrag har dragits.
        Skillnaden mellan bruttolön och nettolön är alltså den inkomstskatt som
        din arbetsgivare drar och betalar in till Skatteverket åt dig.
      </p>

      <h3>Varför skiljer sig skatten mellan olika kommuner?</h3>
      <p>
        Kommunalskatten bestäms av din kommun och region. Varje kommun
        beslutar om sin egen skattesats baserat på kostnader för skola, vård,
        omsorg och annan kommunal verksamhet. Regionen bestämmer sin andel
        utifrån kostnader för framförallt sjukvård och kollektivtrafik. Därför
        kan den totala kommunala skattesatsen variera med flera procentenheter
        beroende på var i landet du bor.
      </p>

      <h3>Hur kan jag räkna ut min skatt snabbt?</h3>
      <p>
        Det enklaste sättet är att använda en skatteberäknare online. Du anger
        din bruttolön och vilken kommun du bor i, och får direkt se din
        uppskattade nettolön. Det är betydligt enklare än att manuellt räkna
        med skattetabeller och avdrag.
      </p>

      <p>
        Vill du snabbt och enkelt räkna ut din skatt på lönen? Med{" "}
        <a href="https://app.skattio.se">Skattio</a> kan du beräkna din
        nettolön på sekunder — ange din bruttolön, välj kommun och se direkt
        hur mycket du får kvar efter skatt.
      </p>
    </>
  ),
};
