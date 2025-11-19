import React from 'react';
import { Shield, Zap, Users, Award, TrendingUp, Globe, Clock, CheckCircle } from 'lucide-react';
import GetStartedSection from '../../components/GetStartedSection';


const WhyVolatile = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-night-blue to-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-headline font-bold mb-6">
              Why Volatile?
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-4xl mx-auto leading-relaxed">
              Entdecken Sie, warum führende Finanzinstitute und Unternehmen weltweit 
              auf Volatile als ihren vertrauenswürdigen Partner für Market Data und Analytics setzen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-night-blue px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                Demo vereinbaren
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-night-blue transition-all duration-200">
                Referenzen ansehen
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Differentiators */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-900 mb-4">
              Unsere Alleinstellungsmerkmale
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Was macht Volatile zur ersten Wahl für anspruchsvolle Market Data und Analytics Anforderungen?
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-light-grey rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-night-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-headline font-semibold text-gray-900 mb-4">
                Unübertroffene Performance
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Sub-Millisekunden Latenz und 99.99% Verfügbarkeit für kritische 
                Geschäftsanwendungen.
              </p>
            </div>

            <div className="text-center p-8 bg-light-grey rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-night-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-headline font-semibold text-gray-900 mb-4">
                Enterprise-Grade Sicherheit
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Höchste Sicherheitsstandards mit End-to-End Verschlüsselung und 
                Compliance-Zertifizierungen.
              </p>
            </div>

            <div className="text-center p-8 bg-light-grey rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-night-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-headline font-semibold text-gray-900 mb-4">
                Persönlicher Service
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Dedicated Account Manager und 24/7 Support von echten Experten, 
                nicht von Chatbots.
              </p>
            </div>

            <div className="text-center p-8 bg-light-grey rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-night-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Globe className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-headline font-semibold text-gray-900 mb-4">
                Globale Abdeckung
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Umfassende Datenabdeckung aus über 100 Ländern und 
                allen wichtigen Finanzmärkten weltweit.
              </p>
            </div>

            <div className="text-center p-8 bg-light-grey rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-night-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-headline font-semibold text-gray-900 mb-4">
                Innovation Leadership
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Kontinuierliche Innovation mit KI-gestützten Analytics und 
                modernsten Technologien.
              </p>
            </div>

            <div className="text-center p-8 bg-light-grey rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
              <div className="bg-night-blue text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-headline font-semibold text-gray-900 mb-4">
                Bewährte Expertise
              </h3>
              <p className="text-gray-600 leading-relaxed">
                15+ Jahre Erfahrung und über 500 erfolgreiche Projekte mit 
                führenden Finanzinstituten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="py-20 bg-light-grey">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-900 mb-4">
              Volatile vs. Wettbewerb
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sehen Sie selbst, warum Volatile die bessere Wahl ist.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-night-blue text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-headline font-semibold">Feature</th>
                    <th className="px-6 py-4 text-center font-headline font-semibold">Volatile</th>
                    <th className="px-6 py-4 text-center font-headline font-semibold">Wettbewerber A</th>
                    <th className="px-6 py-4 text-center font-headline font-semibold">Wettbewerber B</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Latenz</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                      <span className="text-sm text-gray-600 block mt-1">&lt;1ms</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-400">~5ms</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-400">~10ms</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">24/7 Support</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-400">Nur Geschäftszeiten</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">Custom Analytics</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-400">Begrenzt</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-red-400">✗</span>
                    </td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">Globale Abdeckung</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                      <span className="text-sm text-gray-600 block mt-1">100+ Länder</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-400">50+ Länder</span>
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-400">30+ Länder</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-gray-900">API Flexibilität</td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <CheckCircle className="h-6 w-6 text-green-500 mx-auto" />
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="text-gray-400">Begrenzt</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-gray-900 mb-4">
              Was unsere Kunden sagen
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Erfahren Sie aus erster Hand, warum unsere Kunden Volatile vertrauen.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-light-grey rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-night-blue rounded-full flex items-center justify-center text-white font-bold">
                  A
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Anna Schmidt</h4>
                  <p className="text-sm text-gray-600">CTO, Deutsche Investment Bank</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "Die Datenqualität und Performance von Volatile ist unübertroffen. 
                Seit der Implementierung konnten wir unsere Handelsstrategien 
                erheblich verbessern."
              </p>
            </div>

            <div className="bg-light-grey rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-night-blue rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Michael Johnson</h4>
                  <p className="text-sm text-gray-600">Head of Analytics, Global Asset Management</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "Der persönliche Service und die maßgeschneiderten Analytics-Lösungen 
                haben unsere Erwartungen übertroffen. Volatile ist ein echter Partner."
              </p>
            </div>

            <div className="bg-light-grey rounded-xl p-8">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-night-blue rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div className="ml-4">
                  <h4 className="font-semibold text-gray-900">Sarah Chen</h4>
                  <p className="text-sm text-gray-600">Risk Manager, Hedge Fund</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                "Die Zuverlässigkeit und Geschwindigkeit der Datenlieferung ist 
                entscheidend für unseren Erfolg. Volatile liefert konstant."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-night-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold mb-4">
              Zahlen, die überzeugen
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Unsere Erfolgsbilanz spricht für sich.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-headline font-bold mb-2">99.99%</div>
              <div className="text-blue-100">Verfügbarkeit</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-headline font-bold mb-2">&lt;1ms</div>
              <div className="text-blue-100">Latenz</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-headline font-bold mb-2">200+</div>
              <div className="text-blue-100">Zufriedene Kunden</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-headline font-bold mb-2">24/7</div>
              <div className="text-blue-100">Expert Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started Section */}
      <GetStartedSection />
    </div>
  );
};

export default WhyVolatile;