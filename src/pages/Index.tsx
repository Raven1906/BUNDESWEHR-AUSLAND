import Layout from "@/components/Layout";
import { PageHeader, ContentSection, Prose, InfoBox, StatCard, ModernDivider, QuoteBlock } from "@/components/ContentSection";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Scale, History, MessageSquare, Target, TrendingUp, Shield } from "lucide-react";
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
      <div className="border-b border-border/50">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <StatCard value="30+" label="Jahre Einsatzgeschichte" />
            <StatCard value="59" label="Gefallene in Afghanistan" />
            <StatCard value="12,5" label="Mrd. € Afghanistan-Kosten" suffix="Mrd." />
            <StatCard value="100" label="Mrd. € Sondervermögen" suffix="Mrd." />
          </div>
        </div>
      </div>

      <div className="py-14 sm:py-20">
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
          <div className="grid gap-3">
            {chapters.map((ch, i) => (
              <motion.div
                key={ch.path}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <Link
                  to={ch.path}
                  className="group flex items-start gap-4 rounded-xl p-5 glass-card-hover"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 border border-accent/20 text-accent group-hover:bg-accent/20 transition-colors">
                    <ch.icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                      {ch.label}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{ch.desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 mt-3 transition-all group-hover:text-accent group-hover:translate-x-1" />
                </Link>
              </motion.div>
            ))}
          </div>
        </ContentSection>

        <ContentSection className="mt-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Link
              to="/reflexion"
              className="group relative flex items-center justify-between rounded-xl border border-accent/30 bg-accent/5 p-7 transition-all duration-300 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <span className="chapter-badge text-[11px]">
                  <Target className="h-3 w-3" />
                  Interaktiv
                </span>
                <h3 className="font-heading text-xl font-bold text-foreground mt-3">
                  Pro & Contra – Reflexionstool
                </h3>
                <p className="text-sm text-muted-foreground mt-1.5">
                  25 Fragen zur eigenen Positionsbestimmung mit automatischer Auswertung
                </p>
              </div>
              <ArrowRight className="h-5 w-5 text-accent shrink-0 transition-transform group-hover:translate-x-1 relative" />
            </Link>
          </motion.div>
        </ContentSection>
      </div>
    </Layout>
  );
};

export default Index;
