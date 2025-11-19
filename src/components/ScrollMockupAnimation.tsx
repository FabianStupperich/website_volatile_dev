import React, { useState, useEffect, useRef } from 'react';
import { TrendingUp, BarChart3, Database, Globe, Shield, Zap } from 'lucide-react';

const ScrollMockupAnimation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  // Content sections adapted for Volatile's financial market data theme
  const sections = [
    {
      title: "Real-time Market Data at Your Fingertips",
      subtitle: "Market Data & Insights",
      description: "Access comprehensive real-time market data from over 100 global exchanges with sub-millisecond latency.",
      mockupContent: "Volatile Market Data Platform",
      tabs: ["Real-time Feeds", "Historical Data", "Market Analytics"],
      icon: Database
    },
    {
      title: "Advanced Analytics & Custom Solutions",
      subtitle: "Analytics Services",
      description: "Build sophisticated trading algorithms, risk models, and custom analytics with our professional services team.\n\nIntegrate multiple data sources, create custom indicators, and deploy machine learning models for predictive analytics. Perfect for algorithmic trading, portfolio optimization, and risk management.",
      mockupContent: "Volatile Analytics Workbench",
      tabs: ["Algorithm Builder", "Risk Models", "ML Pipeline"],
      icon: BarChart3
    },
    {
      title: "Global Market Intelligence",
      subtitle: "Market Insights & Research",
      description: "Transform raw market data into actionable insights with our comprehensive research platform. Access sector analysis, trend reports, and market intelligence from our team of expert analysts.",
      mockupContent: "Volatile Research Portal",
      tabs: ["Sector Analysis", "Trend Reports", "Market Intelligence"],
      icon: Globe
    },
    {
      title: "Enterprise-Grade Infrastructure",
      subtitle: "Reliability & Security",
      description: "Built for mission-critical financial applications with 99.99% uptime, enterprise security, and 24/7 expert support. Every transaction is audited and compliant with financial regulations.",
      mockupContent: "Volatile Control Center",
      tabs: ["System Status", "Security Logs", "Performance Metrics"],
      icon: Shield
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !sectionRef.current) return;
      
      const sectionRect = sectionRef.current.getBoundingClientRect();
      const sectionTop = sectionRect.top;
      const sectionHeight = sectionRect.height;
      const windowHeight = window.innerHeight;
      
      // Only calculate progress when section is in view
      if (sectionTop <= windowHeight && sectionTop + sectionHeight >= 0) {
        // Calculate how much of the section has been scrolled through
        const scrolledIntoView = Math.max(0, windowHeight - sectionTop);
        const totalScrollableHeight = sectionHeight;
        const progress = Math.min(Math.max(scrolledIntoView / totalScrollableHeight, 0), 1);
        
        setScrollProgress(progress);
        
        // Determine active section based on scroll progress
        const currentSection = Math.min(
          Math.max(Math.floor(progress * sections.length), 0),
          sections.length - 1
        );
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sections.length]);

  // Calculate mockup transform based on scroll
  const initialScale = 0.6;
  const finalScale = 0.9;
  const scaleProgress = Math.min(scrollProgress * 2, 1);
  const mockupScale = initialScale + (scaleProgress * (finalScale - initialScale));
  
  // Position calculations
  const initialX = 30;
  const initialY = -20;
  const finalX = 35;
  const finalY = 0;
  
  const mockupX = initialX + (scaleProgress * (finalX - initialX));
  const mockupY = initialY + (scaleProgress * (finalY - initialY));

  return (
    <div ref={sectionRef} className="relative bg-gradient-to-br from-gray-900 via-night-blue to-gray-900" style={{ height: '120vh' }}>
      {/* Content Container */}
      <div ref={containerRef} className="relative z-10 h-full">
        {/* Fixed Mockup - Financial Dashboard */}
        <div 
          className="sticky top-1/2 left-1/2 transition-all duration-700 ease-out"
          style={{
            transform: `translate(${-50 + mockupX}%, ${-50 + mockupY}%) scale(${mockupScale})`,
            width: '800px',
            maxWidth: '50vw'
          }}
        >
          <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-200">
            {/* Browser Chrome */}
            <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b border-gray-200">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="bg-white rounded px-4 py-1 text-sm text-gray-600 w-96 text-center border">
                  {sections[activeSection]?.mockupContent || 'Loading...'}
                </div>
              </div>
            </div>
            
            {/* Mockup Content */}
            <div className="p-6 bg-gray-50" style={{ height: '350px' }}>
              {/* Header */}
              <div className="bg-night-blue text-white px-4 py-3 rounded-t-lg flex justify-between items-center">
                <div className="flex items-center space-x-3">
                  {React.createElement(sections[activeSection]?.icon || Database, { 
                    className: "h-5 w-5" 
                  })}
                  <h3 className="font-semibold text-base">{sections[activeSection]?.mockupContent || 'Loading...'}</h3>
                </div>
                <div className="flex space-x-4 text-sm">
                  <span>Markets</span>
                  <span>Analytics</span>
                  <span>Reports</span>
                  <span>Settings</span>
                </div>
              </div>
              
              {/* Tabs */}
              <div className="bg-white border-x border-gray-200 px-4 py-3">
                <div className="flex space-x-6">
                  {(sections[activeSection]?.tabs || []).map((tab, idx) => (
                    <button 
                      key={idx}
                      className={`pb-2 border-b-2 text-sm transition-colors ${
                        idx === 0 
                          ? 'border-night-blue text-night-blue font-medium' 
                          : 'border-transparent text-gray-600 hover:text-night-blue'
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Content Area */}
              <div className="bg-white border border-gray-200 rounded-b-lg p-4" style={{ height: 'calc(100% - 100px)' }}>
                <div className="space-y-3">
                  {/* Different content for each section */}
                  {activeSection === 0 && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-medium text-green-800">S&P 500</span>
                            <TrendingUp className="h-3 w-3 text-green-600" />
                          </div>
                          <div className="text-sm font-bold text-green-700">4,127.83</div>
                          <div className="text-xs text-green-600">+0.85%</div>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-medium text-blue-800">NASDAQ</span>
                            <TrendingUp className="h-3 w-3 text-blue-600" />
                          </div>
                          <div className="text-sm font-bold text-blue-700">12,845.78</div>
                          <div className="text-xs text-blue-600">+1.23%</div>
                        </div>
                        <div className="bg-red-50 border border-red-200 rounded-lg p-2">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-medium text-red-800">EUR/USD</span>
                            <div className="h-3 w-3 text-red-600 transform rotate-180">
                              <TrendingUp className="h-3 w-3" />
                            </div>
                          </div>
                          <div className="text-sm font-bold text-red-700">1.0842</div>
                          <div className="text-xs text-red-600">-0.12%</div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-3 h-20">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-gray-700">Live Market Feed</span>
                          <span className="text-xs text-green-600 flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></div>
                            Live
                          </span>
                        </div>
                        <div className="h-12 flex items-end justify-around">
                          {[65, 72, 68, 85, 79, 92, 88, 95, 90, 87, 94, 98].map((height, i) => (
                            <div 
                              key={i} 
                              className="w-3 bg-night-blue rounded-t transition-all duration-300" 
                              style={{height: `${height}%`}}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeSection === 1 && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-2 gap-3">
                        <div className="bg-gray-50 rounded-lg p-3">
                          <h4 className="font-medium text-sm mb-2 flex items-center">
                            <BarChart3 className="h-4 w-4 mr-2 text-night-blue" />
                            Algorithm Performance
                          </h4>
                          <div className="space-y-1 text-xs">
                            <div className="flex justify-between">
                              <span>Momentum Strategy</span>
                              <span className="text-green-600 font-medium">+12.4%</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Mean Reversion</span>
                              <span className="text-green-600 font-medium">+8.7%</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Arbitrage Bot</span>
                              <span className="text-green-600 font-medium">+15.2%</span>
                            </div>
                          </div>
                        </div>
                        <div className="bg-gray-50 rounded-lg p-3">
                          <h4 className="font-medium text-sm mb-2 flex items-center">
                            <Zap className="h-4 w-4 mr-2 text-night-blue" />
                            Risk Metrics
                          </h4>
                          <div className="space-y-1 text-xs">
                            <div className="flex justify-between">
                              <span>VaR (95%)</span>
                              <span className="text-orange-600 font-medium">-2.1%</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Sharpe Ratio</span>
                              <span className="text-blue-600 font-medium">1.84</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Max Drawdown</span>
                              <span className="text-red-600 font-medium">-5.3%</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="bg-night-blue/5 border border-night-blue/20 rounded-lg p-3">
                        <div className="flex items-center mb-2">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mr-2 animate-pulse"></div>
                          <span className="text-xs font-medium text-night-blue">ML Model Training</span>
                        </div>
                        <div className="text-xs text-gray-600">
                          Training LSTM model on 5-year EUR/USD dataset... 
                          <span className="text-night-blue font-medium">87% complete</span>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeSection === 2 && (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-sm flex items-center">
                          <Globe className="h-4 w-4 mr-2 text-night-blue" />
                          Global Market Analysis
                        </h4>
                        <span className="text-xs text-gray-600">Updated 2 min ago</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <div className="bg-green-50 border-l-4 border-green-400 p-2 rounded">
                            <div className="text-xs font-medium text-green-800">US Markets</div>
                            <div className="text-xs text-green-700">Strong bullish momentum in tech sector</div>
                          </div>
                          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-2 rounded">
                            <div className="text-xs font-medium text-yellow-800">European Markets</div>
                            <div className="text-xs text-yellow-700">Mixed signals, ECB policy uncertainty</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="bg-blue-50 border-l-4 border-blue-400 p-2 rounded">
                            <div className="text-xs font-medium text-blue-800">Asian Markets</div>
                            <div className="text-xs text-blue-700">Recovery in manufacturing data</div>
                          </div>
                          <div className="bg-red-50 border-l-4 border-red-400 p-2 rounded">
                            <div className="text-xs font-medium text-red-800">Commodities</div>
                            <div className="text-xs text-red-700">Oil prices under pressure</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeSection === 3 && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-green-50 border border-green-200 rounded-lg p-2 text-center">
                          <div className="text-lg font-bold text-green-700">99.99%</div>
                          <div className="text-xs text-green-600">Uptime</div>
                        </div>
                        <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 text-center">
                          <div className="text-lg font-bold text-blue-700">{'<1ms'}</div>
                          <div className="text-xs text-blue-600">Latency</div>
                        </div>
                        <div className="bg-purple-50 border border-purple-200 rounded-lg p-2 text-center">
                          <div className="text-lg font-bold text-purple-700">24/7</div>
                          <div className="text-xs text-purple-600">Support</div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium text-sm flex items-center">
                            <Shield className="h-4 w-4 mr-2 text-night-blue" />
                            System Status
                          </h4>
                          <span className="text-xs text-green-600 flex items-center">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                            All Systems Operational
                          </span>
                        </div>
                        {[
                          { service: 'Market Data Feed', status: 'Operational', color: 'green' },
                          { service: 'Analytics Engine', status: 'Operational', color: 'green' },
                          { service: 'API Gateway', status: 'Operational', color: 'green' }
                        ].map((item, i) => (
                          <div key={i} className="flex items-center justify-between p-1 bg-gray-50 rounded text-xs">
                            <div className="flex items-center space-x-2">
                              <div className={`w-2 h-2 bg-${item.color}-500 rounded-full`}></div>
                              <span className="font-medium">{item.service}</span>
                            </div>
                            <span className={`text-${item.color}-600 font-medium`}>
                              {item.status}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content - positioned to the left */}
        <div className="sticky top-1/2 left-8 lg:left-12 transform -translate-y-1/2 max-w-lg text-white z-20">
          <h1 className="text-3xl lg:text-4xl font-headline font-bold mb-4 leading-tight">
            {sections[activeSection]?.title || ''}
          </h1>
          <h2 className="text-lg lg:text-xl text-blue-200 mb-6 font-medium">
            {sections[activeSection]?.subtitle || ''}
          </h2>
          <p className="text-gray-300 text-sm lg:text-base leading-relaxed whitespace-pre-line max-w-md">
            {sections[activeSection]?.description || ''}
          </p>
          
          {/* Additional UI elements for certain sections */}
          {activeSection === 0 && (
            <button className="mt-6 bg-white text-night-blue px-6 py-3 rounded-lg flex items-center space-x-2 text-sm font-semibold hover:bg-gray-100 transition-colors">
              <Database className="h-4 w-4" />
              <span>EXPLORE DATA FEEDS</span>
            </button>
          )}
          
          {activeSection === 1 && (
            <button className="mt-6 bg-night-blue/20 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg flex items-center space-x-2 text-sm font-semibold hover:bg-night-blue/30 transition-colors">
              <BarChart3 className="h-4 w-4" />
              <span>BUILD ANALYTICS</span>
            </button>
          )}
          
          {activeSection === 2 && (
            <button className="mt-6 bg-night-blue/20 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg flex items-center space-x-2 text-sm font-semibold hover:bg-night-blue/30 transition-colors">
              <Globe className="h-4 w-4" />
              <span>ACCESS RESEARCH</span>
            </button>
          )}
          
          {activeSection === 3 && (
            <button className="mt-6 bg-night-blue/20 backdrop-blur-sm border border-white/20 text-white px-6 py-3 rounded-lg flex items-center space-x-2 text-sm font-semibold hover:bg-night-blue/30 transition-colors">
              <Shield className="h-4 w-4" />
              <span>VIEW STATUS</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ScrollMockupAnimation;