import React, { useState, useEffect } from 'react';
import { Toaster } from 'react-hot-toast';
import { AnimatePresence } from 'framer-motion';

// Component Imports
import Loader from './components/Loader';
import ScrollProgressBar from './components/ScrollProgressBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate the initial site loading screen for 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // If loading is true, only render the Loader component
  if (loading) {
    return <Loader />;
  }

  return (
    <div className="relative min-h-screen bg-darkBg text-white selection:bg-accentPurple selection:text-white">

      <AnimatePresence mode="wait">
        {loading && <Loader />}
      </AnimatePresence>

      {/* Global Form Notification Setup */}
      <Toaster 
        position="bottom-right" 
        toastOptions={{
          style: {
            background: '#1a1a24',
            color: '#fff',
            border: '1px solid #7F77DD'
          }
        }} 
      />

      <ScrollProgressBar />

      {/* Navigation */}
      <Navbar />

      {/* Main Content Sections */}
      <main>
        <section id="home">
          <Hero />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="skills">
          <Skills />
        </section>

        <section id="projects">
          <Projects />
        </section>

        <section id="education">
          <Education />
        </section>

        <section id="contact">
          <Contact />
        </section>
      </main>

      {/* Footer and Utility Buttons */}
      <Footer />
      <BackToTop />
    </div>
  );
};

export default App;