// client/src/components/Hero.jsx
import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import Typewriter from 'typewriter-effect';
import Particles from 'react-tsparticles';
import { loadSlim } from 'tsparticles-slim';
import { FaGithub, FaLinkedin, FaTwitter, FaCode } from 'react-icons/fa';
import { FiDownload, FiChevronDown } from 'react-icons/fi';

const Hero = () => {
  // Ultra-stable v2 initialization
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  // Framer Motion Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-darkBg pt-20">
      
      {/* 1. Floating Gradient Orbs (Background) */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-accentPurple rounded-full mix-blend-screen filter blur-[120px] opacity-20"
        animate={{ x: [0, 50, 0], y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accentTeal rounded-full mix-blend-screen filter blur-[120px] opacity-20"
        animate={{ x: [0, -50, 0], y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* 2. tsParticles Interactive Web (v2 Syntax) */}
      <Particles
        id="tsparticles"
        className="absolute inset-0 z-0"
        init={particlesInit}
        options={{
          background: { color: { value: "transparent" } },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: { enable: true, mode: "push" },
              onHover: { enable: true, mode: "grab" },
              resize: true,
            },
            modes: {
              push: { quantity: 4 },
              grab: { distance: 140, links: { opacity: 0.5 } },
            },
          },
          particles: {
            color: { value: ["#7F77DD", "#1D9E75"] },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.1,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: { default: "bounce" },
              random: false,
              speed: 1,
              straight: false,
            },
            number: { density: { enable: true, area: 800 }, value: 40 },
            opacity: { value: 0.3 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 3 } },
          },
          detectRetina: true,
        }}
      />

      {/* 3. Main Hero Content */}
      <motion.div 
        className="relative z-10 max-w-5xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="text-accentTeal font-medium tracking-wide mb-4">
          Hello World, I'm
        </motion.p>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-400">
            Vivek Preetham Mekala
          </span>
        </motion.h1>

        <motion.div variants={itemVariants} className="text-2xl md:text-3xl font-semibold text-gray-300 mb-8 h-12">
          <Typewriter
            options={{
              strings: [
                'Full Stack Developer',
                'Machine Learning Engineer',
                'Problem Solver',
                'Gen AI engineer'
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
              delay: 80,
              cursorClassName: 'text-accentPurple'
            }}
          />
        </motion.div>

        <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg leading-relaxed">
          I build high-performance, visually stunning web applications with the MERN stack. 
          Passionate about clean code, robust backend architectures, and seamless user experiences.
        </motion.p>

        {/* 4. CTA Buttons & Socials */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
          <button 
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3.5 rounded-full bg-gradient-to-r from-accentPurple to-accentTeal text-white font-semibold tracking-wide hover:shadow-[0_0_25px_rgba(127,119,221,0.5)] transition-all duration-300 transform hover:-translate-y-1"
          >
            View My Work
          </button>
          
          <a 
            href="/resume.pdf" 
            download="Vivek_Preetham_Resume.pdf"
            className="group relative px-8 py-3.5 rounded-full overflow-hidden bg-transparent text-white font-semibold tracking-wide border border-white/20 hover:border-white/50 transition-all duration-300"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />
            <div className="relative flex items-center gap-2">
              <span>Download Resume</span>
              <FiDownload className="group-hover:animate-bounce" />
            </div>
          </a>
        </motion.div>

        <motion.div variants={itemVariants} className="flex items-center justify-center gap-6">
          {[
            { icon: FaGithub, href: "https://github.com/VivekPreetham" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/vivek-preetham-714a632a6/" },
            { icon: FaTwitter, href: "https://twitter.com/yourusername" },
            { icon: FaCode, href: "https://leetcode.com/u/VivekPreetham12/" }
          ].map((social, index) => (
            <a 
              key={index}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-white transform hover:scale-110 hover:-translate-y-1 transition-all duration-300"
            >
              <social.icon size={26} />
            </a>
          ))}
        </motion.div>
      </motion.div>

      {/* 5. Scroll Down Bouncing Arrow */}
      <motion.div 
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer text-gray-400 hover:text-white transition-colors"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <FiChevronDown size={32} />
      </motion.div>
      
    </section>
  );
};

export default Hero;