import React, { useState, useEffect, useRef } from 'react';
import { homeLabels } from '../translations/navbar-languages.js';
import * as styles from './Credit-styles.js';

function Credit({ lang }) {
  const t = homeLabels[lang]?.creditPage || homeLabels.en.creditPage;

  const cardRef = useRef(null);
  const [showCard, setShowCard] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowCard(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const cardStyle = {
    opacity: showCard ? 1 : 0,
    transform: showCard ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.6s ease, transform 0.6s ease',
  };

  return (
    <div style={styles.creditPageWrapper}>
      <div 
        ref={cardRef}
        style={{
          ...styles.creditContainer,
          ...cardStyle,
        }}
      >
        <h2 style={styles.creditTitle}>
          {t?.subtitle || 'Credit Information'}
        </h2>
        
        <div style={styles.creditLogoContainer}>
          <img 
            src="/esto-logo.png" 
            alt="ESTO Logo" 
            style={styles.creditLogo}
          />
        </div>
        
        <p style={styles.creditText}>
          {t?.description || 'We offer flexible credit options for our customers to make your purchase more convenient.'}
        </p>
        
        <div style={styles.creditStepsContainer}>
          <img 
            src="/esto-steps.jpg" 
            alt="ESTO Steps" 
            style={styles.creditStepsImage}
          />
        </div>
        
        {t?.process && (
          <p style={styles.creditText}>
            {t.process}
          </p>
        )}
        
        {t?.eligibility && (
          <p style={styles.creditText}>
            {t.eligibility}
          </p>
        )}
        
        {t?.business && (
          <p style={styles.creditText}>
            {t.business}
          </p>
        )}
        
        {t?.provider && (
          <p style={styles.creditText}>
            {t.provider}
          </p>
        )}
        
        {t?.warning && (
          <div style={styles.creditWarningBox}>
            <p style={{
              ...styles.creditText,
              ...styles.creditWarningText
            }}>
              {t.warning}
            </p>
          </div>
        )}
        
        {t?.aboutEsto && (
          <p style={styles.creditText}>
            {t.aboutEsto}
          </p>
        )}
        
        {t?.contact && (
          <p style={styles.creditText}>
            {t.contact.includes('www.esto.eu') ? (
              <>
                {t.contact.split('www.esto.eu')[0]}
                <a 
                  href={`https://${t.contact.split('www.esto.eu')[1] ? `www.esto.eu${t.contact.split('www.esto.eu')[1]}` : 'www.esto.eu/ee'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#e11d48', textDecoration: 'none', fontWeight: 600 }}
                >
                  www.esto.eu{t.contact.split('www.esto.eu')[1] || '/ee'}
                </a>
              </>
            ) : (
              t.contact
            )}
          </p>
        )}
        
        {t?.contactInfo && (
          <p style={styles.creditText}>
            {t.contactInfo.includes('www.esto.eu') ? (
              <>
                {t.contactInfo.split('www.esto.eu')[0]}
                <a 
                  href={`https://${t.contactInfo.split('www.esto.eu')[1] ? `www.esto.eu${t.contactInfo.split('www.esto.eu')[1].split(' ')[0]}` : 'www.esto.eu/ee'}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: '#e11d48', textDecoration: 'none', fontWeight: 600 }}
                >
                  www.esto.eu{t.contactInfo.split('www.esto.eu')[1] ? t.contactInfo.split('www.esto.eu')[1].split(' ')[0] : '/ee'}
                </a>
                {t.contactInfo.split('www.esto.eu')[1] ? 
                  t.contactInfo.split('www.esto.eu')[1].substring(t.contactInfo.split('www.esto.eu')[1].split(' ')[0].length) : 
                  ''
                }
              </>
            ) : (
              t.contactInfo
            )}
          </p>
        )}
      </div>
    </div>
  );
}

export default Credit;
