import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Projects from './pages/Projects/Projects'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Contact from './pages/Contact/Contact'

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/contact' element={<Contact />}/>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App