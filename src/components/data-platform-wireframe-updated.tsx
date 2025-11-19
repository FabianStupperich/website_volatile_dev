import React, { useState } from 'react';

const DataPlatformConcept = () => {
  const [mainSection, setMainSection] = useState('dashboard');
  const [activeSubSection, setActiveSubSection] = useState('overview');
  const [activeThirdLevel, setActiveThirdLevel] = useState('strom');
  const [datasetType, setDatasetType] = useState('overview');
  const [dataView, setDataView] = useState('historical');
  const [showLLMPopup, setShowLLMPopup] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [showUpgradePopup, setShowUpgradePopup] = useState(false);
  const [hoveredSubSection, setHoveredSubSection] = useState<string | null>(null);
  const [showKraftwerkPopup, setShowKraftwerkPopup] = useState(false);
  
  // Hauptnavigationsstruktur
  const mainNavigation = [
    {
      id: 'dashboard',
      name: 'Dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      subSections: [
        { id: 'overview', name: 'Übersicht' }
      ]
    },
    { 
      id: 'data-hub', 
      name: 'Market Data',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      ),
      subSections: [
        { id: 'marktdaten', name: 'Marktdaten' },
        { id: 'fundamentaldaten', name: 'Fundamentaldaten' },
        { id: 'umweltdaten', name: 'Umwelt- & Klimadaten' },
        { id: 'kontextdaten', name: 'Kontextdaten' },
        { id: 'datenkatalog', name: 'Datenkatalog' }
      ]
    },
    { 
      id: 'scenario', 
      name: 'Analytics',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      subSections: [
        { id: 'short-term', name: 'Kurzfristig' },
        { id: 'mid-term', name: 'Mittelfristig' },
        { id: 'long-term', name: 'Langfristig' }
      ]
    },
    { 
      id: 'simulation', 
      name: 'Reports',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      subSections: [
        { id: 'load-analysis', name: 'Lastganganalyse' },
        { id: 'market-sim', name: 'Strommarktsimulation' }
      ]
    }
  ];

  // Dritte Navigationsebene für verschiedene Bereiche
  const getThirdLevelNav = () => {
    if (mainSection === 'data-hub') {
      if (activeSubSection === 'marktdaten') {
        return [
          { id: 'strom', name: 'Strom' },
          { id: 'gas', name: 'Gas' },
          { id: 'oel', name: 'Öl' },
          { id: 'wasserstoff', name: 'Wasserstoff' },
          { id: 'kohle', name: 'Kohle' }
        ];
      } else if (activeSubSection === 'fundamentaldaten') {
        return [
          { id: 'strom', name: 'Strom' },
          { id: 'gas', name: 'Gas' },
          { id: 'oel', name: 'Öl' },
          { id: 'erneuerbare', name: 'Erneuerbare' },
          { id: 'waerme', name: 'Wärme' }
        ];
      } else if (activeSubSection === 'umweltdaten') {
        return [
          { id: 'wetterdaten', name: 'Wetterdaten' },
          { id: 'emissionsdaten', name: 'Emissionsdaten' },
          { id: 'nachhaltigkeit', name: 'Nachhaltigkeitsindikatoren' },
          { id: 'klimarisiko', name: 'Klimarisikometriken' }
        ];
      } else if (activeSubSection === 'kontextdaten') {
        return [
          { id: 'soziooekonomie', name: 'Sozioökonomische Daten' },
          { id: 'regulatorik', name: 'Regulatorische Informationen' },
          { id: 'geopolitik', name: 'Geopolitische Faktoren' },
          { id: 'technologie', name: 'Technologietrends' }
        ];
      }
    }
    return null;
  };

  const thirdLevelNav = getThirdLevelNav();
  
  // Datensatz-Matrix je nach ausgewähltem Bereich
  const getDatasetMatrix = () => {
    if (mainSection === 'dashboard') {
      return {
        datasets: [],
        viewOptions: []
      };
    } else if (mainSection === 'data-hub') {
      if (activeSubSection === 'marktdaten') {
        if (activeThirdLevel === 'strom') {
          return {
            datasets: [
              { id: 'overview', name: 'Überblick', isCategory: false },
              { id: 'preise', name: 'Preise', isCategory: true },
              { id: 'spot-day-ahead', name: 'Spot Day-Ahead', parentId: 'preise' },
              { id: 'spot-intraday', name: 'Spot Intraday', parentId: 'preise' },
              { id: 'terminmarkt', name: 'Terminmarkt', parentId: 'preise' },
              { id: 'regelenergie', name: 'Regelenergie', parentId: 'preise' },
              { id: 'transport', name: 'Transport', isCategory: true },
              { id: 'netzentgelte', name: 'Netzentgelte', parentId: 'transport' },
              { id: 'engpass', name: 'Engpassmanagement', parentId: 'transport' },
              { id: 'redispatch', name: 'Redispatch-Kosten', parentId: 'transport' }
            ],
            viewOptions: [
              { id: 'historical', name: 'Historische Daten' },
              { id: 'forecast', name: 'Prognosen' },
              { id: 'analysis', name: 'Analysen' },
              { id: 'methodology', name: 'Methodik' },
              { id: 'sources', name: 'Datenquellen' }
            ]
          };
        } else if (activeThirdLevel === 'gas') {
          return {
            datasets: [
              { id: 'overview', name: 'Überblick', isCategory: false },
              { id: 'preise', name: 'Preise', isCategory: true },
              { id: 'spot-ttf', name: 'Spot TTF', parentId: 'preise' },
              { id: 'spot-ncg', name: 'Spot NCG', parentId: 'preise' },
              { id: 'terminmarkt', name: 'Terminmarkt', parentId: 'preise' },
              { id: 'transport', name: 'Transport', isCategory: true },
              { id: 'pipeline-tarife', name: 'Pipeline-Tarife', parentId: 'transport' },
              { id: 'lng-frachtraten', name: 'LNG Frachtraten', parentId: 'transport' }
            ],
            viewOptions: [
              { id: 'historical', name: 'Historische Daten' },
              { id: 'forecast', name: 'Prognosen' },
              { id: 'analysis', name: 'Analysen' },
              { id: 'methodology', name: 'Methodik' },
              { id: 'sources', name: 'Datenquellen' }
            ]
          };
        } else {
          return {
            datasets: [
              { id: 'overview', name: 'Überblick', isCategory: false },
              { id: 'preise', name: 'Preise', isCategory: false },
              { id: 'transport', name: 'Transport', isCategory: false }
            ],
            viewOptions: [
              { id: 'historical', name: 'Historische Daten' },
              { id: 'forecast', name: 'Prognosen' },
              { id: 'analysis', name: 'Analysen' },
              { id: 'methodology', name: 'Methodik' },
              { id: 'sources', name: 'Datenquellen' }
            ]
          };
        }
      } else if (activeSubSection === 'fundamentaldaten') {
        if (activeThirdLevel === 'strom') {
          return {
            datasets: [
              { id: 'overview', name: 'Überblick', isCategory: false },
              { id: 'erzeugung', name: 'Erzeugung', isCategory: true },
              { id: 'kraftwerkspark', name: 'Kraftwerkspark', parentId: 'erzeugung' },
              { id: 'verfuegbarkeiten', name: 'Verfügbarkeiten', parentId: 'erzeugung' },
              { id: 'ee-einspeisung', name: 'EE-Einspeisung', parentId: 'erzeugung' },
              { id: 'speicherung', name: 'Speicherung', isCategory: true },
              { id: 'pumpspeicher', name: 'Pumpspeicher', parentId: 'speicherung' },
              { id: 'batteriespeicher', name: 'Batteriespeicher', parentId: 'speicherung' },
              { id: 'verbrauch', name: 'Verbrauch', isCategory: true },
              { id: 'gesamtlast', name: 'Gesamtlast', parentId: 'verbrauch' },
              { id: 'sektoraler-verbrauch', name: 'Sektoraler Verbrauch', parentId: 'verbrauch' },
              { id: 'infrastruktur', name: 'Infrastruktur', isCategory: true },
              { id: 'uebertragungsnetz', name: 'Übertragungsnetz', parentId: 'infrastruktur' },
              { id: 'verteilnetz', name: 'Verteilnetz', parentId: 'infrastruktur' }
            ],
            viewOptions: [
              { id: 'historical', name: 'Historische Daten' },
              { id: 'forecast', name: 'Prognosen' },
              { id: 'analysis', name: 'Analysen' },
              { id: 'methodology', name: 'Methodik' },
              { id: 'sources', name: 'Datenquellen' }
            ]
          };
        } else {
          return {
            datasets: [
              { id: 'overview', name: 'Überblick', isCategory: false }
            ],
            viewOptions: [
              { id: 'historical', name: 'Historische Daten' },
              { id: 'forecast', name: 'Prognosen' },
              { id: 'analysis', name: 'Analysen' },
              { id: 'methodology', name: 'Methodik' },
              { id: 'sources', name: 'Datenquellen' }
            ]
          };
        }
      } else if (activeSubSection === 'umweltdaten') {
        if (activeThirdLevel === 'wetterdaten') {
          return {
            datasets: [
              { id: 'overview', name: 'Überblick', isCategory: false },
              { id: 'temperatur', name: 'Temperatur', isCategory: false },
              { id: 'windgeschwindigkeiten', name: 'Windgeschwindigkeiten', isCategory: false },
              { id: 'solareinstrahlung', name: 'Solareinstrahlung', isCategory: false },
              { id: 'extremwetterereignisse', name: 'Extremwetterereignisse', isCategory: false }
            ],
            viewOptions: [
              { id: 'historical', name: 'Historische Daten' },
              { id: 'forecast', name: 'Prognosen' },
              { id: 'analysis', name: 'Analysen' },
              { id: 'methodology', name: 'Methodik' },
              { id: 'sources', name: 'Datenquellen' }
            ]
          };
        } else {
          return {
            datasets: [
              { id: 'overview', name: 'Überblick', isCategory: false }
            ],
            viewOptions: [
              { id: 'historical', name: 'Historische Daten' },
              { id: 'forecast', name: 'Prognosen' },
              { id: 'analysis', name: 'Analysen' },
              { id: 'methodology', name: 'Methodik' },
              { id: 'sources', name: 'Datenquellen' }
            ]
          };
        }
      } else if (activeSubSection === 'kontextdaten') {
        if (activeThirdLevel === 'soziooekonomie') {
          return {
            datasets: [
              { id: 'overview', name: 'Überblick', isCategory: false },
              { id: 'bip-entwicklung', name: 'BIP-Entwicklung', isCategory: false },
              { id: 'bevoelkerungsentwicklung', name: 'Bevölkerungsentwicklung', isCategory: false },
              { id: 'arbeitsmarktdaten', name: 'Arbeitsmarktdaten', isCategory: false },
              { id: 'verbraucherpreisindex', name: 'Verbraucherpreisindex', isCategory: false }
            ],
            viewOptions: [
              { id: 'historical', name: 'Historische Daten' },
              { id: 'forecast', name: 'Prognosen' },
              { id: 'analysis', name: 'Analysen' },
              { id: 'methodology', name: 'Methodik' },
              { id: 'sources', name: 'Datenquellen' }
            ]
          };
        } else {
          return {
            datasets: [
              { id: 'overview', name: 'Überblick', isCategory: false }
            ],
            viewOptions: [
              { id: 'historical', name: 'Historische Daten' },
              { id: 'forecast', name: 'Prognosen' },
              { id: 'analysis', name: 'Analysen' },
              { id: 'methodology', name: 'Methodik' },
              { id: 'sources', name: 'Datenquellen' }
            ]
          };
        }
      } else if (activeSubSection === 'datenkatalog') {
        return {
          datasets: [
            { id: 'overview', name: 'Katalogübersicht', isCategory: false },
            { id: 'search', name: 'Datensatzsuche', isCategory: false },
            { id: 'categories', name: 'Nach Kategorien', isCategory: false },
            { id: 'sources', name: 'Nach Datenquellen', isCategory: false },
            { id: 'favorites', name: 'Meine Favoriten', isCategory: false },
            { id: 'recent', name: 'Zuletzt verwendet', isCategory: false }
          ],
          viewOptions: [
            { id: 'list', name: 'Listenansicht' },
            { id: 'grid', name: 'Kachelansicht' },
            { id: 'tree', name: 'Baumansicht' }
          ]
        };
      } else {
        return {
          datasets: [
            { id: 'overview', name: 'Überblick', isCategory: false }
          ],
          viewOptions: [
            { id: 'view', name: 'Anzeigen' }
          ]
        };
      }
    } else {
      return {
        datasets: [
          { id: 'overview', name: 'Überblick', isCategory: false }
        ],
        viewOptions: [
          { id: 'view', name: 'Anzeigen' }
        ]
      };
    }
  };
  
  const matrix = getDatasetMatrix() || { datasets: [], viewOptions: [] };
  
  // Dashboard-Filter-Optionen
  const dashboardFilters = [
    { id: 'region', name: 'Region', options: ['Deutschland', 'Frankreich', 'Benelux', 'Skandinavien', 'Südeuropa'] },
    { id: 'time-horizon', name: 'Zeithorizont', options: ['Tag', 'Woche', 'Monat', 'Quartal', 'Jahr'] },
    { id: 'resolution', name: 'Zeitliche Auflösung', options: ['15 Min', 'Stündlich', 'Täglich', 'Wöchentlich', 'Monatlich'] }
  ];

  // Funktion um die Navigation bei Bereichswechsel zu resetten
  const resetNavigationDefaults = () => {
    const newMatrix = getDatasetMatrix();
    if (newMatrix.datasets && newMatrix.datasets.length > 0) {
      const overviewDataset = newMatrix.datasets.find(d => d.id === 'overview');
      if (overviewDataset) {
        setDatasetType(overviewDataset.id);
      } else {
        const firstDataset = newMatrix.datasets.find(d => !d.isCategory);
        if (firstDataset) {
          setDatasetType(firstDataset.id);
        }
      }
    }
    if (newMatrix.viewOptions && newMatrix.viewOptions.length > 0) {
      setDataView(newMatrix.viewOptions[0].id);
    }
  };
  
  return (
    <div className="flex h-screen bg-gray-50 relative">
      {/* Seitenleiste */}
      <div className={`${sidebarOpen ? 'w-64' : 'w-16'} bg-white shadow-lg transition-all duration-300 flex flex-col`}>
        {/* Sidebar Header */}
        <div className="p-4 border-b flex items-center justify-between">
          {sidebarOpen && <h1 className="text-lg font-semibold text-gray-800">VOLATILE</h1>}
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            {sidebarOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            )}
          </button>
        </div>
        
        {/* Sidebar Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          {mainNavigation.map(section => (
            <div key={section.id} className="mb-2">
              <button
                onClick={() => {
                  setMainSection(section.id);
                  if (section.subSections && section.subSections.length > 0) {
                    setActiveSubSection(section.subSections[0].id);
                    setTimeout(() => {
                      const newThirdLevel = getThirdLevelNav();
                      if (newThirdLevel && newThirdLevel.length > 0) {
                        setActiveThirdLevel(newThirdLevel[0].id);
                      }
                      resetNavigationDefaults();
                    }, 0);
                  }
                }}
                className={`w-full flex items-center ${sidebarOpen ? 'justify-start' : 'justify-center'} px-3 py-2 rounded-lg transition-colors ${
                  mainSection === section.id 
                    ? 'bg-teal-50 text-teal-600' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-800'
                }`}
              >
                {section.icon}
                {sidebarOpen && <span className="ml-3">{section.name}</span>}
              </button>
            </div>
          ))}
        </nav>
        
        {/* User Profile */}
        <div className="p-4 border-t">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">U</span>
            </div>
            {sidebarOpen && (
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-700">User</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Hauptbereich */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header - Dark theme like mockup */}
        <header className="bg-slate-800 text-white shadow-sm p-4 flex items-center justify-between z-10">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-6">
              {mainNavigation.map(section => (
                <button
                  key={section.id}
                  onClick={() => {
                    setMainSection(section.id);
                    if (section.subSections && section.subSections.length > 0) {
                      setActiveSubSection(section.subSections[0].id);
                      setTimeout(() => {
                        const newThirdLevel = getThirdLevelNav();
                        if (newThirdLevel && newThirdLevel.length > 0) {
                          setActiveThirdLevel(newThirdLevel[0].id);
                        }
                        resetNavigationDefaults();
                      }, 0);
                    }
                  }}
                  className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    mainSection === section.id 
                      ? 'text-teal-400 bg-slate-700' 
                      : 'text-gray-300 hover:text-white hover:bg-slate-700'
                  }`}
                >
                  {section.name}
                </button>
              ))}
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-300 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5 5v-5zM9 7H4l5-5v5z" />
              </svg>
            </button>
            <button className="p-2 text-gray-300 hover:text-white">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </button>
            <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-medium">U</span>
            </div>
          </div>
        </header>
        
        {/* Zweite und dritte Navigationsebene */}
        {mainSection !== 'dashboard' && (
          <div className="bg-white shadow-sm">
            {/* Zweite Ebene der Navigation - Funktionale Bereiche */}
            <div className="flex border-b relative">
              {mainNavigation.find(section => section.id === mainSection)?.subSections.map(subSection => (
                <div key={subSection.id} className="relative">
                  <button
                    className={`px-4 py-2 text-sm font-medium ${subSection.id === activeSubSection ? 'text-teal-600 border-b-2 border-teal-600' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'}`}
                    onClick={() => {
                      setActiveSubSection(subSection.id);
                      setTimeout(() => {
                        const newThirdLevel = getThirdLevelNav();
                        if (newThirdLevel && newThirdLevel.length > 0) {
                          setActiveThirdLevel(newThirdLevel[0].id);
                        }
                        resetNavigationDefaults();
                      }, 0);
                    }}
                    onMouseEnter={() => setHoveredSubSection(subSection.id)}
                    onMouseLeave={() => setHoveredSubSection(null)}
                  >
                    {subSection.name}
                  </button>
                  
                  {/* Hover-Vorschau für dritte Ebene */}
                  {hoveredSubSection === subSection.id && (() => {
                    // Temporär die Werte setzen für getThirdLevelNav
                    const previewThirdLevel = (() => {
                      if (mainSection === 'data-hub') {
                        if (subSection.id === 'marktdaten') {
                          return [
                            { id: 'strom', name: 'Strom' },
                            { id: 'gas', name: 'Gas' },
                            { id: 'oel', name: 'Öl' },
                            { id: 'wasserstoff', name: 'Wasserstoff' },
                            { id: 'kohle', name: 'Kohle' }
                          ];
                        } else if (subSection.id === 'fundamentaldaten') {
                          return [
                            { id: 'strom', name: 'Strom' },
                            { id: 'gas', name: 'Gas' },
                            { id: 'oel', name: 'Öl' },
                            { id: 'erneuerbare', name: 'Erneuerbare' },
                            { id: 'waerme', name: 'Wärme' }
                          ];
                        } else if (subSection.id === 'umweltdaten') {
                          return [
                            { id: 'wetterdaten', name: 'Wetterdaten' },
                            { id: 'emissionsdaten', name: 'Emissionsdaten' },
                            { id: 'nachhaltigkeit', name: 'Nachhaltigkeitsindikatoren' },
                            { id: 'klimarisiko', name: 'Klimarisikometriken' }
                          ];
                        } else if (subSection.id === 'kontextdaten') {
                          return [
                            { id: 'soziooekonomie', name: 'Sozioökonomische Daten' },
                            { id: 'regulatorik', name: 'Regulatorische Informationen' },
                            { id: 'geopolitik', name: 'Geopolitische Faktoren' },
                            { id: 'technologie', name: 'Technologietrends' }
                          ];
                        }
                      }
                      return null;
                    })();
                    
                    return previewThirdLevel && previewThirdLevel.length > 0 ? (
                      <div className="absolute top-full left-0 mt-1 bg-white border rounded-lg shadow-lg z-50 min-w-96">
                        <div className="p-3">
                          <div className="text-xs font-medium text-gray-500 mb-3">Unterkategorien:</div>
                          <div className="flex flex-wrap gap-2">
                            {previewThirdLevel.slice(0, 4).map(item => (
                              <div key={item.id} className="text-sm text-gray-700 px-3 py-1 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors">
                                {item.name}
                              </div>
                            ))}
                            {previewThirdLevel.length > 4 && (
                              <div className="text-xs text-gray-400 px-3 py-1 bg-gray-50 rounded-full">
                                +{previewThirdLevel.length - 4} weitere...
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : null;
                  })()}
                </div>
              ))}
            </div>
            
            {/* Dritte Ebene der Navigation (Energieträger, Unterkategorien, etc.) */}
            {thirdLevelNav && thirdLevelNav.length > 0 && (
              <div className="flex border-b bg-gray-50">
                {thirdLevelNav.map(item => (
                  <button
                    key={item.id}
                    className={`px-4 py-2 text-sm ${item.id === activeThirdLevel ? 'text-teal-600 border-b-2 border-teal-600 bg-white' : 'text-gray-600 hover:text-gray-800 hover:bg-white'}`}
                    onClick={() => {
                      setActiveThirdLevel(item.id);
                      setTimeout(resetNavigationDefaults, 0);
                    }}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}
        
        {/* Hauptinhalt mit Matrix-Navigation */}
        <div className="flex-1 overflow-hidden p-6">
          {/* Dashboard mit Mockup-Design */}
          {mainSection === 'dashboard' ? (
            <div className="space-y-6">
              {/* Search and Filter Bar */}
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>
                    <input
                      type="text"
                      className="block w-80 pl-10 pr-3 py-2 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-1 focus:ring-teal-500 focus:border-teal-500"
                      placeholder="Search market data..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <button className="flex items-center px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z" />
                    </svg>
                    Filter
                  </button>
                </div>
                <button className="flex items-center px-4 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Export
                </button>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg border p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Market Overview</p>
                      <p className="text-3xl font-bold text-gray-900">€45.67</p>
                      <p className="text-sm text-green-600 font-medium">+2.4% today</p>
                    </div>
                    <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg border p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Active Datasets</p>
                      <p className="text-3xl font-bold text-gray-900">1,247</p>
                      <p className="text-sm text-gray-600">Real-time feeds</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg border p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">API Calls</p>
                      <p className="text-3xl font-bold text-gray-900">98.7%</p>
                      <p className="text-sm text-gray-600">Uptime</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chart der Woche - Electricity Price Volatility */}
              <div className="bg-white rounded-lg border p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Chart der Woche: Strompreis-Volatilität im europäischen Vergleich</h3>
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 h-80 rounded-lg flex flex-col items-center justify-center mb-4 relative overflow-hidden">
                  {/* Simulated Chart Background */}
                  <div className="absolute inset-0 opacity-10">
                    <svg className="w-full h-full" viewBox="0 0 800 300">
                      {/* Grid lines */}
                      <defs>
                        <pattern id="grid" width="40" height="30" patternUnits="userSpaceOnUse">
                          <path d="M 40 0 L 0 0 0 30" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#grid)" />
                      
                      {/* Simulated volatility lines for different countries */}
                      <path d="M50,150 Q150,120 250,140 T450,110 T650,130 T750,120" 
                            fill="none" stroke="#059669" strokeWidth="3" opacity="0.8"/>
                      <path d="M50,180 Q150,160 250,170 T450,150 T650,160 T750,155" 
                            fill="none" stroke="#dc2626" strokeWidth="3" opacity="0.8"/>
                      <path d="M50,160 Q150,140 250,155 T450,130 T650,145 T750,140" 
                            fill="none" stroke="#2563eb" strokeWidth="3" opacity="0.8"/>
                      <path d="M50,170 Q150,150 250,165 T450,140 T650,155 T750,150" 
                            fill="none" stroke="#7c3aed" strokeWidth="3" opacity="0.8"/>
                    </svg>
                  </div>
                  
                  {/* Chart Content */}
                  <div className="relative z-10 text-center">
                    <div className="mb-4">
                      <h4 className="text-xl font-semibold text-gray-700 mb-2">Strompreis-Volatilität (7-Tage rollierend)</h4>
                      <p className="text-sm text-gray-600">Standardabweichung der Day-Ahead Preise in €/MWh</p>
                    </div>
                    
                    {/* Legend */}
                    <div className="flex justify-center space-x-6 text-sm">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-600 rounded-full mr-2"></div>
                        <span className="text-gray-700">Deutschland: 12.3 €/MWh</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-600 rounded-full mr-2"></div>
                        <span className="text-gray-700">Frankreich: 15.8 €/MWh</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-blue-600 rounded-full mr-2"></div>
                        <span className="text-gray-700">Niederlande: 11.9 €/MWh</span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-purple-600 rounded-full mr-2"></div>
                        <span className="text-gray-700">Belgien: 13.7 €/MWh</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <p className="text-sm text-blue-800">
                    <strong>Analyse:</strong> Die Strompreisvolatilität in Deutschland hat sich im Vergleich zur Vorwoche um 23% erhöht, 
                    hauptsächlich getrieben durch schwankende Windenergieerzeugung und reduzierte französische Kernkraftkapazitäten. 
                    Die Niederlande zeigen die geringste Volatilität aufgrund stabiler Gasversorgung und flexibler Kraftwerkskapazitäten.
                  </p>
                </div>
                <div className="flex justify-between items-center mt-4">
                  <div className="text-sm text-gray-500">
                    Datenquelle: EPEX SPOT, Entsoe • Letzte Aktualisierung: {new Date().toLocaleDateString('de-DE')}
                  </div>
                  <button 
                    onClick={() => {
                      setMainSection('data-hub');
                      setActiveSubSection('marktdaten');
                      setActiveThirdLevel('strom');
                      setDatasetType('spot-day-ahead');
                      setDataView('analysis');
                    }}
                    className="text-teal-600 hover:text-teal-700 text-sm font-medium"
                  >
                    Zur detaillierten Analyse →
                  </button>
                </div>
              </div>

              {/* Recent Market Data Table */}
              <div className="bg-white rounded-lg border">
                <div className="p-6 border-b">
                  <h3 className="text-lg font-semibold text-gray-800">Recent Market Data</h3>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Market</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Change</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">DE Power Spot</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">€45.67/MWh</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">+2.4%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-gray-400 hover:text-gray-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">FR Power Spot</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">€42.15/MWh</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-medium">-1.2%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-gray-400 hover:text-gray-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                      <tr className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">TTF Gas</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">€28.90/MWh</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">+0.8%</td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button className="text-gray-400 hover:text-gray-600">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ) : (
            /* Matrix-Navigation für andere Bereiche */
            <div className="bg-white rounded-lg shadow-sm h-full">
              <div className="flex h-full">
                {/* Linke Spalte - Datensätze */}
                <div className="w-64 border-r flex-shrink-0">
                  <div className="p-3 bg-gray-50 border-b">
                    <h3 className="font-medium text-gray-700">
                      {mainSection === 'data-hub' ? 'Datensätze' : 
                       (mainSection === 'simulation' || mainSection === 'account') ? 'Bereiche' : 'Datensätze'}
                    </h3>
                  </div>
                  <div className="overflow-y-auto h-[calc(100%-49px)]">
                    {matrix.datasets && matrix.datasets.map(dataset => (
                      <button
                        key={dataset.id}
                        className={`w-full text-left ${dataset.isCategory ? 'font-medium text-gray-600 bg-gray-50 hover:bg-gray-100' : 'text-gray-700 hover:bg-gray-50'} ${dataset.parentId ? 'pl-6' : 'pl-3'} p-3 border-b ${datasetType === dataset.id ? 'bg-teal-50 text-teal-600 font-medium' : ''}`}
                        onClick={() => dataset.isCategory ? null : setDatasetType(dataset.id)}
                        disabled={dataset.isCategory}
                      >
                        {dataset.name}
                      </button>
                    ))}
                  </div>
                </div>
                
                {/* Rechte Seite - Ansichtsoptionen + Inhalt */}
                <div className="flex-1 flex flex-col">
                  {/* Ansichtsoptionen (Obere Zeile) */}
                  <div className="flex border-b bg-gray-50">
                    {matrix.viewOptions && matrix.viewOptions.map(option => (
                      <button
                        key={option.id}
                        className={`px-4 py-3 text-sm font-medium ${dataView === option.id ? 'text-teal-600 border-b-2 border-teal-600 bg-white' : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'}`}
                        onClick={() => setDataView(option.id)}
                      >
                        {option.name}
                      </button>
                    ))}
                  </div>
                  
                  {/* Inhalt basierend auf Auswahl */}
                  <div className="p-4 overflow-y-auto flex-1">
                    {/* Dynamische Filter-Optionen basierend auf ausgewählter Ansicht */}
                    {(dataView === 'historical' || dataView === 'forecast' || dataView === 'analysis') && activeSubSection !== 'datenkatalog' && (
                      <div className="mb-6 flex flex-wrap gap-4">
                        {dashboardFilters.map(filter => (
                          <div key={filter.id} className="flex items-center space-x-2">
                            <label className="text-sm font-medium text-gray-700">{filter.name}:</label>
                            <select className="text-sm border rounded-md px-2 py-1">
                              {filter.options.map(option => (
                                <option key={option}>{option}</option>
                              ))}
                            </select>
                          </div>
                        ))}
                        <button className="text-sm bg-teal-500 text-white px-3 py-1 rounded-md">Filter anwenden</button>
                      </div>
                    )}
                    
                    {/* Vereinfachte Filter für Datenquellen - nur Region */}
                    {dataView === 'sources' && (
                      <div className="mb-6 flex flex-wrap gap-4">
                        <div className="flex items-center space-x-2">
                          <label className="text-sm font-medium text-gray-700">Region:</label>
                          <select className="text-sm border rounded-md px-2 py-1">
                            <option>Alle Regionen</option>
                            <option>Deutschland</option>
                            <option>Frankreich</option>
                            <option>Benelux</option>
                            <option>Skandinavien</option>
                          </select>
                        </div>
                        <button className="text-sm bg-teal-500 text-white px-3 py-1 rounded-md">Auswählen</button>
                      </div>
                    )}
                    
                    {/* Dashboard-Inhalt */}
                    <div>
                      <h2 className="text-lg font-medium text-gray-800 mb-4">
                        {(() => {
                          const datasetName = matrix.datasets && matrix.datasets.find(d => d.id === datasetType)?.name;
                          const viewName = dataView === 'methodology' ? 'Methodik' : 
                                        matrix.viewOptions && matrix.viewOptions.find(v => v.id === dataView)?.name;
                          return datasetName && viewName ? `${datasetName} - ${viewName}` : '';
                        })()}
                      </h2>
                      
                      {/* Marktdaten - Strom - Spot Day-Ahead - Historische Daten */}
                      {mainSection === 'data-hub' && activeSubSection === 'marktdaten' && activeThirdLevel === 'strom' && datasetType === 'spot-day-ahead' && dataView === 'historical' && (
                        <div className="bg-white rounded-lg border p-4">
                          <div className="mb-4">
                            <h3 className="font-medium text-gray-700 mb-2">Day-Ahead Spotmarktpreise</h3>
                            <p className="text-sm text-gray-500">Historische Entwicklung der Day-Ahead Strompreise in ausgewählten Regionen</p>
                          </div>
                          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                            <p className="text-gray-500">Diagramm: Day-Ahead Spotmarktpreise im Zeitverlauf</p>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <button className="text-sm bg-gray-100 px-3 py-1 rounded mr-2">CSV exportieren</button>
                            <button className="text-sm bg-gray-100 px-3 py-1 rounded">Als Bild speichern</button>
                          </div>
                        </div>
                      )}
                      
                      {/* Marktdaten - Gas - Spot TTF */}
                      {mainSection === 'data-hub' && activeSubSection === 'marktdaten' && activeThirdLevel === 'gas' && datasetType === 'spot-ttf' && dataView === 'historical' && (
                        <div className="bg-white rounded-lg border p-4">
                          <div className="mb-4">
                            <h3 className="font-medium text-gray-700 mb-2">TTF Spot Gaspreise</h3>
                            <p className="text-sm text-gray-500">Historische Entwicklung der TTF (Title Transfer Facility) Spot-Gaspreise</p>
                          </div>
                          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                            <p className="text-gray-500">Diagramm: TTF Spot Gaspreise im Zeitverlauf</p>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <button className="text-sm bg-gray-100 px-3 py-1 rounded mr-2">CSV exportieren</button>
                            <button className="text-sm bg-gray-100 px-3 py-1 rounded">Als Bild speichern</button>
                          </div>
                        </div>
                      )}
                      
                      {/* Marktdaten - Gas - Pipeline-Tarife */}
                      {mainSection === 'data-hub' && activeSubSection === 'marktdaten' && activeThirdLevel === 'gas' && datasetType === 'pipeline-tarife' && dataView === 'historical' && (
                        <div className="bg-white rounded-lg border p-4">
                          <div className="mb-4">
                            <h3 className="font-medium text-gray-700 mb-2">Pipeline-Tarife</h3>
                            <p className="text-sm text-gray-500">Übersicht über Gastransport-Tarife in europäischen Pipeline-Netzen</p>
                          </div>
                          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                            <p className="text-gray-500">Tabelle: Pipeline-Tarife nach Transportrouten</p>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <button className="text-sm bg-gray-100 px-3 py-1 rounded mr-2">CSV exportieren</button>
                            <button className="text-sm bg-gray-100 px-3 py-1 rounded">Als Bild speichern</button>
                          </div>
                        </div>
                      )}
                      
                      {/* Fundamentaldaten - Strom - Kraftwerkspark mit In-App-Kauf */}
                      {mainSection === 'data-hub' && activeSubSection === 'fundamentaldaten' && activeThirdLevel === 'strom' && datasetType === 'kraftwerkspark' && (
                        <div className="bg-white rounded-lg border p-4">
                          <div className="mb-4">
                            <h3 className="font-medium text-gray-700 mb-2">Kraftwerkspark Deutschland</h3>
                            <p className="text-sm text-gray-500">Übersicht über alle Kraftwerke in Deutschland mit technischen Daten</p>
                          </div>
                          
                          {/* Vorschau-Tabelle */}
                          <div className="bg-gray-50 rounded-lg p-4 mb-4">
                            <div className="grid grid-cols-4 gap-4 text-sm font-medium text-gray-700 mb-3 pb-2 border-b">
                              <div>Kraftwerk</div>
                              <div>Typ</div>
                              <div>Leistung (MW)</div>
                              <div>Status</div>
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="grid grid-cols-4 gap-4 text-gray-600">
                                <div>Kraftwerk Neurath</div>
                                <div>Braunkohle</div>
                                <div>4.400</div>
                                <div className="text-green-600">Aktiv</div>
                              </div>
                              <div className="grid grid-cols-4 gap-4 text-gray-600">
                                <div>Kernkraftwerk Isar 2</div>
                                <div>Kernenergie</div>
                                <div>1.485</div>
                                <div className="text-red-600">Stillgelegt</div>
                              </div>
                              <div className="grid grid-cols-4 gap-4 text-gray-600">
                                <div>Offshore-Windpark Borkum</div>
                                <div>Wind Offshore</div>
                                <div>900</div>
                                <div className="text-green-600">Aktiv</div>
                              </div>
                              <div className="grid grid-cols-4 gap-4 text-gray-400 relative">
                                <div className="blur-sm">Kraftwerk Mannheim</div>
                                <div className="blur-sm">Steinkohle</div>
                                <div className="blur-sm">1.675</div>
                                <div className="blur-sm">Aktiv</div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                  <div className="bg-white px-3 py-1 rounded-lg shadow-md text-gray-600 text-xs">
                                    Premium Inhalt
                                  </div>
                                </div>
                              </div>
                              <div className="grid grid-cols-4 gap-4 text-gray-400 blur-sm">
                                <div>...</div>
                                <div>...</div>
                                <div>...</div>
                                <div>...</div>
                              </div>
                            </div>
                          </div>
                          
                          {/* In-App-Kauf Bereich */}
                          <div className="bg-gradient-to-r from-teal-50 to-blue-50 border border-teal-200 rounded-lg p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex-1">
                                <h4 className="font-medium text-gray-800 mb-2">🔓 Vollständige Kraftwerksliste freischalten</h4>
                                <p className="text-sm text-gray-600 mb-3">
                                  Erhalten Sie Zugang zu über 2.500 Kraftwerken mit detaillierten technischen Daten,
                                  Betreiber-Informationen und historischen Leistungsdaten.
                                </p>
                                <ul className="text-sm text-gray-600 space-y-1 mb-4">
                                  <li>✓ Vollständige Kraftwerksdatenbank</li>
                                  <li>✓ Technische Spezifikationen</li>
                                  <li>✓ Betreiber und Standortdaten</li>
                                  <li>✓ Historische Verfügbarkeit</li>
                                  <li>✓ Export-Funktionen</li>
                                </ul>
                              </div>
                              <div className="ml-6 text-center">
                                <div className="text-2xl font-bold text-gray-800 mb-1">€4999</div>
                                <div className="text-sm text-gray-500 mb-3">einmalig</div>
                                <button
                                  onClick={() => setShowKraftwerkPopup(true)}
                                  className="px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl font-medium"
                                >
                                  Jetzt kaufen
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Umweltdaten - Wetterdaten - Temperatur */}
                      {mainSection === 'data-hub' && activeSubSection === 'umweltdaten' && activeThirdLevel === 'wetterdaten' && datasetType === 'temperatur' && dataView === 'historical' && (
                        <div className="bg-white rounded-lg border p-4">
                          <div className="mb-4">
                            <h3 className="font-medium text-gray-700 mb-2">Temperaturdaten</h3>
                            <p className="text-sm text-gray-500">Historische Temperaturentwicklung in verschiedenen europäischen Regionen</p>
                          </div>
                          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                            <p className="text-gray-500">Diagramm: Temperaturverläufe nach Regionen</p>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <button className="text-sm bg-gray-100 px-3 py-1 rounded mr-2">CSV exportieren</button>
                            <button className="text-sm bg-gray-100 px-3 py-1 rounded">Als Bild speichern</button>
                          </div>
                        </div>
                      )}
                      
                      {/* Kontextdaten - Sozioökonomische Daten - BIP-Entwicklung */}
                      {mainSection === 'data-hub' && activeSubSection === 'kontextdaten' && activeThirdLevel === 'soziooekonomie' && datasetType === 'bip-entwicklung' && dataView === 'historical' && (
                        <div className="bg-white rounded-lg border p-4">
                          <div className="mb-4">
                            <h3 className="font-medium text-gray-700 mb-2">BIP-Entwicklung</h3>
                            <p className="text-sm text-gray-500">Bruttoinlandsprodukt-Entwicklung in europäischen Ländern</p>
                          </div>
                          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                            <p className="text-gray-500">Diagramm: BIP-Wachstum nach Ländern</p>
                          </div>
                          <div className="mt-4 flex justify-end">
                            <button className="text-sm bg-gray-100 px-3 py-1 rounded mr-2">CSV exportieren</button>
                            <button className="text-sm bg-gray-100 px-3 py-1 rounded">Als Bild speichern</button>
                          </div>
                        </div>
                      )}
                      
                      {/* Generische Datenansicht für andere Kombinationen */}
                      {!(mainSection === 'data-hub' && activeSubSection === 'marktdaten' && activeThirdLevel === 'strom' && datasetType === 'spot-day-ahead' && dataView === 'historical') &&
                       !(mainSection === 'data-hub' && activeSubSection === 'marktdaten' && activeThirdLevel === 'gas' && datasetType === 'spot-ttf' && dataView === 'historical') &&
                       !(mainSection === 'data-hub' && activeSubSection === 'marktdaten' && activeThirdLevel === 'gas' && datasetType === 'pipeline-tarife' && dataView === 'historical') &&
                       !(mainSection === 'data-hub' && activeSubSection === 'fundamentaldaten' && activeThirdLevel === 'strom' && datasetType === 'kraftwerkspark') &&
                       !(mainSection === 'data-hub' && activeSubSection === 'umweltdaten' && activeThirdLevel === 'wetterdaten' && datasetType === 'temperatur' && dataView === 'historical') &&
                       !(mainSection === 'data-hub' && activeSubSection === 'kontextdaten' && activeThirdLevel === 'soziooekonomie' && datasetType === 'bip-entwicklung' && dataView === 'historical') && (
                        <div className="bg-white rounded-lg border p-4">
                          <div className="bg-gray-100 h-64 rounded-lg flex items-center justify-center">
                            <p className="text-gray-500 text-center">
                              Datenvisualisierung für:<br/>
                              <span className="font-medium">
                                {mainNavigation.find(s => s.id === mainSection)?.name} &gt;
                                {mainNavigation.find(s => s.id === mainSection)?.subSections.find(ss => ss.id === activeSubSection)?.name}
                                {thirdLevelNav && activeThirdLevel && ` > ${thirdLevelNav.find(e => e.id === activeThirdLevel)?.name}`}
                                {matrix.datasets && ` > ${matrix.datasets.find(d => d.id === datasetType)?.name}`}
                                {matrix.viewOptions && ` > ${matrix.viewOptions.find(v => v.id === dataView)?.name}`}
                              </span>
                            </p>
                          </div>
                        </div>
                      )}
                      
                      {/* Upgrade Popup */}
                      {showUpgradePopup && (
                        <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center p-4 z-50">
                          <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl mx-auto">
                            <div className="p-6 border-b flex justify-between items-center">
                              <h3 className="text-xl font-semibold text-gray-800">Upgrade Optionen</h3>
                              <button
                                className="text-gray-500 hover:text-gray-700"
                                onClick={() => setShowUpgradePopup(false)}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </button>
                            </div>
                            <div className="p-6">
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Professional Plan */}
                                <div className="border-2 border-teal-200 rounded-lg p-6 relative">
                                  <div className="absolute -top-3 left-6 bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                                    Empfohlen
                                  </div>
                                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Professional</h4>
                                  <div className="text-3xl font-bold text-gray-800 mb-4">€299<span className="text-lg text-gray-500">/Monat</span></div>
                                  <ul className="space-y-3 mb-6">
                                    <li className="flex items-center text-sm text-gray-600">
                                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                      Alle Basisfunktionen
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                      Erweiterte Analysen
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                      API-Zugang
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                      Prioritäts-Support
                                    </li>
                                  </ul>
                                  <button className="w-full py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium">
                                    Upgrade auf Professional
                                  </button>
                                </div>
                                
                                {/* Enterprise Plan */}
                                <div className="border rounded-lg p-6">
                                  <h4 className="text-lg font-semibold text-gray-800 mb-2">Enterprise</h4>
                                  <div className="text-3xl font-bold text-gray-800 mb-4">€499<span className="text-lg text-gray-500">/Monat</span></div>
                                  <ul className="space-y-3 mb-6">
                                    <li className="flex items-center text-sm text-gray-600">
                                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                      Alle Professional Features
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                      Unbegrenzte API-Calls
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                      Dedicated Account Manager
                                    </li>
                                    <li className="flex items-center text-sm text-gray-600">
                                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                      Custom Integrationen
                                    </li>
                                  </ul>
                                  <button className="w-full py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium">
                                    Kontakt für Enterprise
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      
                      {/* Kraftwerkspark Kauf Popup */}
                      {showKraftwerkPopup && (
                        <div className="fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center p-4 z-50">
                          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto">
                            <div className="p-6 border-b flex justify-between items-center">
                              <h3 className="text-lg font-semibold text-gray-800">Kraftwerksdatenbank kaufen</h3>
                              <button
                                className="text-gray-500 hover:text-gray-700"
                                onClick={() => setShowKraftwerkPopup(false)}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                              </button>
                            </div>
                            <div className="p-6">
                              <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                  <svg className="w-8 h-8 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                  </svg>
                                </div>
                                <h4 className="text-xl font-semibold text-gray-800 mb-2">Vollständige Kraftwerksliste</h4>
                                <p className="text-gray-600">Erhalten Sie Zugang zu über 2.500 Kraftwerken in Deutschland</p>
                              </div>
                              
                              <div className="bg-gray-50 rounded-lg p-4 mb-6">
                                <h5 className="font-medium text-gray-800 mb-3">Enthalten:</h5>
                                <ul className="space-y-2 text-sm text-gray-600">
                                  <li className="flex items-center">
                                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    2.500+ Kraftwerke (alle Energieträger)
                                  </li>
                                  <li className="flex items-center">
                                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Technische Spezifikationen
                                  </li>
                                  <li className="flex items-center">
                                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Betreiber und Standortdaten
                                  </li>
                                  <li className="flex items-center">
                                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    Historische Verfügbarkeitsdaten
                                  </li>
                                  <li className="flex items-center">
                                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    CSV/Excel Export-Funktionen
                                  </li>
                                </ul>
                              </div>
                              
                              <div className="text-center mb-6">
                                <div className="text-3xl font-bold text-gray-800 mb-2">€4999</div>
                                <div className="text-sm text-gray-500">Einmaliger Kauf • Lebenslanger Zugang</div>
                              </div>
                              
                              <div className="flex space-x-3">
                                <button
                                  onClick={() => setShowKraftwerkPopup(false)}
                                  className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                                >
                                  Abbrechen
                                </button>
                                <button className="flex-1 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg hover:from-teal-700 hover:to-blue-700 transition-all duration-300 font-medium">
                                  Jetzt kaufen
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {/* Floating AI-Assistent Button */}
          <button
            onClick={() => setShowLLMPopup(true)}
            className="fixed bottom-6 right-6 w-14 h-14 bg-teal-600 hover:bg-teal-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center z-40 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
            </svg>
            
            {/* Tooltip */}
            <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap">
              AI-Assistent
              <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
            </div>
          </button>
        </div>
      </div>
      
      {/* AI-Assistent Popup */}
      {showLLMPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-25 flex items-end justify-center sm:items-center p-4 z-50">
          <div className="bg-white rounded-lg shadow-xl w-full max-w-lg mx-auto">
            <div className="p-4 border-b flex justify-between items-center">
              <h3 className="font-medium text-gray-800">AI-Assistent</h3>
              <button 
                className="text-gray-500 hover:text-gray-700"
                onClick={() => setShowLLMPopup(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="p-4 max-h-96 overflow-y-auto">
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-teal-100 rounded-lg p-3 text-sm text-gray-700 max-w-xs">
                    Hallo! Ich bin Ihr KI-Assistent für die Volatile Data Platform. Wie kann ich Ihnen heute helfen?
                  </div>
                </div>
                <div className="flex items-start justify-end">
                  <div className="bg-blue-100 rounded-lg p-3 text-sm text-gray-700 max-w-xs">
                    Wo finde ich Informationen zu Day-Ahead Strompreisen?
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-teal-100 rounded-lg p-3 text-sm text-gray-700 max-w-xs">
                    Sie finden Day-Ahead Strompreise im Bereich <b>Market Data &gt; Marktdaten &gt; Strom &gt; Preise &gt; Spot Day-Ahead</b>. Dort können Sie zwischen historischen Daten und Prognosen wählen und die Daten nach Region und Zeitraum filtern.
                  </div>
                </div>
              </div>
            </div>
            <div className="p-4 border-t">
              <div className="flex space-x-2">
                <input 
                  type="text" 
                  className="flex-1 border rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-teal-500"
                  placeholder="Stellen Sie eine Frage..."
                />
                <button className="px-4 py-2 bg-teal-600 text-white rounded-md">
                  Senden
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DataPlatformConcept;