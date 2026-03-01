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
  <div className="border-b bg-card">
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      {chapter && (
        <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {chapter}
        </span>
      )}
      <h1 className="font-serif text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  </div>
);

export const ContentSection = ({ children, className }: ContentSectionProps) => (
  <motion.section
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
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
      "text-foreground/90 leading-[1.8]",
      "[&_h2]:font-sans [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-foreground [&_h2]:mt-12 [&_h2]:mb-4 [&_h2]:uppercase [&_h2]:tracking-wider",
      "[&_h3]:font-sans [&_h3]:text-xl [&_h3]:font-medium [&_h3]:text-foreground [&_h3]:mt-8 [&_h3]:mb-3 [&_h3]:uppercase [&_h3]:tracking-wide",
      "[&_p]:mb-4 [&_p]:text-base [&_p]:sm:text-[1.05rem]",
      "[&_blockquote]:border-l-2 [&_blockquote]:border-accent [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-muted-foreground",
      "[&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2",
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
  <div
    className={cn(
      "my-8 rounded-lg border p-5 sm:p-6",
      variant === "default" && "border-border bg-card",
      variant === "pro" && "border-pro/30 bg-pro/5",
      variant === "contra" && "border-contra/30 bg-contra/5",
      variant === "warning" && "border-accent/30 bg-accent/5"
    )}
  >
    {title && (
      <h4
        className={cn(
          "mb-2 font-serif text-sm font-semibold uppercase tracking-wider",
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
  </div>
);
