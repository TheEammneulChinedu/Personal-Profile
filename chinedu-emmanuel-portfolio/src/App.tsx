import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowRight, Linkedin, Instagram, Mail, Globe, Award, Briefcase, Zap, GraduationCap, Users } from 'lucide-react';

// Sections
import Hero from './components/Hero';
import About from './components/About';
import Work from './components/Work';
import Experience from './components/Experience';
import Expertise from './components/Expertise';
import Awards from './components/Awards';
import Collaborate from './components/Collaborate';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-web3-dark selection:bg-web3-accent selection:text-black scroll-smooth">
      <div className="fixed inset-0 bg-mesh pointer-events-none z-0" />
      
      {/* Navigation */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-web3-dark/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-web3-accent rounded-sm flex items-center justify-center">
              <span className="text-black font-bold text-lg font-display">C</span>
            </div>
            <span className="text-white font-display font-semibold tracking-tight text-xl">Emmanuel</span>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.a
                key={link.name}
                href={link.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="text-gray-400 hover:text-web3-accent text-sm font-medium transition-colors"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#collaborate"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white text-black px-5 py-2 rounded-full text-sm font-semibold hover:bg-web3-accent transition-all duration-300 transform hover:scale-105"
            >
              Work With Me
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-full left-0 w-full bg-web3-dark border-b border-white/10 p-6 flex flex-col gap-6 md:hidden z-50 backdrop-blur-xl"
            >
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-display text-white hover:text-web3-accent transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#collaborate"
                onClick={() => setIsMenuOpen(false)}
                className="bg-web3-accent text-black px-6 py-4 rounded-xl text-center font-bold text-lg"
              >
                Work With Me
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="relative z-10">
        <Hero id="hero" />
        <About id="about" />
        <Work id="projects" />
        <Experience id="experience" />
        <Expertise id="expertise" />
        <Awards id="awards" />
        <Collaborate id="collaborate" />
        <Contact id="contact" />
      </main>

      <Footer />
    </div>
  );
}
