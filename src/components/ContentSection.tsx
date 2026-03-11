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
  <div className="mx-auto max-w-3xl px-4 pt-16 pb-12 sm:px-6 sm:pt-24 sm:pb-16">
    {chapter && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="chapter-badge mb-5 inline-flex">{chapter}</span>
      </motion.div>
    )}
    <motion.h1
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.05 }}
      className="text-3xl font-bold leading-[1.15] text-foreground sm:text-4xl lg:text-5xl text-balance"
    >
      {title}
    </motion.h1>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.15 }}
        className="mt-5 text-base leading-relaxed text-muted-foreground max-w-2xl sm:text-lg"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="mt-8 h-px bg-border origin-left"
    />
  </div>
);

export const ContentSection = ({ children, className }: ContentSectionProps) => (
  <motion.section
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-40px" }}
    transition={{ duration: 0.4 }}
    className={cn("mx-auto max-w-3xl px-4 sm:px-6", className)}
  >
    {children}
  </motion.section>
);

export const Prose = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div
    className={cn(
      "prose prose-lg max-w-none",
      "text-foreground/80 leading-[1.8]",
      "[&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:tracking-tight",
      "[&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3",
      "[&_p]:mb-4 [&_p]:text-[0.95rem] [&_p]:leading-[1.8] sm:[&_p]:text-base",
      "[&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_blockquote]:my-6",
      "[&_ul]:list-none [&_ul]:pl-0 [&_ul]:space-y-2.5 [&_ul]:my-5",
      "[&_li]:relative [&_li]:pl-5 [&_li]:text-[0.95rem] [&_li]:before:content-['–'] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:text-accent [&_li]:before:font-medium",
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
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
    className={cn(
      "my-6 rounded-lg p-5 border",
      variant === "default" && "bg-card border-border",
      variant === "pro" && "border-pro/25 bg-pro/5",
      variant === "contra" && "border-contra/25 bg-contra/5",
      variant === "warning" && "border-accent/25 bg-accent/5"
    )}
  >
    {title && (
      <h4
        className={cn(
          "mb-2.5 font-sans-heading text-xs font-semibold uppercase tracking-wider flex items-center gap-2",
          variant === "pro" && "text-pro",
          variant === "contra" && "text-contra",
          variant === "warning" && "text-accent",
          variant === "default" && "text-muted-foreground"
        )}
      >
        <span className={cn(
          "w-1.5 h-1.5 rounded-full",
          variant === "pro" && "bg-pro",
          variant === "contra" && "bg-contra",
          variant === "warning" && "bg-accent",
          variant === "default" && "bg-muted-foreground"
        )} />
        {title}
      </h4>
    )}
    <div className="text-sm leading-relaxed text-foreground/70">{children}</div>
  </motion.div>
);

export const StatCard = ({ value, label, suffix }: { value: string; label: string; suffix?: string }) => (
  <div className="modern-stat">
    <div className="text-2xl font-bold text-foreground tracking-tight sm:text-3xl">
      {value}{suffix && <span className="text-sm text-muted-foreground ml-0.5 font-normal">{suffix}</span>}
    </div>
    <div className="text-[11px] uppercase tracking-widest text-muted-foreground mt-2 font-medium font-sans-heading">{label}</div>
  </div>
);

export const TimelineItem = ({ year, title, description }: { year: string; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -12 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.3 }}
    className="relative pl-6 pb-7 border-l border-border last:pb-0"
  >
    <div className="absolute left-[-3px] top-1.5 w-1.5 h-1.5 rounded-full bg-accent" />
    <span className="text-xs text-accent font-mono-code font-medium">{year}</span>
    <h4 className="text-sm font-semibold text-foreground mt-0.5">{title}</h4>
    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">{description}</p>
  </motion.div>
);

export const ModernDivider = ({ label }: { label?: string }) => (
  <div className="my-10 modern-divider text-[11px] font-sans-heading font-medium uppercase tracking-widest text-muted-foreground/50">
    {label && <span className="px-3">{label}</span>}
  </div>
);

export const QuoteBlock = ({ quote, author }: { quote: string; author: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 8 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="modern-quote"
  >
    <p className="italic text-foreground/75 text-base leading-relaxed">{quote}</p>
    <p className="mt-2.5 text-xs text-muted-foreground font-sans-heading font-medium">— {author}</p>
  </motion.div>
);
