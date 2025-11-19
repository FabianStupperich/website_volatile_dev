import React from 'react';
import { Cookie, Settings, X, Shield, BarChart3, Target, Wrench } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCookies } from '../contexts/CookieContext';

const CookieBanner = () => {
  const { t } = useLanguage();
  const { 
    showBanner, 
    setShowBanner, 
    acceptAll, 
    acceptNecessary, 
    setShowSettings 
  } = useCookies();

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 shadow-2xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          
          {/* Cookie Icon and Content */}
          <div className="flex items-start space-x-4 flex-1">
            <div className="bg-night-blue dark:bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
              <Cookie className="h-6 w-6" />
            </div>
            
            <div className="flex-1">
              <h3 className="text-lg font-headline font-bold text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                {t('cookies.banner.title')}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-3 transition-colors duration-300">
                {t('cookies.banner.description')}
              </p>
              
              {/* Cookie Types Preview */}
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="flex items-center space-x-1 bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 px-2 py-1 rounded-full text-xs transition-colors duration-300">
                  <Shield className="h-3 w-3" />
                  <span>{t('cookies.types.necessary')}</span>
                </div>
                <div className="flex items-center space-x-1 bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 px-2 py-1 rounded-full text-xs transition-colors duration-300">
                  <BarChart3 className="h-3 w-3" />
                  <span>{t('cookies.types.analytics')}</span>
                </div>
                <div className="flex items-center space-x-1 bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400 px-2 py-1 rounded-full text-xs transition-colors duration-300">
                  <Target className="h-3 w-3" />
                  <span>{t('cookies.types.marketing')}</span>
                </div>
                <div className="flex items-center space-x-1 bg-orange-50 dark:bg-orange-900/30 text-orange-700 dark:text-orange-400 px-2 py-1 rounded-full text-xs transition-colors duration-300">
                  <Wrench className="h-3 w-3" />
                  <span>{t('cookies.types.functional')}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full lg:w-auto">
            <button
              onClick={() => setShowSettings(true)}
              className="flex items-center justify-center space-x-2 px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
            >
              <Settings className="h-4 w-4" />
              <span>{t('cookies.banner.customize')}</span>
            </button>
            
            <button
              onClick={acceptNecessary}
              className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 text-sm font-medium"
            >
              {t('cookies.banner.necessary')}
            </button>
            
            <button
              onClick={acceptAll}
              className="px-6 py-2 bg-night-blue dark:bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors duration-200 text-sm font-semibold"
            >
              {t('cookies.banner.acceptAll')}
            </button>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setShowBanner(false)}
            className="absolute top-4 right-4 lg:relative lg:top-0 lg:right-0 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
          >
            <X className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;