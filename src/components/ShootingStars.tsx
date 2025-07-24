import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  left: number;
  top: number;
  delay: number;
  color: string;
  size: number;
}

const ShootingStars = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const colors = [
      'rgba(102, 68, 255, 0.8)', // Purple
      'rgba(255, 68, 170, 0.8)', // Pink  
      'rgba(68, 221, 255, 0.8)', // Blue
      'rgba(255, 255, 255, 0.9)', // White
      'rgba(255, 215, 0, 0.7)',   // Gold
    ];

    const generateStars = () => {
      const newStars: Star[] = [];
      for (let i = 0; i < 12; i++) {
        newStars.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          delay: Math.random() * 8,
          color: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * 2 + 1,
        });
      }
      setStars(newStars);
    };

    generateStars();
    const interval = setInterval(generateStars, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="shooting-stars">
      {stars.map((star) => (
        <div
          key={star.id}
          className="shooting-star animate-shooting"
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            animationDelay: `${star.delay}s`,
            background: star.color,
            width: `${star.size}px`,
            height: `${star.size}px`,
            boxShadow: `0 0 ${star.size * 3}px ${star.color}`,
          }}
        />
      ))}
      
      {/* Twinkling background stars */}
      {Array.from({ length: 30 }).map((_, i) => (
        <div
          key={`twinkle-${i}`}
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 4}s`,
            opacity: Math.random() * 0.7 + 0.3,
          }}
        />
      ))}
    </div>
  );
};

export default ShootingStars;