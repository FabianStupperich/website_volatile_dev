import React, { useState, useEffect, useRef } from 'react';

const LogoFlipCarousel = () => {
  // Financial industry and tech logos relevant to Volatile's market
  const allLogos = [
    'Goldman Sachs', 'JPMorgan', 'Deutsche Bank', 'Morgan Stanley', 'UBS', 'Credit Suisse',
    'BlackRock', 'Vanguard', 'Fidelity', 'State Street', 'PIMCO', 'Bridgewater',
    'Bloomberg', 'Refinitiv', 'S&P Global', 'MSCI', 'FactSet', 'Morningstar',
    'Citadel', 'Two Sigma', 'Renaissance', 'AQR Capital', 'Millennium', 'Point72',
    'Allianz', 'AXA', 'Zurich', 'Munich Re', 'Swiss Re', 'Prudential',
    'NASDAQ', 'NYSE', 'LSE', 'Deutsche Börse', 'Euronext', 'CME Group'
  ];

  const LogoColumn = ({ startIndex, delay }) => {
    const [position, setPosition] = useState(0);
    const [logos, setLogos] = useState([]);
    const containerRef = useRef(null);
    
    // Initialize logos
    useEffect(() => {
      const initialLogos = [];
      for (let i = 0; i < 12; i++) {
        initialLogos.push(allLogos[(startIndex + i) % allLogos.length]);
      }
      setLogos(initialLogos);
    }, [startIndex]);

    useEffect(() => {
      const interval = setInterval(() => {
        // Start animation after delay
        setTimeout(() => {
          setPosition(prev => prev - 80); // Move up by one tile height (h-20 = 80px)
        }, delay);
      }, 3000); // Slower animation for better readability

      return () => clearInterval(interval);
    }, [delay]);

    // Reset position when it gets too far
    useEffect(() => {
      if (position <= -480) { // After 6 slides
        setTimeout(() => {
          setPosition(0);
          // Rotate logos array
          setLogos(prev => {
            const newLogos = [...prev];
            for (let i = 0; i < 6; i++) {
              newLogos.push(newLogos.shift());
            }
            return newLogos;
          });
        }, 500);
      }
    }, [position]);

    return (
      <div className="relative w-full h-20 overflow-hidden bg-white border-x border-gray-200">
        <div 
          ref={containerRef}
          className="absolute w-full"
          style={{ 
            transform: `translateY(${position}px)`,
            transition: 'transform 1s ease-in-out',
            top: '-80px' // Start with one tile above
          }}
        >
          {logos.map((logo, idx) => (
            <div 
              key={`${logo}-${idx}`}
              className="h-20 flex items-center justify-center group"
            >
              <span className="text-gray-700 text-sm font-medium px-3 text-center tracking-wide group-hover:text-night-blue transition-colors duration-300">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="w-full bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-headline font-bold text-black mb-4">
            Vertraut von führenden <span className="text-night-blue">Finanzinstituten</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Über 200 der weltweit führenden Banken, Asset Manager und Fintech-Unternehmen 
            vertrauen auf Volatile für ihre Market Data und Analytics Anforderungen.
          </p>
        </div>

        {/* Logo Carousel */}
        <div className="relative">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 border-t border-b border-gray-200 rounded-lg overflow-hidden">
            {[0, 6, 12, 18, 24, 30].map((startIdx, colIdx) => (
              <LogoColumn 
                key={colIdx}
                startIndex={startIdx}
                delay={colIdx * 150}
              />
            ))}
          </div>
          
          {/* Gradient overlays for smooth edges */}
          <div className="absolute top-0 left-0 right-0 h-4 bg-gradient-to-b from-white to-transparent pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-white to-transparent pointer-events-none"></div>
          
          {/* Accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-night-blue to-transparent"></div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12 text-center">
          <div>
            <div className="text-2xl font-headline font-bold text-night-blue mb-1">200+</div>
            <div className="text-gray-600 text-sm">Global Clients</div>
          </div>
          <div>
            <div className="text-2xl font-headline font-bold text-night-blue mb-1">$50T+</div>
            <div className="text-gray-600 text-sm">Assets Under Management</div>
          </div>
          <div>
            <div className="text-2xl font-headline font-bold text-night-blue mb-1">100+</div>
            <div className="text-gray-600 text-sm">Countries Covered</div>
          </div>
          <div>
            <div className="text-2xl font-headline font-bold text-night-blue mb-1">15+</div>
            <div className="text-gray-600 text-sm">Years of Excellence</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoFlipCarousel;