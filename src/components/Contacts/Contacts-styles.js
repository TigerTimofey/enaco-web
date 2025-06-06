

export const contactHeaderOuter = {
  width: '100%',
  maxWidth: 1200,
  margin: '40px auto 32px auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 84
};

export const contactHeaderTitle = {
  fontSize: 44,
  fontWeight: 800,
  color: '#555555',
  letterSpacing: '0.04em',
  margin: 0,
  textAlign: 'center',
  textTransform: 'uppercase',
  fontFamily: "'Nunito', 'Poppins', 'Inter', system-ui, sans-serif"
};

export const contactsGrid = {
  display: 'grid',
  gridTemplateColumns: '4fr 8fr',
  maxWidth: 1200,
  background: 'transparent',
  gap: 90,
  alignItems: 'stretch',
};

export const contactsInfo = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0 24px',
  minHeight: 420,
  borderRight: '1px solid #e5e7eb',
  height: '100%',
  boxSizing: 'border-box',
  background: 'transparent',
};

export const logoImg = {
  marginTop: 18,
  width: 180,
  height: 80,
  borderRadius: 12,
};

export const hr = {
  border: 'none',
  borderTop: '1px solid #e5e7eb',
  margin: '16px 0'
};

export const infoText = {
  fontSize: 17,
  color: '#888',
  fontWeight: 500,
  lineHeight: 1.7,
  background: 'transparent',
  marginBottom: 24,
  textAlign: 'center',
};

export const infoCompany = {
  fontWeight: 700
};

export const infoLink = {
  color: '#888',
  textDecoration: 'none'
};

export const contactsForm = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0 24px',
  minHeight: 420,
  height: '100%',
  boxSizing: 'border-box',
  background: 'transparent',
};

export const formTitle = {
  marginTop: 34,
  fontSize: 32,
  fontWeight: 700,
  color: '#e11d48',
  textAlign: 'center',
  width: '100%'
};

export const formOuter = {
  width: '100%',
  maxWidth: 650,
  minHeight: 340,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};

export const thankYouBox = {
  color: '#22c55e',
  fontWeight: 700,
  fontSize: 22,
  marginTop: 32,
  textAlign: 'center',
  width: '100%',
  minHeight: 180,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: 'linear-gradient(90deg, #f0fff4 0%, #e0ffe8 100%)',
  borderRadius: 14,
  boxShadow: '0 2px 12px 0 rgba(34,197,94,0.10)',
  border: '1.5px solid #22c55e',
  letterSpacing: '0.01em',
  padding: '32px 18px',
  animation: 'fadeInScale 0.7s cubic-bezier(.4,0,.2,1), pulseSuccess 1.8s 0.2s 1',
  willChange: 'transform, opacity'
};

export const thankYouIcon = {
  marginBottom: 12,
  animation: 'popIn 0.5s cubic-bezier(.4,0,.2,1)'
};

export const thankYouText = {
  animation: 'slideUpFade 0.7s 0.2s both'
};

export const form = {
  display: 'flex',
  flexDirection: 'column',
  gap: 14,
  transition: 'opacity 0.5s cubic-bezier(.4,0,.2,1), transform 0.5s cubic-bezier(.4,0,.2,1)'
};

export const input = {

  padding: '1em 1.2em',
  borderRadius: 10,
  border: '1.5px solid #e5e7eb',
  fontSize: 17,
  background: '#fff',
  color: '#555555',
  marginBottom: 2,
  boxShadow: '0 1px 4px 0 rgba(60,60,60,0.04)',
  outline: 'none',
  transition: 'border 0.18s',
  fontFamily: "'Nunito', 'Poppins', 'Inter', system-ui, sans-serif",
  borderColor: '#e5e7eb'
};

export const textarea = {
  padding: '1em 1.2em',
  borderRadius: 10,
  border: '1.5px solid #e5e7eb',
  fontSize: 17,
  background: '#fff',
  color: '#555555',
  resize: 'vertical',
  marginBottom: 2,
  boxShadow: '0 1px 4px 0 rgba(60,60,60,0.04)',
  outline: 'none',
  transition: 'border 0.18s',
  fontFamily: "'Nunito', 'Poppins', 'Inter', system-ui, sans-serif",
  borderColor: '#e5e7eb'
};

export const errorText = {
  color: '#e11d48',
  fontSize: 14,
  marginBottom: -8
};

export const submitBtn = {
  background: '#e11d48',
  color: '#fff',
  fontWeight: 600,
  fontSize: 17,
  border: 'none',
  borderRadius: 8,
  padding: '0.7em 2em',
  cursor: 'pointer',
  marginTop: 8
};

export const mapOuter = {
  width: '100%',
  marginTop: 48,
  marginBottom: 0,
  background: '#fff',
  boxShadow: '0 2px 12px 0 rgba(60,60,60,0.07)'
};

export const mapInner = {
  width: '100%',
  height: 320
};

export const mapIframe = {
  border: 0,
  borderRadius: 0,
  minHeight: 220,
  display: 'block'
};

export const responsiveAndKeyframes = `
  @keyframes fadeInScale {
    0% { opacity: 0; transform: scale(0.92);}
    100% { opacity: 1; transform: scale(1);}
  }
  @keyframes popIn {
    0% { opacity: 0; transform: scale(0.5);}
    80% { opacity: 1; transform: scale(1.15);}
    100% { opacity: 1; transform: scale(1);}
  }
  @keyframes slideUpFade {
    0% { opacity: 0; transform: translateY(30px);}
    100% { opacity: 1; transform: translateY(0);}
  }
  @keyframes pulseSuccess {
    0% { box-shadow: 0 0 0 0 rgba(34,197,94,0.18);}
    70% { box-shadow: 0 0 0 12px rgba(34,197,94,0);}
    100% { box-shadow: 0 2px 12px 0 rgba(34,197,94,0.10);}
  }
  @media (max-width: 1052px) {
    .contacts-grid {
      display: flex !important;
      flex-direction: column !important;
      max-width: 100vw !important;
      padding: 0 !important;
      gap: 0 !important;
    }
    .contacts-info, .contacts-form {
      max-width: 100vw !important;
      margin: 0 !important;
      padding: 24px 4vw 0 4vw !important;
      min-height: unset !important;
      font-size: 16px !important;
      height: auto !important;
    }
    .contacts-info {
      margin-bottom: 0px !important;
      border-bottom: 1px solid #e5e7eb !important;
      padding-bottom: 24px !important;
      border-right: none !important;
    }
    .contacts-form {
      margin-bottom: 0 !important;
      padding-top: 0 !important;
    }
    h2, .contacts-info > div:first-child {
      font-size: 1.5rem !important;
    }
    p, input, textarea, button {
      font-size: 1rem !important;
    }
    iframe {
      min-height: 180px !important;
    }
  }
  .contacts-grid {
    align-items: stretch;
  }
  .contacts-info, .contacts-form {
    height: 100%;
  }
`;
