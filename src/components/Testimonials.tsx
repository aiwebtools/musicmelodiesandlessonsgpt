
import React from 'react';
import { Star } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Amateur Guitarist",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Music Melodies GPT helped me learn guitar solos I never thought I could play. The tablature is incredibly accurate and easy to follow. It's like having a guitar teacher available 24/7!",
    rating: 5
  },
  {
    name: "Maya Johnson",
    role: "Vocal Student",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "As someone working on improving my vocals, this AI has been invaluable. The personalized exercises and feedback helped me extend my range and improve my technique considerably.",
    rating: 5
  },
  {
    name: "David Chen",
    role: "Music Producer",
    image: "https://randomuser.me/api/portraits/men/64.jpg",
    content: "I've been using this tool to analyze my audio productions and get detailed feedback. The advice is surprisingly insightful and has helped me identify issues I would have missed.",
    rating: 4
  },
  {
    name: "Sophia Williams",
    role: "Songwriter",
    image: "https://randomuser.me/api/portraits/women/68.jpg",
    content: "When I'm stuck with writer's block, Music Melodies GPT helps me brainstorm lyrics that are both creative and meaningful. It's become an essential part of my songwriting process.",
    rating: 5
  }
];

const Testimonials = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal();
  const { ref: gridRef, isVisible: gridVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: ctaRef, isVisible: ctaVisible } = useScrollReveal();

  return (
    <section className="py-20 bg-cyberpunk-muted/30">
      <div className="container mx-auto px-4">
        <h2 
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className={`section-heading scroll-reveal ${titleVisible ? 'revealed' : ''}`}
        >
          What Musicians Are <span className="text-cyberpunk-secondary">Saying</span>
        </h2>
        
        <div 
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 scroll-reveal ${gridVisible ? 'revealed' : ''}`}
        >
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`cyberpunk-card p-6 h-full flex flex-col scroll-reveal-scale ${gridVisible ? 'revealed' : ''}`}
              style={{ transitionDelay: `${index * 0.15}s` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-cyberpunk-primary/50">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
                {[...Array(5 - testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-gray-500" />
                ))}
              </div>
              
              <p className="text-gray-300 italic flex-grow">"{testimonial.content}"</p>
            </div>
          ))}
        </div>
        
        <div 
          ref={ctaRef as React.RefObject<HTMLDivElement>}
          className={`mt-16 text-center scroll-reveal ${ctaVisible ? 'revealed' : ''}`}
        >
          <div className="inline-block px-4 py-1 rounded-full bg-cyberpunk-accent/20 text-cyberpunk-accent text-sm font-medium mb-6 border border-cyberpunk-accent/30">
            Join thousands of satisfied musicians
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-6 max-w-2xl mx-auto">
            Take your musical abilities to the next level with AI-assisted learning
          </h3>
          <a 
            href="https://chatgpt.com/g/g-HbNtkgAdE-music-melodies-and-lessons-gpt" 
            target="_blank" 
            rel="noopener noreferrer"
            className="cyberpunk-button inline-block"
          >
            <span>Start Your Journey</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
