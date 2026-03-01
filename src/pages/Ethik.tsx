import Layout from "@/components/Layout";
import { PageHeader, ContentSection, Prose, InfoBox } from "@/components/ContentSection";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Ethik = () => (
  <Layout>
    <PageHeader
      chapter="Kapitel 5"
      title="Ethische Bewertung"
      subtitle="Zwischen ‚Nie wieder Krieg' und ‚Nie wieder wegsehen' – die moralischen Dilemmata militärischer Interventionen."
    />

    <div className="py-12 sm:py-16">
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
            im konkreten Einzelfall abzuwägen, welches Prinzip schwerer wiegt.
          </p>

          <h2>Die Lehre der „Gerechten Krieges"</h2>
          <p>
            Die philosophische Tradition des „Gerechten Krieges" (bellum iustum) bietet seit 
            der Antike einen Rahmen für die ethische Bewertung militärischer Gewalt. Nach dieser 
            Lehre ist ein Krieg nur dann moralisch vertretbar, wenn bestimmte Bedingungen erfüllt sind:
          </p>
          <ul>
            <li><strong>Gerechter Grund</strong> (causa iusta) – z.B. Schutz vor Aggression oder Völkermord</li>
            <li><strong>Legitime Autorität</strong> – Entscheidung durch eine legitimierte Instanz</li>
            <li><strong>Richtige Absicht</strong> – Ziel muss die Wiederherstellung des Friedens sein</li>
            <li><strong>Verhältnismäßigkeit</strong> – Die erwarteten Vorteile müssen die Schäden überwiegen</li>
            <li><strong>Letztes Mittel</strong> (ultima ratio) – Alle friedlichen Optionen müssen ausgeschöpft sein</li>
            <li><strong>Erfolgsaussicht</strong> – Ein realistischer Weg zum Erfolg muss erkennbar sein</li>
          </ul>

          <InfoBox variant="warning" title="Kritische Reflexion">
            <p>
              Diese Kriterien klingen auf dem Papier klar, sind in der Praxis aber hochgradig 
              interpretierbar. Wer entscheidet, wann „alle friedlichen Mittel ausgeschöpft" sind? 
              Wie bewertet man „Erfolgsaussichten" in chaotischen Konfliktsituationen? Die Lehre 
              vom Gerechten Krieg bietet Orientierung, aber keine einfachen Antworten.
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
            Justiz sprach ihn frei. Die Familien der Opfer sehen das anders.
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
            „verantwortungsbewussten Interventionismus".
          </p>

          <h2>Die Frage der moralischen Konsistenz</h2>
          <p>
            Ein wiederkehrender Kritikpunkt ist die Selektivität internationaler Interventionen. 
            Warum wurde in Kosovo und Libyen eingegriffen, aber nicht im Sudan, in Myanmar oder 
            in Jemen? Wenn der Schutz von Zivilisten das erklärte Ziel ist, müsste er überall 
            gelten – nicht nur dort, wo geopolitische Interessen eine Intervention begünstigen.
          </p>
          <p>
            Diese Inkonsistenz untergräbt die moralische Glaubwürdigkeit westlicher 
            Interventionspolitik und nährt den Vorwurf der Doppelmoral.
          </p>
        </Prose>
      </ContentSection>

      <ContentSection className="mt-12">
        <div className="flex justify-between">
          <Link to="/contra" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Contra-Argumente
          </Link>
          <Link to="/folgen" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Folgen <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </ContentSection>
    </div>
  </Layout>
);

export default Ethik;
