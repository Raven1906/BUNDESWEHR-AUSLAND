import Layout from "@/components/Layout";
import { PageHeader, ContentSection } from "@/components/ContentSection";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, RotateCcw, CheckCircle2, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Question {
  id: number;
  text: string;
  category: string;
}

const questions: Question[] = [
  { id: 1, text: "Deutschland hat als wirtschaftsstarkes Land die Pflicht, sich an internationalen Militäreinsätzen zu beteiligen.", category: "Verantwortung" },
  { id: 2, text: "Militärische Einsätze können Krisenregionen nachhaltig stabilisieren.", category: "Wirksamkeit" },
  { id: 3, text: "Die NATO-Mitgliedschaft verpflichtet Deutschland zur aktiven militärischen Solidarität.", category: "Bündnis" },
  { id: 4, text: "Terrorismusbekämpfung erfordert auch militärische Mittel im Ausland.", category: "Sicherheit" },
  { id: 5, text: "Die internationale Gemeinschaft hat die Pflicht, Zivilisten vor Völkermord zu schützen – notfalls militärisch.", category: "Schutzverantwortung" },
  { id: 6, text: "Frühzeitige militärische Intervention kann größere Konflikte verhindern.", category: "Prävention" },
  { id: 7, text: "Militärisches Engagement stärkt Deutschlands politischen Einfluss in der Welt.", category: "Einfluss" },
  { id: 8, text: "Das Risiko für das Leben deutscher Soldaten wiegt schwerer als die Ziele der meisten Einsätze.", category: "Risiko" },
  { id: 9, text: "Die meisten Auslandseinsätze der letzten 30 Jahre haben ihre Ziele nicht erreicht.", category: "Bilanz" },
  { id: 10, text: "Die finanziellen Mittel für Militäreinsätze wären in Bildung und Entwicklungshilfe besser investiert.", category: "Kosten" },
  { id: 11, text: "Deutschland wird in internationalen Einsätzen zu oft von den Interessen der USA geleitet.", category: "Abhängigkeit" },
  { id: 12, text: "Zivile Opfer sind eine unvermeidbare und inakzeptable Folge militärischer Interventionen.", category: "Moral" },
  { id: 13, text: "Militärische Interventionen verletzen die Souveränität anderer Staaten.", category: "Völkerrecht" },
  { id: 14, text: "Interventionen haben häufig zur langfristigen Destabilisierung beigetragen.", category: "Folgen" },
  { id: 15, text: "Diplomatie und Entwicklungshilfe sind grundsätzlich wirksamer als militärische Mittel.", category: "Alternativen" },
  { id: 16, text: "Ein klares UN-Mandat macht einen Auslandseinsatz grundsätzlich legitim.", category: "Legitimation" },
  { id: 17, text: "Der Parlamentsvorbehalt ist eine wichtige demokratische Kontrolle für Auslandseinsätze.", category: "Demokratie" },
  { id: 18, text: "Die Bundeswehr ist aktuell nicht ausreichend ausgerüstet für internationale Einsätze.", category: "Fähigkeiten" },
  { id: 19, text: "Europäische Sicherheit erfordert eine stärkere militärische Rolle Deutschlands.", category: "Europa" },
  { id: 20, text: "Die psychischen Folgen für Soldaten werden in der politischen Debatte nicht ausreichend berücksichtigt.", category: "Fürsorge" },
  { id: 21, text: "Deutschland sollte sich auf Verteidigung beschränken und keine Kampfeinsätze im Ausland durchführen.", category: "Grundsatz" },
  { id: 22, text: "Humanitäre Hilfseinsätze der Bundeswehr sind grundsätzlich zu befürworten.", category: "Humanitär" },
  { id: 23, text: "Die Zeitenwende 2022 hat die Notwendigkeit einer stärkeren Bundeswehr bestätigt.", category: "Zeitenwende" },
  { id: 24, text: "Die Selektivität internationaler Interventionen untergräbt deren moralische Glaubwürdigkeit.", category: "Konsistenz" },
  { id: 25, text: "Jeder Auslandseinsatz sollte einzeln bewertet werden – pauschale Zustimmung oder Ablehnung ist falsch.", category: "Differenzierung" },
];

