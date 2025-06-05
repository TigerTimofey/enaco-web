import React, { useRef, useEffect, useState } from 'react';
import { homeLabels, section3Labels } from '../translations/navbar-languages.js';
import { useNavigate } from 'react-router-dom';
import {
  heroSectionStyle,
  heroContainerStyle,
  heroTitleStyle,
  heroSubtitleStyle,
  heroBtnGroupStyle,
  heroBtnStyle,
  productSectionStyle,
  productSectionInnerStyle,
  productCardsContainerStyle,
  productCardStyle,
  productImgStyle,
  productTitleStyle,
  productDescStyle,
  productBtnGroupStyle,
  productBtnStyle,
  stepsSectionStyle,
  stepsContainerStyle,
  stepsHeaderOuterStyle,
  stepsHeaderInnerStyle,
  stepsHeaderTextContainerStyle,
  stepsTitleStyle,
  stepsSpacerStyle,
  stepsItemsOuterStyle,
  stepsItemsContainerStyle,
  stepItemStyle,
  stepIconStyle,
  stepTitleStyle,
  stepTextGroupStyle,
  stepTextStyle,
  contactBtnClass,         
  animatedBtnClass,        
  productBtnAnimatedClass, 
  contactBtnHoverStyle,    
  animatedBtnHoverStyle,   
  productBtnAnimatedHoverStyle, 
  carouselSectionStyle,
  carouselWordsContainerStyle,
  carouselButtonStyle,
  carouselSectionResponsiveStyle,
} from './Home-styles';

