export const headerOuter = {
  width: '100%',
  maxWidth: 1200,
  margin: '40px auto 32px auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 84,

};

export const headerTitle = {
  fontSize: 44,
  fontWeight: 800,
  color: '#555555',
  letterSpacing: '0.04em',
  textAlign: 'center',
  textTransform: 'uppercase',
  fontFamily: "'Nunito', 'Poppins', 'Inter', system-ui, sans-serif",

  
};

export const aboutContainer = {
  maxWidth: 900,
  margin: '94px auto 64px auto',
  background: '#fff',
  borderRadius: 18,
  boxShadow: '0 2px 12px 0 rgba(60,60,60,0.09)',
  padding: '2rem 1rem',
  fontFamily: "'Nunito', 'Poppins', 'Inter', system-ui, sans-serif",
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const logoTitleRow = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  gap: 32,
};

export const aboutLogo = {
  width: 290,
  height: 290,
  marginBottom: 18,
  marginTop: -18,
};

export const aboutTitle = {
  fontSize: '2.3rem',
  fontWeight: 900,
  color: '#e11d48',
  marginBottom: 18,
  textAlign: 'center',
  letterSpacing: '0.01em',
  lineHeight: 1.15,
};

export const aboutSubtitle = {
  fontWeight: 500,
  fontSize: '1.13rem',
  color: '#555',
  lineHeight: 1.6,
  textAlign: 'center',
  marginBottom: 18,
  fontFamily: "'Nunito', 'Poppins', 'Inter', system-ui, sans-serif"
};

export const aboutIntro = {
  fontSize: '1.18rem',
  color: '#23272f',
  fontWeight: 600,
  marginBottom: 18,
  textAlign: 'center',
  lineHeight: 1.5,
};

export const aboutSpecialization = {
  fontSize: '1.08rem',
  color: '#555',
  fontWeight: 500,
  marginBottom: 24,
  textAlign: 'center',
  lineHeight: 1.5,
};

export const columnsRow = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'flex-start',
  gap: 8,
  width: '100%',
  margin: '32px 0 18px 0',
  flexWrap: 'nowrap',
};

export const leftColumn = {
  flex: 1,
  minWidth: 220,
  maxWidth: 400,
};

export const rightColumn = {
  flex: 1,
  minWidth: 220,
  maxWidth: 400,
};

export const divider = {
  width: 2,
  minHeight: 120,
  background: '#e5e7eb',
  borderRadius: 2,
  alignSelf: 'stretch',
  margin: '0 12px',
  display: 'block',
  listStyle: 'none',
  
};

export const aboutSectionTitle = {
  fontSize: '1.18rem',
  fontWeight: 800,
  color: '#e11d48',
  marginTop: 18,
  marginBottom: 10,
  textAlign: 'center',
  letterSpacing: '0.01em',
};

export const aboutList = {
  fontSize: '1.08rem',
  color: '#23272f',
  fontWeight: 500,
  marginBottom: 18,
  paddingLeft: 24,
  textAlign: 'center',
  
  listStyle: 'none',
  listStylePosition: 'inside',
  lineHeight: 1.6,
  fontFamily: "'Nunito', 'Poppins', 'Inter', system-ui, sans-serif",
  marginTop: 0,
  marginLeft: 0,
  paddingRight: 24,
  paddingTop: 0,
  paddingBottom: 0,
  display: 'flex',
  flexDirection: 'column',
};

export const aboutListItem = {
  marginBottom: 6,
  fontWeight: 600,
};


export const hr = {
  border: 'none',
  borderTop: '1px solid #e5e7eb',
  margin: '12px 0',
  width: '100%',
  background: '#e5e7eb',
  display: 'block'
};

export const aboutCta = {
  fontSize: '1.13rem',
  fontWeight: 700,
  color: '#23272f',
  marginTop: 24,
  marginBottom: 6,
  textAlign: 'center',
};

export const aboutCtaLink = {
  color: '#e11d48',
  fontWeight: 700,
  cursor: 'pointer',
  textDecoration: 'underline',
  marginLeft: 8,
};

export const aboutCta2 = {
  fontSize: '1.13rem',
  fontWeight: 700,
  color: '#e11d48',
  marginBottom: 0,
  textAlign: 'center',
};

export const responsiveStyle = `
  @media (max-width: 900px) {
    .about-container {
      margin-left: 1rem !important;
      margin-right: 1rem !important;

    }

    .about-divider {
      display: block !important;
      width: 80% !important;
      height: 2px !important;
      min-height: 0 !important;
      margin: 24px auto !important;
      background: #e5e7eb !important;
      border-radius: 2px !important;
      align-self: center !important;
    }

    .about-columns {
      flex-direction: column !important;
      gap: 0 !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .about-logo-title-row {
      flex-direction: column !important;
      gap: 12px !important;
      align-items: center !important;
    }

    .about-logo {
      width: 160px !important;
      height: 160px !important;
      margin-bottom: 8px !important;
      margin-top: 0 !important;
    }

    .about-title {
      text-align: center !important;
    }

    .about-columns > div {
      align-items: center !important;
      justify-content: center !important;
      text-align: center !important;
      display: flex !important;
      flex-direction: column !important;
    }

    .about-section-title,
    .about-list {
      text-align: center !important;
      align-items: center !important;
    }

    .about-list {
      list-style: none !important;
      padding-left: 0 !important;
    }
  }
`;
