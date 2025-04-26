import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { FeaturesSection } from './components/FeaturesSection';
import { HowItWorksSection } from './components/HowItWorksSection';
import { PrivacyPolicySection } from './components/PrivacyPolicySection';
import { Footer } from './components/Footer';
export function App() {
  const [showPrivacyPolicy, setShowPrivacyPolicy] = useState(false);
  return <div className="bg-gray-900 text-white min-h-screen">
      <Header showPrivacyPolicy={showPrivacyPolicy} setShowPrivacyPolicy={setShowPrivacyPolicy} />
      {showPrivacyPolicy ? <PrivacyPolicySection /> : <>
          <HeroSection />
          <FeaturesSection />
          <HowItWorksSection />
        </>}
      <Footer setShowPrivacyPolicy={setShowPrivacyPolicy} />
    </div>;
}