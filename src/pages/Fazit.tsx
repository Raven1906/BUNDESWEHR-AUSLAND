import Layout from "@/components/Layout";
import { PageHeader, ContentSection, Prose, InfoBox, MilitaryDivider } from "@/components/ContentSection";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Fazit = () => (
  <Layout>
    <PageHeader
      chapter="Kapitel 7"
      title="Fazit & offene Fragen"
      subtitle="Kein einfaches ‚Gut' oder ‚Schlecht' – sondern differenzierte Bedingungen und Reflexionsfragen."
    />

    <div className="py-12 sm:py-16">
      <ContentSection>
        <Prose>
          <h2>Eine Bilanz der Ambivalenz</h2>
          <p>
            Wer sich ehrlich mit dem Thema Auslandseinsätze auseinandersetzt, kommt nicht 
            umhin festzustellen: Es gibt keine einfache Antwort. Weder die pauschale 
            Ablehnung noch die bedingungslose Befürwortung militärischer Interventionen 
            hält einer differenzierten Prüfung stand.
          </p>
          <p>
            Die Bilanz der bisherigen Einsätze ist gemischt. Kosovo gilt als relativ 
            erfolgreich, Afghanistan als gescheitert, Mali als abgebrochen, die 
            Anti-IS-Koalition als militärisch erfolgreich bei politisch offenem Ausgang. 
            Jeder Einsatz hat seine eigene Geschichte, seine eigenen Bedingungen und 
            seine eigenen Lehren.
          </p>
          <p>
            Was diese Analyse zeigt: Die Qualität der Debatte ist entscheidend. Wer 
            Auslandseinsätze pauschal befürwortet oder ablehnt, wird der Komplexität 
            des Themas nicht gerecht. Jeder Einzelfall erfordert eine sorgfältige 
            Abwägung – und die Bereitschaft, eigene Überzeugungen an Fakten zu messen.
          </p>

          <h2>Bedingungen für sinnvolle Einsätze</h2>
          <p>
            Aus der Analyse lassen sich Bedingungen ableiten, unter denen Auslandseinsätze 
            eher erfolgversprechend sind:
          </p>
          <ul>
            <li><strong>Klares Mandat</strong> – Völkerrechtliche Grundlage, idealerweise UN-Resolution</li>
            <li><strong>Definierte Ziele</strong> – Was soll konkret erreicht werden? Wann ist der Einsatz beendet?</li>
            <li><strong>Verhältnismäßigkeit</strong> – Die Mittel müssen dem Ziel angemessen sein</li>
            <li><strong>Politische Strategie</strong> – Militärische Mittel allein lösen keine politischen Probleme</li>
            <li><strong>Langfristiges Engagement</strong> – Stabilisierung erfordert Geduld und Ressourcen</li>
            <li><strong>Lokale Akzeptanz</strong> – Ohne Zustimmung der Bevölkerung vor Ort ist Erfolg unwahrscheinlich</li>
            <li><strong>Exit-Strategie</strong> – Wie und wann wird der Einsatz beendet?</li>
            <li><strong>Parlamentarische Kontrolle</strong> – Regelmäßige Überprüfung und Rechenschaftspflicht</li>
            <li><strong>Vernetzter Ansatz</strong> – Integration militärischer, diplomatischer und ziviler Instrumente</li>
          </ul>

          <h2>Bedingungen, unter denen Einsätze problematisch sind</h2>
          <ul>
            <li>Fehlende völkerrechtliche Legitimation</li>
            <li>Primär geopolitische statt humanitäre Motive</li>
            <li>Keine realistische Erfolgsaussicht</li>
            <li>Mangelnde Bereitschaft zum langfristigen Engagement</li>
            <li>Ablehnung durch die lokale Bevölkerung</li>
            <li>Fehlende politische Nachsorge-Strategie</li>
            <li>Unverhältnismäßige Risiken für eigene Soldaten</li>
            <li>Fehlende öffentliche Debatte und Transparenz</li>
          </ul>

          <InfoBox variant="warning" title="Zentrale Erkenntnis">
            <p>
              Die Frage ist nicht „Auslandseinsätze ja oder nein?", sondern: „Unter welchen 
              Bedingungen, mit welchen Zielen, mit welchen Mitteln und mit welcher 
              Nachsorge-Strategie?" Pauschale Antworten werden der Komplexität des Themas 
              nicht gerecht. Die Debatte muss differenzierter geführt werden – und das 
              erfordert informierte Bürgerinnen und Bürger.
            </p>
          </InfoBox>

          <h2>Lehren aus 30 Jahren Einsatzgeschichte</h2>
          <p>
            Aus drei Jahrzehnten Auslandseinsätzen lassen sich zentrale Lehren ziehen:
          </p>
          <ul>
            <li><strong>Ehrlichkeit:</strong> Die Einsatzrealität muss offen kommuniziert werden. 
            Die jahrelange Weigerung, den Afghanistan-Einsatz als Krieg zu bezeichnen, hat das 
            Vertrauen beschädigt.</li>
            <li><strong>Bescheidenheit:</strong> Die Grenzen dessen, was militärische Intervention 
            erreichen kann, müssen realistisch eingeschätzt werden. Nation-Building von außen 
            funktioniert selten.</li>
            <li><strong>Verantwortung:</strong> Wer interveniert, übernimmt Verantwortung – auch 
            für die langfristigen Folgen. Ein überstürzter Abzug ist ethisch nicht vertretbar.</li>
            <li><strong>Integration:</strong> Militärische Mittel sind nur ein Element. Ohne 
            diplomatische, wirtschaftliche und zivilgesellschaftliche Begleitung bleiben 
            Einsätze wirkungslos.</li>
          </ul>

          <h2>Reflexionsfragen für die eigene Meinungsbildung</h2>
          <p>
            Diese Analyse soll Ihnen helfen, eine fundierte eigene Position zu entwickeln. 
            Die folgenden Fragen können als Ausgangspunkt für Ihre persönliche Reflexion dienen:
          </p>
          <ul>
            <li>Gibt es Situationen, in denen militärisches Eingreifen moralisch geboten ist?</li>
            <li>Wer sollte über den Einsatz der Bundeswehr entscheiden – und nach welchen Kriterien?</li>
            <li>Welche Verantwortung trägt Deutschland als wohlhabendes Land in einer instabilen Welt?</li>
            <li>Wie viel Risiko für eigene Soldaten ist vertretbar, um fremde Zivilisten zu schützen?</li>
            <li>Ist es moralisch konsistent, von NATO-Schutz zu profitieren, aber selbst kaum beizutragen?</li>
            <li>Was wiegt schwerer: das Leid, das durch Intervention entsteht, oder das Leid, das durch Nicht-Handeln fortbesteht?</li>
            <li>Können militärische Mittel überhaupt nachhaltigen Frieden schaffen?</li>
            <li>Wie würden Sie entscheiden, wenn Sie persönlich betroffen wären – als Soldat, als Zivilist in einer Krisenregion, als Politiker?</li>
          </ul>

          <h2>Abschließende Gedanken</h2>
          <p>
            Die Debatte um Auslandseinsätze wird Deutschland weiter begleiten. In einer Welt, 
            die nicht friedlicher wird, bleibt die Frage nach dem richtigen Umgang mit 
            militärischer Gewalt drängend. Was sich ändern muss, ist die Qualität der Debatte: 
            weniger Schlagzeilen, mehr Differenzierung. Weniger Emotionen, mehr Argumente. 
            Weniger Parteipolitik, mehr Verantwortungsbewusstsein.
          </p>
          <p>
            Diese Analyse ist ein Beitrag zu genau dieser besseren Debatte. Nutzen Sie die 
            Argumente, hinterfragen Sie sie, entwickeln Sie Ihre eigene Position – und 
            überprüfen Sie sie immer wieder an neuen Fakten und Entwicklungen. Denn eine 
            Demokratie lebt davon, dass ihre Bürgerinnen und Bürger sich informiert und 
            differenziert mit den großen Fragen der Politik auseinandersetzen.
          </p>
        </Prose>
      </ContentSection>

      <MilitaryDivider />

      <ContentSection className="mt-4">
        <div className="flex justify-between">
          <Link to="/folgen" className="flex items-center gap-2 text-sm font-tactical tracking-wider text-muted-foreground hover:text-accent transition-colors">
            <ArrowLeft className="h-4 w-4" /> Folgen
          </Link>
          <Link to="/reflexion" className="flex items-center gap-2 text-sm font-tactical tracking-wider text-accent font-medium hover:text-accent/80 transition-colors">
            Zum Reflexionstool <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </ContentSection>
    </div>
  </Layout>
);

export default Fazit;
