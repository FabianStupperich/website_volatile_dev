import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { TrendingUp, BarChart3, Globe, Clock, Database, Zap, Shield, Users } from 'lucide-react';

const ProductScrollAnimation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [displayIndex, setDisplayIndex] = useState(0);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Use scroll-based animation for ultra-smooth transitions
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const sections = [
    {
      title: 'Real-time Market Data Excellence',
      description: 'Access comprehensive real-time market data from over 100 global exchanges with sub-millisecond latency. Our enterprise-grade infrastructure ensures you never miss a market movement.',
      mockup: 'market-data'
    },
    {
      title: 'Advanced Analytics & Intelligence',
      description: 'Transform raw data into actionable insights with our AI-powered analytics platform. Custom algorithms and machine learning models help you identify opportunities and manage risk.',
      mockup: 'analytics'
    },
    {
      title: 'Global Coverage & Reliability',
      description: 'Enterprise-grade infrastructure with 99.99% uptime, global data coverage, and 24/7 expert support. Built for mission-critical financial applications.',
      mockup: 'global'
    }
  ];

  // Mock chart component adapted for Volatile
  const MockupContent = ({ type }: { type: string }) => {
    if (type === 'market-data') {
      return (
        <div className="h-full flex flex-col">
          {/* Market Data Feed */}
          <div className="flex-1 space-y-2">
            {[
              { symbol: 'S&P 500', price: '4,127.83', change: '+0.85%', color: 'green' },
              { symbol: 'NASDAQ', price: '12,845.78', change: '+1.23%', color: 'green' },
              { symbol: 'EUR/USD', price: '1.0842', change: '-0.12%', color: 'red' }
            ].map((item, i) => (
              <div 
                key={item.symbol}
                className="flex justify-between items-center p-2 bg-gray-50 rounded text-xs"
              >
                <div>
                  <div className="font-medium">{item.symbol}</div>
                  <div className="text-gray-500 text-xs">Real-time</div>
                </div>
                <div className="text-right">
                  <div className="font-bold">{item.price}</div>
                  <div className={`text-xs ${item.color === 'green' ? 'text-green-600' : 'text-red-600'}`}>
                    {item.change}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Chart placeholder */}
          <div className="bg-gray-50 rounded p-2 h-16 flex items-end justify-around mt-2">
            {[65, 72, 68, 85, 79, 92, 88, 95, 90].map((height, i) => (
              <div 
                key={i}
                className="w-1.5 bg-night-blue rounded-t"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      );
    }

    if (type === 'analytics') {
      return (
        <div className="h-full flex flex-col">
          {/* Performance metrics */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            {[
              { label: 'Portfolio Return', value: '+12.4%', icon: TrendingUp },
              { label: 'Risk Score', value: '7.2', icon: Shield },
              { label: 'Sharpe Ratio', value: '1.84', icon: BarChart3 },
              { label: 'Volatility', value: '15.3%', icon: Zap }
            ].map((metric, i) => (
              <div 
                key={metric.label}
                className="bg-gray-50 rounded p-2 text-center"
              >
                <metric.icon className="h-3 w-3 text-night-blue mx-auto mb-1" />
                <div className="text-xs text-gray-600 truncate">{metric.label}</div>
                <div className="font-bold text-sm">{metric.value}</div>
              </div>
            ))}
          </div>
          
          {/* AI Insights */}
          <div className="bg-blue-50 border border-blue-200 rounded p-2 flex-1">
            <div className="flex items-center mb-1">
              <Database className="h-3 w-3 text-night-blue mr-1" />
              <span className="text-xs font-medium text-night-blue">AI Insight</span>
            </div>
            <p className="text-xs text-gray-700 leading-tight">
              Market volatility expected to increase by 15% based on current indicators.
            </p>
          </div>
        </div>
      );
    }

    if (type === 'global') {
      return (
        <div className="h-full flex flex-col">
          {/* Status indicators */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            {[
              { label: 'Uptime', value: '99.99%', color: 'green' },
              { label: 'Latency', value: '<1ms', color: 'green' },
              { label: 'Coverage', value: '100+', color: 'blue' },
              { label: 'Support', value: '24/7', color: 'blue' }
            ].map((stat, i) => (
              <div 
                key={stat.label}
                className="text-center p-2 bg-gray-50 rounded"
              >
                <div className={`text-sm font-bold ${
                  stat.color === 'green' ? 'text-green-600' : 'text-night-blue'
                }`}>
                  {stat.value}
                </div>
                <div className="text-xs text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
          
          {/* Regional status */}
          <div className="space-y-1 flex-1">
            {[
              { region: 'Americas', status: 'Operational' },
              { region: 'Europe', status: 'Operational' },
              { region: 'Asia-Pacific', status: 'Operational' }
            ].map((region, i) => (
              <div 
                key={region.region}
                className="flex justify-between items-center p-2 bg-gray-50 rounded"
              >
                <span className="text-xs font-medium">{region.region}</span>
                <div className="flex items-center">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full mr-1"></div>
                  <span className="text-xs text-green-600">{region.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    return null;
  };

  const handleSectionChange = (newIndex: number) => {
    if (newIndex !== activeIndex) {
      // Clear any existing timeout
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
      
      // Update active index immediately for text
      setActiveIndex(newIndex);
      
      // Delay display index update slightly for smooth visual transition
      transitionTimeoutRef.current = setTimeout(() => {
        setDisplayIndex(newIndex);
      }, 100);
    }
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
      }
    };
  }, []);

  // Enhanced Section component with sharp, crisp text rendering
  const Section = ({ section, index }: { section: typeof sections[0], index: number }) => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [ref, inView] = useInView({
      threshold: 0.6,
      triggerOnce: false,
      rootMargin: '-20% 0px -20% 0px'
    });

    // Get scroll progress for this specific section
    const { scrollYProgress: sectionProgress } = useScroll({
      target: sectionRef,
      offset: ["start center", "end center"]
    });

    // Transform values based on scroll progress - optimized for sharpness
    const opacity = useTransform(sectionProgress, [0, 0.25, 0.75, 1], [0.3, 1, 1, 0.3]);
    const y = useTransform(sectionProgress, [0, 0.25, 0.75, 1], [30, 0, 0, -30]);
    const scale = useTransform(sectionProgress, [0, 0.25, 0.75, 1], [0.98, 1, 1, 0.98]);

    // Use useEffect to handle section changes when inView changes
    useEffect(() => {
      if (inView && activeIndex !== index) {
        handleSectionChange(index);
      }
    }, [inView, index, activeIndex]);

    return (
      <div ref={sectionRef} className="min-h-[80vh] flex items-center">
        <div ref={ref}>
          <motion.h2 
            className="text-3xl lg:text-4xl font-headline font-bold mb-6 text-gray-900"
            style={{ 
              opacity,
              y,
              scale,
              // Ensure crisp text rendering
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              textRendering: 'optimizeLegibility'
            }}
            transition={{ 
              type: "spring",
              stiffness: 120,
              damping: 25,
              mass: 0.8
            }}
          >
            {section.title}
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-600 max-w-xl leading-relaxed"
            style={{ 
              opacity: useTransform(opacity, [0, 1], [0.2, 0.85]),
              y: useTransform(y, [0, 30], [0, 20]),
              scale,
              // Ensure crisp text rendering
              WebkitFontSmoothing: 'antialiased',
              MozOsxFontSmoothing: 'grayscale',
              textRendering: 'optimizeLegibility'
            }}
            transition={{ 
              type: "spring",
              stiffness: 100,
              damping: 20,
              mass: 0.8
            }}
          >
            {section.description}
          </motion.p>
        </div>
      </div>
    );
  };

  return (
    <div ref={containerRef} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row relative min-h-screen gap-16">
          
          {/* Left: Text Sections with ultra-sharp scrolling */}
          <div className="flex-1 flex flex-col gap-16 z-10">
            {sections.map((section, i) => (
              <Section key={i} section={section} index={i} />
            ))}
          </div>
          
          {/* Right: Smooth morphing mockup window */}
          <div className="flex-1 sticky top-20 h-[80vh] flex items-center justify-center">
            <div className="w-full max-w-md">
              <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
                {/* Header - Fixed */}
                <div className="bg-night-blue text-white px-4 py-3 flex justify-between items-center h-12">
                  <h3 className="font-semibold text-sm">Volatile Platform</h3>
                  <div className="flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    <span className="text-xs">Live</span>
                  </div>
                </div>
                
                {/* Content area - Smooth morphing */}
                <div className="h-64 p-4 relative overflow-hidden bg-white">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={displayIndex}
                      initial={{ opacity: 0, scale: 0.98, rotateX: 5 }}
                      animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                      exit={{ opacity: 0, scale: 1.02, rotateX: -5 }}
                      transition={{ 
                        duration: 0.4,
                        ease: [0.25, 0.46, 0.45, 0.94],
                        opacity: { duration: 0.3 },
                        scale: { duration: 0.4 },
                        rotateX: { duration: 0.4 }
                      }}
                      className="absolute inset-4 flex flex-col"
                      style={{ transformPerspective: 1000 }}
                    >
                      <MockupContent type={sections[displayIndex].mockup} />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductScrollAnimation;