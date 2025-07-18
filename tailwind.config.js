/** @type {import('tailwindcss').Config} */
import typography from '@tailwindcss/typography';

module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
      },
      colors: {
        border: "var(--color-border)",
        input: "var(--color-input)",
        ring: "var(--color-ring)",
        background: "var(--color-background)",
        foreground: "var(--color-foreground)",
        primary: {
          DEFAULT: "var(--color-primary)",
          foreground: "var(--color-primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--color-secondary)",
          foreground: "var(--color-secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--color-muted)",
          foreground: "var(--color-muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--color-accent)",
          foreground: "var(--color-accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--color-popover)",
          foreground: "var(--color-popover-foreground)",
        },
        card: {
          DEFAULT: "var(--color-card)",
          foreground: "var(--color-card-foreground)",
        },
      },
      borderRadius: {
        lg: "var(--radius-lg)",
        md: "var(--radius-md)",
        sm: "var(--radius-sm)",
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '100%',
            color: 'var(--color-foreground)',
            a: {
              color: 'var(--color-primary)',
              '&:hover': {
                color: 'var(--color-primary)',
              },
            },
            h1: {
              color: 'var(--color-foreground)',
            },
            h2: {
              color: 'var(--color-foreground)',
            },
            h3: {
              color: 'var(--color-foreground)',
            },
            h4: {
              color: 'var(--color-foreground)',
            },
            h5: {
              color: 'var(--color-foreground)',
            },
            h6: {
              color: 'var(--color-foreground)',
            },
            strong: {
              color: 'var(--color-foreground)',
            },
            code: {
              color: 'var(--color-foreground)',
              backgroundColor: 'var(--color-muted)',
              borderRadius: '0.25rem',
              padding: '0.15rem 0.3rem',
            },
            pre: {
              backgroundColor: 'var(--color-muted)',
              color: 'var(--color-foreground)',
              overflow: 'auto',
              padding: '1rem',
              borderRadius: '0.375rem',
            },
          },
        },
      },
    },
  },
  plugins: [
    typography,
  ],
} 