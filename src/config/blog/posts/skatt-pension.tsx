import type { BlogPost } from "../types";

export const skattPension: BlogPost = {
  slug: "skatt-pension",
  title: "Skatt som pensionär 2026 — Så mycket betalar du",
  description:
    "Hur beskattas pension i Sverige 2026? Vi förklarar skatten på allmän pension, tjänstepension och privat pension samt det förhöjda grundavdraget.",
  publishedAt: "2026-02-15",
  keywords: [
    "skatt på pension",
    "skatt pensionär",
    "pensionärsskatt",
    "skatt allmän pension",
    "grundavdrag pensionär",
  ],
  category: "Pension",
  content: () => (
    <>
      <h1>Skatt som pensionär 2026 — Så mycket betalar du</h1>

      <p>
        Att gå i pension innebär en stor förändring, inte minst ekonomiskt. En
        vanlig fråga är hur mycket <strong>skatt på pension</strong> man
        egentligen betalar. Svaret beror på vilken typ av pension du har, hur
        stor den är och i vilken kommun du bor. I den här guiden går vi igenom
        skattereglerna för pensionärer 2026 så att du kan planera din ekonomi
        på bästa sätt.
      </p>

      <h2>Pensionssystemets tre pelare</h2>

      <p>
        Det svenska pensionssystemet bygger på tre delar som tillsammans utgör
        din totala pension. Alla tre beskattas som inkomst av tjänst, men det
        finns viktiga skillnader i hur de fungerar:
      </p>

      <ul>
        <li>
          <strong>Allmän pension</strong> — Den statliga pensionen från
          Pensionsmyndigheten, bestående av inkomstpension och premiepension.
          Garantipension kan tillkomma om din allmänna pension är låg. All
          allmän pension beskattas som inkomst av tjänst.
        </li>
        <li>
          <strong>Tjänstepension</strong> — Pension som din arbetsgivare har
          betalat in under ditt yrkesliv, exempelvis ITP, SAF-LO eller KAP-KL.
          Tjänstepensionen beskattas som inkomst av tjänst när du tar ut den.
          Du kan ofta välja att ta ut den under en begränsad period eller
          livslångt, vilket påverkar hur mycket skatt du betalar per år.
        </li>
        <li>
          <strong>Privat pension</strong> — Eget sparande i pensionsförsäkring
          eller individuellt pensionssparande (IPS). Även dessa utbetalningar
          beskattas som inkomst av tjänst. Sedan 2016 är det inte längre
          möjligt att göra avdrag för nytt privat pensionssparande, men
          befintliga försäkringar fortsätter att betalas ut och beskattas.
        </li>
      </ul>

      <h2>Det förhöjda grundavdraget för pensionärer</h2>

      <p>
        En av de viktigaste skatteförmånerna för pensionärer är det förhöjda
        grundavdraget. Grundavdraget är den del av din inkomst som du inte
        betalar kommunalskatt på. Från och med det år du fyller 66 år får du
        ett högre grundavdrag än yrkesverksamma personer med samma inkomst.
      </p>

      <p>
        Det förhöjda grundavdraget för 2026 innebär att pensionärer med
        inkomster upp till ungefär 600 000 kronor per år får ett betydligt
        högre avdrag. För en pensionär med en årsinkomst på 250 000 kronor
        kan grundavdraget ligga på runt 110 900 kronor, jämfört med cirka
        42 500 kronor för en yrkesverksam person med samma inkomst. Det
        innebär en avsevärt lägre skatt.
      </p>

      <p>
        Grundavdraget trappas ned vid högre inkomster och försvinner helt vid
        mycket höga pensionsinkomster. Vid inkomster över cirka 1 200 000
        kronor per år är grundavdraget för pensionärer i princip detsamma som
        för yrkesverksamma.
      </p>

      <h2>Jobbskatteavdrag gäller inte för pension</h2>

      <p>
        En viktig skillnad mellan lön och pension är att jobbskatteavdraget
        bara gäller för arbetsinkomster. Jobbskatteavdraget infördes för att
        göra det mer lönsamt att arbeta och innebär en skattereduktion som kan
        uppgå till över 30 000 kronor per år. Pensionsinkomster ger ingen rätt
        till jobbskatteavdrag.
      </p>

      <p>
        Detta är huvudorsaken till att pensionärer historiskt sett har betalat
        mer i skatt än yrkesverksamma med samma inkomst. Det förhöjda
        grundavdraget kompenserar delvis för detta, men inte fullt ut vid alla
        inkomstnivåer.
      </p>

      <p>
        Om du fortsätter att arbeta efter 66 års ålder får du dock
        jobbskatteavdrag på den del av inkomsten som utgör lön. Du får dessutom
        ett förhöjt jobbskatteavdrag för personer som fyllt 66 år.
      </p>

      <h2>Skattejämförelse: lön och pension vid samma inkomst</h2>

      <p>
        Nedan ser du en ungefärlig jämförelse av skatten för en person med lön
        respektive pension vid samma bruttoinkomst. Vi utgår från en
        kommunalskatt på 32,40 procent (riksgenomsnittet) och 2026 års regler.
      </p>

      <table>
        <thead>
          <tr>
            <th>Bruttoinkomst/år</th>
            <th>Skatt på lön (ungefärligt)</th>
            <th>Skatt på pension (ungefärligt)</th>
            <th>Skillnad</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>200 000 kr</td>
            <td>22 500 kr</td>
            <td>19 200 kr</td>
            <td>3 300 kr lägre skatt som pensionär</td>
          </tr>
          <tr>
            <td>300 000 kr</td>
            <td>55 800 kr</td>
            <td>54 000 kr</td>
            <td>1 800 kr lägre skatt som pensionär</td>
          </tr>
          <tr>
            <td>400 000 kr</td>
            <td>82 500 kr</td>
            <td>93 500 kr</td>
            <td>11 000 kr högre skatt som pensionär</td>
          </tr>
          <tr>
            <td>500 000 kr</td>
            <td>112 000 kr</td>
            <td>128 000 kr</td>
            <td>16 000 kr högre skatt som pensionär</td>
          </tr>
        </tbody>
      </table>

      <p>
        Vid lägre inkomster kan pensionärer faktiskt betala mindre skatt tack
        vare det förhöjda grundavdraget. Men vid högre inkomster väger
        avsaknaden av jobbskatteavdrag tyngre, och pensionärer betalar då mer
        i skatt.
      </p>

      <h2>Tips för att minska skatten som pensionär</h2>

      <ul>
        <li>
          <strong>Anpassa uttaget av tjänstepension.</strong> Om du har
          möjlighet att välja uttagstid för tjänstepensionen kan du sprida
          inkomsten över fler år. En lägre årsinkomst ger ett högre
          grundavdrag i procent och minskar risken att nå upp till statlig
          inkomstskatt.
        </li>
        <li>
          <strong>Undvik att hamna över skiktgränsen.</strong> År 2026 ligger
          skiktgränsen för statlig inkomstskatt på cirka 625 800 kronor. Om
          din totala pensionsinkomst överstiger denna gräns betalar du 20
          procent statlig skatt på överskjutande belopp, utöver
          kommunalskatten.
        </li>
        <li>
          <strong>Utnyttja ROT- och RUT-avdrag.</strong> Skattereduktioner
          som ROT och RUT gäller även för pensionärer. Om du anlitar hantverkare
          för renovering (ROT) eller hushållsnära tjänster (RUT) minskar din
          slutliga skatt.
        </li>
        <li>
          <strong>Kontrollera din skattsedel.</strong> Se till att dina
          pensionsutbetalare drar rätt preliminärskatt. Om du har pension från
          flera håll kan den sammanlagda skatten bli felaktig om inte
          jämkning görs.
        </li>
        <li>
          <strong>Arbeta deltid efter 66.</strong> Om du arbetar vid sidan av
          pensionen får du jobbskatteavdrag på arbetsinkomsten, vilket
          minskar den totala skatten.
        </li>
      </ul>

      <h2>Vanliga frågor</h2>

      <h3>Betalar pensionärer mer skatt än de som arbetar?</h3>
      <p>
        Det beror på inkomstnivån. Vid lägre pensionsinkomster (under cirka
        300 000 kronor per år) kan pensionärer faktiskt betala mindre skatt
        tack vare det förhöjda grundavdraget. Vid högre inkomster betalar
        pensionärer ofta mer eftersom de inte får jobbskatteavdrag.
      </p>

      <h3>Måste jag deklarera om jag bara har allmän pension?</h3>
      <p>
        Ja, du måste lämna in en deklaration varje år oavsett vilken typ av
        pension du har. Pensionsmyndigheten och dina tjänstepensionsbolag
        skickar kontrolluppgifter till Skatteverket, men du behöver ändå
        kontrollera att uppgifterna stämmer och eventuellt göra tillägg.
      </p>

      <h3>Kan jag jämka om jag har pension från flera utbetalare?</h3>
      <p>
        Ja, om du får pension från flera håll kan det vara klokt att ansöka om
        jämkning. Annars riskerar varje utbetalare att dra för lite
        preliminärskatt, eftersom de inte vet om dina övriga inkomster. En
        jämkning ser till att rätt skatt dras varje månad så att du slipper
        restskatt.
      </p>

      <p>
        Vill du snabbt få koll på hur din pension beskattas och vad din skatt
        blir 2026? Med{" "}
        <a href="https://app.skattio.se">Skattio</a> kan du enkelt beräkna
        din skatt och se hur olika pensionsuttag påverkar din ekonomi. Prova
        gratis och ta kontroll över din pension redan idag.
      </p>
    </>
  ),
};
