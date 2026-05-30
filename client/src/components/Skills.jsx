import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../utils/data';

const Skills = () => {
  // Framer Motion Variants for staggering children
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.8 },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1,
      transition: { type: "spring", stiffness: 100, damping: 10 }
    }
  };

  // Helper function to render proficiency dots
  const renderDots = (level) => {
    return (
      <div className="flex gap-1 mt-2">
        {[1, 2, 3, 4, 5].map((dot) => (
          <div 
            key={dot} 
            className={`w-2 h-2 rounded-full ${
              dot <= level 
                ? 'bg-gradient-to-r from-accentPurple to-accentTeal' 
                : 'bg-gray-700'
            }`}
          />
        ))}
      </div>
    );
  };

  return (
    <section className="relative py-24 bg-darkBg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Heading */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            Technical Arsenal
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-accentPurple to-accentTeal rounded-full" />
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A comprehensive breakdown of the technologies, frameworks, and tools I use to bring digital architectures to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="flex flex-col gap-12">
          {skillsData.map((categoryGroup, index) => (
            <motion.div 
              key={index}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="w-full"
            >
              <motion.h3 
                variants={itemVariants} 
                className="text-xl font-semibold mb-6 text-white border-l-4 border-accentPurple pl-3"
              >
                {categoryGroup.category}
              </motion.h3>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
                {categoryGroup.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    variants={itemVariants}
                    className="relative group overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-5 flex flex-col items-center justify-center hover:border-accentPurple/50 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 cursor-default"
                  >
                    {/* Shimmer Effect Background Layer */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
                    
                    {/* Skill Icon */}
                    <div className="w-12 h-12 mb-3 flex items-center justify-center relative z-10">
                      <img 
                        src={skill.icon} 
                        alt={`${skill.name} icon`} 
                        className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.1)] group-hover:drop-shadow-[0_0_12px_rgba(127,119,221,0.6)] transition-all duration-300"
                      />
                    </div>
                    
                    {/* Skill Name */}
                    <h4 className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors relative z-10 text-center">
                      {skill.name}
                    </h4>

                    {/* Proficiency Dots */}
                    <div className="relative z-10">
                      {renderDots(skill.level)}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;