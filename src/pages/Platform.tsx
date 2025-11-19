import React, { useState } from 'react';
import { Send, CheckCircle, Calendar, Rocket, BarChart3, Users, Database, TrendingUp, Bell, Settings, Search, Filter, Download, Eye, ArrowLeft, AlertCircle, Loader } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

const Platform = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: '',
    privacyAccepted: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  // Azure Function endpoint - replace with your actual function URL
  const AZURE_FUNCTION_URL = process.env.REACT_APP_AZURE_FUNCTION_URL || 'https://contactformwebsite.azurewebsites.net/api/requestEarlyAccess?code=08sEBS51UdcpUFsDx2PNx5KvQ_VX-mNMq9FB2phs4dBjAzFu35pcug==';

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset error state
    setError(null);
    
    // Validate form
    if (!formData.privacyAccepted) {
      setError(t('platform.form.errorPrivacy'));
      return;
    }
    
    // Start loading
    setIsLoading(true);
    
    try {
      // Call Azure Function
      const response = await fetch(AZURE_FUNCTION_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          company: formData.company || null,
          message: formData.message || null
        })
      });

      const result = await response.json();
      
      if (!response.ok) {
        throw new Error(result.error || 'Failed to submit form');
      }

      if (result.success) {
        // Success
        setIsSubmitted(true);
        
        // Reset form after delay
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            company: '',
            message: '',
            privacyAccepted: false
          });
        }, 5000);
      } else {
        throw new Error(result.error || 'Form submission failed');
      }
      
    } catch (err) {
      console.error('Form submission error:', err);
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError(t('platform.form.errorGeneral'));
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="h-screen flex flex-col md:flex-row overflow-hidden">
      {/* Left Side - Contact Form */}
      <div className="w-full md:w-1/2 bg-gradient-to-br from-slate-800 via-slate-700 to-teal-700 flex flex-col overflow-auto">
        <div className="flex-grow flex items-center justify-center p-4 sm:p-6 md:p-8">
          <div className="w-full max-w-md">
            {/* Back Button - More prominent */}
            <button
              onClick={handleGoBack}
              className="flex items-center bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg mb-8 hover:bg-white/30 transition-all duration-200 shadow-md"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              <span className="font-medium">{t('platform.backButton')}</span>
            </button>

            {/* Logo */}
            <div className="mb-8">
              <img src="/images/volatile..svg" alt="Volatile Logo" className="h-12 w-auto mb-2" />
            </div>

            {isSubmitted ? (
              <div className="text-center">
                <CheckCircle className="h-16 w-16 text-teal-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {t('platform.thankYou')}
                </h3>
                <p className="text-gray-300">
                  {t('platform.thankYouMessage')}
                </p>
                <p className="text-gray-400 text-sm mt-2">
                  A confirmation email has been sent to your email address.
                </p>
              </div>
            ) : (
              <>
                {/* Platform Status */}
                <div className="mb-8">
                  <div className="inline-flex items-center bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium mb-4">
                    <Rocket className="h-4 w-4 mr-2" />
                    {t('platform.comingSoon')}
                  </div>
                  <h2 className="text-white text-2xl font-light mb-4">{t('platform.developmentTitle')}</h2>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {t('platform.developmentDescription')}
                  </p>
                </div>

                {/* Contact Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Error message */}
                  {error && (
                    <div className="bg-red-400/20 border border-red-400/30 rounded-lg p-3 flex items-start">
                      <AlertCircle className="h-5 w-5 text-red-400 mt-0.5 mr-3 flex-shrink-0" />
                      <p className="text-white text-sm">{error}</p>
                    </div>
                  )}
                
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      placeholder={t('platform.form.firstName')}
                      required
                      value={formData.firstName}
                      onChange={handleFormChange}
                      disabled={isLoading}
                      className="px-4 py-3 bg-transparent border border-gray-500 rounded text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                    />
                    <input
                      type="text"
                      name="lastName"
                      placeholder={t('platform.form.lastName')}
                      required
                      value={formData.lastName}
                      onChange={handleFormChange}
                      disabled={isLoading}
                      className="px-4 py-3 bg-transparent border border-gray-500 rounded text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                    />
                  </div>

                  <input
                    type="email"
                    name="email"
                    placeholder={t('platform.form.email')}
                    required
                    value={formData.email}
                    onChange={handleFormChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-transparent border border-gray-500 rounded text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  />

                  <input
                    type="text"
                    name="company"
                    placeholder={t('platform.form.company')}
                    value={formData.company}
                    onChange={handleFormChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-transparent border border-gray-500 rounded text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors disabled:opacity-50"
                  />

                  <textarea
                    name="message"
                    placeholder={t('platform.form.message')}
                    rows={3}
                    value={formData.message}
                    onChange={handleFormChange}
                    disabled={isLoading}
                    className="w-full px-4 py-3 bg-transparent border border-gray-500 rounded text-white placeholder-gray-400 focus:border-teal-400 focus:outline-none transition-colors resize-none disabled:opacity-50"
                  />

                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="privacyAccepted"
                      name="privacyAccepted"
                      checked={formData.privacyAccepted}
                      onChange={handleFormChange}
                      disabled={isLoading}
                      required
                      className="mt-1 h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-500 rounded bg-transparent disabled:opacity-50"
                    />
                    <label htmlFor="privacyAccepted" className="text-xs text-gray-300 leading-relaxed">
                      {t('platform.form.privacy')}
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded font-medium transition-colors flex items-center justify-center disabled:opacity-70 disabled:hover:bg-teal-600"
                  >
                    {isLoading ? (
                      <>
                        <Loader className="h-4 w-4 mr-2 animate-spin" />
                        {t('platform.form.sending')}
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        {t('platform.form.submit')}
                      </>
                    )}
                  </button>
                </form>            
              </>
            )}
          </div>
        </div>
      </div>

      {/* Right Side - Platform Mockup with Apple Browser Window */}
      <div className="hidden md:block md:w-1/2 bg-gray-100 relative overflow-hidden">
        <div className="absolute inset-0 p-8 flex items-center justify-center">
          <div className="w-full max-w-5xl">
            {/* Browser Window Mockup - Further reduced height */}
            <div className="bg-white rounded-lg shadow-2xl overflow-hidden">
              {/* Browser Header */}
              <div className="bg-gray-200 px-4 py-3 flex items-center space-x-2 flex-shrink-0">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                </div>
                <div className="flex-1 flex items-center justify-center px-4">
                  <div className="bg-white rounded px-4 py-1 text-sm text-gray-600 max-w-md w-full text-center border">
                    platform.volatile.de
                  </div>
                </div>
              </div>

              {/* Platform Interface - Further constrained height */}
              <div className="flex-1 overflow-hidden flex items-center justify-center">
                <img 
                  src='/images/visualizations/Dashboard Overview_orange.svg' 
                  alt="Medium-term forecast visualization"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;