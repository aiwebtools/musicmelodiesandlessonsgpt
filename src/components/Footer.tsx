
import React from 'react';
import { AudioWaveform, Mail, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="pt-16 pb-8 relative overflow-hidden bg-gradient-to-t from-black/50 to-transparent">
      {/* Background glow effects */}
      <div className="absolute -bottom-20 left-1/4 w-40 h-40 bg-cyberpunk-primary/20 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-20 right-1/4 w-40 h-40 bg-cyberpunk-secondary/20 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <AudioWaveform className="h-8 w-8 text-cyberpunk-primary" />
              <div>
                <h2 className="text-xl font-orbitron font-bold text-white">
                  <span className="neon-text">Music Melodies</span> and <span className="neon-text-pink">Lessons GPT</span>
                </h2>
                <p className="text-xs opacity-70">Presented by AiWebTools.Ai</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              WELCOME TO THE FUTURE OF SELF MUSIC MASTERY
              Your AI companion for learning music, finding lyrics, mastering instruments, 
              and improving your singing with personalized guidance.
            </p>
            <div className="flex space-x-4 mb-6">
              <a 
                href="mailto:Contact@ai-webtools.com" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Mail size={16} />
                <span>Contact@ai-webtools.com</span>
              </a>
              <a 
                href="tel:+14758008096" 
                className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
              >
                <Phone size={16} />
                <span>(475) 800-8096</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li className="mb-4">
                <a 
                  href="https://chatgpt.com/g/g-HbNtkgAdE-music-melodies-and-lessons-gpt" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="relative group inline-block px-4 py-3 rounded-lg font-bold text-sm overflow-hidden transition-all duration-300 border-2 border-cyberpunk-primary/50 bg-cyberpunk-primary/10 hover:border-cyberpunk-primary hover:bg-cyberpunk-primary/20 hover:scale-105"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-cyberpunk-primary/20 to-cyberpunk-secondary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="relative z-10 neon-text">Music Melodies GPT</span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyberpunk-primary via-cyberpunk-secondary to-cyberpunk-primary opacity-30 blur-sm group-hover:opacity-60 transition-opacity duration-300 rounded-lg"></div>
                  <ExternalLink size={12} className="inline ml-2 relative z-10" />
                </a>
              </li>
              <li>
                <a 
                  href="https://suno.com/invite/@aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyberpunk-secondary transition-colors flex items-center gap-1"
                >
                  SUNO AI MUSIC GENERATOR
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a 
                  href="https://musicvideomakergpt.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyberpunk-accent transition-colors flex items-center gap-1"
                >
                  MUSIC VIDEO MAKER SUITE
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a 
                  href="#disclaimer" 
                  className="text-gray-400 hover:text-cyberpunk-accent transition-colors"
                >
                  Disclaimer
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://openai.com/policies/privacy-policy/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyberpunk-primary transition-colors flex items-center gap-1"
                >
                  Privacy Policy
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyberpunk-primary transition-colors flex items-center gap-1"
                >
                  Terms of Service
                  <ExternalLink size={12} />
                </a>
              </li>
              <li>
                <a 
                  href="https://aiwebtools.lovable.app/?via=aiwebtools"
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-cyberpunk-secondary transition-colors flex items-center gap-1"
                >
                  More AI Tools
                  <ExternalLink size={12} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © 2025 <a href="https://aiwebtools.lovable.app/?via=aiwebtools" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">AI WEB TOOLS LLC</a> All rights reserved.
          </p>
          
          <a 
            href="https://www.aiwebtools.ai" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full bg-cyberpunk-gradient bg-opacity-20 border border-white/10 text-white hover:bg-opacity-30 transition-all duration-300 flex items-center gap-2"
          >
            More AI Tools
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
