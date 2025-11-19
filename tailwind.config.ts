import { designConfig } from './src/config/design';

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary colors (direct access)
        'night-blue': designConfig.colors.primary.main,
        'light-grey': designConfig.colors.background.primary,
        
        // Full color palette with proper structure
        primary: {
          50: designConfig.colors.primary[50],
          100: designConfig.colors.primary[100],
          200: designConfig.colors.primary[200],
          300: designConfig.colors.primary[300],
          400: designConfig.colors.primary[400],
          500: designConfig.colors.primary[500],
          600: designConfig.colors.primary[600],
          700: designConfig.colors.primary[700],
          800: designConfig.colors.primary[800],
          900: designConfig.colors.primary[900],
          main: designConfig.colors.primary.main,
          light: designConfig.colors.primary.light,
          dark: designConfig.colors.primary.dark,
        },
        secondary: {
          main: designConfig.colors.secondary.main,
          light: designConfig.colors.secondary.light,
          dark: designConfig.colors.secondary.dark,
        },
        background: {
          primary: designConfig.colors.background.primary,
          secondary: designConfig.colors.background.secondary,
          dark: designConfig.colors.background.dark,
          accent: designConfig.colors.background.accent,
        },
        text: {
          primary: designConfig.colors.text.primary,
          secondary: designConfig.colors.text.secondary,
          light: designConfig.colors.text.light,
          white: designConfig.colors.text.white,
          muted: designConfig.colors.text.muted,
        },
        accent: {
          blue: designConfig.colors.accent.blue,
          cyan: designConfig.colors.accent.cyan,
          success: designConfig.colors.accent.success,
          warning: designConfig.colors.accent.warning,
          error: designConfig.colors.accent.error,
        },
        border: {
          light: designConfig.colors.border.light,
          medium: designConfig.colors.border.medium,
          dark: designConfig.colors.border.dark,
        }
      },
      fontFamily: {
        'headline': designConfig.typography.fonts.headline,
        'body': designConfig.typography.fonts.body,
        'mono': designConfig.typography.fonts.mono,
      },
      fontSize: {
        'xs': designConfig.typography.sizes.xs,
        'sm': designConfig.typography.sizes.sm,
        'base': designConfig.typography.sizes.base,
        'lg': designConfig.typography.sizes.lg,
        'xl': designConfig.typography.sizes.xl,
        '2xl': designConfig.typography.sizes['2xl'],
        '3xl': designConfig.typography.sizes['3xl'],
        '4xl': designConfig.typography.sizes['4xl'],
        '5xl': designConfig.typography.sizes['5xl'],
        '6xl': designConfig.typography.sizes['6xl'],
      },
      fontWeight: {
        light: designConfig.typography.weights.light,
        normal: designConfig.typography.weights.normal,
        medium: designConfig.typography.weights.medium,
        semibold: designConfig.typography.weights.semibold,
        bold: designConfig.typography.weights.bold,
      },
      lineHeight: {
        tight: designConfig.typography.lineHeights.tight,
        normal: designConfig.typography.lineHeights.normal,
        relaxed: designConfig.typography.lineHeights.relaxed,
      },
      spacing: {
        'xs': designConfig.spacing.xs,
        'sm': designConfig.spacing.sm,
        'md': designConfig.spacing.md,
        'lg': designConfig.spacing.lg,
        'xl': designConfig.spacing.xl,
        '2xl': designConfig.spacing['2xl'],
        '3xl': designConfig.spacing['3xl'],
        '4xl': designConfig.spacing['4xl'],
        '5xl': designConfig.spacing['5xl'],
      },
      borderRadius: {
        'none': designConfig.borderRadius.none,
        'sm': designConfig.borderRadius.sm,
        'md': designConfig.borderRadius.md,
        'lg': designConfig.borderRadius.lg,
        'xl': designConfig.borderRadius.xl,
        '2xl': designConfig.borderRadius['2xl'],
        'full': designConfig.borderRadius.full,
      },
      boxShadow: {
        'sm': designConfig.shadows.sm,
        'md': designConfig.shadows.md,
        'lg': designConfig.shadows.lg,
        'xl': designConfig.shadows.xl,
      },
      transitionDuration: {
        'fast': designConfig.transitions.fast,
        'normal': designConfig.transitions.normal,
        'slow': designConfig.transitions.slow,
        'slower': designConfig.transitions.slower,
      },
      screens: {
        'sm': designConfig.breakpoints.sm,
        'md': designConfig.breakpoints.md,
        'lg': designConfig.breakpoints.lg,
        'xl': designConfig.breakpoints.xl,
        '2xl': designConfig.breakpoints['2xl'],
      },
    },
  },
  plugins: [],
};