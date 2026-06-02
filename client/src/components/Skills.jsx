// client/src/components/Skills.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../utils/data';

// 1. We create a sub-component so each card can track its own scroll position
const SkillCard = ({ domain, cardVariants }) => {
  const [isInCenter, setIsInCenter] = useState(false);

  return (
    <motion.div
      variants={cardVariants}
      // Trigger the active state when the card enters the viewport
      onViewportEnter={() => setIsInCenter(true)}
      // Remove the active state when it leaves
      onViewportLeave={() => setIsInCenter(false)}
      // This margin shrinks the "active" zone to the middle 40% of the screen
      viewport={{ margin: "-30% 0px -30% 0px" }}
      
      // Dynamically apply the border color if hovered OR in center screen
      className={`bg-white/5 backdrop-blur-md border rounded-2xl p-8 transition-colors duration-500 group flex flex-col relative overflow-hidden ${
        isInCenter ? 'border-accentTeal/40' : 'border-white/10'
      } hover:border-accentTeal/40`}
    >
      {/* Domain Title */}
      <h3 className={`text-2xl font-bold mb-4 transition-all duration-300 ${
        isInCenter
          ? 'text-transparent bg-clip-text bg-gradient-to-r from-accentPurple to-accentTeal'
          : 'text-white'
      } group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accentPurple group-hover:to-accentTeal`}>
        {domain.title}
      </h3>
      
      {/* Wrapping Skill Pills */}
      <div className="flex flex-wrap gap-3 relative z-10">
        {domain.skills.map((skill, idx) => (
          <span 
            key={idx}
            className="px-4 py-2 bg-darkBg/60 border border-white/5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:border-accentTeal/50 hover:bg-accentTeal/10 transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(29,158,117,0.2)] hover:-translate-y-0.5"
          >
            {skill}
          </span>
        ))}
      </div>
      
      {/* Subtle Background Glow */}
      <div className={`absolute inset-0 bg-gradient-to-br from-accentPurple/0 via-accentTeal/5 to-accentPurple/0 blur-xl transition-opacity duration-500 pointer-events-none rounded-2xl -z-10 ${
        isInCenter ? 'opacity-100' : 'opacity-0'
      } group-hover:opacity-100`} />
    </motion.div>
  );
};

// 2. The Main Section Component
const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { type: "spring", stiffness: 80, damping: 15 } 
    }
  };

  return (
    <section className="relative py-24 bg-darkBg overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            Technical Arsenal
          </h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 optimize-gpu"
        >
          {skillsData.map((domain) => (
            // Using our new extracted component here!
            <SkillCard key={domain.id} domain={domain} cardVariants={cardVariants} />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;