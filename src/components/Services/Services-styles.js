export const servicesHeaderOuter = {
  width: '100%',
  maxWidth: 1200,
  margin: '40px auto 32px auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 84
};

export const servicesHeaderTitle = {
  fontSize: 44,
  fontWeight: 800,
  color: '#555555',
  letterSpacing: '0.04em',
  margin: 0,
  textAlign: 'center',
  textTransform: 'uppercase',
  fontFamily: "'Nunito', 'Poppins', 'Inter', system-ui, sans-serif"
};

export const productSectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: 94,
  width: '100%',
};

export const productSectionInnerStyle = {
  width: '100%',
  textAlign: 'center'
};

export const productCardsContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 38,
  width: '100%',
  alignItems: 'center',
};

export const productRowStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  maxWidth: 1100,
  minHeight: 260,
  margin: '0 auto',
  position: 'relative',
  gap: 0,
  background: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  padding: 0,
};

export const productImgStyle = {
  width: 300,
  height: 300,
  objectFit: 'contain',
  borderRadius: 0,
  marginRight: 0,
  alignSelf: 'center',
  flexShrink: 0,
  background: 'none',
  boxShadow: 'none',
  display: 'block',
};

export const productCardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  background: '#fff',
  borderRadius: 22,
  boxShadow: '0 2px 12px 0 rgba(60,60,60,0.09)',
  padding: '2.5rem 2.5rem',
  maxWidth: 700,
  marginLeft: 32,
  flex: 1,
  minWidth: 0,
  textAlign: 'left',
  position: 'relative',
  gap: 0,
};

export const productTitleStyle = {
  fontWeight: 800,
  fontSize: '1.45em',
  marginBottom: 10,
  color: '#e11d48',
  textTransform: 'uppercase',
  letterSpacing: '0.01em',
  textAlign: 'center'
};

export const productDescStyle = {
  color: '#23272f',
  fontSize: '1.08em',
  marginBottom: 18,
  fontWeight: 500,
  lineHeight: 1.7,
  whiteSpace: 'pre-line',
  textAlign: 'center',
};

export const productBtnGroupStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginTop: 16,
};

export const productBtnStyle = {
  padding: '0.7em 2em',
  borderRadius: 8,
  background: '#e11d48',
  color: '#fff',
  fontWeight: 600,
  fontSize: '1.1em',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 1px 4px 0 rgba(60,60,60,0.09)',
};

export const productBtnAnimatedClass = "product-btn-animated";

export const productBtnAnimatedHoverStyle = `
.product-btn-animated:hover {
  background: #a1a1a1 !important;
  box-shadow: 0 1px 4px 0 rgba(60,60,60,0.09);
  transform: none;
  transition: background 0.18s;
}
.product-btn-animated:active {
  background: #666 !important;
  transform: none;
}
`;

export const responsiveStyle = `
@media (max-width: 900px) {
  .services-product-row {
    flex-direction: column !important;
    align-items: center !important;
    padding: 0 !important;
    min-height: unset !important;
    max-width: 98vw !important;
    box-sizing: border-box !important;
  }
  .services-product-img {
    width: 100% !important;
    height: 180px !important;
    margin: 0 0 18px 0 !important;
    max-width: 100vw !important;
  }
  .services-product-card {
    margin-left: 0 !important;
    width: 100% !important;
    min-width: 0 !important;
    border-radius: 18px !important;
    padding: 1.2rem 0.7rem !important;
    box-sizing: border-box !important;
  }
  .services-product-btn-group {
    justify-content: center !important;
    width: 100% !important;
    margin-top: 16px !important;
  }
}
`;

export const formSectionStyle = {
  margin: '48px auto',
  width: '100%',
};

export const formOuterStyle = {
  background: '#fff',
  borderRadius: 22,
  boxShadow: '0 2px 12px 0 rgba(60,60,60,0.09)',
  padding: '2.5rem 2.5rem',
  margin: '0 auto',

  display: 'flex',
  flexDirection: 'column',
  gap: 0,
};

export const formRowStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 24,
};

export const formInputStyle = {
  padding: '0.5em 1.2em',
  borderRadius: 10,
  border: '1.5px solid #e5e7eb',
  fontSize: 17,
  background: '#fff',
  color: '#555555',
  marginBottom: 16,
  boxShadow: '0 1px 4px 0 rgba(60,60,60,0.04)',
  outline: 'none',
  transition: 'border 0.18s',
  fontFamily: "'Nunito', 'Poppins', 'Inter', system-ui, sans-serif",
  flex: 1,
};

export const formTextareaStyle = {
  ...formInputStyle,
  width: '100%',
  minHeight: 80,
  resize: 'vertical',
  boxSizing: 'border-box',
  flex: 1,
  minWidth: 0,
  marginBottom: 16,
};

export const formSubmitStyle = {
  background: '#e11d48',
  color: '#fff',
  fontWeight: 700,
  fontSize: '1.1em',
  border: 'none',
  borderRadius: 8,
  padding: '0.7em 2em',
  marginTop: 12,
  width: 180,
  alignSelf: 'center',
  cursor: 'pointer'
};

export const formSubmitBtnAnimatedClass = "form-submit-btn-animated";

export const formSubmitBtnAnimatedHoverStyle = `
.form-submit-btn-animated:hover {
    background: #f25577 !important;
  box-shadow: 0 1px 4px 0 rgba(60,60,60,0.09);
  transition: background 0.18s;
}
.form-submit-btn-animated:active {
  background: #666 !important;
}
`;

export const orderFormTitleStyle = {
  fontSize: '1.6em',
  fontWeight: 800,
  color: ' #e11d48',
  letterSpacing: '0.04em',
  margin: 0,
  textAlign: 'center',
  textTransform: 'uppercase',
  fontFamily: "'Nunito', 'Poppins', 'Inter', system-ui, sans-serif",
  padding: 30,
  marginBottom: 10,
  marginTop: 0,
};

export const contactBtnGroupStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '100%',
  marginTop: 28,
  marginBottom: 4,
};

export const contactBtnStyle = {
  background: '#888',
  color: '#fff',
  fontWeight: 700,
  fontSize: '1em',
  marginTop: 46,
  minWidth: 260,
  maxWidth: 450,
  width: '100%',
  padding: '0.9em 2em',
  borderRadius: 10,
  cursor: 'pointer',
  boxShadow: '0 2px 8px 0 rgba(60,60,60,0.09)',
  letterSpacing: '0.01em',
  transition: 'background 0.18s, box-shadow 0.18s',
  border: 'none',
  outline: 'none',
  margin: 0,
  textAlign: 'center',
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'center',
};
