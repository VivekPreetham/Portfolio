// client/src/components/Projects.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import VanillaTilt from 'vanilla-tilt';
import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { fallbackProjects } from '../utils/data';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // 1. Fetch Data from Express API (Memory-Leak Proof)
  useEffect(() => {
    const abortController = new AbortController();

    const fetchProjects = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';
        const response = await axios.get(`${apiUrl}/projects`, {
          signal: abortController.signal
        });
        
        // LOGIC UPDATE: Safely check if data exists and is an array before checking length
        if (response.data.success && Array.isArray(response.data.data) && response.data.data.length > 0) {
          setProjects(response.data.data);
        } else {
          console.warn("API returned empty or invalid data, using fallback projects.");
          setProjects(fallbackProjects);
        }
      } catch (error) {
        if (error.name === 'CanceledError') return; 
        
        console.error("API Fetch Failed, loading fallback data:", error.message);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();

    return () => abortController.abort();
  }, []);

  // 2. Initialize Vanilla-Tilt 3D Effect after projects load
  useEffect(() => {
    if (!loading && projects.length > 0) {
      const elements = document.querySelectorAll(".tilt-card");
      VanillaTilt.init(elements, {
        max: 12,
        speed: 400,
        glare: true,
        "max-glare": 0.15,
        scale: 1.02,
      });
      
      return () => elements.forEach(el => el.vanillaTilt?.destroy());
    }
  }, [loading, projects]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 80 }
    }
  };

  return (
    <section className="relative py-24 bg-darkBg overflow-hidden">
      
      <div className="absolute top-40 right-[-10%] w-96 h-96 bg-accentPurple rounded-full mix-blend-screen filter blur-[150px] opacity-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold inline-block relative">
            Featured Projects
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-accentPurple to-accentTeal rounded-full" />
          </h2>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A selection of my recent work bridging complex artificial intelligence models with scalable, production-ready web architectures.
          </p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="w-12 h-12 border-4 border-white/10 border-t-accentPurple rounded-full animate-spin" />
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={project._id || index} 
                variants={itemVariants}
                className="tilt-card relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col h-full group hover:border-white/20 transition-colors duration-300 transform-style-3d"
                style={{
                  boxShadow: `0 0 0 rgba(0,0,0,0)` 
                }}
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl opacity-70 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: project.color || '#7F77DD', boxShadow: `0 0 15px ${project.color || '#7F77DD'}` }}
                />

                <div className="flex-1 transform-translate-z-20">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accentPurple group-hover:to-accentTeal transition-all duration-300">
                    {project.title || "Untitled Project"}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-4">
                    {project.description || "No description provided."}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {(project.tags || []).map((tag, i) => (
                      <span 
                        key={i} 
                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs font-medium text-gray-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/10 transform-translate-z-30">
                  <a 
                    href={project.github && project.github !== '#' ? project.github : '#'} 
                    target={project.github && project.github !== '#' ? "_blank" : "_self"}
                    rel="noreferrer"
                    onClick={(e) => {
                      if (!project.github || project.github === '#') e.preventDefault();
                    }}
                    className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                  >
                    <FaGithub size={16} />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.live && project.live !== '#' ? project.live : '#'} 
                    target={project.live && project.live !== '#' ? "_blank" : "_self"}
                    rel="noreferrer"
                    onClick={(e) => {
                      // Prevents browser from jumping to top of page if the link is empty or "#"
                      if (!project.live || project.live === '#') e.preventDefault();
                    }}
                    className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-accentTeal transition-colors ml-auto"
                  >
                    <span>Live Demo</span>
                    <FiExternalLink size={16} />
                  </a>
                </div>
                
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(circle at center, ${project.color || '#7F77DD'} 0%, transparent 70%)` }}
                />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Projects;