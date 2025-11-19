import { designConfig } from '../config/design';

/**
 * Utility function to combine class names
 */
export const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ');
};

/**
 * Generate dynamic classes based on design config
 */
export const getButtonClasses = (variant: 'primary' | 'secondary' | 'outline' = 'primary', size: 'sm' | 'md' | 'lg' = 'md') => {
  const baseClasses = 'inline-flex items-center justify-center font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  // Use design config values
  const duration = `duration-${designConfig.transitions.normal.replace('ms', '')}`;
  const borderRadius = `rounded-${designConfig.components.buttons.borderRadius.replace('rem', 'lg')}`;
  
  const variants = {
    primary: `bg-primary-main text-white hover:bg-primary-700 focus:ring-primary-500 transform hover:scale-105`,
    secondary: `bg-secondary-main text-white hover:bg-secondary-light focus:ring-secondary-main transform hover:scale-105`,
    outline: `border-2 border-primary-main text-primary-main hover:bg-primary-main hover:text-white focus:ring-primary-500 transform hover:scale-105`,
  };

  const sizes = {
    sm: `px-4 py-2 text-sm`,
    md: `px-6 py-3 text-base`,
    lg: `px-8 py-4 text-lg`,
  };

  return cn(baseClasses, variants[variant], sizes[size], borderRadius, duration);
};

/**
 * Generate card classes based on design config
 */
export const getCardClasses = (variant: 'default' | 'elevated' | 'outlined' = 'default') => {
  const borderRadius = `rounded-${designConfig.components.cards.borderRadius.replace('rem', 'xl')}`;
  const padding = `p-8`; // Using p-8 as equivalent to 2rem
  const baseClasses = `${padding} ${borderRadius}`;
  
  const variants = {
    default: 'bg-background-secondary',
    elevated: `bg-white shadow-lg hover:shadow-xl transition-shadow duration-${designConfig.transitions.slow.replace('ms', '')}`,
    outlined: `bg-white border border-border-light hover:border-border-medium transition-colors duration-${designConfig.transitions.normal.replace('ms', '')}`,
  };

  return cn(baseClasses, variants[variant]);
};

/**
 * Generate text classes based on design config
 */
export const getTextClasses = (variant: 'primary' | 'secondary' | 'muted' = 'primary', size: keyof typeof designConfig.typography.sizes = 'base') => {
  const colorVariants = {
    primary: 'text-text-primary',
    secondary: 'text-text-secondary',
    muted: 'text-text-muted',
  };

  const sizeClass = `text-${size}`;
  
  return cn(colorVariants[variant], sizeClass);
};

/**
 * Generate spacing classes based on design config
 */
export const getSpacingClass = (type: 'p' | 'm' | 'px' | 'py' | 'pt' | 'pb' | 'pl' | 'pr' | 'mx' | 'my' | 'mt' | 'mb' | 'ml' | 'mr', size: keyof typeof designConfig.spacing) => {
  return `${type}-${size}`;
};

/**
 * Generate responsive classes
 */
export const getResponsiveClasses = (classes: Record<string, string>) => {
  return Object.entries(classes)
    .map(([breakpoint, className]) => {
      if (breakpoint === 'base') return className;
      return `${breakpoint}:${className}`;
    })
    .join(' ');
};

/**
 * Apply design tokens as inline styles (for dynamic theming)
 */
export const getDesignTokenStyles = (tokens: Record<string, keyof typeof designConfig.colors.primary | string>) => {
  const styles: React.CSSProperties = {};
  
  Object.entries(tokens).forEach(([property, token]) => {
    if (typeof token === 'string' && token.startsWith('#')) {
      styles[property as any] = token;
    } else {
      // Try to resolve from design config
      const value = getConfigValue(token as string);
      if (value) {
        styles[property as any] = value;
      }
    }
  });
  
  return styles;
};

/**
 * Helper to get config values by path
 */
const getConfigValue = (path: string): any => {
  return path.split('.').reduce((obj: any, key: string) => obj?.[key], designConfig);
};