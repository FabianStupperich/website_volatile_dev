import React, { useState, useEffect, useRef } from 'react';

const StackingCardsScroll = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);

  const cards = [
    {
      title: "Card One",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "abstract-waves",
      bgColor: "from-teal-100 to-blue-100"
    },
    {
      title: "Card Two",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "architecture",
      bgColor: "from-green-100 to-yellow-100"
    },
    {
      title: "Card Three",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "building",
      bgColor: "from-yellow-100 to-orange-100"
    },
    {
      title: "Card Four",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: "modern-architecture",
      bgColor: "from-orange-100 to-pink-100"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = Math.min(scrollTop / scrollHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getCardStyles = (index) => {
    const totalCards = cards.length;
    // Adjust timing so cards appear earlier in the scroll
    const progressPerCard = 0.7 / totalCards; // Use 70% of scroll for cards
    const cardProgress = Math.max(0, Math.min(1, (scrollProgress - (index * progressPerCard)) / progressPerCard));
    
    // First card starts below viewport too
    if (cardProgress === 0) {
      return {
        transform: `translateY(100vh)`,
        opacity: 0,
        zIndex: index + 10
      };
    }
    
    // Active card sliding up
    if (cardProgress > 0 && cardProgress < 1) {
      return {
        transform: `translateY(${(1 - cardProgress) * 100}vh)`,
        opacity: 1,
        zIndex: index + 10
      };
    }
    
    // Stacked cards - check if we're in the final scroll phase
    const finalScrollPhase = scrollProgress > 0.8;
    const finalScrollProgress = (scrollProgress - 0.8) / 0.2; // Progress from 0 to 1 in final 20%
    
    // Normal stacked position with group movement
    const stackOffset = index * 40;
    const scale = 1 - (index * 0.05);
    const groupUpwardMovement = finalScrollPhase ? finalScrollProgress * 100 : 0;
    
    return {
      transform: `translateY(${stackOffset}px) translateY(-${groupUpwardMovement}vh) scale(${scale})`,
      opacity: 1,
      zIndex: index + 10
    };
  };

  // Abstract background patterns for cards
  const BackgroundPattern = ({ type }) => {
    if (type === "abstract-waves") {
      return (
        <div className="absolute inset-0 overflow-hidden">
          <svg className="w-full h-full" viewBox="0 0 400 400">
            <defs>
              <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor:'#60A5FA', stopOpacity:0.3}} />
                <stop offset="100%" style={{stopColor:'#34D399', stopOpacity:0.3}} />
              </linearGradient>
            </defs>
            <path d="M0,100 Q100,50 200,100 T400,100 L400,400 L0,400 Z" fill="url(#wave1)" />
            <path d="M0,200 Q100,150 200,200 T400,200 L400,400 L0,400 Z" fill="rgba(34, 197, 94, 0.2)" />
            <path d="M0,300 Q100,250 200,300 T400,300 L400,400 L0,400 Z" fill="rgba(168, 85, 247, 0.1)" />
          </svg>
        </div>
      );
    } else if (type === "architecture" || type === "building" || type === "modern-architecture") {
      return (
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0">
            {/* Building silhouettes with gradient overlay */}
            <div className="absolute bottom-0 left-0 w-32 h-48 bg-gray-300 opacity-20"></div>
            <div className="absolute bottom-0 left-24 w-40 h-64 bg-gray-400 opacity-20"></div>
            <div className="absolute bottom-0 right-32 w-36 h-56 bg-gray-300 opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-28 h-40 bg-gray-400 opacity-20"></div>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="relative bg-gray-900" ref={containerRef}>
      {/* Fixed background */}
      <div className="fixed inset-0 bg-gradient-to-b from-purple-900 via-purple-800 to-gray-900" />
      
      {/* Scroll indicator */}
      {scrollProgress < 0.1 && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-50 z-50 animate-pulse">
          Scroll to explore
        </div>
      )}
      
      {/* Cards container with extra height for scrolling */}
      <div className="relative" style={{ height: `${(cards.length + 1) * 100}vh` }}>>
        {/* Centered cards wrapper */}
        <div className="fixed inset-0 flex items-center justify-center">
          {/* Cards - rendered in normal order but with adjusted z-index */}
          {cards.map((card, index) => (
            <div
              key={index}
              className="absolute w-full max-w-5xl transition-all duration-700 ease-out"
              style={getCardStyles(index)}
            >
              <div className="mx-8 bg-white rounded-3xl shadow-2xl overflow-hidden flex h-[70vh]">
                {/* Text content - left side */}
                <div className="w-1/2 p-16 flex flex-col justify-center bg-white">
                  <h2 className="text-6xl font-light mb-8 text-gray-800">
                    {card.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                    {card.content}
                  </p>
                  <button className="bg-orange-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-orange-700 transition-colors self-start">
                    Read more
                  </button>
                </div>
                
                {/* Image/Pattern - right side */}
                <div className={`w-1/2 relative bg-gradient-to-br ${card.bgColor}`}>
                  <BackgroundPattern type={card.image} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Final content section - positioned after all cards */}
      <div className="relative bg-gray-900 min-h-screen flex items-center justify-center px-8" style={{ marginTop: '200vh' }}>
        <div className="max-w-4xl text-center relative z-50">
          <p className="text-xl text-gray-300 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem repellat non
            ratione eum provident quaerat obcaecati dicta autem voluptates sit cum quis
            distinctio, atque sint commodi reprehenderit perspiciatis iure velit molestiae eos
            molestias ipsa nihil quia? Porro tempore in fugit, aspernatur et temporibus
            aliquam magnam adipisci deleniti dicta repellat alias nostrum impedit quidem
            odit excepturi nam. Itaque numquam unde quae dignissimos exercitationem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StackingCardsScroll;