
import React, { useState, useEffect } from 'react';
import { AudioWaveform, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

const Header = () => {
  const [scroll, setScroll] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full',
        scroll ? 'py-3 backdrop-blur-lg bg-cyberpunk-background/80 shadow-lg' : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <a href="/" className="flex items-center gap-2">
            <AudioWaveform className="h-8 w-8 text-cyberpunk-primary animate-pulse-glow" />
            <div>
              <h1 className="text-xl font-orbitron font-bold text-white">
                <span className="neon-text">Music Melodies</span> and <span className="neon-text-pink">Lessons GPT</span>
              </h1>
              <p className="text-xs opacity-70">Presented by AiWebTools.Ai</p>
            </div>
          </a>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <a 
            href="https://chatgpt.com/g/g-HbNtkgAdE-music-melodies-and-lessons-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="relative group px-4 py-2 rounded-lg font-bold text-sm overflow-hidden transition-all duration-300 border-2 border-cyberpunk-primary/50 bg-cyberpunk-primary/10 hover:border-cyberpunk-primary hover:bg-cyberpunk-primary/20 hover:scale-105"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-cyberpunk-primary/20 to-cyberpunk-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            <span className="absolute inset-0 animate-pulse bg-cyberpunk-primary/10"></span>
            <span className="relative z-10 neon-text">Music Melodies GPT</span>
            <div className="absolute -inset-1 bg-gradient-to-r from-cyberpunk-primary via-cyberpunk-secondary to-cyberpunk-primary opacity-30 blur-sm group-hover:opacity-60 transition-opacity duration-300 rounded-lg"></div>
          </a>
          <a 
            href="https://suno.com/invite/@aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-white hover:text-cyberpunk-secondary transition"
          >
            SUNO AI MUSIC GENERATOR
          </a>
          <a 
            href="https://musicvideomakergpt.lovable.app/?via=aiwebtools" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium text-white hover:text-cyberpunk-accent transition"
          >
            MUSIC VIDEO MAKER SUITE
          </a>
          <a 
            href="#disclaimer" 
            className="text-sm font-medium text-white hover:text-cyberpunk-accent transition"
          >
            Disclaimer
          </a>
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyberpunk-button"
          >
            <span>More AI Tools</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white p-2" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cyberpunk-background/95 backdrop-blur-lg border-b border-white/10 py-4">
          <nav className="container mx-auto px-4 flex flex-col space-y-4">
            <a 
              href="https://chatgpt.com/g/g-HbNtkgAdE-music-melodies-and-lessons-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group px-4 py-3 rounded-lg font-bold text-sm overflow-hidden transition-all duration-300 border-2 border-cyberpunk-primary/50 bg-cyberpunk-primary/10 hover:border-cyberpunk-primary hover:bg-cyberpunk-primary/20 hover:scale-105 w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyberpunk-primary/20 to-cyberpunk-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <span className="absolute inset-0 animate-pulse bg-cyberpunk-primary/10"></span>
              <span className="relative z-10 neon-text">Music Melodies GPT</span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyberpunk-primary via-cyberpunk-secondary to-cyberpunk-primary opacity-30 blur-sm group-hover:opacity-60 transition-opacity duration-300 rounded-lg"></div>
            </a>
            <a 
              href="https://suno.com/invite/@aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium py-2 text-white hover:text-cyberpunk-secondary transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              SUNO AI MUSIC GENERATOR
            </a>
            <a 
              href="https://musicvideomakergpt.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-medium py-2 text-white hover:text-cyberpunk-accent transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              MUSIC VIDEO MAKER SUITE
            </a>
            <a 
              href="#disclaimer" 
              className="text-sm font-medium py-2 text-white hover:text-cyberpunk-accent transition"
              onClick={() => setMobileMenuOpen(false)}
            >
              Disclaimer
            </a>
            <a 
              href="https://www.aiwebtools.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="cyberpunk-button w-full text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span>More AI Tools</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
