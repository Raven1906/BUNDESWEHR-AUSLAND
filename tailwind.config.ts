import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
        pro: {
          DEFAULT: "hsl(var(--pro))",
          foreground: "hsl(var(--pro-foreground))",
        },
        contra: {
          DEFAULT: "hsl(var(--contra))",
          foreground: "hsl(var(--contra-foreground))",
        },
        neutral: {
          DEFAULT: "hsl(var(--neutral))",
          foreground: "hsl(var(--neutral-foreground))",
        },
        bw: {
          olive: "hsl(var(--bw-olive))",
          "olive-light": "hsl(var(--bw-olive-light))",
          khaki: "hsl(var(--bw-khaki))",
          sand: "hsl(var(--bw-sand))",
          tan: "hsl(var(--bw-tan))",
          anthracite: "hsl(var(--bw-anthracite))",
          gold: "hsl(var(--bw-gold))",
          iron: "hsl(var(--bw-iron))",
          field: "hsl(var(--bw-field))",
          "camo-dark": "hsl(var(--bw-camo-dark))",
          "camo-mid": "hsl(var(--bw-camo-mid))",
          "camo-light": "hsl(var(--bw-camo-light))",
        },
      },
      fontFamily: {
        tactical: ["Oswald", "Bebas Neue", "sans-serif"],
        serif: ["Bebas Neue", "Arial Black", "sans-serif"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "slide-in-bottom": {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "border-pulse": {
          "0%, 100%": { borderColor: "hsl(var(--bw-gold) / 0.2)" },
          "50%": { borderColor: "hsl(var(--bw-gold) / 0.6)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 10px -5px hsl(var(--bw-gold) / 0.2)" },
          "50%": { boxShadow: "0 0 20px -5px hsl(var(--bw-gold) / 0.4)" },
        },
        "tactical-blink": {
          "0%, 90%, 100%": { opacity: "1" },
          "95%": { opacity: "0" },
        },
        "count-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in-left": "fade-in-left 0.5s ease-out forwards",
        "slide-in-bottom": "slide-in-bottom 0.7s ease-out forwards",
        "border-pulse": "border-pulse 3s ease-in-out infinite",
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "tactical-blink": "tactical-blink 4s ease-in-out infinite",
        "count-up": "count-up 0.4s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
