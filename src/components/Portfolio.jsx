import React from 'react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  const portfolioItems = [
    {
      image: "a5logo.png"
    },
    {
      image: "kdm.png"
    },
    {
      image: "vibewoods.png"
    },
    {
      image: "nvfithub.png"
    },
    {
      image: "phd.png"
    },
    {
      image: "jhlogo.png"
    },
    {
      image: "b4logo.png"
    },
    {
      image: "Ayatti.png"
    }
  ]
    // Duplicate items for seamless loop
  const allItems = [...portfolioItems, ...portfolioItems];

  // Calculate total width for seamless loop
  const cardWidth = 400; // Card width
  const gap = 32; // Gap between cards (8 * 4 = 32px for gap-8)
  const totalWidth = portfolioItems.length * (cardWidth + gap);

  return (
    <section className="relative overflow-hidden bg-black" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      {/* Left Gradient */}
      <div 
        className="absolute left-0 top-0 w-24 md:w-40 h-full z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)'
        }}
      />
      
      {/* Right Gradient */}
      <div 
        className="absolute right-0 top-0 w-24 md:w-40 h-full z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)'
        }}
      />

      {/* Marquee Container */}
      <div className="relative">
        <motion.div 
          className="flex gap-8"
          animate={{
            x: [-totalWidth, 0], // Move from -totalWidth to 0 for seamless loop
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 60, // Very slow - 60 seconds per cycle
              ease: "linear", // Linear easing for consistent speed
            },
          }}
          style={{ 
            width: 'fit-content',
            willChange: 'transform'
          }}
        >
          {allItems.map((item, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 rounded-2xl overflow-hidden shadow-2xl"
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              style={{
                width: `${cardWidth}px`,
                height: '300px',
                background: 'transparent',
                boxShadow: '0 12px 40px rgba(0,0,0,0.4)'
              }}
            >
              <div 
                className="w-full h-full bg-cover bg-center rounded-2xl"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
