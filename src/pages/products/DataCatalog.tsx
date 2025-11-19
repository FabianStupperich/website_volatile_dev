import React, { useState, useMemo } from 'react';
import { Search, Filter, Download, Eye, Database, Globe, Clock, BarChart3, TrendingUp, Zap, Activity, Map, Layers, ChevronDown, ChevronUp, ExternalLink } from 'lucide-react';
import GetStartedSection from '../../components/GetStartedSection';

const DataCatalog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [selectedFrequency, setSelectedFrequency] = useState('all');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState('asc');
  const [expandedRows, setExpandedRows] = useState(new Set());

  // Comprehensive data catalog
  const dataItems = [
    {
      id: 1,
      name: 'European Power Prices',
      category: 'Market Data',
      description: 'Real-time and historical electricity prices across all European bidding zones',
      region: 'Europe',
      frequency: 'Hourly',
      coverage: '27 EU Countries',
      format: 'JSON, CSV, XML',
      latency: '<1ms',
      history: '15+ years',
      icon: Zap,
      tags: ['Electricity', 'Spot Prices', 'Day-Ahead'],
      details: {
        sources: ['EPEX SPOT', 'Nord Pool', 'OMIE', 'GME'],
        fields: ['Price (EUR/MWh)', 'Volume (MWh)', 'Timestamp', 'Bidding Zone'],
        sampleRate: '24/7',
        reliability: '99.99%'
      }
    },
    {
      id: 2,
      name: 'Gas Forward Curves',
      category: 'Commodities',
      description: 'Natural gas future prices and forward curves for European hubs',
      region: 'Europe',
      frequency: 'Real-time',
      coverage: 'TTF, NCG, GASPOOL',
      format: 'JSON, CSV',
      latency: '<500ms',
      history: '10+ years',
      icon: TrendingUp,
      tags: ['Natural Gas', 'Futures', 'TTF'],
      details: {
        sources: ['ICE', 'EEX', 'PEGAS'],
        fields: ['Settlement Price', 'Volume', 'Open Interest', 'Maturity'],
        sampleRate: 'Continuous',
        reliability: '99.95%'
      }
    },
    {
      id: 3,
      name: 'Renewable Generation',
      category: 'Generation',
      description: 'Wind and solar generation data across European countries',
      region: 'Europe',
      frequency: '15-minute',
      coverage: '30+ Countries',
      format: 'JSON, CSV',
      latency: '<5min',
      history: '8+ years',
      icon: Activity,
      tags: ['Wind', 'Solar', 'Renewables'],
      details: {
        sources: ['ENTSO-E', 'TSOs', 'Meteorological Services'],
        fields: ['Generation (MW)', 'Capacity (MW)', 'Capacity Factor', 'Weather Data'],
        sampleRate: '15-minute intervals',
        reliability: '99.9%'
      }
    },
    {
      id: 4,
      name: 'Carbon Emissions Data',
      category: 'Environmental',
      description: 'CO2 emissions intensity and carbon pricing data',
      region: 'Global',
      frequency: 'Hourly',
      coverage: '50+ Countries',
      format: 'JSON, CSV, XML',
      latency: '<1h',
      history: '12+ years',
      icon: Globe,
      tags: ['CO2', 'Emissions', 'Carbon Pricing'],
      details: {
        sources: ['EU ETS', 'National Registries', 'Power Plant Data'],
        fields: ['Emissions (tCO2/MWh)', 'Carbon Price (EUR/tCO2)', 'Allowances'],
        sampleRate: 'Hourly',
        reliability: '99.8%'
      }
    },
    {
      id: 5,
      name: 'Power Plant Database',
      category: 'Infrastructure',
      description: 'Comprehensive database of power plants with technical specifications',
      region: 'Europe',
      frequency: 'Daily',
      coverage: '10,000+ Plants',
      format: 'JSON, CSV',
      latency: '<24h',
      history: '20+ years',
      icon: Database,
      tags: ['Power Plants', 'Capacity', 'Technology'],
      details: {
        sources: ['ENTSO-E', 'National Authorities', 'Plant Operators'],
        fields: ['Capacity (MW)', 'Technology', 'Fuel Type', 'Efficiency', 'Location'],
        sampleRate: 'Daily updates',
        reliability: '99.9%'
      }
    },
    {
      id: 6,
      name: 'Weather Forecasts',
      category: 'Weather',
      description: 'High-resolution weather forecasts for renewable energy modeling',
      region: 'Global',
      frequency: 'Hourly',
      coverage: 'Global Coverage',
      format: 'JSON, GRIB',
      latency: '<30min',
      history: '5+ years',
      icon: Map,
      tags: ['Weather', 'Wind Speed', 'Solar Irradiance'],
      details: {
        sources: ['ECMWF', 'GFS', 'Regional Models'],
        fields: ['Temperature', 'Wind Speed', 'Solar Irradiance', 'Precipitation'],
        sampleRate: 'Hourly forecasts',
        reliability: '99.7%'
      }
    },
    {
      id: 7,
      name: 'Transmission Flows',
      category: 'Grid Data',
      description: 'Cross-border electricity flows and transmission capacity',
      region: 'Europe',
      frequency: 'Hourly',
      coverage: '100+ Borders',
      format: 'JSON, CSV',
      latency: '<1h',
      history: '15+ years',
      icon: Layers,
      tags: ['Transmission', 'Cross-border', 'Capacity'],
      details: {
        sources: ['ENTSO-E', 'TSOs'],
        fields: ['Flow (MW)', 'Capacity (MW)', 'Direction', 'Congestion'],
        sampleRate: 'Hourly',
        reliability: '99.9%'
      }
    },
    {
      id: 8,
      name: 'Demand Forecasts',
      category: 'Demand',
      description: 'Electricity demand forecasts and historical consumption data',
      region: 'Europe',
      frequency: 'Hourly',
      coverage: '30+ Countries',
      format: 'JSON, CSV',
      latency: '<30min',
      history: '20+ years',
      icon: BarChart3,
      tags: ['Demand', 'Load', 'Consumption'],
      details: {
        sources: ['ENTSO-E', 'TSOs', 'Load Forecasting Models'],
        fields: ['Load (MW)', 'Temperature', 'Calendar Effects', 'Economic Indicators'],
        sampleRate: 'Hourly',
        reliability: '99.8%'
      }
    }
  ];

  const categories = ['all', 'Market Data', 'Commodities', 'Generation', 'Environmental', 'Infrastructure', 'Weather', 'Grid Data', 'Demand'];
  const regions = ['all', 'Europe', 'Global', 'Germany', 'France', 'UK'];
  const frequencies = ['all', 'Real-time', 'Hourly', '15-minute', 'Daily'];

  // Filter and sort data
  const filteredAndSortedData = useMemo(() => {
    let filtered = dataItems.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           item.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
      const matchesRegion = selectedRegion === 'all' || item.region === selectedRegion;
      const matchesFrequency = selectedFrequency === 'all' || item.frequency === selectedFrequency;
      
      return matchesSearch && matchesCategory && matchesRegion && matchesFrequency;
    });

    // Sort data
    filtered.sort((a, b) => {
      let aValue = a[sortBy];
      let bValue = b[sortBy];
      
      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }
      
      if (sortOrder === 'asc') {
        return aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
      } else {
        return aValue > bValue ? -1 : aValue < bValue ? 1 : 0;
      }
    });

    return filtered;
  }, [dataItems, searchTerm, selectedCategory, selectedRegion, selectedFrequency, sortBy, sortOrder]);

  const toggleRowExpansion = (id) => {
    const newExpanded = new Set(expandedRows);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedRows(newExpanded);
  };

  const handleSort = (field) => {
    if (sortBy === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortBy(field);
      setSortOrder('asc');
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-night-blue to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">
              Unser Datenkatalog
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Entdecken Sie unsere umfassende Sammlung von Market Data, Analytics und 
              Fundamentaldaten für alle Ihre Geschäftsanforderungen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-night-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                API Dokumentation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-night-blue transition-all duration-200">
                Daten anfordern
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-light-grey border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {/* Search */}
            <div className="lg:col-span-2 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Daten durchsuchen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-night-blue focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-night-blue focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>
                    {category === 'all' ? 'Alle Kategorien' : category}
                  </option>
                ))}
              </select>
            </div>

            {/* Region Filter */}
            <div>
              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-night-blue focus:border-transparent"
              >
                {regions.map(region => (
                  <option key={region} value={region}>
                    {region === 'all' ? 'Alle Regionen' : region}
                  </option>
                ))}
              </select>
            </div>

            {/* Frequency Filter */}
            <div>
              <select
                value={selectedFrequency}
                onChange={(e) => setSelectedFrequency(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-night-blue focus:border-transparent"
              >
                {frequencies.map(frequency => (
                  <option key={frequency} value={frequency}>
                    {frequency === 'all' ? 'Alle Frequenzen' : frequency}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Summary */}
          <div className="mt-4 flex items-center justify-between">
            <p className="text-gray-600">
              {filteredAndSortedData.length} von {dataItems.length} Datensätzen gefunden
            </p>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-400" />
              <span className="text-sm text-gray-600">Sortiert nach: {sortBy}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Data Table */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-night-blue text-white">
                  <tr>
                    <th className="px-6 py-4 text-left">
                      <button
                        onClick={() => handleSort('name')}
                        className="flex items-center font-headline font-semibold hover:text-blue-200 transition-colors"
                      >
                        Datensatz
                        {sortBy === 'name' && (
                          sortOrder === 'asc' ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />
                        )}
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <button
                        onClick={() => handleSort('category')}
                        className="flex items-center font-headline font-semibold hover:text-blue-200 transition-colors"
                      >
                        Kategorie
                        {sortBy === 'category' && (
                          sortOrder === 'asc' ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />
                        )}
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <button
                        onClick={() => handleSort('region')}
                        className="flex items-center font-headline font-semibold hover:text-blue-200 transition-colors"
                      >
                        Region
                        {sortBy === 'region' && (
                          sortOrder === 'asc' ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />
                        )}
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left">
                      <button
                        onClick={() => handleSort('frequency')}
                        className="flex items-center font-headline font-semibold hover:text-blue-200 transition-colors"
                      >
                        Frequenz
                        {sortBy === 'frequency' && (
                          sortOrder === 'asc' ? <ChevronUp className="ml-1 h-4 w-4" /> : <ChevronDown className="ml-1 h-4 w-4" />
                        )}
                      </button>
                    </th>
                    <th className="px-6 py-4 text-left font-headline font-semibold">Latenz</th>
                    <th className="px-6 py-4 text-left font-headline font-semibold">Historie</th>
                    <th className="px-6 py-4 text-center font-headline font-semibold">Aktionen</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredAndSortedData.map((item) => (
                    <React.Fragment key={item.id}>
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="bg-night-blue/10 text-night-blue w-10 h-10 rounded-lg flex items-center justify-center mr-4">
                              <item.icon className="h-5 w-5" />
                            </div>
                            <div>
                              <div className="font-semibold text-gray-900">{item.name}</div>
                              <div className="text-sm text-gray-600 max-w-md">{item.description}</div>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {item.tags.map(tag => (
                                  <span key={tag} className="inline-block bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <span className="inline-block bg-night-blue/10 text-night-blue px-3 py-1 rounded-full text-sm font-medium">
                            {item.category}
                          </span>
                        </td>
                        <td className="px-6 py-4 text-gray-900">{item.region}</td>
                        <td className="px-6 py-4 text-gray-900">{item.frequency}</td>
                        <td className="px-6 py-4">
                          <span className="text-green-600 font-medium">{item.latency}</span>
                        </td>
                        <td className="px-6 py-4 text-gray-900">{item.history}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center justify-center space-x-2">
                            <button
                              onClick={() => toggleRowExpansion(item.id)}
                              className="text-night-blue hover:text-blue-700 transition-colors"
                              title="Details anzeigen"
                            >
                              <Eye className="h-5 w-5" />
                            </button>
                            <button
                              className="text-gray-600 hover:text-gray-800 transition-colors"
                              title="Daten anfordern"
                            >
                              <Download className="h-5 w-5" />
                            </button>
                            <button
                              className="text-gray-600 hover:text-gray-800 transition-colors"
                              title="API Dokumentation"
                            >
                              <ExternalLink className="h-5 w-5" />
                            </button>
                          </div>
                        </td>
                      </tr>
                      
                      {/* Expanded Row Details */}
                      {expandedRows.has(item.id) && (
                        <tr className="bg-gray-50">
                          <td colSpan="7" className="px-6 py-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Datenquellen</h4>
                                <ul className="text-sm text-gray-600 space-y-1">
                                  {item.details.sources.map(source => (
                                    <li key={source}>• {source}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Datenfelder</h4>
                                <ul className="text-sm text-gray-600 space-y-1">
                                  {item.details.fields.map(field => (
                                    <li key={field}>• {field}</li>
                                  ))}
                                </ul>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Technische Details</h4>
                                <div className="text-sm text-gray-600 space-y-1">
                                  <div><strong>Abdeckung:</strong> {item.coverage}</div>
                                  <div><strong>Format:</strong> {item.format}</div>
                                  <div><strong>Sample Rate:</strong> {item.details.sampleRate}</div>
                                  <div><strong>Zuverlässigkeit:</strong> {item.details.reliability}</div>
                                </div>
                              </div>
                              <div>
                                <h4 className="font-semibold text-gray-900 mb-2">Aktionen</h4>
                                <div className="space-y-2">
                                  <button className="w-full bg-night-blue text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors">
                                    Daten anfordern
                                  </button>
                                  <button className="w-full border border-night-blue text-night-blue px-4 py-2 rounded-lg text-sm font-medium hover:bg-night-blue hover:text-white transition-colors">
                                    API Docs
                                  </button>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <GetStartedSection/>
    </div>
  );
};

export default DataCatalog;