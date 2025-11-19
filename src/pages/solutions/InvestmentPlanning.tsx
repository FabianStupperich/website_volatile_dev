import React from 'react';
import { Building, TrendingUp, Shield, Users, Target, BarChart3, Lightbulb, ArrowRight, CheckCircle, Calculator, LineChart, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import GetStartedSection from '../../components/GetStartedSection';


const InvestmentPlanning = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Integrated Use Cases */}
      <section className="bg-black text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-6">
              Investitionsplanung
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Treffen Sie fundierte Investitionsentscheidungen mit präzisen Marktanalysen und langfristigen Prognosen für nachhaltige Energieprojekte.
            </p>
          </div>

          {/* Use Cases Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-all duration-300">
              <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calculator className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-4 text-center">
                Wirtschaftlichkeitsanalysen
              </h3>
              <p className="text-gray-300 text-center text-sm leading-relaxed">
                Bewerten Sie die Rentabilität von Energieprojekten mit detaillierten Finanzmodellen und Marktprognosen.
              </p>
              <div className="mt-6 text-center">
                <button className="text-white font-medium hover:text-orange-400 transition-colors">
                  Mehr erfahren →
                </button>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-all duration-300">
              <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <LineChart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-4 text-center">
                Marktprognosen
              </h3>
              <p className="text-gray-300 text-center text-sm leading-relaxed">
                Nutzen Sie langfristige Energiemarktprognosen für strategische Investitionsentscheidungen.
              </p>
              <div className="mt-6 text-center">
                <button className="text-white font-medium hover:text-orange-400 transition-colors">
                  Mehr erfahren →
                </button>
              </div>
            </div>

            <div className="bg-gray-900 rounded-xl p-8 hover:bg-gray-800 transition-all duration-300">
              <div className="bg-white text-black w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-headline font-semibold mb-4 text-center">
                Erneuerbare Energien
              </h3>
              <p className="text-gray-300 text-center text-sm leading-relaxed">
                Spezialisierte Analysen für Wind-, Solar- und andere erneuerbare Energieprojekte.
              </p>
              <div className="mt-6 text-center">
                <button className="text-white font-medium hover:text-orange-400 transition-colors">
                  Mehr erfahren →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Branchen und Anwendungsfelder Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-4">
              Branchen und Anwendungsfelder
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Unsere Investitionsplanungs-Lösungen unterstützen verschiedene Akteure im Energiesektor.
            </p>
          </div>

          <div className="flex justify-center items-center space-x-12 flex-wrap gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                <Building className="h-8 w-8 text-white" />
              </div>
              <span className="text-gray-700 font-medium">Projektentwickler</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="h-8 w-8 text-white" />
              </div>
              <span className="text-gray-700 font-medium">Investoren</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <span className="text-gray-700 font-medium">Infrastrukturfonds</span>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-8 w-8 text-white" />
              </div>
              <span className="text-gray-700 font-medium">Beratungsunternehmen</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition Sections */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-headline font-bold text-black mb-4">
                    Wirtschaftlichkeitsanalysen
                  </h3>
                  <div className="w-full h-64 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-xl flex items-center justify-center">
                    <Calculator className="h-24 w-24 text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-6">
                Fundierte Wirtschaftlichkeitsanalysen
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Bewerten Sie die Rentabilität Ihrer Energieprojekte mit unseren detaillierten Finanzmodellen. 
                Unsere Plattform kombiniert Marktdaten, Kostenanalysen und Prognosen für präzise ROI-Berechnungen.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">NPV & IRR Berechnungen</h4>
                    <p className="text-gray-600 text-sm">Automatisierte Berechnung von Kapitalwert und interner Zinsfuß</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Sensitivitätsanalysen</h4>
                    <p className="text-gray-600 text-sm">Bewertung der Auswirkungen verschiedener Parameter</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Finanzierungsmodelle</h4>
                    <p className="text-gray-600 text-sm">Optimierung der Kapitalstruktur für Ihre Projekte</p>
                  </div>
                </li>
              </ul>
              <Link 
                to="/kontakt"
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                Analyse starten
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-6">
                Langfristige Marktprognosen
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Nutzen Sie unsere proprietären Prognosemodelle für strategische Investitionsentscheidungen. 
                Unsere Analysten erstellen detaillierte Szenarien für verschiedene Energiemärkte und Technologien.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">20-Jahres-Prognosen</h4>
                    <p className="text-gray-600 text-sm">Langfristige Marktentwicklung für alle Energieträger</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Szenario-Modellierung</h4>
                    <p className="text-gray-600 text-sm">Multiple Entwicklungspfade und Stress-Tests</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Regulatorische Analysen</h4>
                    <p className="text-gray-600 text-sm">Auswirkungen von Gesetzesänderungen auf Ihre Investitionen</p>
                  </div>
                </li>
              </ul>
              <Link 
                to="/kontakt"
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                Prognosen abrufen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
            <div className="order-1 lg:order-2">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-headline font-bold text-black mb-4">
                    Marktprognosen
                  </h3>
                  <div className="w-full h-64 bg-gradient-to-br from-green-100 to-emerald-100 rounded-xl flex items-center justify-center">
                    <LineChart className="h-24 w-24 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-headline font-bold text-black mb-4">
                    Erneuerbare Energien
                  </h3>
                  <div className="w-full h-64 bg-gradient-to-br from-yellow-100 to-orange-100 rounded-xl flex items-center justify-center">
                    <Zap className="h-24 w-24 text-orange-600" />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-6">
                Spezialisiert auf Erneuerbare Energien
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Profitieren Sie von unserer Expertise in der Bewertung erneuerbarer Energieprojekte. 
                Wir bieten spezialisierte Analysen für Wind-, Solar-, Wasserkraft- und Biomasseprojekte.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Ertragsprognosen</h4>
                    <p className="text-gray-600 text-sm">Präzise Vorhersagen basierend auf Wetterdaten und Technologie</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Standortbewertung</h4>
                    <p className="text-gray-600 text-sm">Optimale Standortauswahl durch Datenanalyse</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Technologie-Vergleiche</h4>
                    <p className="text-gray-600 text-sm">Bewertung verschiedener Technologien und Hersteller</p>
                  </div>
                </li>
              </ul>
              <Link 
                to="/kontakt"
                className="inline-flex items-center bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200"
              >
                Projekt bewerten
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

export default InvestmentPlanning;