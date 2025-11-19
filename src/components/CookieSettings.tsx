import React, { useState } from 'react';
import { X, Shield, BarChart3, Target, Wrench, Info, CheckCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCookies } from '../contexts/CookieContext';

const CookieSettings = () => {
  const { t } = useLanguage();
  const { 
    cookiePreferences, 
    setCookiePreferences, 
    showSettings, 
    setShowSettings 
  } = useCookies();

  const [tempPreferences, setTempPreferences] = useState(cookiePreferences);

  if (!showSettings) return null;

  const handleToggle = (type: keyof typeof tempPreferences) => {
    if (type === 'necessary') return; // Cannot disable necessary cookies
    
    setTempPreferences(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleSave = () => {
    setCookiePreferences(tempPreferences);
  };

  const handleAcceptAll = () => {
    const allAccepted = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    setTempPreferences(allAccepted);
    setCookiePreferences(allAccepted);
  };

  const cookieTypes = [
    {
      key: 'necessary' as const,
      icon: Shield,
      title: t('cookies.settings.necessary.title'),
      description: t('cookies.settings.necessary.description'),
      required: true,
      color: 'green'
    },
    {
      key: 'analytics' as const,
      icon: BarChart3,
      title: t('cookies.settings.analytics.title'),
      description: t('cookies.settings.analytics.description'),
      required: false,
      color: 'blue'
    },
    {
      key: 'functional' as const,
      icon: Wrench,
      title: t('cookies.settings.functional.title'),
      description: t('cookies.settings.functional.description'),
      required: false,
      color: 'orange'
    },
    {
      key: 'marketing' as const,
      icon: Target,
      title: t('cookies.settings.marketing.title'),
      description: t('cookies.settings.marketing.description'),
      required: false,
      color: 'purple'
    }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
        onClick={() => setShowSettings(false)}
      />
      
      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto transition-colors duration-300">
          
          {/* Header */}
          <div className="sticky top-0 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 px-6 py-4 rounded-t-xl transition-colors duration-300">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-headline font-bold text-gray-900 dark:text-white transition-colors duration-300">
                {t('cookies.settings.title')}
              </h2>
              <button
                onClick={() => setShowSettings(false)}
                className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300 transition-colors duration-200"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-300 mt-2 transition-colors duration-300">
              {t('cookies.settings.description')}
            </p>
          </div>

          {/* Content */}
          <div className="px-6 py-6">
            <div className="space-y-6">
              {cookieTypes.map((type) => (
                <div key={type.key} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 transition-colors duration-300">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-3 flex-1">
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                        type.color === 'green' ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400' :
                        type.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' :
                        type.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400' :
                        'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                      } transition-colors duration-300`}>
                        <type.icon className="h-5 w-5" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="font-semibold text-gray-900 dark:text-white transition-colors duration-300">{type.title}</h3>
                          {type.required && (
                            <span className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400 text-xs px-2 py-1 rounded-full font-medium transition-colors duration-300">
                              {t('cookies.settings.required')}
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed transition-colors duration-300">
                          {type.description}
                        </p>
                      </div>
                    </div>

                    {/* Toggle Switch */}
                    <div className="ml-4">
                      <button
                        onClick={() => handleToggle(type.key)}
                        disabled={type.required}
                        className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200 ${
                          tempPreferences[type.key] 
                            ? 'bg-night-blue dark:bg-blue-600' 
                            : 'bg-gray-300 dark:bg-gray-600'
                        } ${type.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200 ${
                            tempPreferences[type.key] ? 'translate-x-6' : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Info Box */}
            <div className="mt-6 bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4 transition-colors duration-300">
              <div className="flex items-start space-x-3">
                <Info className="h-5 w-5 text-blue-600 dark:text-blue-400 mt-0.5 transition-colors duration-300" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-1 transition-colors duration-300">
                    {t('cookies.settings.info.title')}
                  </h4>
                  <p className="text-blue-800 dark:text-blue-400 text-sm transition-colors duration-300">
                    {t('cookies.settings.info.description')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="sticky bottom-0 bg-gray-50 dark:bg-gray-700 border-t border-gray-200 dark:border-gray-600 px-6 py-4 rounded-b-xl transition-colors duration-300">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between space-y-3 sm:space-y-0 sm:space-x-3">
              <div className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                {t('cookies.settings.footer.note')}
              </div>
              
              <div className="flex space-x-3">
                <button
                  onClick={handleAcceptAll}
                  className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors duration-200 text-sm font-medium"
                >
                  {t('cookies.settings.acceptAll')}
                </button>
                
                <button
                  onClick={handleSave}
                  className="flex items-center space-x-2 px-6 py-2 bg-night-blue dark:bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors duration-200 text-sm font-semibold"
                >
                  <CheckCircle className="h-4 w-4" />
                  <span>{t('cookies.settings.save')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieSettings;