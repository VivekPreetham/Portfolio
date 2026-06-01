// client/src/components/Education.jsx
import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { educationData } from '../utils/data';

// Register GSAP Plugin
gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const containerRef = useRef(null);
  const lineRef = useRef(null);

  // GSAP ScrollTrigger for the self-drawing timeline line
  useEffect(() => {
    // gsap.matchMedia automatically handles scoped animation creation and cleanup
    let mm = gsap.matchMedia();

    // 1. STANDARD SCROLL ANIMATION (Executed when NO reduced-motion preference is active)
    mm.add("(prefers-reduced-motion: no-preference)", () => {
      gsap.fromTo(
        lineRef.current,
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top center', // Start drawing when the top of the section hits the center of the viewport
            end: 'bottom center', // Finish drawing when the bottom of the section hits the center
            scrub: true, // Ties the animation frame directly to the scrollbar movement
          },
        }
      );
    });

    // 2. ACCESSIBILITY FALLBACK (Executed when the user requests REDUCED motion)
    mm.add("(prefers-reduced-motion: reduce)", () => {
      // Instantly pin the timeline line to its maximum height with zero transitions
      gsap.set(lineRef.current, { height: '100%' });
    });

    // Revert handles deep garbage collection natively when the component unmounts
    return () => mm.revert(); 
  }, []);

  return (
    <section className="relative py-24 bg-darkBg overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            Academic Journey
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-accentPurple to-accentTeal rounded-full" />
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div ref={containerRef} className="relative w-full pb-10">
          
          {/* Static Background Line (Dimmed) */}
          <div className="absolute left-[8%] md:left-1/2 top-0 bottom-0 w-1 bg-white/5 transform -translate-x-1/2 rounded-full z-0" />
          
          {/* Animated Gradient Fill Line */}
          <div 
            ref={lineRef} 
            className="absolute left-[8%] md:left-1/2 top-0 w-1 bg-gradient-to-b from-accentPurple to-accentTeal transform -translate-x-1/2 rounded-full z-10" 
          />

          {/* Timeline Cards */}
          <div className="flex flex-col gap-12">
            {educationData.map((edu, index) => {
              // Alternating logic for desktop
              const isLeft = index % 2 === 0;

              return (
                <div 
                  key={edu.id} 
                  className={`relative flex w-full ${isLeft ? 'md:justify-start' : 'md:justify-end'} justify-end items-center`}
                >
                  
                  {/* Timeline Dot (Snaps to line) */}
                  <div className="absolute left-[8%] md:left-1/2 w-5 h-5 bg-darkBg border-4 border-accentPurple rounded-full transform -translate-x-1/2 z-20 shadow-[0_0_15px_rgba(127,119,221,0.6)]" />

                  {/* Card Content Wrapper with optimize-gpu enhancement to safeguard against layout frame drops */}
                  <motion.div 
                    className="w-[85%] md:w-[45%] bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-accentPurple/50 hover:bg-white/10 transition-all duration-300 group optimize-gpu"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ type: "spring", stiffness: 80, damping: 12, delay: 0.1 }}
                  >
                    {/* Card Inner Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-accentPurple/0 via-accentTeal/5 to-accentPurple/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                    
                    <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between mb-4 gap-2">
                      <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accentPurple group-hover:to-accentTeal transition-all">
                        {edu.institution}
                      </h3>
                      <span className="px-3 py-1 bg-accentPurple/20 text-accentPurple border border-accentPurple/30 rounded-full text-xs font-semibold tracking-wide whitespace-nowrap w-fit">
                        {edu.year}
                      </span>
                    </div>
                    
                    <h4 className="text-md font-medium text-gray-300 mb-2">
                      {edu.degree}
                    </h4>
                    
                    <p className="text-sm font-semibold text-accentTeal">
                      {edu.score}
                    </p>
                  </motion.div>

                </div>
              );
            })}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Education;