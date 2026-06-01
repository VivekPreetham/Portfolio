// client/src/components/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../utils/data';

const Skills = () => {
  // Animation variants for the stagger effect
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
        
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          {/* Removed the absolute gradient line div from here */}
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            A comprehensive overview of my technical stack across multiple engineering disciplines.
          </p>
        </motion.div>

        {/* 2x2 Bento Box Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 optimize-gpu"
        >
          {skillsData.map((domain) => (
            <motion.div 
              key={domain.id}
              variants={cardVariants}
              className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-accentTeal/40 transition-colors duration-500 group flex flex-col"
            >
              {/* Domain Title (Changed mb-6 to mb-4 to tighten the gap even further) */}
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accentPurple group-hover:to-accentTeal transition-all duration-300">
                {domain.title}
              </h3>
              
              {/* Wrapping Skill Pills (Removed mt-auto to align items to the top) */}
              <div className="flex flex-wrap gap-3">
                {domain.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className="px-4 py-2 bg-darkBg/60 border border-white/5 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:border-accentTeal/50 hover:bg-accentTeal/10 transition-all duration-300 cursor-default shadow-sm hover:shadow-[0_0_15px_rgba(29,158,117,0.2)] hover:-translate-y-0.5"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              {/* Subtle Background Glow on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-accentPurple/0 via-accentTeal/5 to-accentPurple/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500 pointer-events-none rounded-2xl -z-10" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;