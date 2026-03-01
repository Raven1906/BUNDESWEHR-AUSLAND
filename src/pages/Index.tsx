import Layout from "@/components/Layout";
import { PageHeader, ContentSection, Prose, InfoBox } from "@/components/ContentSection";
import { Link } from "react-router-dom";
import { ArrowRight, BookOpen, Scale, History, MessageSquare } from "lucide-react";

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

            <h2>Warum ist die Debatte so umstritten?</h2>
            <p>
              Die Debatte um Auslandseinsätze berührt fundamentale Fragen der deutschen Identität. 
              Aus der historischen Verantwortung des Zweiten Weltkriegs ergibt sich für viele das Gebot 
              militärischer Zurückhaltung. Gleichzeitig hat spätestens das Versagen der internationalen 
              Gemeinschaft in Srebrenica (1995) gezeigt, dass Wegsehen ebenfalls schwerwiegende moralische 
              Konsequenzen haben kann.
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

        {/* Chapter overview */}
        <ContentSection className="mt-12">
          <h2 className="font-serif text-2xl font-semibold text-foreground mb-6">
            Kapitelübersicht
          </h2>
          <div className="grid gap-3">
            {chapters.map((ch) => (
              <Link
                key={ch.path}
                to={ch.path}
                className="group flex items-start gap-4 rounded-lg border bg-card p-4 transition-colors hover:bg-muted"
              >
                <ch.icon className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                <div>
                  <h3 className="font-serif font-medium text-foreground group-hover:text-accent transition-colors">
                    {ch.label}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-0.5">{ch.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </ContentSection>

        <ContentSection className="mt-10">
          <Link
            to="/reflexion"
            className="group flex items-center justify-between rounded-lg border-2 border-accent/30 bg-accent/5 p-5 transition-colors hover:border-accent/60"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-accent">
                Interaktiv
              </span>
              <h3 className="font-serif text-xl font-semibold text-foreground mt-1">
                Pro & Contra – Reflexionstool
              </h3>
              <p className="text-sm text-muted-foreground mt-1">
                25 Fragen zur eigenen Positionsbestimmung mit automatischer Auswertung
              </p>
            </div>
            <ArrowRight className="h-5 w-5 text-accent shrink-0 transition-transform group-hover:translate-x-1" />
          </Link>
        </ContentSection>
      </div>
    </Layout>
  );
};

export default Index;
