import React, { useState, useEffect, useRef } from 'react';
import {BatteryCharging, PercentCircle, Unplug, PieChart, ArrowRight, Star, Users, Award, CheckCircle, Factory, TrendingUp, Globe, Shield, Banknote, Play, ChevronRight, BarChart3, CloudSunIcon, FileBarChart, Database, DatabaseZap, Zap, ChevronLeft, ArrowUpRight, SlidersHorizontal, Leaf} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { motion, AnimatePresence } from 'framer-motion';
import DashboardAnimation from '../components/DashboardAnimation';
import LogoFlipCarousel from '../components/LogoFlipCarousel';
import GetStartedSection from '../components/GetStartedSection';

const Startseite = () => {
  const { t } = useLanguage();
  const [activeSlide, setActiveSlide] = useState(0);
  const slideTimerRef = useRef<NodeJS.Timeout | null>(null);
  
  // Animation for "stay" text
  const [rotation, setRotation] = useState(0);
  const words = ['Analytics & Services', 'Market Data', 'Price Forecasts', 'Fundamentals'];

  useEffect(() => {
    const interval = setInterval(() => {
      setRotation(prev => {
        const newRotation = prev + 90;
        // Reset at 360° for seamless loop (4 items * 90 degrees = 360)
        return newRotation >= 360 ? 0 : newRotation;
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);
 
  // Use cases data for the redesigned slider
  const useCases = [
    {
      id: 0,
      title: t('startseite.useCases.energyProviders'),
      subtitle: t('startseite.useCases.energyProviders.subtitle'),
      description: t('startseite.useCases.energyProviders.description'),
      image: "/images/stock/Tarifierung.jpg",
      benefits: [
        t('startseite.useCases.energyProviders.benefit1'),
        t('startseite.useCases.energyProviders.benefit2'),
        t('startseite.useCases.energyProviders.benefit3')
      ],
      cta: {
        text: t('startseite.useCases.moreInfo'),
        link: "/lösungen/Pricing"
      },
      icon: PieChart,
      color: "orange"
    },
    {
      id: 1,
      title: t('startseite.useCases.projectDevelopers'),
      subtitle: t('startseite.useCases.projectDevelopers.subtitle'),
      description: t('startseite.useCases.projectDevelopers.description'),
      image: "/images/stock/Einsatzplanung.jpg",
      benefits: [
        t('startseite.useCases.projectDevelopers.benefit1'),
        t('startseite.useCases.projectDevelopers.benefit2'),
        t('startseite.useCases.projectDevelopers.benefit3')
      ],
      cta: {
        text: t('startseite.useCases.moreInfo'),
        link: "/lösungen/ProjectPlanning"
      },
      icon: Unplug,
      color: "orange"
    },
    {
      id: 2,
      title: t('startseite.useCases.industry'),
      subtitle: t('startseite.useCases.industry.subtitle'),
      description: t('startseite.useCases.industry.description'),
      image: "/images/stock/Emissionen_Planung.jpg",
      benefits: [
        t('startseite.useCases.industry.benefit1'),
        t('startseite.useCases.industry.benefit2'),
        t('startseite.useCases.industry.benefit3')
      ],
      cta: {
        text: t('startseite.useCases.moreInfo'),
        link: "/lösungen/IndustrialSolution"
      },
      icon: Factory,
      color: "orange"
    }
  ];

  // Additional use cases for the buttons
  const additionalUseCases = [
    { name: t('startseite.useCases.pricing'), icon: PercentCircle, color: "bg-teal-100", iconColor: "text-teal-800", link: "/lösungen/Pricing" },
    { name: t('startseite.useCases.portfolioManagement'), icon: PieChart, color: "bg-purple-100", iconColor: "text-purple-800", link: "/lösungen/PortfolioManagement" },
    { name: t('startseite.useCases.projectPlanning'), icon: Unplug, color: "bg-blue-100", iconColor: "text-blue-800", link: "/lösungen/ProjectPlanning" },
    { name: t('startseite.useCases.industrialUseCases'), icon: Factory, color: "bg-amber-100", iconColor: "text-amber-800", link: "/lösungen/IndustrialSolution" },
    { name: t('startseite.useCases.emissionsManagement'), icon: Leaf, color: "bg-indigo-100", iconColor: "text-indigo-800", link: "/lösungen/Emission" },
  ];

  // Auto-rotate slides with proper cleanup
  useEffect(() => {
    const startSlideTimer = () => {
      slideTimerRef.current = setTimeout(() => {
        setActiveSlide((prev) => (prev + 1) % useCases.length);
      }, 8000); // Longer duration for better readability
    };
    
    startSlideTimer();
    
    return () => {
      if (slideTimerRef.current) {
        clearTimeout(slideTimerRef.current);
      }
    };
  }, [activeSlide, useCases.length]);

  // Handle manual slide change
  const handleSlideChange = (index) => {
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
    }
    setActiveSlide(index);
  };

  // Navigate to previous slide
  const goToPrevSlide = () => {
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
    }
    setActiveSlide((prev) => (prev === 0 ? useCases.length - 1 : prev - 1));
  };

  // Navigate to next slide
  const goToNextSlide = () => {
    if (slideTimerRef.current) {
      clearTimeout(slideTimerRef.current);
    }
    setActiveSlide((prev) => (prev + 1) % useCases.length);
  };
  
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      {/* Hero Section - Following wireframe structure */}
      <section className="relative bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Main headline with animation in second line */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-bold text-black dark:text-white leading-tight mb-2 transition-colors duration-300">
              End-to-End Market Intelligence
            </h1>
            
            {/* Second line with animation */}
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-headline font-bold mb-8 flex items-center justify-center">
              for
              <div className="relative overflow-hidden inline-block" style={{ width: '100%', maxWidth: '800px', height: '1.2em' }}>
                <div 
                  className="absolute transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateY(${-rotation * (1.2 / 90)}em)`,
                    height: '4.8em', // 4 * 1.2em for all 4 words
                    width: '100%',
                    left: '0',
                    top: '0'
                  }}
                >
                  {words.map((word, index) => (
                    <div
                      key={index}
                      style={{
                        height: '1.2em',
                        width: '100%',
                        background: 'linear-gradient(90deg, #Fe5000 0%, #C800FF 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        whiteSpace: 'nowrap' // Prevent line breaks
                      }}
                    >
                      {word}
                    </div>
                  ))}
                  
                  {/* Duplicate for seamless loop */}
                  {words.map((word, index) => (
                    <div
                      key={`duplicate-${index}`}
                      style={{
                        height: '1.2em',
                        width: '100%',
                        background: 'linear-gradient(90deg, #Fe5000 0%, #C800FF 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        whiteSpace: 'nowrap' // Prevent line breaks
                      }}
                    >
                      {word}
                    </div>
                  ))}
                </div>
              </div>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-4xl mx-auto mb-12 transition-colors duration-300 px-4">
              {t('home.hero.subtitle')}
            </p>

            {/* CTA Buttons - Updated to match the rounded style */}
            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <Link 
                to="/kontakt"
                className="inline-flex items-center justify-center bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 min-w-[200px]"
              >
                {t('home.hero.cta')}
              </Link>
              <Link 
                to="/produkte/market-data-insights"
                className="inline-flex items-center justify-center border-2 border-black text-black hover:bg-black hover:text-white px-8 py-4 rounded-full font-semibold transition-all duration-200 transform hover:scale-105 min-w-[200px]"
              >
                {t('startseite.hero.dataOffer')}
              </Link>
            </div>

            {/* Dashboard Preview - matching wireframe layout */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-4 sm:p-8 border border-gray-200 dark:border-gray-700 shadow-xl transition-colors duration-300">
                <img 
                  src='/images/visualizations/Dashboard Overview_orange.svg' 
                  alt="Medium-term forecast visualization"
                  className="max-w-full max-h-full object-cover rounded-lg"
                />
                {/* <DashboardAnimation /> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Section - Updated to match the image */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-headline font-bold text-black dark:text-white mb-6 transition-colors duration-300">
              {t('startseite.valueProposition.title')}
              <p>
                <span className="gradient-text">{t('startseite.valueProposition.platform1')}</span> 
              </p>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
             {t('startseite.valueProposition.subtitle')}
            </p>
          </div>

          {/* Main feature section with image and text */}
          <div className="bg-50 custom-grey-bg rounded-xl p-4 sm:p-8 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <div className="inline-flex items-center bg-700 custom-orange-bg text-white px-4 py-2 rounded-lg mb-6">
                  <DatabaseZap className="h-5 w-5 mr-2" />
                  <span className="font-medium">{t('startseite.marketData.product1')}</span>
                </div>
                <h3 className="text-xl font-headline font-semibold text-black mb-4">
                  {t('startseite.marketData.title')}
                </h3>
                <p className="text-gray-600 mb-6">
                  {t('startseite.marketData.description')}
                </p>
                <Link
                to="/Produkte/market-data-insights"
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                {t('startseite.marketData.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              </div>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4">
                  <div className="bg-gray-50 rounded-lg h-64 flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <img 
                        src='/images/visualizations/market_model.png' 
                        alt="Medium-term forecast visualization"
                        className="max-w-full max-h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Two additional features in a grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-50 custom-grey-bg rounded-xl p-4 sm:p-8">
              <div className="inline-flex items-center bg-700 custom-orange-bg text-white px-4 py-2 rounded-lg mb-6">
                <CloudSunIcon className="h-5 w-5 mr-2" />
                <span className="font-medium">{t('startseite.marketData.product2')}</span>
              </div>
              <h3 className="text-xl font-headline font-semibold text-black mb-4">
                {t('startseite.fundamentals.title')}
              </h3>
              <p className="text-gray-600 mb-6">
                {t('startseite.fundamentals.description')}
              </p>
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <div className="p-4">
                  <div className="bg-gray-50 rounded-lg h-64 flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <img 
                        src='/images/visualizations/ensemble_forecast_plot.svg' 
                        alt="Medium-term forecast visualization"
                        className="h-full w-auto object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to="/Produkte/market-data-insights"
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                {t('startseite.fundamentals.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>

            <div className="bg-50 custom-grey-bg rounded-xl p-4 sm:p-8">
              <div className="inline-flex items-center bg-700 custom-orange-bg text-white px-4 py-2 rounded-lg mb-6">
                <SlidersHorizontal className="h-5 w-5 mr-2" />
                <span className="font-medium">{t('startseite.marketData.product3')}</span>
              </div>
              <h3 className="text-xl font-headline font-semibold text-black mb-4">
                {t('startseite.services.title')}
              </h3>
              <p className="text-gray-600 mb-6">
               {t('startseite.services.description')}
              </p>
              <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
                <div className="p-4">
                  <div className="bg-gray-50 rounded-lg h-64 flex items-center justify-center overflow-hidden">
                    <div className="text-center">
                      <img 
                        src='/images/visualizations/long_term_forecasts.png' 
                        alt="Medium-term forecast visualization"
                        className="max-w-full max-h-full object-cover rounded-lg"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Link
                to="/Produkte/market-analytics-services"
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                {t('startseite.services.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* REDESIGNED Use Cases Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-black dark:text-white mb-6 transition-colors duration-300">
              {t('startseite.useCases.title1')} <span className="gradient-text">{t('startseite.useCases.title2')}</span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300 mb-10">
              {t('startseite.useCases.subtitle')}
            </p>
            
            {/* Use Case Buttons - Moved above the carousel */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
              {additionalUseCases.map((useCase, index) => (
                <Link
                  key={index}   
                  to={useCase.link} 
                  className={`flex items-center custom-orange-bg-20 px-6 py-3 rounded-full transition-all duration-200 hover:shadow-md group`}
                > 
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
                    <useCase.icon className={`h-4 w-4 ${useCase.iconColor}`} />
                  </div>
                  <span className="font-medium text-gray-800">{useCase.name}</span>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Redesigned Slider Container */}
          <div className="relative">
            {/* Navigation Buttons - Positioned outside the slider for cleaner look */}
            <button 
              onClick={goToPrevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-full shadow-lg transition-all duration-200 -ml-5 lg:-ml-6"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>

            <button 
              onClick={goToNextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 z-20 bg-white/80 dark:bg-gray-800/80 hover:bg-white dark:hover:bg-gray-700 text-gray-800 dark:text-white p-3 rounded-full shadow-lg transition-all duration-200 -mr-5 lg:-mr-6"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Main Slider */}
            <div className="relative overflow-hidden rounded-xl">
              <div className="flex transition-all duration-700 ease-in-out" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {useCases.map((useCase, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700">
                      <div className="grid grid-cols-1 lg:grid-cols-2">
                        {/* Left side - Image with overlay */}
                        <div className="relative h-64 lg:h-auto overflow-hidden">
                          <img 
                            src={useCase.image} 
                            alt={useCase.title} 
                            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent flex flex-col justify-end p-6 lg:hidden">
                            <span className="text-white/80 text-sm font-medium mb-2">{useCase.subtitle}</span>
                            <h3 className="text-2xl font-headline font-bold text-white mb-2">{useCase.title}</h3>
                          </div>
                        </div>
                        
                        {/* Right side - Content */}
                        <div className="p-8 flex flex-col justify-center">
                          <div className="hidden lg:block">
                            <div className="inline-flex items-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
                              {React.createElement(useCase.icon, { className: "h-4 w-4 mr-2" })}
                              <span>{useCase.subtitle}</span>
                            </div>
                            <h3 className="text-2xl font-headline font-bold text-gray-900 dark:text-white mb-4">{useCase.title}</h3>
                          </div>
                          
                          <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                            {useCase.description}
                          </p>
                          
                          <div className="space-y-3 mb-8">
                            {useCase.benefits.map((benefit, i) => (
                              <div key={i} className="flex items-start">
                                <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3 ${
                                  useCase.color === 'orange' ? 'bg-gray-100 custom-orange-text' :
                                  useCase.color === 'purple' ? 'custom-purple-bg-20 custom-purple-text' :
                                  'bg-green-100 text-green-600'
                                }`}>
                                  <CheckCircle className="h-3 w-3 text-gray-800" />
                                </div>
                                <span className="text-gray-700 dark:text-gray-300">{benefit}</span>
                              </div>
                            ))}
                          </div>
                          
                          <Link 
                            to={useCase.cta.link}
                            className={`inline-flex items-center text-white px-6 py-3 rounded-full font-medium self-start bg-black hover:bg-gray-800`}
                          >
                            {useCase.cta.text}
                            <ArrowRight className="h-4 w-4 ml-2" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Improved Navigation Dots */}
            <div className="flex justify-center mt-8 space-x-3">
              {useCases.map((_, index) => (
                <button
                  key={`dot-${index}`}
                  onClick={() => handleSlideChange(index)}
                  className={`transition-all duration-300 rounded-full ${
                    activeSlide === index 
                      ? 'w-8 h-2 bg-night-blue dark:bg-blue-500' 
                      : 'w-2 h-2 bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section - matching wireframe 2-column layout */}
      <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl md:text-5xl font-headline font-bold text-black dark:text-white mb-6 transition-colors duration-300">
                {t('startseite.mission.title1')}
                <p>
                  <span className="gradient-text">{t('startseite.mission.title2')}</span>
                </p>
                <p>
                  <span className="gradient-text">{t('startseite.mission.title3')}</span>
                </p>
              </h2>
            </div>
            <div>
              <h2 className="text-lg font-bold text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                {t('startseite.mission.subtitle')}
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6 transition-colors duration-300">
                {t('startseite.mission.description')}
              </p>
              <Link
                to="/company"
                className="inline-flex items-center bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                {t('startseite.mission.cta')}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>      
      {/* Get Started Section */}
      <GetStartedSection />
    </div>
  );
};

export default Startseite;
