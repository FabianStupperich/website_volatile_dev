import React, { useState, useEffect, useRef } from 'react';
import { BarChart3, TrendingUp, Globe, Database, Shield, Zap } from 'lucide-react';

const DashboardAnimation = () => {
  const [activeView, setActiveView] = useState('market-data');
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Mock chart component adapted for Volatile
  const ChartPlaceholder = ({ type }) => {
    if (type === 'map') {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-4/5 h-4/5 bg-gradient-to-br from-night-blue/20 to-night-blue/10 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src='/images/visualizations/market_model.png' 
                alt="Medium-term forecast visualization"
                className="w-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      );
    }
    
    if (type === 'donut') {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-4/5 h-4/5 bg-gradient-to-br from-night-blue/20 to-night-blue/10 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src='/images/visualizations/short_term_forecasts.png' 
                alt="Medium-term forecast visualization"
                className="h-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      );
    }
    
    if (type === 'line') {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-4/5 h-4/5 bg-gradient-to-br from-night-blue/20 to-night-blue/10 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
                <img 
                  src="/images/climate_data.png" 
                  alt="Volatile Power Grid Infrastructure"
                  className="h-full object-cover rounded-lg"
                />
            </div>
          </div>
        </div>
      );
    }
    
    if (type === 'bar') {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-4/5 h-4/5 bg-gradient-to-br from-night-blue/20 to-night-blue/10 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="/images/visualizations/emission_intensity_map.png" 
                alt="Electricity Intensities Mapped"
                className="w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      );
    }
    
    if (type === 'long') {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-4/5 h-4/5 bg-gradient-to-br from-night-blue/20 to-night-blue/10 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src='/images/visualizations/long_term_forecasts.png' 
                alt="Medium-term forecast visualization"
                className="max-w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      );
    }
    
    if (type === 'grid') {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-4/5 h-4/5 bg-gradient-to-br from-night-blue/20 to-night-blue/10 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="/images/visualizations/Netzmodell.png" 
                alt="Volatile Power Grid Infrastructure"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      );
    }
    
    if (type === 'intelligence') {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-4/5 h-4/5 bg-gradient-to-br from-night-blue/20 to-night-blue/10 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src='/images/visualizations/hpfc_yearly_analysis.png' 
                alt="Medium-term forecast visualization"
                className="max-w-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      );
    }
    
    if (type === 'ai') {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="w-4/5 h-4/5 bg-gradient-to-br from-night-blue/20 to-night-blue/10 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <img 
                src="/images/visualizations/ensemble_forecast_plot.svg"
                alt="Ensemble forecast plot"
                className="max-w-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      );
    }
    
    if (type === 'analytics') {
      return (
        <div className="w-full h-full flex items-center justify-center p-4">
          <div className="grid grid-cols-2 gap-2 w-full h-full">
            <div className="bg-gradient-to-br from-night-blue/20 to-night-blue/10 rounded-lg flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-night-blue" />
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg flex items-center justify-center">
              <TrendingUp className="h-8 w-8 text-blue-600" />
            </div>
            <div className="bg-gradient-to-br from-gray-100 to-gray-50 rounded-lg flex items-center justify-center">
              <Database className="h-8 w-8 text-gray-600" />
            </div>
            <div className="bg-gradient-to-br from-night-blue/10 to-blue-50 rounded-lg flex items-center justify-center">
              <Shield className="h-8 w-8 text-night-blue" />
            </div>
          </div>
        </div>
      );
    }
    
    return <div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg"></div>;
  };

  // Dashboard views data
  const dashboardViews = {
    'market-data': {
      topLeft: { title: 'European Coverage', type: 'map', subtitle: 'Real-time' },
      topRight: { title: 'Forecasts', type: 'donut', subtitle: 'Reliability' },
      bottomLeft: { title: 'Fundamentals', type: 'line', subtitle: 'Trends' },
      bottomRight: { title: 'Sustainability', type: 'bar', subtitle: 'Analytics' }
    },
    'analytics': {
      topLeft: { title: 'AI-Powered Analytics', type: 'ai', subtitle: 'AI-Powered' },
      topRight: { title: 'Portfolio Optimization', type: 'analytics', subtitle: 'Success' },
      bottomLeft: { title: 'Customized Scenarios', type: 'analytics', subtitle: 'Growth' },
      bottomRight: { title: 'Locational Analytics', type: 'analytics', subtitle: 'Excellence' }
    },
    'insights': {
      topLeft: { title: 'Market Intelligence', type: 'intelligence', subtitle: 'Insights' },
      topRight: { title: 'Volatility Scenarios', type: 'long', subtitle: 'Coverage' },
      bottomLeft: { title: 'Demand Development', type: 'analytics', subtitle: 'Speed' },
      bottomRight: { title: 'Infrastructure', type: 'grid', subtitle: 'Reliability' }
    }
  };

  const currentView = dashboardViews[activeView];

  const Card = ({ data, className }) => (
    <div className={`bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 ${className}`}>
      <div className="px-4 py-3 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-900">{data.title}</h3>
          <span className="text-xs px-2 py-1 rounded-full bg-night-blue/10 text-night-blue font-medium">
            {data.subtitle}
          </span>
        </div>
      </div>
      <div className="h-32 relative">
        <div 
          className="absolute inset-0 transition-all duration-500 ease-out"
          style={{ 
            opacity: 1,
            transform: isVisible ? 'translateY(0)' : 'translateY(10px)'
          }}
        >
          <ChartPlaceholder type={data.type} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-4xl mx-auto" ref={containerRef}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        
        {/* Top Left Card */}
        <Card data={currentView.topLeft} className="" />
        
        {/* Center Navigation Panel */}
        <div className="row-span-2 flex items-center justify-center">
          <div className="bg-white rounded-xl border border-gray-200 p-6 w-full shadow-sm">
            <div className="flex items-center mb-6 text-gray-600">
              <BarChart3 className="w-5 h-5 mr-2 text-night-blue" />
              <span className="text-sm font-medium">Volatile Platform</span>
            </div>

            {/* Navigation Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => setActiveView('market-data')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 border ${
                  activeView === 'market-data' 
                    ? 'bg-night-blue text-white border-night-blue shadow-sm' 
                    : 'bg-transparent text-gray-700 border-gray-200 hover:border-night-blue/30 hover:bg-night-blue/5'
                }`}
              >
                <div className="font-medium text-sm">Market Data</div>
                <div className="text-xs mt-0.5 opacity-80">Real-time global coverage</div>
              </button>
              
              <button
                onClick={() => setActiveView('analytics')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 border ${
                  activeView === 'analytics' 
                    ? 'bg-night-blue text-white border-night-blue shadow-sm' 
                    : 'bg-transparent text-gray-700 border-gray-200 hover:border-night-blue/30 hover:bg-night-blue/5'
                }`}
              >
                <div className="font-medium text-sm">Analytics Services</div>
                <div className="text-xs mt-0.5 opacity-80">Custom solutions & consulting</div>
              </button>
              
              <button
                onClick={() => setActiveView('insights')}
                className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-300 border ${
                  activeView === 'insights' 
                    ? 'bg-night-blue text-white border-night-blue shadow-sm' 
                    : 'bg-transparent text-gray-700 border-gray-200 hover:border-night-blue/30 hover:bg-night-blue/5'
                }`}
              >
                <div className="font-medium text-sm">Market Insights</div>
                <div className="text-xs mt-0.5 opacity-80">Intelligence & research</div>
              </button>
            </div>
          </div>
        </div>
        
        {/* Top Right Card */}
        <Card data={currentView.topRight} className="" />
        
        {/* Bottom Left Card */}
        <Card data={currentView.bottomLeft} className="" />
        
        {/* Bottom Right Card */}
        <Card data={currentView.bottomRight} className="" />
        
      </div>
    </div>
  );
};

export default DashboardAnimation;