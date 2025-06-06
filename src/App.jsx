import './App.css'
import Navbar from './components/navbar/Navbar.jsx'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Services from './components/Services/Services.jsx'
import Guarantees from './components/Guarantees/Guarantees.jsx'
import Contacts from './components/Contacts/Contacts.jsx'
import React, { useState, useEffect } from 'react'
import Footer from './components/Footer/Footer.jsx'

function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);
  return null;
}

function AppContent({ lang, setLang }) {
  const location = useLocation();
  let selectedProductId = null;
  if (location.pathname === '/teenused') {
    const params = new URLSearchParams(location.search);
    selectedProductId = params.get('product');
  }
  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/meist" element={<About lang={lang} />} />
        <Route path="/teenused" element={<Services lang={lang} selectedProductId={selectedProductId} />} />
        <Route path="/garantiid" element={<Guarantees lang={lang} />} />
        <Route path="/kontakt" element={<Contacts lang={lang} />} />
      </Routes>
      <Footer />
    </>
  );
}

function App() {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('enaco_lang') || 'ee';
  });

  useEffect(() => {
    localStorage.setItem('enaco_lang', lang);
  }, [lang]);

  return (
    <Router>
      <ScrollToTop />
      <AppContent lang={lang} setLang={setLang} />
    </Router>
  )
}

export default App
