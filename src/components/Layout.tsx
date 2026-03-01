import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X, Crosshair } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { path: "/", label: "Einführung" },
  { path: "/geschichte", label: "Geschichte" },
  { path: "/pro", label: "Pro-Argumente" },
  { path: "/contra", label: "Contra-Argumente" },
  { path: "/ethik", label: "Ethik" },
  { path: "/folgen", label: "Folgen" },
  { path: "/fazit", label: "Fazit" },
  { path: "/reflexion", label: "Reflexion", highlight: true },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2 text-foreground">
            <Crosshair className="h-5 w-5 text-accent" />
            <span className="font-serif text-lg font-semibold tracking-tight">
              Auslandseinsätze
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm font-medium transition-colors",
                  location.pathname === item.path
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                  item.highlight && location.pathname !== item.path &&
                    "text-accent hover:text-accent"
                )}
              >
                {item.label}
              </Link>
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
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block rounded-md px-3 py-2 text-sm font-medium transition-colors",
                      location.pathname === item.path
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted",
                      item.highlight && location.pathname !== item.path &&
                        "text-accent hover:text-accent"
                    )}
                  >
                    {item.label}
                  </Link>
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
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="border-t mt-20">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
          <div className="flex flex-col items-center gap-3 text-center">
            <Crosshair className="h-5 w-5 text-muted-foreground" />
            <p className="text-sm text-muted-foreground max-w-lg">
              Eine strukturierte, ausgewogene Analyse zur Bewertung von Auslandseinsätzen 
              der Bundeswehr – aus historischer, politischer und ethischer Perspektive.
            </p>
            <p className="text-xs text-muted-foreground/60 mt-2">
              Keine politische Positionierung. Keine Parteinahme. Nur Argumente.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
