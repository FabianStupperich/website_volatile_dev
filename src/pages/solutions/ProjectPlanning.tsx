import React, { useState, useEffect } from 'react';
import { History, Building, TrendingUp, Shield, Users, Target, BarChart3, Lightbulb, ArrowRight, CheckCircle, AlertTriangle, Calculator, PieChart, CircleDashed, LandPlot } from 'lucide-react';
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
                {t('projectPlanning.hero.category')}
              </span>
            </div>
            
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl font-light leading-tight mb-8 text-black">
              {t('projectPlanning.hero.title1')}
              <br />
              <span className="font-bold">{t('projectPlanning.hero.title2')}</span>
              <br />
              <span className="font-bold">{t('projectPlanning.hero.title3')}</span>
            </h1>
            
            {/* Description */}
            <p className="text-black text-lg leading-relaxed mb-12 max-w-xl">
              {t('projectPlanning.hero.description')}
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/kontakt"
                className="inline-flex items-center custom-orange-bg hover:custom-orange-bg text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105"
              >
                {t('projectPlanning.hero.cta')}
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
              {t('projectPlanning.dataInsights.title')}
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <History className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('projectPlanning.dataInsights.marketDevelopments.title')}</h3>
                <p className="text-gray-300 text-center">
                  {t('projectPlanning.dataInsights.marketDevelopments.description')}
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <CircleDashed className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('projectPlanning.dataInsights.yieldScenarios.title')}</h3>
                <p className="text-gray-300 text-center">
                  {t('projectPlanning.dataInsights.yieldScenarios.description')}
                </p>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center mb-6">
                  <LandPlot className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{t('projectPlanning.dataInsights.locationData.title')}</h3>
                <p className="text-gray-300 text-center">
                  {t('projectPlanning.dataInsights.locationData.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Sections */}

       <section id="projektplanung" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-6">
                {t('projectPlanning.projects.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('projectPlanning.projects.description')}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('projectPlanning.projects.features.economicCalculation.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('projectPlanning.projects.features.economicCalculation.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('projectPlanning.projects.features.sitePreselection.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('projectPlanning.projects.features.sitePreselection.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('projectPlanning.projects.features.systemIntegration.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('projectPlanning.projects.features.systemIntegration.description')}</p>
                  </div>
                </li>
              </ul>
              <Link
                to="/kontakt"
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                {t('projectPlanning.projects.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-headline font-bold text-black mb-4">
                    {t('projectPlanning.projects.cardTitle')}
                  </h3>
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                    <img 
                      src='/images/stock/EE-Projekte.jpg' 
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

      
      <section id="risiko" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-headline font-bold text-black mb-4">
                    {t('projectPlanning.risk.cardTitle')}
                  </h3>
                  <div className="w-full h-64 bg-gradient-to-br from-red-100 to-orange-100 rounded-xl flex items-center justify-center">
                    <img 
                      src='/images/stock/Banken.jpg' 
                      alt="Medium-term forecast visualization"
                      className="w-full h-full object-cover rounded-xl "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-6">
                {t('projectPlanning.risk.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('projectPlanning.risk.description')}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('projectPlanning.risk.features.bankableForecasts.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('projectPlanning.risk.features.bankableForecasts.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('projectPlanning.risk.features.riskQuantification.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('projectPlanning.risk.features.riskQuantification.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('projectPlanning.risk.features.marketScenarios.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('projectPlanning.risk.features.marketScenarios.description')}</p>
                  </div>
                </li>
              </ul>
              <Link
                to="/kontakt"
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                {t('projectPlanning.risk.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="infrastruktur" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-6">
                {t('projectPlanning.infrastructure.title')}
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                {t('projectPlanning.infrastructure.description')}
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('projectPlanning.infrastructure.features.batteryStorage.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('projectPlanning.infrastructure.features.batteryStorage.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('projectPlanning.infrastructure.features.gridConnection.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('projectPlanning.infrastructure.features.gridConnection.description')}</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 custom-orange-text mr-3 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">{t('projectPlanning.infrastructure.features.strategicPlanning.title')}</h4>
                    <p className="text-gray-600 text-sm">{t('projectPlanning.infrastructure.features.strategicPlanning.description')}</p>
                  </div>
                </li>
              </ul>
              <Link
                to="/kontakt"
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                {t('projectPlanning.infrastructure.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-headline font-bold text-black mb-4">
                    {t('projectPlanning.infrastructure.cardTitle')}
                  </h3>
                  <div className="w-full h-64 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl flex items-center justify-center">
                    <img 
                      src='/images/stock/Energieinfrastruktur.jpg' 
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