import React, { useState, useEffect } from 'react';
import { Building, TrendingUp, Shield, Users, Target, BarChart3, Lightbulb, ArrowRight, CheckCircle, AlertTriangle, Calculator, PieChart, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import StackingCardsAnimation from '../../components/StackingCardsAnimation';
import GetStartedSection from '../../components/GetStartedSection';

const UseCases = () => {
  const [activeUseCase, setActiveUseCase] = useState(0);

  // Use cases for the animation
  const useCases = [
    {
      title: 'Investment Banking',
      icon: Building,
      color: 'from-blue-400 to-blue-600',
      description: 'Führende Investmentbanken nutzen unsere Echtzeit-Marktdaten'
    },
    {
      title: 'Asset Management',
      icon: BarChart3,
      color: 'from-green-400 to-green-600',
      description: 'Asset Manager verwenden unsere Analytics für Portfolio-Optimierung'
    },
    {
      title: 'Corporate Finance',
      icon: Users,
      color: 'from-purple-400 to-purple-600',
      description: 'Unternehmen nutzen unsere Market Intelligence für M&A-Transaktionen'
    },
    {
      title: 'Risk Management',
      icon: Shield,
      color: 'from-red-400 to-red-600',
      description: 'Risikomanager setzen auf unsere fortschrittlichen Analytics'
    }
  ];

  // Cycle through use cases
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveUseCase((prev) => (prev + 1) % useCases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Using Reporting page style */}
      <section className="relative bg-black text-white py-20 overflow-hidden min-h-screen flex items-center">
        {/* 3D Use Cases Visualization - Right Side */}
        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-1/2 h-full flex items-center justify-center">
          <div className="relative w-96 h-96">
            {/* Central rotating element */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              {/* Main central cube */}
              <div className="w-24 h-24 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg transform rotate-45 shadow-2xl relative">
                <div className="absolute inset-2 border border-white/20 rounded"></div>
                <div className="absolute top-2 left-2 w-4 h-4 bg-white/30 rounded-full"></div>
              </div>
              
              {/* Orbiting use case elements */}
              {useCases.map((useCase, index) => {
                const angle = (index * 90) + (activeUseCase * 90);
                const radius = 120;
                const x = Math.cos((angle * Math.PI) / 180) * radius;
                const y = Math.sin((angle * Math.PI) / 180) * radius;
                const isActive = index === activeUseCase;
                
                return (
                  <div
                    key={index}
                    className={`absolute w-16 h-16 rounded-lg transform transition-all duration-1000 ease-in-out ${
                      isActive ? 'scale-125 shadow-2xl' : 'scale-100 shadow-lg'
                    }`}
                    style={{
                      left: `${x}px`,
                      top: `${y}px`,
                      transform: `translate(-50%, -50%) scale(${isActive ? 1.25 : 1}) rotate(${angle}deg)`,
                    }}
                  >
                    <div className={`w-full h-full bg-gradient-to-br ${useCase.color} rounded-lg flex items-center justify-center`}>
                      <useCase.icon className="h-8 w-8 text-white" />
                    </div>
                    
                    {/* Connecting lines */}
                    <div 
                      className={`absolute top-1/2 left-1/2 w-24 h-0.5 bg-gradient-to-r from-white/40 to-transparent origin-left transition-opacity duration-500 ${
                        isActive ? 'opacity-100' : 'opacity-30'
                      }`}
                      style={{
                        transform: `translate(-50%, -50%) rotate(${180 + angle}deg)`,
                      }}
                    ></div>
                  </div>
                );
              })}
              
              {/* Data flow particles */}
              <div className="absolute top-1/4 right-1/3">
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-100"></div>
                  <div className="w-1 h-1 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                </div>
              </div>
              
              <div className="absolute bottom-1/3 left-1/4">
                <div className="flex space-x-1">
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse delay-300"></div>
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse delay-400"></div>
                  <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse delay-500"></div>
                </div>
              </div>
            </div>
            
            {/* Floating brand/tech indicators */}
            <div className="absolute top-12 left-8 w-10 h-8 bg-white/10 backdrop-blur-sm rounded shadow-sm flex items-center justify-center">
              <span className="text-xs font-bold text-white">AI</span>
            </div>
            
            <div className="absolute top-20 right-12 w-10 h-8 bg-white/10 backdrop-blur-sm rounded shadow-sm flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
            </div>
            
            <div className="absolute bottom-16 left-4 w-10 h-8 bg-white/10 backdrop-blur-sm rounded shadow-sm flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-blue-400" />
            </div>
            
            <div className="absolute bottom-8 right-8 w-10 h-8 bg-white/10 backdrop-blur-sm rounded shadow-sm flex items-center justify-center">
              <span className="text-xs font-bold text-white">ML</span>
            </div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Category Label */}
            <div className="mb-6">
              <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase">
                Industrieunternehmen & Data Center
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8 text-white">
              Volatile für
              <br />
              <span className="font-bold">Nachhaltigkeits</span>
              <br />
              <span className="font-bold">Reporting</span>
            </h1>
            
            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-xl">
              Entdecken Sie, wie führende Unternehmen aus verschiedenen Branchen 
              Volatile für ihre spezifischen Anwendungsfälle nutzen und dabei 
              messbare Erfolge erzielen.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/kontakt"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Portfolio Management erkunden
              </Link>
            </div>
          </div>
        </div>
        
        {/* Active Use Case Display */}
        <div className="absolute bottom-20 right-20 bg-white/10 backdrop-blur-sm rounded-lg p-6 shadow-lg hidden lg:block max-w-xs">
          <div className="flex items-center space-x-3 mb-3">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${useCases[activeUseCase].color} flex items-center justify-center`}>
              {React.createElement(useCases[activeUseCase].icon, { className: "h-6 w-6 text-white" })}
            </div>
            <div>
              <h4 className="font-semibold text-white">{useCases[activeUseCase].title}</h4>
              <p className="text-gray-300 text-sm">{useCases[activeUseCase].description}</p>
            </div>
          </div>
          
          {/* Progress indicator */}
          <div className="flex space-x-1">
            {useCases.map((_, index) => (
              <div
                key={index}
                className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                  index === activeUseCase ? 'bg-green-400' : 'bg-white/30'
                }`}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Floating Performance Indicators */}
        <div className="absolute top-20 left-20 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg hidden lg:block">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div>
              <div className="text-sm font-semibold text-white">200+</div>
              <div className="text-xs text-gray-300">Kunden</div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-40 left-32 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg hidden lg:block">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
            <div>
              <div className="text-sm font-semibold text-white">15+</div>
              <div className="text-xs text-gray-300">Jahre Erfahrung</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-32 left-16 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg hidden lg:block">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-700"></div>
            <div>
              <div className="text-sm font-semibold text-white">99.9%</div>
              <div className="text-xs text-gray-300">Verfügbarkeit</div>
            </div>
          </div>
        </div>
      </section>

       {/* USE CASE 1: Portfolio Management & Tarifierung */}
      <section id="portfolio-value-proposition" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Portfolio Management & Tarifierung:
              <br />
              Optimierte Energieportfolios
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Maximieren Sie Ihre Portfoliorenditen durch datengetriebene Optimierung, präzise Risikobewertung 
              und dynamische Tarifgestaltung basierend auf Echtzeit-Marktdaten.
            </p>
          </div>

          {/* Three Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column - Portfolio Optimization */}
            <div className="space-y-8">
              {/* Green Badge */}
              <div className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                Portfolio Optimization
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Intelligente Portfoliosteuerung für 
                  maximale Rendite-Risiko-Optimierung
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Nutzen Sie unsere fortschrittlichen Algorithmen zur kontinuierlichen Portfoliooptimierung. 
                  Echtzeit-Marktdaten ermöglichen präzise Entscheidungen für bessere Performance.
                </p>
              </div>
            </div>

            {/* Center Column - Portfolio Performance Table */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              {/* Table Header */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Portfolio Performance</h4>
                <p className="text-sm text-gray-600">Aktuelle Positionen & Renditen</p>
              </div>
              
              <div className="space-y-4">
                {/* Row 1 */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-900">DE Power Future Q1</span>
                    <span className="text-xs text-gray-500">50 MW</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-green-600">+12.4%</span>
                  </div>
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-900">TTF Gas Future</span>
                    <span className="text-xs text-gray-500">25 MW</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-xs text-red-600">-3.2%</span>
                  </div>
                </div>

                {/* Row 3 */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-900">Wind Generation</span>
                    <span className="text-xs text-gray-500">100 MW</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-green-600">+8.7%</span>
                  </div>
                </div>

                {/* Row 4 */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-900">Solar PPA</span>
                    <span className="text-xs text-gray-500">75 MW</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-green-600">+15.2%</span>
                  </div>
                </div>

                {/* Row 5 */}
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-900">CO₂ Certificates</span>
                    <span className="text-xs text-gray-500">1000 t</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-green-600">+22.1%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Risk Metrics */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Risk Metrics</h4>
                <p className="text-sm text-gray-600">Risikokennzahlen & Limits</p>
              </div>

              {/* Risk Table */}
              <div className="space-y-3">
                <div className="grid grid-cols-3 gap-4 text-xs font-medium text-gray-500 border-b border-gray-100 pb-2">
                  <span>Metrik</span>
                  <span>Aktuell</span>
                  <span>Limit</span>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm py-2">
                  <span className="text-gray-900">VaR (95%)</span>
                  <span className="text-red-600 font-medium">€2.1M</span>
                  <span className="text-gray-500">€5.0M</span>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm py-2">
                  <span className="text-gray-900">Sharpe Ratio</span>
                  <span className="text-green-600 font-medium">1.84</span>
                  <span className="text-gray-500">{'> 1.5'}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm py-2">
                  <span className="text-gray-900">Max Drawdown</span>
                  <span className="text-orange-600 font-medium">-5.3%</span>
                  <span className="text-gray-500">-10%</span>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm py-2">
                  <span className="text-gray-900">Volatility</span>
                  <span className="text-blue-600 font-medium">15.2%</span>
                  <span className="text-gray-500">{'< 20%'}</span>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm py-2">
                  <span className="text-gray-900">Correlation</span>
                  <span className="text-green-600 font-medium">0.65</span>
                  <span className="text-gray-500">{'< 0.8'}</span>
                </div>
              </div>

              {/* Portfolio Summary */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Total Portfolio Value</span>
                  <span className="text-lg font-bold text-green-600">€45.2M</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            
            {/* Left Column - Dynamic Pricing */}
            <div className="space-y-8">
              {/* Green Badge */}
              <div className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                Dynamic Pricing
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Intelligente Tarifgestaltung basierend auf 
                  Echtzeit-Marktdaten
                </h3>
              </div>

              {/* Pricing Dashboard */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="space-y-4">
                  {/* Current Tariff */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">Aktueller Tarif</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-green-600">€45.67/MWh</span>
                      <span className="text-xs text-green-600">+2.4%</span>
                    </div>
                  </div>

                  {/* Peak Hours */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-sm text-gray-700">Peak Hours (8-20h)</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">€52.30/MWh</span>
                      <span className="text-xs text-red-600">+14.5%</span>
                    </div>
                  </div>

                  {/* Off-Peak Hours */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Off-Peak (20-8h)</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">€38.90/MWh</span>
                      <span className="text-xs text-green-600">-8.2%</span>
                    </div>
                  </div>

                  {/* Weekend Tariff */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Weekend Tariff</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">€41.25/MWh</span>
                      <span className="text-xs text-green-600">-3.1%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Market Forecast */}
            <div className="space-y-8">
              {/* Green Badge */}
              <div className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                Market Forecast
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  7-Tage Prognose für optimale 
                  Handelsstrategien
                </h3>
              </div>

              {/* Forecast Dashboard */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-gray-900">Price Forecast</h4>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs text-green-600">Live</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {/* Today */}
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <span className="text-sm font-medium text-gray-900">Heute</span>
                      <div className="text-xs text-gray-600">Montag, 15. Jan</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-green-600">€45.67/MWh</div>
                      <div className="text-xs text-green-600">Optimal Buy</div>
                    </div>
                  </div>

                  {/* Tomorrow */}
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div>
                      <span className="text-sm font-medium text-gray-900">Morgen</span>
                      <div className="text-xs text-gray-600">Dienstag, 16. Jan</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-orange-600">€48.20/MWh</div>
                      <div className="text-xs text-orange-600">Hold</div>
                    </div>
                  </div>

                  {/* Day After */}
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div>
                      <span className="text-sm font-medium text-gray-900">Übermorgen</span>
                      <div className="text-xs text-gray-600">Mittwoch, 17. Jan</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-red-600">€52.80/MWh</div>
                      <div className="text-xs text-red-600">Sell Signal</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASE 2: Investitionsplanung & Projektierung */}
      <section id="project-value-proposition" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Investitionsplanung & Projektierung:
              <br />
              Datengetriebene Investitionsentscheidungen
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Treffen Sie fundierte Investitionsentscheidungen durch umfassende Marktanalysen, 
              Risikobewertungen und detaillierte Projektrentabilitätsrechnungen.
            </p>
          </div>

          {/* Three Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column - Investment Analysis */}
            <div className="space-y-8">
              {/* Blue Badge */}
              <div className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                Investment Analysis
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Umfassende Investitionsanalyse für 
                  optimale Kapitalallokation
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Bewerten Sie Investitionsmöglichkeiten mit präzisen Marktdaten, 
                  Cashflow-Prognosen und Risiko-Rendite-Analysen für bessere Entscheidungen.
                </p>
              </div>
            </div>

            {/* Center Column - Project Pipeline */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              {/* Table Header */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Project Pipeline</h4>
                <p className="text-sm text-gray-600">Aktuelle Investitionsprojekte</p>
              </div>
              
              <div className="space-y-4">
                {/* Project 1 */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-900">Wind Farm Bavaria</span>
                    <span className="text-xs text-gray-500">150 MW</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-green-600">Due Diligence</span>
                  </div>
                </div>

                {/* Project 2 */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-900">Solar Park NRW</span>
                    <span className="text-xs text-gray-500">200 MW</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-xs text-yellow-600">Evaluation</span>
                  </div>
                </div>

                {/* Project 3 */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-900">Battery Storage</span>
                    <span className="text-xs text-gray-500">50 MWh</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
                    <span className="text-xs text-blue-600">Planning</span>
                  </div>
                </div>

                {/* Project 4 */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-900">Gas Peaker Plant</span>
                    <span className="text-xs text-gray-500">100 MW</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <span className="text-xs text-red-600">On Hold</span>
                  </div>
                </div>

                {/* Project 5 */}
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-900">Offshore Wind</span>
                    <span className="text-xs text-gray-500">500 MW</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-400 rounded-full"></div>
                    <span className="text-xs text-purple-600">Feasibility</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Financial Metrics */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Financial Metrics</h4>
                <p className="text-sm text-gray-600">Wind Farm Bavaria - 150 MW</p>
              </div>

              {/* Financial Table */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-xs font-medium text-gray-500 border-b border-gray-100 pb-2">
                  <span>Kennzahl</span>
                  <span>Wert</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm py-2">
                  <span className="text-gray-900">CAPEX</span>
                  <span className="text-gray-900 font-medium">€225M</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm py-2">
                  <span className="text-gray-900">NPV (10%)</span>
                  <span className="text-green-600 font-medium">€45.2M</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm py-2">
                  <span className="text-gray-900">IRR</span>
                  <span className="text-green-600 font-medium">12.8%</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm py-2">
                  <span className="text-gray-900">Payback</span>
                  <span className="text-blue-600 font-medium">8.2 Jahre</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm py-2">
                  <span className="text-gray-900">LCOE</span>
                  <span className="text-gray-900 font-medium">€42.50/MWh</span>
                </div>
              </div>

              {/* Investment Recommendation */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Recommendation</span>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-bold text-green-600">INVEST</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            
            {/* Left Column - Risk Assessment */}
            <div className="space-y-8">
              {/* Blue Badge */}
              <div className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                Risk Assessment
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Umfassende Risikobewertung für 
                  sichere Investitionsentscheidungen
                </h3>
              </div>

              {/* Risk Dashboard */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="space-y-4">
                  {/* Market Risk */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">Market Risk</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full">
                        <div className="w-1/3 h-2 bg-yellow-400 rounded-full"></div>
                      </div>
                      <span className="text-xs text-yellow-600">Medium</span>
                    </div>
                  </div>

                  {/* Technology Risk */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-sm text-gray-700">Technology Risk</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full">
                        <div className="w-1/4 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      <span className="text-xs text-green-600">Low</span>
                    </div>
                  </div>

                  {/* Regulatory Risk */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Regulatory Risk</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full">
                        <div className="w-2/3 h-2 bg-red-400 rounded-full"></div>
                      </div>
                      <span className="text-xs text-red-600">High</span>
                    </div>
                  </div>

                  {/* Financial Risk */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Financial Risk</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-16 h-2 bg-gray-200 rounded-full">
                        <div className="w-1/3 h-2 bg-yellow-400 rounded-full"></div>
                      </div>
                      <span className="text-xs text-yellow-600">Medium</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Scenario Analysis */}
            <div className="space-y-8">
              {/* Blue Badge */}
              <div className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                Scenario Analysis
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Szenarioanalyse für robuste 
                  Investitionsstrategien
                </h3>
              </div>

              {/* Scenario Dashboard */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-gray-900">NPV Scenarios</h4>
                  <span className="text-xs text-gray-500">Wind Farm Bavaria</span>
                </div>

                <div className="space-y-3">
                  {/* Base Case */}
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div>
                      <span className="text-sm font-medium text-gray-900">Base Case</span>
                      <div className="text-xs text-gray-600">Current market conditions</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-blue-600">€45.2M</div>
                      <div className="text-xs text-blue-600">IRR: 12.8%</div>
                    </div>
                  </div>

                  {/* Optimistic */}
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div>
                      <span className="text-sm font-medium text-gray-900">Optimistic</span>
                      <div className="text-xs text-gray-600">High power prices</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-green-600">€68.7M</div>
                      <div className="text-xs text-green-600">IRR: 16.2%</div>
                    </div>
                  </div>

                  {/* Pessimistic */}
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div>
                      <span className="text-sm font-medium text-gray-900">Pessimistic</span>
                      <div className="text-xs text-gray-600">Low power prices</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-red-600">€18.9M</div>
                      <div className="text-xs text-red-600">IRR: 9.1%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* USE CASE 3: Sustainability Reporting */}
      <section id="sustainability-value-proposition" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Sustainability Reporting:
              <br />
              ESG-konforme Berichterstattung
            </h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Erfüllen Sie alle ESG-Anforderungen mit präzisen Umwelt- und Klimadaten für 
              CSRD-konforme Berichterstattung und strategische Nachhaltigkeitsentscheidungen.
            </p>
          </div>

          {/* Three Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Left Column - ESG Reporting */}
            <div className="space-y-8">
              {/* Emerald Badge */}
              <div className="inline-flex items-center bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                ESG Reporting
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  CSRD-konforme Berichterstattung mit 
                  automatisierter Datenerfassung
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Automatisieren Sie Ihre ESG-Berichterstattung mit präzisen Umweltdaten, 
                  CO₂-Bilanzierung und Compliance-Management für alle regulatorischen Anforderungen.
                </p>
              </div>
            </div>

            {/* Center Column - ESG Metrics */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              {/* Table Header */}
              <div className="mb-4">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">ESG Metrics</h4>
                <p className="text-sm text-gray-600">Aktuelle Nachhaltigkeitskennzahlen</p>
              </div>
              
              <div className="space-y-4">
                {/* CO2 Emissions */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-900">CO₂ Emissions</span>
                    <span className="text-xs text-gray-500">Scope 1+2</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-green-600">-15.2%</span>
                  </div>
                </div>

                {/* Renewable Energy */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-900">Renewable Energy</span>
                    <span className="text-xs text-gray-500">% of total</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-green-600">78.5%</span>
                  </div>
                </div>

                {/* Energy Efficiency */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-900">Energy Efficiency</span>
                    <span className="text-xs text-gray-500">MWh/€M revenue</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-green-600">-8.7%</span>
                  </div>
                </div>

                {/* Water Usage */}
                <div className="flex items-center justify-between py-3 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-900">Water Usage</span>
                    <span className="text-xs text-gray-500">m³/MWh</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <span className="text-xs text-yellow-600">+2.1%</span>
                  </div>
                </div>

                {/* Waste Reduction */}
                <div className="flex items-center justify-between py-3">
                  <div className="flex items-center space-x-3">
                    <span className="text-sm font-medium text-gray-900">Waste Reduction</span>
                    <span className="text-xs text-gray-500">kg/MWh</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <span className="text-xs text-green-600">-22.3%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Compliance Status */}
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
              <div className="mb-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Compliance Status</h4>
                <p className="text-sm text-gray-600">Regulatorische Anforderungen</p>
              </div>

              {/* Compliance Table */}
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4 text-xs font-medium text-gray-500 border-b border-gray-100 pb-2">
                  <span>Regulation</span>
                  <span>Status</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm py-2">
                  <span className="text-gray-900">CSRD</span>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-green-600 text-xs">Compliant</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm py-2">
                  <span className="text-gray-900">EU Taxonomy</span>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-green-600 text-xs">Compliant</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm py-2">
                  <span className="text-gray-900">SFDR</span>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 text-yellow-500 mr-1" />
                    <span className="text-yellow-600 text-xs">In Progress</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm py-2">
                  <span className="text-gray-900">GRI Standards</span>
                  <div className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                    <span className="text-green-600 text-xs">Compliant</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm py-2">
                  <span className="text-gray-900">TCFD</span>
                  <div className="flex items-center">
                    <AlertTriangle className="h-4 w-4 text-red-500 mr-1" />
                    <span className="text-red-600 text-xs">Action Needed</span>
                  </div>
                </div>
              </div>

              {/* Overall Score */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">ESG Score</span>
                  <div className="flex items-center space-x-2">
                    <div className="text-2xl font-bold text-green-600">A-</div>
                    <span className="text-xs text-green-600">+0.2</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Two Columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
            
            {/* Left Column - Carbon Footprint */}
            <div className="space-y-8">
              {/* Emerald Badge */}
              <div className="inline-flex items-center bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                Carbon Footprint
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Präzise CO₂-Bilanzierung für 
                  klimaneutrale Strategien
                </h3>
              </div>

              {/* Carbon Dashboard */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="space-y-4">
                  {/* Scope 1 */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-900">Scope 1 Emissions</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-bold text-gray-900">12,450 tCO₂e</span>
                      <span className="text-xs text-green-600">-8.2%</span>
                    </div>
                  </div>

                  {/* Scope 2 */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-sm text-gray-700">Scope 2 Emissions</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">8,920 tCO₂e</span>
                      <span className="text-xs text-green-600">-15.7%</span>
                    </div>
                  </div>

                  {/* Scope 3 */}
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-700">Scope 3 Emissions</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-900">45,680 tCO₂e</span>
                      <span className="text-xs text-red-600">+3.1%</span>
                    </div>
                  </div>

                  {/* Total */}
                  <div className="flex items-center justify-between border-t border-gray-100 pt-4">
                    <span className="text-sm font-bold text-gray-900">Total Emissions</span>
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-bold text-gray-900">67,050 tCO₂e</span>
                      <span className="text-xs text-green-600">-5.8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Climate Targets */}
            <div className="space-y-8">
              {/* Emerald Badge */}
              <div className="inline-flex items-center bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                <div className="w-2 h-2 bg-white rounded-full mr-2"></div>
                Climate Targets
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Zielverfolgung für Net-Zero 
                  bis 2050
                </h3>
              </div>

              {/* Targets Dashboard */}
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-gray-900">Climate Goals</h4>
                  <span className="text-xs text-gray-500">Progress to 2030</span>
                </div>

                <div className="space-y-4">
                  {/* 2025 Target */}
                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">2025 Target</span>
                      <span className="text-sm font-bold text-green-600">On Track</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{width: '78%'}}></div>
                      </div>
                      <span className="text-xs text-gray-600">78%</span>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">-25% CO₂ reduction</div>
                  </div>

                  {/* 2030 Target */}
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">2030 Target</span>
                      <span className="text-sm font-bold text-blue-600">In Progress</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{width: '45%'}}></div>
                      </div>
                      <span className="text-xs text-gray-600">45%</span>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">-55% CO₂ reduction</div>
                  </div>

                  {/* 2050 Target */}
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-gray-900">2050 Target</span>
                      <span className="text-sm font-bold text-gray-600">Planned</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="flex-1 bg-gray-200 rounded-full h-2">
                        <div className="bg-gray-500 h-2 rounded-full" style={{width: '12%'}}></div>
                      </div>
                      <span className="text-xs text-gray-600">12%</span>
                    </div>
                    <div className="text-xs text-gray-600 mt-1">Net-Zero emissions</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>      
      {/* Get Started Section */}
      <GetStartedSection />
    </div>
  );
};

export default UseCases;