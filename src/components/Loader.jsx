import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function Loader() {
  const outerRingRef = useRef();
  const innerRingRef = useRef();
  const textRef = useRef();
  const logoRef = useRef();

  useEffect(() => {
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

    gsap.to(textRef.current, {
      opacity: 0.5,
      yoyo: true,
      repeat: -1,
      duration: 1,
      ease: "sine.inOut"
    });

    gsap.to(logoRef.current, {
      scale: 1.1,
      yoyo: true,
      repeat: -1,
      duration: 0.8,
      ease: "sine.inOut"
    });
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black">
      <div className="relative flex items-center justify-center">
        <div
          ref={outerRingRef}
          className="w-20 h-20 rounded-full border-4 border-transparent"
          style={{ 
            borderTopColor: '#0072b0', // Updated blue color
            borderRightColor: '#005a8b', // Darker variant
            filter: 'drop-shadow(0 0 20px rgba(0, 114, 176, 0.3))'
          }}
        />
        
        <div
          ref={innerRingRef}
          className="absolute w-14 h-14 rounded-full border-2 border-transparent"
          style={{
            borderBottomColor: '#0072b0',
            borderLeftColor: '#005a8b'
          }}
        />
        
        <div 
          ref={logoRef}
          className="absolute w-8 h-8 rounded-md flex items-center justify-center"
          style={{
            background: 'linear-gradient(135deg, #0072b0 0%, #005a8b 100%)'
          }}
        >
          <span className="text-white font-bold text-xs">wAt</span>
        </div>
      </div>
      
      <div ref={textRef} className="mt-8 text-2xl font-bold tracking-wide text-white" style={{ fontFamily: 'Inter, sans-serif' }}>
        wAt
      </div>
      <div className="mt-2 text-sm text-gray-400 tracking-wider" style={{ fontFamily: 'Inter, sans-serif' }}>
        Loading your digital solutions...
      </div>
    </div>
  );
}

export default Loader;
