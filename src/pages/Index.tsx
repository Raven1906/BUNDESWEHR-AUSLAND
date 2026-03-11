import Layout from "@/components/Layout";
import { PageHeader, ContentSection, Prose, StatCard, ModernDivider } from "@/components/ContentSection";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Scale, History, MessageSquare, TrendingUp, Shield, Target } from "lucide-react";
import { motion } from "framer-motion";

const chapters = [
  { path: "/geschichte", icon: History, label: "Historischer Kontext", desc: "Von 1990 bis heute – wie sich Deutschlands Rolle grundlegend wandelte" },
  { path: "/pro", icon: TrendingUp, label: "Pro-Argumente", desc: "Internationale Verantwortung, Stabilisierung und Bündnisfähigkeit" },
  { path: "/contra", icon: Shield, label: "Contra-Argumente", desc: "Risiken, Kosten, moralische Dilemmata und Abhängigkeiten" },
  { path: "/ethik", icon: Scale, label: "Ethische Bewertung", desc: "Zwischen ‚Nie wieder Krieg' und ‚Nie wieder wegsehen'" },
  { path: "/folgen", icon: BookOpen, label: "Politische Folgen", desc: "Innenpolitik, öffentliche Meinung und Identitätswandel" },
  { path: "/fazit", icon: MessageSquare, label: "Fazit", desc: "Offene Fragen, Lehren und Reflexionsanstöße" },
];

