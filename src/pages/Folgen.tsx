import Layout from "@/components/Layout";
import { PageHeader, ContentSection, Prose, InfoBox } from "@/components/ContentSection";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Folgen = () => (
  <Layout>
    <PageHeader
      chapter="Kapitel 6"
      title="Politische & gesellschaftliche Folgen"
      subtitle="Wie Auslandseinsätze die deutsche Innenpolitik, die öffentliche Meinung und die sicherheitspolitische Identität prägen."
    />

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
            </ul>
          </InfoBox>

          <p>
            Eine besondere Herausforderung ist die Vermittlung der Einsatzrealität. Die 
            Bundesregierung hat lange vermieden, den Afghanistan-Einsatz als „Krieg" zu 
            bezeichnen – obwohl die Soldaten vor Ort genau das erlebten. Diese Diskrepanz 
            zwischen politischer Kommunikation und militärischer Realität hat das Vertrauen 
            der Öffentlichkeit beschädigt.
          </p>

          <h2>Sicherheitspolitische Identität Deutschlands</h2>
          <p>
            Die Debatte um Auslandseinsätze ist im Kern eine Identitätsdebatte: Wer wollen 
            wir als Land sein? Ein „Friedensstaat", der sich auf Diplomatie und Entwicklungshilfe 
            konzentriert? Oder eine „Gestaltungsmacht", die bereit ist, auch militärisch für 
            ihre Werte einzutreten?
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
            Gesellschaft mit ihrer Armee wider.
          </p>
        </Prose>
      </ContentSection>

      <ContentSection className="mt-12">
        <div className="flex justify-between">
          <Link to="/ethik" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Ethik
          </Link>
          <Link to="/fazit" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Fazit <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </ContentSection>
    </div>
  </Layout>
);

export default Folgen;
