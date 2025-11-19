import React from 'react';
import { Heart, Award, Globe, TrendingUp, Users, MapPin, Mail, Phone, Briefcase, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import GetStartedSection from '../components/GetStartedSection';
import { LinkedInIcon } from '../components/LinkedInIcon';
import { Partners } from '../components/Partners';

const Company = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section with Black Background */}
      <section className="relative py-20 flex items-center bg-black">
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-headline font-bold leading-tight mb-6">
              {t('company.hero.title')}<br />
              <span className="font-light">{t('company.hero.subtitle')}</span>
            </h1>
            <p className="text-lg md:text-3xl text-white leading-relaxed mb-10 max-w-2xl">
              {t('company.hero.description1')}
            </p>
            <p className="text-lg md:text-xl text-white leading-relaxed mb-10 max-w-2xl">
              {t('company.hero.description2')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission und Vision Hero Section with Video */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video Tile */}
            <div className="relative group">
              <div className="bg-gray-800 rounded-xl overflow-hidden h-80 relative">
                {/* YouTube iframe */}
                <iframe 
                  className="absolute inset-0 w-full h-full"
                  src="https://www.youtube.com/embed/2j17oaXNq20?rel=0" 
                  title="Energiedaten & Analysen für Energiewirtschaft und Industrie von Volatile"
                  frameBorder="0"
                  allow="encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            
            {/* Mission und Vision Content */}
            <div className="bg-black text-white rounded-lg p-8 h-180 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
                {t('company.about.title')}
              </h2>
              <p className="text-white leading-relaxed mb-6">
                {t('company.about.description1')}
              </p>
              <p className="text-white leading-relaxed mb-6">
                {t('company.about.description2')}
              </p>
              <p className="text-white leading-relaxed mb-6">
                {t('company.about.description3')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/*  Mission and Vision Details 
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-headline font-bold text-black mb-6">
                Mission
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Wir demokratisieren den Zugang zu hochwertigen Energiemarktdaten und -analysen. 
                Unser Ziel ist es, jedem Marktteilnehmer die Werkzeuge zu geben, die er für 
                fundierte Entscheidungen benötigt.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-night-blue rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Transparenz in Energiemärkten schaffen</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-night-blue rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Innovative Technologien entwickeln</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-night-blue rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Nachhaltige Energiezukunft fördern</span>
                </li>
              </ul>
              <button className="text-night-blue font-medium hover:text-blue-700 transition-colors">
                Mehr über unsere Mission →
              </button>
            </div>

            <div>
              <h3 className="text-2xl font-headline font-bold text-black mb-6">
                Vision
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Wir streben danach, die führende Plattform für Energiemarkt-Intelligence in Europa 
                zu sein und die Transformation zu einer nachhaltigen Energiezukunft zu unterstützen.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-night-blue rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Europas #1 Energy Intelligence Platform</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-night-blue rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">KI-gestützte Marktprognosen</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-night-blue rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-600">Globale Expansion und Partnerschaften</span>
                </li>
              </ul>
              <button className="text-night-blue font-medium hover:text-blue-700 transition-colors">
                Mehr über unsere Vision →
              </button>
            </div>
          </div>
        </div>
      </section> */}

      {/* Partner Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-4">
              {t('company.partners.title.page')}
            </h2>
          </div>
          <Partners />
        </div>
      </section>

      {/* Team Section - Updated to match the provided design with hover functionality for all members */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-4">
              {t('company.team.title.page')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('company.team.description.page')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Dr. Jan Priesmann */}
            <div className="bg-white p-6 rounded-xl shadow-lg relative">
              {/* LinkedIn icon floating in upper right corner */}
              <div className="absolute top-8 right-8 z-10 bg-white rounded-lg p-1 shadow-sm ">
                <a href="https://www.linkedin.com/in/jan-priesmann-a42627298/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" className="w-8 h-8 hover:opacity-70">
                    <g fill="none" fillRule="evenodd">
                      <path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB"/>
                      <path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,39.53125 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029947 C38.9300781,32.0029947 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M22.0833333,62 L10.6666667,62 L10.6666667,27.3333333 L22.0833333,27.3333333 L22.0833333,62 Z" fill="#FFF"/>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="mb-6">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <img 
                    src="/images/team/jan-priesmann.jpg" 
                    alt="Jan Priesmann" 
                    className="w-full h-full object-cover"
                  />
                  {/* Expertise overlay on hover */}
                  <div className="absolute inset-0 bg-black flex items-center justify-center p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center text-sm leading-relaxed">
                      {t('company.team.jan.expertise')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#132A31] mb-2">
                  Dr. Jan Priesmann
                </h3>
                <div className="inline-block bg-[#132A31] text-white px-3 py-1 rounded-[4px] text-sm mb-3">
                  CEO
                </div>
                <div className="text-[#132A31] text-lg">
                  {t('company.team.jan.role')}
                </div>
              </div>
            </div>

            {/* Lennart Priesmann */}
            <div className="bg-white p-6 rounded-xl shadow-lg relative">
              {/* LinkedIn icon floating in upper right corner */}
              <div className="absolute top-8 right-8 z-10 bg-white rounded-lg p-1 shadow-sm ">
                <a href="https://www.linkedin.com/in/lennart-p-518a23272/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" className="w-8 h-8 hover:opacity-70">
                    <g fill="none" fillRule="evenodd">
                      <path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB"/>
                      <path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,39.53125 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029947 C38.9300781,32.0029947 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M22.0833333,62 L10.6666667,62 L10.6666667,27.3333333 L22.0833333,27.3333333 L22.0833333,62 Z" fill="#FFF"/>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="mb-6">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <img 
                    src="/images/team/lennart-priesmann.jpg" 
                    alt="Lennart Priesmann" 
                    className="w-full h-full object-cover"
                  />
                  {/* Expertise overlay on hover */}
                  <div className="absolute inset-0 bg-black flex items-center justify-center p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center text-sm leading-relaxed">
                      {t('company.team.lennart.expertise')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#132A31] mb-2">
                  Lennart Priesmann
                </h3>
                <div className="inline-block bg-[#132A31] text-white px-3 py-1 rounded-[4px] text-sm mb-3">
                  CFO
                </div>
                <div className="text-[#132A31] text-lg">
                  {t('company.team.lennart.role')}
                </div>
              </div>
            </div>
            
            {/* Payam Fatehi Karjou */}
            <div className="bg-white p-6 rounded-xl shadow-lg relative">
              {/* LinkedIn icon floating in upper right corner */}
              <div className="absolute top-8 right-8 z-10 bg-white rounded-lg p-1 shadow-sm ">
                <a href="https://www.linkedin.com/in/payam-fatehi-karjou-b4a93b16a/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" className="w-8 h-8 hover:opacity-70">
                    <g fill="none" fillRule="evenodd">
                      <path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB"/>
                      <path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,39.53125 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029947 C38.9300781,32.0029947 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M22.0833333,62 L10.6666667,62 L10.6666667,27.3333333 L22.0833333,27.3333333 L22.0833333,62 Z" fill="#FFF"/>
                    </g>
                  </svg>
                </a>
              </div>
              
              <div className="mb-6">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <img 
                    src="/images/team/payam-fatehi.jpg" 
                    alt="Payam Fatehi Karjou" 
                    className="w-full h-full object-cover"
                  />
                  {/* Expertise overlay on hover */}
                  <div className="absolute inset-0 bg-black flex items-center justify-center p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center text-sm leading-relaxed">
                      {t('company.team.payam.expertise')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#132A31] mb-2">
                  Payam Fatehi Karjou
                </h3>
                <div className="inline-block bg-[#132A31] text-white px-3 py-1 rounded-[4px] text-sm mb-3">
                  CTO
                </div>
                <div className="text-[#132A31] text-lg">
                  {t('company.team.payam.role')}
                </div>
              </div>
            </div>

            {/* Fabian Stupperich */}
            <div className="bg-white p-6 rounded-xl shadow-lg relative">
              {/* LinkedIn icon floating in upper right corner */}
              <div className="absolute top-8 right-8 z-10 bg-white rounded-lg p-1 shadow-sm ">
                <a href="https://www.linkedin.com/in/fabian-stupperich-79b1061a7/" target="_blank" rel="noopener noreferrer">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 72 72" className="w-8 h-8 hover:opacity-70">
                    <g fill="none" fillRule="evenodd">
                      <path d="M8,72 L64,72 C68.418278,72 72,68.418278 72,64 L72,8 C72,3.581722 68.418278,-8.11624501e-16 64,0 L8,0 C3.581722,8.11624501e-16 -5.41083001e-16,3.581722 0,8 L0,64 C5.41083001e-16,68.418278 3.581722,72 8,72 Z" fill="#007EBB"/>
                      <path d="M62,62 L51.315625,62 L51.315625,43.8021149 C51.315625,38.8127542 49.4197917,36.0245323 45.4707031,36.0245323 C41.1746094,36.0245323 38.9300781,39.53125 38.9300781,43.8021149 L38.9300781,62 L28.6333333,62 L28.6333333,27.3333333 L38.9300781,27.3333333 L38.9300781,32.0029947 C38.9300781,32.0029947 42.0260417,26.2742151 49.3825521,26.2742151 C56.7356771,26.2742151 62,30.7644705 62,40.051212 L62,62 Z M16.349349,22.7940133 C12.8420573,22.7940133 10,19.9296567 10,16.3970067 C10,12.8643566 12.8420573,10 16.349349,10 C19.8566406,10 22.6970052,12.8643566 22.6970052,16.3970067 C22.6970052,19.9296567 19.8566406,22.7940133 16.349349,22.7940133 Z M22.0833333,62 L10.6666667,62 L10.6666667,27.3333333 L22.0833333,27.3333333 L22.0833333,62 Z" fill="#FFF"/>
                    </g>
                  </svg>
                </a>
              </div>
              <div className="mb-6">
                <div className="relative aspect-square overflow-hidden rounded-lg">
                  <img 
                    src="/images/team/fabian-stupperich.jpg" 
                    alt="Fabian Stupperich" 
                    className="w-full h-full object-cover"
                  />
                  {/* Expertise overlay on hover */}
                  <div className="absolute inset-0 bg-black flex items-center justify-center p-6 opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-center text-sm leading-relaxed">
                      {t('company.team.fabian.expertise')}
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-[#132A31] mb-2">
                  Fabian Stupperich
                </h3>
                <div className="inline-block bg-[#132A31] text-white px-3 py-1 rounded-[4px] text-sm mb-3">
                  CSO
                </div>
                <div className="text-[#132A31] text-lg">
                  {t('company.team.fabian.role')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*   Career Section 
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            Career Left Column
            <div className="bg-black text-white rounded-lg p-8 flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-headline font-bold mb-6">
                Career
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Werden Sie Teil unseres Teams und gestalten Sie die Zukunft der Energiemärkte mit. 
                Wir bieten spannende Herausforderungen in einem innovativen Umfeld.
              </p>
              <Link 
                to="/kontakt"
                className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 self-start"
              >
                Jetzt bewerben
              </Link>
            </div>

            Career Middle Column 
            <div className="bg-gray-400 rounded-lg p-8 flex flex-col justify-center">
              <div className="bg-black text-white p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">
                  Warum bei Volatile arbeiten?
                </h3>
                <ul className="space-y-2 text-sm">
                  <li>• Flexible Arbeitszeiten & Remote Work</li>
                  <li>• Internationale Teams & Projekte</li>
                  <li>• Weiterbildungsmöglichkeiten</li>
                  <li>• Moderne Technologien</li>
                </ul>
              </div>
            </div>
            
             Career Right Column 
            <div className="space-y-8">
              <div>
                <div className="text-sm text-gray-600 mb-2">Open Position</div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Senior Data Scientist - Energy Markets
                </h3>
                <div className="text-sm text-gray-600 mb-3">Full-time • Remote/Köln</div>
                <button className="text-night-blue font-medium hover:text-blue-700 transition-colors text-sm">
                  Details ansehen →
                </button>
              </div>

              <div>
                <div className="text-sm text-gray-600 mb-2">Open Position</div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Frontend Developer - React/TypeScript
                </h3>
                <div className="text-sm text-gray-600 mb-3">Full-time • Köln</div>
                <button className="text-night-blue font-medium hover:text-blue-700 transition-colors text-sm">
                  Details ansehen →
                </button>
              </div>

              <div>
                <div className="text-sm text-gray-600 mb-2">Open Position</div>
                <h3 className="text-lg font-semibold text-black mb-2">
                  Market Analyst - European Energy
                </h3>
                <div className="text-sm text-gray-600 mb-3">Full-time • Remote</div>
                <button className="text-night-blue font-medium hover:text-blue-700 transition-colors text-sm">
                  Details ansehen →
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Get Started Section */}
      <GetStartedSection />
    </div>
  );
};

export default Company;
