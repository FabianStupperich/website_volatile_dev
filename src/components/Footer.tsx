import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { useCookies } from '../contexts/CookieContext';
import FooterLogo from './FooterLogo';

const Footer = () => {
  const { t } = useLanguage();
  const { setShowSettings } = useCookies();
  
  // Function to scroll to top when clicking links
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black dark:bg-gray-900 text-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1 - Marktintelligenz */}
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4 text-white">{t('footer.marketIntelligence')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/produkte/market-data-insights#forecasts"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('footer.priceForecasts')}
                </Link>
              </li>
              <li>
                <Link
                  to="/produkte/market-data-insights#otherData"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('footer.fundamentalData')}
                </Link>
              </li>
              <li>
                <Link
                  to="/produkte/market-data-insights#otherData"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('footer.weatherClimate')}
                </Link>
              </li>
              <li>
                <Link
                  to="/produkte/market-analytics-services"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('footer.dataServices')}
                </Link>
              </li>
              <li>
                <Link
                  to="/produkte/market-analytics-services#custom-analytics"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('footer.scenarioAnalyses')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 2 - Einsatzbereiche (Use Cases) */}
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4 text-white">{t('footer.applicationFields')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/lösungen/Pricing"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('footer.pricing')}
                </Link>
              </li>
              <li>
                <Link
                  to="/lösungen/PortfolioManagement"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('footer.portfolioManagement')}
                </Link>
              </li>
              <li>
                <Link
                  to="/lösungen/ProjectPlanning"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('footer.energyProjectPlanning')}
                </Link>
              </li>
              <li>
                <Link
                  to="/lösungen/IndustrialSolution"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('footer.industrialUseCases')}
                </Link>
              </li>
              <li>
                <Link
                  to="/lösungen/Emission"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('footer.emissionsManagement')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Unternehmen */}
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4 text-white">{t('footer.companySection')}</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/company#vision-mission"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('footer.aboutUs')}
                </Link>
              </li>
              <li>
                <Link
                  to="/kontakt"
                  onClick={scrollToTop}
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  {t('footer.contactLink')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Social Media */}
          <div>
            <h3 className="text-lg font-headline font-semibold mb-4 text-white">{t('footer.socialMedia')}</h3>
            <div className="space-y-4">
              <a 
                href="https://www.linkedin.com/company/volatile-energy" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <div className="bg-gray-700 group-hover:bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mr-3 transition-colors duration-200">
                  <Linkedin className="h-5 w-5" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 dark:border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            {/* Logo */}
            <div className="mb-4 md:mb-0">
              <FooterLogo className="text-white h-8 w-auto" />
            </div>
            
            {/* Legal Links and Copyright */}
            <div className="flex flex-wrap items-center gap-6">
              <Link 
                to="/impressum" 
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {t('footer.imprint')}
              </Link>
              <Link 
                to="/datenschutzerklärung" 
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {t('footer.privacy')}
              </Link>
              <Link
                to="/kontakt"
                onClick={scrollToTop}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {t('footer.contactLink')}
              </Link>
              <button
                onClick={() => setShowSettings(true)}
                className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
              >
                {t('footer.privacySettings')}
              </button>
              <div className="text-gray-400 text-sm">
                {t('footer.copyright')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;