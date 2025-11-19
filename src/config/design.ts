// Design Configuration
// Update colors, fonts, and other design tokens here to apply changes site-wide

export const designConfig = {
  // Color Palette
  colors: {
    primary: {
      main: '#000000', // Night Blue RAL 5022
      light: '#000000',
      dark: '#000000',
      50: '#000000',
      100: '#000000',
      200: '#000000',
      300: '#000000',
      400: '#000000',
      500: '#000000',
      600: '#000000',
      700: '#000000',
      800: '#000000',
      900: '#000000',
    },
    secondary: {
      main: '#000000', // Black
      light: '#000000',
      dark: '#000000',
    },
    background: {
      primary: '#000000', // Light Grey
      secondary: '#000000', // White
      dark: '#000000', // Slightly darker grey
      accent: '#000000',
    },
    text: {
      primary: '#000000', // Black
      secondary: '#000000', // Dark grey
      light: '#000000', // Medium grey
      white: '#000000',
      muted: '#000000', // Light grey
    },
    accent: {
      blue: '#000000', // Night blue for highlights
      cyan: '#000000',
      success: '#000000',
      warning: '#000000',
      error: '#000000',
    },
    border: {
      light: '#000000',
      medium: '#000000',
      dark: '#000000',
    }
  },

  // Typography
  typography: {
    fonts: {
      headline: ['Poppins', 'sans-serif', 'geometric'],
      body: ['Roboto', 'sans-serif'],
      mono: ['Poppins', 'sans-serif', 'geometric'],
    },
    sizes: {
      xs: '0.75rem',    // 12px
      sm: '0.875rem',   // 14px
      base: '1rem',     // 16px
      lg: '1.125rem',   // 18px
      xl: '1.25rem',    // 20px
      '2xl': '1.5rem',  // 24px
      '3xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '5xl': '3rem',    // 48px
      '6xl': '3.75rem', // 60px
    },
    weights: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeights: {
      tight: '1.2',
      normal: '1.5',
      relaxed: '1.75',
    }
  },

  // Spacing System (8px grid)
  spacing: {
    xs: '0.25rem',   // 4px
    sm: '0.5rem',    // 8px
    md: '1rem',      // 16px
    lg: '1.5rem',    // 24px
    xl: '2rem',      // 32px
    '2xl': '3rem',   // 48px
    '3xl': '4rem',   // 64px
    '4xl': '6rem',   // 96px
    '5xl': '8rem',   // 128px
  },

  // Border Radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',   // 2px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },

  // Animation Durations
  transitions: {
    fast: '150ms',
    normal: '200ms',
    slow: '300ms',
    slower: '500ms',
  },

  // Breakpoints
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Component Specific Settings
  components: {
    navigation: {
      height: '4rem', // 64px
      zIndex: 50,
    },
    footer: {
      backgroundColor: 'black',
    },
    buttons: {
      borderRadius: '0.5rem', // 8px
      padding: {
        sm: '0.5rem 1rem',
        md: '0.75rem 1.5rem',
        lg: '1rem 2rem',
      }
    },
    cards: {
      borderRadius: '0.75rem', // 12px
      padding: '2rem',
    }
  }
};

// Helper function to get nested config values
export const getConfigValue = (path: string): any => {
  return path.split('.').reduce((obj: any, key: string) => obj?.[key], designConfig);
};

// Export individual sections for easier imports
export const colors = designConfig.colors;
export const typography = designConfig.typography;
export const spacing = designConfig.spacing;
export const components = designConfig.components;
export const shadows = designConfig.shadows;
export const borderRadius = designConfig.borderRadius;
export const transitions = designConfig.transitions;
export const breakpoints = designConfig.breakpoints;

// CSS Custom Properties Generator (for runtime changes)
export const generateCSSVariables = () => {
  const cssVars: Record<string, string> = {};
  
  // Generate CSS variables for colors
  Object.entries(designConfig.colors.primary).forEach(([key, value]) => {
    cssVars[`--color-primary-${key}`] = value;
  });
  
  Object.entries(designConfig.colors.secondary).forEach(([key, value]) => {
    cssVars[`--color-secondary-${key}`] = value;
  });
  
  // Generate CSS variables for spacing
  Object.entries(designConfig.spacing).forEach(([key, value]) => {
    cssVars[`--spacing-${key}`] = value;
  });
  
  return cssVars;
};

// Theme variants (for future theming support)
export const themes = {
  default: designConfig,
  dark: {
    ...designConfig,
    colors: {
      ...designConfig.colors,
      background: {
        primary: '#111827',
        secondary: '#1f2937',
        dark: '#000000',
        accent: '#374151',
      },
      text: {
        primary: '#ffffff',
        secondary: '#d1d5db',
        light: '#9ca3af',
        white: '#ffffff',
        muted: '#6b7280',
      }
    }
  }
};