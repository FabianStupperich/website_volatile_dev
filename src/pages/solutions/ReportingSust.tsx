import React from 'react';
import { Building, TrendingUp, Shield, Users, Target, BarChart3, Lightbulb, ArrowRight, Leaf, Zap, Globe, Database, Activity, ChevronDown, PieChart, LineChart, Calculator, DollarSign, TrendingDown, Plus, Briefcase, FileText, AlertTriangle, CheckCircle, Clock, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import GetStartedSection from '../../components/GetStartedSection';

const UseCases = () => {
  // Function to scroll to specific section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Redesigned with integrated use cases */}
      <section className="relative bg-black text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-lg transform rotate-12"></div>
          <div className="absolute top-40 right-32 w-24 h-24 border border-white/15 rounded-lg transform -rotate-6"></div>
          <div className="absolute bottom-32 left-1/4 w-20 h-20 border border-white/10 rounded-lg transform rotate-45"></div>
          <div className="absolute bottom-20 right-20 w-28 h-28 border border-white/25 rounded-lg transform -rotate-12"></div>
        </div>

        {/* Main Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center mb-16">
            {/* Category Label */}
            <div className="mb-6">
              <span className="text-gray-400 text-sm font-medium tracking-wider uppercase">
                Anwendungsfelder
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-5xl md:text-7xl font-light leading-tight mb-8">
              Volatile für
              <span className="font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"> Reporting</span>
            </h1>
            
            {/* Subheading */}
            <h2 className="text-xl md:text-2xl font-light text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
              Von Investment Banking bis Sustainability Reporting – unsere Market Data und Analytics 
              Plattform transformiert komplexe Energiemarktdaten in präzise Geschäftsintelligenz.
            </h2>
          </div>

          {/* Integrated Use Cases Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            
            {/* Portfolio Management & Tarifierung */}
            <div 
              onClick={() => scrollToSection('portfolio-value-proposition')}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:border-green-400 hover:shadow-2xl hover:shadow-green-400/20 hover:scale-105"
            >
              {/* Floating Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-green-500 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-green-400/50 transition-all duration-300">
                  <PieChart className="h-6 w-6 text-black" />
                </div>
              </div>
              
              {/* Content */}
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 group-hover:text-green-400 transition-colors duration-300">
                  Portfolio Management & Tarifierung
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Optimieren Sie Ihre Energieportfolios mit präzisen Marktdaten und fortschrittlichen Analytics für bessere Renditen und Risikomanagement.
                </p>
                
                {/* Key Features */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-xs text-gray-500">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                    Real-time Portfolio Optimization
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                    Risk-adjusted Returns
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <div className="w-1.5 h-1.5 bg-green-400 rounded-full mr-2"></div>
                    Dynamic Pricing Models
                  </div>
                </div>
                
                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">Mehr erfahren</span>
                  <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-green-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-green-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>

            {/* Investitionsplanung & Projektierung */}
            <div 
              onClick={() => scrollToSection('project-value-proposition')}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:border-blue-400 hover:shadow-2xl hover:shadow-blue-400/20 hover:scale-105"
            >
              {/* Floating Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-blue-500 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-blue-400/50 transition-all duration-300">
                  <Building className="h-6 w-6 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 group-hover:text-blue-400 transition-colors duration-300">
                  Investitionsplanung & Projektierung
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Fundierte Investitionsentscheidungen durch detaillierte Marktanalysen, Risikobewertungen und Projektrentabilitätsrechnungen.
                </p>
                
                {/* Key Features */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-xs text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    Investment Decision Support
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    Project Feasibility Analysis
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></div>
                    Market Entry Strategies
                  </div>
                </div>
                
                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">Mehr erfahren</span>
                  <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>

            {/* Sustainability Reporting */}
            <div 
              onClick={() => scrollToSection('sustainability-value-proposition')}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:border-emerald-400 hover:shadow-2xl hover:shadow-emerald-400/20 hover:scale-105"
            >
              {/* Floating Icon */}
              <div className="absolute -top-4 left-8">
                <div className="bg-emerald-500 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-emerald-400/50 transition-all duration-300">
                  <Leaf className="h-6 w-6 text-white" />
                </div>
              </div>
              
              {/* Content */}
              <div className="pt-6">
                <h3 className="text-xl font-bold mb-4 group-hover:text-emerald-400 transition-colors duration-300">
                  Sustainability Reporting
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  Umfassende ESG-Berichterstattung mit präzisen Umwelt- und Klimadaten für Compliance, Strategie und Stakeholder-Kommunikation.
                </p>
                
                {/* Key Features */}
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-xs text-gray-500">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                    CSRD-konforme Berichterstattung
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                    CO₂-Bilanzierung & Klimarisiken
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-2"></div>
                    ESG-Kennzahlen & Benchmarking
                  </div>
                </div>
                
                {/* CTA */}
                <div className="flex items-center justify-between">
                  <span className="text-xs text-gray-500 font-medium">Mehr erfahren</span>
                  <ArrowRight className="h-4 w-4 text-gray-500 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all duration-300" />
                </div>
              </div>
              
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            </div>
          </div>

          {/* Industry Overview Strip */}
          <div className="border-t border-gray-800 pt-12">
            <div className="text-center mb-8">
              <h3 className="text-lg font-medium text-gray-400 mb-2">Trusted by leading organizations across</h3>
              <p className="text-sm text-gray-500">Investment Banking • Asset Management • Energy Utilities • Corporate Finance</p>
            </div>
            
            {/* Industry Icons */}
            <div className="flex justify-center items-center space-x-12 opacity-60">
              <div className="flex flex-col items-center">
                <Building className="h-8 w-8 text-gray-400 mb-2" />
                <span className="text-xs text-gray-500">Banking</span>
              </div>
              <div className="flex flex-col items-center">
                <BarChart3 className="h-8 w-8 text-gray-400 mb-2" />
                <span className="text-xs text-gray-500">Asset Mgmt</span>
              </div>
              <div className="flex flex-col items-center">
                <Zap className="h-8 w-8 text-gray-400 mb-2" />
                <span className="text-xs text-gray-500">Utilities</span>
              </div>
              <div className="flex flex-col items-center">
                <Globe className="h-8 w-8 text-gray-400 mb-2" />
                <span className="text-xs text-gray-500">Corporates</span>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Data Indicators */}
        <div className="absolute top-20 right-20 bg-white/10 backdrop-blur-sm rounded-lg p-4 hidden lg:block border border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
            <div>
              <div className="text-sm font-semibold text-white">€45.67/MWh</div>
              <div className="text-xs text-gray-400">DE Power Spot</div>
            </div>
          </div>
        </div>
        
        <div className="absolute top-40 right-32 bg-white/10 backdrop-blur-sm rounded-lg p-4 hidden lg:block border border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse delay-300"></div>
            <div>
              <div className="text-sm font-semibold text-white">15.2 TWh</div>
              <div className="text-xs text-gray-400">Wind Generation</div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-32 right-16 bg-white/10 backdrop-blur-sm rounded-lg p-4 hidden lg:block border border-white/20">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-yellow-400 rounded-full animate-pulse delay-700"></div>
            <div>
              <div className="text-sm font-semibold text-white">€28.90/MWh</div>
              <div className="text-xs text-gray-400">TTF Gas</div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-xs mb-2">Scroll for details</span>
            <ChevronDown className="h-5 w-5" />
          </div>
        </div>
      </section>

      {/* Industries Section - White Background */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-headline font-bold text-black mb-4">
              Branchen & Anwendungsfelder
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Unsere Market Intelligence Lösungen unterstützen führende Unternehmen 
              in verschiedenen Branchen bei datengetriebenen Entscheidungen.
            </p>
          </div>

          {/* Industry Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="bg-gray-100 group-hover:bg-night-blue/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <Building className="h-10 w-10 text-gray-600 group-hover:text-night-blue transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Investment Banking</h3>
              <p className="text-sm text-gray-600">Trading, Risk Management, Client Advisory</p>
            </div>

            <div className="text-center group">
              <div className="bg-gray-100 group-hover:bg-night-blue/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <BarChart3 className="h-10 w-10 text-gray-600 group-hover:text-night-blue transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Asset Management</h3>
              <p className="text-sm text-gray-600">Portfolio Optimization, Performance Attribution</p>
            </div>

            <div className="text-center group">
              <div className="bg-gray-100 group-hover:bg-night-blue/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <Zap className="h-10 w-10 text-gray-600 group-hover:text-night-blue transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Energy Utilities</h3>
              <p className="text-sm text-gray-600">Generation Planning, Grid Management</p>
            </div>

            <div className="text-center group">
              <div className="bg-gray-100 group-hover:bg-night-blue/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <Globe className="h-10 w-10 text-gray-600 group-hover:text-night-blue transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Corporate Finance</h3>
              <p className="text-sm text-gray-600">M&A, Valuation, Strategic Planning</p>
            </div>

            <div className="text-center group">
              <div className="bg-gray-100 group-hover:bg-night-blue/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <Shield className="h-10 w-10 text-gray-600 group-hover:text-night-blue transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Risk Management</h3>
              <p className="text-sm text-gray-600">Market Risk, Credit Risk, Operational Risk</p>
            </div>

            <div className="text-center group">
              <div className="bg-gray-100 group-hover:bg-night-blue/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <Users className="h-10 w-10 text-gray-600 group-hover:text-night-blue transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Consulting</h3>
              <p className="text-sm text-gray-600">Strategy, Operations, Technology</p>
            </div>

            <div className="text-center group">
              <div className="bg-gray-100 group-hover:bg-night-blue/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <Leaf className="h-10 w-10 text-gray-600 group-hover:text-night-blue transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sustainability</h3>
              <p className="text-sm text-gray-600">ESG Reporting, Carbon Management</p>
            </div>

            <div className="text-center group">
              <div className="bg-gray-100 group-hover:bg-night-blue/10 w-20 h-20 rounded-xl flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <Database className="h-10 w-10 text-gray-600 group-hover:text-night-blue transition-colors duration-300" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Technology</h3>
              <p className="text-sm text-gray-600">Data Analytics, AI/ML, Platform Development</p>
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