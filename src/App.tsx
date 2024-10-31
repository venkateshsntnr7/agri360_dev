import React, { useState, useRef } from 'react';
import { BarChart3, Cloud, Shield, ArrowRight, Construction } from 'lucide-react';
import { ServiceCard } from './components/ServiceCard';
import { PriceTracker } from './components/market/PriceTracker';
import { WeatherUpdate } from './components/weather/WeatherUpdate';
import { FinanceMonitor } from './components/finance/FinanceMonitor';
import { MissionVision } from './components/MissionVision';
import { NewsSection } from './components/news/NewsSection';
import { EnquiryForm } from './components/EnquiryForm';
import { AuthProvider } from './context/AuthContext';
import { AuthModal } from './components/auth/AuthModal';
import { Navigation } from './components/Navigation';

function App() {
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  
  // Refs for scroll targets
  const featuresRef = useRef<HTMLElement>(null);
  const missionRef = useRef<HTMLElement>(null);
  const newsRef = useRef<HTMLElement>(null);
  const enquiryRef = useRef<HTMLElement>(null);

  const scrollToSection = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <AuthProvider>
      <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
        {/* WIP Banner */}
        <div className="bg-amber-400">
          <div className="max-w-7xl mx-auto px-4 py-3 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2 text-amber-900">
              <Construction className="h-5 w-5" />
              <p className="text-sm font-medium">
                🚧 Work in Progress - We're building something amazing! 🚧
              </p>
            </div>
          </div>
        </div>

        <Navigation 
          onFeaturesClick={() => scrollToSection(featuresRef)}
          onMissionClick={() => scrollToSection(missionRef)}
          onNewsClick={() => scrollToSection(newsRef)}
          onEnquiryClick={() => scrollToSection(enquiryRef)}
          onAuthClick={() => setIsAuthModalOpen(true)}
        />
        
        {/* Hero Section */}
        <header className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&q=80"
              alt="Farm field at sunset"
              className="w-full h-full object-cover opacity-20"
            />
          </div>
          <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                <span className="text-green-600">Agri</span>360
              </h1>
              <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                Empowering farmers with digital tools for maximizing productivity, profitability, and resilience
              </p>
              <div className="mt-8">
                <button 
                  onClick={() => setIsAuthModalOpen(true)}
                  className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition-colors flex items-center gap-2 mx-auto"
                >
                  Get Started <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </header>

        {/* Mission & Vision */}
        <section ref={missionRef}>
          <MissionVision />
        </section>

        {/* Core Services */}
        <section ref={featuresRef} className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Our Features</h2>
            <p className="mt-2 text-gray-600">Comprehensive tools for modern farming</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <ServiceCard
              title="Market Price Tracking"
              description="Real-time market prices and direct buyer connections for optimal sales decisions."
              icon={BarChart3}
              iconBgColor="bg-green-100"
              iconColor="text-green-600"
            >
              <PriceTracker />
            </ServiceCard>

            <ServiceCard
              title="Weather & Crop Advisory"
              description="Personalized weather forecasts and expert agricultural guidance."
              icon={Cloud}
              iconBgColor="bg-blue-100"
              iconColor="text-blue-600"
            >
              <WeatherUpdate />
            </ServiceCard>

            <ServiceCard
              title="Financial Protection"
              description="Access to microloans and comprehensive crop insurance solutions."
              icon={Shield}
              iconBgColor="bg-purple-100"
              iconColor="text-purple-600"
            >
              <FinanceMonitor />
            </ServiceCard>
          </div>
        </section>

        {/* News Section */}
        <section ref={newsRef}>
          <NewsSection />
        </section>

        {/* Enquiry Form */}
        <section ref={enquiryRef}>
          <EnquiryForm />
        </section>

        {/* CTA Section */}
        <section className="bg-green-600 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Farm?</h2>
            <p className="text-green-100 mb-8 max-w-2xl mx-auto">
              Join thousands of farmers already using Agri360 to improve their yields and increase profitability.
            </p>
            <button 
              onClick={() => setIsAuthModalOpen(true)}
              className="bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-green-50 transition-colors"
            >
              Start Free Trial
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-50 py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center text-gray-600">
              <p>© {new Date().getFullYear()} Agri360™. All rights reserved. Transforming Agriculture for a Sustainable Future.</p>
              <p className="mt-2 text-sm">
                Agri360 is a registered trademark. Patents pending. Developed with ❤️ for farmers worldwide.
              </p>
            </div>
          </div>
        </footer>

        <AuthModal 
          isOpen={isAuthModalOpen} 
          onClose={() => setIsAuthModalOpen(false)} 
        />
      </div>
    </AuthProvider>
  );
}

export default App;