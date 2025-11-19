import React from 'react';
import { Database, Cpu, Globe, BarChart3, Zap, Settings, Map, Activity, Layers, CheckCircle, TrendingUp, Shield } from 'lucide-react';
import GetStartedSection from '../../components/GetStartedSection';

const FundamentalModel = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-night-blue to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">
              HORIZN Fundamental Model
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Unser proprietäres Fundamentalmodell für die europäischen Strommärkte. 
              Präzise Marktprognosen durch detaillierte Abbildung von Angebot, Nachfrage und Netzinfrastruktur.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-night-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                Modell Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-night-blue transition-all duration-200">
                Technische Details
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Model Overview */}
      <section id="overview" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-900 mb-4">
              Modellüberblick & Kernfunktionen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              HORIZN bildet die europäischen Strommärkte im Detail ab und ermöglicht 
              präzise Simulation von Marktmechanismen und grenzüberschreitendem Handel.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6">
                Kernfunktionen
              </h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Map className="h-6 w-6 text-night-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Europäisches Verbundnetz</h4>
                    <p className="text-gray-600 text-sm">Modell bildet Strommärkte im europäischen Verbundnetz ab</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Activity className="h-6 w-6 text-night-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Marktmechanismen</h4>
                    <p className="text-gray-600 text-sm">Nachbildung von Euphemia mit vereinfachter Nachfrageseite</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Globe className="h-6 w-6 text-night-blue mr-3 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Grenzüberschreitender Handel</h4>
                    <p className="text-gray-600 text-sm">Simulation der Märkte der Preiszonen sowie des Handels</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-light-grey rounded-xl p-8">
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Modell-Stärken</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-night-blue mb-1">Stündlich</div>
                  <div className="text-sm text-gray-600">Zeitauflösung</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-night-blue mb-1">Knotenscharf</div>
                  <div className="text-sm text-gray-600">Räumliche Auflösung</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-night-blue mb-1">MILP</div>
                  <div className="text-sm text-gray-600">Optimierungsmodell</div>
                </div>
                <div className="text-center p-4 bg-white rounded-lg">
                  <div className="text-2xl font-bold text-night-blue mb-1">Merit-Order</div>
                  <div className="text-sm text-gray-600">Prinzip</div>
                </div>
              </div>
            </div>
          </div>

          {/* Visual Representation */}
          <div className="bg-light-grey rounded-xl p-8">
            <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6 text-center">
              Europäisches Verbundnetz Abbildung
            </h3>
            <div className="bg-white rounded-lg p-8 h-64 flex items-center justify-center">
              <div className="text-center">
                <Globe className="h-24 w-24 text-night-blue mx-auto mb-4" />
                <p className="text-gray-600 font-semibold">Interaktive Netzwerkkarte</p>
                <p className="text-gray-500 text-sm mt-2">Alle europäischen Preiszonen • Übertragungskapazitäten • Handelsflüsse</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section id="methodology" className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-900 mb-4">
              Methodik & Framework
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fundamentaler Ansatz mit Merit-Order-Prinzip und modernster Optimierungstechnologie 
              für präzise Marktprognosen.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-8">
              <div className="bg-night-blue text-white w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-headline font-bold text-gray-900 mb-4">
                Fundamentaler Ansatz
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Detaillierte Abbildung der Angebotsseite (blockscharf)</li>
                <li>• Nachbildung der Merit-Order in jeder Preiszone</li>
                <li>• Berücksichtigung von Stromspeichern</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="bg-night-blue text-white w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-headline font-bold text-gray-900 mb-4">
                Technisches Framework
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Gemischt-ganzzahliges lineares Optimierungsmodell</li>
                <li>• Stündliche Auflösung</li>
                <li>• Knotenscharfe Auflösung für Redispatch</li>
              </ul>
            </div>

            <div className="bg-white rounded-xl p-8">
              <div className="bg-night-blue text-white w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-headline font-bold text-gray-900 mb-4">
                Vorteile
              </h3>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>• Szenariobasierte Analyse ohne statistische Nachteile</li>
                <li>• Keine Extrapolation von Vergangenheit</li>
                <li>• Potenzielle Marktentwicklungen simulierbar</li>
              </ul>
            </div>
          </div>

          {/* Technical Details */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6">
              Technische Spezifikationen
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Optimierungsalgorithmus</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600 text-sm">Mixed-Integer Linear Programming (MILP)</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600 text-sm">Market Coupling Algorithmus</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600 text-sm">Euphemia-basierte Marktmechanismen</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-4">Räumliche & Zeitliche Auflösung</h4>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600 text-sm">Stündliche Zeitauflösung</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600 text-sm">Preiszonen-Ebene standardmäßig</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                    <span className="text-gray-600 text-sm">Knotenscharfe Auflösung optional</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Sources */}
      <section id="data-sources" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-900 mb-4">
              Datengrundlagen & Qualität
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vertrauenswürdige Datenquellen und umfassende Konsolidierungsprozesse 
              für höchste Datenqualität und Konsistenz.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6">
                Eingangsdaten
              </h3>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-light-grey rounded-lg">
                  <Database className="h-6 w-6 text-night-blue mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Vertrauenswürdige Quellen</h4>
                    <p className="text-gray-600 text-sm">Öffentlich verfügbare und validierte Datenquellen</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-light-grey rounded-lg">
                  <TrendingUp className="h-6 w-6 text-night-blue mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Energienachfrageszenarien</h4>
                    <p className="text-gray-600 text-sm">Eigene Modelle für sektorenscharfe und regionale Szenarien</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-light-grey rounded-lg">
                  <Zap className="h-6 w-6 text-night-blue mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Erneuerbare Energien</h4>
                    <p className="text-gray-600 text-sm">Dezentrale Wind- und Solaranlagen-Platzierung</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-light-grey rounded-lg">
                  <Globe className="h-6 w-6 text-night-blue mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Wetterjahrabhängige Potenziale</h4>
                    <p className="text-gray-600 text-sm">Einspeisepotenziale dezentraler Anlagen</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6">
                Datenqualität & Validierung
              </h3>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-light-grey rounded-lg">
                  <Shield className="h-6 w-6 text-night-blue mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Konsolidierungsprozesse</h4>
                    <p className="text-gray-600 text-sm">Umfassende Prozesse für konsistente Szenarien</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-light-grey rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">ENTSO-E TYNDP Basis</h4>
                    <p className="text-gray-600 text-sm">Referenzszenario basiert auf ENTSO-E's TYNDP</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-light-grey rounded-lg">
                  <Settings className="h-6 w-6 text-night-blue mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Kraftwerks- & Speicherliste</h4>
                    <p className="text-gray-600 text-sm">Aktuelle Liste für Kraftwerke ab 1 MW inkl. Ausbauplänen</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-light-grey rounded-lg">
                  <Map className="h-6 w-6 text-night-blue mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Netzmodell</h4>
                    <p className="text-gray-600 text-sm">Aktuelles Netzmodell mit Ausbauplänen</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* External Data Sources */}
          <div className="bg-light-grey rounded-xl p-8">
            <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6">
              Externe Marktdaten
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-lg font-semibold text-night-blue mb-1">Gas</div>
                <div className="text-sm text-gray-600">Future-Kontrakte</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-lg font-semibold text-night-blue mb-1">Öl</div>
                <div className="text-sm text-gray-600">Upstream-Märkte</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-lg font-semibold text-night-blue mb-1">Kohle</div>
                <div className="text-sm text-gray-600">Brennstoffpreise</div>
              </div>
              <div className="bg-white rounded-lg p-4 text-center">
                <div className="text-lg font-semibold text-night-blue mb-1">CO₂</div>
                <div className="text-sm text-gray-600">Zertifikatsmärkte</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Applications & Results */}
      <section id="applications" className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-900 mb-4">
              Anwendungsbereiche & Ergebnisse
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vielfältige Anwendungsmöglichkeiten für Strompreisprognosen, 
              Marktanalysen und Investitionsentscheidungen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6">
                Anwendungsbereiche
              </h3>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-white rounded-lg">
                  <TrendingUp className="h-6 w-6 text-night-blue mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Strompreisprognosen</h4>
                    <p className="text-gray-600 text-sm">Für Marktanalysen und Investitionsentscheidungen</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg">
                  <Activity className="h-6 w-6 text-night-blue mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Emissionsintensitäten</h4>
                    <p className="text-gray-600 text-sm">Entwicklung für Nachhaltigkeitsbewertungen</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-white rounded-lg">
                  <BarChart3 className="h-6 w-6 text-night-blue mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Capture Rates</h4>
                    <p className="text-gray-600 text-sm">EE-Assets für Portfoliooptimierung und Risikobewertung</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6">
                Modellergebnisse
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-lg font-semibold text-night-blue mb-1">Großhandelspreise</div>
                  <div className="text-sm text-gray-600">Strom</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-lg font-semibold text-night-blue mb-1">Emissionsintensitäten</div>
                  <div className="text-sm text-gray-600">CO₂</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-lg font-semibold text-night-blue mb-1">EE-Anteil</div>
                  <div className="text-sm text-gray-600">Erneuerbare</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-lg font-semibold text-night-blue mb-1">Energieverbrauch</div>
                  <div className="text-sm text-gray-600">Stromerzeugung</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-lg font-semibold text-night-blue mb-1">Handelsvolumen</div>
                  <div className="text-sm text-gray-600">Grenzüberschreitend</div>
                </div>
                <div className="bg-white rounded-lg p-4 text-center">
                  <div className="text-lg font-semibold text-night-blue mb-1">Redispatch</div>
                  <div className="text-sm text-gray-600">Analysen</div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Analysis Types */}
          <div className="bg-white rounded-xl p-8">
            <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6">
              Erweiterte Analysen
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-light-grey rounded-lg">
                <Shield className="h-8 w-8 text-night-blue mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Versorgungssicherheit</h4>
                <p className="text-gray-600 text-sm">Analysen zur Systemstabilität</p>
              </div>
              <div className="text-center p-4 bg-light-grey rounded-lg">
                <Map className="h-8 w-8 text-night-blue mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Netzengpässe</h4>
                <p className="text-gray-600 text-sm">Identifikation kritischer Pfade</p>
              </div>
              <div className="text-center p-4 bg-light-grey rounded-lg">
                <Layers className="h-8 w-8 text-night-blue mx-auto mb-3" />
                <h4 className="font-semibold text-gray-900 mb-2">Szenarioanalysen</h4>
                <p className="text-gray-600 text-sm">Multiple Entwicklungspfade</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Model Accuracy & Validation */}
      <section id="accuracy" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-900 mb-4">
              Modellgenauigkeit & Validierung
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Kontinuierliche Validierung und Kalibrierung für höchste Prognosegenauigkeit 
              und Zuverlässigkeit der Modellergebnisse.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6">
                Validierungsmethoden
              </h3>
              <div className="space-y-4">
                <div className="flex items-start p-4 bg-light-grey rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Historische Backtests</h4>
                    <p className="text-gray-600 text-sm">Vergleich mit tatsächlichen Marktdaten</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-light-grey rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Cross-Validation</h4>
                    <p className="text-gray-600 text-sm">Robustheitstests verschiedener Szenarien</p>
                  </div>
                </div>
                <div className="flex items-start p-4 bg-light-grey rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-4 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Kontinuierliche Kalibrierung</h4>
                    <p className="text-gray-600 text-sm">Regelmäßige Anpassung der Modellparameter</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-headline font-bold text-gray-900 mb-6">
                Genauigkeitsmetriken
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-light-grey rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-night-blue mb-1">95%+</div>
                  <div className="text-sm text-gray-600">Prognosegenauigkeit</div>
                </div>
                <div className="bg-light-grey rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-night-blue mb-1">{'<5%'}</div>
                  <div className="text-sm text-gray-600">MAPE Error</div>
                </div>
                <div className="bg-light-grey rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-night-blue mb-1">0.95+</div>
                  <div className="text-sm text-gray-600">R² Korrelation</div>
                </div>
                <div className="bg-light-grey rounded-lg p-4 text-center">
                  <div className="text-2xl font-bold text-night-blue mb-1">Daily</div>
                  <div className="text-sm text-gray-600">Validierung</div>
                </div>
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

export default FundamentalModel;