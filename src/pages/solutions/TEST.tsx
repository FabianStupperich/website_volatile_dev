import React, { useState, useEffect } from 'react';
import { Building, TrendingUp, Shield, Users, Target, BarChart3, Lightbulb, ArrowRight, CheckCircle, AlertTriangle, Calculator, PieChart } from 'lucide-react';
import { Link } from 'react-router-dom';
import GetStartedSection from '../../components/GetStartedSection';


const ProjectRisk = () => {
  const [activeUseCase, setActiveUseCase] = useState(0);

  // Use cases for the animation
  const useCases = [
    {
      title: 'Risikobewertung',
      icon: Shield,
      color: 'from-red-400 to-red-600',
      description: 'Identifikation und Bewertung von Projektrisiken'
    },
    {
      title: 'Projektanalyse',
      icon: BarChart3,
      color: 'from-blue-400 to-blue-600',
      description: 'Detaillierte Analyse von Projektparametern'
    },
    {
      title: 'Finanzmodellierung',
      icon: Calculator,
      color: 'from-green-400 to-green-600',
      description: 'Komplexe Finanzmodelle für Projektbewertung'
    },
    {
      title: 'Portfolio-Management',
      icon: PieChart,
      color: 'from-purple-400 to-purple-600',
      description: 'Optimierung des gesamten Projektportfolios'
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
      {/* Hero Section - Matching screenshot style */}
      <section className="relative bg-white text-white py-20 overflow-hidden min-h-screen flex items-center">
        {/* Dotted background pattern */}
        <div className="absolute inset-0 z-0" style={{ 
          backgroundImage: `radial-gradient(circle, #e5e5e5 1px, transparent 1px)`, 
          backgroundSize: '20px 20px' 
        }}></div>
        
        {/* Left grid line */}
        <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-200 z-0"></div>
        
        {/* Right grid line */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-gray-200 z-0"></div>
        
        {/* Horizontal grid lines */}
        <div className="absolute left-0 right-0 top-0 h-px bg-gray-200 z-0"></div>
        <div className="absolute left-0 right-0 bottom-0 h-px bg-gray-200 z-0"></div>
        
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
              <span className="text-xs font-bold text-black">AI</span>
            </div>
            
            <div className="absolute top-20 right-12 w-10 h-8 bg-white/10 backdrop-blur-sm rounded shadow-sm flex items-center justify-center">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
            </div>
            
            <div className="absolute bottom-16 left-4 w-10 h-8 bg-white/10 backdrop-blur-sm rounded shadow-sm flex items-center justify-center">
              <BarChart3 className="w-4 h-4 text-blue-400" />
            </div>
            
            <div className="absolute bottom-8 right-8 w-10 h-8 bg-white/10 backdrop-blur-sm rounded shadow-sm flex items-center justify-center">
              <span className="text-xs font-bold text-black">ML</span>
            </div>
          </div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Category Label */}
            <div className="mb-6">
              <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase">
                Energieversorger & Stadtwerke 
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8 text-black">
              Volatile für
              <br />
              <span className="font-bold">Portfolio</span>
              <br />
              <span className="font-bold">Management</span>
            </h1>
            
            {/* Description */}
            <p className="text-black text-lg leading-relaxed mb-12 max-w-xl">
              Strategische Klarheit in volatilen Märkten - Datenbasierte Portfoliosteuerung und Investitionsentscheidungen
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/kontakt"
                className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
              >
                Lösungen entdecken
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
              <h4 className="font-semibold text-black">{useCases[activeUseCase].title}</h4>
              <p className="text-black text-sm">{useCases[activeUseCase].description}</p>
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
              <div className="text-sm font-semibold text-black">95%</div>
              <div className="text-xs text-black">Risiko-Genauigkeit</div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-40 left-32 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg hidden lg:block">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
            <div>
              <div className="text-sm font-semibold text-black">50+</div>
              <div className="text-xs text-black">Risikofaktoren</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-32 left-16 bg-white/10 backdrop-blur-sm rounded-lg p-4 shadow-lg hidden lg:block">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse delay-700"></div>
            <div>
              <div className="text-sm font-semibold text-black">Real-time</div>
              <div className="text-xs text-black">Monitoring</div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Insights Section - Added from screenshot */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl leading-tight mb-12">
              Nutzt du die Daten in<br />
              deinem Unternehmen, um<br />
              die richtigen Erkenntnisse zu<br />
              gewinnen?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Marktentwicklungen</h3>
                <p className="text-gray-300 text-center">
                  Price-Forward Curves und langfristige Marktszenarien
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <BarChart3 className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Lastprognosen</h3>
                <p className="text-gray-300 text-center">
                  Szenarien und Prognosen für die regionale und sektorale Lastentwicklung
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Lightbulb className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cross-Market Insights</h3>
                <p className="text-gray-300 text-center">
                  Commodity & Ancillary Service Märkte zur Optimierung des Asset-Einsatzes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Sections */}

       <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-6">
                Energiebeschaffung & Hedging   
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Nutzen Sie KI-gestützte Analysen für bessere Projektentscheidungen. Unsere Plattform 
                analysiert komplexe Projektdaten und liefert actionable Insights für optimale 
                Projektergebnisse.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Performance-Tracking</h4>
                    <p className="text-gray-600 text-sm">Kontinuierliche Überwachung der Projektleistung</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ressourcenoptimierung</h4>
                    <p className="text-gray-600 text-sm">Optimale Allokation von Zeit, Budget und Personal</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Milestone-Management</h4>
                    <p className="text-gray-600 text-sm">Automatisierte Verfolgung wichtiger Projektmeilensteine</p>
                  </div>
                </li>
              </ul>
              <Link 
                to="/kontakt"
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                Projekt optimieren
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-headline font-bold text-black mb-4">
                    Projektanalyse
                  </h3>
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                    <BarChart3 className="h-24 w-24 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-headline font-bold text-black mb-4">
                    Kapazitätsplanung
                  </h3>
                  <div className="w-full h-64 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl flex items-center justify-center">
                    <Shield className="h-24 w-24 text-red-600" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-6">
                Kapazitätsplanung 
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Identifizieren, bewerten und managen Sie Projektrisiken mit unseren fortschrittlichen 
                Analytics-Tools. Minimieren Sie Verluste und maximieren Sie Projekterfolg durch 
                datengestützte Risikoanalysen.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Echtzeit-Risikomonitoring</h4>
                    <p className="text-gray-600 text-sm">Kontinuierliche Überwachung aller Risikofaktoren</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Predictive Analytics</h4>
                    <p className="text-gray-600 text-sm">Vorhersage potenzieller Risiken vor ihrem Auftreten</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Risiko-Mitigation</h4>
                    <p className="text-gray-600 text-sm">Automatisierte Empfehlungen zur Risikominimierung</p>
                  </div>
                </li>
              </ul>
              <Link 
                to="/kontakt"
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                Risiken analysieren
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-6">
                Einsatzplanung & Multi Market Optimierung 
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Nutzen Sie KI-gestützte Analysen für bessere Projektentscheidungen. Unsere Plattform 
                analysiert komplexe Projektdaten und liefert actionable Insights für optimale 
                Projektergebnisse.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Performance-Tracking</h4>
                    <p className="text-gray-600 text-sm">Kontinuierliche Überwachung der Projektleistung</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ressourcenoptimierung</h4>
                    <p className="text-gray-600 text-sm">Optimale Allokation von Zeit, Budget und Personal</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Performance-Benchmarking</h4>
                    <p className="text-gray-600 text-sm">Vergleich mit Branchenstandards und Best Practices</p>
                  </div>
                </li>
              </ul>
              <Link 
                to="/kontakt"
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                Projekt optimieren
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-headline font-bold text-black mb-4">
                    Projektanalyse
                  </h3>
                  <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                    <BarChart3 className="h-24 w-24 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <GetStartedSection/>
    </div>
  );
};

export default ProjectRisk;