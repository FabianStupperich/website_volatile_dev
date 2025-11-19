import React from 'react';
import { Globe, Award, TrendingUp, Shield, Users, BarChart3, Target, CheckCircle, Star, ArrowRight, Database, Zap, Map } from 'lucide-react';
import GetStartedSection from '../../components/GetStartedSection';

const EnergyIntelligence = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-night-blue to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">
              Europe's Single Source for Energy Intelligence
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Als Europas führende Quelle für Energiemarkt-Intelligence bieten wir unvergleichliche 
              Abdeckung, Tiefe und Qualität von Marktdaten und Analytics für den gesamten 
              europäischen Energiesektor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-night-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                Intelligence Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-night-blue transition-all duration-200">
                Marktabdeckung ansehen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Market Coverage */}
      <section id="market-coverage" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-900 mb-4">
              Vollständige Europäische Marktabdeckung
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Von Skandinavien bis zum Mittelmeer - wir decken alle wichtigen 
              europäischen Energiemärkte mit unvergleichlicher Tiefe und Präzision ab.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6">
                Geografische Abdeckung
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Map className="h-6 w-6 text-night-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Alle EU-Mitgliedsstaaten</h4>
                    <p className="text-gray-600 text-sm">Vollständige Abdeckung aller 27 EU-Länder plus UK, Norwegen, Schweiz</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-night-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Alle Preiszonen</h4>
                    <p className="text-gray-600 text-sm">Über 40 Preiszonen mit stündlicher Granularität</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Zap className="h-6 w-6 text-night-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Alle Energieträger</h4>
                    <p className="text-gray-600 text-sm">Strom, Gas, Kohle, Öl, Erneuerbare, CO₂-Zertifikate</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <BarChart3 className="h-6 w-6 text-night-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Alle Marktebenen</h4>
                    <p className="text-gray-600 text-sm">Großhandel, Regelenergie, Intraday, Terminmärkte</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-light-grey rounded-xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Marktabdeckung im Detail</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-night-blue mb-1">30+</div>
                  <div className="text-sm text-gray-600">Länder</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-night-blue mb-1">40+</div>
                  <div className="text-sm text-gray-600">Preiszonen</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-night-blue mb-1">100+</div>
                  <div className="text-sm text-gray-600">Börsen & Märkte</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-night-blue mb-1">15+</div>
                  <div className="text-sm text-gray-600">Jahre Historie</div>
                </div>
              </div>
            </div>
          </div>

          {/* Market Leadership */}
          <div className="bg-gradient-to-r from-night-blue to-blue-700 rounded-xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-headline font-bold mb-4">
                Warum wir Europas #1 für Energy Intelligence sind
              </h3>
              <p className="text-blue-100 max-w-2xl mx-auto">
                Unsere einzigartige Position als führender Anbieter basiert auf jahrelanger 
                Expertise und kontinuierlicher Innovation im europäischen Energiesektor.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h4 className="font-semibold mb-2">Marktführer seit 2010</h4>
                <p className="text-blue-100 text-sm">15+ Jahre Erfahrung in europäischen Energiemärkten</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8" />
                </div>
                <h4 className="font-semibold mb-2">Umfassendste Datenbank</h4>
                <p className="text-blue-100 text-sm">Größte und tiefste Energiedatensammlung Europas</p>
              </div>
              <div className="text-center">
                <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h4 className="font-semibold mb-2">Vertrauen der Branche</h4>
                <p className="text-blue-100 text-sm">200+ führende Energieunternehmen vertrauen uns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analytics Excellence */}
      <section id="analytics-excellence" className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-900 mb-4">
              Analytics Excellence
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unsere proprietären Analytics-Modelle und KI-gestützten Algorithmen 
              liefern Insights, die Sie nirgendwo anders finden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="bg-night-blue text-white w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-headline font-bold text-gray-900 mb-4">
                Proprietäre Prognosemodelle
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• HORIZN Fundamental Model</li>
                <li>• Hybrid Price Forecasting (HPFC)</li>
                <li>• Machine Learning Algorithmen</li>
                <li>• Szenario-basierte Analysen</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="bg-night-blue text-white w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-headline font-bold text-gray-900 mb-4">
                Advanced Analytics
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Volatilitäts-Analysen</li>
                <li>• Korrelations-Studien</li>
                <li>• Spread-Analysen</li>
                <li>• Risk Metrics</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="bg-night-blue text-white w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-headline font-bold text-gray-900 mb-4">
                Custom Intelligence
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Maßgeschneiderte Analysen</li>
                <li>• Branchenspezifische Insights</li>
                <li>• Regulatorische Analysen</li>
                <li>• Market Intelligence Reports</li>
              </ul>
            </div>
          </div>

          {/* Model Accuracy */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6 text-center">
              Modell-Genauigkeit & Performance
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Prognose-Genauigkeit</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Short-term (1-7 Tage)</span>
                    <span className="font-bold text-night-blue">95%+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Medium-term (1-12 Monate)</span>
                    <span className="font-bold text-night-blue">90%+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Long-term (1-30 Jahre)</span>
                    <span className="font-bold text-night-blue">85%+</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Performance-Metriken</h4>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">MAPE (Mean Absolute Percentage Error)</span>
                    <span className="font-bold text-night-blue">{'<5%'}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">R² Korrelation</span>
                    <span className="font-bold text-night-blue">0.95+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Model Update Frequenz</span>
                    <span className="font-bold text-night-blue">Täglich</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regulatory Expertise */}
      <section id="regulatory-expertise" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-900 mb-4">
              Regulatorische Expertise
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tiefes Verständnis der komplexen europäischen Energieregulierung 
              und deren Auswirkungen auf die Märkte.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6">
                Regulatorische Abdeckung
              </h3>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-light-grey rounded-lg">
                  <Shield className="h-6 w-6 text-night-blue mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">EU-Energierecht</h4>
                    <p className="text-gray-600 text-sm">Clean Energy Package, REMIT, ACER-Verordnungen</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-light-grey rounded-lg">
                  <Globe className="h-6 w-6 text-night-blue mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Nationale Regulierung</h4>
                    <p className="text-gray-600 text-sm">Energiegesetze aller EU-Mitgliedsstaaten</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-light-grey rounded-lg">
                  <TrendingUp className="h-6 w-6 text-night-blue mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Marktregeln</h4>
                    <p className="text-gray-600 text-sm">Börsenregeln, Netzcodices, Balancing-Mechanismen</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-light-grey rounded-lg">
                  <Award className="h-6 w-6 text-night-blue mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Compliance</h4>
                    <p className="text-gray-600 text-sm">GDPR, MiFID II, Transparenz-Verordnungen</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6">
                Regulatorische Services
              </h3>
              <div className="space-y-4">
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Regulatory Impact Analysis</h4>
                  <p className="text-gray-600 text-sm">Bewertung der Marktauswirkungen neuer Regulierung</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Compliance Monitoring</h4>
                  <p className="text-gray-600 text-sm">Kontinuierliche Überwachung regulatorischer Änderungen</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Policy Briefings</h4>
                  <p className="text-gray-600 text-sm">Regelmäßige Updates zu regulatorischen Entwicklungen</p>
                </div>
                <div className="bg-white border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Expert Consultation</h4>
                  <p className="text-gray-600 text-sm">Beratung durch unsere Regulierungs-Experten</p>
                </div>
              </div>
            </div>
          </div>

          {/* Regulatory Timeline */}
          <div className="bg-light-grey rounded-xl p-8">
            <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6 text-center">
              Wichtige Regulatorische Meilensteine
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-night-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  2019
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Clean Energy Package</h4>
                <p className="text-gray-600 text-xs">EU-weite Energiemarkt-Reform</p>
              </div>
              <div className="text-center">
                <div className="bg-night-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  2021
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Green Deal</h4>
                <p className="text-gray-600 text-xs">Klimaneutralität bis 2050</p>
              </div>
              <div className="text-center">
                <div className="bg-night-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  2023
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">REPowerEU</h4>
                <p className="text-gray-600 text-xs">Energieunabhängigkeit</p>
              </div>
              <div className="text-center">
                <div className="bg-night-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  2025
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Market Reform</h4>
                <p className="text-gray-600 text-xs">Strommarkt-Design Reform</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Success */}
      <section id="client-success" className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-900 mb-4">
              Client Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfahren Sie, wie führende europäische Energieunternehmen 
              von unserer Energy Intelligence profitieren.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-night-blue rounded-full flex items-center justify-center text-white font-bold">
                  E
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">European Utility</h4>
                  <p className="text-sm text-gray-600">Fortune 500 Energiekonzern</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                "Volatile's Energy Intelligence hat unsere Handelsstrategien revolutioniert. 
                Die Genauigkeit der Prognosen ist unübertroffen."
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span>40% bessere Trading Performance</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-night-blue rounded-full flex items-center justify-center text-white font-bold">
                  I
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Investment Bank</h4>
                  <p className="text-sm text-gray-600">Top-Tier Investmentbank</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                "Die regulatorischen Insights von Volatile sind Gold wert. 
                Wir sind immer einen Schritt voraus bei Marktveränderungen."
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span>60% schnellere Marktanalysen</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-night-blue rounded-full flex items-center justify-center text-white font-bold">
                  T
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Trading House</h4>
                  <p className="text-sm text-gray-600">Commodity Trading Firm</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                "Die Datenqualität und -tiefe von Volatile ist konkurrenzlos. 
                Unsere Risikomanagement-Modelle sind deutlich präziser geworden."
              </p>
              <div className="flex items-center text-sm text-gray-500">
                <Star className="h-4 w-4 text-yellow-400 mr-1" />
                <span>35% Risiko-Reduktion</span>
              </div>
            </div>
          </div>

          {/* Success Metrics */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6 text-center">
              Messbare Erfolge unserer Kunden
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-night-blue mb-2">200+</div>
                <div className="text-gray-600 text-sm">Zufriedene Kunden</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-night-blue mb-2">95%</div>
                <div className="text-gray-600 text-sm">Kundenzufriedenheit</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-night-blue mb-2">40%</div>
                <div className="text-gray-600 text-sm">Ø Performance-Steigerung</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-night-blue mb-2">15+</div>
                <div className="text-gray-600 text-sm">Jahre Partnerschaft</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Get Started Section */}
      <GetStartedSection />
      
    </div>
  );
};

export default EnergyIntelligence;