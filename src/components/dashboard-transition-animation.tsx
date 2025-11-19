import React, { useState } from 'react';

const DashboardAnimation = () => {
  const [activeView, setActiveView] = useState('sales');

  // Mock chart component with Volatile design
  const ChartPlaceholder = ({ type, color1, color2 }) => {
    if (type === 'map') {
      return (
        <div className="w-full h-full flex items-center justify-center bg-gray-50">
          <div className="w-4/5 h-4/5 bg-gradient-to-br from-gray-200 to-gray-100 rounded-sm"></div>
        </div>
      );
    }
    
    if (type === 'donut') {
      return (
        <div className="w-full h-full flex items-center justify-center">
          <div className="relative w-24 h-24">
            <svg className="w-full h-full transform -rotate-90">
              <circle cx="48" cy="48" r="36" stroke="#E8E8E8" strokeWidth="20" fill="none" />
              <circle cx="48" cy="48" r="36" stroke="#4A90E2" strokeWidth="20" fill="none"
                      strokeDasharray={`${2 * Math.PI * 36 * 0.75} ${2 * Math.PI * 36}`} />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-light text-gray-800">75%</span>
            </div>
          </div>
        </div>
      );
    }
    
    if (type === 'line') {
      return (
        <div className="w-full h-full flex items-center justify-center p-4">
          <svg className="w-full h-3/4" viewBox="0 0 300 100" preserveAspectRatio="xMidYMid meet">
            <path d="M 10 80 L 60 70 L 110 50 L 160 40 L 210 30 L 260 20 L 290 15" 
                  stroke="#4A90E2" strokeWidth="2" fill="none" />
            <path d="M 10 75 L 60 65 L 110 60 L 160 55 L 210 50 L 260 45 L 290 40" 
                  stroke="#666666" strokeWidth="1" fill="none" opacity="0.5" />
          </svg>
        </div>
      );
    }
    
    if (type === 'bar') {
      return (
        <div className="w-full h-full flex items-end justify-around px-4 pb-4">
          {[40, 60, 45, 70, 55, 65].map((height, i) => (
            <div key={i} className="flex-1 mx-0.5">
              <div className={`w-full ${i % 2 === 0 ? 'bg-blue-500' : 'bg-gray-300'} rounded-t-sm`} 
                   style={{height: `${height}%`, backgroundColor: i % 2 === 0 ? '#4A90E2' : '#E8E8E8'}}></div>
            </div>
          ))}
        </div>
      );
    }
    
    if (type === 'funnel') {
      return (
        <div className="w-full h-full flex items-center justify-center px-4">
          <div className="flex items-center space-x-1 w-full">
            {[
              { value: '100%', height: 'h-20', color: '#4A90E2' },
              { value: '65%', height: 'h-16', color: '#4A90E2' },
              { value: '52%', height: 'h-14', color: '#4A90E2' },
              { value: '27%', height: 'h-12', color: '#666666' }
            ].map((item, i) => (
              <div key={i} className="flex-1 flex flex-col items-center">
                <span className="text-xs font-semibold px-2 py-1 rounded-sm mb-2 text-white"
                      style={{backgroundColor: item.color}}>
                  {item.value}
                </span>
                <div className={`w-full ${item.height} rounded-sm opacity-30`}
                     style={{backgroundColor: item.color}}></div>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    return <div className="w-full h-full bg-gray-100 rounded-sm"></div>;
  };

  // Dashboard views data
  const dashboardViews = {
    sales: {
      topLeft: { title: 'US Lead Locations', type: 'map', subtitle: 'Sales' },
      topCenter: { title: 'Won Deals by Region', type: 'line', subtitle: 'Deals' },
      topRight: { title: 'Target Plan Distribution', type: 'donut', subtitle: 'Workspaces' },
      bottomLeft: { title: 'Total Pipeline MRR', type: 'bar', subtitle: 'Workspaces' },
      bottomCenter: { title: 'Pipeline Funnel', type: 'funnel', subtitle: 'Sales' },
      bottomRight: { title: 'Average Deal Size', type: 'bar', subtitle: 'Deals' }
    },
    revenue: {
      topLeft: { title: 'Paid Accounts', type: 'line', subtitle: 'Workspaces' },
      topCenter: { title: 'Accounts by Plan', type: 'bar', subtitle: 'Workspaces' },
      topRight: { title: 'EU Account Distribution', type: 'map', subtitle: 'Workspaces' },
      bottomLeft: { title: 'Won Accounts by Plan', type: 'donut', subtitle: 'Sales' },
      bottomCenter: { title: 'Total ARR', type: 'line', subtitle: 'Workspaces' },
      bottomRight: { title: 'Pipeline Funnel', type: 'funnel', subtitle: 'Sales' }
    },
    growth: {
      topLeft: { title: 'Active and Habit', type: 'donut', subtitle: 'Workspaces' },
      topCenter: { title: 'Seat Counts', type: 'bar', subtitle: 'Workspaces' },
      topRight: { title: 'Cumulative Leads', type: 'line', subtitle: 'Deals' },
      bottomLeft: { title: 'Pipeline Funnel', type: 'funnel', subtitle: 'Sales' },
      bottomCenter: { title: 'New Leads by Source', type: 'bar', subtitle: 'Deals' },
      bottomRight: { title: 'Workspace Demographics', type: 'map', subtitle: 'Workspaces' }
    }
  };

  const currentView = dashboardViews[activeView];

  const Card = ({ data, className }) => (
    <div className={`bg-white rounded-sm border border-gray-200 overflow-hidden ${className}`}
         style={{borderColor: '#E0E0E0'}}>
      <div className="px-4 py-3 border-b" style={{borderColor: '#E0E0E0'}}>
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-normal" style={{color: '#333333'}}>{data.title}</h3>
          <span className="text-xs px-2 py-0.5 rounded-sm" 
                style={{backgroundColor: '#E8E8E8', color: '#666666'}}>
            {data.subtitle}
          </span>
        </div>
      </div>
      <div className="h-48 relative">
        {/* Fade out animation */}
        <div 
          className="absolute inset-0 transition-opacity duration-300"
          style={{ opacity: 0 }}
        >
          <ChartPlaceholder type={data.type} color1={data.color1} color2={data.color2} />
        </div>
        
        {/* Fade in animation */}
        <div 
          className="absolute inset-0 transition-opacity duration-300"
          style={{ 
            opacity: 1,
            animation: 'fadeIn 0.5s ease-out'
          }}
        >
          <ChartPlaceholder type={data.type} color1={data.color1} color2={data.color2} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen" style={{backgroundColor: '#E8E8E8'}}>
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          {/* Grid Container */}
          <div className="grid grid-cols-3 gap-4" style={{ gridTemplateRows: 'auto auto' }}>
            
            {/* Top Left Card */}
            <Card data={currentView.topLeft} className="" />
            
            {/* Top Center - Navigation Panel spans 1 column */}
            <div className="row-span-2 flex items-center justify-center">
              <div className="bg-white rounded-sm border p-6 w-full max-w-sm" 
                   style={{borderColor: '#E0E0E0'}}>
                <div className="flex items-center mb-6" style={{color: '#666666'}}>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                  <span className="text-sm font-normal">Reports</span>
                  <span className="ml-auto text-sm" style={{color: '#999999'}}>
                    {activeView === 'sales' ? 'Sales Leads' : 
                     activeView === 'revenue' ? 'Revenue Operations' : 
                     'Product-led Growth'}
                  </span>
                </div>

                {/* Buttons */}
                <div className="space-y-3">
                  <button
                    onClick={() => setActiveView('sales')}
                    className={`w-full text-left px-4 py-3 rounded-sm transition-all duration-300 border ${
                      activeView === 'sales' 
                        ? '' 
                        : ''
                    }`}
                    style={{
                      backgroundColor: activeView === 'sales' ? '#000000' : 'transparent',
                      color: activeView === 'sales' ? '#FFFFFF' : '#000000',
                      borderColor: activeView === 'sales' ? '#000000' : '#E0E0E0'
                    }}
                  >
                    <div className="font-normal">Sales Leads</div>
                    <div className="text-xs mt-0.5 opacity-80">An overview of our pipeline.</div>
                  </button>
                  
                  <button
                    onClick={() => setActiveView('revenue')}
                    className={`w-full text-left px-4 py-3 rounded-sm transition-all duration-300 border ${
                      activeView === 'revenue' 
                        ? '' 
                        : ''
                    }`}
                    style={{
                      backgroundColor: activeView === 'revenue' ? '#000000' : 'transparent',
                      color: activeView === 'revenue' ? '#FFFFFF' : '#000000',
                      borderColor: activeView === 'revenue' ? '#000000' : '#E0E0E0'
                    }}
                  >
                    <div className="font-normal">Revenue Operations</div>
                    <div className="text-xs mt-0.5 opacity-80">Dashboard for revenue data.</div>
                  </button>
                  
                  <button
                    onClick={() => setActiveView('growth')}
                    className={`w-full text-left px-4 py-3 rounded-sm transition-all duration-300 border ${
                      activeView === 'growth' 
                        ? '' 
                        : ''
                    }`}
                    style={{
                      backgroundColor: activeView === 'growth' ? '#000000' : 'transparent',
                      color: activeView === 'growth' ? '#FFFFFF' : '#000000',
                      borderColor: activeView === 'growth' ? '#000000' : '#E0E0E0'
                    }}
                  >
                    <div className="font-normal">Product-led Growth</div>
                    <div className="text-xs mt-0.5 opacity-80">Data for our PLG reporting.</div>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Top Right Card */}
            <Card data={currentView.topRight} className="" />
            
            {/* Bottom Left Card */}
            <Card data={currentView.bottomLeft} className="" />
            
            {/* Bottom Center Card (already occupied by nav panel, so this goes in middle bottom) */}
            <Card data={currentView.bottomCenter} className="" />
            
            {/* Bottom Right Card */}
            <Card data={currentView.bottomRight} className="" />
            
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
};

export default DashboardAnimation;