const Index = () => {
  return (
    <Layout>
      <PageHeader
        title="Auslandseinsätze der Bundeswehr"
        subtitle="Eine strukturierte, ausgewogene Analyse aus historischer, politischer und ethischer Perspektive. Keine Parteinahme – nur Argumente, Fakten und Reflexion."
        chapter="Analyse & Reflexion"
      />

      {/* Stats */}
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          <StatCard value="30+" label="Jahre Einsatzgeschichte" />
          <StatCard value="59" label="Gefallene in Afghanistan" />
          <StatCard value="12,5" label="Mrd. € Afghanistan-Kosten" suffix="Mrd." />
          <StatCard value="100" label="Mrd. € Sondervermögen" suffix="Mrd." />
        </div>
      </div>

      <div className="py-12 sm:py-16">
        <ContentSection>
          <Prose>
            <h2>Was sind Auslandseinsätze?</h2>
            <p>
              Unter Auslandseinsätzen der Bundeswehr versteht man den Einsatz deutscher Streitkräfte
              außerhalb des Territoriums der Bundesrepublik Deutschland. Diese Einsätze umfassen ein 
              breites Spektrum – von humanitärer Hilfe und Katastrophenhilfe über Friedenssicherung 
              und Stabilisierungsmissionen bis hin zu Kampfeinsätzen im Rahmen internationaler Mandate.
            </p>
            <p>
              Seit dem Ende des Kalten Krieges hat sich die Rolle der Bundeswehr grundlegend gewandelt. 
              Was jahrzehntelang als reine Verteidigungsarmee konzipiert war, wurde zunehmend zu einem 
              Instrument internationaler Sicherheitspolitik. Dieser Wandel ist bis heute Gegenstand 
              intensiver politischer und gesellschaftlicher Debatten, die weit über militärische Fragen 
              hinausgehen und die deutsche Identität als Ganzes berühren.
            </p>
            <p>
              Die Bundeswehr war und ist in zahlreichen Einsatzgebieten aktiv: vom Balkan über 
              Afghanistan und Mali bis hin zum Horn von Afrika. Jeder Einsatz hat seine eigene 
              Geschichte, seine eigenen Herausforderungen und seine eigenen Lehren. Die Bandbreite 
              reicht von unbewaffneter Beobachtung bis zu intensiven Gefechten – und die Grenzen 
              zwischen diesen Kategorien verschwimmen in der Praxis häufig. In manchen Fällen wurden 
              Einsätze, die als reine Stabilisierungsmissionen begonnen hatten, zu de-facto-Kampfeinsätzen, 
              ohne dass die politische Kommunikation diese Realität widerspiegelte.
            </p>
            <p>
              Die Debatte über Auslandseinsätze ist auch eine Debatte über das Selbstverständnis der 
              Bundesrepublik Deutschland. Wie positioniert sich ein Land, das aufgrund seiner Geschichte 
              eine besondere Verantwortung trägt, in einer Welt, die von geopolitischen Rivalitäten, 
              asymmetrischen Konflikten und neuen Bedrohungsformen geprägt ist? Diese Frage durchzieht 
              alle Kapitel dieser Analyse.
            </p>

            <h2>Rechtliche Grundlage</h2>
            <p>
              Auslandseinsätze der Bundeswehr unterliegen strengen rechtlichen Rahmenbedingungen. 
              Das <strong>Grundgesetz</strong> legt in Artikel 87a fest, dass der Bund Streitkräfte zur 
              Verteidigung aufstellt. Das <strong>Bundesverfassungsgericht</strong> hat 1994 in einem 
              wegweisenden Urteil entschieden, dass Auslandseinsätze im Rahmen kollektiver 
              Sicherheitssysteme – wie NATO oder UN – zulässig sind. Dieses Urteil markierte einen 
              Wendepunkt in der deutschen Verfassungsgeschichte und ebnete den Weg für die Beteiligung 
              an internationalen Missionen.
            </p>
            <p>
              Entscheidend ist dabei der <strong>Parlamentsvorbehalt</strong>: Jeder bewaffnete Einsatz 
              der Bundeswehr bedarf der vorherigen Zustimmung des Deutschen Bundestages. Diese sogenannte 
              „Parlamentsarmee" ist ein weltweit nahezu einzigartiges Konzept und stellt sicher, dass 
              militärische Entscheidungen demokratisch legitimiert sind. In kaum einem anderen Land der Welt 
              muss das Parlament jedem einzelnen Einsatz zustimmen – in den meisten westlichen Demokratien 
              liegt diese Entscheidung bei der Exekutive.
            </p>
            <p>
              Das <strong>Parlamentsbeteiligungsgesetz</strong> von 2005 regelt die Details: Der Antrag 
              der Bundesregierung muss Einsatzgebiet, Auftrag, Umfang, Dauer und Kosten definieren. 
              Der Bundestag kann zustimmen oder ablehnen – Änderungen am Mandat sind jedoch nicht möglich. 
              Dieses Verfahren ist ein bewusster Kompromiss zwischen militärischer Handlungsfähigkeit 
              und demokratischer Kontrolle. Kritiker bemängeln jedoch, dass die Mandatsbeschlüsse oft 
              vage formuliert sind und den tatsächlichen Charakter eines Einsatzes verschleiern können.
            </p>

            <h2>Arten von Auslandseinsätzen</h2>
            <p>
              Die Bundeswehr unterscheidet verschiedene Einsatztypen, die sich in Risiko, Mandat 
              und Intensität erheblich unterscheiden. Diese Unterscheidung ist nicht nur akademisch, 
              sondern hat weitreichende Konsequenzen für die Ausrüstung, die Einsatzregeln und die 
              politische Debatte:
            </p>
            <ul>
              <li><strong>Humanitäre Hilfe</strong> – Katastrophenhilfe, medizinische Versorgung, Evakuierungen. Die Bundeswehr hat beispielsweise nach dem Erdbeben in der Türkei 2023 humanitäre Hilfe geleistet.</li>
              <li><strong>Beobachtermissionen</strong> – Unbewaffnete Überwachung von Waffenstillständen und Friedensvereinbarungen, oft unter Leitung der OSZE oder UN.</li>
              <li><strong>Friedenserhaltung (Peacekeeping)</strong> – Überwachung vereinbarter Friedensregelungen mit leichter Bewaffnung zur Selbstverteidigung.</li>
              <li><strong>Friedenserzwingung (Peace Enforcement)</strong> – Durchsetzung von Frieden auch gegen den Willen von Konfliktparteien, oft mit robusten Mandaten.</li>
              <li><strong>Kampfeinsätze</strong> – Aktive Beteiligung an Kampfhandlungen, wie im Falle Afghanistans, wo die Bundeswehr zeitweise in intensive Gefechte verwickelt war.</li>
              <li><strong>Ausbildungsmissionen</strong> – Training lokaler Sicherheitskräfte, wie etwa im Irak oder in Mali, um langfristig eigenständige Sicherheitsstrukturen aufzubauen.</li>
            </ul>

            <h2>Warum ist die Debatte so umstritten?</h2>
            <p>
              Die Debatte um Auslandseinsätze berührt fundamentale Fragen der deutschen Identität. 
              Aus der historischen Verantwortung des Zweiten Weltkriegs ergibt sich für viele das Gebot 
              militärischer Zurückhaltung. Gleichzeitig hat spätestens das Versagen der internationalen 
              Gemeinschaft in Srebrenica (1995) gezeigt, dass Wegsehen ebenfalls schwerwiegende moralische 
              Konsequenzen haben kann. Diese Spannung zwischen „Nie wieder Krieg" und „Nie wieder 
              Auschwitz" ist der Kern der deutschen Debatte.
            </p>
            <p>
              Die Debatte ist auch deshalb so schwierig, weil sie verschiedene Ebenen vermischt: 
              völkerrechtliche Fragen, ethische Grundsätze, strategische Interessen, innenpolitische 
              Machtverhältnisse und individuelle Schicksale. Eine fundierte Meinungsbildung erfordert 
              daher die Bereitschaft, sich auf diese Komplexität einzulassen – und einfache Antworten 
              zu hinterfragen. Es gibt in dieser Debatte keine moralisch risikofreie Position: Sowohl 
              Handeln als auch Nicht-Handeln kann zu Leid führen.
            </p>
            <p>
              Hinzu kommt die Frage der demokratischen Legitimation: Können Abgeordnete, die selbst 
              nie in einem Kriegsgebiet waren, verantwortungsvoll über Einsätze entscheiden? Ist die 
              öffentliche Debatte ausreichend informiert, um politischen Druck in die richtige Richtung 
              auszuüben? Und wie geht eine Gesellschaft damit um, wenn die Realität eines Einsatzes 
              nicht den Erwartungen entspricht, die bei der Mandatserteilung bestanden?
            </p>
          </Prose>
        </ContentSection>

        <ModernDivider label="Kapitelübersicht" />

        {/* Chapters */}
        <ContentSection>
          <div className="grid gap-2">
            {chapters.map((ch, i) => (
              <motion.div
                key={ch.path}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  to={ch.path}
                  className="group flex items-center gap-4 rounded-lg px-4 py-3.5 transition-colors hover:bg-muted/50"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-muted text-muted-foreground group-hover:text-accent group-hover:bg-accent/10 transition-colors">
                    <ch.icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-semibold text-foreground font-sans-heading">
                      {ch.label}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-0.5 line-clamp-1">{ch.desc}</p>
                  </div>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/40 shrink-0 transition-all group-hover:text-accent group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </ContentSection>

        <ContentSection className="mt-8">
          <Link
            to="/reflexion"
            className="group flex items-center justify-between rounded-lg border border-accent/20 bg-accent/5 px-5 py-4 transition-all hover:border-accent/40 hover:bg-accent/8"
          >
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <Target className="h-3.5 w-3.5 text-accent" />
                <span className="text-[11px] font-semibold uppercase tracking-wider text-accent font-sans-heading">Interaktiv</span>
              </div>
              <h3 className="text-sm font-semibold text-foreground font-sans-heading">
                Pro & Contra – Reflexionstool
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                25 Fragen zur eigenen Positionsbestimmung
              </p>
            </div>
            <ArrowRight className="h-4 w-4 text-accent shrink-0 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </ContentSection>
      </div>
    </Layout>
  );
};

export default Index;
