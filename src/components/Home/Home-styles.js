export const heroSectionStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 360,
  background: '#f8f6f1',
  padding: '3rem 0 2rem 0',
  marginTop: 80
};

export const heroContainerStyle = {
  maxWidth: 700,
  margin: '0 auto',
  textAlign: 'center',
  padding: '2.2rem',
  borderRadius: 18,
};

export const heroTitleStyle = {
  fontSize: '2.5rem',
  fontWeight: 700,
  marginBottom: 16,
  color: '#555'
};

export const heroSubtitleStyle = {
  fontSize: '1.25rem',
  fontWeight: 500,
  color: '#555',
  marginBottom: 32
};

export const heroBtnGroupStyle = {
  display: 'flex',
  gap: 16,
  justifyContent: 'center'
};

export const heroBtnStyle = {
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

export const productSectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginBottom: 64,
};

export const productSectionInnerStyle = {
  width: '100%',
  textAlign: 'center'
};

export const productCardsContainerStyle = {
  display: 'flex',
  gap: 32,
  flexWrap: 'wrap',
  justifyContent: 'center',

};

export const productCardStyle = {
  background: '#fff',
  borderRadius: 16,
  boxShadow: '0 1px 4px 0 rgba(60,60,60,0.09)',
  padding: '2rem 1.5rem',
  maxWidth: 340,
  flex: '1 1 260px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'auto',
  position: 'relative',
};

export const productImgStyle = {
  maxWidth: '100%',
  margin: '0 auto 18px auto',
  display: 'block'
};

export const productTitleStyle = {
  fontWeight: 700,
  fontSize: '1.15em',
  marginBottom: 6,
  color: 'black'
};

export const productDescStyle = {
  color: '#555',
  fontSize: '1em',
  marginBottom: 18
};

export const productBtnGroupStyle = {
  marginTop: 'auto',
  display: 'flex',
  gap: 16,
  justifyContent: 'center'
};

export const productBtnStyle = {
  padding: '0.4em 1.2em',
  borderRadius: 8,
  color: '#fff',
  fontWeight: 600,
  fontSize: '1.1em',
  width: '350px',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 1px 4px 0 rgba(60,60,60,0.09)',
//   background: '#e11d48',
};

export const stepsSectionStyle = {
  width: '100vw',
  position: 'relative',
  left: '50%',
  right: '50%',
  marginLeft: '-50vw',
  marginRight: '-50vw',
  maxWidth: '100vw',
  paddingLeft: 0,
  paddingRight: 0,
  marginBottom: 64,
  background: '#fff',
  boxSizing: 'border-box',
};

export const stepsContainerStyle = {
  maxWidth: 1200,
  margin: '0 auto',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: 0,
  padding: '2rem 0.5rem',
  boxSizing: 'border-box',
};

export const stepsHeaderOuterStyle = {
  display: 'flex',
  flexDirection: 'column',
  maxWidth: 852,
  margin: '0 auto',
  alignItems: 'center',
  textAlign: 'center',
  flexWrap: 'wrap',
  wordBreak: 'break-word',
  overflowWrap: 'break-word'
};

export const stepsHeaderInnerStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  flexWrap: 'wrap',
  wordBreak: 'break-word',
  overflowWrap: 'break-word'
};

export const stepsHeaderTextContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  gap: 24,
  flexWrap: 'wrap',
  wordBreak: 'break-word',
  overflowWrap: 'break-word'
};

export const stepsTitleStyle = {
  fontWeight: 600,
  fontSize: '2rem',
  marginBottom: 0,
  lineHeight: 1.1,
  letterSpacing: 0,
  marginBlockEnd: 8,
  color: '#111827',
  textAlign: 'center',
  wordBreak: 'break-word',
  overflowWrap: 'break-word'
};

export const stepsSpacerStyle = {
  marginBottom: 64
};

export const stepsItemsOuterStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 32
};

export const stepsItemsContainerStyle = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: 48,
  width: '100%',
  justifyContent: 'center'
};

export const stepItemStyle = {
  width: '100%',
  maxWidth: 340,
  minWidth: 260,
  flex: '1 1 260px',
  marginBottom: 32,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  wordBreak: 'break-word',
  overflowWrap: 'break-word'
};

export const stepIconStyle = {
  color: '#6b7280'
};

export const stepTitleStyle = {
  fontWeight: 600,
  marginTop: 0,
  fontSize: 18,
  marginBottom: 8,
  color: '#111827',
  wordBreak: 'break-word',
  overflowWrap: 'break-word'
};

export const stepTextGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 16
};

export const stepTextStyle = {
  marginTop: 0,
  fontSize: 16,
  lineHeight: '1.5rem',
  fontWeight: 400,
  marginBottom: 0,
  color: '#6b7280',
  wordBreak: 'break-word',
  overflowWrap: 'break-word'
};

// Add class names for buttons
export const contactBtnClass = "contact-btn";
export const animatedBtnClass = "animated-btn";
export const productBtnAnimatedClass = "product-btn-animated";

