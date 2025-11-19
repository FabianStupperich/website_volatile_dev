import React from 'react';
import { useDesignConfig } from '../hooks/useDesignConfig';
import { getButtonClasses, getCardClasses, getTextClasses } from '../utils/classNames';

/**
 * Demo component to showcase the design system
 * This component demonstrates how to use the design configuration
 */
const DesignSystemDemo = () => {
  const { colors, typography, spacing, components } = useDesignConfig();

  return (
    <div className="p-8 space-y-8">
      <h1 className="text-4xl font-headline font-bold text-primary-main">
        Design System Demo
      </h1>
      
      {/* Colors */}
      <section>
        <h2 className="text-2xl font-headline font-semibold mb-4">Colors</h2>
        <div className="grid grid-cols-5 gap-4">
          <div className="space-y-2">
            <div className="w-full h-16 bg-primary-main rounded-lg"></div>
            <p className="text-sm">Primary Main</p>
          </div>
          <div className="space-y-2">
            <div className="w-full h-16 bg-primary-light rounded-lg"></div>
            <p className="text-sm">Primary Light</p>
          </div>
          <div className="space-y-2">
            <div className="w-full h-16 bg-secondary-main rounded-lg"></div>
            <p className="text-sm">Secondary Main</p>
          </div>
          <div className="space-y-2">
            <div className="w-full h-16 bg-background-secondary rounded-lg border"></div>
            <p className="text-sm">Background Secondary</p>
          </div>
          <div className="space-y-2">
            <div className="w-full h-16 bg-accent-success rounded-lg"></div>
            <p className="text-sm">Accent Success</p>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section>
        <h2 className="text-2xl font-headline font-semibold mb-4">Typography</h2>
        <div className="space-y-4">
          <div className="font-headline text-4xl font-bold">Headline Font - Bold</div>
          <div className="font-body text-lg">Body Font - Regular</div>
          <div className="font-mono text-sm">Mono Font - Code</div>
        </div>
      </section>

      {/* Buttons */}
      <section>
        <h2 className="text-2xl font-headline font-semibold mb-4">Buttons</h2>
        <div className="flex flex-wrap gap-4">
          <button className={getButtonClasses('primary', 'sm')}>
            Primary Small
          </button>
          <button className={getButtonClasses('primary', 'md')}>
            Primary Medium
          </button>
          <button className={getButtonClasses('primary', 'lg')}>
            Primary Large
          </button>
          <button className={getButtonClasses('secondary', 'md')}>
            Secondary
          </button>
          <button className={getButtonClasses('outline', 'md')}>
            Outline
          </button>
        </div>
      </section>

      {/* Cards */}
      <section>
        <h2 className="text-2xl font-headline font-semibold mb-4">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className={getCardClasses('default')}>
            <h3 className="font-headline font-semibold mb-2">Default Card</h3>
            <p className="text-text-secondary">This is a default card style.</p>
          </div>
          <div className={getCardClasses('elevated')}>
            <h3 className="font-headline font-semibold mb-2">Elevated Card</h3>
            <p className="text-text-secondary">This card has elevation shadow.</p>
          </div>
          <div className={getCardClasses('outlined')}>
            <h3 className="font-headline font-semibold mb-2">Outlined Card</h3>
            <p className="text-text-secondary">This card has a border outline.</p>
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section>
        <h2 className="text-2xl font-headline font-semibold mb-4">Spacing</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="w-4 h-4 bg-primary-main"></div>
            <span>XS (4px)</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-8 h-8 bg-primary-main"></div>
            <span>SM (8px)</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-primary-main"></div>
            <span>MD (16px)</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="w-24 h-24 bg-primary-main"></div>
            <span>LG (24px)</span>
          </div>
        </div>
      </section>

      {/* Design Tokens Display */}
      <section>
        <h2 className="text-2xl font-headline font-semibold mb-4">Current Design Tokens</h2>
        <div className="bg-background-secondary p-6 rounded-xl">
          <pre className="text-sm font-mono overflow-auto">
            {JSON.stringify({ colors, typography, spacing, components }, null, 2)}
          </pre>
        </div>
      </section>
    </div>
  );
};

export default DesignSystemDemo;