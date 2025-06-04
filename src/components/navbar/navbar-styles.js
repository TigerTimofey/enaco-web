export const navStyle = {
  width: 'calc(100% - 48px)',
  margin: '24px auto 0 auto',
  left: 0,
  right: 0,
  padding: '0.8em 0',
  background: 'rgba(255,255,255,0.92)',
  borderBottom: '1px solid #e5e7eb',
  position: 'fixed',
  top: 0,
  zIndex: 100,
  boxShadow: '0 2px 8px 0 rgba(60,60,60,0.07)',
  backdropFilter: 'blur(8px)',
  borderRadius: '18px',
  maxWidth: '1200px',
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
};

export const logoImgStyle = {
  height: 32,
  width: 32,
  borderRadius: 7,
  boxShadow: '0 1px 4px 0 rgba(60,60,60,0.09)',
};

export const ulStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '1.1rem',
  listStyle: 'none',
  margin: 0,
  padding: 0,
  fontSize: '1.01rem',
  fontWeight: 500,
  fontFamily: 'Inter, system-ui, sans-serif',
};

export const liStyle = {
  position: 'relative',
};

export const linkStyle = {
  color: '#23272f',
  textDecoration: 'none',
  padding: '0.36em 0.9em',
  borderRadius: 7,
  transition: 'background 0.16s, color 0.16s',
  display: 'inline-block',
  fontWeight: 500,
  letterSpacing: '0.01em',
};

export const linkHoverStyle = {
  color: '#2563eb',
};

export const selectStyle = {
  marginLeft: '1.5rem',
  padding: '0.35em 1em',
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
