import Layout from "@/components/Layout";
import { PageHeader, ContentSection, Prose, InfoBox, StatCard, MilitaryDivider } from "@/components/ContentSection";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Scale, History, MessageSquare, Target, Users } from "lucide-react";
import { motion } from "framer-motion";

const chapters = [
  { path: "/geschichte", icon: History, label: "Historischer Kontext", desc: "Von 1990 bis heute – wie sich Deutschlands Rolle wandelte" },
  { path: "/pro", icon: ArrowRight, label: "Pro-Argumente", desc: "Internationale Verantwortung, Stabilisierung, Bündnisfähigkeit" },
  { path: "/contra", icon: ArrowRight, label: "Contra-Argumente", desc: "Risiken, Kosten, moralische Dilemmata" },
  { path: "/ethik", icon: Scale, label: "Ethische Bewertung", desc: "Zwischen ‚Nie wieder Krieg' und ‚Nie wieder wegsehen'" },
  { path: "/folgen", icon: BookOpen, label: "Politische Folgen", desc: "Innenpolitik, öffentliche Meinung, Identität" },
  { path: "/fazit", icon: MessageSquare, label: "Fazit", desc: "Offene Fragen und Reflexionsanstöße" },
];

const Index = () => {
  return (
    <Layout>
      <PageHeader
        title="Auslandseinsätze der Bundeswehr"
        subtitle="Eine strukturierte, ausgewogene Analyse aus historischer, politischer und ethischer Perspektive. Keine Parteinahme – nur Argumente."
        chapter="Analyse & Reflexion"
      />

      {/* Stats bar */}
      <div className="border-b bg-card/50">
        <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <StatCard value="30+" label="Jahre Einsatzgeschichte" />
            <StatCard value="59" label="Gefallene in Afghanistan" />
            <StatCard value="12,5" label="Mrd. € Afghanistan-Kosten" suffix=" Mrd." />
            <StatCard value="100" label="Mrd. € Sondervermögen" suffix=" Mrd." />
          </div>
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
              intensiver politischer und gesellschaftlicher Debatten.
            </p>
            <p>
              Die Bundeswehr war und ist in zahlreichen Einsatzgebieten aktiv: vom Balkan über 
              Afghanistan und Mali bis hin zum Horn von Afrika. Jeder Einsatz hat seine eigene 
              Geschichte, seine eigenen Herausforderungen und seine eigenen Lehren. Die Bandbreite 
              reicht von unbewaffneter Beobachtung bis zu intensiven Gefechten – und die Grenzen 
              zwischen diesen Kategorien verschwimmen in der Praxis häufig.
            </p>

            <h2>Rechtliche Grundlage</h2>
            <p>
              Auslandseinsätze der Bundeswehr unterliegen strengen rechtlichen Rahmenbedingungen. 
              Das <strong>Grundgesetz</strong> legt in Artikel 87a fest, dass der Bund Streitkräfte zur 
              Verteidigung aufstellt. Das <strong>Bundesverfassungsgericht</strong> hat 1994 in einem 
              wegweisenden Urteil entschieden, dass Auslandseinsätze im Rahmen kollektiver 
              Sicherheitssysteme – wie NATO oder UN – zulässig sind.
            </p>
            <p>
              Entscheidend ist dabei der <strong>Parlamentsvorbehalt</strong>: Jeder bewaffnete Einsatz 
              der Bundeswehr bedarf der vorherigen Zustimmung des Deutschen Bundestages. Diese sogenannte 
              „Parlamentsarmee" ist ein weltweit nahezu einzigartiges Konzept und stellt sicher, dass 
              militärische Entscheidungen demokratisch legitimiert sind.
            </p>
            <p>
              Das <strong>Parlamentsbeteiligungsgesetz</strong> von 2005 regelt die Details: Der Antrag 
              der Bundesregierung muss Einsatzgebiet, Auftrag, Umfang, Dauer und Kosten definieren. 
              Der Bundestag kann zustimmen oder ablehnen – Änderungen am Mandat sind jedoch nicht möglich. 
              Dieses Verfahren ist ein bewusster Kompromiss zwischen militärischer Handlungsfähigkeit 
              und demokratischer Kontrolle.
            </p>

            <h2>Arten von Auslandseinsätzen</h2>
            <p>
              Die Bundeswehr unterscheidet verschiedene Einsatztypen, die sich in Risiko, Mandat 
              und Intensität erheblich unterscheiden:
            </p>
            <ul>
              <li><strong>Humanitäre Hilfe</strong> – Katastrophenhilfe, medizinische Versorgung, Evakuierungen</li>
              <li><strong>Beobachtermissionen</strong> – Unbewaffnete Überwachung von Waffenstillständen</li>
              <li><strong>Friedenserhaltung (Peacekeeping)</strong> – Überwachung vereinbarter Friedensregelungen</li>
              <li><strong>Friedenserzwingung (Peace Enforcement)</strong> – Durchsetzung von Frieden auch gegen den Willen von Konfliktparteien</li>
              <li><strong>Kampfeinsätze</strong> – Aktive Beteiligung an Kampfhandlungen</li>
              <li><strong>Ausbildungsmissionen</strong> – Training lokaler Sicherheitskräfte</li>
            </ul>

            <h2>Warum ist die Debatte so umstritten?</h2>
            <p>
              Die Debatte um Auslandseinsätze berührt fundamentale Fragen der deutschen Identität. 
              Aus der historischen Verantwortung des Zweiten Weltkriegs ergibt sich für viele das Gebot 
              militärischer Zurückhaltung. Gleichzeitig hat spätestens das Versagen der internationalen 
              Gemeinschaft in Srebrenica (1995) gezeigt, dass Wegsehen ebenfalls schwerwiegende moralische 
              Konsequenzen haben kann.
            </p>
            <p>
              Die Debatte ist auch deshalb so schwierig, weil sie verschiedene Ebenen vermischt: 
              völkerrechtliche Fragen, ethische Grundsätze, strategische Interessen, innenpolitische 
              Machtverhältnisse und individuelle Schicksale. Eine fundierte Meinungsbildung erfordert 
              daher die Bereitschaft, sich auf diese Komplexität einzulassen – und einfache Antworten 
              zu hinterfragen.
            </p>
          </Prose>
        </ContentSection>

        <ContentSection className="mt-12">
          <InfoBox variant="warning" title="Ziel dieser Analyse">
            <p>
              Diese Analyse verfolgt keinen aktivistischen Zweck. Sie bietet eine strukturierte, 
              ausgewogene Argumentationsbasis – damit Sie sich auf Grundlage fundierter Informationen 
              eine eigene Meinung bilden können. Jedes Argument wird erklärt, mit Beispielen belegt 
              und durch mögliche Gegenargumente eingeordnet.
            </p>
          </InfoBox>
        </ContentSection>

        <MilitaryDivider label="Kapitelübersicht" />

        {/* Chapter overview */}
        <ContentSection>
          <div className="grid gap-3">
            {chapters.map((ch, i) => (
              <motion.div
                key={ch.path}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <Link
                  to={ch.path}
                  className="group flex items-start gap-4 rounded border bg-card p-4 transition-all duration-300 hover:bg-muted hover:border-accent/30 hover:shadow-md bw-corner-brackets"
                >
                  <div className="bw-badge mt-0.5 shrink-0">{String(i + 1).padStart(2, '0')}</div>
                  <div className="flex-1">
                    <h3 className="font-tactical text-sm font-medium text-foreground group-hover:text-accent transition-colors tracking-wider">
                      {ch.label}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-0.5">{ch.desc}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground shrink-0 mt-1 transition-all group-hover:text-accent group-hover:translate-x-1" />
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
              className="group relative flex items-center justify-between rounded border-2 border-accent/30 bg-accent/5 p-6 transition-all duration-300 hover:border-accent/60 hover:shadow-lg animate-glow-pulse overflow-hidden"
            >
              {/* Animated background pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, currentColor 20px, currentColor 21px)`,
              }} />
              
              <div className="relative">
                <span className="text-[10px] font-tactical tracking-[0.3em] text-accent flex items-center gap-2">
                  <Target className="h-3 w-3" />
                  Interaktiv
                </span>
                <h3 className="font-tactical text-xl font-semibold text-foreground mt-1.5 tracking-wider">
                  Pro & Contra – Reflexionstool
                </h3>
                <p className="text-sm text-muted-foreground mt-1">
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