function Home({ lang }) {
  const labels = homeLabels[lang] || {};
  const navigate = useNavigate();

  const products = [
    {
      img: './1.png',
      name: labels.PROD_ONE_BTN || labels.PROD_ONE || '',
      id: labels.PROD_ONE_ID || '101',
      title: labels.productCardTitle,
      desc: labels.productCardDesc,
      btn: labels.productCardBtn,
    },
    {
      img: './2.png',
      name: labels.PROD_TWO_BTN || labels.PROD_TWO || '',
      id: labels.PROD_TWO_ID || '102',
      title: labels.productCardTitle2,
      desc: labels.productCardDesc2,
      btn: labels.productCardBtn2,
    }, {
      img: './4.png',
      name: labels.PROD_FOUR_BTN || labels.PROD_FOUR || '',
      id: labels.PROD_FOUR_ID || '104',
      title: labels.productCardTitle4,
      desc: labels.productCardDesc4,
      btn: labels.productCardBtn4,
    },
    {
      img: './3.png',
      name: labels.PROD_THREE_BTN || labels.PROD_THREE || '',
      id: labels.PROD_THREE_ID || '103',
      title: labels.productCardTitle3,
      desc: labels.productCardDesc3,
      btn: labels.productCardBtn3,
    },
  
  ];

  const s3 = section3Labels[lang] || section3Labels.en;

  const wordsRef = useRef(null);
  const [showWords, setShowWords] = useState(false);
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    function onScroll() {
      if (!wordsRef.current) return;
      const rect = wordsRef.current.getBoundingClientRect();
      if (rect.bottom > 80 && rect.top < window.innerHeight - 80) {
        setShowWords(true);
      } else {
        setShowWords(false);
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    let timeout;
    if (showWords) {
      setVisibleCount(0);
      function showNext() {
        setVisibleCount(v => {
          if (v < (labels.carouselWords?.length || 0)) {
            timeout = setTimeout(showNext, 55);
            return v + 1;
          }
          return v;
        });
      }
      showNext();
    } else {
      setVisibleCount(0);
    }
    return () => clearTimeout(timeout);
  }, [showWords, labels.carouselWords]);

  // Use language file for advantages section
  const advantagesTitle = {
    ru: 'Почему выбирают нас?',
    ee: 'Miks valida meid?',
    en: 'Why choose us?'
  }[lang] || 'Why choose us?';

  const advantagesList = {
    ru: [
      "Все агрегаты проходят техническую проверку",
      "Гарантия и помощь в подборе по VIN",
      "Доставка по Эстонии и всей территории ЕС",
      "Работаем с частными и корпоративными клиентами"
    ],
    ee: [
      "Kõik agregaadid läbivad tehnilise kontrolli",
      "Garantii ja abi valikul VIN-koodi alusel",
      "Kohaletoimetamine Eestis ja kogu EL territooriumil",
      "Töötame nii era- kui äriklientidega"
    ],
    en: [
      "All units undergo technical inspection",
      "Warranty and assistance with VIN selection",
      "Delivery across Estonia and the entire EU",
      "We work with private and corporate clients"
    ]
  }[lang] || [];

  return (
    <div>
      <section style={heroSectionStyle}>
        <div style={heroContainerStyle}>
          <h1 style={heroTitleStyle}>
            {labels.heroTitle}
          </h1>
          <h2 style={heroSubtitleStyle}>
            {labels.heroSubtitle}
          </h2>
          <div style={heroBtnGroupStyle}>
            <button
              style={heroBtnStyle}
              className={contactBtnClass}
              onClick={() => navigate('/kontakt')}
            >
              {labels.contactBtn}
            </button>
          </div>
        </div>
      </section>
      {/* Product Info Section */}
      <section style={productSectionStyle}>
        <div style={productSectionInnerStyle}>
          <div style={productCardsContainerStyle}>
            {products.map((prod) => (
              <div key={prod.id} style={productCardStyle}>
                <img
                  src={prod.img}
                  alt={prod.name}
                  style={productImgStyle}
                />
                <p style={productTitleStyle}>
                  {prod.title}
                </p>
                <p style={productDescStyle}>
                  {prod.desc}
                </p>
                <div style={productBtnGroupStyle}>
                  <button
                    className={productBtnAnimatedClass}
                    style={productBtnStyle}
                    onClick={() => {
                      console.log('Product name:', prod.name, 'Product id:', prod.id);
                      navigate('/teenused');
                    }}
                  >
                    {(prod.btn || '').replace('{PRODUCT_NAME}', prod.name)}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages Section (Why choose us) */}
      <section
        style={{
          width: '100%',
          background: '#f8f6f1',
          padding: '2.5rem 0 2.2rem 0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 0,
        }}
      >
        <div
          className="advantages-flex-wrap"
          style={{
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
          }}
        >
          <div
            className="advantages-title-col"
            style={{
              minWidth: 180,
              maxWidth: 340,
              flex: '1 1 220px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              minHeight: 120,
              height: '100%',
              wordBreak: 'break-word',
            }}
          >
            <h2
              className="advantages-title-h2"
              style={{
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
              }}
            >
              {advantagesTitle.split(' ').join('\n')}
            </h2>
            <style>
              {`
                @media (max-width: 900px) {
                  .advantages-title-col {
                    justify-content: center !important;
                    align-items: center !important;
                    min-width: 0 !important;
                    max-width: 100% !important;
                  }
                  .advantages-title-h2 {
                    font-size: 2.1rem !important;
                    text-align: center !important;
                    width: 100% !important;
                  }
                }
                @media (max-width: 600px) {
                  .advantages-title-h2 {
                    font-size: 1.3rem !important;
                  }
                }
              `}
            </style>
          </div>
          <div
            style={{
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
            }}
          >
            {advantagesList.map((item, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ minWidth: 22 }}>
                  <circle cx="11" cy="11" r="11" fill="#22c55e"/>
                  <path d="M6 12.5L10 16L16 8" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>{item}</span>
              </div>
            ))}
            <span
              className="advantages-learn-more-link"
              style={{
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
              }}
              onClick={() => navigate('/meist')}
            >
              {lang === 'ru'
                ? 'Подробнее о нас'
                : lang === 'ee'
                ? 'Loe meist lähemalt'
                : 'Learn more about us'}{' '}
              <span style={{ display: 'inline-block', verticalAlign: 'middle', marginLeft: 4 }}>
                <svg width="14" height="14" viewBox="0 0 18 18" fill="none" style={{ verticalAlign: 'middle' }}>
                  <path d="M6 3l6 6-6 6" stroke="#e11d48" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </span>
            <style>
              {`
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
              `}
            </style>
          </div>
        </div>
        <style>
          {`
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
                fontSize: 1rem !important;
              }
              .advantages-flex-wrap button {
                align-self: center !important;
                width: 100% !important;
                margin-top: 1.5rem !important;
              }
            }
          `}
        </style>
      </section>

      {/* Carousel Section: Static words, different font sizes, animated on scroll */}
      <section style={carouselSectionStyle} className="carousel-static-section">
        <div
          ref={wordsRef}
          style={carouselWordsContainerStyle}
        >
          {(labels.carouselWords || []).map((word, idx) => (
            <span
              key={word + idx}
              style={{
                fontSize: [
                  '4.2rem','1.7rem','2rem','1.2rem','1.6rem','2rem','1.2rem','1.4rem','2rem','3rem','2.5rem','1.8rem'
                ][idx] || '1.5rem',
                fontWeight: [
                  600,100,600,600,200,600,100,600,400,600,600,300
                ][idx] || 400,
                color: '#888',
                opacity: showWords && idx < visibleCount ? 1 : 0,
                transform: showWords && idx < visibleCount
                  ? 'translateY(0)'
                  : 'translateY(40px)',
                transition: `opacity 0.6s ${0.08 * idx}s, transform 0.6s ${0.08 * idx}s`,
                display: 'inline-block',
              }}
            >
              {word}
            </span>
          ))}
        </div>
        <button
          style={carouselButtonStyle(
            showWords,
            visibleCount,
            labels.carouselWords?.length || 0
          )}
          className={animatedBtnClass + " carousel-contact-btn"}
          onClick={() => navigate('/kontakt')}
        >
          {labels.carouselButton}
        </button>
      </section>
      
      {/* Steps Section */}
      <section style={stepsSectionStyle}>
        <div style={stepsContainerStyle}>
          <div style={stepsHeaderOuterStyle}>
            <div style={stepsHeaderInnerStyle}>
              <div style={stepsHeaderTextContainerStyle} id="lead-item-container-text">
                <h3 style={stepsTitleStyle}>
                  {s3.title}
                </h3>
              </div>
            </div>
          </div>
          <div style={stepsSpacerStyle}></div>
          <div style={stepsItemsOuterStyle}>
            <div style={stepsItemsContainerStyle}>
              {s3.items.map((item, idx) => (
                <div key={idx} style={stepItemStyle}>
                  <div style={stepIconStyle}>
                    {item.icon === 1 && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: '#e11d48' }} xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M2 4C2 2.89543 2.89543 2 4 2H20C21.1046 2 22 2.89543 22 4V20C22 21.1046 21.1046 22 20 22H4C2.89543 22 2 21.1046 2 20V4ZM11.9949 6C11.4841 6 11.0699 6.41414 11.0699 6.925V17.075C11.0699 17.5859 11.4841 18 11.9949 18C12.5058 18 12.9199 17.5859 12.9199 17.075V6.925C12.9199 6.41414 12.5058 6 11.9949 6ZM7.99495 13C7.48408 13 7.06995 13.4141 7.06995 13.925V17.075C7.06995 17.5859 7.48408 18 7.99495 18C8.50581 18 8.91995 17.5859 8.91995 17.075V13.925C8.91995 13.4141 8.50581 13 7.99495 13ZM15.0699 10.925C15.0699 10.4141 15.4841 10 15.9949 10C16.5058 10 16.9199 10.4141 16.9199 10.925V17.075C16.9199 17.5859 16.5058 18 15.9949 18C15.4841 18 15.0699 17.5859 15.0699 17.075V10.925Z" fill="currentColor"></path>
                      </svg>
                    )}
                    {item.icon === 2 && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: '#e11d48' }} xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M10.9466 1.19528C11.6258 0.940602 12.3742 0.940602 13.0534 1.19528L20.3511 3.93194C20.7414 4.07831 21 4.45143 21 4.86827V11C21 16.1766 18.0085 20.1362 12.4443 22.8959C12.1644 23.0347 11.8356 23.0347 11.5557 22.8959C5.99148 20.1362 3 16.1766 3 11V4.86827C3 4.45143 3.25857 4.07831 3.64888 3.93194L10.9466 1.19528ZM8.75728 10.6465C8.36675 10.256 7.73359 10.256 7.34306 10.6465C6.95254 11.0371 6.95254 11.6702 7.34306 12.0608L9.40894 14.1266C10.19 14.9077 11.4563 14.9077 12.2374 14.1266L16.6569 9.70711C17.0474 9.31658 17.0474 8.68342 16.6569 8.29289C16.2664 7.90237 15.6332 7.90237 15.2427 8.29289L10.8232 12.7124L8.75728 10.6465Z" fill="currentColor"></path>
                      </svg>
                    )}
                    {item.icon === 3 && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: '#e11d48' }} xmlns="http://www.w3.org/2000/svg">
                        <path d="M22 15H21V6C21 5.20435 20.6839 4.44129 20.1213 3.87868C19.5587 3.31607 18.7956 3 18 3H6C5.20435 3 4.44129 3.31607 3.87868 3.87868C3.31607 4.44129 3 5.20435 3 6V15H2C1.73478 15 1.48043 15.1054 1.29289 15.2929C1.10536 15.4804 1 15.7348 1 16V18C1 18.7956 1.31607 19.5587 1.87868 20.1213C2.44129 20.6839 3.20435 21 4 21H20C20.7956 21 21.5587 20.6839 22.1213 20.1213C22.6839 19.5587 23 18.7956 23 18V16C23 15.7348 22.8946 15.4804 22.7071 15.2929C22.5196 15.1054 22.2652 15 22 15ZM5 6C5 5.73478 5.10536 5.48043 5.29289 5.29289C5.48043 5.10536 5.73478 5 6 5H18C18.2652 5 18.5196 5.10536 18.7071 5.29289C18.8946 5.48043 19 5.73478 19 6V15H5V6Z" fill="currentColor"></path>
                      </svg>
                    )}
                    {item.icon === 4 && (
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ color: '#e11d48' }} xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 21s-6.5-4.35-9-7.5C-1.5 8.5 3.5 3 8 7c2-2 6-2 8 0 4.5-4 9.5 1.5 5 6.5-2.5 3.15-9 7.5-9 7.5z" fill="currentColor"/>
                      </svg>
                    )}
                  </div>
                  <div>
                    <h6 style={stepTitleStyle}>
                      {item.title}
                    </h6>
                    <div style={stepTextGroupStyle}>
                      <p style={stepTextStyle}>
                        {item.icon === 3
                          ? item.text.split(/(garantii|guarantee|гарантии|warranty)/i).map((part, i) =>
                              /garantii|guarantee|гарантии|warranty/i.test(part) ? (
                                <a
                                  key={i}
                                  href={
                                    lang === 'en'
                                      ? '/garantiid'
                                      : lang === 'ee'
                                      ? '/garantiid'
                                      : lang === 'ru'
                                      ? '/garantiid'
                                      : '/garantiid'
                                  }
                                  style={{
                                    color: '#e11d48',
                                    textDecoration: 'underline',
                                    cursor: 'pointer'
                                  }}
                                  onClick={e => {
                                    e.preventDefault();
                                    localStorage.setItem('enaco_lang', lang);
                                    window.location.href = `/garantiid?lang=${lang}`;
                                  }}
                                >
                                  {part}
                                </a>
                              ) : (
                                <React.Fragment key={i}>{part}</React.Fragment>
                              )
                            )
                          : item.text}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Product Info Section button animation */}
      <style>
        {`
          ${contactBtnHoverStyle}
          ${animatedBtnHoverStyle}
          ${productBtnAnimatedHoverStyle}
          ${carouselSectionResponsiveStyle}
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
        `}
      </style>
    </div>
  );
}

export default Home;
