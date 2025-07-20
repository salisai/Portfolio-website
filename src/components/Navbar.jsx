import React, { useEffect, useState } from 'react'
import "../styles/Navbar.css"
import { menu_icon } from '../assets/assets'

const Navbar = () => {

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  useEffect(()=>{
    const handleClickOutside =(event)=>{
      if(event.target.closest('nav') === null){
        setIsMobileMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if(isMobileMenuOpen){
        setIsMobileMenuOpen(false);
      }
    }

    document.addEventListener('click', handleClickOutside);
    window.addEventListener("scroll", handleScroll)

    return()=>{
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll)
    };

  },[isMobileMenuOpen])

  return (
    <nav>
        <div className='navbar-container'>
            <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#blog">blog</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="hamburger" onClick={toggleMobileMenu}>
              <img src={menu_icon} alt="Hamburger Menu" className="hamburger-icon" />
            </div>
        </div>
    </nav>
  )
}

export default Navbar