import Layout from "@/components/Layout";
import { PageHeader, ContentSection, Prose, InfoBox, TimelineItem, MilitaryDivider, StatCard } from "@/components/ContentSection";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Geschichte = () => (
  <Layout>
    <PageHeader
      chapter="Kapitel 2"
      title="Historischer Kontext"
      subtitle="Von der reinen Verteidigungsarmee zur internationalen Einsatztruppe – der Wandel der Bundeswehr seit 1990."
    />

    {/* Key stats */}
    <div className="border-b bg-card/50">
      <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
        <div className="grid grid-cols-3 gap-3">
          <StatCard value="1955" label="Gründung Bundeswehr" />
          <StatCard value="1999" label="Erster Kampfeinsatz" />
          <StatCard value="2022" label="Zeitenwende" />
        </div>
      </div>
    </div>

    <div className="py-12 sm:py-16">
      <ContentSection>
        <Prose>
          <h2>Die Wende: 1990 als Zäsur</h2>
          <p>
            Mit der deutschen Wiedervereinigung und dem Ende des Kalten Krieges veränderte sich die 
            geopolitische Landschaft grundlegend. Die Bundeswehr, die seit ihrer Gründung 1955 
            ausschließlich auf die Landesverteidigung im Rahmen der NATO ausgerichtet war, stand vor 
            einer neuen Herausforderung: Welche Rolle sollte das vereinte Deutschland in der 
            internationalen Sicherheitspolitik spielen?
          </p>
          <p>
            Die erste große Bewährungsprobe kam mit dem Zweiten Golfkrieg 1990/91. Deutschland 
            beteiligte sich nicht militärisch, leistete aber erhebliche finanzielle Unterstützung – 
            was international als „Scheckbuch-Diplomatie" kritisiert wurde. Dieser Vorwurf wurde zu 
            einem wichtigen Katalysator für die spätere Neuausrichtung.
          </p>
          <p>
            Die innenpolitische Debatte war geprägt von zwei Lagern: Auf der einen Seite standen 
            diejenigen, die in der neuen geopolitischen Lage eine Chance sahen, Deutschland als 
            verantwortungsvollen internationalen Akteur zu positionieren. Auf der anderen Seite 
            warnten Kritiker vor einem Rückfall in militaristisches Denken und verwiesen auf die 
            historische Verantwortung Deutschlands.
          </p>

          <h2>Die Jugoslawienkriege: Der entscheidende Bruch</h2>
          <p>
            Die Kriege im ehemaligen Jugoslawien in den 1990er-Jahren zwangen Deutschland, seine 
            Haltung zu überdenken. Das Massaker von Srebrenica 1995, bei dem über 8.000 
            bosnisch-muslimische Männer und Jungen ermordet wurden – während ein niederländisches 
            UN-Bataillon nicht eingriff –, wurde zum Wendepunkt der deutschen Debatte.
          </p>
          <p>
            1999 beteiligte sich die Bundeswehr erstmals an einem Kampfeinsatz: dem NATO-Luftangriff 
            auf Serbien im Kosovokrieg. Ausgerechnet die rot-grüne Bundesregierung unter Gerhard 
            Schröder und Joschka Fischer traf diese historische Entscheidung. Fischer begründete 
            den Einsatz mit den Worten: „Ich habe nicht nur ‚Nie wieder Krieg' gelernt, sondern 
            auch ‚Nie wieder Auschwitz'."
          </p>

          <InfoBox variant="warning" title="Schlüsselzitat">
            <p className="italic text-base">
              „Ich habe nicht nur ‚Nie wieder Krieg' gelernt, sondern auch ‚Nie wieder Auschwitz'."
            </p>
            <p className="mt-2 text-xs text-muted-foreground">— Joschka Fischer, Bundesaußenminister, 1999</p>
          </InfoBox>

          <h2>Afghanistan: Der längste Einsatz</h2>
          <p>
            Nach den Terroranschlägen vom 11. September 2001 beschloss der Bundestag die Beteiligung 
            an der International Security Assistance Force (ISAF) in Afghanistan. Dieser Einsatz 
            dauerte von 2001 bis 2021 und wurde zum längsten und verlustreichsten Einsatz der 
            Bundeswehr: 59 deutsche Soldaten starben, hunderte wurden verwundet.
          </p>
          <p>
            Der Afghanistan-Einsatz verdeutlichte die Kluft zwischen politischem Anspruch und 
            militärischer Realität. Lange sprach die Bundesregierung von einem „Stabilisierungseinsatz", 
            während die Soldaten vor Ort in Kampfhandlungen verwickelt waren. Erst das Bombardement 
            von Kunduz 2009, bei dem bis zu 142 Menschen starben – darunter viele Zivilisten –, 
            erzwang eine ehrlichere Debatte.
          </p>
          <p>
            Die Evakuierungsmission im August 2021, als die Taliban Kabul einnahmen, wurde zum 
            Symbol des Scheiterns: Tausende lokale Helfer und ihre Familien konnten nicht 
            rechtzeitig ausgeflogen werden. Die chaotischen Szenen am Flughafen Kabul prägten 
            sich in das kollektive Gedächtnis ein.
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
            Ausbildungsmissionen in Mali und Somalia.
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
          </p>
        </Prose>
      </ContentSection>

      <MilitaryDivider label="Zeitstrahl" />

      <ContentSection>
        <TimelineItem year="1955" title="Gründung der Bundeswehr" description="Aufstellung als Verteidigungsarmee im Rahmen der NATO. Keine Auslandseinsätze vorgesehen." />
        <TimelineItem year="1990/91" title="Zweiter Golfkrieg" description="Deutschland beteiligt sich finanziell, aber nicht militärisch. Vorwurf der ‚Scheckbuch-Diplomatie'." />
        <TimelineItem year="1992–95" title="Jugoslawienkriege" description="Humanitäre Hilfe und Überwachung. Srebrenica 1995 als Wendepunkt der Debatte." />
        <TimelineItem year="1994" title="BVerfG-Urteil" description="Bundesverfassungsgericht erklärt Auslandseinsätze im Rahmen kollektiver Sicherheit für zulässig." />
        <TimelineItem year="1999" title="Kosovo-Krieg" description="Erster Kampfeinsatz der Bundeswehr. NATO-Luftangriffe auf Serbien unter rot-grüner Regierung." />
        <TimelineItem year="2001–2021" title="Afghanistan (ISAF/Resolute Support)" description="Längster Einsatz: 59 Gefallene, Kunduz-Bombardement 2009, chaotischer Abzug 2021." />
        <TimelineItem year="2013–2023" title="Mali (MINUSMA)" description="Stabilisierungseinsatz in der Sahelzone. Beendigung auf Druck der malischen Militärjunta." />
        <TimelineItem year="2015–heute" title="Anti-IS-Koalition" description="Aufklärung und Luftbetankung über Syrien und Irak." />
        <TimelineItem year="2022" title="Zeitenwende" description="100 Milliarden Sondervermögen, verstärkte NATO-Ostflanke, Waffenlieferungen an die Ukraine." />
      </ContentSection>

      <ContentSection className="mt-8">
        <InfoBox title="Kernpunkte">
          <ul className="list-disc pl-4 space-y-1">
            <li>Vom Scheckbuch-Diplomaten zum militärischen Akteur</li>
            <li>Srebrenica als moralischer Wendepunkt</li>
            <li>Kosovo 1999: Erster Kampfeinsatz der Bundeswehr</li>
            <li>Afghanistan: 20 Jahre Einsatz mit umstrittenem Ergebnis</li>
            <li>Zeitenwende 2022: Neue sicherheitspolitische Realität</li>
          </ul>
        </InfoBox>
      </ContentSection>

      {/* Navigation */}
      <ContentSection className="mt-12">
        <div className="flex justify-between">
          <Link to="/" className="flex items-center gap-2 text-sm font-tactical tracking-wider text-muted-foreground hover:text-accent transition-colors">
            <ArrowLeft className="h-4 w-4" /> Einführung
          </Link>
          <Link to="/pro" className="flex items-center gap-2 text-sm font-tactical tracking-wider text-muted-foreground hover:text-accent transition-colors">
            Pro-Argumente <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </ContentSection>
    </div>
  </Layout>
);

export default Geschichte;
