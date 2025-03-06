
import React from 'react';
import { FileMusic, MusicNote, Mic, FileCheck, BookOpen, Headphones, Settings, Download } from 'lucide-react';

const featureItems = [
  {
    icon: <FileMusic size={24} />,
    title: "Song Lyrics",
    description: "Find complete lyrics for any song by any artist, sourced from the web with perfect accuracy."
  },
  {
    icon: <MusicNote size={24} />,
    title: "Guitar Tabs",
    description: "Get detailed guitar tablature and notation for your favorite songs, precisely formatted for easy playing."
  },
  {
    icon: <Mic size={24} />,
    title: "Vocal Coaching",
    description: "Receive personalized vocal training to improve your singing technique and voice quality."
  },
  {
    icon: <BookOpen size={24} />,
    title: "Music Lessons",
    description: "Learn any instrument with step-by-step guidance tailored to your skill level and preferences."
  },
  {
    icon: <Headphones size={24} />,
    title: "Sound Analysis",
    description: "Upload audio files to get professional feedback on sound quality and creative direction."
  },
  {
    icon: <Settings size={24} />,
    title: "Instrument Selection",
    description: "Get expert advice on choosing the right instruments based on your budget and musical goals."
  },
  {
    icon: <FileCheck size={24} />,
    title: "Songwriting Help",
    description: "Receive assistance with creating lyrics and composing music across various genres and styles."
  },
  {
    icon: <Download size={24} />,
    title: "Downloadable Content",
    description: "Save all your lyrics, tabs, and lessons as well-organized documents for offline use."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute -top-40 -left-40 w-80 h-80 bg-cyberpunk-primary/10 rounded-full filter blur-3xl"></div>
      <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-cyberpunk-secondary/10 rounded-full filter blur-3xl"></div>

      <div className="container mx-auto px-4">
        <h2 className="section-heading">
          How <span className="text-cyberpunk-primary">Music Melodies</span> Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {featureItems.map((feature, index) => (
            <div 
              key={index} 
              className="cyberpunk-card p-6 group"
            >
              <div className="bg-gradient-to-br from-cyberpunk-muted to-cyberpunk-muted/20 p-3 rounded-lg inline-block mb-4 text-cyberpunk-accent group-hover:text-cyberpunk-secondary transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-3 group-hover:text-cyberpunk-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 max-w-3xl mx-auto text-center">
          <div className="glass-panel p-8 relative">
            <div className="absolute -inset-0.5 bg-cyberpunk-gradient rounded-xl opacity-30 blur-sm"></div>
            <div className="relative">
              <h3 className="text-2xl font-bold mb-4">
                Powered by Advanced AI Technology
              </h3>
              <p className="text-gray-300 mb-6">
                Music Melodies and Lessons GPT leverages state-of-the-art artificial intelligence to deliver accurate, 
                personalized music education. Our system searches the web for the most up-to-date information, 
                analyzes your specific needs, and provides custom guidance for your musical journey.
              </p>
              <a 
                href="https://chatgpt.com/g/g-HbNtkgAdE-music-melodies-and-lessons-gpt" 
                target="_blank" 
                rel="noopener noreferrer"
                className="cyberpunk-button inline-block"
              >
                <span>Start Learning Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
