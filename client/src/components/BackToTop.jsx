// client/src/components/BackToTop.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronUp } from 'react-icons/fi';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // Show button if scrolled down past 300px
      setIsVisible(window.scrollY > 300);

      // Calculate total scroll percentage
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        const percentage = (window.scrollY / totalScrollHeight) * 100;
        setScrollProgress(percentage);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SVG parameters for progress circle ring calculation
  const radius = 20;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (scrollProgress / 100) * circumference;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-darkBg border border-white/10 rounded-full text-white shadow-[0_0_20px_rgba(0,0,0,0.5)] group hover:border-accentPurple/50 hover:shadow-[0_0_15px_rgba(127,119,221,0.4)] transition-all duration-300 focus:outline-none"
          aria-label="Back to top"
        >
          {/* Circular Progress Ring */}
          <svg className="absolute w-full h-full -rotate-90 pointer-events-none" viewBox="0 0 48 48">
            {/* Background tracking track circle */}
            <circle
              cx="24"
              cy="24"
              r={radius}
              fill="transparent"
              stroke="rgba(255, 255, 255, 0.05)"
              strokeWidth="3"
            />
            {/* Active drawing gradient ring */}
            <motion.circle
              cx="24"
              cy="24"
              r={radius}
              fill="transparent"
              stroke="url(#progressGradient)"
              strokeWidth="3"
              strokeDasharray={circumference}
              style={{ strokeDashoffset }}
              strokeLinecap="round"
            />
            
            {/* Inline Local SVG Gradient Definition declarations definition definition definitions */}
            <defs>
              <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#7F77DD" />
                <stop offset="100%" stopColor="#1D9E75" />
              </linearGradient>
            </defs>
          </svg>

          {/* Up Arrow Centered Icon */}
          <FiChevronUp 
            size={22} 
            className="relative z-10 text-gray-400 group-hover:text-white group-hover:-translate-y-0.5 transition-all duration-300" 
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;