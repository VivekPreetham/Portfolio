// client/src/components/Services.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiArrowDownRight } from 'react-icons/fi';
import { servicesData } from '../utils/data';

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 80, damping: 20 }
    }
  };

  return (
    <section className="relative py-24 bg-darkBg overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        
        {/* New Section Heading */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative mb-4 text-white tracking-tight">
            What I Build
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg tracking-wide">
            Turning complex problems into production-ready solutions.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16"
        >
          {servicesData.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className="group relative flex flex-col border-b border-white/10 pb-8 hover:border-accentTeal/50 transition-colors duration-500 optimize-gpu"
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-5xl font-bold text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.7)] group-hover:[-webkit-text-stroke:1px_#1D9E75] transition-all duration-500 font-mono">
                  {service.id}
                </span>
                
                <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-darkBg transform group-hover:bg-accentTeal group-hover:text-white group-hover:-rotate-45 transition-all duration-500 shadow-lg">
                  <FiArrowDownRight size={28} strokeWidth={1.5} />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-white mb-4 tracking-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-accentTeal transition-all duration-300">
                {service.title}
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed max-w-md group-hover:text-gray-300 transition-colors duration-300">
                {service.description}
              </p>
              
              <div className="absolute inset-0 bg-accentTeal/5 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 pointer-events-none -z-10" />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Services;