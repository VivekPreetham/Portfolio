// client/src/components/Loader.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-darkBg"
      // This exit animation works if you wrap your <Loader /> in <AnimatePresence> in App.jsx, 
      // but even without it, the 2-second unmount handles the transition cleanly.
      exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
    >
      {/* 1. Glowing Initials */}
      <motion.div
        className="relative flex items-center justify-center w-24 h-24 mb-8 rounded-full bg-darkBg border border-gray-800"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {/* Pulsing Glow Effect behind the text */}
        <motion.div
          className="absolute inset-0 rounded-full bg-accentPurple opacity-20 blur-xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        />
        
        {/* Text Initials */}
        <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-accentPurple to-accentTeal z-10">
          MVP
        </span>
      </motion.div>

      {/* 2. Progress Bar Container */}
      <motion.div 
        className="w-48 h-1 bg-gray-800 rounded-full overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {/* 3. Progress Bar Fill */}
        <motion.div
          className="h-full bg-gradient-to-r from-accentPurple to-accentTeal"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ 
            duration: 1.5, // Fills up right before the 2-second unmount in App.jsx
            ease: "easeInOut",
            delay: 0.3 
          }}
        />
      </motion.div>
      
      {/* 4. Loading Text */}
      <motion.p
        className="mt-4 text-sm tracking-widest text-gray-400 uppercase"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        Loading System
      </motion.p>
    </motion.div>
  );
};

export default Loader;