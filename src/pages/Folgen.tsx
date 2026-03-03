import Layout from "@/components/Layout";
import { PageHeader, ContentSection, Prose, InfoBox, MilitaryDivider, StatCard } from "@/components/ContentSection";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Folgen = () => (
  <Layout>
    <PageHeader
      chapter="Kapitel 6"
      title="Politische & gesellschaftliche Folgen"
      subtitle="Wie Auslandseinsätze die deutsche Innenpolitik, die öffentliche Meinung und die sicherheitspolitische Identität prägen."
    />

    {/* Opinion stats */}
    <div className="border-b bg-card/50">
      <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
        <div className="grid grid-cols-3 gap-3">
          <StatCard value="~60%" label="Gegen Kampfeinsätze" />
          <StatCard value="~70%" label="Für humanitäre Hilfe" />
          <StatCard value="2019" label="Erster Tag des Veteranen" />
        </div>
      </div>
    </div>

    <div className="py-12 sm:py-16">
      <ContentSection>
        <Prose>
          <h2>Einfluss auf die Innenpolitik</h2>
          <p>
            Auslandseinsätze sind innenpolitisch hochsensibel. Jeder Einsatzbeschluss im Bundestag 
            erzwingt eine Positionierung der Parteien und kann Koalitionen belasten. Die 
            Abstimmung über den Afghanistan-Einsatz 2001 verband Bundeskanzler Schröder mit 
            der Vertrauensfrage – ein beispielloser Vorgang, der zeigte, wie tief die Spaltung 
            selbst innerhalb der Regierungskoalition ging.
          </p>
          <p>
            Die Debatte über Auslandseinsätze hat auch die Parteienlandschaft verändert. Die 
            Grünen wandelten sich von einer pazifistischen Bewegung zu einer Partei, die unter 
            Joschka Fischer den Kosovo-Einsatz mittrug. Die Linke positioniert sich als konsequent 
            gegen jeden Auslandseinsatz und gewinnt damit einen Teil der Friedensbewegung.
          </p>
          <p>
            Die SPD hat eine besonders widersprüchliche Geschichte: Als Partei Willy Brandts und 
            der Ostpolitik steht sie in einer Tradition der Entspannung und des Dialogs. 
            Gleichzeitig hat sie als Regierungspartei die meisten Einsatzbeschlüsse mitgetragen – 
            vom Kosovo über Afghanistan bis zum Anti-IS-Einsatz. Diese Spannung zwischen 
            Friedenspartei und Regierungsverantwortung prägt die Partei bis heute.
          </p>

          <h2>Öffentliche Meinung</h2>
          <p>
            Die deutsche Bevölkerung steht Auslandseinsätzen überwiegend skeptisch gegenüber. 
            Umfragen zeigen konstant, dass eine Mehrheit militärische Interventionen ablehnt – 
            insbesondere Kampfeinsätze. Humanitäre Hilfseinsätze und Friedenssicherung genießen 
            dagegen mehr Zustimmung.
          </p>

          <InfoBox title="Umfrageergebnisse (Zusammenfassung)">
            <ul className="list-disc pl-4 space-y-1">
              <li>Ca. 60% der Deutschen lehnen Kampfeinsätze grundsätzlich ab</li>
              <li>Ca. 70% befürworten humanitäre Hilfseinsätze</li>
              <li>Die Zustimmung sinkt deutlich, wenn eigene Verluste bekannt werden</li>
              <li>Nach der Zeitenwende 2022 stieg die Bereitschaft zu Verteidigungsausgaben</li>
              <li>Jüngere Generationen stehen militärischen Einsätzen tendenziell skeptischer gegenüber</li>
              <li>In Ostdeutschland ist die Ablehnung von Auslandseinsätzen besonders ausgeprägt</li>
            </ul>
          </InfoBox>

          <p>
            Eine besondere Herausforderung ist die Vermittlung der Einsatzrealität. Die 
            Bundesregierung hat lange vermieden, den Afghanistan-Einsatz als „Krieg" zu 
            bezeichnen – obwohl die Soldaten vor Ort genau das erlebten. Erst 2010, nach dem 
            Karfreitagsgefecht und dem Kunduz-Bombardement, sprach Verteidigungsminister 
            zu Guttenberg erstmals von „kriegsähnlichen Zuständen". Diese Diskrepanz 
            zwischen politischer Kommunikation und militärischer Realität hat das Vertrauen 
            der Öffentlichkeit nachhaltig beschädigt.
          </p>

          <h2>Sicherheitspolitische Identität Deutschlands</h2>
          <p>
            Die Debatte um Auslandseinsätze ist im Kern eine Identitätsdebatte: Wer wollen 
            wir als Land sein? Ein „Friedensstaat", der sich auf Diplomatie und Entwicklungshilfe 
            konzentriert? Oder eine „Gestaltungsmacht", die bereit ist, auch militärisch für 
            ihre Werte einzutreten?
          </p>
          <p>
            Lange dominierte in Deutschland das Konzept der „Zivilmacht": Ein Land, das 
            internationale Konflikte primär mit zivilen Mitteln bearbeitet – durch Diplomatie, 
            Handel, Entwicklungszusammenarbeit und multilaterale Institutionen. Dieses 
            Selbstbild wird zunehmend in Frage gestellt.
          </p>
          <p>
            Die Zeitenwende von 2022 hat diese Frage neu aufgeworfen. Der russische Angriffskrieg 
            gegen die Ukraine hat vielen Deutschen vor Augen geführt, dass militärische 
            Bedrohungen nicht abstrakt sind, sondern die europäische Friedensordnung direkt 
            betreffen. Die sicherheitspolitische Kultur Deutschlands befindet sich in einem 
            tiefgreifenden Wandel, dessen Ausgang offen ist.
          </p>

          <h2>Die Rolle der Medien</h2>
          <p>
            Medien spielen eine entscheidende Rolle bei der Meinungsbildung über 
            Auslandseinsätze. Die Berichterstattung schwankt zwischen Sensationalismus 
            (Fokus auf Anschläge und Verluste) und Vernachlässigung (Auslandseinsätze 
            verschwinden oft aus den Nachrichten). Eine ausgewogene, kontinuierliche 
            Berichterstattung ist selten – was die öffentliche Debatte verzerrt.
          </p>
          <p>
            Soziale Medien haben die Debatte zusätzlich verändert: Soldatinnen und Soldaten 
            berichten direkt aus Einsatzgebieten, Bilder verbreiten sich in Echtzeit, 
            und Desinformation erschwert eine sachliche Auseinandersetzung. Die Filterblase 
            verstärkt vorhandene Meinungen, statt zum Austausch beizutragen.
          </p>

          <h2>Veteranen und Gesellschaft</h2>
          <p>
            Deutschland hat – anders als etwa die USA oder Großbritannien – keine ausgeprägte 
            Veteranenkultur. Rückkehrer aus Auslandseinsätzen berichten häufig von Unverständnis 
            und mangelnder Anerkennung. Die psychologische Betreuung hat sich zwar verbessert, 
            aber viele Betroffene fühlen sich von der Gesellschaft im Stich gelassen.
          </p>
          <p>
            Erst seit 2019 gibt es in Deutschland einen „Tag des Veteranen" (offiziell am 
            15. Juni). Diese späte Einführung spiegelt den schwierigen Umgang der deutschen 
            Gesellschaft mit ihrer Armee wider. In Umfragen geben weniger als die Hälfte 
            der Deutschen an, einen persönlichen Bezug zur Bundeswehr zu haben.
          </p>

          <h2>Die Generationenfrage</h2>
          <p>
            Die Einstellung zu Auslandseinsätzen unterscheidet sich deutlich zwischen den 
            Generationen. Ältere Jahrgänge, geprägt durch die Nachkriegszeit und den 
            Kalten Krieg, tendieren eher zur militärischen Zurückhaltung. Jüngere 
            Generationen haben zwar keine direkte Kriegserfahrung, stehen aber 
            militärischen Einsätzen ebenfalls skeptisch gegenüber – allerdings aus 
            anderen Gründen: Sie priorisieren Klimaschutz, soziale Gerechtigkeit und 
            internationale Kooperation gegenüber militärischen Lösungen.
          </p>
          <p>
            Die Aussetzung der Wehrpflicht 2011 hat zudem dazu geführt, dass immer 
            weniger Deutsche eine persönliche Verbindung zur Bundeswehr haben. Die 
            Armee wird zunehmend als abstraktes Instrument staatlicher Politik 
            wahrgenommen – nicht als Teil der eigenen Lebenswelt.
          </p>
        </Prose>
      </ContentSection>

      <MilitaryDivider />

      <ContentSection className="mt-4">
        <div className="flex justify-between">
          <Link to="/ethik" className="flex items-center gap-2 text-sm font-tactical tracking-wider text-muted-foreground hover:text-accent transition-colors">
            <ArrowLeft className="h-4 w-4" /> Ethik
          </Link>
          <Link to="/fazit" className="flex items-center gap-2 text-sm font-tactical tracking-wider text-muted-foreground hover:text-accent transition-colors">
            Fazit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </ContentSection>
    </div>
  </Layout>
);

export default Folgen;
