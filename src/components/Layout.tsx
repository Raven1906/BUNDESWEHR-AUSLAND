import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Shield } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "Einführung" },
  { path: "/geschichte", label: "Geschichte" },
  { path: "/pro", label: "Pro" },
  { path: "/contra", label: "Contra" },
  { path: "/ethik", label: "Ethik" },
  { path: "/folgen", label: "Folgen" },
  { path: "/fazit", label: "Fazit" },
  { path: "/reflexion", label: "Reflexion", highlight: true },
];

const IronCross = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 100 100" className={className} fill="currentColor">
    <polygon points="35,0 65,0 65,35 100,35 100,65 65,65 65,100 35,100 35,65 0,65 0,35 35,35" />
    <polygon points="38,3 62,3 62,38 97,38 97,62 62,62 62,97 38,97 38,62 3,62 3,38 38,38" fill="hsl(var(--background))" />
    <polygon points="40,5 60,5 60,40 95,40 95,60 60,60 60,95 40,95 40,60 5,60 5,40 40,40" fill="currentColor" />
  </svg>
);

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background bw-grid-bg">
      {/* Top military stripe */}
      <div className="h-1 bg-gradient-to-r from-bw-olive via-bw-gold to-bw-olive" />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5 text-foreground group">
            <IronCross className="h-6 w-6 text-accent transition-transform group-hover:scale-110" />
            <div className="flex flex-col leading-none">
              <span className="font-tactical text-sm font-semibold tracking-[0.15em]">
                Bundeswehr
              </span>
              <span className="text-[9px] font-tactical tracking-[0.2em] text-muted-foreground">
                Auslandseinsätze
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={item.path}
                  className={cn(
                    "rounded px-3 py-1.5 text-xs font-tactical tracking-wider transition-all duration-200",
                    location.pathname === item.path
                      ? "bg-bw-olive text-bw-gold shadow-sm"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted",
                    item.highlight && location.pathname !== item.path &&
                      "text-accent hover:text-accent animate-border-pulse border border-accent/20"
                  )}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Mobile toggle */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menü"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t lg:hidden"
            >
              <div className="mx-auto max-w-5xl space-y-1 px-4 py-3">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "block rounded px-3 py-2 text-sm font-tactical tracking-wider transition-colors",
                        location.pathname === item.path
                          ? "bg-bw-olive text-bw-gold"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted",
                        item.highlight && location.pathname !== item.path &&
                          "text-accent hover:text-accent"
                      )}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main content */}
      <main>
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-20 bg-card/50">
        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
        <div className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <div className="flex flex-col items-center gap-4 text-center">
            <IronCross className="h-8 w-8 text-muted-foreground/40" />
            <p className="text-sm text-muted-foreground max-w-lg">
              Meine strukturierte, ausgewogene Analyse zur Bewertung von Auslandseinsätzen 
              der Bundeswehr.
            </p>
            <div className="bw-divider w-48">
              <Shield className="h-3 w-3 text-muted-foreground/40" />
            </div>
            <p className="text-[10px] font-tactical tracking-[0.2em] text-muted-foreground/50">
              MADE BY BEN/MORITZ 
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
