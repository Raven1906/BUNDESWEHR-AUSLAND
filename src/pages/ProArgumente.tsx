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
    <span className="bw-badge">{String(num).padStart(2, '0')}</span>
    <h2 className="font-tactical text-2xl font-semibold text-foreground tracking-[0.12em] !border-0 !pl-0 !mt-0 !mb-0">{title}</h2>
  </motion.div>
);

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
          <ArgumentHeader num={1} title="Internationale Verantwortung" />
          <p>
            Deutschland ist die viertgrößte Volkswirtschaft der Welt, drittgrößter Beitragszahler 
            der Vereinten Nationen und ein zentraler Akteur in NATO und EU. Mit dieser Stellung 
            geht eine besondere Verantwortung für Frieden und Sicherheit einher. Sich aus 
            internationalen Einsätzen herauszuhalten, wäre ein Widerspruch zum eigenen Anspruch 
            als verlässlicher Partner.
          </p>
          <p>
            Diese Verantwortung ergibt sich nicht nur aus der wirtschaftlichen Stärke, sondern auch 
            aus der historischen Erfahrung. Gerade weil Deutschland weiß, was Krieg bedeutet, hat 
            es eine besondere Verpflichtung, sich für Frieden einzusetzen – auch wenn das 
            militärische Mittel einschließen kann.
          </p>
          <InfoBox variant="pro" title="Beispiel: MINUSMA Mali">
            <p>Die deutsche Beteiligung an der UN-Mission MINUSMA in Mali (2013–2023) war 
            Ausdruck dieser Verantwortungsübernahme: Deutschland stellte Aufklärungs- und 
            Transportkapazitäten bereit, um die Stabilisierung des Landes zu unterstützen. 
            Zeitweise waren bis zu 1.100 deutsche Soldatinnen und Soldaten im Einsatz.</p>
          </InfoBox>
          <p>
            <strong>Gegenkritik:</strong> Verantwortung lässt sich auch durch Diplomatie, 
            Entwicklungshilfe und wirtschaftliche Zusammenarbeit wahrnehmen. Militärische 
            Beteiligung ist nicht die einzige Form internationalen Engagements. Die Frage 
            ist, ob sie die wirksamste ist.
          </p>

          <ArgumentHeader num={2} title="Stabilisierung von Krisenregionen" />
          <p>
            Instabile Regionen bedrohen nicht nur die lokale Bevölkerung, sondern haben 
            weitreichende Auswirkungen – Flüchtlingsbewegungen, Terrorismus, organisierte 
            Kriminalität. Militärische Stabilisierungseinsätze können den Rahmen schaffen, 
            in dem ziviler Wiederaufbau und politische Lösungen möglich werden.
          </p>
          <p>
            Der Balkan ist ein Beispiel, in dem militärische Präsenz tatsächlich zur Stabilisierung 
            beigetragen hat. Die KFOR-Mission im Kosovo hat seit 1999 einen erneuten Ausbruch 
            großflächiger Gewalt verhindert und den Aufbau staatlicher Strukturen ermöglicht.
          </p>
          <p>
            <strong>Gegenkritik:</strong> Die Erfahrung aus Afghanistan und Libyen zeigt, 
            dass militärische Intervention nicht automatisch zu Stabilisierung führt. 
            Ohne langfristige politische Strategie können Einsätze die Lage sogar verschlechtern.
          </p>

          <ArgumentHeader num={3} title="Bündnisfähigkeit und Solidarität" />
          <p>
            Die NATO basiert auf dem Prinzip kollektiver Verteidigung. Wenn Deutschland die 
            Solidarität seiner Bündnispartner erwartet – etwa im Rahmen der nuklearen 
            Schutzgarantie –, muss es bereit sein, selbst Solidarität zu leisten. 
            Trittbrettfahren untergräbt die Glaubwürdigkeit des Bündnisses.
          </p>
          <p>
            Das Argument der Bündnisfähigkeit hat nach der Zeitenwende 2022 an Gewicht gewonnen. 
            Die Stationierung deutscher Truppen in Litauen als Teil der NATO Enhanced Forward 
            Presence zeigt, dass Deutschland zunehmend bereit ist, militärische Verantwortung 
            an der Ostflanke zu übernehmen.
          </p>
          <p>
            <strong>Gegenkritik:</strong> Bündnissolidarität darf nicht zum Automatismus 
            werden. Jeder Einsatz muss individuell bewertet werden – blinde Gefolgschaft 
            ist kein Zeichen von Stärke.
          </p>

          <ArgumentHeader num={4} title="Terrorismusbekämpfung" />
          <p>
            Terroristische Netzwerke operieren global. Die Bekämpfung von Organisationen wie 
            dem IS oder Al-Qaida erfordert auch militärische Mittel – insbesondere dort, wo 
            staatliche Strukturen zusammengebrochen sind und lokale Sicherheitskräfte 
            überfordert sind.
          </p>
          <InfoBox variant="pro" title="Beispiel: Anti-IS-Koalition">
            <p>Die Bundeswehr beteiligte sich ab 2015 am Anti-IS-Einsatz in Syrien und 
            Irak mit Tornado-Aufklärungsflugzeugen und Tankflugzeugen. Der IS verlor 
            bis 2019 sein gesamtes Territorium – eine Fläche, die zeitweise der Größe 
            Großbritanniens entsprach.</p>
          </InfoBox>
          <p>
            <strong>Gegenkritik:</strong> Militärische Terrorismusbekämpfung kann zu 
            Radikalisierung beitragen. Drohnenangriffe und Kollateralschäden schaffen 
            neue Rekrutierungsgründe für Extremisten. Zudem ist Terrorismus primär ein 
            polizeiliches und geheimdienstliches Problem, kein militärisches.
          </p>

          <ArgumentHeader num={5} title="Schutz von Zivilisten" />
          <p>
            Die „Responsibility to Protect" (R2P) – die Schutzverantwortung – ist ein 
            Konzept der Vereinten Nationen. Es besagt, dass die internationale Gemeinschaft 
            eingreifen darf (und soll), wenn ein Staat seine eigene Bevölkerung nicht schützen 
            kann oder will. Völkermord, Kriegsverbrechen und ethnische Säuberungen rechtfertigen 
            internationales Handeln.
          </p>
          <p>
            Das Konzept wurde 2005 von der UN-Generalversammlung angenommen und erstmals 
            2011 in Libyen angewandt, als der UN-Sicherheitsrat eine Flugverbotszone zum 
            Schutz der Zivilbevölkerung autorisierte.
          </p>
          <p>
            <strong>Gegenkritik:</strong> R2P wird selektiv angewandt. Warum wurde in Libyen 
            interveniert, aber nicht in Syrien? Diese Inkonsistenz untergräbt die 
            Glaubwürdigkeit des Konzepts und nährt den Vorwurf, dass humanitäre Argumente 
            als Vorwand für geopolitische Interessen dienen.
          </p>

          <ArgumentHeader num={6} title="Prävention größerer Konflikte" />
          <p>
            Frühzeitige Intervention kann verhindern, dass lokale Konflikte eskalieren und 
            zu regionalen Flächenbränden werden. Die Kosten einer rechtzeitigen 
            Friedenssicherung sind in der Regel deutlich geringer als die Kosten eines 
            ausgewachsenen Krieges.
          </p>
          <p>
            Eine Studie der UN schätzt, dass jeder Dollar, der in Konfliktprävention 
            investiert wird, bis zu 16 Dollar an Folgekosten spart. Die KFOR-Mission 
            im Kosovo hat trotz ihrer Kosten wahrscheinlich einen weit teureren 
            regionalen Krieg verhindert.
          </p>
          <p>
            <strong>Gegenkritik:</strong> Die Behauptung, dass ein Einsatz einen größeren 
            Konflikt verhindert hat, lässt sich kaum beweisen. Interventionen können 
            auch unbeabsichtigt zur Eskalation beitragen.
          </p>

          <ArgumentHeader num={7} title="Politischer Einfluss Deutschlands" />
          <p>
            Militärisches Engagement verschafft Deutschland Mitspracherecht in 
            internationalen Verhandlungen. Wer an Einsätzen teilnimmt, sitzt am Tisch, 
            wenn über die politische Zukunft einer Region entschieden wird. Wer sich 
            raushält, wird auch bei der Gestaltung nicht gefragt.
          </p>
          <p>
            Deutschlands Streben nach einem ständigen Sitz im UN-Sicherheitsrat wird 
            durch militärisches Engagement glaubwürdiger. Ein Land, das keine 
            Verantwortung übernimmt, kann kaum erwarten, mehr Mitbestimmung zu erhalten.
          </p>
          <p>
            <strong>Gegenkritik:</strong> Einfluss sollte nicht von militärischer 
            Beteiligung abhängen. Deutschland kann auch durch wirtschaftliche Stärke, 
            diplomatisches Geschick und multilaterale Initiativen Einfluss ausüben.
          </p>
        </Prose>
      </ContentSection>

      <MilitaryDivider />

      <ContentSection>
        <InfoBox variant="pro" title="Zusammenfassung">
          <p>
            Die Pro-Argumente betonen Deutschlands internationale Verantwortung, die Notwendigkeit 
            von Bündnissolidarität und die moralische Pflicht zum Schutz von Zivilisten. Sie 
            argumentieren, dass militärische Mittel – unter den richtigen Bedingungen – ein 
            legitimes Instrument der Friedenssicherung sind. Keines dieser Argumente ist ohne 
            berechtigte Gegeneinwände – die im nächsten Kapitel behandelt werden.
          </p>
        </InfoBox>
      </ContentSection>

      <ContentSection className="mt-12">
        <div className="flex justify-between">
          <Link to="/geschichte" className="flex items-center gap-2 text-sm font-tactical tracking-wider text-muted-foreground hover:text-accent transition-colors">
            <ArrowLeft className="h-4 w-4" /> Geschichte
          </Link>
          <Link to="/contra" className="flex items-center gap-2 text-sm font-tactical tracking-wider text-muted-foreground hover:text-accent transition-colors">
            Contra-Argumente <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </ContentSection>
    </div>
  </Layout>
);

export default ProArgumente;
