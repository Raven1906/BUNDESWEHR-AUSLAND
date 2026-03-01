import Layout from "@/components/Layout";
import { PageHeader, ContentSection, Prose, InfoBox } from "@/components/ContentSection";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ProArgumente = () => (
  <Layout>
    <PageHeader
      chapter="Kapitel 3"
      title="Argumente für Auslandseinsätze"
      subtitle="Sieben zentrale Argumente, die für eine aktive Beteiligung Deutschlands an internationalen Militäreinsätzen sprechen."
    />

    <div className="py-12 sm:py-16">
      <ContentSection>
        <Prose>
          <h2>1. Internationale Verantwortung</h2>
          <p>
            Deutschland ist die viertgrößte Volkswirtschaft der Welt, drittgrößter Beitragszahler 
            der Vereinten Nationen und ein zentraler Akteur in NATO und EU. Mit dieser Stellung 
            geht eine besondere Verantwortung für Frieden und Sicherheit einher. Sich aus 
            internationalen Einsätzen herauszuhalten, wäre ein Widerspruch zum eigenen Anspruch 
            als verlässlicher Partner.
          </p>
          <InfoBox variant="pro" title="Beispiel">
            <p>Die deutsche Beteiligung an der UN-Mission MINUSMA in Mali (2013–2023) war 
            Ausdruck dieser Verantwortungsübernahme: Deutschland stellte Aufklärungs- und 
            Transportkapazitäten bereit, um die Stabilisierung des Landes zu unterstützen.</p>
          </InfoBox>
          <p>
            <strong>Gegenkritik:</strong> Verantwortung lässt sich auch durch Diplomatie, 
            Entwicklungshilfe und wirtschaftliche Zusammenarbeit wahrnehmen. Militärische 
            Beteiligung ist nicht die einzige Form internationalen Engagements.
          </p>

          <h2>2. Stabilisierung von Krisenregionen</h2>
          <p>
            Instabile Regionen bedrohen nicht nur die lokale Bevölkerung, sondern haben 
            weitreichende Auswirkungen – Flüchtlingsbewegungen, Terrorismus, organisierte 
            Kriminalität. Militärische Stabilisierungseinsätze können den Rahmen schaffen, 
            in dem ziviler Wiederaufbau und politische Lösungen möglich werden.
          </p>
          <p>
            <strong>Gegenkritik:</strong> Die Erfahrung aus Afghanistan und Libyen zeigt, 
            dass militärische Intervention nicht automatisch zu Stabilisierung führt. 
            Ohne langfristige politische Strategie können Einsätze die Lage sogar verschlechtern.
          </p>

          <h2>3. Bündnisfähigkeit und Solidarität</h2>
          <p>
            Die NATO basiert auf dem Prinzip kollektiver Verteidigung. Wenn Deutschland die 
            Solidarität seiner Bündnispartner erwartet – etwa im Rahmen der nuklearen 
            Schutzgarantie –, muss es bereit sein, selbst Solidarität zu leisten. 
            Trittbrettfahren untergräbt die Glaubwürdigkeit des Bündnisses.
          </p>
          <p>
            <strong>Gegenkritik:</strong> Bündnissolidarität darf nicht zum Automatismus 
            werden. Jeder Einsatz muss individuell bewertet werden – blinde Gefolgschaft 
            ist kein Zeichen von Stärke.
          </p>

          <h2>4. Terrorismusbekämpfung</h2>
          <p>
            Terroristische Netzwerke operieren global. Die Bekämpfung von Organisationen wie 
            dem IS oder Al-Qaida erfordert auch militärische Mittel – insbesondere dort, wo 
            staatliche Strukturen zusammengebrochen sind und lokale Sicherheitskräfte 
            überfordert sind.
          </p>
          <InfoBox variant="pro" title="Beispiel">
            <p>Die Bundeswehr beteiligte sich ab 2015 am Anti-IS-Einsatz in Syrien und 
            Irak mit Tornado-Aufklärungsflugzeugen und Tankflugzeugen. Der IS verlor 
            bis 2019 sein gesamtes Territorium.</p>
          </InfoBox>
          <p>
            <strong>Gegenkritik:</strong> Militärische Terrorismusbekämpfung kann zu 
            Radikalisierung beitragen. Drohnenangriffe und Kollateralschäden schaffen 
            neue Rekrutierungsgründe für Extremisten.
          </p>

          <h2>5. Schutz von Zivilisten</h2>
          <p>
            Die „Responsibility to Protect" (R2P) – die Schutzverantwortung – ist ein 
            Konzept der Vereinten Nationen. Es besagt, dass die internationale Gemeinschaft 
            eingreifen darf (und soll), wenn ein Staat seine eigene Bevölkerung nicht schützen 
            kann oder will. Völkermord, Kriegsverbrechen und ethnische Säuberungen rechtfertigen 
            internationales Handeln.
          </p>
          <p>
            <strong>Gegenkritik:</strong> R2P wird selektiv angewandt. Warum wurde in Libyen 
            interveniert, aber nicht in Syrien? Diese Inkonsistenz untergräbt die 
            Glaubwürdigkeit des Konzepts.
          </p>

          <h2>6. Prävention größerer Konflikte</h2>
          <p>
            Frühzeitige Intervention kann verhindern, dass lokale Konflikte eskalieren und 
            zu regionalen Flächenbränden werden. Die Kosten einer rechtzeitigen 
            Friedenssicherung sind in der Regel deutlich geringer als die Kosten eines 
            ausgewachsenen Krieges.
          </p>
          <p>
            <strong>Gegenkritik:</strong> Die Behauptung, dass ein Einsatz einen größeren 
            Konflikt verhindert hat, lässt sich kaum beweisen. Interventionen können 
            auch unbeabsichtigt zur Eskalation beitragen.
          </p>

          <h2>7. Politischer Einfluss Deutschlands</h2>
          <p>
            Militärisches Engagement verschafft Deutschland Mitspracherecht in 
            internationalen Verhandlungen. Wer an Einsätzen teilnimmt, sitzt am Tisch, 
            wenn über die politische Zukunft einer Region entschieden wird. Wer sich 
            raushält, wird auch bei der Gestaltung nicht gefragt.
          </p>
          <p>
            <strong>Gegenkritik:</strong> Einfluss sollte nicht von militärischer 
            Beteiligung abhängen. Deutschland kann auch durch wirtschaftliche Stärke, 
            diplomatisches Geschick und multilaterale Initiativen Einfluss ausüben.
          </p>
        </Prose>
      </ContentSection>

      <ContentSection className="mt-12">
        <div className="flex justify-between">
          <Link to="/geschichte" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Geschichte
          </Link>
          <Link to="/contra" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Contra-Argumente <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </ContentSection>
    </div>
  </Layout>
);

export default ProArgumente;
