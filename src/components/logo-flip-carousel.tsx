import React, { useState, useEffect, useRef } from 'react';

const LogoFlipCarousel = () => {
  // Logo sets for cycling through
  const allLogos = [
    'Pinterest', 'GONG', 'BURGER KING', 'ramp', 'Moody\'s', 'PHILIPS',
    'Orange Theory', 'reckitt', 'Pfizer', 'stripe', 'Unity', 'NVIDIA',
    'Experian', 'BOEING', 'Adobe', 'DOORDASH', 'OpenAI', 'Pernod Ricard',
    'Lyft', 'Quest', 'Uber', 'Spotify', 'Netflix', 'Amazon'
  ];

  const LogoColumn = ({ startIndex, delay }) => {
    const [position, setPosition] = useState(0);
    const [logos, setLogos] = useState([]);
    const containerRef = useRef(null);
    
    // Initialize logos
    useEffect(() => {
      const initialLogos = [];
      for (let i = 0; i < 10; i++) {
        initialLogos.push(allLogos[(startIndex + i) % allLogos.length]);
      }
      setLogos(initialLogos);
    }, [startIndex]);

    useEffect(() => {
      const interval = setInterval(() => {
        // Start animation after delay
        setTimeout(() => {
          setPosition(prev => prev - 128); // Move up by one tile height (h-32 = 128px)
        }, delay);
      }, 2000);

      return () => clearInterval(interval);
    }, [delay]);

    // Reset position when it gets too far
    useEffect(() => {
      if (position <= -640) { // After 5 slides
        setTimeout(() => {
          setPosition(0);
          // Rotate logos array
          setLogos(prev => {
            const newLogos = [...prev];
            for (let i = 0; i < 5; i++) {
              newLogos.push(newLogos.shift());
            }
            return newLogos;
          });
        }, 500);
      }
    }, [position]);

    return (
      <div className="relative w-full h-32 overflow-hidden bg-gray-950 border-x border-gray-800">
        <div 
          ref={containerRef}
          className="absolute w-full"
          style={{ 
            transform: `translateY(${position}px)`,
            transition: 'transform 0.8s ease-in-out',
            top: '-128px' // Start with one tile above
          }}
        >
          {logos.map((logo, idx) => (
            <div 
              key={`${logo}-${idx}`}
              className="h-32 flex items-center justify-center"
            >
              <span className="text-white text-lg font-normal px-4 text-center tracking-wide">
                {logo}
              </span>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-full">
        <div className="relative">
          <div className="grid grid-cols-6 border-t border-b border-gray-800">
            {[0, 4, 8, 12, 16, 20].map((startIdx, colIdx) => (
              <LogoColumn 
                key={colIdx}
                startIndex={startIdx}
                delay={colIdx * 100}
              />
            ))}
          </div>
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"></div>
        </div>
      </div>
    </div>
  );
};

export default LogoFlipCarousel;