// Add hover styles as string for <style> tag in Home.jsx
export const contactBtnHoverStyle = `
.contact-btn:hover {
  background: #f25577 !important;
  box-shadow: 0 1px 4px 0 rgba(60,60,60,0.09);
  transform: none;
  transition: background 0.18s;
}
.contact-btn:active {
  background: #e11d48 !important;
  transform: none;
}
`;

export const animatedBtnHoverStyle = `
.animated-btn:hover {
  background: #a1a1a1 !important;
  box-shadow: 0 1px 4px 0 rgba(60,60,60,0.09);
  transform: none;
  transition: background 0.18s;
}
.animated-btn:active {
  background: #666 !important;
  transform: none;
}
`;

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

// Carousel section styles
export const carouselSectionStyle = {
  padding: '3rem 0',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: 180,
  marginBottom: 90,
};

export const carouselWordsContainerStyle = {
  width: '100%',
  maxWidth: 1200,
  margin: '0 auto',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  gap: '2.5rem'
};

export const carouselButtonStyle = (showWords, visibleCount, wordsLength) => ({
  marginTop: 80,
  padding: '0.8em 2.2em',
  borderRadius: 8,
  background: '#888',
  color: '#fff',
  fontWeight: 600,
  fontSize: '1.15em',
  border: 'none',
  cursor: 'pointer',
  boxShadow: '0 1px 4px 0 rgba(60,60,60,0.09)',
  opacity: showWords && visibleCount === wordsLength ? 1 : 0,
  transform: showWords && visibleCount === wordsLength
    ? 'translateY(0)'
    : 'translateY(60px)',
  transition: showWords && visibleCount === wordsLength
    ? 'opacity 0.5s 0.6s, transform 0.5s 0.6s, background 0.18s'
    : 'opacity 0.4s, transform 0.4s, background 0.18s',
  pointerEvents: showWords && visibleCount === wordsLength ? 'auto' : 'none',
});

// Responsive styles for carousel section
export const carouselSectionResponsiveStyle = `
@media (max-width: 600px) {
  .carousel-static-section {
    flex-direction: column !important;
    gap: 0.7rem !important;
    align-items: center !important;
  }
  .carousel-static-section span {
    font-size: 1.1rem !important;
  }
}
`;

export const advantagesFlexWrapStyle = {
  maxWidth: 800,
  margin: '0 auto',
  borderRadius: 18,
  background: '#fff',
  boxShadow: '0 2px 12px 0 rgba(60,60,60,0.07)',
  padding: '3.6rem 4.5rem',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1.5rem',
  flexWrap: 'wrap',
};

export const advantagesTitleColStyle = {
  minWidth: 180,
  maxWidth: 340,
  flex: '1 1 220px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  minHeight: 120,
  height: '100%',
  wordBreak: 'break-word',
};

export const advantagesTitleH2Style = {
  fontSize: '2.8rem',
  fontWeight: 800,
  color: '#e11d48',
  margin: 0,
  letterSpacing: '0.01em',
  textAlign: 'left',
  lineHeight: 1.1,
  textTransform: 'uppercase',
  whiteSpace: 'pre-line',
  wordBreak: 'break-word',
  width: '100%',
};

export const advantagesListColStyle = {
  flex: '2 1 320px',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  fontSize: '1.1rem',
  fontWeight: 600,
  color: '#23272f',
  justifyContent: 'center',
  minWidth: 180,
  width: '100%',
  textAlign: 'left',
  wordBreak: 'break-word',
  position: 'relative',
  minHeight: 180,
};

export const advantagesLearnMoreLinkStyle = {
  position: 'absolute',
  right: -45,
  bottom: -50,
  color: '#e11d48',
  fontWeight: 400,
  fontSize: '0.9em',
  cursor: 'pointer',
  textDecoration: 'underline',
  transition: 'color 0.18s',
  display: 'inline-block',
  padding: '0.5em 0.2em',
  background: 'rgba(255,255,255,0.85)',
  borderRadius: 6,
};

export const advantagesLearnMoreArrowStyle = {
  display: 'inline-block',
  verticalAlign: 'middle',
  marginLeft: 4,
  transition: 'transform 0.22s cubic-bezier(.4,0,.2,1)',
};

export const advantagesLearnMoreLinkMedia = `
.advantages-learn-more-link:hover .advantages-learn-more-arrow {
  transform: translateX(7px) scale(1.15);
}
@media (max-width: 900px) {
  .advantages-learn-more-link {
    right: 0 !important;
    bottom: 0 !important;
  }
}
@media (max-width: 600px) {
  .advantages-learn-more-link {
    right: 0 !important;
    bottom: 0 !important;
  }
}
`;

export const advantagesFlexWrapMedia = `
@media (max-width: 900px) {
  .advantages-flex-wrap {
    flex-direction: column !important;
    gap: 1.2rem !important;
    padding: 1.2rem 0.7rem !important;
  }
  .advantages-flex-wrap h2 {
    text-align: center !important;
    font-size: 3.5rem !important;
    margin-top: 4rem !important;
  }
  .advantages-flex-wrap > div:last-child {
    text-align: center !important;
    font-size: 1rem !important;
  }
  .advantages-flex-wrap button {
    align-self: center !important;
    width: 100% !important;
    margin-top: 1.5rem !important;
  }
}
`;


