import { designConfig, themes } from '../config/design';
import { useState, useEffect } from 'react';

/**
 * Custom hook to access design configuration
 * Usage: const { colors, typography, spacing } = useDesignConfig();
 */
export const useDesignConfig = (themeName: 'default' | 'dark' = 'default') => {
  const [currentTheme, setCurrentTheme] = useState(themeName);
  
  const theme = themes[currentTheme] || designConfig;
  
  return {
    ...theme,
    currentTheme,
    setTheme: setCurrentTheme,
    availableThemes: Object.keys(themes),
  };
};

/**
 * Hook to get specific config values by path
 * Usage: const primaryColor = useConfigValue('colors.primary.main');
 */
export const useConfigValue = (path: string, themeName: 'default' | 'dark' = 'default') => {
  const theme = themes[themeName] || designConfig;
  return path.split('.').reduce((obj: any, key: string) => obj?.[key], theme);
};

/**
 * Hook for responsive design values
 * Usage: const spacing = useResponsiveValue({ base: 'md', lg: 'xl' });
 */
export const useResponsiveValue = (values: Record<string, any>) => {
  const [currentValue, setCurrentValue] = useState(values.base || values.default);
  
  useEffect(() => {
    const updateValue = () => {
      const width = window.innerWidth;
      const breakpoints = designConfig.breakpoints;
      
      if (width >= parseInt(breakpoints['2xl']) && values['2xl']) {
        setCurrentValue(values['2xl']);
      } else if (width >= parseInt(breakpoints.xl) && values.xl) {
        setCurrentValue(values.xl);
      } else if (width >= parseInt(breakpoints.lg) && values.lg) {
        setCurrentValue(values.lg);
      } else if (width >= parseInt(breakpoints.md) && values.md) {
        setCurrentValue(values.md);
      } else if (width >= parseInt(breakpoints.sm) && values.sm) {
        setCurrentValue(values.sm);
      } else {
        setCurrentValue(values.base || values.default);
      }
    };
    
    updateValue();
    window.addEventListener('resize', updateValue);
    
    return () => window.removeEventListener('resize', updateValue);
  }, [values]);
  
  return currentValue;
};

/**
 * Hook to apply CSS custom properties for dynamic theming
 */
export const useThemeCSS = (themeName: 'default' | 'dark' = 'default') => {
  useEffect(() => {
    const theme = themes[themeName] || designConfig;
    const root = document.documentElement;
    
    // Apply CSS custom properties
    Object.entries(theme.colors.primary).forEach(([key, value]) => {
      root.style.setProperty(`--color-primary-${key}`, value);
    });
    
    Object.entries(theme.colors.secondary).forEach(([key, value]) => {
      root.style.setProperty(`--color-secondary-${key}`, value);
    });
    
    Object.entries(theme.colors.background).forEach(([key, value]) => {
      root.style.setProperty(`--color-background-${key}`, value);
    });
    
    Object.entries(theme.colors.text).forEach(([key, value]) => {
      root.style.setProperty(`--color-text-${key}`, value);
    });
    
    Object.entries(theme.spacing).forEach(([key, value]) => {
      root.style.setProperty(`--spacing-${key}`, value);
    });
    
  }, [themeName]);
};