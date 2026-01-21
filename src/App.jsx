import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './pages/Contact/Contact'
import Current from './pages/Projects/Current/Current'
import Past from './pages/Projects/Past/Past'
import WhatWeDo from './pages/WhatWeDo/WhatWeDo'
import ProjectDetails from './pages/Projects/ProjectDetails'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/projects' element={<Current />}/>
        <Route path='/developments' element={<Past />}/>
        <Route path='/developments/:id' element={<ProjectDetails />}/> 
        <Route path='/home' element={<WhatWeDo />}/>
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App