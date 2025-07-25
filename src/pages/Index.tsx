
import React, { useEffect, useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Disclaimer from '@/components/Disclaimer';
import Footer from '@/components/Footer';
import DisclaimerPopup from '@/components/DisclaimerPopup';
import ShootingStars from '@/components/ShootingStars';

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
    <div className="min-h-screen w-full bg-cyberpunk-background text-cyberpunk-foreground overflow-x-hidden relative">
      <ShootingStars />
      <Header />
      <main>
        <Hero />
        <Features />
        <Testimonials />
      <FAQ />
      
      {/* Video Section before Footer */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyberpunk-primary/10 filter blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyberpunk-secondary/10 filter blur-3xl"></div>
        
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="neon-text bg-clip-text text-transparent bg-cyberpunk-gradient">
                Watch Music Melodies GPT in Action
              </span>
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              See how our AI music companion can help you master your musical journey
            </p>
          </div>
          
          <div className="max-w-md mx-auto mb-8">
            <div className="glass-panel p-2 rounded-lg" style={{ boxShadow: '0 0 20px rgba(102, 68, 255, 0.3)' }}>
              <iframe
                src="https://www.youtube.com/embed/cKHZ7X0qx_Y?autoplay=0&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0&loop=1&hd=1&vq=hd1080"
                width="100%"
                height="100%"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{
                  borderRadius: "12px",
                  objectFit: "cover",
                  aspectRatio: "9/16"
                }}
                title="Music Melodies and Lessons GPT Demo"
              />
            </div>
          </div>
          
          <div className="text-center">
            <a 
              href="https://musicvideomakergpt.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group px-8 py-4 rounded-lg font-bold text-lg overflow-hidden transition-all duration-300 border-2 border-cyberpunk-accent bg-cyberpunk-accent/20 hover:border-cyberpunk-accent hover:bg-cyberpunk-accent/30 hover:scale-110 transform inline-block"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyberpunk-accent/30 to-cyberpunk-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyberpunk-accent via-cyberpunk-secondary to-cyberpunk-accent opacity-50 blur-lg group-hover:opacity-80 transition-opacity duration-300 rounded-lg"></div>
              <span className="relative z-10 flex items-center gap-2 neon-text">
                <ExternalLink size={20} />
                Try Music Video Maker Studio
              </span>
            </a>
          </div>
        </div>
      </section>
        <Disclaimer />
      </main>
      <Footer />
      <DisclaimerPopup isOpen={showDisclaimerPopup} onClose={handleDisclaimerClose} />
    </div>
  );
};

export default Index;
