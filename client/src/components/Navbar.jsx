// client/src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiDownload } from 'react-icons/fi';

// 1. The Updated Links Array (Services added perfectly in the middle)
const navLinks = [
  { name: 'Home', id: 'home' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Services', id: 'services' }, // 👈 New link added here!
  { name: 'Projects', id: 'projects' },
  { name: 'Education', id: 'education' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle Scroll (Glassmorphism & Active Link Spy)
  useEffect(() => {
    const handleScroll = () => {
      // Toggle glassmorphism at 50px scroll
      setScrolled(window.scrollY > 50);

      // Determine which section is currently in view
      let current = 'home';
      for (const link of navLinks) {
        const element = document.getElementById(link.id);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section top is near the top of the viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = link.id;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
  }, [isOpen]);

  const scrollToSection = (id) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Framer Motion Variants for Mobile Menu
  const menuVariants = {
    closed: { opacity: 0, x: '100%' },
    open: { opacity: 1, x: 0, transition: { type: 'spring', stiffness: 70, damping: 15 } }
  };

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.4, ease: 'easeOut' }
    })
  };

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-darkBg/70 backdrop-blur-md border-b border-white/10 py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        
        {/* 1. Logo */}
        <motion.div 
          className="text-2xl font-bold cursor-pointer relative group"
          onClick={() => scrollToSection('home')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-accentPurple to-accentTeal">
            MVP.
          </span>
          {/* Subtle logo glow on hover */}
          <div className="absolute -inset-2 bg-gradient-to-r from-accentPurple to-accentTeal rounded-full opacity-0 group-hover:opacity-30 blur-lg transition duration-500" />
        </motion.div>

        {/* 2. Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium transition-colors duration-300 relative ${
                activeSection === link.id ? 'text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              {link.name}
              {activeSection === link.id && (
                <motion.div
                  layoutId="activeUnderline"
                  className="absolute left-0 right-0 -bottom-1 h-[2px] bg-gradient-to-r from-accentPurple to-accentTeal"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* 3. Desktop Actions (Socials + Resume) */}
        <div className="hidden md:flex items-center space-x-4">
          <a href="https://github.com/VivekPreetham" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
            <FiGithub size={20} />
          </a>
          <a href="https://www.linkedin.com/in/vivek-preetham-714a632a6/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
            <FiLinkedin size={20} />
          </a>
          <a 
            href="/resume.pdf" 
            download="Vivek_Preetham_Resume.pdf"
            className="flex items-center gap-2 px-5 py-2 rounded-full border border-accentPurple text-accentPurple hover:bg-accentPurple hover:text-white transition-all duration-300 group"
          >
            <span>Resume</span>
            <FiDownload className="group-hover:animate-bounce" />
          </a>
        </div>

        {/* 4. Mobile Menu Toggle */}
        <button 
          className="md:hidden text-2xl text-gray-300 z-50 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* 5. Mobile Fullscreen Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-darkBg/95 backdrop-blur-xl z-40 flex flex-col justify-center items-center"
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            <div className="flex flex-col items-center space-y-8">
              {navLinks.map((link, i) => (
                <motion.button
                  key={link.id}
                  custom={i}
                  variants={linkVariants}
                  onClick={() => scrollToSection(link.id)}
                  className={`text-2xl font-bold tracking-wider ${
                    activeSection === link.id ? 'text-transparent bg-clip-text bg-gradient-to-r from-accentPurple to-accentTeal' : 'text-gray-400'
                  }`}
                >
                  {link.name}
                </motion.button>
              ))}
              
              <motion.div 
                custom={navLinks.length} 
                variants={linkVariants}
                className="flex items-center gap-6 mt-8 pt-8 border-t border-white/10 w-full justify-center"
              >
                <a href="https://github.com/VivekPreetham" target="_blank" rel="noreferrer" className="text-2xl text-gray-400 hover:text-white">
                  <FiGithub />
                </a>
                <a href="https://www.linkedin.com/in/vivek-preetham-714a632a6/" target="_blank" rel="noreferrer" className="text-2xl text-gray-400 hover:text-white">
                  <FiLinkedin />
                </a>
                <a 
                  href="/resume.pdf" 
                  download="Vivek_Preetham_Resume.pdf"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accentPurple to-accentTeal text-white font-medium"
                >
                  <FiDownload /> Resume
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;