import React, { useRef, useEffect, useState } from 'react';
import { guaranteesContent, guaranteesBoldPhrases } from '../translations/navbar-languages.js';
import * as guaranteeStyles from './Guarantees-styles.js';
import * as estoStyles from './guarantees-esto-styles.js';
import { useNavigate, useLocation } from 'react-router-dom';

// Icon render helper
function GuaranteeIcon({ type }) {
  if (type === "green-check") {
    return (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="19" fill="#22c55e"/>
        <path d="M12 20.5L18 26.5L28 14.5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  if (type === "red-cross") {
    return (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="19" fill="#e11d48"/>
        <path d="M13 13L25 25M25 13L13 25" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
      </svg>
    );
  }
  if (type === "yellow-box") {
    return (
      <svg width="38" height="38" viewBox="0 0 38 38" fill="none">
        <circle cx="19" cy="19" r="19" fill="#fbbf24"/>
        <path d="M10 24V16C10 14.8954 10.8954 14 12 14H26C27.1046 14 28 14.8954 28 16V24M10 24H28M10 24V26C10 27.1046 10.8954 28 12 28H26C27.1046 28 28 27.1046 28 26V24" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }
  return null;
}

const boldify = (text, phrases) => {
  let result = [text];
  phrases.forEach(phrase => {
    result = result.flatMap(part =>
      typeof part === 'string'
        ? part.split(phrase).flatMap((seg, i, arr) =>
            i < arr.length - 1
              ? [seg, <b key={phrase + i} style={{ fontWeight: 700 }}>{phrase}</b>]
              : seg
          )
        : part
    );
  });
  return result;
};



function Guarantees({ lang }) {
  const t = guaranteesContent[lang] || guaranteesContent.ee;
  const boldPhrases = guaranteesBoldPhrases[lang];

  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([false, false, false]);
  const [scrollDir, setScrollDir] = useState('down');
  const lastScrollY = useRef(window.scrollY);
  const navigate = useNavigate();
  const location = useLocation();
  const [selected, setSelected] = useState('warranty');

  // Read warranty param from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const warrantyParam = params.get('warranty');
    if (warrantyParam === 'esto') setSelected('esto');
    else setSelected('warranty');
  }, [location.search]);

  useEffect(() => {
    function onScroll() {
      const currY = window.scrollY;
      setScrollDir(currY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currY;

      setVisibleCards([0, 1, 2].map(idx => {
        const el = cardRefs.current[idx];
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.bottom > 40 && rect.top < window.innerHeight - 40;
      }));
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const getCardAnimStyle = (idx) => {
    const translateY = visibleCards[idx]
      ? '0'
      : scrollDir === 'down'
        ? '60px'
        : '-60px';
    return {
      opacity: visibleCards[idx] ? 1 : 0,
      transform: `translateY(${translateY})`,
      pointerEvents: visibleCards[idx] ? 'auto' : 'none',
      transition: 'opacity 0.5s cubic-bezier(.4,0,.2,1), transform 0.5s cubic-bezier(.4,0,.2,1)',
    };
  };

  // When dropdown changes, update URL
  const handleDropdownChange = (e) => {
    const val = e.target.value;
    setSelected(val);
    const params = new URLSearchParams(location.search);
    if (val === 'esto') {
      params.set('warranty', 'esto');
    } else {
      params.set('warranty', '1');
    }
    navigate(`${location.pathname}?${params.toString()}`, { replace: true });
  };

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: 40 }}>
        <select
          value={selected}
          onChange={handleDropdownChange}
          style={{
            ...guaranteeStyles.selectStyle,
            fontWeight: 700,
            fontSize: 18,
            minWidth: 180,
            marginBottom: 24,
          }}
        >
          <option value="warranty">Warranty</option>
          <option value="esto">Esto</option>
        </select>
      </div>
      {selected === 'warranty' && (
        <div>
          <div
            className="guarantees-grid"
            style={guaranteeStyles.gridStyle}
          >
            <div
              ref={el => (cardRefs.current[0] = el)}
              style={{
                ...guaranteeStyles.cardStyle,
                ...getCardAnimStyle(0),
              }}
            >
              <div style={guaranteeStyles.cardTitleStyle}>
                <GuaranteeIcon type={t.warranty.icon} />
                {t.warranty.title}
              </div>
              <div style={guaranteeStyles.cardTextStyle}>
                {boldify(t.warranty.text, boldPhrases)}
              </div>
            </div>
            <hr className="guarantees-hr-mobile" style={guaranteeStyles.hrMobileStyle} />
            <div
              ref={el => (cardRefs.current[1] = el)}
              style={{
                ...guaranteeStyles.cardStyle,
                ...getCardAnimStyle(1),
              }}
            >
              <div style={guaranteeStyles.cardTitleStyle}>
                <GuaranteeIcon type={t.notApply.icon} />
                {t.notApply.title}
              </div>
              <div style={guaranteeStyles.cardTextStyle}>
                {boldify(t.notApply.text, boldPhrases)}
              </div>
            </div>
            <div
              ref={el => (cardRefs.current[2] = el)}
              className="guarantees-delivery-card"
              style={{
                ...guaranteeStyles.deliveryCardStyle,
                ...getCardAnimStyle(2),
              }}
            >
              <hr style={guaranteeStyles.hrStyle} />
              <div style={guaranteeStyles.cardTitleStyle}>
                <GuaranteeIcon type={t.delivery.icon} />
                {t.delivery.title}
              </div>
              <div style={{...guaranteeStyles.cardTextStyle, textAlign: 'center'}}>
                {lang === 'en' ? (
                  <>
                    {t.delivery.text}
                    <span
                      style={{ color: '#e11d48', textDecoration: 'underline', fontWeight: 600, cursor: 'pointer' }}
                      onClick={() => navigate('/kontakt')}
                    >
                      {t.delivery.contactLink}
                    </span>
                    {boldify(t.delivery.textAfter, boldPhrases)}
                  </>
                ) : lang === 'ru' ? (
                  <>
                    {t.delivery.text}
                    <span
                      style={{ color: '#e11d48', textDecoration: 'underline', fontWeight: 600, cursor: 'pointer' }}
                      onClick={() => navigate('/kontakt')}
                    >
                      {t.delivery.contactLink}
                    </span>
                    {boldify(t.delivery.textAfter, boldPhrases)}
                  </>
                ) : (
                  <>
                    {t.delivery.text.split('palume eelnevalt meiega ühendust võtta').map((part, idx, arr) =>
                      idx < arr.length - 1 ? (
                        <React.Fragment key={idx}>
                          {part}
                          <span
                            style={{ color: '#e11d48', textDecoration: 'underline', fontWeight: 600, cursor: 'pointer' }}
                            onClick={() => navigate('/kontakt')}
                          >
                            <b style={{ fontWeight: 700 }}>võta meiega ühendust</b>
                          </span>
                        </React.Fragment>
                      ) : boldify(part, boldPhrases)
                    )}
                  </>
                )}
              </div>
            </div>
          </div>
          <style>{guaranteeStyles.responsiveStyle}</style>
        </div>
      )}
      {selected === 'esto' && (
        <div style={estoStyles.estoContainer}>
          <h1 style={estoStyles.estoTitle}>Esto Information</h1>
          <p style={estoStyles.estoText}>
            {/* Placeholder for Esto content. Replace with actual content as needed. */}
            Esto payment and financing information will be shown here.
          </p>
        </div>
      )}
    </div>
  );
}

export default Guarantees;
