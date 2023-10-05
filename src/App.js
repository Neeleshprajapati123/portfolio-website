import React from 'react'

import Nav from './components/navbar/Nav'
import Int from  './components/intro/Int'
import Skills from './components/skills/Skills'
import Works from './components/works/Works'
import Contact from "./components/contact/Contact"
import Footer from './components/footer/Footer'




function App() {
  return (
    <div>
      <Nav/>
      <Int/>
      <Skills/>
      <Works/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
