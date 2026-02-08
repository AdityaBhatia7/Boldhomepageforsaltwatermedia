import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "figma:asset/e4f35cfafabace664742c56dc26a113489c71608.png";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300 ${
        isScrolled ? 'border-border/80 bg-accent/50 backdrop-blur-md' : 'bg-accent border-border/40'
      }`}
    >
      <div className="flex items-center h-20">
        {/* Logo section with blue background */}
        <motion.a
          href="#"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className={`flex items-center gap-4 h-full px-6 hover:opacity-90 transition-all duration-300 ${
            isScrolled ? 'bg-transparent' : 'bg-accent'
          }`}
        >
          <img 
            src={logoImage} 
            alt="Salt Water Media" 
            className="h-16 w-auto"
          />
        </motion.a>

        {/* Company name */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="px-6 flex flex-col leading-tight items-center"
        >
          <span 
            className="text-[20px]"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, letterSpacing: '0.02em', color: '#ffffff' }}
          >
            SALT WATER
          </span>
          <span 
            className="text-[18px]"
            style={{ fontFamily: 'var(--font-accent)', fontWeight: 400, color: '#ffffff' }}
          >
            Media
          </span>
        </motion.div>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Desktop Navigation - Right aligned */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="hidden md:flex items-center gap-10 px-12"
        >
          <a 
            href="#services" 
            className="text-[15px] text-white/90 hover:text-white transition-colors"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
          >
            Services
          </a>
          <a 
            href="#work" 
            className="text-[15px] text-white/90 hover:text-white transition-colors"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
          >
            Work
          </a>
          <a 
            href="#about" 
            className="text-[15px] text-white/90 hover:text-white transition-colors"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
          >
            About
          </a>
          <a 
            href="#contact" 
            className="text-[15px] text-white/90 hover:text-white transition-colors"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
          >
            Contact
          </a>
          
          {/* CTA Button */}
          <Button 
            size="sm"
            className="ml-2 rounded-full px-5 py-2 text-[14px] bg-white text-accent hover:bg-white/90 transition-colors shadow-none"
            style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
          >
            Let's Chat
          </Button>
        </motion.div>

        {/* Mobile Menu Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 hover:bg-white/10 rounded-md transition-colors mr-6"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="size-5 text-white" /> : <Menu className="size-5 text-white" />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden pb-6 pt-2 px-6"
        >
          <div className="flex flex-col gap-5">
            <a 
              href="#services" 
              className="text-[15px] text-white/90 hover:text-white transition-colors py-2"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Services
            </a>
            <a 
              href="#work" 
              className="text-[15px] text-white/90 hover:text-white transition-colors py-2"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Work
            </a>
            <a 
              href="#about" 
              className="text-[15px] text-white/90 hover:text-white transition-colors py-2"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </a>
            <a 
              href="#contact" 
              className="text-[15px] text-white/90 hover:text-white transition-colors py-2"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </a>
            <Button 
              size="sm" 
              className="w-full mt-2 rounded-full bg-white text-accent hover:bg-white/90 shadow-none"
              style={{ fontFamily: 'var(--font-heading)', fontWeight: 600 }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Let's Chat
            </Button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}