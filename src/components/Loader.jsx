import React, { useRef, useEffect, useState } from 'react';
import { gsap } from 'gsap';

function Loader() {
  const outerRingRef = useRef();
  const innerRingRef = useRef();
  const logoRef = useRef();
  const [displayedQuote, setDisplayedQuote] = useState('');

  useEffect(() => {
    // Loader animations
    gsap.to(outerRingRef.current, {
      rotate: 360,
      repeat: -1,
      duration: 2,
      ease: "none"
    });

    gsap.to(innerRingRef.current, {
      rotate: -360,
      repeat: -1,
      duration: 1.5,
      ease: "none"
    });

    gsap.to(logoRef.current, {
      scale: 1.1,
      yoyo: true,
      repeat: -1,
      duration: 0.8,
      ease: "sine.inOut"
    });

    // Motivational quotes
    const quotes = [
      "Turning your vision into digital reality.",
      "Innovation starts with a single click.",
      "Building brands that inspire and grow.",
      "Your business deserves a bold digital identity.",
      "We craft experiences that convert visitors into clients.",
      "Design. Develop. Dominate your market.",
      "Transform your ideas into impactful web solutions."
    ];
    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    // Typing effect
    let index = 0;
    const typingInterval = setInterval(() => {
      setDisplayedQuote(prev => prev + quote.charAt(index));
      index++;
      if (index >= quote.length) clearInterval(typingInterval);
    }, 40); // typing speed

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      <div className="relative flex items-center justify-center">
        {/* Outer ring */}
        <div
          ref={outerRingRef}
          className="w-20 h-20 rounded-full border-4 border-transparent"
          style={{
            borderTopColor: '#0072b0',
            borderRightColor: '#005a8b',
            filter: 'drop-shadow(0 0 20px rgba(0, 114, 176, 0.3))'
          }}
        />

        {/* Inner ring */}
        <div
          ref={innerRingRef}
          className="absolute w-14 h-14 rounded-full border-2 border-transparent"
          style={{
            borderBottomColor: '#0072b0',
            borderLeftColor: '#005a8b'
          }}
        />

        {/* Logo */}
        <div ref={logoRef} className="absolute w-10 h-10 flex items-center justify-center">
          <img src="/logo.png" alt="Logo" className="w-full h-full object-contain" />
        </div>
      </div>

      {/* Typing quote */}
      <div className="mt-6 text-center text-gray-300 text-sm sm:text-base px-6 max-w-sm whitespace-pre-wrap" style={{ fontFamily: 'Inter, sans-serif' }}>
        {displayedQuote}
        <span className="animate-pulse">|</span>
      </div>
    </div>
  );
}

export default Loader;
