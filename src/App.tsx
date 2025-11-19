import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { CookieProvider } from './contexts/CookieContext';
import { ThemeProvider } from './contexts/ThemeContext';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import CookieSettings from './components/CookieSettings';
import ScrollToTop from './components/ScrollToTop';
import Startseite from './pages/Startseite';
import Company from './pages/Company';
import Kontakt from './pages/Kontakt';
import Platform from './pages/Platform';
import Impressum from './pages/Impressum';
import Datenschutzerklärung from './pages/Datenschutzerklärung';
import AGB from './pages/AGB';

// Product Pages
import MarketDataInsights from './pages/products/MarketDataInsights';
import MarketAnalyticsServices from './pages/products/MarketAnalyticsServices';
import DataCatalog from './pages/products/DataCatalog';

// Solution Pages
import Pricing from './pages/solutions/Pricing';
import PortfolioManagement from './pages/solutions/PortfolioManagement';
import ProjectPlanning from './pages/solutions/ProjectPlanning';
import Emission from './pages/solutions/Emission';
import IndustrialSolution from './pages/solutions/IndustrialSolution';


// Why Volatile Pages
import VolatileDataGateway from './pages/why-volatile/VolatileDataGateway';
import EnergyIntelligence from './pages/why-volatile/EnergyIntelligence';
import FundamentalModel from './pages/why-volatile/FundamentalModel';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CookieProvider>
          <Router>
            <Routes>
              {/* Platform page - standalone without navigation/footer */}
              <Route path="/platform" element={<Platform />} />
              
              {/* All other pages with navigation and footer */}
              <Route path="*" element={
                <div className="min-h-screen bg-white dark:bg-gray-900 font-body flex flex-col transition-colors duration-300">
                  <Navigation />
                  <ScrollToTop />
                  <main className="flex-grow">
                    <Routes>
                      <Route path="/" element={<Startseite />} />
                      <Route path="/company" element={<Company />} />
                      <Route path="/kontakt" element={<Kontakt />} />
                      <Route path="/impressum" element={<Impressum />} />
                      <Route path="/datenschutzerklärung" element={<Datenschutzerklärung />} />
                      <Route path="/agb" element={<AGB />} />
                      
                      {/* Why Volatile Subpages */}
                      <Route path="/why-volatile/data-gateway" element={<VolatileDataGateway />} />
                      <Route path="/why-volatile/energy-intelligence" element={<EnergyIntelligence />} />
                      
                      {/* Product Subpages */}
                      <Route path="/produkte/market-data-insights" element={<MarketDataInsights />} />
                      <Route path="/produkte/market-analytics-services" element={<MarketAnalyticsServices />} />
                      <Route path="/produkte/datenkatalog" element={<DataCatalog />} />
                      
                      {/* Solution Subpages */}
                      <Route path="/lösungen/Pricing" element={<Pricing />} />
                      <Route path="/lösungen/PortfolioManagement" element={<PortfolioManagement />} />
                      <Route path="/lösungen/ProjectPlanning" element={<ProjectPlanning />} />
                      <Route path="/lösungen/Emission" element={<Emission />} />
                      <Route path="/lösungen/IndustrialSolution" element={<IndustrialSolution />} />
                      <Route path="/lösungen/fundamental-model" element={<FundamentalModel />} />
                    </Routes>
                  </main>
                  <Footer />
                  <CookieBanner />
                  <CookieSettings />
                </div>
              } />
            </Routes>
          </Router>
        </CookieProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;