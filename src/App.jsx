import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'
import Guarantees from './components/Guarantees/Guarantees.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import React, { useState, useEffect } from 'react'
import Footer from './components/Footer/Footer.jsx'

function App() {
  const [lang, setLang] = useState(() => {
    // Try to get language from localStorage, fallback to 'ee'
    return localStorage.getItem('enaco_lang') || 'ee';
  });

  useEffect(() => {
    localStorage.setItem('enaco_lang', lang);
  }, [lang]);

  return (
    <Router>
      <Navbar lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/meist" element={<About lang={lang} />} />
        <Route path="/teenused" element={<Services lang={lang} />} />
        <Route path="/garantiid" element={<Guarantees lang={lang} />} />
        <Route path="/kontakt" element={<Contacts lang={lang} />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
