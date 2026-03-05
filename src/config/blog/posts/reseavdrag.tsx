import type { BlogPost } from "../types";

export const reseavdrag: BlogPost = {
  slug: "reseavdrag",
  title: "Reseavdrag 2026 — Räkna ut och deklarera resor till jobbet",
  description:
    "Pendlar du till jobbet? Här förklarar vi reglerna för reseavdrag 2026, hur du räknar ut avdraget och hur du deklarerar det.",
  publishedAt: "2026-02-15",
  keywords: [
    "reseavdrag skatt",
    "räkna ut reseavdrag",
    "avdrag resor",
    "reseavdrag bil",
    "reseavdrag deklaration",
  ],
  category: "Avdrag",
  content: () => (
    <>
      <h1>Reseavdrag 2026 — Räkna ut och deklarera resor till jobbet</h1>

      <p>
        Varje dag pendlar miljontals svenskar till och från jobbet — med bil,
        buss, tåg eller cykel. Om du har tillräckligt lång resväg kan du ha
        rätt till reseavdrag i din deklaration 2026. Reseavdraget minskar din
        beskattningsbara inkomst och kan ge dig tusenlappar tillbaka på
        skatten. Men reglerna är specifika och det finns flera villkor som
        måste vara uppfyllda. Här går vi igenom allt du behöver veta om
        reseavdrag 2026.
      </p>

      <h2>Grundläggande regler för reseavdrag</h2>

      <p>
        För att du ska få göra reseavdrag måste dina resekostnader överstiga
        12 000 kronor per år. Det innebär att du bara får avdrag för den del
        av kostnaderna som överstiger 12 000 kronor. Om dina beräknade
        resekostnader uppgår till 30 000 kronor blir avdraget alltså 18 000
        kronor.
      </p>

      <p>
        Avdraget gäller för resor mellan din bostad och din arbetsplats.
        Resor i tjänsten (tjänsteresor) hanteras separat och har andra regler.
      </p>

      <p>
        Du kan göra avdrag för resor med kollektivtrafik oavsett avstånd, men
        för att få avdrag för egen bil gäller strängare krav.
      </p>

      <h2>När får du göra reseavdrag för bil?</h2>

      <p>
        Du får göra reseavdrag för bil om du uppfyller minst ett av dessa
        villkor:
      </p>

      <ul>
        <li>
          Du sparar minst <strong>2 timmar per dag</strong> jämfört med att åka
          kollektivt (sammanlagd tid tur och retur).
        </li>
        <li>
          Avståndet till arbetsplatsen är minst <strong>5 kilometer</strong> och
          du använder bilen i tjänsten regelbundet (minst 160 dagar per år).
        </li>
        <li>
          Det saknas rimliga kollektivtrafikalternativ för din sträcka.
        </li>
      </ul>

      <p>
        Det vanligaste skälet är tvåtimmarsregeln. Räkna ut din restid med
        kollektivtrafik (inklusive väntetider och byten) och jämför med restid
        med bil. Om skillnaden är minst två timmar per dag har du rätt till
        bilavdrag.
      </p>

      <h2>Så räknar du ut ditt reseavdrag 2026</h2>

      <p>
        Avdraget beräknas utifrån det färdmedel du använder:
      </p>

      <ul>
        <li>
          <strong>Egen bil:</strong> 18,50 kr per mil (2026).
        </li>
        <li>
          <strong>Förmånsbil (diesel):</strong> 6,50 kr per mil.
        </li>
        <li>
          <strong>Förmånsbil (övriga drivmedel):</strong> 9,50 kr per mil.
        </li>
        <li>
          <strong>Kollektivtrafik:</strong> Faktisk kostnad för månadskort
          eller biljetter.
        </li>
      </ul>

      <p>
        Formeln för bilavdrag ser ut så här:
      </p>

      <p>
        <strong>
          Avdrag = (Avstånd i mil × 2 × Antal arbetsdagar × 18,50 kr) − 12 000 kr
        </strong>
      </p>

      <h3>Räkneexempel 1: Pendling 3 mil enkel väg</h3>

      <table>
        <thead>
          <tr>
            <th>Post</th>
            <th>Värde</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Avstånd enkel väg</td>
            <td>3 mil</td>
          </tr>
          <tr>
            <td>Tur och retur per dag</td>
            <td>6 mil</td>
          </tr>
          <tr>
            <td>Antal arbetsdagar</td>
            <td>220</td>
          </tr>
          <tr>
            <td>Total sträcka per år</td>
            <td>1 320 mil</td>
          </tr>
          <tr>
            <td>Beräknad kostnad (1 320 × 18,50)</td>
            <td>24 420 kr</td>
          </tr>
          <tr>
            <td>Minus tröskelbelopp</td>
            <td>−12 000 kr</td>
          </tr>
          <tr>
            <td><strong>Avdrag</strong></td>
            <td><strong>12 420 kr</strong></td>
          </tr>
        </tbody>
      </table>

      <p>
        Med en kommunal skattesats på cirka 32 procent ger avdraget en
        skattesänkning på ungefär 3 974 kronor.
      </p>

      <h3>Räkneexempel 2: Pendling 6 mil enkel väg</h3>

      <table>
        <thead>
          <tr>
            <th>Post</th>
            <th>Värde</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Avstånd enkel väg</td>
            <td>6 mil</td>
          </tr>
          <tr>
            <td>Tur och retur per dag</td>
            <td>12 mil</td>
          </tr>
          <tr>
            <td>Antal arbetsdagar</td>
            <td>220</td>
          </tr>
          <tr>
            <td>Total sträcka per år</td>
            <td>2 640 mil</td>
          </tr>
          <tr>
            <td>Beräknad kostnad (2 640 × 18,50)</td>
            <td>48 840 kr</td>
          </tr>
          <tr>
            <td>Minus tröskelbelopp</td>
            <td>−12 000 kr</td>
          </tr>
          <tr>
            <td><strong>Avdrag</strong></td>
            <td><strong>36 840 kr</strong></td>
          </tr>
        </tbody>
      </table>

      <p>
        Här blir skattesänkningen cirka 11 789 kronor — en betydande summa som
        många missar att deklarera.
      </p>

      <h2>Vilken dokumentation behöver du?</h2>

      <p>
        Skatteverket kan begära att du styrker ditt reseavdrag. Ha följande
        redo:
      </p>

      <ul>
        <li>
          <strong>Körjournal eller annan logg</strong> som visar antal
          arbetsdagar och körsträcka.
        </li>
        <li>
          <strong>Utskrift från reseplanerare</strong> (t.ex. SL, Västtrafik
          eller Google Maps) som visar restid med kollektivtrafik jämfört med
          bil — viktigt för att styrka tvåtimmarsregeln.
        </li>
        <li>
          <strong>Kvitton på månadskort</strong> om du använder
          kollektivtrafik.
        </li>
        <li>
          <strong>Arbetsgivarintyg</strong> som bekräftar din arbetsplats och
          arbetstider om det behövs.
        </li>
      </ul>

      <p>
        Du behöver inte skicka in dokumentationen med deklarationen, men du
        måste kunna visa upp den om Skatteverket frågar.
      </p>

      <h2>Så deklarerar du reseavdraget</h2>

      <p>
        Reseavdraget deklareras i din inkomstdeklaration under
        &quot;Övriga utgifter&quot; (ruta 2.4 på inkomstdeklaration 1). Du fyller i
        det totala beloppet efter avdrag för tröskeln på 12 000 kronor. Om du
        har andra övriga utgifter, till exempel kostnader för dubbel bosättning,
        summerar du allt i samma ruta.
      </p>

      <p>
        Tänk på att Skatteverket inte förifyllt reseavdraget — du måste själv
        lägga till det. Gör du det digitalt fyller du i uppgifterna steg för
        steg, och systemet beräknar avdragsbeloppet åt dig.
      </p>

      <h2>Vanliga frågor</h2>

      <h3>Kan jag göra reseavdrag om jag jobbar hemifrån vissa dagar?</h3>
      <p>
        Ja, men du kan bara göra avdrag för de dagar du faktiskt reser till
        arbetsplatsen. Om du jobbar hemifrån två dagar i veckan minskar
        antalet arbetsdagar du räknar med från cirka 220 till cirka 132 (3
        dagar × 44 veckor). Det påverkar det totala avdraget och kan göra att
        du hamnar under tröskelbeloppet på 12 000 kronor.
      </p>

      <h3>Får jag göra avdrag för parkering vid arbetsplatsen?</h3>
      <p>
        Nej, parkeringskostnader vid arbetsplatsen är inte avdragsgilla som
        reseavdrag. Däremot ingår parkeringskostnader vid en station eller
        hållplats om du kombinerar bil och kollektivtrafik (så kallad
        infartsparkeringsmetod) i vissa fall.
      </p>

      <h3>Vad händer om jag samåker?</h3>
      <p>
        Om du samåker med en kollega som kör kan du göra avdrag för
        kollektivtrafikkostnad i stället, eftersom du inte kör själv. Om du
        är den som kör och tar med passagerare får du fortfarande göra det
        vanliga bilavdraget — du kan inte lägga till extra per passagerare.
      </p>

      <h2>Sammanfattning</h2>

      <p>
        Reseavdraget är ett av de vanligaste avdragen i deklarationen och kan
        ge tusenlappar tillbaka. Nyckeln är att du uppfyller villkoren (främst
        tvåtimmarsregeln för bil), räknar ut avdraget korrekt och har
        dokumentation redo ifall Skatteverket granskar.
      </p>

      <p>
        Osäker på om du har rätt till reseavdrag eller vill räkna ut exakt
        hur mycket du kan dra av? Med{" "}
        <a href="https://app.skattio.se">Skattio</a> får du hjälp att
        identifiera dina avdrag och fylla i deklarationen korrekt — snabbt och
        enkelt, helt digitalt.
      </p>
    </>
  ),
};
