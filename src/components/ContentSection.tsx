import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ContentSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const PageHeader = ({
  title,
  subtitle,
  chapter,
}: {
  title: string;
  subtitle?: string;
  chapter?: string;
}) => (
  <div className="relative border-b bg-card bw-grid-bg overflow-hidden">
    {/* Decorative military stripe */}
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-bw-olive via-bw-gold to-bw-olive" />
    
    {/* Subtle diagonal pattern overlay */}
    <div className="absolute inset-0 opacity-[0.02]" style={{
      backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
    }} />

    <div className="mx-auto max-w-3xl px-4 py-14 sm:px-6 sm:py-20 relative">
      {chapter && (
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-4 inline-flex items-center gap-2 text-xs font-tactical tracking-[0.3em] text-accent"
        >
          <span className="h-px w-8 bg-accent" />
          {chapter}
        </motion.span>
      )}
      <motion.h1 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-serif text-4xl font-bold leading-tight text-foreground sm:text-5xl lg:text-6xl text-balance bw-text-glow"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-5 text-lg leading-relaxed text-muted-foreground max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}
      
      {/* Bottom decorative bracket */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8 flex items-center gap-2"
      >
        <div className="h-px flex-1 bg-gradient-to-r from-accent/50 to-transparent" />
        <div className="h-2 w-2 rotate-45 border border-accent/50" />
      </motion.div>
    </div>
  </div>
);

export const ContentSection = ({ children, className }: ContentSectionProps) => (
  <motion.section
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5 }}
    className={cn("mx-auto max-w-3xl px-4 sm:px-6", className)}
  >
    {children}
  </motion.section>
);

export const Prose = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div
    className={cn(
      "prose prose-lg max-w-none",
      "text-foreground/90 leading-[1.8]",
      "[&_h2]:font-tactical [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-14 [&_h2]:mb-4 [&_h2]:tracking-[0.12em]",
      "[&_h2]:border-l-[3px] [&_h2]:border-accent [&_h2]:pl-4",
      "[&_h3]:font-tactical [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:tracking-[0.1em]",
      "[&_p]:mb-4 [&_p]:text-base [&_p]:sm:text-[1.05rem]",
      "[&_blockquote]:border-l-[3px] [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_blockquote]:bg-card [&_blockquote]:py-3 [&_blockquote]:pr-4 [&_blockquote]:rounded-r",
      "[&_ul]:list-none [&_ul]:pl-0 [&_ul]:space-y-2",
      "[&_li]:relative [&_li]:pl-6 [&_li]:before:content-['▸'] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-accent [&_li]:before:font-bold",
      "[&_strong]:text-foreground [&_strong]:font-semibold",
      className
    )}
  >
    {children}
  </div>
);

export const InfoBox = ({
  children,
  variant = "default",
  title,
}: {
  children: React.ReactNode;
  variant?: "default" | "pro" | "contra" | "warning";
  title?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className={cn(
      "my-8 rounded border p-5 sm:p-6 bw-corner-brackets",
      variant === "default" && "border-border bg-card",
      variant === "pro" && "border-pro/40 bg-pro/5",
      variant === "contra" && "border-contra/40 bg-contra/5",
      variant === "warning" && "border-accent/40 bg-accent/5"
    )}
  >
    {title && (
      <h4
        className={cn(
          "mb-2 font-tactical text-sm font-semibold tracking-[0.15em]",
          variant === "pro" && "text-pro",
          variant === "contra" && "text-contra",
          variant === "warning" && "text-accent",
          variant === "default" && "text-muted-foreground"
        )}
      >
        {title}
      </h4>
    )}
    <div className="text-sm leading-relaxed text-foreground/80">{children}</div>
  </motion.div>
);

export const StatCard = ({ value, label, suffix }: { value: string; label: string; suffix?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 15 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="bw-stat"
  >
    <div className="text-3xl font-tactical font-bold text-accent">
      {value}{suffix && <span className="text-lg text-muted-foreground">{suffix}</span>}
    </div>
    <div className="text-xs text-muted-foreground mt-1 font-tactical tracking-wider">{label}</div>
  </motion.div>
);

export const TimelineItem = ({ year, title, description }: { year: string; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="relative pl-8 pb-8 border-l-2 border-accent/30 last:pb-0"
  >
    <div className="absolute left-[-7px] top-1 h-3 w-3 rounded-full bg-accent border-2 border-background" />
    <span className="font-tactical text-sm text-accent tracking-wider">{year}</span>
    <h4 className="font-tactical text-base font-semibold text-foreground mt-0.5 tracking-wide">{title}</h4>
    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{description}</p>
  </motion.div>
);

export const MilitaryDivider = ({ label }: { label?: string }) => (
  <div className="my-10 bw-divider text-xs font-tactical tracking-[0.2em] text-muted-foreground">
    {label && <span>{label}</span>}
  </div>
);
