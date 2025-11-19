import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { PARTNERS } from '../constants/partners';

export function Partners() {
  const headerRef = useScrollAnimation();
  const partnersRef = useScrollAnimation({ threshold: 0.2 });

  return (
    <section className="py-2 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div 
          ref={partnersRef} 
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-16 items-center justify-items-center scale-up max-w-6xl mx-auto"
        >
          {PARTNERS.map((partner, index) => (
            <div 
              key={index} 
              className="w-full flex items-center justify-center px-8 py-6"
            >
              <img 
                src={partner.logo} 
                alt={partner.name}
                className="w-full h-auto max-h-[180px] object-contain transition-all duration-300 hover:opacity-80"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}