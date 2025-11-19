import React, { useState } from 'react';
import {BatteryCharging, Tornado, CloudSunIcon, Grid2X2, UtilityPole, History, TrendingUp, BarChart3, Globe, Clock, Database, Zap, Shield, Users, Target, ArrowRight, CheckCircle, Activity, Map, Layers, Lightbulb, Sun, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import GetStartedSection from '../../components/GetStartedSection';

const MarketDataInsights = () => {
  const { t } = useLanguage();
  const [activeTimeHorizon, setActiveTimeHorizon] = useState('long-term');

  // Time horizon data
  const timeHorizons = {
    'short-term': {
      count: 0,
      id: 'short-term',
      title: t('marketData.timeHorizons.shortTerm.title'),
      subtitle: t('marketData.timeHorizons.shortTerm.subtitle'),
      modelInfo: t('marketData.timeHorizons.shortTerm.modelInfo'),
      description: t('marketData.timeHorizons.shortTerm.description'),
      benefits: [
        t('marketData.timeHorizons.shortTerm.benefit1'),
        t('marketData.timeHorizons.shortTerm.benefit2'),
        t('marketData.timeHorizons.shortTerm.benefit3'),
        t('marketData.timeHorizons.shortTerm.benefit4')
      ],
      icon: Clock,
      color: 'custom-orange-bg'
    },
    'medium-term': {
      count: 1,
      id: 'medium-term',
      title: t('marketData.timeHorizons.mediumTerm.title'),
      subtitle: t('marketData.timeHorizons.mediumTerm.subtitle'),
      modelInfo: t('marketData.timeHorizons.mediumTerm.modelInfo'),
      description: t('marketData.timeHorizons.mediumTerm.description'),
      benefits: [
        t('marketData.timeHorizons.mediumTerm.benefit1'),
        t('marketData.timeHorizons.mediumTerm.benefit2'),
        t('marketData.timeHorizons.mediumTerm.benefit3'),
        t('marketData.timeHorizons.mediumTerm.benefit4')
      ],
      icon: BarChart3,
      color: 'custom-orange-bg'
    },
    'long-term': {
      count: 2,
      id: 'long-term',
      title: t('marketData.timeHorizons.longTerm.title'),
      subtitle: t('marketData.timeHorizons.longTerm.subtitle'),
      modelInfo: t('marketData.timeHorizons.longTerm.modelInfo'),
      description: t('marketData.timeHorizons.longTerm.description'),
      benefits: [
        t('marketData.timeHorizons.longTerm.benefit1'),
        t('marketData.timeHorizons.longTerm.benefit2'),
        t('marketData.timeHorizons.longTerm.benefit3'),
        t('marketData.timeHorizons.longTerm.benefit4')
      ],
      icon: Globe,
      color: 'custom-orange-bg'
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching the provided image style */}
      <section className="relative bg-black py-20 overflow-hidden min-h-screen flex items-center">
        {/* Background Image - Full Coverage */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/visualizations/ensemble_plot_hero.svg')",
            backgroundSize: 'cover', // This ensures the image covers the entire area
            backgroundPosition: 'center'
          }}
        />
        
        {/* Optional: Dark overlay to ensure text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-65" />
        
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">    
            {/* Category Label */}
            <div className="mb-6">
              <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase">
                {t('marketData.hero.category')}
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8 text-white">
              {t('marketData.hero.title1')}
              <br />
              <span className="font-bold">{t('marketData.hero.title2')}</span>
              <br />
              <span className="font-bold">{t('marketData.hero.title3')}</span>
              <br />
              <span className="font-light">{t('marketData.hero.title4')} <span className="font-bold">{t('marketData.hero.title5')}</span></span>
            </h1>
            
            {/* Description */}
            <p className="text-gray-300 text-lg leading-relaxed mb-12 max-w-xl">
              {t('marketData.hero.description')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center bg-white hover:bg-white text-black px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
              >
                {t('marketData.hero.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Your Best Value Proposition Section */}
      <section id="marketSimulation" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-black mb-6">
              {t('marketData.future.title1')}
              <p>
                <span className="gradient-text">{t('marketData.future.title2')}</span>
              </p>
            </h2>
          </div>

          

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-left">
                <img
                  src='/images/visualizations/market_model.png'
                  alt="Medium-term forecast visualization"
                  className="w-full bg-black rounded-lg h-64 mb-6 item-center object-cover"
                />
              <h3 className="text-xl font-headline font-semibold text-black mb-4">
                {t('marketData.future.modeling.title')}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('marketData.future.modeling.description')}
              </p>
            </div>

            <div className="text-left">
              <div
                className="max-w-full bg-black rounded-lg h-64 mb-6 object-cover"
                style={{
                  backgroundImage: "url('/images/visualizations/ensemble_forecast_plot.svg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center"
                }}
              >
              </div>
              <h3 className="text-xl font-headline font-semibold text-black mb-4">
                {t('marketData.future.forecasts.title')}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('marketData.future.forecasts.description')}
              </p>
            </div>

            <div className="text-left">
                <img
                  src='/images/visualizations/temperature_time_series.png'
                  alt="Medium-term forecast visualization"
                  className="max-w-full bg-black rounded-lg h-64 mb-6 item-center"
                />
              <h3 className="text-xl font-headline font-semibold text-black mb-4">
                {t('marketData.future.fundamentals.title')}
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('marketData.future.fundamentals.description')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Time Horizon Section with Menu */}
      <section id="forecasts" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-headline font-bold text-black mb-4">
              {t('marketData.forecasts.title')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('marketData.forecasts.description')}
            </p>
          </div>

          {/* Time Horizon Menu - Fixed for mobile */}
          <div className="flex justify-center mb-16 overflow-x-auto pb-2 -mx-4 px-4 time-horizon-menu">
            <div className="inline-flex bg-gray-100 rounded-full p-1 flex-nowrap">
              {Object.values(timeHorizons).map((horizon) => {
               const IconComponent = horizon.icon;
                return (
                  <button
                    key={horizon.id}
                    onClick={() => setActiveTimeHorizon(horizon.id)}
                    className={`px-4 sm:px-6 md:px-10 py-3 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                      horizon.count < 2 ? 'mr-2' : ''
                    } ${
                      activeTimeHorizon === horizon.id
                        ? `bg-600 ${horizon.color} text-white shadow-md`
                        : 'text-gray-700 hover:bg-gray-200'
                    }`}
                    style={
                      activeTimeHorizon === horizon.id
                        ? { backgroundColor: horizon.id === 'short-term' ? '#FE5000' : horizon.id === 'medium-term' ? '#FE5000' : '#FE5000' }
                        : {}
                    }
                  >
                    <div className="flex items-center">
                      
                      <span>{horizon.title}</span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Active Time Horizon Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              {(() => {
                const activeHorizon = timeHorizons[activeTimeHorizon];
                const IconComponent = History;
                return (
                  <div className="flex flex-wrap gap-4 mb-4">
                    <div className="inline-flex items-center bg-gray-100 rounded-full px-4 py-2 text-sm text-gray-700">
                      <IconComponent className="h-4 w-4 mr-2" />
                      <span>{activeHorizon.subtitle}</span>
                    </div>
                    <div className="inline-flex items-center custom-grey-bg bg-100 rounded-full px-4 py-2 text-sm text-700 custom-orange-text">
                      <Activity className="h-4 w-4 mr-2" />
                      <span>{activeHorizon.modelInfo}</span>
                    </div>
                  </div>
                );
              })()}
              
              <h3 className="text-3xl md:text-4xl font-headline font-bold text-black mb-6">
                {timeHorizons[activeTimeHorizon].title}
              </h3>
              
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {timeHorizons[activeTimeHorizon].description}
              </p>
              
              <div className="space-y-4 mb-8">
                {timeHorizons[activeTimeHorizon].benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
              
              <Link
                to="/kontakt"
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                {t('marketData.forecasts.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
              
              <div className="p-6">
                <div 
                  className="h-64 rounded-lg overflow-hidden bg-gray-50"
                  style={{ 
                    backgroundColor: activeTimeHorizon === 'short-term' ? '#ebf5ff' : 
                                    activeTimeHorizon === 'medium-term' ? '#fff7ed' : '#fff7ed' 
                  }}
                >
                  {activeTimeHorizon === 'short-term' && (
                    <img 
                      src='/images/visualizations/short_term_forecasts.png' 
                      alt="Medium-term forecast visualization"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                  {activeTimeHorizon === 'medium-term' && (
                    <img 
                      src='/images/visualizations/hpfc_yearly_analysis.png' 
                      alt="Medium-term forecast visualization"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                  {activeTimeHorizon === 'long-term' && (
                    <img 
                      src='/images/visualizations/long_term_forecasts.png' 
                      alt="Medium-term forecast visualization"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  )}
                </div>
                
                <div className="mt-6 grid grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold mb-2">{t('marketData.dataSources.title')}</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {activeTimeHorizon === 'short-term' && (
                        <>
                          <li>• {t('marketData.dataSources.shortTerm.source1')}</li>
                          <li>• {t('marketData.dataSources.shortTerm.source2')}</li>
                          <li>• {t('marketData.dataSources.shortTerm.source3')}</li>
                        </>
                      )}
                      {activeTimeHorizon === 'medium-term' && (
                        <>
                          <li>• {t('marketData.dataSources.mediumTerm.source1')}</li>
                          <li>• {t('marketData.dataSources.mediumTerm.source2')}</li>
                          <li>• {t('marketData.dataSources.mediumTerm.source3')}</li>
                        </>
                      )}
                      {activeTimeHorizon === 'long-term' && (
                        <>
                          <li>• {t('marketData.dataSources.longTerm.source1')}</li>
                          <li>• {t('marketData.dataSources.longTerm.source2')}</li>
                          <li>• {t('marketData.dataSources.longTerm.source3')}</li>
                        </>
                      )}
                    </ul>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="text-sm font-semibold mb-2">{t('marketData.useCases.title')}</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {activeTimeHorizon === 'short-term' && (
                        <>
                          <li>• {t('marketData.useCases.shortTerm.case1')}</li>
                          <li>• {t('marketData.useCases.shortTerm.case2')}</li>
                          <li>• {t('marketData.useCases.shortTerm.case3')}</li>
                        </>
                      )}
                      {activeTimeHorizon === 'medium-term' && (
                        <>
                          <li>• {t('marketData.useCases.mediumTerm.case1')}</li>
                          <li>• {t('marketData.useCases.mediumTerm.case2')}</li>
                          <li>• {t('marketData.useCases.mediumTerm.case3')}</li>
                        </>
                      )}
                      {activeTimeHorizon === 'long-term' && (
                        <>
                          <li>• {t('marketData.useCases.longTerm.case1')}</li>
                          <li>• {t('marketData.useCases.longTerm.case2')}</li>
                          <li>• {t('marketData.useCases.longTerm.case3')}</li>
                        </>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

       
      {/* Das Steuerungssystem Section */}
      <section id="otherData" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-black mb-6">
              {t('marketData.intelligence.title1')}
              <p>
                <span className="gradient-text">{t('marketData.intelligence.title2')}</span>
              </p>
            </h2>
            
            {/* Three feature boxes like in the screenshot */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <div className="flex flex-col items-center bg-50 custom-orange-bg-20 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-100 custom-orange-bg-50 rounded-full flex items-center justify-center mb-6">
                  <Zap className="h-10 w-10 text-600 custom-orange-text" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('marketData.intelligence.powerGas.title')}</h3>
                <p className="text-gray-600 text-center">
                  {t('marketData.intelligence.powerGas.description')}
                </p>
              </div>

              <div className="flex flex-col items-center bg-purple-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                  <Grid2X2 className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('marketData.intelligence.fundamentals.title')}</h3>
                <p className="text-gray-600 text-center">
                  {t('marketData.intelligence.fundamentals.description')}
                </p>
              </div>
              
              <div className="flex flex-col items-center bg-green-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <Sun className="h-10 w-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">{t('marketData.intelligence.climate.title')}</h3>
                <p className="text-gray-600 text-center">
                  {t('marketData.intelligence.climate.description')}
                </p>
              </div>
             </div>
          </div>

          {/* Main feature section with image and text */}
          <div id="emissions" className="bg-50 custom-grey-bg rounded-xl p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center custom-orange-bg bg-700 text-white px-4 py-2 rounded-lg mb-6">
                  <Tornado className="h-5 w-5 mr-2" />
                  <span className="font-medium">{t('marketData.emissions.badge')}</span>
                </div>
                <h3 className="text-xl font-headline font-semibold text-black mb-4">
                  {t('marketData.emissions.title')}
                </h3>
                <ul className="space-y-4">
                  <li className="flex items-center text-gray-600 text">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                    {t('marketData.emissions.feature1')}
                  </li>
                  <li className="flex items-center text-gray-600 text">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                    {t('marketData.emissions.feature2')}
                  </li>
                  <li className="flex items-center text-gray-600 text">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                    {t('marketData.emissions.feature3')}
                  </li>
                  <li className="flex items-center text-gray-600 text">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                    {t('marketData.emissions.feature4')}
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="bg-gray-50 rounded-lg h-64 flex items-center justify-center">
                    <img
                      src="/images/visualizations/emission_intensity_map.png"
                      alt="Electricity Intensities Mapped"
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two additional features in a grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-50 custom-grey-bg rounded-xl p-8">
              <div className="inline-flex items-center custom-orange-bg bg-700 text-white px-4 py-2 rounded-lg mb-6">
                <CloudSunIcon className="h-5 w-5 mr-2" />
                <span className="font-medium">{t('marketData.weather.badge')}</span>
              </div>
              <h3 className="text-xl font-headline font-semibold text-black mb-4">
                {t('marketData.weather.title')}
              </h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center text-gray-600 text">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                  {t('marketData.weather.feature1')}
                </li>
                <li className="flex items-center text-gray-600 text">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                  {t('marketData.weather.feature2')}
                </li>
                <li className="flex items-center text-gray-600 text">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                  {t('marketData.weather.feature3')}
                </li>
                <li className="flex items-center text-gray-600 text">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                  {t('marketData.weather.feature4')}
                </li>
              </ul>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <img
                    src="/images/climate_data.png"
                    alt="Volatile Power Grid Infrastructure"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="bg-50 custom-grey-bg rounded-xl p-8">
              <div className="inline-flex items-center custom-orange-bg bg-700 text-white px-4 py-2 rounded-lg mb-6">
                <UtilityPole className="h-5 w-5 mr-2" />
                <span className="font-medium">{t('marketData.infrastructure.badge')}</span>
              </div>
              <h3 className="text-xl font-headline font-semibold text-black mb-4">
                {t('marketData.infrastructure.title')}
              </h3>
              <ul className="space-y-4 mb-6">
                  <li className="flex items-center text-gray-600 text">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                    {t('marketData.infrastructure.feature1')}
                  </li>
                  <li className="flex items-center text-gray-600 text">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                    {t('marketData.infrastructure.feature2')}
                  </li>
                  <li className="flex items-center text-gray-600 text">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                    {t('marketData.infrastructure.feature3')}
                  </li>
                  <li className="flex items-center text-gray-600 text">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                    {t('marketData.infrastructure.feature4')}
                  </li>
                </ul>
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-4">
                    <img
                      src="/images/visualizations/Netzmodell.png"
                      alt="Volatile Power Grid Infrastructure"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <GetStartedSection/>


    </div>
  );
};

export default MarketDataInsights;