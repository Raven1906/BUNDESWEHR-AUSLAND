import Layout from "@/components/Layout";
import { PageHeader, ContentSection, Prose, InfoBox } from "@/components/ContentSection";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Geschichte = () => (
  <Layout>
    <PageHeader
      chapter="Kapitel 2"
      title="Historischer Kontext"
      subtitle="Von der reinen Verteidigungsarmee zur internationalen Einsatztruppe – der Wandel der Bundeswehr seit 1990."
    />

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

          <h2>Bündnisverpflichtungen und NATO</h2>
          <p>
            Deutschlands Mitgliedschaft in der NATO bildet einen wesentlichen Rahmen für 
            Auslandseinsätze. Der Bündnisfall nach Artikel 5 wurde erstmals nach dem 11. September 
            2001 ausgerufen. Die NATO-Mitgliedschaft verpflichtet Deutschland zur Solidarität – 
            auch wenn der Umfang der Beteiligung politisch verhandelbar bleibt.
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
        </Prose>
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
          <Link to="/" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="h-4 w-4" /> Einführung
          </Link>
          <Link to="/pro" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors">
            Pro-Argumente <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </ContentSection>
    </div>
  </Layout>
);

export default Geschichte;
