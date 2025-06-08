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
  height: 35,
  width: 35,
  marginBottom: 6,
};

export const logoTextStyle = {
  fontWeight: 900,
  fontSize: '1rem',
  marginLeft: 8,
  marginRight: 18,
  marginBottom: 5,
  color: "#555555"
};

export const ulStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '0.9rem',
  listStyleType: 'none', // Ensures no bullets in all browsers
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
  alignItems: 'center',
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
  color: '#e11d48',
  background: 'transparent',
  fontWeight: 800,
  borderRadius: 10,
  boxShadow: 'none',
  textShadow: '0 1px 0 #fff',
  position: 'relative',
  transition: 'background 0.18s, color 0.18s, box-shadow 0.18s, outline 0.18s',
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
  padding: '.7em 1.2em',
  color: '#23272f',
  textDecoration: 'none',
  fontWeight: 600,
  fontSize: '1em',
  border: 'none',
  cursor: 'pointer',
  borderRadius: 6,
  transition: 'background 0.16s, color 0.16s',
  fontFamily: "'Nunito', 'Poppins', 'Inter', system-ui, sans-serif", 
};

export const navbarSelectMobileStyle = {
  ...selectStyle,
  marginLeft: 0,

};

export const navbarDropdownCss = `
  .navbar-desktop li:hover .services-dropdown {
    display: block !important;
  }
  .services-dropdown-item {
    transition: background 0.16s, color 0.16s;
  }
  .services-dropdown-item:hover {
    background: #e11d48 !important;
    color: #fff !important;
  }
  .navbar-services-trigger:hover {
    cursor: pointer !important;
  }
  .services-dropdown {
    left: 50% !important;
    transform: translateX(-50%) !important;
  }
  .navbar-desktop .navbar-services-trigger,
  .navbar-desktop a {
    position: relative;
  }
  .navbar-desktop .navbar-services-trigger.active,
  .navbar-desktop a.active {
    color: #e11d48 !important;
  }
  .navbar-desktop .navbar-services-trigger.active::after,
  .navbar-desktop a.active::after {
    content: "";
    display: block;
    position: absolute;
    left: 18%;
    right: 18%;
    bottom: -6px; /* moved underline further down */
    height: 3px;
    border-radius: 2px;
    background: #e11d48;
    opacity: 1;
    transition: opacity 0.18s;
    z-index: 2;
  }
`;

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

// Add these styles for clarity and maintainability
export const servicesDropdownWrapperStyle = {
  position: 'relative',
  display: 'inline-block'
};

export const servicesDropdownTriggerStyle = {
  cursor: 'pointer',
  userSelect: 'none',
  pointerEvents: 'none',
  background: 'transparent',
  border: 'none',
  outline: 'none',
  display: 'inline-block',
  position: 'relative',
  zIndex: 2,
};

export const servicesDropdownMenuStyle = {
  left: '50%',
  transform: 'translateX(-50%)',
  position: 'absolute',
  top: '100%',
  zIndex: 10,
};

export const mobileDropdownButtonStyle = {
  width: '100%',
  textAlign: 'center',
  background: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  padding: '0.36em 0.9em',
  fontWeight: 600,
  fontSize: '1.08em',
  color: '#30353d',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
};

export const mobileDropdownArrowStyle = {
  float: 'right',
  fontSize: 15,
  marginLeft: 8,
};

export const mobileDropdownMenuStyle = {
  listStyleType: 'none', 
  padding: '.4em 0.4em .4em 0.4em',
  background: '#f9fafb',
  borderRadius: 8,
  border: '1px solid #e5e7eb',
};

export const mobileDropdownItemStyle = {
  width: '100%',
  textAlign: 'center',
  background: 'none',
  border: 'none',
  outline: 'none',
  cursor: 'pointer',
  padding: '0.9em 0.6em',
};
