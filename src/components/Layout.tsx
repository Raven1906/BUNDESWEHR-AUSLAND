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
  { path: "/reflexion", label: "Reflexion" },
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

  return (
    <div className="min-h-screen bg-background animated-bg">
      {/* Header */}
      <header className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled 
          ? "bg-background/90 backdrop-blur-lg border-b" 
          : "bg-transparent"
      )}>
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4 sm:px-6">
          <Link to="/" className="flex items-center gap-2.5 group">
            <span className="font-sans-heading text-sm font-bold tracking-tight text-foreground">
              Bundeswehr
            </span>
            <span className="text-border">|</span>
            <span className="text-xs text-muted-foreground font-medium">
              Auslandseinsätze
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden items-center gap-0.5 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "relative px-3 py-1.5 text-[13px] transition-colors duration-150 rounded-md",
                  location.pathname === item.path
                    ? "text-foreground font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.label}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-3 right-3 h-[2px] bg-accent rounded-full"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                  />
                )}
              </Link>
            ))}
            <div className="ml-3 pl-3 border-l">
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-1.5 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              >
                {isDark ? <Sun className="h-3.5 w-3.5" /> : <Moon className="h-3.5 w-3.5" />}
              </button>
            </div>
          </nav>

          {/* Mobile */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-md text-muted-foreground hover:text-foreground"
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
              className="overflow-hidden border-t bg-background lg:hidden"
            >
              <div className="mx-auto max-w-4xl space-y-0.5 px-4 py-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center justify-between rounded-md px-3 py-2.5 text-sm transition-colors",
                      location.pathname === item.path
                        ? "text-foreground font-medium bg-muted"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {item.label}
                    <ChevronRight className="h-3.5 w-3.5 opacity-30" />
                  </Link>
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t mt-24">
        <div className="mx-auto max-w-4xl px-4 py-12 sm:px-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Auslandseinsätze der Bundeswehr — Analyse & Reflexion
            </p>
            <p className="text-xs text-muted-foreground/60 font-mono-code">
              Ben & Moritz
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
