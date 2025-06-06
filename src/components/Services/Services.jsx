import {  homeLabels, formLabels } from '../translations/navbar-languages.js';
import { businessProducts } from '../utils/bussines-services/bussines-services.js';
import * as servicesStyles from './Services-styles.js';
import { orderFormTitleStyle, contactBtnGroupStyle, contactBtnStyle, formSubmitBtnAnimatedClass, formSubmitBtnAnimatedHoverStyle } from './Services-styles.js';
import { useNavigate } from 'react-router-dom';

function getBtnText(name, lang) {
  // Use prefix from homeLabels
  const prefix = homeLabels[lang]?.fillFormPrefix || homeLabels.en.fillFormPrefix;
  return `${prefix} ${name}`;
}

function Services({ lang, selectedProductId }) {
  const labels = homeLabels[lang] || {};
  const products = businessProducts.map(prod => {
    const name = labels[prod.nameKey] || labels[prod.fallbackNameKey] || '';
    return {
      img: prod.img,
      name,
      id: labels[prod.idKey] || '',
      title: labels[prod.titleKey],
      desc: labels[prod.descKey],
      btn: getBtnText(name, lang),
    };
  });


  const filteredProducts = selectedProductId
    ? products.filter(p => p.id === selectedProductId)
    : products;

  const labelsForm = formLabels[lang] || formLabels.en;
  const navigate = useNavigate();


  const contactBtnText = homeLabels[lang]?.contactBtnSecondary || homeLabels.en.contactBtnSecondary;

  return (
    <div>
 
      <section style={servicesStyles.productSectionStyle}>
        <div style={servicesStyles.productSectionInnerStyle}>
          <div style={servicesStyles.productCardsContainerStyle}>
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="services-product-row"
                style={servicesStyles.productRowStyle}
              >
                <img
                  src={prod.img}
                  alt={prod.name}
                  className="services-product-img"
                  style={servicesStyles.productImgStyle}
                />
                <div className="services-product-card" style={servicesStyles.productCardStyle}>
                  <div>
                    <p style={servicesStyles.productTitleStyle}>
                      {prod.title}
                    </p>
                    <p style={servicesStyles.productDescStyle}>
                      {prod.desc}
                    </p>
                  </div>
        
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>
        {servicesStyles.productBtnAnimatedHoverStyle}
        {servicesStyles.responsiveStyle}
        {formSubmitBtnAnimatedHoverStyle}
      </style>
      {/* --- New Section: External Form --- */}
      <section style={servicesStyles.formSectionStyle}>
        <form
          action="/en/sale-and-repair-of-factory-reconditioned-turbos/#wpcf7-f16212-p16241-o1"
          method="post"
          className="wpcf7-form init default"
          aria-label="Contact form"
          noValidate
          data-status="init"
          style={servicesStyles.formOuterStyle}
        >
          <h1 style={orderFormTitleStyle}>
            {homeLabels[lang].orderFormTitle}
          </h1>

          <div style={{ display: 'none' }}>
            <input type="hidden" name="_wpcf7" value="16212" />
            <input type="hidden" name="_wpcf7_version" value="6.0.6" />
            <input type="hidden" name="_wpcf7_locale" value="et" />
            <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f16212-p16241-o1" />
            <input type="hidden" name="_wpcf7_container_post" value="16241" />
            <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
            <input type="hidden" name="_wpcf7_recaptcha_response" value="" />
          </div>
          <div style={servicesStyles.formRowStyle}>
            <input
              style={servicesStyles.formInputStyle}
              type="text"
              name="smark"
              placeholder={labelsForm.smark}
              maxLength={400}
              required
            />
            <input
              style={servicesStyles.formInputStyle}
              type="text"
              name="smudel"
              placeholder={labelsForm.smudel}
              maxLength={400}
              required
            />
          </div>
          <div style={servicesStyles.formRowStyle}>
            <input
              style={servicesStyles.formInputStyle}
              type="text"
              name="aasta"
              placeholder={labelsForm.aasta}
              maxLength={400}
              required
            />
            <input
              style={servicesStyles.formInputStyle}
              type="text"
              name="skub"
              placeholder={labelsForm.skub}
              maxLength={400}
            />
          </div>
          <div style={servicesStyles.formRowStyle}>
            <input
              style={servicesStyles.formInputStyle}
              type="text"
              name="mvoimsus"
              placeholder={labelsForm.mvoimsus}
              maxLength={400}
            />
            <input
              style={servicesStyles.formInputStyle}
              type="text"
              name="mtahis"
              placeholder={labelsForm.mtahis}
              maxLength={400}
            />
          </div>
          <div style={servicesStyles.formRowStyle}>
            <input
              style={servicesStyles.formInputStyle}
              type="text"
              name="kytus"
              placeholder={labelsForm.kytus}
              maxLength={400}
            />
            <input
              style={servicesStyles.formInputStyle}
              type="text"
              name="rek"
              placeholder={labelsForm.rek}
              maxLength={400}
            />
          </div>
          <div>
            <textarea
              style={servicesStyles.formTextareaStyle}
              name="detail"
              placeholder={labelsForm.detail}
              maxLength={2000}
              rows={4}
            />
          </div>
          <div style={servicesStyles.formRowStyle}>
            <input
              style={servicesStyles.formInputStyle}
              type="text"
              name="nimi"
              placeholder={labelsForm.nimi}
              maxLength={400}
              required
            />
            <input
              style={servicesStyles.formInputStyle}
              type="email"
              name="email"
              placeholder={labelsForm.email}
              maxLength={400}
              required
            />
          </div>
          <div style={servicesStyles.formRowStyle}>
            <input
              style={servicesStyles.formInputStyle}
              type="text"
              name="aadress"
              placeholder={labelsForm.aadress}
              maxLength={400}
            />
            <input
              style={servicesStyles.formInputStyle}
              type="text"
              name="telefon"
              placeholder={labelsForm.telefon}
              maxLength={400}
            />
          </div>
          <div>
            <textarea
              style={servicesStyles.formTextareaStyle}
              name="markused"
              placeholder={labelsForm.markused}
              maxLength={2000}
              rows={4}
            />
          </div>
          <div style={{ margin: '18px 0' }}>
          </div>
          <div>
            <input
              className={`wpcf7-form-control wpcf7-submit has-spinner ${formSubmitBtnAnimatedClass}`}
              type="submit"
              value={labelsForm.send}
              style={servicesStyles.formSubmitStyle}
            />
          </div>
        </form>
        <div
          className="services-product-btn-group"
          style={contactBtnGroupStyle}
        >
          <button
            className={servicesStyles.productBtnAnimatedClass}
            style={contactBtnStyle}
            onClick={() => navigate('/kontakt')}
          >
            {contactBtnText}
          </button>
        </div>
      </section>
    </div>
  );
}

export default Services;
