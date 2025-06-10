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
  width: '100%',
  marginTop: 54,
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
  background: '#f8f6f1',
  borderRadius: 0,
  boxShadow: 'none',
  padding: 0,
};

export const productImgStyle = {
  width: 400,
  height: 400,
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
  borderRadius: 22,
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
  fontSize: '1.65em',
  marginBottom: 10,
  color: '#e11d48',
  textTransform: 'uppercase',
  letterSpacing: '0.01em',
  textAlign: 'center'
};

export const productDescStyle = {
  // color: '#23272f', 
  color: '#888888',
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

export const thankYouSlider = {
  position: 'fixed',
  top: 80,
  right: 32,
  left: 'unset',
  zIndex: 9999,
  background: '#22c55e',
  color: '#fff',
  fontWeight: 700,
  fontSize: 18,
  padding: '16px 32px',
  borderRadius: 12,
  boxShadow: '0 4px 24px 0 rgba(34,197,94,0.13)',
  minWidth: 220,
  maxWidth: 340,
  textAlign: 'center',
  animation: 'slideInOutRightThankYou 3s cubic-bezier(.4,0,.2,1) forwards',
  width: 'auto',
};

export const thankYouSliderIcon = {
  marginBottom: 6,
  display: 'block',
  marginLeft: 'auto',
  marginRight: 'auto'
};

export const responsiveStyle = `
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
@keyframes slideInOutRightThankYou {
  0% { opacity: 0; transform: translateX(120px);}
  10% { opacity: 1; transform: translateX(0);}
  85% { opacity: 1; transform: translateX(0);}
  100% { opacity: 0; transform: translateX(120px);}
}
@keyframes slideInOutRightMobile {
  0% { opacity: 0; transform: translateX(120px);}
  10% { opacity: 1; transform: translateX(0);}
  85% { opacity: 1; transform: translateX(0);}
  100% { opacity: 0; transform: translateX(120px);}
}
@media (max-width: 900px) {
  .services-product-row {    margin-top: 94px !important;
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
  }
  .services-product-section {
    margin-top: 94px !important;
  }
}
@media (max-width: 600px) {
  .thank-you-slider {
    left: 50% !important;
    right: unset !important;
    transform: translateX(-50%) !important;
    top: 64px !important;
    bottom: unset !important;
    min-width: 70vw !important;
    max-width: 96vw !important;
    font-size: 16px !important;
    padding: 14px 8vw !important;
    animation: slideInOutRightMobile 3s cubic-bezier(.4,0,.2,1) forwards;
  }
  .form-row {
    gap: 0 !important;
  }
}
`;

export const formSectionStyle = {
  width: '100%',
};

export const formOuterStyle = {
  background: '#fff',
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
  marginTop: 58,
  marginBottom: 4,
};

export const contactBtnStyle = {
  background: '#888',
  color: '#fff',
  fontWeight: 700,
  fontSize: '1em',
  marginTop: 56,
  minWidth: 260,
  maxWidth: 450,
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

export const formErrorTextStyle = {
  color: '#e11d48',
  fontSize: 13,
  position: 'absolute',
  left: 8,
  top: -2,
  zIndex: 2
  
};

export const formMarginBlockStyle = {
  margin: '18px 0'
};

export const formColumnInputWrapperStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
};

export const formColumnTextareaWrapperStyle = {
  display: 'flex',
  flexDirection: 'column',
  position: 'relative'
};

export const formHiddenBlockStyle = {
  display: 'none'
};
