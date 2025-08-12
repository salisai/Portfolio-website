import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutMe from './components/Aboutme'
import Projects from './components/Projects'
import TechStack from './components/TechStack'
import ContactForm from './components/Contact'
import Footer from './components/Footer'
import './index.css';
import ScrollProgress from './components/ScrollProgress'
import Certification from "./components/Certifications"

const App = () => {
  return (
    <>
      <ScrollProgress/>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <TechStack/>
      <Certification/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App