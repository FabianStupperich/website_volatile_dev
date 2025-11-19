import React from 'react';
import {BatteryMedium, PercentCircle, SlidersHorizontal, Brain, Users, Target, Lightbulb, Settings, Award, CheckCircle, ArrowRight, MapPinned, BarChart3, Database, TrendingUp, Globe, BatteryCharging, SmartphoneCharging } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import GetStartedSection from '../../components/GetStartedSection';

const MarketAnalyticsServices = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching MarketDataInsights style with black/orange colors */}
      <section className="relative bg-white py-20 overflow-hidden min-h-screen flex items-center">
        
        {/* Background Image - Full Coverage */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/images/visualizations/data_services_hero.jpg')",
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
                {t('marketAnalytics.hero.category')}
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8 text-white">
              {t('marketAnalytics.hero.title1')}
              <br />
              <span className="font-bold">{t('marketAnalytics.hero.title2')}</span>
              <br />
              <span className="font-light">{t('marketAnalytics.hero.title3')} <span className="font-bold">{t('marketAnalytics.hero.title4')}</span></span>
            </h1>
            
            {/* Description */}
            <p className="text-white text-lg leading-relaxed mb-12 max-w-xl">
              {t('marketAnalytics.hero.description')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center bg-white hover:bg-white text-black px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
              >
                {t('marketAnalytics.hero.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Predefined Scenarios Section */}
      <section id="custom-analytics" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-black mb-6">
              {t('marketAnalytics.scenarios.title1')}
                <p>
                  <span className="gradient-text">{t('marketAnalytics.scenarios.title2')}</span>
                </p>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('marketAnalytics.scenarios.description')}
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-6">
               {t('marketAnalytics.scenarios.expertTitle')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                {t('marketAnalytics.scenarios.expertDescription')}
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">{t('marketAnalytics.scenarios.feature1')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">{t('marketAnalytics.scenarios.feature2')}</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-600">{t('marketAnalytics.scenarios.feature3')}</span>
                </li>
              </ul>
              <Link
                to="/kontakt"
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                {t('marketAnalytics.scenarios.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
              <div className="p-6">
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <h3 className="font-medium text-gray-900 mb-2 flex items-center">
                    <SlidersHorizontal className="h-5 w-5 text-orange-500 mr-2" />
                    {t('marketAnalytics.scenarios.packageTitle')}
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded border border-gray-200 hover:border-orange-300 transition-colors cursor-pointer">
                      <div className="font-medium text-sm">{t('marketAnalytics.scenarios.package1.title')}</div>
                      <div className="text-xs text-gray-500 mt-1">{t('marketAnalytics.scenarios.package1.description')}</div>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200 hover:border-orange-300 transition-colors cursor-pointer">
                      <div className="font-medium text-sm">{t('marketAnalytics.scenarios.package2.title')}</div>
                      <div className="text-xs text-gray-500 mt-1">{t('marketAnalytics.scenarios.package2.description')}</div>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200 hover:border-orange-300 transition-colors cursor-pointer">
                      <div className="font-medium text-sm">{t('marketAnalytics.scenarios.package3.title')}</div>
                      <div className="text-xs text-gray-500 mt-1">{t('marketAnalytics.scenarios.package3.description')}</div>
                    </div>
                    <div className="bg-white p-3 rounded border border-gray-200 hover:border-orange-300 transition-colors cursor-pointer">
                      <div className="font-medium text-sm">{t('marketAnalytics.scenarios.package4.title')}</div>
                      <div className="text-xs text-gray-500 mt-1">{t('marketAnalytics.scenarios.package4.description')}</div>
                    </div>
                  </div>
                </div>
                <div className="h-50 bg-gradient-to-br from-orange-50 to-gray-50 rounded-lg flex items-center justify-center overflow-hidden">
                  <img 
                    src='/images/visualizations/long_term_forecasts.png' 
                    alt="Medium-term forecast visualization"
                    className="max-w-full object-contain rounded-lg "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
     {/* Das Steuerungssystem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="future-services" className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-black mb-6">
              {t('marketAnalytics.services.title1')}
              <p>
                <span className="gradient-text">{t('marketAnalytics.services.title2')}</span>
              </p>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('marketAnalytics.services.description')}
            </p>
          </div>

          {/* Main feature section with image and text */}
          <div id="consulting" className="custom-grey-bg rounded-xl p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center custom-orange-bg text-white px-4 py-2 rounded-lg mb-6">
                  <SmartphoneCharging className="h-5 w-5 mr-2" />
                  <span className="font-medium">{t('marketAnalytics.multiMarket.badge')}</span>
                </div>
                <h3 className="text-xl font-headline font-semibold text-black mb-4">
                  {t('marketAnalytics.multiMarket.title')}
                </h3>
                <ul className="space-y-4 mb-6">
                  <li className="flex items-center text-gray-600 text">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                    {t('marketAnalytics.multiMarket.feature1')}
                  </li>
                  <li className="flex items-center text-gray-600 text">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                    {t('marketAnalytics.multiMarket.feature2')}
                  </li>
                  <li className="flex items-center text-gray-600 text">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                    {t('marketAnalytics.multiMarket.feature3')}
                  </li>
                  <li className="flex items-center text-gray-600 text">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                    {t('marketAnalytics.multiMarket.feature4')}
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <img 
                    src='/images/visualizations/multi_market_optimization.png' 
                    alt="Medium-term forecast visualization"
                    className="w-full h-full object-contain rounded-lg "
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Two additional features in a grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div id="implementation" className="custom-grey-bg rounded-xl p-8">
              <div className="inline-flex items-center custom-orange-bg text-white px-4 py-2 rounded-lg mb-6">
                <MapPinned className="h-5 w-5 mr-2" />
                <span className="font-medium">{t('marketAnalytics.siting.badge')}</span>
              </div>
              <h3 className="text-xl font-headline font-semibold text-black mb-4">
                {t('marketAnalytics.siting.title')}
              </h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center text-gray-600 text">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                  {t('marketAnalytics.siting.feature1')}
                </li>
                <li className="flex items-center text-gray-600 text">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                  {t('marketAnalytics.siting.feature2')}
                </li>
                <li className="flex items-center text-gray-600 text">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                  {t('marketAnalytics.siting.feature3')}
                </li>
                <li className="flex items-center text-gray-600 text">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                  {t('marketAnalytics.siting.feature4')}
                </li>
              </ul>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <img 
                    src='/images/visualizations/renewable_siting.png' 
                    alt="Medium-term forecast visualization"
                    className="w-full h-full object-contain rounded-lg "
                  />
                </div>
              </div>
            </div>

            <div id="managed-services" className="custom-grey-bg rounded-xl p-8">
              <div className="inline-flex items-center custom-orange-bg text-white px-4 py-2 rounded-lg mb-6">
                <PercentCircle className="h-5 w-5 mr-2" />
                <span className="font-medium">{t('marketAnalytics.tariff.badge')}</span>
              </div>
              <h3 className="text-xl font-headline font-semibold text-black mb-4">
                {t('marketAnalytics.tariff.title')}
              </h3>
              <ul className="space-y-4 mb-6">
                <li className="flex items-center text-gray-600 text">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                  {t('marketAnalytics.tariff.feature1')}
                </li>
                <li className="flex items-center text-gray-600 text">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                  {t('marketAnalytics.tariff.feature2')}
                </li>
                <li className="flex items-center text-gray-600 text">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                  {t('marketAnalytics.tariff.feature3')}
                </li>
                <li className="flex items-center text-gray-600 text">
                  <span className="w-2 h-2 bg-gray-600 rounded-full mr-4 flex-shrink-0"></span>
                  {t('marketAnalytics.tariff.feature4')}
                </li>
              </ul>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <img 
                    src='/images/visualizations/tariff_opt.png' 
                    alt="Medium-term forecast visualization"
                    className="w-full h-full object-contain rounded-lg "
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

export default MarketAnalyticsServices;