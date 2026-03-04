import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, ChevronRight, Moon, Sun } from "lucide-react";
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

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDark, setIsDark] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Get current chapter index
  const currentIndex = navItems.findIndex(n => n.path === location.pathname);

  return (
    <div className="min-h-screen bg-background animated-bg">
      {/* Accent top line */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent" />

      {/* Header */}
      <header className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/80 backdrop-blur-xl border-b shadow-sm" 
          : "bg-transparent"
      )}>
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="h-9 w-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <span className="text-accent font-heading font-bold text-lg">B</span>
              </div>
              <div className="absolute -bottom-0.5 -right-0.5 glow-dot scale-75" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-heading text-sm font-semibold tracking-tight text-foreground">
                Bundeswehr
              </span>
              <span className="text-[11px] text-muted-foreground">
                Auslandseinsätze
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-1 lg:flex">
            {navItems.map((item, i) => (
              <motion.div
                key={item.path}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Link
                  to={item.path}
                  className={cn(
                    "relative rounded-lg px-3 py-2 text-sm transition-all duration-200",
                    location.pathname === item.path
                      ? "text-accent font-medium"
                      : "text-muted-foreground hover:text-foreground",
                    item.highlight && location.pathname !== item.path &&
                      "text-accent/80 hover:text-accent"
                  )}
                >
                  {item.label}
                  {location.pathname === item.path && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute inset-0 rounded-lg bg-accent/10 border border-accent/20"
                      transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
            <button
              onClick={() => setIsDark(!isDark)}
              className="ml-2 p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-lg text-muted-foreground hover:text-foreground"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              className="p-2 text-foreground"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden border-t bg-background/95 backdrop-blur-xl lg:hidden"
            >
              <div className="mx-auto max-w-5xl space-y-1 px-4 py-3">
                {navItems.map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                  >
                    <Link
                      to={item.path}
                      onClick={() => setMobileOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-lg px-4 py-3 text-sm transition-colors",
                        location.pathname === item.path
                          ? "bg-accent/10 text-accent font-medium"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted"
                      )}
                    >
                      {item.label}
                      <ChevronRight className="h-4 w-4 opacity-40" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      {/* Main */}
      <main className="relative z-10">
        <motion.div
          key={location.pathname}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t mt-24">
        <div className="h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent" />
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
          <div className="flex flex-col items-center gap-6 text-center">
            <div className="h-10 w-10 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center">
              <span className="text-accent font-heading font-bold text-xl">B</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-md leading-relaxed">
              Eine strukturierte, ausgewogene Analyse zur Bewertung von Auslandseinsätzen 
              der Bundeswehr – aus historischer, politischer und ethischer Perspektive.
            </p>
            <div className="modern-divider w-48">
              <div className="glow-dot scale-50" />
            </div>
            <p className="text-xs text-muted-foreground/50 font-mono">
              MADE BY BEN & MORITZ
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
