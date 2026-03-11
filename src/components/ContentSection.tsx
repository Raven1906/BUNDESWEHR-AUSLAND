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
  <div className="relative overflow-hidden">
    {/* Animated gradient background */}
    <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/3" />
    <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/3 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6 sm:py-24 relative">
      {chapter && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="chapter-badge mb-6 inline-flex">
            <span className="glow-dot scale-75" />
            {chapter}
          </span>
        </motion.div>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-heading text-4xl font-bold leading-[1.1] text-foreground sm:text-5xl lg:text-6xl text-balance"
      >
        {title}
      </motion.h1>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="mt-6 text-lg leading-relaxed text-muted-foreground max-w-2xl"
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10 h-px bg-gradient-to-r from-accent/50 via-accent/20 to-transparent origin-left"
      />
    </div>
  </div>
);

export const ContentSection = ({ children, className }: ContentSectionProps) => (
  <motion.section
    initial={{ opacity: 0, y: 24 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
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
      "text-foreground/85 leading-[1.85] font-body",
      "[&_h2]:font-heading [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-foreground [&_h2]:mt-14 [&_h2]:mb-5 [&_h2]:tracking-tight",
      "[&_h2]:flex [&_h2]:items-center [&_h2]:gap-3",
      "[&_h3]:font-heading [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-foreground [&_h3]:mt-10 [&_h3]:mb-4",
      "[&_p]:mb-5 [&_p]:text-[1.05rem] [&_p]:leading-[1.85]",
      "[&_blockquote]:border-l-[3px] [&_blockquote]:border-accent [&_blockquote]:pl-5 [&_blockquote]:italic [&_blockquote]:text-muted-foreground [&_blockquote]:bg-accent/5 [&_blockquote]:py-4 [&_blockquote]:pr-5 [&_blockquote]:rounded-r-lg [&_blockquote]:my-8",
      "[&_ul]:list-none [&_ul]:pl-0 [&_ul]:space-y-3 [&_ul]:my-6",
      "[&_li]:relative [&_li]:pl-7 [&_li]:before:content-[''] [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[10px] [&_li]:before:w-2 [&_li]:before:h-2 [&_li]:before:rounded-full [&_li]:before:bg-accent/50",
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
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className={cn(
      "my-8 rounded-xl p-6 border",
      variant === "default" && "glass-card",
      variant === "pro" && "border-pro/30 bg-pro/5",
      variant === "contra" && "border-contra/30 bg-contra/5",
      variant === "warning" && "border-accent/30 bg-accent/5"
    )}
  >
    {title && (
      <h4
        className={cn(
          "mb-3 font-heading text-sm font-semibold flex items-center gap-2",
          variant === "pro" && "text-pro",
          variant === "contra" && "text-contra",
          variant === "warning" && "text-accent",
          variant === "default" && "text-muted-foreground"
        )}
      >
        <span className={cn(
          "w-2 h-2 rounded-full",
          variant === "pro" && "bg-pro",
          variant === "contra" && "bg-contra",
          variant === "warning" && "bg-accent",
          variant === "default" && "bg-muted-foreground"
        )} />
        {title}
      </h4>
    )}
    <div className="text-sm leading-relaxed text-foreground/75">{children}</div>
  </motion.div>
);

export const StatCard = ({ value, label, suffix }: { value: string; label: string; suffix?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, type: "spring" }}
    className="modern-stat"
  >
    <div className="text-3xl font-heading font-bold text-accent tracking-tight">
      {value}{suffix && <span className="text-base text-muted-foreground ml-0.5">{suffix}</span>}
    </div>
    <div className="text-[11px] uppercase tracking-wider text-muted-foreground mt-2.5 font-medium">{label}</div>
  </motion.div>
);

export const TimelineItem = ({ year, title, description }: { year: string; title: string; description: string }) => (
  <motion.div
    initial={{ opacity: 0, x: -16 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="relative pl-8 pb-8 border-l-2 border-accent/20 last:pb-0"
  >
    <div className="absolute left-[-5px] top-1.5 glow-dot scale-75" />
    <span className="text-sm text-accent font-mono font-medium">{year}</span>
    <h4 className="font-heading text-base font-semibold text-foreground mt-1">{title}</h4>
    <p className="text-sm text-muted-foreground mt-1.5 leading-relaxed">{description}</p>
  </motion.div>
);

export const ModernDivider = ({ label }: { label?: string }) => (
  <div className="my-12 modern-divider text-xs font-mono text-muted-foreground/60">
    {label && <span className="px-2">{label}</span>}
  </div>
);

export const QuoteBlock = ({ quote, author }: { quote: string; author: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="modern-quote"
  >
    <p className="italic text-foreground/80 text-lg leading-relaxed pl-4">{quote}</p>
    <p className="mt-3 text-sm text-muted-foreground pl-4">— {author}</p>
  </motion.div>
);
