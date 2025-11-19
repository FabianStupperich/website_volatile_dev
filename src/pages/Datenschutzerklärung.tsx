import React from 'react';
import { Shield, Eye, Database, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Datenschutzerklärung = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-night-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-headline font-bold mb-4">{t('privacy.hero.title')}</h1>
          <p className="text-xl text-blue-100">
            {t('privacy.hero.subtitle')}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            {/* Detailed Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-headline font-bold text-gray-900 mb-4">
                  1. {t('privacy.overview.title')}
                </h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.overview.general.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.overview.general.text')}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.overview.dataCollection.title')}</h3>
                <h4 className="text-l font-semibold text-gray-900 mb-3">{t('privacy.overview.dataCollection.responsible.title')}</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.overview.dataCollection.responsible.text')}
                </p>
                <h4 className="text-l font-semibold text-gray-900 mb-3">{t('privacy.overview.dataCollection.how.title')}</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.overview.dataCollection.how.text')}
                </p>
                <h4 className="text-l font-semibold text-gray-900 mb-3">{t('privacy.overview.dataCollection.purpose.title')}</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.overview.dataCollection.purpose.text')}
                </p>
                <h4 className="text-l font-semibold text-gray-900 mb-3">{t('privacy.overview.dataCollection.rights.title')}</h4>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.overview.dataCollection.rights.text')}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-headline font-bold text-gray-900 mb-4">
                  2. {t('privacy.hosting.title')}
                </h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.hosting.external.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.hosting.external.text1')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.hosting.external.text2')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.hosting.external.text3')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.hosting.external.azure')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.hosting.external.text4')}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-headline font-bold text-gray-900 mb-4">
                  3. {t('privacy.general.title')}
                </h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.general.dataProtection.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.general.dataProtection.text1')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.general.dataProtection.text2')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.general.dataProtection.text3')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.general.responsibleEntity.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4" style={{ whiteSpace: 'pre-line' }}>
                  {t('privacy.general.responsibleEntity.text1')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.general.responsibleEntity.text2')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.general.storageDuration.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.general.storageDuration.text')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.general.legalBasis.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.general.legalBasis.text')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.general.recipients.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.general.recipients.text')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.general.objection.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.general.objection.text1')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.general.objection.text2')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.general.complaint.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.general.complaint.text')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.general.portability.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.general.portability.text')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.general.information.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.general.information.text')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.general.restriction.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.general.restriction.text1')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.general.restriction.text2')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.general.restriction.text3')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.general.restriction.text4')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.general.restriction.text5')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.general.restriction.text6')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.general.ssl.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.general.ssl.text1')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.general.ssl.text2')}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-headline font-bold text-gray-900 mb-4">
                  4. {t('privacy.dataCollection.title')}
                </h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.dataCollection.cookies.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.dataCollection.cookies.text1')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.dataCollection.cookies.text2')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.dataCollection.cookies.text3')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.dataCollection.cookies.text4')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.dataCollection.cookies.text5')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.dataCollection.cookies.text6')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.dataCollection.contactForm.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.dataCollection.contactForm.text1')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.dataCollection.contactForm.text2')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.dataCollection.contactForm.text3')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.dataCollection.emailPhone.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.dataCollection.emailPhone.text1')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.dataCollection.emailPhone.text2')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.dataCollection.emailPhone.text3')}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-headline font-bold text-gray-900 mb-4">
                  4. {t('privacy.pluginsTools.title')}
                </h2>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.pluginsTools.youtube.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.youtube.text')}
                </p>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.pluginsTools.googleFonts.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.googleFonts.text1')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.googleFonts.text2')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.googleFonts.text3')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.googleFonts.text4')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.googleFonts.text5')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.pluginsTools.recaptcha.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.recaptcha.text1')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.recaptcha.text2')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.recaptcha.text3')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.recaptcha.text4')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.recaptcha.text5')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.recaptcha.text6')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.pluginsTools.analytics.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.analytics.text1')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.analytics.text2')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.analytics.text3')}
                </p>
                <ul className="list-disc list-inside text-gray-700 mb-4 space-y-1">
                  <li>{t('privacy.pluginsTools.analytics.list.pages')}</li>
                  <li>{t('privacy.pluginsTools.analytics.list.behavior')}</li>
                  <li>{t('privacy.pluginsTools.analytics.list.goals')}</li>
                  <li>{t('privacy.pluginsTools.analytics.list.location')}</li>
                  <li>{t('privacy.pluginsTools.analytics.list.ip')}</li>
                  <li>{t('privacy.pluginsTools.analytics.list.technical')}</li>
                  <li>{t('privacy.pluginsTools.analytics.list.source')}</li>
                  <li>{t('privacy.pluginsTools.analytics.list.userId')}</li>
                </ul>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.analytics.text4')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.analytics.text5')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.analytics.text6')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.analytics.text7')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.analytics.text8')}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{t('privacy.pluginsTools.tagManager.title')}</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.tagManager.text1')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.tagManager.text2')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.tagManager.text3')}
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {t('privacy.pluginsTools.tagManager.text4')}
                </p>
              </div>

              <div className="bg-blue-50 border-l-4 border-night-blue p-6 rounded-r-lg">
                <p className="text-gray-700 leading-relaxed">
                  <strong>{t('privacy.lastUpdated')}</strong><br />
                  {t('privacy.contact')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> 
    </div>
  );
};

export default Datenschutzerklärung;