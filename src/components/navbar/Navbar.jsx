import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { getNavbarMenu, navbarLanguages, homeLabels } from '../translations/navbar-languages.js';
import { businessProducts } from '../utils/bussines-services/bussines-services.js';
import * as navbarStyles from './navbar-styles.js';

function Navbar({ lang, setLang }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showFlagOnly, setShowFlagOnly] = useState(false);
  const [smallMenuLabel, setSmallMenuLabel] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [openDropdownIdx, setOpenDropdownIdx] = useState(null); 
  const menu = getNavbarMenu(lang);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const idx = menu.findIndex(item => item.href === location.pathname);
    setActiveIdx(idx === -1 ? 0 : idx);
  }, [location.pathname, menu]);

  useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth <= 780);
      setShowFlagOnly(window.innerWidth <= 1040);
      setSmallMenuLabel(window.innerWidth <= 1040);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const productDropdown = businessProducts.map((prod, idx) => {
    const labels = homeLabels[lang] || {};
    let name = '';

    if (lang === 'ru') {
      name = labels[prod.fallbackNameKey] || '';
    } else if (idx === 0) {
      name = labels['PROD_ONE'] || '';
    } else {
      name = labels[prod.fallbackNameKey] ||  '';
    }

    const id = prod.idKey ? (labels[prod.idKey] || prod.idKey) : '';

    return { id, name };
  });

  return (

    
    <nav style={navbarStyles.navStyle}>
      <div style={navbarStyles.navInnerStyle}>
        <Link to="/" style={navbarStyles.logoLinkStyle} className="navbar-brand-center">
          <img src="/logoNav.svg" alt="Logo" style={navbarStyles.logoImgStyle} />

        </Link>

        <ul
          className={`navbar-desktop${isMobile ? ' hide' : ''}`}
          style={navbarStyles.ulStyle}
        >
          {menu.map((item, idx) => (
            <React.Fragment key={idx}>
              <li
                style={navbarStyles.liStyle}
                onMouseEnter={item.href === '/teenused' ? () => setOpenDropdownIdx(idx) : undefined}
                onMouseLeave={item.href === '/teenused' ? () => setOpenDropdownIdx(null) : undefined}
              >
                {item.href === '/teenused' ? (
                  <div style={navbarStyles.servicesDropdownWrapperStyle}>
                    <span
                      style={{
                        ...navbarStyles.linkStyle,
                        ...(activeIdx === idx ? navbarStyles.activeLinkStyle : {}),
                        ...(smallMenuLabel ? navbarStyles.linkStyleSmall : navbarStyles.linkStyleNormalTransition),
                        ...navbarStyles.servicesDropdownTriggerStyle,
                      }}
                      tabIndex={-1}
                      className={`navbar-services-trigger${activeIdx === idx ? ' active' : ''}`}
                    >
                      <span style={smallMenuLabel ? navbarStyles.menuLabelSpanSmall : navbarStyles.menuLabelSpanNormal}>
                        {item.label}
                      </span>
                    </span>
                    <div
                      style={{
                        ...navbarStyles.dropdownMenuStyle,
                        ...navbarStyles.servicesDropdownMenuStyle,
                        display: openDropdownIdx === idx ? 'block' : 'none',
                      }}
                      className="services-dropdown"
                    >
                      {productDropdown.map(prod => (
                        <div
                          key={prod.id}
                          className="services-dropdown-item"
                          style={navbarStyles.dropdownItemStyle}
                          onClick={() => {
                            setActiveIdx(idx);
                            navigate(`/teenused?product=${prod.id}`);
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setOpenDropdownIdx(null);
                          }}
                        >
                          {prod.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.href}
                    style={{
                      ...navbarStyles.linkStyle,
                      ...(activeIdx === idx ? navbarStyles.activeLinkStyle : {}),
                      ...(smallMenuLabel ? navbarStyles.linkStyleSmall : navbarStyles.linkStyleNormalTransition),
                    }}
                    onClick={() => setActiveIdx(idx)}
                    className={activeIdx === idx ? 'active' : ''}
                  >
                    <span style={smallMenuLabel ? navbarStyles.menuLabelSpanSmall : navbarStyles.menuLabelSpanNormal}>
                      {item.label}
                    </span>
                  </Link>
                )}
              </li>
              {idx < menu.length - 1 && (
                <span className="navbar-separator" style={navbarStyles.separatorStyle} aria-hidden="true"></span>
              )}
            </React.Fragment>
          ))}
        </ul>

        {!isMobile && (
          <select
            className="navbar-select"
            value={lang}
            onChange={e => setLang(e.target.value)}
            style={navbarStyles.selectStyle}
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
          style={navbarStyles.burgerStyle}
          onClick={() => setMenuOpen(open => !open)}
          aria-label="Toggle menu"
        >
          <span style={navbarStyles.burgerBarStyle}></span>
          <span style={navbarStyles.burgerBarStyle}></span>
          <span style={navbarStyles.burgerBarStyle}></span>
        </button>

        {menuOpen && isMobile && (
          <ul className="navbar-mobile" style={{...navbarStyles.mobileMenuStyle,listStyleType: 'none'}}>
            {menu.map((item, idx) => (
              <React.Fragment key={idx}>
                <li style={navbarStyles.liStyle}>
                  {item.href === '/teenused' ? (
                    <>
                      <button
                        type="button"
                        style={{
                          ...navbarStyles.linkStyle,
                          ...navbarStyles.mobileDropdownButtonStyle,
                        }}
                        onClick={() =>
                          setOpenDropdownIdx(openDropdownIdx === idx ? null : idx)
                        }
                      >
                        {item.label}
                        <span style={navbarStyles.mobileDropdownArrowStyle}>
                          {openDropdownIdx === idx ? '↑' : '↓'}
                        </span>
                      </button>
                      {openDropdownIdx === idx && (
                        <ul style={navbarStyles.mobileDropdownMenuStyle}>
                          {productDropdown.map(prod => (
                            <li key={prod.id}>
                              <button
                                type="button"
                                style={{
                                  ...navbarStyles.dropdownItemStyle,
                                  ...navbarStyles.mobileDropdownItemStyle,
                                }}
                                onClick={() => {
                                  setActiveIdx(idx);
                                  setMenuOpen(false);
                                  setOpenDropdownIdx(null);
                                  navigate(`/teenused?product=${prod.id}`);
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                              >
                                {prod.name}
                              </button>
                            </li>
                          ))}
                        </ul>
                      )}
                    </>
                  ) : (
                    <Link
                      to={item.href}
                      style={{
                        ...navbarStyles.linkStyle,
                        ...(activeIdx === idx ? navbarStyles.activeLinkStyle : {}),
                      }}
                      onClick={() => {
                        setActiveIdx(idx);
                        setMenuOpen(false);
                        setOpenDropdownIdx(null);
                      }}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              </React.Fragment>
            ))}

            <li style={{...navbarStyles.mobileSelectWrapperStyle, listStyleType: 'none'}}>
              <select
                className="navbar-select-mobile"
                value={lang}
                onChange={e => setLang(e.target.value)}
                style={navbarStyles.navbarSelectMobileStyle}
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
        <style>
          {navbarStyles.navbarDropdownCss}
        </style>
      </div>
    </nav>
  );
}

export default Navbar;
