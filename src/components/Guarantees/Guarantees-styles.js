
export const pageHeaderOuter = {
  width: '100%',
  maxWidth: 1200,
  margin: '40px auto 32px auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 84
};

export const pageHeaderTitle = {
  fontSize: 44,
  fontWeight: 800,
  color: '#555555',
  letterSpacing: '0.04em',
  margin: 0,
  textAlign: 'center',
  textTransform: 'uppercase',
  fontFamily: "'Nunito', 'Poppins', 'Inter', system-ui, sans-serif"
};

export const gridStyle = {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '36px',
  maxWidth: 1100,
  padding: '0 1.5rem',
  marginTop: 94,
};

export const cardStyle = {
  borderRadius: 22,
  fontFamily: "'Nunito', 'Poppins', 'Inter', system-ui, sans-serif",
  color: '#23272f',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  position: 'relative',
  overflow: 'hidden',
};

export const deliveryCardStyle = {
  ...cardStyle,
  gridColumn: '1 / span 2',
  minWidth: 0,
  width: '100%',
};

export const hrStyle = {
  border: 'none',
  borderTop: '1.5px solid #e5e7eb',
  margin: '32px 0',
  width: '100%',
};

export const hrMobileStyle = {
  ...hrStyle,
  display: 'none',
};

export const responsiveStyle = `
@media (max-width: 900px) {
  .guarantees-grid {
    grid-template-columns: 1fr !important;
    gap: 24px !important;
    padding: 0 0.5rem !important;
  }
  .guarantees-delivery-card {
    grid-column: auto !important;
  }
  .guarantees-hr-mobile {
    display: block !important;
  }
}
`;

export const cardTitleStyle = {
  marginTop: 24,
  fontSize: 26,
  fontWeight: 800,
  color: '#e11d48',
  marginBottom: 30,
  textAlign: 'center',
  letterSpacing: '0.01em',
  textTransform: 'uppercase',
  lineHeight: 1.1,
  display: 'flex',
  alignItems: 'center',
  gap: 12,
};

export const cardTextStyle = {
  fontSize: 18,
  fontWeight: 400,
  lineHeight: 1.8,
  background: '#fff',
  borderRadius: 14,
  padding: '1.4em 1.7em',
  boxShadow: '0 2px 12px 0 rgba(60,60,60,0.06)',
  whiteSpace: 'pre-line',
  marginBottom: 0,
  textAlign: 'left',
  color: '#23272f',
  letterSpacing: '0.01em',
  border: '1px solid #f1f1f1',
  minHeight: 120,
  transition: 'box-shadow 0.18s, border 0.18s',
};
