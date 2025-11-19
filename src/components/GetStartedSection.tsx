import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import '../index.css';

const GetStartedSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Headline */}
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          {t('getStarted.title')}
        </h2>
        
        {/* Subtitle */}
        <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
          {t('getStarted.subtitle')}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link
            to="/kontakt"
            className="inline-flex items-center border-2 bg-white border-white hover:custom-orange-bg hover:border-custom-orange text-black px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 text-lg min-w-[200px] justify-center"
          >
            {t('getStarted.bookDemo')}
          </Link>
          
          <Link
            to="/platform"
            className="inline-flex items-center border-2 border-white text-white hover:bg-white hover:text-black px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 text-lg min-w-[200px] justify-center"
          >
            {t('getStarted.platform')}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GetStartedSection;