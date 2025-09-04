/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
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
        border: "#E8E8E8",
        input: "#FAFAFA",
        ring: "#1E3A8A", // deep teal - replacing aqua
        background: "#FAFAFA",
        foreground: "#2C2C2C",
        primary: {
          DEFAULT: "#800020",
          foreground: "#FAFAFA",
        },
        secondary: {
          DEFAULT: "#D4AF37",
          foreground: "#2C2C2C",
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", // red-600
          foreground: "var(--color-destructive-foreground)", // white
        },
        muted: {
          DEFAULT: "var(--color-muted)", // gray-50
          foreground: "var(--color-muted-foreground)", // gray-500
        },
        accent: {
          DEFAULT: "var(--color-accent)", // deep teal - replacing aqua
          foreground: "var(--color-accent-foreground)", // white
        },
        popover: {
          DEFAULT: "var(--color-popover)", // white
          foreground: "var(--color-popover-foreground)", // charcoal
        },
        card: {
          DEFAULT: "var(--color-card)", // white
          foreground: "var(--color-card-foreground)", // charcoal
        },
        success: {
          DEFAULT: "var(--color-success)", // green-500
          foreground: "var(--color-success-foreground)", // white
        },
        warning: {
          DEFAULT: "var(--color-warning)", // orange-500
          foreground: "var(--color-warning-foreground)", // white
        },
        error: {
          DEFAULT: "var(--color-error)", // red-600
          foreground: "var(--color-error-foreground)", // white
        },
        // Brand-specific colors - Enhanced for better engagement
        maroon: "#800000", // maroon
        beige: "#F5F5DC", // beige
        "deep-teal": "#1E3A8A", // deep teal - replacing aqua
        "warm-amber": "#F59E0B", // warm amber for accents
        "rich-burgundy": "#9F1239", // rich burgundy variant
        charcoal: "#2D2D2D", // charcoal
        "medium-gray": "#666666", // gray-500
        "off-white": "#FAFAFA", // gray-50
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Poppins', 'sans-serif'],
      },
      fontSize: {
        'display': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }], // 56px
        'headline': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }], // 40px
        'title': ['1.75rem', { lineHeight: '1.3' }], // 28px
        'subtitle': ['1.125rem', { lineHeight: '1.5' }], // 18px
        'body': ['1rem', { lineHeight: '1.6' }], // 16px
        'caption': ['0.875rem', { lineHeight: '1.4' }], // 14px
      },
      spacing: {
        '18': '4.5rem', // 72px
        '22': '5.5rem', // 88px
        '26': '6.5rem', // 104px
        '30': '7.5rem', // 120px
        '34': '8.5rem', // 136px
        '38': '9.5rem', // 152px
        '42': '10.5rem', // 168px
        '46': '11.5rem', // 184px
        '50': '12.5rem', // 200px
      },
      borderRadius: {
        lg: "var(--radius-lg)", // 12px
        md: "var(--radius-md)", // 8px
        sm: "var(--radius-sm)", // 4px
        xl: "var(--radius-xl)", // 16px
      },
      boxShadow: {
        'soft': 'var(--shadow-sm)', // subtle shadow
        'elevated': 'var(--shadow-md)', // medium shadow
        'dramatic': 'var(--shadow-lg)', // large shadow
        'cinematic': 'var(--shadow-xl)', // extra large shadow
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards', // enhanced timing
        'slide-up': 'slideUp 1s ease-out forwards', // enhanced timing
        'parallax': 'parallax 0.1s linear',
        'scale-in': 'scaleIn 0.4s ease-out forwards', // enhanced timing
        'slide-in-right': 'slideInRight 0.5s ease-out forwards', // enhanced timing
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite', // new soft bounce
        'pulse-gentle': 'pulseGentle 3s ease-in-out infinite', // new gentle pulse
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.95)' }, // enhanced
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(40px) scale(0.9)' }, // enhanced
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' }, // enhanced
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGentle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
      aspectRatio: {
        'cinematic': '21/9',
        'portrait': '3/4',
        'landscape': '4/3',
      },
      backdropBlur: {
        'cinematic': '12px', // enhanced blur
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-soft': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'ease-out-strong': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)', // new timing function
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1200': '1200ms',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      maxWidth: {
        '8xl': '88rem', // 1408px
        '9xl': '96rem', // 1536px
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
  ],
}