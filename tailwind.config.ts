import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        float: {
          "0%, 100%": { 
            transform: "translateY(0px) rotate(0deg)" 
          },
          "33%": { 
            transform: "translateY(-10px) rotate(1deg)" 
          },
          "66%": { 
            transform: "translateY(5px) rotate(-1deg)" 
          },
        },
        "pulse-glow": {
          from: { 
            boxShadow: "0 0 20px rgba(0, 217, 255, 0.3)" 
          },
          to: { 
            boxShadow: "0 0 30px rgba(0, 217, 255, 0.6), 0 0 40px rgba(139, 92, 246, 0.3)" 
          },
        },
        "rotate-slow": {
          from: {
            transform: "rotate(0deg)",
          },
          to: {
            transform: "rotate(360deg)",
          },
        },
        particle: {
          "0%, 100%": { 
            transform: "translateY(0px) translateX(0px) scale(1)",
            opacity: "0.7" 
          },
          "25%": { 
            transform: "translateY(-100px) translateX(50px) scale(1.2)",
            opacity: "1" 
          },
          "50%": { 
            transform: "translateY(-200px) translateX(-30px) scale(0.8)",
            opacity: "0.5" 
          },
          "75%": { 
            transform: "translateY(-300px) translateX(80px) scale(1.1)",
            opacity: "0.8" 
          },
        },
        typewriter: {
          from: { 
            width: "0" 
          },
          to: { 
            width: "100%" 
          },
        },
        neural: {
          "0%, 100%": { 
            opacity: "0.3",
            transform: "scale(1)" 
          },
          "50%": { 
            opacity: "1",
            transform: "scale(1.05)" 
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite alternate",
        "rotate-slow": "rotate-slow 20s linear infinite",
        particle: "particle 8s ease-in-out infinite",
        typewriter: "typewriter 4s steps(40) 1s 1 normal both",
        neural: "neural 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
