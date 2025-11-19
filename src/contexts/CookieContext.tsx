import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  functional: boolean;
}

interface CookieContextType {
  cookiePreferences: CookiePreferences;
  setCookiePreferences: (preferences: CookiePreferences) => void;
  showBanner: boolean;
  setShowBanner: (show: boolean) => void;
  acceptAll: () => void;
  acceptNecessary: () => void;
  showSettings: boolean;
  setShowSettings: (show: boolean) => void;
}

const CookieContext = createContext<CookieContextType | undefined>(undefined);

const defaultPreferences: CookiePreferences = {
  necessary: true, // Always true, cannot be disabled
  analytics: false,
  marketing: false,
  functional: false,
};

interface CookieProviderProps {
  children: ReactNode;
}

export const CookieProvider: React.FC<CookieProviderProps> = ({ children }) => {
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>(defaultPreferences);
  const [showBanner, setShowBanner] = useState(true);
  const [showSettings, setShowSettings] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const savedPreferences = localStorage.getItem('volatile-cookie-preferences');
    const cookieConsent = localStorage.getItem('volatile-cookie-consent');
    
    if (savedPreferences && cookieConsent) {
      setCookiePreferences(JSON.parse(savedPreferences));
      setShowBanner(false);
    } else {
      // Show banner after a short delay for better UX
      setTimeout(() => setShowBanner(true), 1000);
    }
  }, []);

  const savePreferences = (preferences: CookiePreferences) => {
    setCookiePreferences(preferences);
    localStorage.setItem('volatile-cookie-preferences', JSON.stringify(preferences));
    localStorage.setItem('volatile-cookie-consent', 'true');
    setShowBanner(false);
    setShowSettings(false);
    
    // Apply cookie preferences
    applyPreferences(preferences);
  };

  const acceptAll = () => {
    const allAccepted: CookiePreferences = {
      necessary: true,
      analytics: true,
      marketing: true,
      functional: true,
    };
    savePreferences(allAccepted);
  };

  const acceptNecessary = () => {
    savePreferences(defaultPreferences);
  };

  // Function to apply cookie preferences
  const applyPreferences = (preferences: CookiePreferences) => {
    // Necessary cookies are always enabled
    
    // Analytics cookies (e.g., Google Analytics)
    if (preferences.analytics) {
      // Enable analytics cookies
      console.log('Analytics cookies enabled');
      // Here you would initialize analytics services like Google Analytics
    } else {
      // Disable analytics cookies
      console.log('Analytics cookies disabled');
      // Here you would disable analytics services
    }
    
    // Marketing cookies
    if (preferences.marketing) {
      // Enable marketing cookies
      console.log('Marketing cookies enabled');
      // Here you would initialize marketing services like Google Ads
    } else {
      // Disable marketing cookies
      console.log('Marketing cookies disabled');
      // Here you would disable marketing services
    }
    
    // Functional cookies
    if (preferences.functional) {
      // Enable functional cookies
      console.log('Functional cookies enabled');
      // Here you would initialize functional services like chat widgets
    } else {
      // Disable functional cookies
      console.log('Functional cookies disabled');
      // Here you would disable functional services
    }
  };

  return (
    <CookieContext.Provider value={{
      cookiePreferences,
      setCookiePreferences: savePreferences,
      showBanner,
      setShowBanner,
      acceptAll,
      acceptNecessary,
      showSettings,
      setShowSettings,
    }}>
      {children}
    </CookieContext.Provider>
  );
};

export const useCookies = (): CookieContextType => {
  const context = useContext(CookieContext);
  if (!context) {
    throw new Error('useCookies must be used within a CookieProvider');
  }
  return context;
};