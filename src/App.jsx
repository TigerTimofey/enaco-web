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
import { homeLabels } from './components/translations/navbar-languages.js'

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
  if (location.pathname === '/tooted') {
    const params = new URLSearchParams(location.search);
    selectedProductId = params.get('product');
  }
  return (
    <>
      <Navbar lang={lang} setLang={setLang} />
      <Routes>
        <Route path="/" element={<Home lang={lang} />} />
        <Route path="/meist" element={<About lang={lang} />} />
        <Route path="/tooted" element={<Services lang={lang} selectedProductId={selectedProductId} />} />
        <Route path="/garantiid" element={<Guarantees lang={lang} />} />
        <Route path="/kontakt" element={<Contacts lang={lang} />} />
      </Routes>
      <Footer />
    </>
  );
}

function CookieConsent({ lang }) {
  const [visible, setVisible] = useState(() => !localStorage.getItem('enaco_cookie_consent'));
  const labels = homeLabels[lang] || homeLabels.en;

  const cookieTitle = labels.cookieConsentTitle || "We use cookies";
  const cookieText = labels.cookieConsentText || "This website uses cookies to ensure you get the best experience. By continuing to use the site, you agree to our use of cookies.";
  const acceptText = labels.cookieConsentAccept || "Accept";
  const rejectText = labels.cookieConsentReject || "Reject";

  if (!visible) return null;

  function acceptCookies() {
    localStorage.setItem('enaco_cookie_consent', 'true');
    setVisible(false);
  }

  function rejectCookies() {
    localStorage.setItem('enaco_cookie_consent', 'false');
    setVisible(false);
  }

  return (
    <div style={{
      position: 'fixed',
      bottom: 24,
      right: 0,
      zIndex: 9999,
      background: '#fff',
      color: '#222',
      boxShadow: '0 2px 16px 0 rgba(60,60,60,0.18)',
      borderRadius: 12,
      padding: '1.3em 1em 1.3em 1em',
      maxWidth: 420,
      minWidth: 260,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      gap: 18,
      transition: 'transform 0.4s cubic-bezier(.4,0,.2,1)',
      animation: 'slideInRight 0.5s',
    }}>
      <img
        src={'/cookies.png'}
        alt="Cookies"
        style={{
          width: 120,
          height: 120,
          marginRight: 0,
          marginLeft: 0,
          display: 'block',
          flexShrink: 0,
        }}
      />
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        width: '100%',
      }}>
        <div style={{
          fontWeight: 600,
          marginBottom: 4,
          textAlign: 'center',
          fontSize: '1.2rem'
        }}>
          {cookieTitle}
        </div>
        <div style={{
          fontSize: '0.98em',
          color: '#444',
          textAlign: 'center',
          marginBottom: 12,
          maxWidth: 440,
        }}>
          {cookieText}
        </div>
        <div style={{
          display: 'flex',
          gap: 10,
          justifyContent: 'center',
          width: '100%',
        }}>
          <button
            onClick={rejectCookies}
            style={{
              background: '#eee',
              color: '#222',
              border: 'none',
              borderRadius: 6,
              padding: '0.5em 1.2em',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '1em',
              boxShadow: '0 1px 4px 0 rgba(60,60,60,0.04)',
            }}
          >
            {rejectText}
          </button>
          <button
            onClick={acceptCookies}
            style={{
              background: '#e11d48',
              color: '#fff',
              border: 'none',
              borderRadius: 6,
              padding: '0.5em 1.4em',
              fontWeight: 600,
              cursor: 'pointer',
              fontSize: '1em',
              boxShadow: '0 1px 4px 0 rgba(60,60,60,0.09)',
            }}
          >
            {acceptText}
          </button>
        </div>
      </div>
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(400px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
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
      <CookieConsent lang={lang} />
    </Router>
  )
}

export default App
