import React from 'react';
import { businessData } from '../utils/bussines-data/bussines-data.js';

function Footer() {
  return (
    <footer
      style={{
        background: '#f8f6f1',
        color: '#222',
        padding: '2rem 0',
        marginTop: 64,
        fontSize: 16,
        textAlign: 'center',
        borderTop: '1px solid #e5e5e5'
      }}
    >
      <div style={{
        maxWidth: 1100,
        margin: '0 auto',
        padding: '0 1rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 24,
        position: 'relative'
      }}>
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          gap: 24,
          flex: 1,
          minWidth: 0
        }}>
          <span style={{ fontWeight: 600 }}>{businessData.contactCompany}</span>
          <span>
            <a href={`tel:${businessData.phone}`} style={{ color: '#e11d48', textDecoration: 'none' }}>
              {businessData.phone}
            </a>
          </span>
          <span>{businessData.address}</span>
        </div>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          position: 'absolute',
          right: 0,
          top: '50%',
          transform: 'translateY(-50%)',
        }}>
          <a
            href="https://www.instagram.com/enaco_group/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{ color: '#e11d48', fontSize: 22, display: 'inline-flex', alignItems: 'center' }}
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <rect width="18" height="18" x="3" y="3" rx="5" stroke="currentColor" strokeWidth="2"/>
              <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/>
              <circle cx="17" cy="7" r="1.2" fill="currentColor"/>
            </svg>
          </a>
          <a
            href="https://www.facebook.com/EnacoGroup/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            style={{ color: '#e11d48', fontSize: 22, display: 'inline-flex', alignItems: 'center' }}
          >
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
              <rect width="22" height="22" fill="none"/>
              <path d="M17 2.5h-2.5A4.5 4.5 0 0 0 10 7v2H7v3h3v7h3v-7h2.5l.5-3H13V7a1.5 1.5 0 0 1 1.5-1.5H17v-3z" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>
      <div style={{ marginTop: 12, color: '#888', fontSize: 14 }}>
        {businessData.contactRegCode} &nbsp;|&nbsp; {businessData.contactVat} &nbsp;|&nbsp;
        <a href={`mailto:${businessData.contactEmail}`} style={{ color: '#e11d48', textDecoration: 'none' }}>
          {businessData.contactEmail}
        </a>
      </div>
    </footer>
  );
}

export default Footer;
