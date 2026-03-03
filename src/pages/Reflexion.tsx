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

      <div className="py-12 sm:py-16">
        <ContentSection>
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm mb-2">
              <span className="font-tactical tracking-wider text-muted-foreground text-xs">
                {answeredCount} / {questions.length} Beantwortet
              </span>
              {answeredCount > 0 && (
                <button onClick={reset} className="flex items-center gap-1 text-xs font-tactical tracking-wider text-muted-foreground hover:text-accent transition-colors">
                  <RotateCcw className="h-3.5 w-3.5" /> Zurücksetzen
                </button>
              )}
            </div>
            <div className="h-2 rounded-sm bg-muted overflow-hidden border border-border">
              <motion.div
                className="h-full bg-gradient-to-r from-bw-olive to-bw-gold"
                initial={{ width: 0 }}
                animate={{ width: `${(answeredCount / questions.length) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          {/* Questions */}
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
                    transition={{ delay: i * 0.025 }}
                    className={cn(
                      "rounded border p-4 sm:p-5 transition-all duration-300",
                      answers[q.id] ? "bg-card border-accent/20 bw-glow" : "bg-background border-border hover:border-accent/10"
                    )}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <span className="bw-badge shrink-0 mt-0.5">
                        {String(q.id).padStart(2, '0')}
                      </span>
                      <div>
                        <span className="text-[10px] font-tactical tracking-[0.2em] text-accent">
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
                            "rounded px-3 py-1.5 text-xs font-tactical tracking-wider transition-all duration-200 border",
                            answers[q.id] === opt
                              ? opt === "pro"
                                ? "bg-pro text-pro-foreground border-pro shadow-md"
                                : opt === "contra"
                                ? "bg-contra text-contra-foreground border-contra shadow-md"
                                : "bg-neutral text-neutral-foreground border-neutral shadow-md"
                              : "bg-background text-muted-foreground border-border hover:border-accent/30 hover:text-foreground"
                          )}
                        >
                          {opt === "pro" ? "Stimme zu" : opt === "contra" ? "Stimme nicht zu" : "Unentschieden"}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ))}

                {/* Submit */}
                <motion.div 
                  className="pt-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <Button
                    onClick={() => setShowResults(true)}
                    disabled={!allAnswered}
                    className="w-full bg-bw-olive text-bw-gold hover:bg-bw-olive-light h-12 text-sm font-tactical tracking-wider border border-accent/20"
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
                <div className="rounded border-2 border-accent/30 bg-accent/5 p-6 text-center bw-corner-brackets animate-glow-pulse">
                  <CheckCircle2 className="h-8 w-8 text-accent mx-auto mb-3" />
                  <h2 className="font-tactical text-2xl font-bold text-foreground tracking-wider">
                    {getProfile().label}
                  </h2>
                  <p className="text-muted-foreground mt-2 max-w-lg mx-auto text-sm">
                    {getProfile().desc}
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="rounded border bg-pro/5 border-pro/20 p-4 text-center"
                  >
                    <div className="text-3xl font-tactical font-bold text-pro">{results.pro}</div>
                    <div className="text-[10px] font-tactical tracking-wider text-muted-foreground mt-1">Zustimmung</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="rounded border bg-muted p-4 text-center"
                  >
                    <div className="text-3xl font-tactical font-bold text-neutral">{results.neutral}</div>
                    <div className="text-[10px] font-tactical tracking-wider text-muted-foreground mt-1">Unentschieden</div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="rounded border bg-contra/5 border-contra/20 p-4 text-center"
                  >
                    <div className="text-3xl font-tactical font-bold text-contra">{results.contra}</div>
                    <div className="text-[10px] font-tactical tracking-wider text-muted-foreground mt-1">Ablehnung</div>
                  </motion.div>
                </div>

                {/* Bar */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="rounded border p-4"
                >
                  <div className="text-[10px] font-tactical tracking-wider text-muted-foreground mb-2">Verteilung</div>
                  <div className="flex h-5 rounded-sm overflow-hidden border border-border">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(results.pro / 25) * 100}%` }}
                      transition={{ duration: 0.6, delay: 0.5 }}
                      className="bg-pro" 
                    />
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(results.neutral / 25) * 100}%` }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                      className="bg-neutral" 
                    />
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: `${(results.contra / 25) * 100}%` }}
                      transition={{ duration: 0.6, delay: 0.7 }}
                      className="bg-contra" 
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-tactical tracking-wider text-muted-foreground mt-1.5">
                    <span>Pro ({Math.round((results.pro / 25) * 100)}%)</span>
                    <span>Contra ({Math.round((results.contra / 25) * 100)}%)</span>
                  </div>
                </motion.div>

                {/* Disclaimer */}
                <div className="rounded bg-muted/50 border p-4 text-sm text-muted-foreground">
                  <p>
                    <strong>Hinweis:</strong> Dieses Tool dient der Selbstreflexion und erhebt keinen 
                    wissenschaftlichen Anspruch. Die Einordnung basiert auf Ihren Antworten und soll 
                    als Denkanstoß dienen – nicht als abschließende Bewertung Ihrer Position.
                  </p>
                </div>

                <Button onClick={reset} variant="outline" className="w-full font-tactical tracking-wider">
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
