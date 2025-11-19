import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {CloudSun, Menu, X, ChevronDown, ArrowRight, Mail, Phone, MapPin, Users, ChevronRight, BarChart3, Zap, Globe, Database, TrendingUp, Lightbulb, Target, Tornado, UtilityPole, Grid2X2, Activity, SlidersHorizontal, BatteryMedium, BadgeEuro, AreaChart, PercentCircle, Factory, FileBox, FileLineChart, PieChart, ArrowUpDown, ChevronsUpDown, Usb, Gauge, SquareAsterisk, PlugZap, CheckCheck, ArrowUpRight, Home, Unplug, Sparkle, Sparkles, Expand, SmartphoneCharging } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
// import ThemeToggle from './ThemeToggle';
import VolatileLogo from './VolatileLogo';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Separate state for each menu item
  const [hoveredSubItems, setHoveredSubItems] = useState<Record<string, string | null>>({});
  const [lastHoveredSubItems, setLastHoveredSubItems] = useState<Record<string, string | null>>({});
  const [isHoveringMenus, setIsHoveringMenus] = useState<Record<string, boolean>>({});
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const { t } = useLanguage();

  const navigation = [
    {
      name: t('nav.products'),
      href: '/produkte/market-data-insights', // Redirect to top subpage
      description: t('nav.products.description'),
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=400',
      dropdown: [
        { 
          name: t('products.dataInsights'), 
          href: '/produkte/market-data-insights',
          title: t('products.dataInsights.title'),
          detailedDescription: t('products.dataInsights.description'),
          
          sections: [
            { name: t('products.dataInsights.sections.forecasts'), href: '/produkte/market-data-insights#forecasts', icon: TrendingUp },
            { name: t('products.dataInsights.sections.modeling'), href: '/produkte/market-data-insights#marketSimulation', icon: Activity },
            { name: t('products.dataInsights.sections.emissions'), href: '/produkte/market-data-insights#otherData', icon: Tornado },
            { name: t('products.dataInsights.sections.infrastructure'), href: '/produkte/market-data-insights#otherData', icon: UtilityPole }
          ]
        },
        { 
          name: t('products.analytics'), 
          href: '/produkte/market-analytics-services',
          title: t('products.analytics.title'),
          detailedDescription: t('products.analytics.description'),
          
          sections: [
            { name: t('products.analytics.sections.scenarios'), href: '/produkte/market-analytics-services#custom-analytics', icon: SlidersHorizontal },
            { name: t('products.analytics.sections.flexibility'), href: '/produkte/market-analytics-services#future-services', icon: SmartphoneCharging },
            { name: t('products.analytics.sections.grid'), href: '/produkte/market-analytics-services#future-services', icon: BadgeEuro },
            { name: t('products.analytics.sections.demand'), href: '/produkte/market-analytics-services#future-services', icon: AreaChart}
          ]
        },
        /*{ 
          name: t('products.catalog'), 
          href: '/produkte/datenkatalog',
          detailedDescription: 'Entdecken Sie unsere umfassende Sammlung von Market Data, Analytics und Fundamentaldaten für alle Ihre Geschäftsanforderungen.',
          features: [
            'Interactive Data Explorer',
            'Advanced Filtering & Search',
            'API Documentation',
            'Real-time Data Feeds'
          ],
          sections: [
            { name: 'Market Data', href: '/produkte/datenkatalog#market-data' },
            { name: 'Commodities', href: '/produkte/datenkatalog#commodities' },
            { name: 'Environmental', href: '/produkte/datenkatalog#environmental' },
            { name: 'Infrastructure', href: '/produkte/datenkatalog#infrastructure' }
          ],
          isSpecial: true // Flag to make this button black
        },*/
      ]
    },
    {
      name: t('nav.solutions'),
      href: '/lösungen/Pricing', // Redirect to top subpage
      description: t('nav.solutions.description'),
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      dropdown: [
        {
          name: t('solutions.pricing.name'),
          href: '/lösungen/Pricing',
          title: t('solutions.pricing.title'),
          detailedDescription: t('solutions.pricing.description'),

          sections: [
            { name: t('solutions.pricing.sections.tariffs'), href: '/lösungen/Pricing#tarifierung', icon: PercentCircle },
            { name: t('solutions.pricing.sections.ppa'), href: '/lösungen/Pricing#ppa', icon: FileLineChart },
            { name: t('solutions.pricing.sections.industrial'), href: '/lösungen/Pricing#industrieVertrag', icon: Factory },
          ]
        },
        {
          name: t('solutions.portfolio.name'),
          href: '/lösungen/PortfolioManagement',
          title: t('solutions.portfolio.title'),
          detailedDescription: t('solutions.portfolio.description'),

          sections: [
            { name: t('solutions.portfolio.sections.procurement'), href: '/lösungen/PortfolioManagement#beschaffung', icon: Usb },
            { name: t('solutions.portfolio.sections.capacity'), href: '/lösungen/PortfolioManagement#kapazitaet', icon: Gauge },
            { name: t('solutions.portfolio.sections.deployment'), href: '/lösungen/PortfolioManagement#einsatz', icon: SquareAsterisk },
          ]
        },
        {
          name: t('solutions.projectPlanning.name'),
          href: '/lösungen/ProjectPlanning',
          title: t('solutions.projectPlanning.title'),
          detailedDescription: t('solutions.projectPlanning.description'),

          sections: [
            { name: t('solutions.projectPlanning.sections.projects'), href: '/lösungen/ProjectPlanning#projektplanung', icon: PlugZap },
            { name: t('solutions.projectPlanning.sections.risk'), href: '/lösungen/ProjectPlanning#risiko', icon: CheckCheck },
            { name: t('solutions.projectPlanning.sections.infrastructure'), href: '/lösungen/ProjectPlanning#infrastruktur', icon: UtilityPole },
          ]
        },
        {
          name: t('solutions.industrial.name'),
          href: '/lösungen/IndustrialSolution',
          title: t('solutions.industrial.title'),
          detailedDescription: t('solutions.industrial.description'),

          sections: [
            { name: t('solutions.industrial.sections.procurement'), href: '/lösungen/IndustrialSolution#beschaffung', icon: Unplug },
            { name: t('solutions.industrial.sections.process'), href: '/lösungen/IndustrialSolution#prozessplanung', icon: Factory },
            { name: t('solutions.industrial.sections.investment'), href: '/lösungen/IndustrialSolution#investitionen', icon: ArrowUpRight },
           ]
        },
        {
          name: t('solutions.emission.name'),
          href: '/lösungen/Emission',
          title: t('solutions.emission.title'),
          detailedDescription: t('solutions.emission.description'),

          sections: [
            { name: t('solutions.emission.sections.accounting'), href: '/lösungen/Emission#bilanzierung', icon: ArrowUpDown },
            { name: t('solutions.emission.sections.operations'), href: '/lösungen/Emission#betrieb', icon: Sparkles },
            { name: t('solutions.emission.sections.planning'), href: '/lösungen/Emission#planung', icon: Expand },
          ]
        }
      ]
    },
 /*   {
      name: t('nav.whyVolatile'),
      href: '/why-volatile/data-gateway',
      description: 'Erfahren Sie, warum führende Finanzinstitute und Unternehmen weltweit auf Volatile als ihren vertrauenswürdigen Partner für Market Data und Analytics setzen.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
      dropdown: [
        {
          name: t('whyVolatile.dataGateway'),
          href: '/why-volatile/data-gateway',
          detailedDescription: 'Unsere proprietäre Data Gateway Plattform sammelt, verarbeitet und harmonisiert Daten aus über 500 globalen Quellen und bietet Ihnen eine einheitliche Schnittstelle zu den umfassendsten Energiemarktdaten.',
          features: [
            '500+ Globale Datenquellen',
            'Automatisierte Datenharmonisierung',
            'Real-time Processing',
            'Enterprise-Grade APIs'
          ],
          sections: [
            { name: 'Platform Overview', href: '/why-volatile/data-gateway#platform-overview' },
            { name: 'Data Sources', href: '/why-volatile/data-gateway#data-sources' },
            { name: 'Processing Pipeline', href: '/why-volatile/data-gateway#processing-pipeline' },
            { name: 'API Integration', href: '/why-volatile/data-gateway#api-integration' }
          ]
        },
        {
          name: t('whyVolatile.energyIntelligence'),
          href: '/why-volatile/energy-intelligence',
          detailedDescription: 'Als Europas führende Quelle für Energiemarkt-Intelligence bieten wir unvergleichliche Abdeckung, Tiefe und Qualität von Marktdaten und Analytics für den gesamten europäischen Energiesektor.',
          features: [
            'Vollständige EU-Marktabdeckung',
            'Proprietäre Analytics-Modelle',
            'Regulatorische Expertise',
            'Marktführende Datenqualität'
          ],
          sections: [
            { name: 'Market Coverage', href: '/why-volatile/energy-intelligence#market-coverage' },
            { name: 'Analytics Excellence', href: '/why-volatile/energy-intelligence#analytics-excellence' },
            { name: 'Regulatory Expertise', href: '/why-volatile/energy-intelligence#regulatory-expertise' },
            { name: 'Client Success', href: '/why-volatile/energy-intelligence#client-success' }
          ],
          isSpecial: false
        },
        { 
          name: t('solutions.fundamentalModel'), 
          href: '/lösungen/fundamental-model',
          detailedDescription: 'Unser proprietäres Fundamentalmodell für die europäischen Strommärkte. Präzise Marktprognosen durch detaillierte Abbildung von Angebot, Nachfrage und Netzinfrastruktur.',
          features: [
            'Europäisches Verbundnetz',
            'Merit-Order Simulation',
            'MILP Optimierung',
            'Stündliche Auflösung'
          ],
          sections: [
            { name: 'Model Overview', href: '/lösungen/fundamental-model#overview' },
            { name: 'Methodology', href: '/lösungen/fundamental-model#methodology' },
            { name: 'Data Sources', href: '/lösungen/fundamental-model#data-sources' },
            { name: 'Applications', href: '/lösungen/fundamental-model#applications' }
          ],
          isSpecial: true // Flag to make this button black
        }
      ]
    },*/
    {
      name: t('nav.company'),
      href: '/company',
      description: t('nav.company.description'),
      image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
      hasHover: true, // Indicates this item has a hover menu
      dropdown: [
        {
          name: t('company.visionMission'),
          href: '/company#vision-mission',
          title: t('company.visionMission.nav.title'),
          detailedDescription: t('company.visionMission.nav.description'),
          image: '',
          sections: [
           
          ]
        },
        /*{
          name: t('company.careers'),
          href: '/company#careers',
          detailedDescription: 'Werden Sie Teil unseres Teams und gestalten Sie die Zukunft der Finanzmarkt-Technologie mit. Wir bieten spannende Karrieremöglichkeiten in einem innovativen Umfeld.',
          features: [
            'Flexible Arbeitszeiten',
            'Remote Work möglich',
            'Weiterbildungsmöglichkeiten',
            'Internationale Teams'
          ],
          sections: [
            { name: 'Offene Stellen', href: '/company#open-positions' },
            { name: 'Benefits', href: '/company#benefits' },
            { name: 'Bewerbungsprozess', href: '/company#application' },
            { name: 'Arbeitskultur', href: '/company#culture' }
          ]
        },*/
        {
          name: t('company.contact'),
          href: '/kontakt',
          title: t('company.contact.nav.title'),
          detailedDescription: t('company.contact.nav.description'),
          image: '',
          sections: [
          
          ],
          isSpecial: false
        }
      ]
    }
  ];

  // Handle mouse enter on sub-items
  const handleSubItemMouseEnter = (itemName: string, subItemName: string) => {
    // Clear any pending timeout
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    setHoveredSubItems(prev => ({
      ...prev,
      [itemName]: subItemName
    }));
    
    setLastHoveredSubItems(prev => ({
      ...prev,
      [itemName]: subItemName
    }));
  };

  // Handle mouse leave from sub-items
  const handleSubItemMouseLeave = (itemName: string) => {
    // Don't immediately clear the hover state, wait a bit
    hoverTimeoutRef.current = setTimeout(() => {
      if (!isHoveringMenus[itemName]) {
        setHoveredSubItems(prev => ({
          ...prev,
          [itemName]: null
        }));
      }
    }, 100);
  };

  // Handle mouse enter on the entire menu
  const handleMenuMouseEnter = (item: any) => {
    setIsHoveringMenus(prev => ({
      ...prev,
      [item.name]: true
    }));
    
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    
    // If no item has been hovered yet for this specific menu, preselect the first dropdown item
    if (!hoveredSubItems[item.name] && !lastHoveredSubItems[item.name] && item.dropdown && item.dropdown.length > 0) {
      const firstItem = item.dropdown[0].name;
      setHoveredSubItems(prev => ({
        ...prev,
        [item.name]: firstItem
      }));
      setLastHoveredSubItems(prev => ({
        ...prev,
        [item.name]: firstItem
      }));
    }
  };

  // Handle mouse leave from the entire menu
  const handleMenuMouseLeave = (itemName: string) => {
    setIsHoveringMenus(prev => ({
      ...prev,
      [itemName]: false
    }));
    
    // Keep the last hovered item visible even after leaving the menu
    setHoveredSubItems(prev => ({
      ...prev,
      [itemName]: lastHoveredSubItems[itemName]
    }));
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Get the active sub-item for display
  const getActiveSubItem = (item: any) => {
    if (!item.dropdown) return null;
    
    const activeSubItemName = hoveredSubItems[item.name] || lastHoveredSubItems[item.name] || item.dropdown[0]?.name;
    return item.dropdown.find((sub: any) => sub.name === activeSubItemName) || item.dropdown[0];
  };

  // Check if a sub-item should be highlighted (selected state) for specific item
  const isSubItemActive = (subItemName: string, item: any) => {
    const activeSubItem = hoveredSubItems[item.name] || lastHoveredSubItems[item.name];
    
    // If we have an active item, use that
    if (activeSubItem) {
      return activeSubItem === subItemName;
    }
    
    // If no active item, highlight the first one as default
    if (item.dropdown && item.dropdown.length > 0) {
      return item.dropdown[0].name === subItemName;
    }
    
    return false;
  };

  // Check if current path matches any subpage of the main item
  const isMainItemActive = (item: any) => {
    if (item.dropdown) {
      return item.dropdown.some((subItem: any) => {
        const basePath = subItem.href.split('#')[0];
        const currentPath = location.pathname;
        
        // Decode both paths to handle umlauts and special characters
        const decodedBasePath = decodeURIComponent(basePath);
        const decodedCurrentPath = decodeURIComponent(currentPath);
        
        // Remove leading slash for comparison if present
        const normalizedBasePath = decodedBasePath.startsWith('/') ? decodedBasePath.slice(1) : decodedBasePath;
        const normalizedCurrentPath = decodedCurrentPath.startsWith('/') ? decodedCurrentPath.slice(1) : decodedCurrentPath;
        
        return normalizedCurrentPath === normalizedBasePath || 
               normalizedCurrentPath.startsWith(normalizedBasePath + '/');
      });
    }
    return location.pathname === item.href;
  };

  // Handle section click - close menu and navigate
  const handleSectionClick = () => {
    // Close the menu by removing hover states
    setIsHoveringMenus({});
    setHoveredSubItems({});
    setIsMenuOpen(false);
  };

  // Handle navigation to section with smooth scrolling
  const handleSectionNavigation = (href: string) => {
    // Close the menu first
    handleSectionClick();
    
    // Check if the link contains a hash (section anchor)
    if (href.includes('#')) {
      const [path, hash] = href.split('#');
      
      // If we're already on the correct page, just scroll to the section
      if (location.pathname === path) {
        setTimeout(() => {
          const element = document.getElementById(hash);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
      // If we need to navigate to a different page, the Link component will handle it
      // and the page will scroll to the section on load via the hash in the URL
    }
  };

  return (
    <nav className="bg-white dark:bg-gray-900 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 relative">
          {/* Logo on the left */}
          <div className="flex items-center h-full">
            <Link to="/" className="flex-shrink-0 flex items-center hover:opacity-80 transition-opacity duration-200">
              <VolatileLogo className="text-black dark:text-white transition-colors duration-300" />
            </Link>
          </div>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center justify-center flex-1">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  to={item.href}
                  className={`inline-flex items-center px-2 py-2 text-sm font-medium transition-colors duration-200 ${
                    isMainItemActive(item)
                      ? 'text-night-blue dark:text-blue-400 border-b-2 border-night-blue dark:border-blue-400'
                      : 'text-black dark:text-gray-200 hover:text-night-blue dark:hover:text-blue-400'
                  }`}
                >
                  {item.name}
                  {(item.dropdown || item.hasHover) && <ChevronDown className="ml-1 h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />}
                </Link>
                
                {/* Dropdown Menu - For items with dropdown */}
                {item.dropdown && (
                  <div 
                    className="absolute left-0 mt-2 w-[900px] max-w-[90vw] bg-white dark:bg-gray-800 rounded-xl shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border border-gray-100 dark:border-gray-700"
                    style={{ left: '50%', transform: 'translateX(-50%)' }}
                    onMouseEnter={() => handleMenuMouseEnter(item)}
                    onMouseLeave={() => handleMenuMouseLeave(item.name)}
                  >
                    <div className="flex flex-col md:flex-row">
                      {/* Left Sidebar - Category Navigation */}
                      <div className="w-full md:w-80 bg-gray-50 dark:bg-gray-700 rounded-t-xl md:rounded-l-xl md:rounded-tr-none p-6 border-b md:border-b-0 md:border-r border-gray-200 dark:border-gray-600">
                        <div className="space-y-2">
                          {item.dropdown.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className={`group/item flex items-start p-4 rounded-lg transition-all duration-200 border-l-4 ${
                                subItem.isSpecial 
                                  ? 'bg-black text-white hover:bg-gray-800 border-black' 
                                  : isSubItemActive(subItem.name, item)
                                    ? 'bg-white dark:bg-gray-600 border-night-blue dark:border-blue-400 shadow-sm'
                                    : 'hover:bg-white dark:hover:bg-gray-600 border-transparent hover:border-gray-200 dark:hover:border-gray-500 hover:shadow-sm'
                              }`}
                              onMouseEnter={() => handleSubItemMouseEnter(item.name, subItem.name)}
                              onMouseLeave={() => handleSubItemMouseLeave(item.name)}
                              onClick={handleSectionClick}
                            >
                              <div className="flex-1">
                                <div className="flex items-center justify-between">
                                  <div className="flex items-center">
                                    {subItem.isSpecial && subItem.name === 'Kontakt & Demo' && (
                                      <Mail className="h-4 w-4 mr-2" />
                                    )}
                                    <span className={`font-semibold text-base transition-colors duration-200 ${
                                      subItem.isSpecial 
                                        ? 'text-white' 
                                        : isSubItemActive(subItem.name, item)
                                          ? 'text-night-blue dark:text-blue-400'
                                          : 'text-black dark:text-gray-200 group-hover/item:text-night-blue dark:group-hover/item:text-blue-400'
                                    }`}>
                                      {subItem.name}
                                    </span>
                                  </div>
                                  <ArrowRight className={`h-4 w-4 transition-all duration-200 ${
                                    isSubItemActive(subItem.name, item)
                                      ? 'opacity-100 translate-x-1' 
                                      : 'opacity-0'
                                  } ${
                                    subItem.isSpecial ? 'text-white' : 'text-night-blue dark:text-blue-400'
                                  }`} />
                                </div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      {/* Right Side - Merged Content Area */}
                      <div className="flex-1 p-6 bg-gradient-to-br from-white dark:from-gray-800 to-gray-50 dark:to-gray-700 rounded-b-xl md:rounded-r-xl md:rounded-bl-none">
                        <div className="h-full flex flex-col">
                          {(() => {
                            const activeSubItem = getActiveSubItem(item);
                            return activeSubItem ? (
                              <>
                                {/* Upper Section - Subpage Information */}
                                <div className="mb-6">
                                  {/* Text content first */}
                                  <h4 className="font-headline font-bold text-black dark:text-white mb-3 text-xl">
                                    {activeSubItem.title || activeSubItem.name}
                                  </h4>
                                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                                    {activeSubItem.detailedDescription}
                                  </p>
                                  
                                  {/* Image below text (if available) */}
                                  {activeSubItem.image && (
                                    <div className="w-full mt-4">
                                      <div className="rounded-lg overflow-hidden h-40">
                                        <img 
                                          src={activeSubItem.image} 
                                          alt={activeSubItem.name} 
                                          className="w-full h-full object-cover"
                                        />
                                      </div>
                                    </div>
                                  )}
                                  
                                  {/* Features List */}
                                  {activeSubItem.features && (
                                    <div className="mb-4 mt-4">
                                      <h5 className="font-semibold text-gray-900 dark:text-gray-100 mb-2 text-sm">
                                        {activeSubItem.name === 'Kontakt & Demo' ? 'Was Sie erwarten können:' : 'Hauptfunktionen:'}
                                      </h5>
                                      <div className="grid grid-cols-2 gap-2">
                                        {activeSubItem.features.map((feature, index) => (
                                          <div key={index} className="flex items-start text-sm text-gray-600 dark:text-gray-300">
                                            <div className="w-1.5 h-1.5 bg-night-blue dark:bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                                            {feature}
                                          </div>
                                        ))}
                                      </div>
                                    </div>
                                  )}
                                </div>
                                
                                {/* Lower Section - Page Sections with Enhanced Button Styling */}
                                <div className="pt-4">
                                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                     {activeSubItem.sections?.map((section) => (
                                       <Link
                                         key={section.name}
                                         to={section.href}
                                         className="flex items-center px-4 py-3 text-sm text-gray-700 dark:text-gray-300 bg-white dark:bg-gray-600 hover:text-white hover:custom-orange-bg rounded-lg transition-all duration-200 border border-gray-200 dark:border-gray-500 hover:custom-orange-border shadow-sm hover:shadow-md transform hover:scale-105 font-medium"
                                         onClick={() => handleSectionNavigation(section.href)}
                                       >
                                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover:bg-white">
                                          {section.icon && <section.icon className="w-4 h-4 text-orange-500" />}
                                        </div>
                                        <span>{section.name}</span>
                                       </Link>
                                     )) || (
                                       <p className="text-sm text-gray-500 dark:text-gray-400 italic col-span-2">
                                         {t('nav.dropdown.noSubareas')}
                                       </p>
                                     )}
                                   </div>
                                </div>
                                
                                {/* CTA Button */}
                                {activeSubItem.name !== t('company.contact') && (
                                  <div className="mt-auto pt-4">
                                    <Link
                                      to={activeSubItem.href}
                                      className="inline-flex items-center bg-night-blue dark:bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:custom-orange-bg dark:hover:bg-blue-700 transition-colors duration-200 text-sm"
                                      onClick={handleSectionClick}
                                    >
                                      {activeSubItem.name === t('company.contact') ? t('nav.bookDemo') : t('nav.dropdown.learnMore')}
                                      <ArrowRight className="h-4 w-4 ml-2" />
                                    </Link>
                                  </div>
                                )}
                              </>
                            ) : (
                              <div className="flex items-center justify-center h-full">
                                <p className="text-gray-500 dark:text-gray-400">{t('nav.dropdown.selectArea')}</p>
                              </div>
                            );
                          })()}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
            
          {/* Action Buttons - Right side for desktop */}
          <div className="hidden md:flex items-center space-x-3 ml-auto">
            <Link 
              to="/kontakt"
              className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-full font-semibold hover:bg-gray-800 dark:hover:custom-orange-bg transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              {t('nav.bookDemo')}
            </Link>
            <Link
              to="/platform"
              className="bg-gray-500 dark:bg-gray-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-gray-600 dark:hover:bg-gray-700 transition-all duration-200 transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              {t('nav.accessPlatform')}
            </Link>
            {/* ThemeToggle component commented out */}
            {/* <ThemeToggle /> */}
            <LanguageSwitcher />
          </div>

          {/* Mobile menu button - Aligned to the right */}
          <div className="md:hidden flex items-center ml-auto">
            {/* ThemeToggle component commented out */}
            {/* <ThemeToggle /> */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-black dark:text-gray-200 hover:text-night-blue dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 overflow-y-auto max-h-[calc(100vh-4rem)]">
          <div className="px-2 pt-2 pb-3 space-y-1">
                          
              {/* Language Switcher for Mobile */}
              <div className="flex justify-end pt-2">
                <LanguageSwitcher />
              </div>
              
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className={`flex items-center px-3 py-3 text-base font-medium transition-colors duration-200 ${
                    isMainItemActive(item)
                      ? 'text-night-blue dark:text-blue-400 bg-gray-50 dark:bg-gray-800'
                      : 'text-black dark:text-gray-200 hover:text-night-blue dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
                {/* Mobile dropdown items */}
                {item.dropdown && (
                  <div className="pl-6 space-y-1 bg-gray-50 dark:bg-gray-800">
                    {item.dropdown.map((subItem) => (
                      <div key={subItem.name}>
                        <Link
                          to={subItem.href}
                          className={`block px-4 py-2 text-sm transition-colors duration-150 rounded-md ${
                            subItem.isSpecial 
                              ? 'bg-black text-white hover:bg-gray-800' 
                              : 'text-gray-600 dark:text-gray-300 hover:text-night-blue dark:hover:text-blue-400 hover:bg-white dark:hover:bg-gray-700'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <div className="font-medium flex items-center text-base">
                            {subItem.isSpecial && subItem.name === 'Kontakt & Demo' && (
                              <Mail className="h-4 w-4 mr-2" />
                            )}
                            {subItem.name}
                          </div>
                        </Link>
                       </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            
            {/* Mobile Action Buttons */}
            <div className="px-3 py-3 space-y-3">
              <Link
                to="/kontakt"
                className="w-full bg-night-blue dark:bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:custom-orange-bg dark:hover:bg-blue-700 transition-colors duration-200 block text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.bookDemo')}
              </Link>
              <div className="relative">
                <Link
                  to="/platform"
                  className="w-full bg-gray-500 dark:bg-gray-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-600 dark:hover:bg-gray-700 transition-colors duration-200 block text-center"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {t('nav.accessPlatform')}
                </Link>
                {/* Beta Tag for Mobile */}
                {/* <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-full transform rotate-12 shadow-sm">
                  Beta
                </span> */}
              </div>

            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;