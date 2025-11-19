import React from 'react';
import { Database, Cpu, Globe, BarChart3, Zap, Settings, Map, Activity, Layers, CheckCircle, TrendingUp, Shield, Cloud, Server, RefreshCw, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import GetStartedSection from '../../components/GetStartedSection';

const VolatileDataGateway = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-headline font-bold text-black mb-6">
                Your Best Value Proposition
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200">
                Start free trial
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 h-80">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="bg-gray-50 rounded h-full flex items-center justify-center">
                <span className="text-gray-400">Mockup Area</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Gateway Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-4">
              Data Gateway - Features
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-black rounded-lg h-64 mb-6"></div>
              <h3 className="text-xl font-headline font-semibold text-black mb-4">
                Dashboards
              </h3>
              <button className="text-black font-medium hover:text-night-blue transition-colors">
                Learn More
              </button>
            </div>

            <div className="text-center">
              <div className="bg-black rounded-lg h-64 mb-6"></div>
              <h3 className="text-xl font-headline font-semibold text-black mb-4">
                Exports
              </h3>
              <button className="text-black font-medium hover:text-night-blue transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mockup Gateway Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-6">
                Mockup - Gateway
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200">
                Start free trial
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 h-80">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="bg-gray-50 rounded h-full flex items-center justify-center">
                <span className="text-gray-400">Mockup Area</span>
              </div>
            </div>
          </div>
        </div>
      </section>

     

      {/* Mockup AI Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-6">
                Mockup - AI Features
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200">
                Start free trial
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 h-80">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="bg-gray-50 rounded h-full flex items-center justify-center">
                <span className="text-gray-400">Mockup Area</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Platform Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-4">
              API Platform - Features
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
              et dolore magna aliqua. Ut enim ad minim veniam.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-black rounded-lg h-64 mb-6"></div>
              <h3 className="text-xl font-headline font-semibold text-black mb-4">
                Feature 1
              </h3>
              <button className="text-black font-medium hover:text-night-blue transition-colors">
                Learn More
              </button>
            </div>

            <div className="text-center">
              <div className="bg-black rounded-lg h-64 mb-6"></div>
              <h3 className="text-xl font-headline font-semibold text-black mb-4">
                Feature 2
              </h3>
              <button className="text-black font-medium hover:text-night-blue transition-colors">
                Learn More
              </button>
            </div>

            <div className="text-center">
              <div className="bg-black rounded-lg h-64 mb-6"></div>
              <h3 className="text-xl font-headline font-semibold text-black mb-4">
                Feature 3
              </h3>
              <button className="text-black font-medium hover:text-night-blue transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Mockup API Platform Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-black mb-6">
                Mockup - API Platform
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
                exercitation ullamco laboris.
              </p>
              <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-200">
                Start free trial
              </button>
            </div>
            <div className="bg-white border border-gray-200 rounded-lg p-6 h-80">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
              </div>
              <div className="bg-gray-50 rounded h-full flex items-center justify-center">
                <span className="text-gray-400">Mockup Area</span>
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

export default VolatileDataGateway;