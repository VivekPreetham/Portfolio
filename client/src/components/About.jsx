// client/src/components/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { infoCards } from '../utils/data';

const About = () => {
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
            About Me
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-accentPurple to-accentTeal rounded-full" />
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT COLUMN: Profile Photo sliding in from the left */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 70 }}
          >
            {/* The Rotating Gradient Border Container */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-[4px] group">
              {/* Spinning Gradient Layer */}
              <div className="absolute inset-0 bg-gradient-to-r from-accentPurple via-accentTeal to-accentPurple rounded-full animate-[spin_4s_linear_infinite]" />
              
              {/* Inner Image Container (Stationary) */}
              <div className="relative w-full h-full bg-darkBg rounded-full overflow-hidden border-4 border-darkBg z-10">
                {/* Replace src with your actual image path, e.g., "/profile.jpg" */}
                <img 
                  src="/profile.jpeg" 
                  alt="Vivek Preetham" 
                  className="w-full h-full object-cover transition-all duration-500"
                />
                
                {/* Inner Glowing Ring Animation on Hover */}
                <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(127,119,221,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Bio Text and Info Cards sliding in from the right */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, type: "spring", stiffness: 70, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-white">
              Hello! I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPurple to-accentTeal">Vivek Preetham</span>
            </h3>
            
            <p className="text-gray-400 leading-relaxed mb-6">
              I'm a final-year B.Tech CSE student specializing in <span className="text-accentTeal font-semibold">Data Science & Analytics</span> at IIIT Nagpur. I architect and deploy <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPurple to-accentTeal font-bold">production-grade AI systems</span> — building everything from <span className="text-white font-medium">RAG pipelines</span> with <span className="text-accentPurple font-medium">LangChain</span> and <span className="text-accentPurple font-medium">FAISS</span>, to full-stack <span className="text-white font-medium">MERN applications</span> with distributed microservice backends.
            </p>
            
            <p className="text-gray-400 leading-relaxed mb-8">
              Outside of code, I lead visual design for college events as Design Lead at <span className="text-white font-medium">Abhivyakti</span> and <span className="text-white font-medium">Strokes Design Club</span> — which means I bring both <span className="text-accentPurple font-semibold">engineering precision</span> and <span className="text-accentTeal font-semibold">design thinking</span> to everything I build.
            </p>

            {/* Info Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {infoCards.map((card) => (
                <div 
                  key={card.id} 
                  className="bg-white/5 border border-white/10 backdrop-blur-sm p-4 rounded-xl hover:-translate-y-1 hover:border-accentPurple/50 transition-all duration-300 group"
                >
                  <p className="text-sm text-gray-500 uppercase tracking-wider mb-1">{card.label}</p>
                  <p className="text-white font-medium text-sm md:text-base group-hover:text-accentTeal transition-colors">
                    {card.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;