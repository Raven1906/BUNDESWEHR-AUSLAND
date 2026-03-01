import Layout from "@/components/Layout";
import { PageHeader, ContentSection, Prose, InfoBox } from "@/components/ContentSection";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
          <h2>1. Gefahr für Soldatinnen und Soldaten</h2>
          <p>
            Auslandseinsätze bedeuten reale Lebensgefahr. In Afghanistan starben 59 Bundeswehrsoldaten, 
            hunderte wurden körperlich verwundet, und eine unbekannte Zahl leidet unter 
            posttraumatischen Belastungsstörungen (PTBS). Die psychischen Folgen betreffen nicht 
            nur die Soldaten selbst, sondern auch ihre Familien und ihr soziales Umfeld.
          </p>
          <InfoBox variant="contra" title="Beispiel">
            <p>Der Karfreitagsgefecht 2010 in Afghanistan war der verlustreichste Kampfeinsatz 
            der Bundeswehr seit dem Zweiten Weltkrieg. Drei Soldaten fielen, acht wurden verwundet. 
            Die psychischen Folgen begleiteten die Überlebenden jahrelang.</p>
          </InfoBox>
          <p>
            <strong>Gegenperspektive:</strong> Soldaten treten freiwillig in den Dienst und werden 
            für gefährliche Einsätze ausgebildet. Zudem soll die Verbesserung der Ausrüstung und 
            psychologischen Betreuung die Risiken minimieren.
          </p>

          <h2>2. Unklare Erfolgsaussichten</h2>
          <p>
            Viele Einsätze haben ihre erklärten Ziele nicht erreicht. Afghanistan ist nach 20 Jahren 
            westlicher Präsenz erneut unter Taliban-Herrschaft. Die Intervention in Libyen 2011 
            führte zu einem Machtvakuum und anhaltendem Bürgerkrieg. Mali blieb trotz jahrelanger 
            internationaler Präsenz instabil.
          </p>
          <p>
            <strong>Gegenperspektive:</strong> Erfolg lässt sich nicht nur am Endzustand messen. 
            Viele Einsätze haben kurzfristig Leben gerettet, Flüchtlingsströme eingedämmt oder 
            schlimmere Szenarien verhindert – auch wenn die langfristige Bilanz gemischt ist.
          </p>

          <h2>3. Hohe finanzielle Kosten</h2>
          <p>
            Auslandseinsätze sind extrem teuer. Der Afghanistan-Einsatz kostete Deutschland geschätzt 
            12,5 Milliarden Euro. Dieses Geld fehlt an anderen Stellen – in der Bildung, im 
            Gesundheitswesen, bei der Infrastruktur. Die Opportunitätskosten militärischer 
            Interventionen werden in der politischen Debatte oft unterschlagen.
          </p>
          <p>
            <strong>Gegenperspektive:</strong> Die Kosten eines Nicht-Handelns können noch höher 
            sein. Flüchtlingskrisen, Terroranschläge und destabilisierte Handelsrouten verursachen 
            ebenfalls enorme wirtschaftliche Schäden.
          </p>

          <h2>4. Abhängigkeit von Großmächten</h2>
          <p>
            In der Praxis werden viele Einsätze von den USA dominiert. Deutschland gerät in die 
            Rolle des Juniorpartners, der strategische Entscheidungen mit trägt, aber kaum 
            mitbestimmt. Die Beteiligung am Anti-IS-Einsatz folgte primär dem Druck der 
            Bündnispartner, nicht einer eigenständigen strategischen Analyse.
          </p>
          <p>
            <strong>Gegenperspektive:</strong> Europa baut zunehmend eigenständige 
            sicherheitspolitische Strukturen auf. Deutsche Beteiligung stärkt die europäische 
            Handlungsfähigkeit und reduziert langfristig die Abhängigkeit von den USA.
          </p>

          <h2>5. Moralische Problematik</h2>
          <p>
            Jeder Militäreinsatz birgt das Risiko ziviler Opfer. Das Bombardement von Kunduz 2009, 
            bei dem bis zu 142 Menschen starben, darunter viele Zivilisten, steht exemplarisch für 
            dieses Dilemma. Die moralische Last solcher Entscheidungen ist enorm – für die 
            handelnden Personen wie für die Gesellschaft.
          </p>
          <p>
            <strong>Gegenperspektive:</strong> Nicht zu handeln kann ebenfalls moralisch 
            verwerflich sein. Srebrenica hat gezeigt, dass Passivität tausende Menschenleben 
            kosten kann.
          </p>

          <h2>6. Souveränitätsfragen</h2>
          <p>
            Militärische Interventionen, auch wenn sie unter UN-Mandat stattfinden, greifen 
            in die Souveränität anderer Staaten ein. Dies wirft grundsätzliche völkerrechtliche 
            Fragen auf und kann in den betroffenen Ländern als neokoloniale Einmischung 
            wahrgenommen werden.
          </p>
          <InfoBox variant="contra" title="Beispiel">
            <p>Die Bundeswehr-Präsenz in Mali wurde von der dortigen Militärjunta zunehmend 
            als unerwünscht betrachtet. 2023 musste die Bundeswehr ihren Einsatz beenden – 
            auf Druck der malischen Regierung, nicht aus eigenem Entschluss.</p>
          </InfoBox>
          <p>
            <strong>Gegenperspektive:</strong> Souveränität ist kein Freibrief für 
            Menschenrechtsverletzungen. Die internationale Gemeinschaft hat die Pflicht, 
            gegen Völkermord und systematische Gewalt vorzugehen.
          </p>

          <h2>7. Langfristige Destabilisierung</h2>
          <p>
            Militärinterventionen können unbeabsichtigte Folgen haben, die schlimmer sind als 
            der ursprüngliche Zustand. Libyen nach 2011 ist das prominenteste Beispiel: Der 
            Sturz Gaddafis führte nicht zu Demokratie, sondern zu Chaos, Waffenproliferation 
            und einer Flüchtlingskrise, die ganz Europa betraf.
          </p>
          <p>
            <strong>Gegenperspektive:</strong> Destabilisierung ist kein unvermeidliches 
            Ergebnis. Sie resultiert oft aus mangelnder Nachsorge und fehlendem politischen 
            Willen zum langfristigen Engagement – nicht aus der Intervention selbst.
          </p>
        </Prose>
      </ContentSection>

      <ContentSection className="mt-12">
        <div className="flex justify-between">
          <Link to="/pro" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Pro-Argumente
          </Link>
          <Link to="/ethik" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Ethik <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </ContentSection>
    </div>
  </Layout>
);

export default ContraArgumente;
