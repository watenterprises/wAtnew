import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code2,
  GitBranch,
  Palette,
  FileCode,
  Terminal,
  Monitor,
  Layers,
  Database,
  BarChart3,
  Search,
  Share2,
  Mail,
  LineChart,
  Megaphone,
  Globe,
  Users
} from 'lucide-react'

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef();

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.feature-card');
    
    gsap.fromTo(cards, 
      { 
        y: 60, 
        opacity: 0 
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 90%',
          toggleActions: 'play none none reverse'
        }
      }
    );
  }, []);

  // Web development tool icons (top row)
  const topLogos = [
    { name: 'Code', icon: <Code2 size={32} color="white" /> },
    { name: 'Git', icon: <GitBranch size={32} color="white" /> },
    { name: 'Design', icon: <Palette size={32} color="white" /> },
    { name: 'File', icon: <FileCode size={32} color="white" /> },
    { name: 'Terminal', icon: <Terminal size={32} color="white" /> },
    { name: 'Monitor', icon: <Monitor size={32} color="white" /> },
    { name: 'Layers', icon: <Layers size={32} color="white" /> },
    { name: 'Database', icon: <Database size={32} color="white" /> }
  ];

  // Digital marketing tool icons (bottom row)
  const bottomLogos = [
    { name: 'Analytics', icon: <BarChart3 size={32} color="white" /> },
    { name: 'SEO', icon: <Search size={32} color="white" /> },
    { name: 'Social', icon: <Share2 size={32} color="white" /> },
    { name: 'Email', icon: <Mail size={32} color="white" /> },
    { name: 'Trends', icon: <LineChart size={32} color="white" /> },
    { name: 'Ads', icon: <Megaphone size={32} color="white" /> },
    { name: 'Global', icon: <Globe size={32} color="white" /> },
    { name: 'Audience', icon: <Users size={32} color="white" /> }
  ];
  return (
    <section ref={sectionRef} className="bg-black" style={{ minHeight: '100vh', paddingTop: '80px', paddingBottom: '80px' }}>
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center" style={{ marginBottom: '100px' }}>
          <h2 
            className="leading-tight"
            style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              fontSize: 'clamp(3rem, 5vw, 4rem)',
              fontWeight: '400',
              marginBottom: '24px'
            }}
          >
            <span className="text-white">Your scalable,</span><br />
            <span style={{ color: '#7d7d7d' }}>dedicated design team</span>
          </h2>
          
          <p 
            className="max-w-4xl mx-auto leading-relaxed"
            style={{ 
              fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
              color: '#7d7d7d',
              fontSize: '1.25rem',
              fontWeight: '400'
            }}
          >
            Get a professional website without the upfront costs. We design, optimize, and maintain, so you can focus on growing your business.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8" style={{ marginBottom: '80px' }}>
          
          {/* Feature 1: Scale as you grow */}
          <div
            className="feature-card rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(40, 40, 40, 0.9) 0%, rgba(20, 20, 20, 0.95) 50%, rgba(15, 15, 15, 1) 100%)',
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(135deg, rgba(40, 40, 40, 0.9) 0%, rgba(20, 20, 20, 0.95) 50%, rgba(15, 15, 15, 1) 100%), linear-gradient(135deg, rgba(80, 80, 80, 0.6), rgba(60, 60, 60, 0.3), rgba(40, 40, 40, 0.8))',
              backgroundOrigin: 'border-box',
              backgroundClip: 'content-box, border-box',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '40px',
              height: '420px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
            }}
          >
            <div>
              <h3 
                className="text-white"
                style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontSize: '1.75rem',
                  fontWeight: '500',
                  marginBottom: '16px'
                }}
              >
                Scale as you grow
              </h3>
              <p 
                style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  color: '#9d9d9d',
                  fontSize: '1rem',
                  fontWeight: '400',
                  lineHeight: '1.6',
                  marginBottom: '40px'
                }}
              >
                Upgrade anytime—whether you need a landing page or a website.
              </p>
            </div>
            
            {/* Chart Container with Drop Shadow */}
            <div 
              style={{ 
                marginTop: 'auto',
                background: 'rgba(12, 12, 12, 0.8)',
                borderRadius: '16px',
                padding: '24px',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                position: 'relative'
              }}
            >
              <div 
                style={{
                  position: 'absolute',
                  top: '16px',
                  left: '24px',
                  color: 'white',
                  fontSize: '18px',
                  fontWeight: '600',
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif'
                }}
              >
                +42%
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '120px' }}>
                <div className="flex items-end gap-2" style={{ height: '100px' }}>
                  <div style={{ 
                    width: '20px', 
                    height: '48px', 
                    background: 'linear-gradient(to top, #1e40af, #3b82f6, #60a5fa)', 
                    borderRadius: '2px 2px 0 0',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4), 0 2px 6px rgba(0, 0, 0, 0.3)'
                  }}></div>
                  <div style={{ 
                    width: '20px', 
                    height: '64px', 
                    background: 'linear-gradient(to top, #1e40af, #3b82f6, #60a5fa)', 
                    borderRadius: '2px 2px 0 0',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4), 0 2px 6px rgba(0, 0, 0, 0.3)'
                  }}></div>
                  <div style={{ 
                    width: '20px', 
                    height: '56px', 
                    background: 'linear-gradient(to top, #1e40af, #3b82f6, #60a5fa)', 
                    borderRadius: '2px 2px 0 0',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4), 0 2px 6px rgba(0, 0, 0, 0.3)'
                  }}></div>
                  <div style={{ 
                    width: '20px', 
                    height: '80px', 
                    background: 'linear-gradient(to top, #1e40af, #3b82f6, #60a5fa)', 
                    borderRadius: '2px 2px 0 0',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4), 0 2px 6px rgba(0, 0, 0, 0.3)'
                  }}></div>
                  <div style={{ 
                    width: '20px', 
                    height: '96px', 
                    background: 'linear-gradient(to top, #1e40af, #3b82f6, #60a5fa)', 
                    borderRadius: '2px 2px 0 0',
                    boxShadow: '0 4px 12px rgba(59, 130, 246, 0.4), 0 2px 6px rgba(0, 0, 0, 0.3)'
                  }}></div>
                </div>
                
                <div 
                  style={{
                    width: '64px',
                    height: '64px',
                    borderRadius: '50%',
                    background: 'conic-gradient(from 0deg, #3b82f6 0deg 216deg, #10b981 216deg 288deg, #f59e0b 288deg 360deg)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 6px 20px rgba(59, 130, 246, 0.3), 0 3px 8px rgba(0, 0, 0, 0.4)',
                    marginBottom: '16px'
                  }}
                >
                  <div style={{ 
                    width: '28px', 
                    height: '28px', 
                    backgroundColor: '#0a0a0a', 
                    borderRadius: '50%',
                    boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.6)'
                  }}></div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2: Rapid turnaround */}
          <div
            className="feature-card rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(40, 40, 40, 0.9) 0%, rgba(20, 20, 20, 0.95) 50%, rgba(15, 15, 15, 1) 100%)',
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(135deg, rgba(40, 40, 40, 0.9) 0%, rgba(20, 20, 20, 0.95) 50%, rgba(15, 15, 15, 1) 100%), linear-gradient(135deg, rgba(80, 80, 80, 0.6), rgba(60, 60, 60, 0.3), rgba(40, 40, 40, 0.8))',
              backgroundOrigin: 'border-box',
              backgroundClip: 'content-box, border-box',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '40px',
              height: '420px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
            }}
          >
            <div>
              <h3 
                className="text-white"
                style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontSize: '1.75rem',
                  fontWeight: '500',
                  marginBottom: '16px'
                }}
              >
                Effortless workflow
              </h3>
              <p 
                style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  color: '#9d9d9d',
                  fontSize: '1rem',
                  fontWeight: '400',
                  lineHeight: '1.6',
                  marginBottom: '40px'
                }}
              >
                Simplify your process with organized requests, quick approvals, and clear progress tracking.
              </p>
            </div>
            
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'rgba(45, 45, 45, 0.8)',
                  border: '1px solid rgba(70, 70, 70, 0.4)',
                  borderRadius: '16px',
                  padding: '16px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                }}
              >
                <div 
                  style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <svg width="16" height="16" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p 
                    style={{ 
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: '500',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                      margin: 0,
                      marginBottom: '2px'
                    }}
                  >
                    New Framer project
                  </p>
                  <p 
                    style={{ 
                      color: '#7d7d7d',
                      fontSize: '12px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                      margin: 0
                    }}
                  >
                    Today, 11:08AM
                  </p>
                </div>
              </div>
              
              <div 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  background: 'rgba(45, 45, 45, 0.8)',
                  border: '1px solid rgba(70, 70, 70, 0.4)',
                  borderRadius: '16px',
                  padding: '16px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                }}
              >
                <div 
                  style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '8px',
                    background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <svg width="16" height="16" fill="none" stroke="white" viewBox="0 0 24 24" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <p 
                    style={{ 
                      color: 'white',
                      fontSize: '14px',
                      fontWeight: '500',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                      margin: 0,
                      marginBottom: '2px'
                    }}
                  >
                    New Figma file
                  </p>
                  <p 
                    style={{ 
                      color: '#7d7d7d',
                      fontSize: '12px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                      margin: 0
                    }}
                  >
                    Today, 11:02AM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 3: Unlimited requests */}
          <div
            className="feature-card rounded-3xl"
            style={{
              background: 'linear-gradient(135deg, rgba(40, 40, 40, 0.9) 0%, rgba(20, 20, 20, 0.95) 50%, rgba(15, 15, 15, 1) 100%)',
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(135deg, rgba(40, 40, 40, 0.9) 0%, rgba(20, 20, 20, 0.95) 50%, rgba(15, 15, 15, 1) 100%), linear-gradient(135deg, rgba(80, 80, 80, 0.6), rgba(60, 60, 60, 0.3), rgba(40, 40, 40, 0.8))',
              backgroundOrigin: 'border-box',
              backgroundClip: 'content-box, border-box',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '40px',
              height: '420px',
              display: 'flex',
              flexDirection: 'column',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)'
            }}
          >
            <div>
              <h3 
                className="text-white"
                style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  fontSize: '1.75rem',
                  fontWeight: '500',
                  marginBottom: '16px'
                }}
              >
                Dedicated support
              </h3>
              <p 
                style={{ 
                  fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                  color: '#9d9d9d',
                  fontSize: '1rem',
                  fontWeight: '400',
                  lineHeight: '1.6',
                  marginBottom: '40px'
                }}
              >
                Get personalized assistance anytime — we’re here to make your vision a reality.
              </p>
            </div>
            
            <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <div 
                  style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)',
                    flexShrink: 0,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                  }}
                ></div>
                <div 
                  style={{
                    background: 'rgba(60, 60, 60, 0.8)',
                    borderRadius: '16px',
                    borderTopLeftRadius: '4px',
                    padding: '12px 16px',
                    maxWidth: '240px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <p 
                    style={{ 
                      color: '#e0e0e0',
                      fontSize: '14px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                      margin: 0,
                      lineHeight: '1.4'
                    }}
                  >
                    Hello, could you update the logo on our website?
                  </p>
                </div>
              </div>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', justifyContent: 'flex-end' }}>
                <div 
                  style={{
                    background: 'rgba(60, 60, 60, 0.8)',
                    borderRadius: '16px',
                    borderTopRightRadius: '4px',
                    padding: '12px 16px',
                    maxWidth: '240px',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)'
                  }}
                >
                  <p 
                    style={{ 
                      color: '#e0e0e0',
                      fontSize: '14px',
                      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                      margin: 0,
                      lineHeight: '1.4'
                    }}
                  >
                    Sure, just let me send it to the team!
                  </p>
                </div>
                <div 
                  style={{ 
                    width: '32px', 
                    height: '32px', 
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #9ca3af 0%, #6b7280 100%)',
                    flexShrink: 0,
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Collaboration Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          
          {/* Left Card - Seamless collaboration */}
          <div
            style={{
              background: 'linear-gradient(135deg, rgba(40, 40, 40, 0.9) 0%, rgba(20, 20, 20, 0.95) 50%, rgba(15, 15, 15, 1) 100%)',
              border: '1px solid transparent',
              backgroundImage: 'linear-gradient(135deg, rgba(40, 40, 40, 0.9) 0%, rgba(20, 20, 20, 0.95) 50%, rgba(15, 15, 15, 1) 100%), linear-gradient(135deg, rgba(80, 80, 80, 0.6), rgba(60, 60, 60, 0.3), rgba(40, 40, 40, 0.8))',
              backgroundOrigin: 'border-box',
              backgroundClip: 'content-box, border-box',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              padding: '60px',
              borderRadius: '24px',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
              height: '300px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}
          >
            <h3 
              className="text-white mb-6"
              style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                fontSize: '2.5rem',
                fontWeight: '500',
                lineHeight: '1.2'
              }}
            >
              Seamless collaboration
            </h3>
            <p 
              style={{ 
                fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
                color: '#9d9d9d',
                fontSize: '1rem',
                fontWeight: '400',
                lineHeight: '1.6'
              }}
            >
              Work directly with our expert designers via OneNote, Discord, and Notion. Get updates, share feedback, and launch faster than ever. We ensure smooth and fast communication.
            </p>
          </div>

          {/* Right Side - Logo Marquees */}
          <div className="flex flex-col gap-6">
            
            {/* Top Row - Moving Left to Right */}
            <div className="relative overflow-hidden" style={{ height: '80px' }}>
              {/* Left Gradient */}
              <div 
                className="absolute left-0 top-0 w-20 h-full z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)'
                }}
              />
              
              {/* Right Gradient */}
              <div 
                className="absolute right-0 top-0 w-20 h-full z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)'
                }}
              />

              <motion.div 
                className="flex gap-6 items-center"
                animate={{
                  x: [0, -400]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear"
                  }
                }}
                style={{ width: 'fit-content' }}
              >
                {[...topLogos, ...topLogos, ...topLogos].map((logo, index) => (
                  <div
                    key={index}
                    style={{
                      width: '80px',
                      height: '80px',
                      background: 'rgba(40, 40, 40, 0.8)',
                      border: '1px solid rgba(60, 60, 60, 0.4)',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    {logo.icon}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Bottom Row - Moving Right to Left */}
            <div className="relative overflow-hidden" style={{ height: '80px' }}>
              {/* Left Gradient */}
              <div 
                className="absolute left-0 top-0 w-20 h-full z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)'
                }}
              />
              
              {/* Right Gradient */}
              <div 
                className="absolute right-0 top-0 w-20 h-full z-10 pointer-events-none"
                style={{
                  background: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 50%, rgba(0,0,0,0) 100%)'
                }}
              />

              <motion.div 
                className="flex gap-6 items-center"
                animate={{
                  x: [-400, 0]
                }}
                transition={{
                  x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 15,
                    ease: "linear"
                  }
                }}
                style={{ width: 'fit-content' }}
              >
                {[...bottomLogos, ...bottomLogos, ...bottomLogos].map((logo, index) => (
                  <div
                    key={index}
                    style={{
                      width: '80px',
                      height: '80px',
                      background: 'rgba(40, 40, 40, 0.8)',
                      border: '1px solid rgba(60, 60, 60, 0.4)',
                      borderRadius: '16px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '24px',
                      flexShrink: 0,
                      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.25)'
                    }}
                  >
                    {logo.icon}
                  </div>
                ))}
              </motion.div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Features;
