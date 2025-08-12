import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { menu_icon } from '../assets/assets';
import ScrollProgress from './ScrollProgress';
import "../styles/Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  // Check for mobile view
  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    checkMobileView();
    window.addEventListener('resize', checkMobileView);
    return () => window.removeEventListener('resize', checkMobileView);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.closest('nav') === null) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMobileMenuOpen]);

  // Animation variants
  const mobileMenuVariants = {
    hidden: { 
      opacity: 0,
      y: -20,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const navItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15
      }
    }
  };

  return (
    <>
      <ScrollProgress />
      <nav>
        <div className='navbar-container'>
          {/* Desktop Menu (static) */}
          <ul className="nav-links desktop-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          {/* Mobile Menu with Animation */}
          {isMobileView && (
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.ul
                  className="nav-links mobile-menu"
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  variants={mobileMenuVariants}
                >
                  <motion.li variants={navItemVariants}><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></motion.li>
                  <motion.li variants={navItemVariants}><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</a></motion.li>
                  <motion.li variants={navItemVariants}><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></motion.li>
                  <motion.li variants={navItemVariants}><a href="#blog" onClick={() => setIsMobileMenuOpen(false)}>Blog</a></motion.li>
                  <motion.li variants={navItemVariants}><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></motion.li>
                </motion.ul>
              )}
            </AnimatePresence>
          )}

          <div className="hamburger" onClick={toggleMobileMenu}>
            <motion.img 
              src={menu_icon} 
              alt="Hamburger Menu" 
              className="hamburger-icon"
              animate={{
                rotate: isMobileMenuOpen ? 90 : 0,
                opacity: isMobileMenuOpen ? 0.8 : 1
              }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;