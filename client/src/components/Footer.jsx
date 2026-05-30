import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail, FiDownload, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-darkBg border-t border-white/5 overflow-hidden">
      {/* Subtle Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      
      {/* Top Gradient Border Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accentPurple/20 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 relative z-10 flex flex-col items-center gap-8">
        
        {/* Brand Name & Tagline */}
        <div className="text-center">
          <h3 
            onClick={scrollToTop}
            className="text-2xl font-bold cursor-pointer text-transparent bg-clip-text bg-gradient-to-r from-accentPurple to-accentTeal tracking-tight inline-block"
          >
            Vivek Preetham
          </h3>
          <p className="text-gray-500 text-sm mt-2 max-w-sm">
            Designing and engineering clean, optimized full-stack architectures.
          </p>
        </div>

        {/* Action Callouts (Resume & Socials) */}
        <div className="flex flex-col sm:flex-row items-center gap-6 w-full justify-center border-b border-white/5 pb-8">
          {/* Social Row */}
          <div className="flex items-center gap-4">
            {[
              { icon: FiGithub, href: "https://github.com/VivekPreetham" },
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/vivek-preetham-714a632a6/" },
              { icon: FiTwitter, href: "https://twitter.com/yourusername" },
              { icon: FiMail, href: "mailto:vivekpreetham12@gmail.com" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:border-accentTeal transition-all duration-300"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>

          {/* Divider line for desktop */}
          <div className="hidden sm:block h-6 w-px bg-white/10" />

          {/* Resume Download Pill */}
          <a 
            href="/resume.pdf" 
            download="Vivek_Preetham_Resume.pdf"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full border border-accentPurple text-accentPurple hover:bg-accentPurple hover:text-white font-medium text-sm transition-all duration-300 group shadow-[0_0_15px_rgba(127,119,221,0.1)] hover:shadow-[0_0_20px_rgba(127,119,221,0.3)]"
          >
            <span>Download Resume</span>
            <FiDownload className="group-hover:animate-bounce" />
          </a>
        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between w-full text-xs text-gray-500 gap-4">
          <p>© {currentYear} Vivek Preetham. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Built using the MERN Stack
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;