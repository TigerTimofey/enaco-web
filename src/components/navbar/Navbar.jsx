import React, { useState } from 'react';
import { getNavbarMenu, navbarLanguages } from '../../languages/navbar-languages.js';
import {
  navStyle,
  navInnerStyle,
  logoLinkStyle,
  logoImgStyle,
  ulStyle,
  liStyle,
  linkStyle,
  linkHoverStyle,
  activeLinkStyle,
  selectStyle,
  separatorStyle,
} from './navbar-styles.js';

function Navbar() {
  const [lang, setLang] = useState('ee');
  const [activeIdx, setActiveIdx] = useState(0);
  const menu = getNavbarMenu(lang);

  return (
    <nav style={navStyle}>
      <div style={navInnerStyle}>
        <a href="#" style={logoLinkStyle}>
          <img src="/vite.svg" alt="Logo" style={logoImgStyle} />
        </a>
        <ul style={ulStyle}>
          {menu.map((item, idx) => (
            <React.Fragment key={idx}>
              <li style={liStyle}>
                <a
                  href={item.href}
                  style={{
                    ...linkStyle,
                    ...(activeIdx === idx ? activeLinkStyle : {}),
                  }}
                  onClick={e => {
                    e.preventDefault();
                    setActiveIdx(idx);
                  }}
                  onMouseOver={e => {
                    if (activeIdx !== idx) {
                      Object.assign(e.target.style, linkHoverStyle);
                    }
                  }}
                  onMouseOut={e => {
                    if (activeIdx !== idx) {

                      Object.assign(e.target.style, linkStyle);
                    }
                  }}
                >
                  {item.label}
                </a>
              </li>
              {idx < menu.length - 1 && (
                <span style={separatorStyle} aria-hidden="true"></span>
              )}
            </React.Fragment>
          ))}
        </ul>
        <select
          value={lang}
          onChange={e => setLang(e.target.value)}
          style={selectStyle}
        >
          {navbarLanguages.map(l => (
            <option key={l.code} value={l.code}>

              {l.flag} {l.name}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
}

export default Navbar;
