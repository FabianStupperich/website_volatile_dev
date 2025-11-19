# Professional Website

A modern, responsive website built with React, TypeScript, and Tailwind CSS.

## Design Configuration

This project uses a centralized design system that makes it easy to update colors, fonts, and other design tokens across the entire website.

### Configuration File

The main design configuration is located in `src/config/design.ts`. This file contains all the design tokens including:

- **Colors**: Primary, secondary, background, text, accent colors with full color palettes
- **Typography**: Font families, sizes, weights, and line heights
- **Spacing**: Consistent spacing system based on 8px grid
- **Border Radius**: Standardized border radius values
- **Shadows**: Box shadow definitions
- **Transitions**: Animation duration settings
- **Breakpoints**: Responsive design breakpoints
- **Component Settings**: Specific settings for navigation, buttons, cards, etc.

### How to Update Design Tokens

#### Changing Colors
```typescript
// In src/config/design.ts
colors: {
  primary: {
    main: '#your-new-color', // Update primary color
    // ... other shades
  },
  // ... other color definitions
}
```

#### Changing Fonts
```typescript
// In src/config/design.ts
typography: {
  fonts: {
    headline: ['Your New Font', 'fallback'],
    body: ['Your Body Font', 'fallback'],
  },
  // ... other typography settings
}
```

#### Changing Spacing
```typescript
// In src/config/design.ts
spacing: {
  xs: '0.25rem',   // Update spacing values
  sm: '0.5rem',
  // ... other spacing values
}
```

### Using Design Config in Components

#### Method 1: Using the Hook
```typescript
import { useDesignConfig } from '../hooks/useDesignConfig';

const MyComponent = () => {
  const { colors, typography } = useDesignConfig();
  
  return (
    <div style={{ color: colors.primary.main }}>
      Content
    </div>
  );
};
```

#### Method 2: Direct Import
```typescript
import { colors, typography } from '../config/design';

const MyComponent = () => {
  return (
    <div style={{ color: colors.primary.main }}>
      Content
    </div>
  );
};
```

#### Method 3: Using Utility Classes
```typescript
import { getButtonClasses, getCardClasses } from '../utils/classNames';

const MyComponent = () => {
  return (
    <div>
      <button className={getButtonClasses('primary', 'lg')}>
        Click me
      </button>
      <div className={getCardClasses('elevated')}>
        Card content
      </div>
    </div>
  );
};
```

### Tailwind Integration

The design configuration is automatically integrated with Tailwind CSS through the `tailwind.config.js` file. This means you can use your custom design tokens as Tailwind classes:

```html
<div className="bg-primary-main text-white p-lg rounded-xl">
  Content using design tokens
</div>
```

### Benefits

1. **Centralized Control**: Update colors, fonts, and spacing in one place
2. **Consistency**: Ensures design consistency across all components
3. **Type Safety**: Full TypeScript support for all design tokens
4. **Easy Theming**: Simple to create light/dark themes or brand variations
5. **Maintainability**: Easy to maintain and update design system

### Quick Start

1. Open `src/config/design.ts`
2. Update the values you want to change
3. Save the file - changes will be applied automatically across the entire website

The configuration system is designed to be intuitive and powerful, allowing you to easily customize the entire visual appearance of your website from a single location.