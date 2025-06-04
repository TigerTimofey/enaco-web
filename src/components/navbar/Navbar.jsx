import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { getNavbarMenu, navbarLanguages } from '../translations/navbar-languages.js';
import { businessName } from '../utils/bussines-data/bussines-data.js';
import {
  navStyle,
  navInnerStyle,
  logoLinkStyle,
  logoImgStyle,
  ulStyle,
  liStyle,
  linkStyle,
  activeLinkStyle,
  selectStyle,
  separatorStyle,
  burgerStyle,
  burgerBarStyle,
  mobileMenuStyle,
  logoTextStyle,
  mobileSelectWrapperStyle,
  linkStyleSmall,
  linkStyleNormalTransition,
  menuLabelSpanSmall,
  menuLabelSpanNormal,
  navbarSelectMobileStyle,
} from './navbar-styles.js';

function Navbar({ lang, setLang }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFlagOnly, setShowFlagOnly] = useState(false);
  const [smallMenuLabel, setSmallMenuLabel] = useState(false);
  const menu = getNavbarMenu(lang);

  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  // Set activeIdx based on current path
  useEffect(() => {
    const idx = menu.findIndex(item => item.href === location.pathname);
    setActiveIdx(idx === -1 ? 0 : idx);
  }, [location.pathname, menu]);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 780);
      setShowFlagOnly(window.innerWidth <= 1010);
      setSmallMenuLabel(window.innerWidth <= 1010);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <nav style={navStyle}>
      <div style={navInnerStyle}>
        <Link to="/" style={logoLinkStyle} className="navbar-brand-center">
          <img src="/vite.svg" alt="Logo" style={logoImgStyle} />
          <span style={logoTextStyle}>{businessName}</span>
        </Link>

        <ul
          className={`navbar-desktop${isMobile ? ' hide' : ''}`}
          style={ulStyle}
        >
          {menu.map((item, idx) => (
            <React.Fragment key={idx}>
              <li style={liStyle}>
                <Link
                  to={item.href}
                  style={{
                    ...linkStyle,
                    ...(activeIdx === idx ? activeLinkStyle : {}),
                    ...(smallMenuLabel ? linkStyleSmall : linkStyleNormalTransition),
                  }}
                  onClick={() => setActiveIdx(idx)}
                >
                  <span style={smallMenuLabel ? menuLabelSpanSmall : menuLabelSpanNormal}>
                    {item.label}
                  </span>
                </Link>
              </li>
              {idx < menu.length - 1 && (
                <span className="navbar-separator" style={separatorStyle} aria-hidden="true"></span>
              )}
            </React.Fragment>
          ))}
        </ul>

        {!isMobile && (
          <select
            className="navbar-select"
            value={lang}
            onChange={e => setLang(e.target.value)}
            style={selectStyle}
          >
            {navbarLanguages.map(l => (
              <option key={l.code} value={l.code}>
                {showFlagOnly ? l.flag : `${l.flag} ${l.name}`}
              </option>
            ))}
          </select>
        )}

        <button
          className={`navbar-burger${isMobile ? ' show' : ''}`}
          style={burgerStyle}
          onClick={() => setMenuOpen(open => !open)}
          aria-label="Toggle menu"
        >
          <span style={burgerBarStyle}></span>
          <span style={burgerBarStyle}></span>
          <span style={burgerBarStyle}></span>
        </button>

        {menuOpen && isMobile && (
          <ul className="navbar-mobile" style={mobileMenuStyle}>
            {menu.map((item, idx) => (
              <li key={idx} style={liStyle}>
                <Link
                  to={item.href}
                  style={{
                    ...linkStyle,
                    ...(activeIdx === idx ? activeLinkStyle : {}),
                  }}
                  onClick={() => {
                    setActiveIdx(idx);
                    setMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li style={mobileSelectWrapperStyle}>
              <select
                className="navbar-select-mobile"
                value={lang}
                onChange={e => setLang(e.target.value)}
                style={navbarSelectMobileStyle}
              >
                {navbarLanguages.map(l => (
                  <option key={l.code} value={l.code}>
                    {showFlagOnly ? l.flag : `${l.flag} ${l.name}`}
                  </option>
                ))}
              </select>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
