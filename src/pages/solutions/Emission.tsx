import React, { useState, useEffect } from 'react';
import { Building, TrendingUp, Shield, Users, Target, BarChart3, Lightbulb, ArrowRight, CheckCircle, AlertTriangle, Calculator, PieChart, Tornado, IterationCcw, RefreshCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../contexts/LanguageContext';
import GetStartedSection from '../../components/GetStartedSection';


const ProjectRisk = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Matching screenshot style */}
      <section className="relative bg-white text-white py-20 overflow-hidden min-h-screen flex items-center">
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            {/* Category Label */}
            <div className="mb-6">
              <span className="text-orange-400 text-sm font-semibold tracking-wider uppercase">
                {t('emission.hero.category')}
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8 text-black">
              {t('emission.hero.title')}
            </h1>
            
            {/* Description */}
            <p className="text-black text-lg leading-relaxed mb-12 max-w-xl">
              {t('emission.hero.description')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/kontakt"
                className="inline-flex items-center custom-orange-bg hover:custom-orange-bg text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
              >
                {t('emission.hero.cta')}
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
              {t('emission.dataInsights.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <Tornado className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('emission.dataInsights.emissions.title')}</h3>
                <p className="text-gray-300 text-center">
                  {t('emission.dataInsights.emissions.description')}
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <IterationCcw className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('emission.dataInsights.scenarios.title')}</h3>
                <p className="text-gray-300 text-center">
                  {t('emission.dataInsights.scenarios.description')}
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <RefreshCcw className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('emission.dataInsights.flowTracing.title')}</h3>
                <p className="text-gray-300 text-center">
                  {t('emission.dataInsights.flowTracing.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Sections */}

       <section id="bilanzierung" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-6">
                {t('emission.bilanzierung.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('emission.bilanzierung.description')}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('emission.bilanzierung.feature1.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('emission.bilanzierung.feature1.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('emission.bilanzierung.feature2.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('emission.bilanzierung.feature2.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('emission.bilanzierung.feature3.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('emission.bilanzierung.feature3.description')}</p>
                  </div>
                </li>
              </ul>
              <Link
                to="/kontakt"
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                {t('emission.bilanzierung.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-headline font-bold text-black mb-4">
                    {t('emission.bilanzierung.title')}
                  </h3>
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                    <img 
                      src='/images/stock/CO2Reporting.jpg' 
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

      
      <section id="betrieb" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-headline font-bold text-black mb-4">
                    {t('emission.betrieb.title')}
                  </h3>
                  <div className="w-full h-64 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl flex items-center justify-center">
                    <img 
                      src='/images/stock/Datacenter.jpg' 
                      alt="Medium-term forecast visualization"
                      className="w-full h-full object-cover rounded-xl "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-6">
                {t('emission.betrieb.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('emission.betrieb.description')}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('emission.betrieb.feature1.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('emission.betrieb.feature1.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('emission.betrieb.feature2.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('emission.betrieb.feature2.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('emission.betrieb.feature3.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('emission.betrieb.feature3.description')}</p>
                  </div>
                </li>
              </ul>
              <Link
                to="/kontakt"
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                {t('emission.betrieb.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="planung" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-6">
                {t('emission.planung.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('emission.planung.description')}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('emission.planung.feature1.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('emission.planung.feature1.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('emission.planung.feature2.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('emission.planung.feature2.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('emission.planung.feature3.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('emission.planung.feature3.description')}</p>
                  </div>
                </li>
              </ul>
              <Link
                to="/kontakt"
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                {t('emission.planung.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-headline font-bold text-black mb-4">
                    {t('emission.planung.title')}
                  </h3>
                  <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                    <img 
                      src='/images/stock/Emissionen_Planung.jpg' 
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

      {/* Final CTA Section */}
      <GetStartedSection/>
    </div>
  );
};

export default ProjectRisk;