import Layout from "@/components/Layout";
import { PageHeader, ContentSection, Prose, InfoBox, ModernDivider, QuoteBlock } from "@/components/ContentSection";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Ethik = () => (
  <Layout>
    <PageHeader
      chapter="Kapitel 5"
      title="Ethische Bewertung"
      subtitle="Zwischen ‚Nie wieder Krieg' und ‚Nie wieder wegsehen' – die moralischen Dilemmata militärischer Interventionen und ihre philosophischen Grundlagen."
    />

    <div className="py-14 sm:py-20">
      <ContentSection>
        <Prose>
          <h2>Verantwortung versus Zurückhaltung</h2>
          <p>
            Die ethische Debatte um Auslandseinsätze bewegt sich zwischen zwei Polen, die beide 
            in der deutschen Geschichte verankert sind. Der Grundsatz „Nie wieder Krieg" entspringt 
            der Erfahrung zweier Weltkriege und dem Bewusstsein, dass Deutschland als Aggressor 
            unermessliches Leid verursacht hat. Der Grundsatz „Nie wieder wegsehen" entspringt 
            der Erkenntnis, dass Passivität angesichts von Völkermord und systematischer Gewalt 
            ebenfalls eine moralische Schuld begründet.
          </p>
          <p>
            Beide Prinzipien sind für sich genommen richtig – und doch stehen sie in einem 
            unauflösbaren Spannungsverhältnis. Die Kunst der politischen Ethik liegt darin, 
            im konkreten Einzelfall abzuwägen, welches Prinzip schwerer wiegt. Es gibt keine 
            Formel, die diese Abwägung automatisiert – sie erfordert Urteilskraft, Informiertheit 
            und die Bereitschaft, Verantwortung für die Konsequenzen zu tragen.
          </p>
          <p>
            Diese Spannung ist kein deutsches Sonderproblem, aber sie wird in Deutschland 
            besonders intensiv erlebt. Die „Kultur der Zurückhaltung" – wie sie lange die 
            deutsche Außenpolitik prägte – ist ein direktes Ergebnis der historischen 
            Erfahrung. Die Frage ist, ob diese Zurückhaltung in einer veränderten 
            geopolitischen Lage noch angemessen ist oder ob sie zur bequemen Ausrede 
            für Passivität geworden ist.
          </p>

          <h2>Die Lehre des „Gerechten Krieges"</h2>
          <p>
            Die philosophische Tradition des „Gerechten Krieges" (bellum iustum) bietet seit 
            der Antike einen Rahmen für die ethische Bewertung militärischer Gewalt. Von 
            Augustinus über Thomas von Aquin bis zu modernen Denkern wie Michael Walzer 
            wurde diese Tradition weiterentwickelt. Nach dieser Lehre ist ein Krieg nur 
            dann moralisch vertretbar, wenn bestimmte Bedingungen erfüllt sind:
          </p>
          <ul>
            <li><strong>Gerechter Grund</strong> (causa iusta) – z.B. Schutz vor Aggression oder Völkermord</li>
            <li><strong>Legitime Autorität</strong> – Entscheidung durch eine legitimierte Instanz</li>
            <li><strong>Richtige Absicht</strong> – Ziel muss die Wiederherstellung des Friedens sein</li>
            <li><strong>Verhältnismäßigkeit</strong> – Die erwarteten Vorteile müssen die Schäden überwiegen</li>
            <li><strong>Letztes Mittel</strong> (ultima ratio) – Alle friedlichen Optionen müssen ausgeschöpft sein</li>
            <li><strong>Erfolgsaussicht</strong> – Ein realistischer Weg zum Erfolg muss erkennbar sein</li>
            <li><strong>Schutz von Unbeteiligten</strong> (ius in bello) – Zivilisten dürfen nicht gezielt angegriffen werden</li>
          </ul>

          <InfoBox variant="warning" title="Kritische Reflexion">
            <p>
              Diese Kriterien klingen auf dem Papier klar, sind in der Praxis aber hochgradig 
              interpretierbar. Wer entscheidet, wann „alle friedlichen Mittel ausgeschöpft" sind? 
              Wie bewertet man „Erfolgsaussichten" in chaotischen Konfliktsituationen? Die Lehre 
              vom Gerechten Krieg bietet Orientierung, aber keine einfachen Antworten. Sie kann 
              auch missbraucht werden, um Kriege zu legitimieren, die primär anderen Interessen dienen.
            </p>
          </InfoBox>

          <h2>Das Trolley-Problem der Sicherheitspolitik</h2>
          <p>
            Auslandseinsätze konfrontieren Entscheidungsträger mit einer Variante des berühmten 
            Trolley-Problems: Ist es moralisch vertretbar, durch aktives Handeln (Intervention) 
            den Tod einiger Menschen in Kauf zu nehmen, um den Tod vieler zu verhindern? 
            Oder ist es moralischer, nicht aktiv einzugreifen – auch wenn dadurch mehr Menschen sterben?
          </p>
          <p>
            Das Kunduz-Bombardement von 2009 illustriert dieses Dilemma: Der deutsche Oberst Klein 
            ordnete den Luftangriff an, weil er eine unmittelbare Bedrohung für seine Soldaten sah. 
            Dabei starben auch Zivilisten. War die Entscheidung moralisch vertretbar? Die deutsche 
            Justiz sprach ihn frei. Die Familien der Opfer sehen das anders. Es gibt keine Position 
            in diesem Dilemma, die frei von moralischem Risiko ist.
          </p>
          <p>
            In der philosophischen Debatte gibt es zwei grundlegende Positionen: Der 
            <strong> Konsequentialismus</strong> bewertet Handlungen nach ihren Ergebnissen – 
            wenn eine Intervention mehr Leben rettet als sie kostet, ist sie gerechtfertigt. 
            Die <strong>Deontologie</strong> dagegen betont, dass bestimmte Handlungen (z.B. 
            das gezielte Töten von Zivilisten) grundsätzlich verwerflich sind, unabhängig 
            vom Ergebnis. Beide Positionen haben ihre Berechtigung – und beide stoßen 
            in der Praxis an Grenzen.
          </p>

          <h2>Pazifismus als ethische Position</h2>
          <p>
            Der absolute Pazifismus lehnt jede Form militärischer Gewalt ab – unabhängig von den 
            Umständen. Diese Position hat eine lange Tradition und verdient Respekt. Ihre Schwäche 
            zeigt sich jedoch in Extremsituationen: Wenn ein Völkermord stattfindet, kann 
            prinzipielle Gewaltlosigkeit zur Komplizenschaft mit den Tätern werden.
          </p>
          <p>
            Die meisten ethischen Positionen in der deutschen Debatte sind daher nicht absolut 
            pazifistisch, sondern bewegen sich im Spektrum eines „bedingten Pazifismus" oder 
            „verantwortungsbewussten Interventionismus". Die evangelische Kirche in Deutschland 
            spricht vom „vorrangig gewaltfreien Handeln" – Gewalt als allerletztes Mittel, 
            aber nicht grundsätzlich ausgeschlossen.
          </p>

          <QuoteBlock
            quote="Frieden ist nicht alles, aber ohne Frieden ist alles nichts."
            author="Willy Brandt"
          />

          <h2>Die Frage der moralischen Konsistenz</h2>
          <p>
            Ein wiederkehrender Kritikpunkt ist die Selektivität internationaler Interventionen. 
            Warum wurde in Kosovo und Libyen eingegriffen, aber nicht im Sudan, in Myanmar oder 
            in Jemen? Wenn der Schutz von Zivilisten das erklärte Ziel ist, müsste er überall 
            gelten – nicht nur dort, wo geopolitische Interessen eine Intervention begünstigen.
          </p>
          <p>
            Diese Inkonsistenz untergräbt die moralische Glaubwürdigkeit westlicher 
            Interventionspolitik und nährt den Vorwurf der Doppelmoral. Gleichzeitig ist 
            es unrealistisch zu fordern, dass überall interveniert werden muss, nur weil 
            irgendwo interveniert wird. Die Frage ist, ob Selektivität ein Argument 
            gegen Intervention überhaupt ist – oder nur gegen schlechte Begründungen.
          </p>

          <h2>Die Ethik der Nachsorge</h2>
          <p>
            Eine oft vernachlässigte ethische Dimension betrifft die Nachsorge: Wenn eine 
            Intervention stattfindet, entsteht damit eine Verantwortung für die Folgen. 
            Der überstürzte Abzug aus Afghanistan 2021 hat gezeigt, was passiert, wenn 
            diese Verantwortung nicht wahrgenommen wird: Tausende lokale Helfer wurden 
            zurückgelassen und der Willkür der Taliban ausgesetzt.
          </p>
          <p>
            Ethisch konsequent wäre es, keine Intervention zu beginnen, für die man nicht 
            bereit ist, auch die langfristigen Konsequenzen zu tragen. Doch genau diese 
            Bereitschaft fehlt häufig – die politische Aufmerksamkeitsspanne ist kürzer 
            als die Zeit, die Stabilisierung erfordert. Die Ethik der Nachsorge (ius post 
            bellum) ist ein noch junges, aber zunehmend wichtiges Feld der philosophischen 
            Debatte.
          </p>

          <h2>Die Verantwortung des Einzelnen</h2>
          <p>
            Neben der staatlichen Ebene stellt sich auch die Frage der individuellen 
            Verantwortung. Soldatinnen und Soldaten stehen vor moralischen Entscheidungen, 
            die kein Ausbildungshandbuch vollständig abdecken kann. Wann darf geschossen 
            werden? Wie geht man mit der Gewissheit um, dass die eigene Handlung 
            möglicherweise Unschuldige getroffen hat? Diese Fragen begleiten viele 
            Veteranen ein Leben lang.
          </p>
          <p>
            Auch die Zivilgesellschaft trägt Verantwortung: Wähler mandatieren Regierungen, 
            die über Einsätze entscheiden. Steuerzahler finanzieren diese Einsätze. Und 
            als Mitglieder einer demokratischen Gesellschaft sind alle Bürgerinnen und 
            Bürger mitverantwortlich für die Entscheidungen, die in ihrem Namen getroffen 
            werden. Diese Mitverantwortung ernst zu nehmen, bedeutet, sich zu informieren 
            und eine fundierte Position zu entwickeln – genau das, was diese Analyse 
            ermöglichen soll.
          </p>
        </Prose>
      </ContentSection>

      <ModernDivider />

      <ContentSection className="mt-4">
        <div className="flex justify-between">
          <Link to="/contra" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
            <ArrowLeft className="h-4 w-4" /> Contra-Argumente
          </Link>
          <Link to="/folgen" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
            Folgen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </ContentSection>
    </div>
  </Layout>
);

export default Ethik;
