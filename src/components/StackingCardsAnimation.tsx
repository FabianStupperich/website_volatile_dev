import React, { useState, useEffect, useRef } from 'react';
import { Building, BarChart3, Users, TrendingUp } from 'lucide-react';

const StackingCardsAnimation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  const cards = [
    {
      title: "Investment Banking",
      content: "Führende Investmentbanken nutzen unsere Echtzeit-Marktdaten für Handelsstrategien, Risikomanagement und Client Advisory Services.",
      icon: Building,
      bgColor: "from-blue-100 to-indigo-100",
      stats: { metric: "60%", label: "Latenz-Reduktion" }
    },
    {
      title: "Asset Management",
      content: "Asset Manager verwenden unsere Analytics für Portfolio-Optimierung, Performance-Attribution und ESG-Bewertungen.",
      icon: BarChart3,
      bgColor: "from-green-100 to-emerald-100",
      stats: { metric: "+18%", label: "Performance Steigerung" }
    },
    {
      title: "Corporate Finance",
      content: "Unternehmen nutzen unsere Market Intelligence für M&A-Transaktionen, Unternehmensbewertungen und strategische Finanzplanung.",
      icon: Users,
      bgColor: "from-purple-100 to-violet-100",
      stats: { metric: "40%", label: "Schnellere Due Diligence" }
    },
    {
      title: "Risk Management",
      content: "Risikomanager setzen auf unsere fortschrittlichen Analytics für Echtzeit-Risikobewertung und Compliance-Monitoring.",
      icon: TrendingUp,
      bgColor: "from-orange-100 to-red-100",
      stats: { metric: "30%", label: "Risiko-Reduktion" }
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on how much of the section has been scrolled
      if (sectionTop <= 0 && sectionTop + sectionHeight >= windowHeight) {
        // Section is actively being scrolled through
        const scrolledDistance = Math.abs(sectionTop);
        const totalScrollDistance = sectionHeight - windowHeight;
        const progress = Math.min(Math.max(scrolledDistance / totalScrollDistance, 0), 1);
        setScrollProgress(progress);
      } else if (sectionTop > 0) {
        // Section hasn't been reached yet
        setScrollProgress(0);
      } else if (sectionTop + sectionHeight < windowHeight) {
        // Section has been completely scrolled past
        setScrollProgress(1);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Advanced easing functions for ultra-smooth animations
  const easeOutQuart = (t) => {
    return 1 - Math.pow(1 - t, 4);
  };

  const easeInOutQuart = (t) => {
    return t < 0.5 ? 8 * t * t * t * t : 1 - Math.pow(-2 * t + 2, 4) / 2;
  };

  const easeOutExpo = (t) => {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
  };

  const getCardStyles = (index) => {
    const totalCards = cards.length;
    
    // Extended phases for smoother transitions
    const cardAnimationPhase = 0.75; // Longer individual animations
    const stackingPhase = 0.9; // Longer stacking phase
    
    // Overlapping card animations for smoother flow
    const progressPerCard = cardAnimationPhase / (totalCards + 1);
    const cardStartProgress = index * progressPerCard * 0.8; // Overlap animations
    const cardEndProgress = cardStartProgress + (progressPerCard * 1.5);
    
    if (scrollProgress <= cardStartProgress) {
      // Card hasn't started yet - below viewport
      return {
        transform: `translateY(120vh) scale(0.9)`,
        opacity: 0,
        zIndex: index + 10,
        filter: 'blur(4px)'
      };
    }
    
    if (scrollProgress > cardStartProgress && scrollProgress <= cardEndProgress) {
      // Card is sliding up with smooth easing
      const cardProgress = Math.min((scrollProgress - cardStartProgress) / (cardEndProgress - cardStartProgress), 1);
      const easedProgress = easeOutQuart(cardProgress);
      const scaleProgress = easeInOutQuart(cardProgress);
      
      return {
        transform: `translateY(${(1 - easedProgress) * 120}vh) scale(${0.9 + (scaleProgress * 0.1)})`,
        opacity: easedProgress,
        zIndex: index + 10,
        filter: `blur(${(1 - easedProgress) * 4}px)`
      };
    }
    
    if (scrollProgress > cardEndProgress && scrollProgress <= stackingPhase) {
      // Card is in stacked position with gentle stacking
      const stackingProgress = (scrollProgress - cardEndProgress) / (stackingPhase - cardEndProgress);
      const easedStackingProgress = easeInOutQuart(stackingProgress);
      
      const finalStackOffset = index * 20; // Reduced for tighter stacking
      const currentStackOffset = easedStackingProgress * finalStackOffset;
      const finalScale = 1 - (index * 0.025); // Reduced scale difference
      const currentScale = 1 - (easedStackingProgress * index * 0.025);
      
      return {
        transform: `translateY(${currentStackOffset}px) scale(${currentScale})`,
        opacity: 1,
        zIndex: index + 10,
        filter: 'blur(0px)'
      };
    }
    
    if (scrollProgress > stackingPhase) {
      // Final phase - cards move up together with smooth exit
      const finalProgress = (scrollProgress - stackingPhase) / (1 - stackingPhase);
      const easedFinalProgress = easeOutExpo(finalProgress);
      
      const stackOffset = index * 20;
      const scale = 1 - (index * 0.025);
      const groupMovement = easedFinalProgress * 100; // Reduced movement
      const fadeOut = Math.max(0, 1 - (easedFinalProgress * 1.2));
      
      return {
        transform: `translateY(${stackOffset}px) translateY(-${groupMovement}vh) scale(${scale * (1 - easedFinalProgress * 0.1)})`,
        opacity: fadeOut,
        zIndex: index + 10,
        filter: `blur(${easedFinalProgress * 2}px)`
      };
    }
    
    return {
      transform: `translateY(0px) scale(1)`,
      opacity: 1,
      zIndex: index + 10,
      filter: 'blur(0px)'
    };
  };

  // Background pattern for cards
  const BackgroundPattern = ({ icon: Icon, bgColor }) => {
    return (
      <div className={`absolute inset-0 bg-gradient-to-br ${bgColor} overflow-hidden`}>
        <div className="absolute inset-0 flex items-center justify-center opacity-15">
          <Icon className="h-40 w-40 text-night-blue" />
        </div>
        {/* Animated geometric shapes */}
        <div className="absolute top-8 right-8 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-12 left-12 w-28 h-28 bg-white/10 rounded-lg rotate-45 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-8 w-12 h-12 bg-white/25 rounded-full animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-white/15 rounded-lg rotate-12 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>
    );
  };

  return (
    <div ref={sectionRef} className="relative" style={{ height: '400vh' }}>
      {/* Fixed background with subtle animation */}
      <div className="fixed inset-0 bg-gradient-to-b from-night-blue via-blue-900 to-gray-900 pointer-events-none" 
           style={{ zIndex: -1 }}>
        {/* Animated background elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" style={{ animationDuration: '4s' }}></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-300 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      {scrollProgress < 0.05 && (
        <div className="fixed top-8 left-1/2 transform -translate-x-1/2 text-white text-sm opacity-70 z-50 animate-bounce">
          <div className="text-center">
            <div className="mb-2">Scroll to explore use cases</div>
            <div className="w-6 h-10 border-2 border-white rounded-full mx-auto relative">
              <div className="w-1 h-3 bg-white rounded-full absolute top-2 left-1/2 transform -translate-x-1/2 animate-bounce"></div>
            </div>
          </div>
        </div>
      )}
      
      {/* Cards container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Cards - render in reverse order so first card appears on top when stacked */}
        {cards.slice().reverse().map((card, reverseIndex) => {
          const index = cards.length - 1 - reverseIndex; // Get original index
          const styles = getCardStyles(index);
          
          return (
            <div
              key={index}
              className="absolute w-full max-w-6xl transition-all duration-75 ease-out"
              style={{
                ...styles,
                willChange: 'transform, opacity, filter' // Optimize for animations
              }}
            >
              <div className="mx-8 bg-white rounded-3xl shadow-2xl overflow-hidden flex h-[75vh] backdrop-blur-sm">
                {/* Text content - left side */}
                <div className="w-1/2 p-12 flex flex-col justify-center bg-white/95 backdrop-blur-sm">
                  <div className="flex items-center mb-6">
                    <div className="bg-night-blue text-white w-14 h-14 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                      <card.icon className="h-7 w-7" />
                    </div>
                    <h2 className="text-4xl font-headline font-bold text-gray-900">
                      {card.title}
                    </h2>
                  </div>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {card.content}
                  </p>
                  
                  {/* Stats */}
                  <div className="bg-gradient-to-r from-light-grey to-gray-50 rounded-xl p-6 mb-8 shadow-inner">
                    <div className="text-center">
                      <div className="text-3xl font-headline font-bold text-night-blue mb-2">
                        {card.stats.metric}
                      </div>
                      <div className="text-gray-600 text-sm font-medium">
                        {card.stats.label}
                      </div>
                    </div>
                  </div>
                  
                  <button className="bg-night-blue text-white px-8 py-4 rounded-xl font-semibold hover:bg-blue-700 transition-all duration-300 self-start shadow-lg hover:shadow-xl transform hover:scale-105">
                    Case Study ansehen
                  </button>
                </div>
                
                {/* Visual pattern - right side */}
                <div className="w-1/2 relative">
                  <BackgroundPattern icon={card.icon} bgColor={card.bgColor} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StackingCardsAnimation;