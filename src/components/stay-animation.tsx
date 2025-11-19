import React, { useState, useEffect } from 'react';

const StayAnimation = () => {
  const [rotation, setRotation] = useState(0);
  const words = ['informed.', 'ahead.', 'volatile.'];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => {
        const newRotation = prev + 120;
        // Reset bei 360° für nahtlose Endlosschleife
        return newRotation >= 360 ? 0 : newRotation;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="text-6xl font-semibold flex items-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
        <span style={{ color: '#000000' }}>stay </span>
        
        <div 
          className="relative overflow-hidden"
          style={{
            width: '280px',
            height: '1.2em'
          }}
        >
          <div 
            className="absolute transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateY(${-rotation * (1.2 / 120)}em)`,
              height: '3.6em', // 3 * 1.2em für alle 3 Wörter
              left: '0',
              top: '0'
            }}
          >
            {words.map((word, index) => (
              <div
                key={index}
                style={{
                  height: '1.2em',
                  background: 'linear-gradient(90deg, #Fe5000 0%, #C800FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {word}
              </div>
            ))}
            
            {/* Dupliziere für nahtlose Schleife */}
            {words.map((word, index) => (
              <div
                key={`duplicate-${index}`}
                style={{
                  height: '1.2em',
                  background: 'linear-gradient(90deg, #Fe5000 0%, #C800FF 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                {word}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');
      `}</style>
    </div>
  );
};

export default StayAnimation;