import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function Hero() {
  const heroRef = useRef();
  const badgeRef = useRef();
  const titleRef = useRef();
  const subtitleRef = useRef();
  const buttonRef = useRef();
  const trustRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });
    
    tl.fromTo(badgeRef.current, 
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' }
    )
    .fromTo(titleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power2.out' },
      '-=0.3'
    )
    .fromTo(subtitleRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.6, ease: 'power2.out' },
      '-=0.4'
    )
    .fromTo(buttonRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
      '-=0.2'
    )
    .fromTo(trustRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, ease: 'power2.out' },
      '-=0.3'
    );
  }, []);

  return (
    <section 
      ref={heroRef} 
      className="relative flex flex-col items-center justify-center px-4"
      style={{
        minHeight: '75vh', // Reduced from 85vh
        paddingTop: '3rem', // Reduced padding
        paddingBottom: '3rem' // Reduced padding
      }}
    >
      <div className="relative z-10 max-w-3xl mx-auto text-center"> {/* Reduced max-width from 4xl to 3xl */}
        {/* Status Badge */}
        <div 
          ref={badgeRef}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 shadow-lg" // Reduced margin bottom
          style={{
            background: 'rgba(0, 0, 0, 0.6)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            fontFamily: 'Inter, sans-serif'
          }}
        >
          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          <span className="text-white/90 font-medium text-sm">Not for all. For the Ambitious.</span>
        </div>

        {/* Main Heading - Two-tone with thin font */}
        <h1 
          ref={titleRef}
          className="leading-[1.1] mb-5" // Reduced margin bottom
          style={{ 
            fontFamily: 'Inter, sans-serif',
            fontWeight: '300', // Thin font weight
            fontSize: 'clamp(2.5rem, 8vw, 4.5rem)' // Smaller responsive font size
          }}
        >
          <span style={{ color: '#FFFFFF' }}>Software Solutions</span>
          <br />
          <span style={{ color: 'rgb(150, 150, 150)' }}>that Scale Your Business</span>
        </h1>

        {/* Subtitle */}
        <p 
          ref={subtitleRef}
          className="max-w-2xl mx-auto mb-8 leading-relaxed font-normal" // Reduced margin and max-width
          style={{ 
            fontFamily: 'Inter, sans-serif',
            color: '#9CA3AF',
            fontSize: 'clamp(1rem, 3vw, 1.25rem)' // Smaller responsive font size
          }}
        >
          Build, automate, and scale your business with wAt's tailored software and digital marketing solutions—stress-free engagement, measurable results.
        </p>

        {/* CTA Button */}
        <div ref={buttonRef} className="mb-6"> {/* Reduced margin bottom */}
          <button 
            className="px-7 py-3 rounded-xl font-semibold text-white shadow-xl hover:scale-105 transition-all duration-200" // Reduced padding
            style={{
              background: '#0072b0', // Updated blue color
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem' // Smaller font size
            }}
          >
            Schedule Free Consultation
          </button>
        </div>

        {/* Trust Indicators */}
        <div ref={trustRef} className="flex items-center justify-center gap-2"> {/* Reduced gap */}
          <div className="flex gap-1">
            {[...Array(5)].map((_, i) => (
              <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"> {/* Smaller stars */}
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <span 
            className="font-medium"
            style={{ 
              color: '#9CA3AF',
              fontFamily: 'Inter, sans-serif',
              fontSize: '1rem' // Smaller font size
            }}
          >
            Trusted by 120+ businesses
          </span>
        </div>
      </div>
    </section>
  );
}

export default Hero;
