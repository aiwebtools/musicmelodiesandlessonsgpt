
import React, { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Disclaimer from '@/components/Disclaimer';
import Footer from '@/components/Footer';
import DisclaimerPopup from '@/components/DisclaimerPopup';

const Index = () => {
  const [showDisclaimerPopup, setShowDisclaimerPopup] = useState(false);

  useEffect(() => {
    // Show disclaimer popup if user hasn't seen it yet
    const hasAgreedToDisclaimer = localStorage.getItem('agreedToDisclaimer') === 'true';
    if (!hasAgreedToDisclaimer) {
      setShowDisclaimerPopup(true);
    }

    // Enhanced smooth scroll for anchor links
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]');
      
      if (!anchor) return;
      
      e.preventDefault();
      
      const href = anchor.getAttribute('href');
      if (!href) return;
      
      const targetElement = document.querySelector(href);
      if (!targetElement) return;

      // Improved scroll with offset to account for fixed header
      const headerOffset = window.innerWidth <= 768 ? 80 : 100;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    };

    // Add event listener directly to the document
    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  const handleDisclaimerClose = () => {
    setShowDisclaimerPopup(false);
    localStorage.setItem('agreedToDisclaimer', 'true');
  };

  return (
    <div className="min-h-screen w-full bg-cyberpunk-background text-cyberpunk-foreground overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
        <FAQ />
        <Disclaimer />
      </main>
      <Footer />
      <DisclaimerPopup isOpen={showDisclaimerPopup} onClose={handleDisclaimerClose} />
    </div>
  );
};

export default Index;
