import React, { useState, useEffect, useRef } from 'react';

const ScrollMockupAnimation = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(0);
  const containerRef = useRef(null);

  // Content sections with corresponding mockup data
  const sections = [
    {
      title: "The app layer for every use case",
      subtitle: "AI & LLMs",
      description: "Build agents, workflows, and apps with the power of AI",
      mockupContent: "Dream Health App",
      tabs: ["Scheduler agent", "Diagnosis agent", "Insurance agent"]
    },
    {
      title: "The app layer for AI & LLMs",
      subtitle: "AI & LLMs",
      description: "Build agents, workflows, and apps with the power of AI\n\nIntegrate AI models, databases, tools, and systems to build powerful solutions while maintaining production-grade reliability. Create content moderation tools, document processing workflows, custom agents, model performance monitors, and more.",
      mockupContent: "Dream Health App - Scheduler View",
      tabs: ["Scheduler agent", "Diagnosis agent", "Insurance agent"]
    },
    {
      title: "The app layer for data teams",
      subtitle: "Transform raw data into actionable insights",
      description: "Go beyond business intelligence. Build apps that read and write from your data sources using SQL. Create interactive dashboards, admin panels, data quality monitoring systems, customer insights views, and experiment tracking systems.",
      mockupContent: "NexHaul Logistics Dashboard",
      tabs: ["Tracking", "Business metrics", "Insights"]
    },
    {
      title: "The app layer for support teams",
      subtitle: "Empower support teams with effective tools",
      description: "Build internal software to triage tickets, track common issues, and manage knowledge bases—all without engineering bottlenecks. Every action is automatically audited and secure.",
      mockupContent: "Customer Support Dashboard",
      tabs: ["All priorities", "Normal", "Medium", "High"]
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      
      const scrollTop = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = containerRef.current.scrollHeight;
      
      // Calculate scroll progress (0 to 1)
      const maxScroll = documentHeight - windowHeight;
      const progress = Math.min(Math.max(scrollTop / maxScroll, 0), 1);
      setScrollProgress(progress);
      
      // Determine active section based on scroll position
      if (maxScroll > 0) {
        const sectionHeight = maxScroll / (sections.length - 1);
        const currentSection = Math.min(
          Math.max(Math.floor(scrollTop / sectionHeight), 0),
          sections.length - 1
        );
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate mockup transform based on scroll
  // Initial: small and positioned top-right
  // After scroll: larger and positioned to the right (not overlapping text)
  const initialScale = 0.5;
  const finalScale = 0.85;
  const scaleProgress = Math.min(scrollProgress * 3, 1); // Quick scale up
  const mockupScale = initialScale + (scaleProgress * (finalScale - initialScale));
  
  // Position calculations
  const initialX = 20; // Start more to the right
  const initialY = -30; // Start higher up
  const finalX = 25; // End position to the right
  const finalY = 0; // Centered vertically
  
  const mockupX = initialX + (scaleProgress * (finalX - initialX));
  const mockupY = initialY + (scaleProgress * (finalY - initialY));

  // Background opacity transition
  const bgOpacity = Math.min(scrollProgress * 3, 1);

  return (
    <div ref={containerRef} className="relative">
      {/* Hero Section with Nature Background */}
      <div 
        className="fixed inset-0 transition-opacity duration-500"
        style={{ opacity: 1 - bgOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100 to-green-100">
          {/* Clouds */}
          <div className="absolute top-20 left-10 w-32 h-20 bg-white rounded-full opacity-70"></div>
          <div className="absolute top-40 right-20 w-40 h-24 bg-white rounded-full opacity-60"></div>
          <div className="absolute top-60 left-1/4 w-36 h-20 bg-white rounded-full opacity-50"></div>
        </div>
      </div>

      {/* Dark Background (fades in) */}
      <div 
        className="fixed inset-0 bg-gray-900 transition-opacity duration-500"
        style={{ opacity: bgOpacity }}
      />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen" style={{ height: `${sections.length * 100}vh` }}>
        {/* Fixed Mockup - positioned to avoid text overlap */}
        <div 
          className="fixed top-1/2 left-1/2 transition-all duration-700 ease-out"
          style={{
            transform: `translate(${-50 + mockupX}%, ${-50 + mockupY}%) scale(${mockupScale})`,
            width: '700px',
            maxWidth: '45vw'
          }}
        >
          <div className="bg-white rounded-lg shadow-2xl overflow-hidden border border-gray-200">
            {/* Browser Chrome */}
            <div className="bg-gray-100 px-4 py-3 flex items-center space-x-2 border-b border-gray-200">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="bg-white rounded px-4 py-1 text-sm text-gray-600 w-96 text-center">
                  {sections[activeSection]?.mockupContent || 'Loading...'}
                </div>
              </div>
            </div>
            
            {/* Mockup Content */}
            <div className="p-6 bg-gray-50" style={{ height: '400px' }}>
              {/* Header */}
              <div className="bg-green-600 text-white px-4 py-2 rounded-t-lg flex justify-between items-center">
                <h3 className="font-semibold text-base">{sections[activeSection]?.mockupContent || 'Loading...'}</h3>
                <div className="flex space-x-4 text-sm">
                  <span>Health records</span>
                  <span>AI tools</span>
                  <span>Billing</span>
                  <span>Account</span>
                </div>
              </div>
              
              {/* Tabs */}
              <div className="bg-white border-x border-gray-200 px-4 py-2">
                <div className="flex space-x-6">
                  {(sections[activeSection]?.tabs || []).map((tab, idx) => (
                    <button 
                      key={idx}
                      className={`pb-2 border-b-2 text-sm ${
                        idx === 0 ? 'border-green-600 text-green-600 font-medium' : 'border-transparent text-gray-600'
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
                      <div className="bg-gray-100 rounded p-3">
                        <p className="text-xs text-gray-600 mb-1">Scheduling agent</p>
                        <p className="text-sm text-gray-800">Can you show me available induction times for Labor & Delivery in the East Wing for a patient due August 17</p>
                      </div>
                      <div className="bg-blue-50 border border-blue-200 rounded p-3">
                        <p className="text-xs font-medium text-blue-800 mb-1">Using tool: Get Calendar events</p>
                        <p className="text-xs text-gray-700">Here are the available time slots for Labor & Delivery...</p>
                      </div>
                    </div>
                  )}
                  
                  {activeSection === 1 && (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 rounded p-3">
                        <h4 className="font-medium text-sm mb-2">General</h4>
                        <div className="space-y-1 text-xs">
                          <div>Resource: Retool Agent</div>
                          <div>Agent: Scheduling Agent</div>
                        </div>
                      </div>
                      <div className="bg-gray-50 rounded p-3">
                        <h4 className="font-medium text-sm mb-2">Preview</h4>
                        <div className="text-xs text-gray-600">
                          agentChat1.agentInputs
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeSection === 2 && (
                    <div className="space-y-3">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium text-sm">Global tracking</h4>
                        <span className="text-xs text-gray-600">42 Tickets - May 28, 2025</span>
                      </div>
                      <div className="bg-gray-50 rounded p-3 h-32">
                        <div className="h-full flex items-end justify-around">
                          {[30, 45, 60, 55, 70, 80, 75, 85, 90].map((height, i) => (
                            <div key={i} className="w-6 bg-teal-400 rounded-t" style={{height: `${height}%`}}></div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                  
                  {activeSection === 3 && (
                    <div className="space-y-2">
                      <div className="flex justify-between items-center mb-3">
                        <h4 className="font-medium text-sm">Customers</h4>
                        <select className="text-xs border rounded px-2 py-1">
                          <option>All priorities</option>
                        </select>
                      </div>
                      {['High', 'Medium', 'Medium'].map((priority, i) => (
                        <div key={i} className="flex items-center justify-between p-2 bg-gray-50 rounded text-xs">
                          <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
                            <div>
                              <p className="font-medium">Case ID: {1001 + i}</p>
                            </div>
                          </div>
                          <span className={`px-2 py-1 rounded ${
                            priority === 'High' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'
                          }`}>
                            {priority}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Text Content - positioned to the left, avoiding mockup overlap */}
        {scrollProgress > 0.1 && (
          <div className="fixed left-12 top-1/2 transform -translate-y-1/2 max-w-lg text-white">
            <h1 className="text-4xl lg:text-5xl font-light mb-4 leading-tight">
              {sections[activeSection]?.title || ''}
            </h1>
            <h2 className="text-lg lg:text-xl text-gray-400 mb-6">
              {sections[activeSection]?.subtitle || ''}
            </h2>
            <p className="text-gray-300 text-sm lg:text-base leading-relaxed whitespace-pre-line max-w-md">
              {sections[activeSection]?.description || ''}
            </p>
            
            {/* Additional UI elements for certain sections */}
            {activeSection === 1 && (
              <button className="mt-6 bg-white text-gray-900 px-6 py-2 rounded flex items-center space-x-2 text-sm font-medium">
                <span>GET ANY MODEL</span>
                <div className="flex -space-x-2">
                  <div className="w-6 h-6 bg-blue-400 rounded"></div>
                  <div className="w-6 h-6 bg-purple-400 rounded"></div>
                  <div className="w-6 h-6 bg-orange-400 rounded"></div>
                </div>
              </button>
            )}
            
            {activeSection === 2 && (
              <button className="mt-6 bg-gray-800 text-white px-6 py-2 rounded flex items-center space-x-2 text-sm">
                <span>USE YOUR DATA</span>
                <span className="text-gray-400">Operations team</span>
              </button>
            )}
            
            {activeSection === 3 && (
              <button className="mt-6 bg-gray-800 text-white px-6 py-2 rounded flex items-center space-x-2 text-sm">
                <span>BRING YOUR APPS</span>
                <span className="text-gray-400">Support teams</span>
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ScrollMockupAnimation;