
import React, { useEffect, useRef } from 'react';
import { Music, Play } from 'lucide-react';

const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create YouTube iframe once component mounts
    const videoContainer = videoContainerRef.current;
    if (!videoContainer) return;

    const iframe = document.createElement('iframe');
    iframe.src = "https://www.youtube.com/embed/8aPpUPiDBJ4?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0&loop=1&hd=1&vq=hd1080";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.style.borderRadius = "12px";
    iframe.style.objectFit = "cover";
    iframe.style.aspectRatio = "16/9";
    iframe.title = "Music Melodies and Lessons GPT";
    
    // Clear the container and append the iframe
    videoContainer.innerHTML = '';
    videoContainer.appendChild(iframe);

    return () => {
      // Cleanup on component unmount
      if (videoContainer) {
        videoContainer.innerHTML = '';
      }
    };
  }, []);


  return (
    <section className="relative pt-24 md:pt-32 pb-16 md:pb-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyberpunk-primary/20 filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyberpunk-secondary/20 filter blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      

      <div className="container mx-auto px-4">
        {/* Main content section */}
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-block px-4 py-1 mb-4 md:mb-6 rounded-full bg-cyberpunk-muted border border-cyberpunk-border">
            <div className="flex items-center gap-2 justify-center">
              <div className="flex space-x-0.5 h-4">
                <div className="waveform-bar h-full"></div>
                <div className="waveform-bar h-full"></div>
                <div className="waveform-bar h-full"></div>
                <div className="waveform-bar h-full"></div>
              </div>
              <span className="text-sm font-medium">AI-Powered Music Learning</span>
            </div>
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
            <span className="block">Welcome to the Future of</span>
            <span className="neon-text bg-clip-text text-transparent bg-cyberpunk-gradient">Self Music Mastery</span>
          </h1>
          
          <p className="text-base md:text-lg mb-4 md:mb-6 text-gray-300 max-w-3xl mx-auto">
            Your AI music companion for finding lyrics, guitar tabs, personalized lessons, 
            and vocal coaching - all in one intelligent tool.
          </p>
          
          <div className="flex items-center justify-center gap-2 mb-6 md:mb-8">
            <span className="text-sm text-gray-400">Powered by</span>
            <span className="text-cyberpunk-primary font-semibold">ChatGPT</span>
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://chatgpt.com/g/g-HbNtkgAdE-music-melodies-and-lessons-gpt" 
              target="_blank" 
              rel="noopener noreferrer"
              className="relative group px-8 py-4 rounded-lg font-bold text-lg overflow-hidden transition-all duration-300 border-2 border-cyberpunk-primary bg-cyberpunk-primary/20 hover:border-cyberpunk-primary hover:bg-cyberpunk-primary/30 hover:scale-110 transform"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-cyberpunk-primary/30 to-cyberpunk-secondary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              <div className="absolute -inset-2 bg-gradient-to-r from-cyberpunk-primary via-cyberpunk-secondary to-cyberpunk-primary opacity-50 blur-lg group-hover:opacity-80 transition-opacity duration-300 rounded-lg"></div>
              <span className="relative z-10 flex items-center gap-2 neon-text">
                <Music size={20} />
                USE MUSIC MELODIES GPT
              </span>
            </a>
            
            <a 
              href="https://musicvideomakergpt.lovable.app/?via=aiwebtools" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-md font-bold border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-2 hover:scale-105"
              aria-label="Try Music Video Maker Suite"
            >
              <Play size={16} />
              Music Video Maker Suite
            </a>
          </div>
        </div>

        {/* Video demonstrations */}
        <div className="max-w-md mx-auto mb-12 md:mb-20">
          <div 
            ref={videoContainerRef}
            className="glass-panel p-2 rounded-lg"
            style={{ 
              boxShadow: '0 0 20px rgba(102, 68, 255, 0.3)'
            }}
          />
        </div>

        {/* Featured Image */}
        <div className="max-w-full md:max-w-4xl mx-auto">
          <div className="glass-panel p-2 overflow-hidden">
            <img 
              src="https://img1.wsimg.com/isteam/ip/9fd6d942-5b46-4025-92e2-0f1ec2a7adf2/a-digital-advertisement-for-music-melodi_LBv7r.png/:/cr=t:5.43%25,l:0%25,w:100%25,h:89.13%25/rs=w:600,h:300,cg:true/qt=q:33" 
              alt="Music Melodies and Lessons GPT" 
              className="w-full h-auto rounded-lg object-cover"
              style={{ 
                boxShadow: '0 0 20px rgba(102, 68, 255, 0.3)'
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
