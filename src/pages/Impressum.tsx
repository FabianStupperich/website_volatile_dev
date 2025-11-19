import React from 'react';
import { Building, Mail, Phone, MapPin, Scale, FileText, Shield, Globe, Users, Award } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Impressum = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-night-blue text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-headline font-bold mb-4">{t('impressum.hero.title')}</h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              {t('impressum.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Company Information Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            
            {/* Company Details Card */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-night-blue text-white px-6 py-4">
                <div className="flex items-center">
                  <Building className="h-6 w-6 mr-3" />
                  <h2 className="text-xl font-headline font-bold">{t('impressum.companyData.title')}</h2>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Building className="h-5 w-5 text-night-blue mr-2" />
                      {t('impressum.companyData.companyName')}
                    </h3>
                    <p className="text-gray-700 pl-7">Volatile GmbH</p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <MapPin className="h-5 w-5 text-night-blue mr-2" />
                      {t('impressum.companyData.address')}
                    </h3>
                    <div className="text-gray-700 pl-7">
                      <p>Lindenstraße 14</p>
                      <p>50674 Köln</p>
                      <p>Deutschland</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Mail className="h-5 w-5 text-night-blue mr-2" />
                      {t('impressum.companyData.contact')}
                    </h3>
                    <div className="text-gray-700 pl-7 space-y-1">
                      <p>E-Mail: mail@volatile.de</p>
                      <p>Website: www.volatile.de</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Information Card */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="bg-night-blue text-white px-6 py-4">
                <div className="flex items-center">
                  <Scale className="h-6 w-6 mr-3" />
                  <h2 className="text-xl font-headline font-bold">{t('impressum.legalInfo.title')}</h2>
                </div>
              </div>
              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Users className="h-5 w-5 text-night-blue mr-2" />
                      {t('impressum.legalInfo.management')}
                    </h3>
                    <div className="text-gray-700 pl-7 space-y-1">
                      <p>Jan Priesmann</p>
                      <p>Lennart Priesmann</p>
                      <p>Payam Fatehi Karjou</p>
                      <p>Fabian Stupperich</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <FileText className="h-5 w-5 text-night-blue mr-2" />
                      {t('impressum.legalInfo.registration')}
                    </h3>
                    <div className="text-gray-700 pl-7 space-y-1">
                      <p><span className="font-medium">{t('impressum.legalInfo.commercialRegister')}:</span> HRB 121658</p>
                      <p><span className="font-medium">{t('impressum.legalInfo.court')}:</span> Amtsgericht Köln</p>
                      <p><span className="font-medium">{t('impressum.legalInfo.vatId')}:</span> DE452349138</p>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center">
                      <Award className="h-5 w-5 text-night-blue mr-2" />
                      {t('impressum.legalInfo.responsibleContent')}
                    </h3>
                    <div className="text-gray-700 pl-7">
                      <p>Fabian Stupperich</p>
                      <p>Volatile GmbH</p>
                      <p>Lindenstraße 14</p>
                      <p>50674 Köln</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Legal Sections */}
          <div className="space-y-12">
            
            {/* Content Liability */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <Globe className="h-6 w-6 text-night-blue mr-3" />
                <h2 className="text-2xl font-headline font-bold text-gray-900">
                  {t('impressum.contentLiability.title')}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {t('impressum.contentLiability.text1')}
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  {t('impressum.contentLiability.text2')}
                </p>
              </div>
            </div>

            {/* Link Liability */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <Globe className="h-6 w-6 text-night-blue mr-3" />
                <h2 className="text-2xl font-headline font-bold text-gray-900">
                  {t('impressum.linkLiability.title')}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {t('impressum.linkLiability.text1')}
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  {t('impressum.linkLiability.text2')}
                </p>
              </div>
            </div>

            {/* Copyright */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <Globe className="h-6 w-6 text-night-blue mr-3" />
                <h2 className="text-2xl font-headline font-bold text-gray-900">
                  {t('impressum.copyright.title')}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {t('impressum.copyright.text1')}
                </p>
                <p className="text-gray-700 leading-relaxed mt-4">
                  {t('impressum.copyright.text2')}
                </p>
              </div>
            </div>

            {/* Dispute Resolution */}
            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <div className="flex items-center mb-6">
                <Scale className="h-6 w-6 text-night-blue mr-3" />
                <h2 className="text-2xl font-headline font-bold text-gray-900">
                  {t('impressum.disputeResolution.title')}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-700 leading-relaxed">
                  {t('impressum.disputeResolution.text')}
                </p>
                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-gray-700 leading-relaxed">
                    <strong>{t('impressum.disputeResolution.euPlatform')}</strong><br />
                    <a
                      href="https://ec.europa.eu/consumers/odr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-night-blue hover:text-blue-700 underline transition-colors"
                    >
                      https://ec.europa.eu/consumers/odr
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impressum;
