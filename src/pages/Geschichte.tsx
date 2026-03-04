import Layout from "@/components/Layout";
import { PageHeader, ContentSection, Prose, InfoBox, TimelineItem, ModernDivider, StatCard, QuoteBlock } from "@/components/ContentSection";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Geschichte = () => (
  <Layout>
    <PageHeader
      chapter="Kapitel 2"
      title="Historischer Kontext"
      subtitle="Von der reinen Verteidigungsarmee zur internationalen Einsatztruppe – der fundamentale Wandel der Bundeswehr seit 1990."
    />

    <div className="border-b border-border/50">
      <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
        <div className="grid grid-cols-3 gap-4">
          <StatCard value="1955" label="Gründung der Bundeswehr" />
          <StatCard value="1999" label="Erster Kampfeinsatz" />
          <StatCard value="2022" label="Zeitenwende" />
        </div>
      </div>
    </div>

    <div className="py-14 sm:py-20">
      <ContentSection>
        <Prose>
          <h2>Die Wende: 1990 als Zäsur</h2>
          <p>
            Mit der deutschen Wiedervereinigung und dem Ende des Kalten Krieges veränderte sich die 
            geopolitische Landschaft grundlegend. Die Bundeswehr, die seit ihrer Gründung 1955 
            ausschließlich auf die Landesverteidigung im Rahmen der NATO ausgerichtet war, stand vor 
            einer neuen Herausforderung: Welche Rolle sollte das vereinte Deutschland in der 
            internationalen Sicherheitspolitik spielen? Diese Frage war keineswegs trivial – schließlich 
            hatte die Bundesrepublik vierzig Jahre lang bewusst auf eine aktive militärische Rolle 
            jenseits der eigenen Grenzen verzichtet.
          </p>
          <p>
            Die erste große Bewährungsprobe kam mit dem Zweiten Golfkrieg 1990/91. Deutschland 
            beteiligte sich nicht militärisch, leistete aber erhebliche finanzielle Unterstützung – 
            insgesamt rund 17 Milliarden D-Mark. Dies wurde international als „Scheckbuch-Diplomatie" 
            kritisiert und als Zeichen mangelnder Solidarität gewertet. Dieser Vorwurf wurde zu 
            einem wichtigen Katalysator für die spätere Neuausrichtung der deutschen Außen- und 
            Sicherheitspolitik.
          </p>
          <p>
            Die innenpolitische Debatte war geprägt von zwei Lagern: Auf der einen Seite standen 
            diejenigen, die in der neuen geopolitischen Lage eine Chance sahen, Deutschland als 
            verantwortungsvollen internationalen Akteur zu positionieren. Auf der anderen Seite 
            warnten Kritiker vor einem Rückfall in militaristisches Denken und verwiesen auf die 
            historische Verantwortung Deutschlands. Diese Polarisierung prägt die Debatte in 
            abgewandelter Form bis heute.
          </p>
          <p>
            Es war eine Zeit des Umbruchs, in der alte Gewissheiten zerfielen. Die Bedrohung durch 
            den Warschauer Pakt, die jahrzehntelang die Existenzberechtigung der Bundeswehr definiert 
            hatte, war über Nacht weggefallen. Was folgte, war eine Phase der Neuorientierung, die 
            von Unsicherheit, aber auch von neuen Möglichkeiten geprägt war. Die Bundeswehr musste 
            sich die Frage stellen, welchen Zweck sie in einer veränderten Welt erfüllen sollte.
          </p>

          <h2>Die Jugoslawienkriege: Der entscheidende Bruch</h2>
          <p>
            Die Kriege im ehemaligen Jugoslawien in den 1990er-Jahren zwangen Deutschland, seine 
            Haltung zu überdenken. Das Massaker von Srebrenica 1995, bei dem über 8.000 
            bosnisch-muslimische Männer und Jungen ermordet wurden – während ein niederländisches 
            UN-Bataillon nicht eingriff –, wurde zum Wendepunkt der deutschen Debatte. Die Bilder 
            aus Bosnien und später aus dem Kosovo machten deutlich, dass auch in Europa Völkermord 
            möglich war – und dass Wegschauen keine moralisch neutrale Haltung ist.
          </p>
          <p>
            1999 beteiligte sich die Bundeswehr erstmals an einem Kampfeinsatz: dem NATO-Luftangriff 
            auf Serbien im Kosovokrieg. Ausgerechnet die rot-grüne Bundesregierung unter Gerhard 
            Schröder und Joschka Fischer traf diese historische Entscheidung. Fischer begründete 
            den Einsatz mit den Worten, die zum geflügelten Wort wurden und die gesamte Debatte 
            auf den Punkt brachten.
          </p>

          <QuoteBlock 
            quote="Ich habe nicht nur ‚Nie wieder Krieg' gelernt, sondern auch ‚Nie wieder Auschwitz'."
            author="Joschka Fischer, Bundesaußenminister, 1999"
          />

          <p>
            Dieses Zitat verdichtet die zentrale Spannung der gesamten Debatte: Zwei historische 
            Lehren, die beide berechtigt sind, stehen in einem unauflösbaren Widerspruch. Der 
            Kosovo-Einsatz war völkerrechtlich umstritten, da er ohne UN-Mandat stattfand, aber er 
            wurde von den meisten Beteiligten als moralisch notwendig erachtet. Für die Grünen 
            bedeutete diese Entscheidung einen schmerzhaften Bruch mit der eigenen pazifistischen 
            Tradition.
          </p>

          <h2>Afghanistan: Der längste und verlustreichste Einsatz</h2>
          <p>
            Nach den Terroranschlägen vom 11. September 2001 beschloss der Bundestag die Beteiligung 
            an der International Security Assistance Force (ISAF) in Afghanistan. Dieser Einsatz 
            dauerte von 2001 bis 2021 und wurde zum längsten und verlustreichsten Einsatz der 
            Bundeswehr: 59 deutsche Soldaten starben, hunderte wurden verwundet, und eine unbekannte 
            Zahl leidet bis heute unter posttraumatischen Belastungsstörungen.
          </p>
          <p>
            Der Afghanistan-Einsatz verdeutlichte die Kluft zwischen politischem Anspruch und 
            militärischer Realität. Lange sprach die Bundesregierung von einem „Stabilisierungseinsatz", 
            während die Soldaten vor Ort in Kampfhandlungen verwickelt waren. Erst das Bombardement 
            von Kunduz 2009, bei dem bis zu 142 Menschen starben – darunter viele Zivilisten –, 
            erzwang eine ehrlichere Debatte über die tatsächliche Natur des Einsatzes.
          </p>
          <p>
            Die Bilanz des Afghanistan-Einsatzes ist ernüchternd: Trotz 20 Jahren internationaler 
            Präsenz, Milliarden an Investitionen und dem Aufbau von Infrastruktur und Institutionen 
            übernahmen die Taliban im August 2021 innerhalb weniger Wochen wieder die Kontrolle. Die 
            chaotische Evakuierungsmission, bei der tausende lokale Helfer und ihre Familien nicht 
            rechtzeitig ausgeflogen werden konnten, wurde zum Symbol des Scheiterns und hinterließ 
            tiefe politische und moralische Narben.
          </p>

          <h2>Bündnisverpflichtungen und NATO</h2>
          <p>
            Deutschlands Mitgliedschaft in der NATO bildet einen wesentlichen Rahmen für 
            Auslandseinsätze. Der Bündnisfall nach Artikel 5 wurde erstmals nach dem 11. September 
            2001 ausgerufen. Die NATO-Mitgliedschaft verpflichtet Deutschland zur Solidarität – 
            auch wenn der Umfang der Beteiligung politisch verhandelbar bleibt.
          </p>
          <p>
            Das 2%-Ziel der NATO – wonach jedes Mitglied 2% seines BIP für Verteidigung ausgeben 
            soll – war jahrelang ein Streitpunkt. Deutschland verfehlt dieses Ziel seit Jahrzehnten, 
            was zu Kritik insbesondere aus den USA führte. Erst die Zeitenwende 2022 brachte 
            eine Kurskorrektur.
          </p>
          <p>
            Darüber hinaus hat die Europäische Union eigene sicherheitspolitische Strukturen 
            aufgebaut. Deutschland beteiligt sich an EU-Missionen in Afrika und im Mittelmeer, 
            etwa an der Operation Sophia zur Bekämpfung von Menschenschmuggel oder an 
            Ausbildungsmissionen in Mali und Somalia. Die Frage, ob Europa eine eigenständige 
            militärische Handlungsfähigkeit entwickeln soll – unabhängig von den USA –, gewinnt 
            angesichts geopolitischer Verschiebungen zunehmend an Bedeutung.
          </p>

          <h2>Die Zeitenwende 2022</h2>
          <p>
            Der russische Angriff auf die Ukraine im Februar 2022 markierte eine erneute Zäsur. 
            Bundeskanzler Olaf Scholz sprach von einer „Zeitenwende" und kündigte ein 
            Sondervermögen von 100 Milliarden Euro für die Bundeswehr an. Die Frage nach 
            Auslandseinsätzen erhielt damit eine neue Dimension: Es ging nicht mehr nur um 
            Stabilisierungsmissionen in fernen Krisenregionen, sondern um die Verteidigung 
            der europäischen Sicherheitsordnung selbst.
          </p>
          <p>
            Die Lieferung schwerer Waffen an die Ukraine, die Stationierung zusätzlicher 
            Truppen in den baltischen Staaten und die verstärkte Präsenz an der NATO-Ostflanke 
            markieren einen historischen Paradigmenwechsel in der deutschen Sicherheitspolitik. 
            Zum ersten Mal seit dem Ende des Kalten Krieges steht die Landesverteidigung wieder 
            im Zentrum der strategischen Planung – nicht als abstraktes Szenario, sondern als 
            reale Möglichkeit.
          </p>
        </Prose>
      </ContentSection>

      <ModernDivider label="Zeitstrahl" />

      <ContentSection>
        <TimelineItem year="1955" title="Gründung der Bundeswehr" description="Aufstellung als Verteidigungsarmee im Rahmen der NATO. Keine Auslandseinsätze vorgesehen." />
        <TimelineItem year="1990/91" title="Zweiter Golfkrieg" description="Deutschland beteiligt sich finanziell (17 Mrd. DM), aber nicht militärisch. Vorwurf der ‚Scheckbuch-Diplomatie'." />
        <TimelineItem year="1992–95" title="Jugoslawienkriege" description="Humanitäre Hilfe und Überwachung. Srebrenica 1995 als moralischer Wendepunkt der Debatte." />
        <TimelineItem year="1994" title="BVerfG-Urteil" description="Bundesverfassungsgericht erklärt Auslandseinsätze im Rahmen kollektiver Sicherheit für zulässig." />
        <TimelineItem year="1999" title="Kosovo-Krieg" description="Erster Kampfeinsatz der Bundeswehr. NATO-Luftangriffe ohne UN-Mandat unter rot-grüner Regierung." />
        <TimelineItem year="2001–2021" title="Afghanistan (ISAF/Resolute Support)" description="Längster Einsatz: 59 Gefallene, Kunduz-Bombardement 2009, chaotischer Abzug August 2021." />
        <TimelineItem year="2013–2023" title="Mali (MINUSMA)" description="Stabilisierungseinsatz in der Sahelzone. Beendigung auf Druck der malischen Militärjunta." />
        <TimelineItem year="2015–heute" title="Anti-IS-Koalition" description="Aufklärung und Luftbetankung im Kampf gegen den Islamischen Staat." />
        <TimelineItem year="2022" title="Zeitenwende" description="100 Milliarden Sondervermögen, verstärkte NATO-Ostflanke, Waffenlieferungen an die Ukraine." />
      </ContentSection>

      <ContentSection className="mt-10">
        <InfoBox title="Kernpunkte des Kapitels">
          <ul className="list-disc pl-4 space-y-2">
            <li>Vom Scheckbuch-Diplomaten zum militärischen Akteur in drei Jahrzehnten</li>
            <li>Srebrenica als moralischer Wendepunkt: Wegsehen ist keine neutrale Haltung</li>
            <li>Kosovo 1999: Erster Kampfeinsatz unter rot-grüner Regierung</li>
            <li>Afghanistan: 20 Jahre Einsatz mit ernüchternder Bilanz</li>
            <li>Zeitenwende 2022: Rückkehr der Landesverteidigung als zentrale Aufgabe</li>
          </ul>
        </InfoBox>
      </ContentSection>

      <ContentSection className="mt-12">
        <div className="flex justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
            <ArrowLeft className="h-4 w-4" /> Einführung
          </Link>
          <Link to="/pro" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors">
            Pro-Argumente <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </ContentSection>
    </div>
  </Layout>
);

export default Geschichte;