type Answer = "pro" | "contra" | "neutral";

const Reflexion = () => {
  const [answers, setAnswers] = useState<Record<number, Answer>>({});
  const [showResults, setShowResults] = useState(false);

  const setAnswer = (id: number, answer: Answer) => {
    setAnswers((prev) => ({ ...prev, [id]: answer }));
  };

  const answeredCount = Object.keys(answers).length;
  const allAnswered = answeredCount === questions.length;

  const results = useMemo(() => {
    const pro = Object.values(answers).filter((a) => a === "pro").length;
    const contra = Object.values(answers).filter((a) => a === "contra").length;
    const neutral = Object.values(answers).filter((a) => a === "neutral").length;
    return { pro, contra, neutral };
  }, [answers]);

  const getProfile = () => {
    const { pro, contra } = results;
    const ratio = pro / (pro + contra || 1);
    if (ratio > 0.7) return { label: "Interventionsbefürworter:in", desc: "Sie sehen in militärischen Einsätzen ein wichtiges Instrument internationaler Verantwortung und Sicherheitspolitik." };
    if (ratio > 0.55) return { label: "Tendenz: Pro Einsätze (mit Vorbehalten)", desc: "Sie befürworten Auslandseinsätze unter bestimmten Bedingungen, sehen aber auch berechtigte Einwände." };
    if (ratio > 0.45) return { label: "Ausgewogene Position", desc: "Sie sehen sowohl die Notwendigkeit als auch die Risiken militärischer Einsätze und differenzieren stark nach Einzelfall." };
    if (ratio > 0.3) return { label: "Tendenz: Einsatz-skeptisch", desc: "Sie stehen Auslandseinsätzen eher kritisch gegenüber, erkennen aber an, dass es Ausnahmen geben kann." };
    return { label: "Grundsätzlich gegen Auslandseinsätze", desc: "Sie lehnen militärische Interventionen grundsätzlich ab und bevorzugen diplomatische und zivile Mittel." };
  };

  const reset = () => {
    setAnswers({});
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Layout>
      <PageHeader
        chapter="Interaktiv"
        title="Pro & Contra – Reflexionstool"
        subtitle="25 Fragen zur eigenen Positionsbestimmung. Keine richtigen oder falschen Antworten – nur Ihre persönliche Einschätzung."
      />

      <div className="py-14 sm:py-20">
        <ContentSection>
          {/* Progress */}
          <div className="mb-10">
            <div className="flex items-center justify-between text-sm mb-3">
              <span className="text-muted-foreground text-sm font-medium">
                {answeredCount} / {questions.length} beantwortet
              </span>
              {answeredCount > 0 && (
                <button onClick={reset} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-accent transition-colors">
                  <RotateCcw className="h-3.5 w-3.5" /> Zurücksetzen
                </button>
              )}
            </div>
            <div className="h-2 rounded-full bg-muted overflow-hidden">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-accent to-accent/70"
                initial={{ width: 0 }}
                animate={{ width: `${(answeredCount / questions.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {!showResults ? (
              <motion.div
                key="questions"
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-4"
              >
                {questions.map((q, i) => (
                  <motion.div
                    key={q.id}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.02 }}
                    className={cn(
                      "rounded-xl border p-5 transition-all duration-300",
                      answers[q.id] ? "glass-card border-accent/20" : "bg-background border-border hover:border-accent/10"
                    )}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent text-xs font-heading font-bold mt-0.5">
                        {String(q.id).padStart(2, '0')}
                      </span>
                      <div>
                        <span className="text-[11px] font-mono text-accent/70">
                          {q.category}
                        </span>
                        <p className="text-sm sm:text-base text-foreground mt-0.5 leading-relaxed">
                          {q.text}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 ml-10">
                      {(["pro", "neutral", "contra"] as Answer[]).map((opt) => (
                        <button
                          key={opt}
                          onClick={() => setAnswer(q.id, opt)}
                          className={cn(
                            "rounded-lg px-4 py-2 text-xs font-medium transition-all duration-200 border",
                            answers[q.id] === opt
                              ? opt === "pro"
                                ? "bg-pro/10 text-pro border-pro/30"
                                : opt === "contra"
                                ? "bg-contra/10 text-contra border-contra/30"
                                : "bg-neutral/10 text-neutral border-neutral/30"
                              : "bg-background text-muted-foreground border-border hover:border-accent/20 hover:text-foreground"
                          )}
                        >
                          {opt === "pro" ? "Stimme zu" : opt === "contra" ? "Stimme nicht zu" : "Unentschieden"}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ))}

                <motion.div className="pt-6">
                  <Button
                    onClick={() => setShowResults(true)}
                    disabled={!allAnswered}
                    className="w-full h-12 rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 font-heading text-sm tracking-wide"
                  >
                    {allAnswered ? (
                      <>
                        <Target className="mr-2 h-4 w-4" />
                        Auswertung anzeigen
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    ) : (
                      `Noch ${questions.length - answeredCount} Fragen offen`
                    )}
                  </Button>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="results"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-6"
              >
                {/* Profile */}
                <div className="rounded-xl border-2 border-accent/30 bg-accent/5 p-8 text-center animate-glow">
                  <CheckCircle2 className="h-10 w-10 text-accent mx-auto mb-4" />
                  <h2 className="font-heading text-2xl font-bold text-foreground">
                    {getProfile().label}
                  </h2>
                  <p className="text-muted-foreground mt-3 max-w-lg mx-auto text-sm leading-relaxed">
                    {getProfile().desc}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="rounded-xl border bg-pro/5 border-pro/20 p-5 text-center">
                    <div className="text-3xl font-heading font-bold text-pro">{results.pro}</div>
                    <div className="text-xs text-muted-foreground mt-2 font-medium">Zustimmung</div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
                    className="rounded-xl border bg-muted p-5 text-center">
                    <div className="text-3xl font-heading font-bold text-neutral">{results.neutral}</div>
                    <div className="text-xs text-muted-foreground mt-2 font-medium">Unentschieden</div>
                  </motion.div>
                  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
                    className="rounded-xl border bg-contra/5 border-contra/20 p-5 text-center">
                    <div className="text-3xl font-heading font-bold text-contra">{results.contra}</div>
                    <div className="text-xs text-muted-foreground mt-2 font-medium">Ablehnung</div>
                  </motion.div>
                </div>

                {/* Bar */}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}
                  className="rounded-xl border p-5 glass-card">
                  <div className="text-xs text-muted-foreground mb-3 font-medium">Verteilung</div>
                  <div className="flex h-5 rounded-full overflow-hidden bg-muted">
                    <motion.div initial={{ width: 0 }} animate={{ width: `${(results.pro / 25) * 100}%` }}
                      transition={{ duration: 0.6, delay: 0.5 }} className="bg-pro rounded-l-full" />
                    <motion.div initial={{ width: 0 }} animate={{ width: `${(results.neutral / 25) * 100}%` }}
                      transition={{ duration: 0.6, delay: 0.6 }} className="bg-neutral" />
                    <motion.div initial={{ width: 0 }} animate={{ width: `${(results.contra / 25) * 100}%` }}
                      transition={{ duration: 0.6, delay: 0.7 }} className="bg-contra rounded-r-full" />
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>Pro ({Math.round((results.pro / 25) * 100)}%)</span>
                    <span>Contra ({Math.round((results.contra / 25) * 100)}%)</span>
                  </div>
                </motion.div>

                {/* Disclaimer */}
                <div className="rounded-xl glass-card p-5 text-sm text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Hinweis:</strong> Dieses Tool dient der Selbstreflexion und erhebt keinen 
                    wissenschaftlichen Anspruch. Die Einordnung basiert auf Ihren Antworten und soll 
                    als Denkanstoß dienen – nicht als abschließende Bewertung Ihrer Position.
                  </p>
                </div>

                <Button onClick={reset} variant="outline" className="w-full rounded-xl h-12 font-heading tracking-wide">
                  <RotateCcw className="mr-2 h-4 w-4" /> Nochmal machen
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </ContentSection>
      </div>
    </Layout>
  );
};

export default Reflexion;
