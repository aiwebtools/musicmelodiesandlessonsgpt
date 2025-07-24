
import React, { useEffect, useRef } from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqItems = [
  {
    question: "What is Music Melodies and Lessons GPT?",
    answer: "Music Melodies and Lessons GPT is an AI-powered tool designed to help musicians of all levels. It provides complete song lyrics, detailed guitar tabs, personalized music lessons, vocal coaching, sound analysis, and more - all through an intelligent conversational interface."
  },
  {
    question: "How accurate are the lyrics and tabs provided?",
    answer: "The AI searches multiple reliable online sources like AZLyrics and GuitareTabs to ensure high accuracy. It compiles complete information and presents it in an organized, easy-to-follow format. The guitar tabs are particularly detailed, including notation for finger positions, strumming patterns, and timing."
  },
  {
    question: "Can I download the lyrics and tabs I find?",
    answer: "Yes! After providing lyrics or tabs, the AI will offer to compile them into a downloadable document that you can save for offline use. These documents are well-formatted and organized for easy reference during practice or performance."
  },
  {
    question: "What kind of music lessons can I get?",
    answer: "Music Melodies and Lessons GPT offers personalized instruction for various instruments including guitar, bass, piano, drums, and vocals. Lessons cover everything from basic techniques to advanced skills, music theory, performance tips, and more - all tailored to your specific skill level and goals."
  },
  {
    question: "Can I upload audio for feedback?",
    answer: "Yes, you can upload .wav files for the AI to analyze. It can provide feedback on sound quality, mixing, musical composition, and performance aspects. This feature is particularly useful for producers, recording artists, and students looking to improve their recordings."
  },
  {
    question: "Does it work for all music genres?",
    answer: "Absolutely! The AI is trained on a wide variety of musical styles and can provide assistance across virtually any genre - from rock and pop to classical, jazz, metal, hip-hop, country, electronic music, and more."
  },
  {
    question: "How does the vocal coaching work?",
    answer: "The vocal coaching feature provides personalized guidance on vocal technique, breathing exercises, pitch control, range expansion, and style development. It can analyze specific challenges you're facing and offer targeted exercises to help you improve without straining your voice."
  },
  {
    question: "Can it help me choose musical instruments to buy?",
    answer: "Yes, the AI can recommend instruments based on your budget, musical interests, skill level, and specific requirements. It performs detailed web searches to find current information about instruments that would be the best match for your needs."
  }
];

const FAQ = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Create YouTube iframe once component mounts
    const videoContainer = videoContainerRef.current;
    if (!videoContainer) return;

    const iframe = document.createElement('iframe');
    iframe.src = "https://www.youtube.com/embed/cKHZ7X0qx_Y?autoplay=1&mute=0&controls=1&modestbranding=1&rel=0&showinfo=0&loop=1&hd=1&vq=hd1080";
    iframe.width = "100%";
    iframe.height = "100%";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    iframe.allowFullscreen = true;
    iframe.style.borderRadius = "12px";
    iframe.style.objectFit = "cover";
    iframe.style.aspectRatio = "9/16";
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
    <section id="faq" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-cyberpunk-muted/30 to-transparent"></div>
      
      <div className="container mx-auto px-4 relative">
        <h2 className="section-heading">
          Frequently Asked <span className="text-cyberpunk-accent">Questions</span>
        </h2>
        
        <div className="max-w-3xl mx-auto mt-12">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-cyberpunk-border bg-cyberpunk-muted/50 rounded-lg overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 text-left font-medium hover:text-cyberpunk-primary transition-colors">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-300">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        {/* Video Section - moved from Hero */}
        <div className="flex justify-center mb-12 md:mb-16">
          <div className="w-full max-w-md mx-auto">
            <div className="relative">
              {/* Neon border effect */}
              <div className="neon-border">
                <div 
                  ref={videoContainerRef}
                  className="w-full bg-black rounded-xl overflow-hidden relative"
                  style={{ aspectRatio: "9/16", height: "70vh", maxHeight: "700px", minHeight: "500px" }}
                >
                  {/* YouTube iframe will be injected here */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="animate-spin h-8 w-8 border-4 border-cyberpunk-primary border-t-transparent rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Interactive button below video */}
            <div className="flex justify-center mt-6">
              <a 
                href="https://musicvideomakergpt.lovable.app/?via=aiwebtools" 
                target="_blank" 
                rel="noopener noreferrer"
                className="relative group px-8 py-4 rounded-lg font-rajdhani font-bold text-lg overflow-hidden transition-all duration-300 border-2 border-cyberpunk-secondary bg-cyberpunk-secondary/20 hover:border-cyberpunk-secondary hover:bg-cyberpunk-secondary/30 hover:scale-110 transform"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-cyberpunk-secondary/30 to-cyberpunk-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <div className="absolute -inset-2 bg-gradient-to-r from-cyberpunk-secondary via-cyberpunk-primary to-cyberpunk-secondary opacity-50 blur-lg group-hover:opacity-80 transition-opacity duration-300 rounded-lg"></div>
                <span className="relative z-10 neon-text-pink">🎬 TRY MUSIC VIDEO MAKER SUITE</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 p-8 cyberpunk-card max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4 text-center">Still have questions?</h3>
          <p className="text-gray-300 text-center mb-6">
            Get in touch with our team for more information about Music Melodies and Lessons GPT
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:Contact@ai-webtools.com" 
              className="px-6 py-3 rounded-md border border-cyberpunk-accent text-cyberpunk-accent hover:bg-cyberpunk-accent/10 transition-colors text-center"
            >
              Contact@ai-webtools.com
            </a>
            <a 
              href="tel:+14758008096" 
              className="px-6 py-3 rounded-md border border-cyberpunk-primary text-cyberpunk-primary hover:bg-cyberpunk-primary/10 transition-colors text-center"
            >
              (475) 800-8096
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
