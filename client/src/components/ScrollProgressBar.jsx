import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const ScrollProgressBar = () => {
  // Hook into the global scroll position
  const { scrollYProgress } = useScroll();
  
  // Apply spring physics for a smoother, less rigid animation
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-accentPurple to-accentTeal origin-left z-[100]"
      style={{ scaleX }}
    />
  );
};

export default ScrollProgressBar;