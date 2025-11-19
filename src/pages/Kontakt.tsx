import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Calendar, Send, CheckCircle, AlertCircle, Loader } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const Kontakt = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    salutation: '',
    firstName: '',
    lastName: '',
    company: '',
    companySize: '',
    industry: '',
    email: '',
    phone: '',
    message: '',
    referralSource: '',
    privacyAccepted: false,
    recaptchaToken: 'test-token' // For testing
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Load HubSpot meeting scheduler script
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://content.volatile.de/meetings/fabian-stupperich'; 
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup script when component unmounts
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({
        ...prev,
        [name]: checked
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleReferralSourceChange = (source: string) => {
    setFormData(prev => ({
      ...prev,
      referralSource: source
    }));
  };

// Updated handleSubmit function for your React component
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Reset states
  setError(null);
  setSuccess(false);
  
  // Validate form
  if (!formData.privacyAccepted) {
    setError(t('contact.form.privacy'));
    return;
  }
  
  if (!formData.referralSource) {
    setError('Bitte wählen Sie aus, wie Sie von uns erfahren haben.');
    return;
  }
  
  // Start loading
  setIsLoading(true);
  
  try {
    // Replace with your actual Azure Function URL
    const response = await fetch('https://contactformwebsite.azurewebsites.net/api/contact-form?code=08sEBS51UdcpUFsDx2PNx5KvQ_VX-mNMq9FB2phs4dBjAzFu35pcug==', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    const data = await response.json();
    
    if (!response.ok) {
      throw new Error(data.error || 'Ein Fehler ist aufgetreten');
    }
    
    // Success
    setSuccess(true);
    setIsSubmitted(true);
    
    // Reset form after delay
    setTimeout(() => {
      setFormData({
        salutation: '',
        firstName: '',
        lastName: '',
        company: '',
        companySize: '',
        industry: '',
        email: '',
        phone: '',
        message: '',
        referralSource: '',
        privacyAccepted: false,
        recaptchaToken: 'test-token'
      });
      setIsSubmitted(false);
      setSuccess(false);
    }, 5000);
    
  } catch (err) {
    console.error('Contact form error:', err);
    setError(err instanceof Error ? err.message : 'Ein unerwarteter Fehler ist aufgetreten');
  } finally {
    setIsLoading(false);
  }
};

  const handleCalendarClick = () => {
    // Open HubSpot calendar in a new tab
    window.open('https://content.volatile.de/meetings/fabian-stupperich', '_blank');
  };

  const referralSources = [
    {
      id: 'social',
      label: t('contact.referral.social'),
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="10"/>
          <path d="M8 14s1.5 2 4 2s4-2 4-2"/>
          <line x1="9" y1="9" x2="9.01" y2="9"/>
          <line x1="15" y1="9" x2="15.01" y2="9"/>
        </svg>
      )
    },
    {
      id: 'linkedin',
      label: t('contact.referral.linkedin'),
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    },
    {
      id: 'friends',
      label: t('contact.referral.friends'),
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      )
    },
    {
      id: 'website',
      label: t('contact.referral.website'),
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    },
    {
      id: 'podcast',
      label: t('contact.referral.podcast'),
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="9" y="9" width="6" height="6"/>
          <rect x="7" y="7" width="10" height="10" rx="1"/>
          <path d="M4 4h16v16H4z"/>
        </svg>
      )
    },
    {
      id: 'tv',
      label: t('contact.referral.tv'),
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="7" width="20" height="15" rx="2" ry="2"/>
          <polyline points="17,2 12,7 7,2"/>
        </svg>
      )
    },
    {
      id: 'other',
      label: t('contact.referral.other'),
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
        </svg>
      )
    }
  ];

  // Company size options
  const companySizes = [
    { value: '', label: t('contact.form.companySize') },
    { value: '1-10', label: t('contact.form.companySize.1-10') },
    { value: '11-50', label: t('contact.form.companySize.11-50') },
    { value: '51-200', label: t('contact.form.companySize.51-200') },
    { value: '201-500', label: t('contact.form.companySize.201-500') },
    { value: '501-1000', label: t('contact.form.companySize.501-1000') },
    { value: '1000+', label: t('contact.form.companySize.1000+') }
  ];

  // Industry options
  const industries = [
    { value: '', label: t('contact.form.industry') },
    { value: 'energy', label: t('contact.form.industry.energy') },
    { value: 'finance', label: t('contact.form.industry.finance') },
    { value: 'manufacturing', label: t('contact.form.industry.manufacturing') },
    { value: 'consulting', label: t('contact.form.industry.consulting') },
    { value: 'technology', label: t('contact.form.industry.technology') },
    { value: 'other', label: t('contact.form.industry.other') }
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-2xl font-medium text-gray-300 mb-2">
              {t('contact.headline')}
            </h1>
            <h2 className="text-4xl md:text-5xl font-light leading-tight">
              {t('contact.title')}
            </h2>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <h3 className="text-2xl md:text-3xl font-light text-gray-700 leading-relaxed">
              {t('contact.subtitle')}
            </h3>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left Column - Contact Person */}
            <div className="space-y-8">
              {/* Contact Person Card */}
              <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                <div className="w-32 h-32 bg-gray-300 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src="/images/team/fabian-stupperich.jpg" 
                    alt="Fabian Stupperich - Contact Person"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-3">
                  <div>
                    <h4 className="text-lg font-medium text-gray-900">Volatile GmbH</h4>
                    <p className="text-gray-600">Lindenstraße 14</p>
                    <p className="text-gray-600">50674 Köln</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-600">mail@volatile.de</p>
                  </div>
                </div>
              </div>

              {/* HubSpot Calendar Button */}
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <div className="text-center">
                  <Calendar className="h-12 w-12 text-night-blue mx-auto mb-4" />
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {t('contact.bookDemo')}
                  </h4>
                  <p className="text-gray-600 mb-6 text-sm">
                    {t('contact.bookDemo.description')}
                  </p>
                  
                  <button
                    onClick={handleCalendarClick}
                    className="w-full bg-night-blue text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                  >
                    <Calendar className="h-5 w-5" />
                    <span>{t('contact.bookDemo')}</span>
                  </button>
                  
                  <p className="text-xs text-gray-500 mt-3">
                    {t('contact.bookDemo.availability')}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div>
              <h4 className="text-xl font-medium text-gray-900 mb-6">{t('contact.form.title')}</h4>
              
              {success ? (
                <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    {t('contact.success.title')}
                  </h3>
                  <p className="text-green-700">
                    {t('contact.success.message')}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Error message */}
                  {error && (
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                      <p className="text-red-700 text-sm">{error}</p>
                    </div>
                  )}
                
                  {/* Salutation 
                  <div>
                    <select
                      name="salutation"
                      value={formData.salutation}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-night-blue focus:border-transparent transition-colors duration-200 bg-white"
                    >
                      <option value="">{t('contact.form.salutation')}</option>
                      <option value="Frau">{t('contact.form.salutation.mrs')}</option>
                      <option value="Herr">{t('contact.form.salutation.mr')}</option>
                      <option value="Divers">{t('contact.form.salutation.diverse')}</option>
                    </select>
                  </div> */}

                  {/* Name Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        name="firstName"
                        placeholder={t('contact.form.firstName')}
                        required
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-night-blue focus:border-transparent transition-colors duration-200"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="lastName"
                        placeholder={t('contact.form.lastName')}
                        required
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-night-blue focus:border-transparent transition-colors duration-200"
                      />
                    </div>
                  </div>

                  {/* Company */}
                  <div>
                    <input
                      type="text"
                      name="company"
                      placeholder={t('contact.form.company')}
                      required
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-night-blue focus:border-transparent transition-colors duration-200"
                    />
                  </div>
                  
                  {/* Company Size and Industry */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-night-blue focus:border-transparent transition-colors duration-200 bg-white"
                      >
                        {companySizes.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <select
                        name="industry"
                        value={formData.industry}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-night-blue focus:border-transparent transition-colors duration-200 bg-white"
                      >
                        {industries.map(option => (
                          <option key={option.value} value={option.value}>{option.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Email */}
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder={t('contact.form.email')}
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-night-blue focus:border-transparent transition-colors duration-200"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <input
                      type="tel"
                      name="phone"
                      placeholder={t('contact.form.phone')}
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-night-blue focus:border-transparent transition-colors duration-200"
                    />
                  </div> 

                  {/* Message */}
                  <div>
                    <textarea
                      name="message"
                      rows={6}
                      placeholder={t('contact.form.message')}
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-night-blue focus:border-transparent transition-colors duration-200 resize-none"
                    ></textarea>
                  </div>

                  {/* Referral Source - Compact Design */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      {t('contact.form.referral')} <span className="text-gray-700">*</span>
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {referralSources.map((source) => (
                        <button
                          key={source.id}
                          type="button"
                          onClick={() => handleReferralSourceChange(source.id)}
                          className={`group relative flex flex-col items-center justify-center p-3 border-2 rounded-lg transition-all duration-200 hover:shadow-sm ${
                            formData.referralSource === source.id
                              ? 'border-night-blue bg-blue-50 text-night-blue shadow-sm'
                              : 'border-gray-200 hover:border-gray-300 text-gray-600 bg-white'
                          }`}
                        >
                          <div className={`mb-2 transition-colors duration-200 ${
                            formData.referralSource === source.id
                              ? 'text-night-blue'
                              : 'text-gray-400 group-hover:text-gray-600'
                          }`}>
                            {source.icon}
                          </div>
                          <span className={`text-xs font-medium text-center leading-tight transition-colors duration-200 ${
                            formData.referralSource === source.id
                              ? 'text-night-blue'
                              : 'text-gray-700'
                          }`}>
                            {source.label}
                          </span>
                          
                          {/* Selection indicator */}
                          {formData.referralSource === source.id && (
                            <div className="absolute top-1 right-1 w-4 h-4 bg-night-blue rounded-full flex items-center justify-center">
                              <CheckCircle className="w-2.5 h-2.5 text-white" />
                            </div>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Privacy Checkbox */}
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <div className="flex items-start space-x-3">
                      <input
                        type="checkbox"
                        id="privacyAccepted"
                        name="privacyAccepted"
                        checked={formData.privacyAccepted}
                        onChange={handleInputChange}
                        required
                        className="mt-1 h-4 w-4 text-night-blue focus:ring-night-blue border-gray-300 rounded"
                      />
                      <div className="flex-1">
                        <label htmlFor="privacyAccepted" className="text-sm text-gray-700 leading-relaxed">
                          <span className="font-medium">{t('contact.form.privacy')}</span>
                          <br />
                          {t('contact.privacy.text')}
                        </label>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-night-blue text-white px-6 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center disabled:opacity-70 disabled:hover:bg-night-blue disabled:hover:scale-100"
                  >
                    {isLoading ? (
                      <>
                        <Loader className="h-5 w-5 mr-2 animate-spin" />
                        {t('common.loading')}
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 mr-2" />
                        {t('contact.form.submit')}
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    {t('contact.form.required')}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Kontakt;
