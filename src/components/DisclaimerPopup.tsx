
import React from 'react';
import { X, Shield, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

interface DisclaimerPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DisclaimerPopup = ({ isOpen, onClose }: DisclaimerPopupProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <div 
        className="cyberpunk-card w-full max-w-md p-6 max-h-[80vh] overflow-y-auto"
        style={{
          backgroundImage: 'linear-gradient(145deg, rgba(30, 31, 55, 0.8), rgba(20, 22, 35, 0.9))',
          boxShadow: '0 0 20px rgba(102, 68, 255, 0.3), 0 0 40px rgba(255, 68, 170, 0.1)'
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Shield className="h-6 w-6 text-cyberpunk-secondary" />
            <h2 className="text-xl font-orbitron font-bold">
              <span className="neon-text-pink">Important</span> <span className="text-white">Notice</span>
            </h2>
          </div>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="space-y-4 my-4 text-gray-300">
          <p className="flex items-start gap-2">
            <Info size={18} className="text-cyberpunk-accent flex-shrink-0 mt-1" />
            <span>
              By using <span className="font-semibold text-cyberpunk-primary">Music Melodies and Lessons GPT</span>, you acknowledge this is an AI-powered educational tool designed to assist with your musical learning journey.
            </span>
          </p>
          
          <p>
            All content provided is for <span className="font-semibold text-cyberpunk-accent">educational purposes only</span>. Users are responsible for complying with copyright laws in their jurisdiction.
          </p>
          
          <p>
            For complete terms and information, please review our full <a href="#disclaimer" className="text-cyberpunk-secondary hover:underline">Disclaimer</a>.
          </p>
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="relative px-8 py-3 rounded-md font-bold overflow-hidden transition-all duration-300 group"
          >
            <div className="absolute inset-0 w-full h-full transition duration-300 bg-gradient-to-r from-cyberpunk-primary via-cyberpunk-secondary to-cyberpunk-accent bg-size-200 bg-pos-0 group-hover:bg-pos-100"></div>
            <div className="relative flex items-center justify-center gap-2 text-white font-orbitron">
              <span>I AGREE</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default DisclaimerPopup;
