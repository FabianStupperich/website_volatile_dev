import React from 'react';
import { FileText, Scale, AlertCircle } from 'lucide-react';

const AGB = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-night-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-headline font-bold mb-4">
            Allgemeine Geschäftsbedingungen
          </h1>
          <p className="text-xl text-blue-100">
            Gültig für alle Geschäftsbeziehungen mit der Volatile GmbH
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            
            {/* Overview */}
            <div className="bg-light-grey rounded-xl p-8 mb-8">
              <div className="flex items-center mb-6">
                <FileText className="h-6 w-6 text-night-blue mr-3" />
                <h2 className="text-2xl font-headline font-bold text-gray-900 m-0">
                  Wichtige Hinweise
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <Scale className="h-8 w-8 text-night-blue mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Rechtssicherheit</h3>
                  <p className="text-sm text-gray-600">
                    Klare Regelungen für alle Geschäftsbeziehungen
                  </p>
                </div>
                <div className="text-center">
                  <FileText className="h-8 w-8 text-night-blue mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Transparenz</h3>
                  <p className="text-sm text-gray-600">
                    Verständliche Bedingungen und faire Konditionen
                  </p>
                </div>
                <div className="text-center">
                  <AlertCircle className="h-8 w-8 text-night-blue mx-auto mb-3" />
                  <h3 className="font-semibold text-gray-900 mb-2">Aktualität</h3>
                  <p className="text-sm text-gray-600">
                    Regelmäßig überprüft und aktualisiert
                  </p>
                </div>
              </div>
            </div>

            {/* Terms Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-headline font-bold text-gray-900 mb-4">
                  § 1 Geltungsbereich
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Diese Allgemeinen Geschäftsbedingungen (nachfolgend "AGB") gelten für alle Verträge zwischen der 
                  Volatile GmbH (nachfolgend "Anbieter") und ihren Kunden (nachfolgend "Kunde") über die Erbringung 
                  von Dienstleistungen im Bereich Market Data, Analytics und verwandter Services.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Abweichende, entgegenstehende oder ergänzende Allgemeine Geschäftsbedingungen des Kunden werden 
                  nicht Vertragsbestandteil, es sei denn, ihrer Geltung wird ausdrücklich schriftlich zugestimmt.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-headline font-bold text-gray-900 mb-4">
                  § 2 Vertragsschluss
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Angebote des Anbieters sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich als 
                  verbindlich bezeichnet werden oder eine bestimmte Annahmefrist enthalten.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Der Vertrag kommt durch die schriftliche Auftragsbestätigung des Anbieters oder durch die 
                  Ausführung der Leistung zustande.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-headline font-bold text-gray-900 mb-4">
                  § 3 Leistungsumfang
                </h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Data and Insights</h3>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>Bereitstellung von Echtzeit-Marktdaten</li>
                  <li>Historische Datenanalysen</li>
                  <li>Markttrend-Reports</li>
                  <li>Branchenspezifische Insights</li>
                </ul>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Market Analytics & Services</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Individuelle Datenanalysen</li>
                  <li>Beratungsleistungen</li>
                  <li>Custom Analytics Solutions</li>
                  <li>Training und Support</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-headline font-bold text-gray-900 mb-4">
                  § 4 Preise und Zahlungsbedingungen
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Es gelten die zum Zeitpunkt der Bestellung aktuellen Preise. Alle Preise verstehen sich 
                  zuzüglich der gesetzlichen Mehrwertsteuer.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Rechnungen sind innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung fällig. 
                  Bei Zahlungsverzug werden Verzugszinsen in Höhe von 9 Prozentpunkten über dem Basiszinssatz berechnet.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-headline font-bold text-gray-900 mb-4">
                  § 5 Datenschutz und Vertraulichkeit
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Der Anbieter verpflichtet sich, alle im Rahmen der Geschäftsbeziehung bekannt gewordenen 
                  Informationen vertraulich zu behandeln und nur für die vereinbarten Zwecke zu verwenden.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Die Verarbeitung personenbezogener Daten erfolgt gemäß der geltenden Datenschutzbestimmungen, 
                  insbesondere der DSGVO.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-headline font-bold text-gray-900 mb-4">
                  § 6 Haftung
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Der Anbieter haftet unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers oder 
                  der Gesundheit, die auf einer vorsätzlichen oder fahrlässigen Pflichtverletzung beruhen.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Für sonstige Schäden haftet der Anbieter nur bei Vorsatz und grober Fahrlässigkeit sowie bei 
                  der Verletzung wesentlicher Vertragspflichten.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-headline font-bold text-gray-900 mb-4">
                  § 7 Kündigung
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Verträge können von beiden Parteien mit einer Frist von 30 Tagen zum Monatsende gekündigt werden, 
                  sofern nicht anders vereinbart.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Das Recht zur außerordentlichen Kündigung aus wichtigem Grund bleibt unberührt.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-headline font-bold text-gray-900 mb-4">
                  § 8 Schlussbestimmungen
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des UN-Kaufrechts.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Gerichtsstand für alle Streitigkeiten ist Köln, sofern der Kunde Vollkaufmann, 
                  juristische Person des öffentlichen Rechts oder öffentlich-rechtliches Sondervermögen ist.
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-night-blue p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  <strong>Stand dieser AGB:</strong> Januar 2025<br />
                  <strong>Volatile GmbH</strong><br />
                  Lindenstraße 14, 50674 Köln<br />
                  Bei Fragen zu diesen AGB wenden Sie sich bitte an: legal@volatile.de
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AGB;