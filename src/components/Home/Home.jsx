import React from 'react';
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
  stepTextStyle
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
    },
    {
      img: './3.png',
      name: labels.PROD_THREE_BTN || labels.PROD_THREE || '',
      id: labels.PROD_THREE_ID || '103',
      title: labels.productCardTitle3,
      desc: labels.productCardDesc3,
      btn: labels.productCardBtn3,
    },
    {
      img: './4.png',
      name: labels.PROD_FOUR_BTN || labels.PROD_FOUR || '',
      id: labels.PROD_FOUR_ID || '104',
      title: labels.productCardTitle4,
      desc: labels.productCardDesc4,
      btn: labels.productCardBtn4,
    },
  ];

  const s3 = section3Labels[lang] || section3Labels.en;

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
    </div>
  );
}

export default Home;
