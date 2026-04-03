import React from 'react'
import Hero from '../Sections/Hero'
import About from '../Sections/About'
import Education from '../Sections/Education'
import Skills from '../Sections/Skills'
import Services from '../Sections/Services'
import Projects from '../Sections/Projects'
import Certificates from '../Sections/Certificates'
import Contact from '../Sections/Contact'

function Container() {
  return (
    <div>
      <Hero />
      <About />
      <Education />
      <Skills />
      <Services />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  )
}

export default Container
