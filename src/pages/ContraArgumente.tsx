import Layout from "@/components/Layout";
import { PageHeader, ContentSection, Prose, InfoBox, MilitaryDivider } from "@/components/ContentSection";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const ArgumentHeader = ({ num, title }: { num: number; title: string }) => (
  <motion.div 
    initial={{ opacity: 0, x: -15 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-3 mt-14 mb-4"
  >
    <span className="bw-badge !bg-contra !text-contra-foreground">{String(num).padStart(2, '0')}</span>
    <h2 className="font-tactical text-2xl font-semibold text-foreground tracking-[0.12em] !border-0 !pl-0 !mt-0 !mb-0">{title}</h2>
  </motion.div>
);

const ContraArgumente = () => (
  <Layout>
    <PageHeader
      chapter="Kapitel 4"
      title="Argumente gegen Auslandseinsätze"
      subtitle="Sieben zentrale Argumente, die gegen eine militärische Beteiligung Deutschlands im Ausland sprechen."
    />

    <div className="py-12 sm:py-16">
      <ContentSection>
        <Prose>
          <ArgumentHeader num={1} title="Gefahr für Soldatinnen und Soldaten" />
          <p>
            Auslandseinsätze bedeuten reale Lebensgefahr. In Afghanistan starben 59 Bundeswehrsoldaten, 
            hunderte wurden körperlich verwundet, und eine unbekannte Zahl leidet unter 
            posttraumatischen Belastungsstörungen (PTBS). Die psychischen Folgen betreffen nicht 
            nur die Soldaten selbst, sondern auch ihre Familien und ihr soziales Umfeld.
          </p>
          <p>
            Die Dunkelziffer bei PTBS ist hoch: Experten schätzen, dass bis zu 25% der 
            Afghanistan-Rückkehrer unter psychischen Folgen leiden, viele davon unbehandelt. 
            Die gesellschaftliche Anerkennung dieser Opfer ist in Deutschland deutlich geringer 
            als in vergleichbaren Ländern.
          </p>
          <InfoBox variant="contra" title="Beispiel: Karfreitagsgefecht 2010">
            <p>Das Karfreitagsgefecht 2010 in Afghanistan war der verlustreichste Kampfeinsatz 
            der Bundeswehr seit dem Zweiten Weltkrieg. Drei Soldaten fielen, acht wurden verwundet. 
            Die psychischen Folgen begleiteten die Überlebenden jahrelang. Mehrere Beteiligte 
            berichteten später öffentlich über ihre PTBS-Erkrankungen.</p>
          </InfoBox>
          <p>
            <strong>Gegenperspektive:</strong> Soldaten treten freiwillig in den Dienst und werden 
            für gefährliche Einsätze ausgebildet. Zudem soll die Verbesserung der Ausrüstung und 
            psychologischen Betreuung die Risiken minimieren.
          </p>

          <ArgumentHeader num={2} title="Unklare Erfolgsaussichten" />
          <p>
            Viele Einsätze haben ihre erklärten Ziele nicht erreicht. Afghanistan ist nach 20 Jahren 
            westlicher Präsenz erneut unter Taliban-Herrschaft. Die Intervention in Libyen 2011 
            führte zu einem Machtvakuum und anhaltendem Bürgerkrieg. Mali blieb trotz jahrelanger 
            internationaler Präsenz instabil.
          </p>
          <p>
            Die Bilanz ist ernüchternd: Eine Studie des Zentrums für Internationale 
            Friedenseinsätze (ZIF) kommt zu dem Schluss, dass nur etwa ein Drittel aller 
            internationalen Friedenseinsätze ihre Kernziele vollständig erreicht hat. Die 
            Mehrheit erzielte bestenfalls Teilerfolge.
          </p>
          <p>
            <strong>Gegenperspektive:</strong> Erfolg lässt sich nicht nur am Endzustand messen. 
            Viele Einsätze haben kurzfristig Leben gerettet, Flüchtlingsströme eingedämmt oder 
            schlimmere Szenarien verhindert – auch wenn die langfristige Bilanz gemischt ist.
          </p>

          <ArgumentHeader num={3} title="Hohe finanzielle Kosten" />
          <p>
            Auslandseinsätze sind extrem teuer. Der Afghanistan-Einsatz kostete Deutschland geschätzt 
            12,5 Milliarden Euro. Dieses Geld fehlt an anderen Stellen – in der Bildung, im 
            Gesundheitswesen, bei der Infrastruktur. Die Opportunitätskosten militärischer 
            Interventionen werden in der politischen Debatte oft unterschlagen.
          </p>
          <p>
            Hinzu kommen die indirekten Kosten: Versorgung verwundeter Veteranen, 
            psychologische Betreuung, Wiedereingliederungsprogramme. Diese Folgekosten 
            erstrecken sich über Jahrzehnte und sind in den offiziellen Einsatzkosten 
            nicht enthalten.
          </p>
          <InfoBox variant="contra" title="Kostenvergleich">
            <ul className="list-disc pl-4 space-y-1">
              <li>Afghanistan (2001–2021): ca. 12,5 Mrd. €</li>
              <li>Mali (2013–2023): ca. 3,5 Mrd. €</li>
              <li>Kosovo (seit 1999): ca. 4 Mrd. €</li>
              <li>Zum Vergleich: Das jährliche Budget für Entwicklungshilfe beträgt ca. 10 Mrd. €</li>
            </ul>
          </InfoBox>
          <p>
            <strong>Gegenperspektive:</strong> Die Kosten eines Nicht-Handelns können noch höher 
            sein. Flüchtlingskrisen, Terroranschläge und destabilisierte Handelsrouten verursachen 
            ebenfalls enorme wirtschaftliche Schäden.
          </p>

          <ArgumentHeader num={4} title="Abhängigkeit von Großmächten" />
          <p>
            In der Praxis werden viele Einsätze von den USA dominiert. Deutschland gerät in die 
            Rolle des Juniorpartners, der strategische Entscheidungen mit trägt, aber kaum 
            mitbestimmt. Die Beteiligung am Anti-IS-Einsatz folgte primär dem Druck der 
            Bündnispartner, nicht einer eigenständigen strategischen Analyse.
          </p>
          <p>
            Dieses Muster zeigt sich auch in der Logistik: Die Bundeswehr ist bei 
            strategischem Lufttransport, Aufklärung und Kommunikation stark von 
            amerikanischen Kapazitäten abhängig. Eigenständige europäische Operationen 
            sind bisher nur im begrenzten Rahmen möglich.
          </p>
          <p>
            <strong>Gegenperspektive:</strong> Europa baut zunehmend eigenständige 
            sicherheitspolitische Strukturen auf. Deutsche Beteiligung stärkt die europäische 
            Handlungsfähigkeit und reduziert langfristig die Abhängigkeit von den USA.
          </p>

          <ArgumentHeader num={5} title="Moralische Problematik" />
          <p>
            Jeder Militäreinsatz birgt das Risiko ziviler Opfer. Das Bombardement von Kunduz 2009, 
            bei dem bis zu 142 Menschen starben, darunter viele Zivilisten, steht exemplarisch für 
            dieses Dilemma. Die moralische Last solcher Entscheidungen ist enorm – für die 
            handelnden Personen wie für die Gesellschaft.
          </p>
          <p>
            Die juristische Aufarbeitung des Kunduz-Bombardements blieb unbefriedigend: 
            Oberst Klein wurde strafrechtlich nicht verfolgt, die Entschädigungen für die 
            Familien der Opfer fielen gering aus. Dieser Fall illustriert das grundsätzliche 
            Problem der Rechenschaftspflicht bei Auslandseinsätzen.
          </p>
          <p>
            <strong>Gegenperspektive:</strong> Nicht zu handeln kann ebenfalls moralisch 
            verwerflich sein. Srebrenica hat gezeigt, dass Passivität tausende Menschenleben 
            kosten kann.
          </p>

          <ArgumentHeader num={6} title="Souveränitätsfragen" />
          <p>
            Militärische Interventionen, auch wenn sie unter UN-Mandat stattfinden, greifen 
            in die Souveränität anderer Staaten ein. Dies wirft grundsätzliche völkerrechtliche 
            Fragen auf und kann in den betroffenen Ländern als neokoloniale Einmischung 
            wahrgenommen werden.
          </p>
          <InfoBox variant="contra" title="Beispiel: Mali 2023">
            <p>Die Bundeswehr-Präsenz in Mali wurde von der dortigen Militärjunta zunehmend 
            als unerwünscht betrachtet. 2023 musste die Bundeswehr ihren Einsatz beenden – 
            auf Druck der malischen Regierung, nicht aus eigenem Entschluss. Dieses Beispiel 
            zeigt die Grenzen von Interventionen, die nicht von der lokalen Bevölkerung 
            getragen werden.</p>
          </InfoBox>
          <p>
            <strong>Gegenperspektive:</strong> Souveränität ist kein Freibrief für 
            Menschenrechtsverletzungen. Die internationale Gemeinschaft hat die Pflicht, 
            gegen Völkermord und systematische Gewalt vorzugehen.
          </p>

          <ArgumentHeader num={7} title="Langfristige Destabilisierung" />
          <p>
            Militärinterventionen können unbeabsichtigte Folgen haben, die schlimmer sind als 
            der ursprüngliche Zustand. Libyen nach 2011 ist das prominenteste Beispiel: Der 
            Sturz Gaddafis führte nicht zu Demokratie, sondern zu Chaos, Waffenproliferation 
            und einer Flüchtlingskrise, die ganz Europa betraf.
          </p>
          <p>
            Auch in Afghanistan hat der Abzug gezeigt, dass zwei Jahrzehnte militärischer 
            Präsenz und Billionen an Investitionen nicht ausreichten, um stabile Strukturen 
            zu schaffen. Die Taliban übernahmen binnen Wochen die Kontrolle – ein Hinweis 
            darauf, dass extern erzwungene Ordnungen oft nicht nachhaltig sind.
          </p>
          <p>
            <strong>Gegenperspektive:</strong> Destabilisierung ist kein unvermeidliches 
            Ergebnis. Sie resultiert oft aus mangelnder Nachsorge und fehlendem politischen 
            Willen zum langfristigen Engagement – nicht aus der Intervention selbst.
          </p>
        </Prose>
      </ContentSection>

      <MilitaryDivider />

      <ContentSection>
        <InfoBox variant="contra" title="Zusammenfassung">
          <p>
            Die Contra-Argumente betonen die menschlichen, finanziellen und moralischen Kosten 
            militärischer Interventionen. Sie verweisen auf die gemischte Erfolgsbilanz, die 
            Abhängigkeit von Großmächten und die Gefahr langfristiger Destabilisierung. Wie 
            die Pro-Argumente sind auch sie nicht absolut – sie müssen im Einzelfall gegen die 
            Argumente für einen Einsatz abgewogen werden.
          </p>
        </InfoBox>
      </ContentSection>

      <ContentSection className="mt-12">
        <div className="flex justify-between">
          <Link to="/pro" className="flex items-center gap-2 text-sm font-tactical tracking-wider text-muted-foreground hover:text-accent transition-colors">
            <ArrowLeft className="h-4 w-4" /> Pro-Argumente
          </Link>
          <Link to="/ethik" className="flex items-center gap-2 text-sm font-tactical tracking-wider text-muted-foreground hover:text-accent transition-colors">
            Ethik <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </ContentSection>
    </div>
  </Layout>
);

export default ContraArgumente;
