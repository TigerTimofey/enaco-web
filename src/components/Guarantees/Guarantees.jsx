import React from 'react';
import { guaranteesContent, guaranteesBoldPhrases } from '../translations/navbar-languages.js';
import * as guaranteeStyles from './Guarantees-styles.js';

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

  return (
    <div>

      <div className="guarantees-grid" style={guaranteeStyles.gridStyle}>
        <div style={guaranteeStyles.cardStyle}>
          <div style={guaranteeStyles.cardTitleStyle}>
            <GuaranteeIcon type={t.warranty.icon} />
            {t.warranty.title}
          </div>
          
          <div style={guaranteeStyles.cardTextStyle}>
            {boldify(t.warranty.text, boldPhrases)}
          </div>
        </div>
        <hr className="guarantees-hr-mobile" style={guaranteeStyles.hrMobileStyle} />
        <div style={guaranteeStyles.cardStyle}>
          <div style={guaranteeStyles.cardTitleStyle}>
            <GuaranteeIcon type={t.notApply.icon} />
            {t.notApply.title}
          </div>
          <div style={guaranteeStyles.cardTextStyle}>
            {boldify(t.notApply.text, boldPhrases)}
          </div>
        </div>
        <div className="guarantees-delivery-card" style={{
          ...guaranteeStyles.deliveryCardStyle,
        }}>
          <hr style={guaranteeStyles.hrStyle} />
          <div style={guaranteeStyles.cardTitleStyle}>
            <GuaranteeIcon type={t.delivery.icon} />
            {t.delivery.title}
          </div>
          <div style={{...guaranteeStyles.cardTextStyle, textAlign: 'center'}}>
            {/* Delivery text with contact link */}
            {lang === 'en' ? (
              <>
                {t.delivery.text}
                <a href="/kontakt" style={{ color: '#e11d48', textDecoration: 'underline', fontWeight: 600 }}>
                  {t.delivery.contactLink}
                </a>
                {boldify(t.delivery.textAfter, boldPhrases)}
              </>
            ) : lang === 'ru' ? (
              <>
                {t.delivery.text}
                <a href="/kontakt" style={{ color: '#e11d48', textDecoration: 'underline', fontWeight: 600 }}>
                  {t.delivery.contactLink}
                </a>
                {boldify(t.delivery.textAfter, boldPhrases)}
              </>
            ) : (
              <>
                {t.delivery.text.split('palume eelnevalt meiega ühendust võtta').map((part, idx, arr) =>
                  idx < arr.length - 1 ? (
                    <React.Fragment key={idx}>
                      {part}
                      <a href="/kontakt" style={{ color: '#e11d48', textDecoration: 'underline', fontWeight: 600 }}>
                        <b style={{ fontWeight: 700 }}>võta meiega ühendust</b>
                      </a>
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
  );
}

export default Guarantees;
