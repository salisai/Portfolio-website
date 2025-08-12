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

const App = () => {
  return (
    <>
      <ScrollProgress/>
      <Navbar/>
      <Hero/>
      <AboutMe/>
      <Projects/>
      <TechStack/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App