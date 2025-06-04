export const navStyle = {
  width: 'calc(100% - 48px)',
  margin: '24px auto 0 auto',
  left: 0,
  right: 0,
  padding: '0.8em 0',
  background: 'rgba(255,255,255,0.92)',
  borderBottom: '1px solid #e5e7eb',
  position: 'fixed',
  top: -30,
  zIndex: 100,
  boxShadow: '0 2px 8px 0 rgba(60,60,60,0.07)',
  backdropFilter: 'blur(8px)',
  borderRadius: '18px',
};

export const navInnerStyle = {
  maxWidth: 1200,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 1.5rem',
  minHeight: 56,
};

export const logoLinkStyle = {
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
  textDecoration: 'none',
  height: '100%',
};

export const logoImgStyle = {
  height: 32,
  width: 32,
  borderRadius: 7,
  boxShadow: '0 1px 4px 0 rgba(60,60,60,0.09)',
  marginBottom: 3,
};

export const logoTextStyle = {
  fontWeight: 600,
  fontSize: '1rem',
  marginLeft: 8,
  marginRight: 18,
  marginBottom: 5,
};

export const ulStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '0.9rem',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  fontSize: '1rem',
  fontWeight: 600,
  fontFamily: "'Nunito', 'Poppins', 'Inter', system-ui, sans-serif", 
  letterSpacing: '0.01em',
};

export const liStyle = {
  position: 'relative',
};

export const linkStyle = {
  color: '#30353d',
  textDecoration: 'none',
  padding: '0.36em 0.9em',
  borderRadius: 7,
  transition: 'background 0.16s, color 0.16s, padding 0.18s cubic-bezier(.4,0,.2,1)',
  display: 'inline-block',
  fontWeight: 600,
  letterSpacing: '0.01em',
  fontFamily: "'Nunito', 'Poppins', 'Inter', system-ui, sans-serif", 
  fontSize: '1.08em',
};

export const linkStyleSmall = {
  padding: '0 0 5px',
  transition: 'padding 0.18s cubic-bezier(.4,0,.2,1)',
};

export const linkStyleNormalTransition = {
  transition: 'padding 0.18s cubic-bezier(.4,0,.2,1)',
};

export const menuLabelSpanStyle = {
  transition: 'font-size 0.18s cubic-bezier(.4,0,.2,1)',
};

export const menuLabelSpanSmall = {
  fontSize: '0.93em',
  transition: 'font-size 0.18s cubic-bezier(.4,0,.2,1)',
  fontFamily: "'Nunito', 'Poppins', 'Inter', system-ui, sans-serif",
  fontWeight: 600,
};

export const menuLabelSpanNormal = {
  transition: 'font-size 0.18s cubic-bezier(.4,0,.2,1)',
  fontFamily: "'Nunito', 'Poppins', 'Inter', system-ui, sans-serif",
  fontWeight: 600,
};



export const selectStyle = {
  marginLeft: '1rem',
  padding: '0.35em 0.7em',
  borderRadius: 7,
  border: '1px solid #e5e7eb',
  fontSize: '1em',
  background: '#f9fafb',
  fontWeight: 500,
  cursor: 'pointer',
  boxShadow: '0 1px 4px 0 rgba(60,60,60,0.03)',
  outline: 'none',
  transition: 'border-color 0.16s',
  color: '#23272f',
  fontFamily: "'Nunito', 'Poppins', 'Inter', system-ui, sans-serif",
};

export const activeLinkStyle = {
  borderBottom: '3px solid #e11d48', 
  color: '#e11d48',
  background: 'transparent',
  boxShadow: 'none',
};

export const separatorStyle = {
  display: 'inline-block',
  width: '2px',
  height: '22px',
  background: '#e5e7eb',
  borderRadius: '1px',
  margin: '0 0.5rem',
  alignSelf: 'center',
};

export const burgerStyle = {
  display: 'none',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  width: 36,
  height: 36,
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  marginRight: '1rem',
  zIndex: 102,
};

export const burgerBarStyle = {
  width: 24,
  height: 3,
  background: '#23272f',
  borderRadius: 2,
  margin: '3px 0',
  transition: 'all 0.2s',
  display: 'block',
};

export const mobileMenuStyle = {
  position: 'absolute',
  top: 56,
  left: 0,
  right: 0,
  background: '#fff',
  boxShadow: '0 2px 8px 0 rgba(60,60,60,0.07)',
  borderRadius: '0 0 18px 18px',
  padding: '1rem 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  zIndex: 101,
};

export const mobileSelectWrapperStyle = {
  marginTop: '1rem',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};

export const hideOnMobileStyle = {
  display: 'flex',
};

export const showOnMobileStyle = {
  display: 'none',
};

export const dropdownMenuStyle = {
  position: 'absolute',
  top: '100%',
  left: 0,
  minWidth: 160,
  background: '#fff',
  boxShadow: '0 4px 16px 0 rgba(60,60,60,0.13)',
  borderRadius: 8,
  padding: '0.5em 0',
  zIndex: 200,
  display: 'block',
};

export const dropdownItemStyle = {
  display: 'block',
  padding: '0.5em 1.2em',
  color: '#23272f',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '1em',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
  borderRadius: 6,
  transition: 'background 0.16s, color 0.16s',
  fontFamily: "'Nunito', 'Poppins', 'Inter', system-ui, sans-serif", 
};

export const navbarSelectMobileStyle = {
  ...selectStyle,
  marginLeft: 0,

};

if (typeof window !== 'undefined' && typeof document !== 'undefined' && !window.__navbar_styles_injected) {
  const style = document.createElement('style');
  style.innerHTML = `
    .navbar-desktop,
    .navbar-burger {
      transition: opacity 0.25s cubic-bezier(.4,0,.2,1), visibility 0.25s cubic-bezier(.4,0,.2,1);
    }
    .navbar-desktop {
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
    }
    .navbar-desktop.hide {
      opacity: 0 !important;
      visibility: hidden !important;
      pointer-events: none !important;
    }
    .navbar-burger {
      opacity: 0;
      visibility: hidden;
      pointer-events: none;
    }
    .navbar-burger.show {
      opacity: 1 !important;
      visibility: visible !important;
      pointer-events: auto !important;
    }
    @media (max-width: 780px) {
      .navbar-burger { display: flex !important; }
      .navbar-desktop { display: none !important; }
      .navbar-mobile { display: flex !important; }
      .navbar-select { margin-left: 0.5rem !important; }
    }
    @media (min-width: 781px) {
      .navbar-burger { display: none !important; }
      .navbar-desktop { display: flex !important; }
      .navbar-mobile { display: none !important; }
    }
  `;
  document.head.appendChild(style);
  window.__navbar_styles_injected = true;
}
