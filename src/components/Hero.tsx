
import React, { useEffect, useRef } from 'react';
import { Music, Play } from 'lucide-react';

const Hero = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create YouTube iframe once component mounts
    const videoContainer = videoContainerRef.current;
    if (!videoContainer) return;

    const iframe = document.createElement('iframe');
    iframe.src = "https://www.youtube.com/embed/rBQTUrvHcR8?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0&loop=1&hd=1";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.style.borderRadius = "12px";
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
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-cyberpunk-primary/20 filter blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-cyberpunk-secondary/20 filter blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
      
      {/* Floating music notes */}
      <div className="absolute top-1/3 left-10 text-cyberpunk-primary/30 animate-float">
        <Music size={30} />
      </div>
      <div className="absolute top-2/3 right-10 text-cyberpunk-secondary/30 animate-float" style={{ animationDelay: '1.5s' }}>
        <Music size={40} />
      </div>
      <div className="absolute top-1/2 left-1/4 text-cyberpunk-accent/30 animate-float" style={{ animationDelay: '0.8s' }}>
        <Music size={24} />
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-block px-4 py-1 mb-6 rounded-full bg-cyberpunk-muted border border-cyberpunk-border">
              <div className="flex items-center gap-2">
                <div className="flex space-x-0.5 h-4">
                  <div className="waveform-bar h-full animate-waveform-1"></div>
                  <div className="waveform-bar h-full animate-waveform-2"></div>
                  <div className="waveform-bar h-full animate-waveform-3"></div>
                  <div className="waveform-bar h-full animate-waveform-4"></div>
                </div>
                <span className="text-sm font-medium">AI-Powered Music Learning</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="block">Welcome to the Future of</span>
              <span className="neon-text bg-clip-text text-transparent bg-cyberpunk-gradient animate-pulse-glow">Self Music Mastery</span>
            </h1>
            
            <p className="text-lg mb-8 text-gray-300">
              Your AI music companion for finding lyrics, guitar tabs, personalized lessons, 
              and vocal coaching - all in one intelligent tool.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="https://chatgpt.com/g/g-HbNtkgAdE-music-melodies-and-lessons-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyberpunk-button group"
              >
                <span className="flex items-center gap-2">
                  <Music size={16} />
                  Try It Now
                </span>
              </a>
              
              <a 
                href="#features" 
                className="px-6 py-3 rounded-md font-bold border border-white/20 hover:border-white/40 transition-all duration-300 flex items-center gap-2"
              >
                <Play size={16} />
                Learn More
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <div className="relative">
              {/* Neon border effect */}
              <div className="neon-border">
                <div 
                  ref={videoContainerRef}
                  className="aspect-video w-full bg-black rounded-xl overflow-hidden"
                  style={{ minHeight: "400px" }} // Increased minimum height
                >
                  {/* YouTube iframe will be injected here */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="animate-spin h-8 w-8 border-4 border-cyberpunk-primary border-t-transparent rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mt-20 max-w-4xl mx-auto"> {/* Increased max-width from 3xl to 4xl */}
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
