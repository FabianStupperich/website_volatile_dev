import React, { useState, useEffect } from 'react';
import {History , Building, TrendingUp, Shield, Users, Target, BarChart3, Lightbulb, ArrowRight, CheckCircle, AlertTriangle, Calculator, PieChart, LucideCombine, CircleDashed } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import GetStartedSection from '../../components/GetStartedSection';


const ProjectRisk = () => {
  const { t } = useLanguage();
  
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching screenshot style */}
      <section className="relative bg-white text-black py-20 overflow-hidden min-h-screen flex items-center">
                
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Category Label */}
            <div className="mb-6">
              <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase">
                {t('pricing.hero.category')}
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8 text-black">
              {t('pricing.hero.title1')}
              <br />
              <span className="font-bold">{t('pricing.hero.title2')}</span>
              <br />
              
            </h1>
            
            {/* Description */}
            <p className="text-black text-lg leading-relaxed mb-12 max-w-xl">
              {t('pricing.hero.description')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center custom-orange-bg hover:custom-orange-bg text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
              >
                {t('pricing.hero.cta')}
              </Link>
             </div>
          </div>
        </div>
        
      </section>

      {/* Data Insights Section - Added from screenshot */}
      <section className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-light leading-tight mb-12">
              {t('pricing.dataInsights.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <History className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('pricing.dataInsights.marketDevelopments.title')}</h3>
                <p className="text-gray-300 text-center">
                  {t('pricing.dataInsights.marketDevelopments.description')}
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <CircleDashed className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('pricing.dataInsights.revenueScenarios.title')}</h3>
                <p className="text-gray-300 text-center">
                  {t('pricing.dataInsights.revenueScenarios.description')}
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('pricing.dataInsights.volatilityData.title')}</h3>
                <p className="text-gray-300 text-center">
                  {t('pricing.dataInsights.volatilityData.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Sections */}

       <section id="tarifierung" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-6">
                {t('pricing.tariffing.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('pricing.tariffing.description')}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('pricing.tariffing.features.customerAnalysis.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('pricing.tariffing.features.customerAnalysis.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('pricing.tariffing.features.marketVolatility.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('pricing.tariffing.features.marketVolatility.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('pricing.tariffing.features.tariffOptimization.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('pricing.tariffing.features.tariffOptimization.description')}</p>
                  </div>
                </li>
              </ul>
              <Link
                to="/kontakt"
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                {t('pricing.tariffing.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-headline font-bold text-black mb-4">
                    {t('pricing.tariffing.cardTitle')}
                  </h3>
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                    <img 
                      src='/images/stock/Tarifierung.jpg' 
                      alt="Medium-term forecast visualization"
                      className="w-full h-full object-cover rounded-xl "
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section id="ppa" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-headline font-bold text-black mb-4">
                    {t('pricing.ppa.cardTitle')}
                  </h3>
                  <div className="w-full h-64 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl flex items-center justify-center">
                    <img 
                      src='/images/stock/PPA.jpg' 
                      alt="Medium-term forecast visualization"
                      className="w-full h-full object-cover rounded-xl "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-6">
                {t('pricing.ppa.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('pricing.ppa.description')}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('pricing.ppa.features.marketForecasts.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('pricing.ppa.features.marketForecasts.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('pricing.ppa.features.locationSpecific.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('pricing.ppa.features.locationSpecific.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('pricing.ppa.features.riskAssessment.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('pricing.ppa.features.riskAssessment.description')}</p>
                  </div>
                </li>
              </ul>
              <Link
                to="/kontakt"
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                {t('pricing.ppa.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="industrieVertrag" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-6">
                {t('pricing.industrial.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('pricing.industrial.description')}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('pricing.industrial.features.loadFlexibility.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('pricing.industrial.features.loadFlexibility.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('pricing.industrial.features.regulatory.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('pricing.industrial.features.regulatory.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('pricing.industrial.features.marketForecasts.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('pricing.industrial.features.marketForecasts.description')}</p>
                  </div>
                </li>
              </ul>
              <Link
                to="/kontakt"
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                {t('pricing.industrial.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-headline font-bold text-black mb-4">
                    {t('pricing.industrial.cardTitle')}
                  </h3>
                  <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                    <img 
                      src='/images/stock/Sondervertraege.jpg' 
                      alt="Medium-term forecast visualization"
                      className="w-full h-full object-cover rounded-xl "
                    />
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