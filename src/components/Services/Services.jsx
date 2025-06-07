import {  homeLabels, formLabels } from '../translations/navbar-languages.js';
import { businessProducts } from '../utils/bussines-services/bussines-services.js';
import { businessProducts as englishProducts } from '../utils/bussines-services/bussines-services.js';
import * as servicesStyles from './Services-styles.js';
import {
  orderFormTitleStyle,
  contactBtnGroupStyle,
  contactBtnStyle,
  formSubmitBtnAnimatedClass,
  formSubmitBtnAnimatedHoverStyle,
  formErrorTextStyle,
  productSectionStyle,
  productSectionInnerStyle,
  productCardsContainerStyle,
  productRowStyle,
  productImgStyle,
  productCardStyle,
  productTitleStyle,
  productDescStyle,
  productBtnAnimatedClass,
  responsiveStyle,
  thankYouSlider,
  thankYouSliderIcon,
  formSectionStyle,
  formOuterStyle,
  formRowStyle,
  formInputStyle,
  formTextareaStyle,
  formSubmitStyle,
  formMarginBlockStyle,
  formColumnInputWrapperStyle,
  formColumnTextareaWrapperStyle,
  formHiddenBlockStyle
} from './Services-styles.js';
import { useNavigate } from 'react-router-dom';
import React, { useState, useRef, useEffect } from 'react';
import emailjs from 'emailjs-com';

function getBtnText(name, lang) {

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


  const initialForm = {
    smark: 'Audi',
    smudel: 'A4',
    aasta: '2018',
    skub: '2000',
    mvoimsus: '110',
    mtahis: 'CAGA',
    kytus: 'Diesel',
    rek: '123ABC',
    detail: 'Turbocharger',
    nimi: 'John Doe',
    email: 'john@example.com',
    aadress: 'Tallinn, Estonia',
    telefon: '+3725555555',
    markused: 'Please contact me by email'
  };
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [showThankYou] = useState(false);
  const [sliderMsg, setSliderMsg] = useState(null);


  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateRequired = val => !!val && val.trim() !== '';


  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };


  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_REQUEST_ID;
  const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

  const handleSubmit = async e => {
    e.preventDefault();
    const newErrors = {};

    ['smark','smudel','aasta','skub','mvoimsus','mtahis','kytus','rek','detail','nimi','email','telefon'].forEach(field => {
      if (!validateRequired(form[field])) {
        newErrors[field] = labelsForm[field] + ' *';
      }
    });
    if (form.email && !validateEmail(form.email)) {
      newErrors.email = labelsForm.email + ' (invalid)';
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    let selectedProduct = null;
    let selectedProductEn = null;
    if (selectedProductId) {
      selectedProduct = products.find(p => p.id === selectedProductId);
      selectedProductEn = englishProducts.find(p => p.id === selectedProductId);
    }

    const templateParams = {
      ...form,
      productName: selectedProduct ? selectedProduct.name : '',
      productTitle: selectedProduct ? selectedProduct.title : '',
      time: new Date().toLocaleString(),
    };

    const logData = {
      ...form,
      productName: selectedProductEn ? selectedProductEn.name : '',
      productTitle: selectedProductEn ? selectedProductEn.title : ''
    };

    console.log('EmailJS payload (EN):', logData);

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      setForm(initialForm);
      setErrors({});
      setSliderMsg(homeLabels[lang]?.thankYouMessage || "Thank you! We have received your request and will contact you soon.");
      setTimeout(() => setSliderMsg(null), 3000);
    } catch (e) {
      setSliderMsg('Failed to send. Please try again later.');
      setTimeout(() => setSliderMsg(null), 3000);
      console.error('EmailJS error:', e);
      throw new Error('Email sending failed: ' + (e?.text || e?.message || e));
    }
  };

  const productRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([]);
  const [scrollDir, setScrollDir] = useState('down');
  const lastScrollY = useRef(window.scrollY);

  const contactBtnRef = useRef(null);
  const [showContactBtn, setShowContactBtn] = useState(false);

  useEffect(() => {
    function onScroll() {
      const currY = window.scrollY;
      setScrollDir(currY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currY;

      setVisibleCards(filteredProducts.map((_, idx) => {
        const el = productRefs.current[idx];
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.bottom > 0 && rect.top < window.innerHeight;
      }));

      if (contactBtnRef.current) {
        const rect = contactBtnRef.current.getBoundingClientRect();
        setShowContactBtn(rect.bottom > 40 && rect.top < window.innerHeight - 40);
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [filteredProducts.length]);

  const getCardAnimStyle = idx => {
    const translateY = visibleCards[idx]
      ? '0'
      : scrollDir === 'down'
        ? '60px'
        : '-60px';
    return {
      opacity: visibleCards[idx] ? 1 : 0,
      transform: `translateY(${translateY})`,
      pointerEvents: visibleCards[idx] ? 'auto' : 'none',
      transition: 'opacity 0.5s cubic-bezier(.4,0,.2,1), transform 0.5s cubic-bezier(.4,0,.2,1)',
    };
  };

  const getBtnAnimStyle = () => {
    const translateY = showContactBtn
      ? '0'
      : scrollDir === 'down'
        ? '60px'
        : '-60px';
    return {
      opacity: showContactBtn ? 1 : 0,
      transform: `translateY(${translateY})`,
      pointerEvents: showContactBtn ? 'auto' : 'none',
      transition: 'opacity 0.5s cubic-bezier(.4,0,.2,1), transform 0.5s cubic-bezier(.4,0,.2,1)',
    };
  };

  return (
    <div>
      <section style={productSectionStyle}>
        <div style={productSectionInnerStyle}>
          <div style={productCardsContainerStyle}>
            {filteredProducts.map((prod, idx) => (
              <div
                key={prod.id}
                ref={el => (productRefs.current[idx] = el)}
                className="services-product-row"
                style={{
                  ...productRowStyle,
                  ...getCardAnimStyle(idx),
                }}
              >
                <img
                  src={prod.img}
                  alt={prod.name}
                  className="services-product-img"
                  style={productImgStyle}
                />
                <div className="services-product-card" style={productCardStyle}>
                  <div>
                    <p style={productTitleStyle}>
                      {prod.title}
                    </p>
                    <p style={productDescStyle}>
                      {prod.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={formSectionStyle}>
        {sliderMsg && (
          <div
            className="thank-you-slider"
            style={thankYouSlider}
          >
            <svg width="32" height="32" viewBox="0 0 48 48" fill="none" style={thankYouSliderIcon}>
              <circle cx="24" cy="24" r="24" fill="#fff" opacity="0.18" />
              <path d="M15 25.5L22 32.5L34 18.5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span>
              {sliderMsg}
            </span>
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          action="/en/sale-and-repair-of-factory-reconditioned-turbos/#wpcf7-f16212-p16241-o1"
          method="post"
          className="wpcf7-form init default"
          aria-label="Contact form"
          noValidate
          data-status="init"
          style={formOuterStyle}
        >
          <h1 style={orderFormTitleStyle}>
            {homeLabels[lang].orderFormTitle}
          </h1>
          <div style={formHiddenBlockStyle}>
            <input type="hidden" name="_wpcf7" value="16212" />
            <input type="hidden" name="_wpcf7_version" value="6.0.6" />
            <input type="hidden" name="_wpcf7_locale" value="et" />
            <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f16212-p16241-o1" />
            <input type="hidden" name="_wpcf7_container_post" value="16241" />
            <input type="hidden" name="_wpcf7_posted_data_hash" value="" />
            <input type="hidden" name="_wpcf7_recaptcha_response" value="" />
          </div>
          <div style={formRowStyle}>

            <div style={formColumnInputWrapperStyle}>
              {errors.smark && (
                <span style={formErrorTextStyle}>{errors.smark}</span>
              )}
              <input
                style={{
                  ...formInputStyle,
                  borderColor: errors.smark ? '#e11d48' : formInputStyle.borderColor,
                  marginTop: errors.smark ? 18 : undefined
                }}
                type="text"
                name="smark"
                placeholder={labelsForm.smark}
                maxLength={400}
                required
                value={form.smark}
                onChange={handleChange}
              />
            </div>
            <div style={formColumnInputWrapperStyle}>
              {errors.smudel && (
                <span style={formErrorTextStyle}>{errors.smudel}</span>
              )}
              <input
                style={{
                  ...formInputStyle,
                  borderColor: errors.smudel ? '#e11d48' : formInputStyle.borderColor,
                  marginTop: errors.smudel ? 18 : undefined
                }}
                name="smudel"
                placeholder={labelsForm.smudel}
                maxLength={400}
                required
                value={form.smudel}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={formRowStyle}>
            <div style={formColumnInputWrapperStyle}>
              {errors.aasta && (
                <span style={formErrorTextStyle}>{errors.aasta}</span>
              )}
              <input
                style={{
                  ...formInputStyle,
                  borderColor: errors.aasta ? '#e11d48' : formInputStyle.borderColor,
                  marginTop: errors.aasta ? 18 : undefined
                }}
                type="text"
                name="aasta"
                placeholder={labelsForm.aasta}
                maxLength={400}
                required
                value={form.aasta}
                onChange={handleChange}
              />
            </div>
            <div style={formColumnInputWrapperStyle}>
              {errors.skub && (
                <span style={formErrorTextStyle}>{errors.skub}</span>
              )}
              <input
                style={{
                  ...formInputStyle,
                  borderColor: errors.skub ? '#e11d48' : formInputStyle.borderColor,
                  marginTop: errors.skub ? 18 : undefined
                }}
                type="text"
                name="skub"
                placeholder={labelsForm.skub}
                maxLength={400}
                required
                value={form.skub}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={formRowStyle}>
            <div style={formColumnInputWrapperStyle}>
              {errors.mvoimsus && (
                <span style={formErrorTextStyle}>{errors.mvoimsus}</span>
              )}
              <input
                style={{
                  ...formInputStyle,
                  borderColor: errors.mvoimsus ? '#e11d48' : formInputStyle.borderColor,
                  marginTop: errors.mvoimsus ? 18 : undefined
                }}
                type="text"
                name="mvoimsus"
                placeholder={labelsForm.mvoimsus}
                maxLength={400}
                required
                value={form.mvoimsus}
                onChange={handleChange}
              />
            </div>
            <div style={formColumnInputWrapperStyle}>
              {errors.mtahis && (
                <span style={formErrorTextStyle}>{errors.mtahis}</span>
              )}
              <input
                style={{
                  ...formInputStyle,
                  borderColor: errors.mtahis ? '#e11d48' : formInputStyle.borderColor,
                  marginTop: errors.mtahis ? 18 : undefined
                }}
                type="text"
                name="mtahis"
                placeholder={labelsForm.mtahis}
                maxLength={400}
                required
                value={form.mtahis}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={formRowStyle}>
            <div style={formColumnInputWrapperStyle}>
              {errors.kytus && (
                <span style={formErrorTextStyle}>{errors.kytus}</span>
              )}
              <input
                style={{
                  ...formInputStyle,
                  borderColor: errors.kytus ? '#e11d48' : formInputStyle.borderColor,
                  marginTop: errors.kytus ? 18 : undefined
                }}
                type="text"
                name="kytus"
                placeholder={labelsForm.kytus}
                maxLength={400}
                required
                value={form.kytus}
                onChange={handleChange}
              />
            </div>
            <div style={formColumnInputWrapperStyle}>
              {errors.rek && (
                <span style={formErrorTextStyle}>{errors.rek}</span>
              )}
              <input
                style={{
                  ...formInputStyle,
                  borderColor: errors.rek ? '#e11d48' : formInputStyle.borderColor,
                  marginTop: errors.rek ? 18 : undefined
                }}
                type="text"
                name="rek"
                placeholder={labelsForm.rek}
                maxLength={400}
                required
                value={form.rek}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>

            <div style={formColumnTextareaWrapperStyle}>
              {errors.detail && (
                <span style={formErrorTextStyle}>{errors.detail}</span>
              )}
              <textarea
                style={{
                  ...formTextareaStyle,
                  borderColor: errors.detail ? '#e11d48' : formTextareaStyle.borderColor,
                  marginTop: errors.detail ? 18 : undefined
                }}
                name="detail"
                placeholder={labelsForm.detail}
                maxLength={2000}
                rows={4}
                required
                value={form.detail}
                onChange={handleChange}
              />
            </div>
          </div>
          <h1 style={orderFormTitleStyle}>
            {homeLabels[lang].yourInfoTitle}
          </h1>
          <div style={formRowStyle}>
      
            <div style={formColumnInputWrapperStyle}>
              {errors.nimi && (
                <span style={formErrorTextStyle}>{errors.nimi}</span>
              )}
              <input
                style={{
                  ...formInputStyle,
                  borderColor: errors.nimi ? '#e11d48' : formInputStyle.borderColor,
                  marginTop: errors.nimi ? 18 : undefined
                }}
                type="text"
                name="nimi"
                placeholder={labelsForm.nimi}
                maxLength={400}
                required
                value={form.nimi}
                onChange={handleChange}
              />
            </div>
            <div style={formColumnInputWrapperStyle}>
              {errors.email && (
                <span style={formErrorTextStyle}>{errors.email}</span>
              )}
              <input
                style={{
                  ...formInputStyle,
                  borderColor: errors.email ? '#e11d48' : formInputStyle.borderColor,
                  marginTop: errors.email ? 18 : undefined
                }}
                type="email"
                name="email"
                placeholder={labelsForm.email}
                maxLength={400}
                required
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={formRowStyle}>

            <div style={formColumnInputWrapperStyle}>
              {errors.aadress && (
                <span style={formErrorTextStyle}>{errors.aadress}</span>
              )}
              <input
                style={{
                  ...formInputStyle,
                  borderColor: errors.aadress ? '#e11d48' : formInputStyle.borderColor,
                  marginTop: errors.aadress ? 18 : undefined
                }}
                type="text"
                name="aadress"
                placeholder={labelsForm.aadress}
                maxLength={400}
                value={form.aadress}
                onChange={handleChange}
              />
            </div>
            <div style={formColumnInputWrapperStyle}>
              {errors.telefon && (
                <span style={formErrorTextStyle}>{errors.telefon}</span>
              )}
              <input
                style={{
                  ...formInputStyle,
                  borderColor: errors.telefon ? '#e11d48' : formInputStyle.borderColor,
                  marginTop: errors.telefon ? 18 : undefined
                }}
                type="text"
                name="telefon"
                placeholder={labelsForm.telefon}
                maxLength={400}
                required
                value={form.telefon}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>

            <div style={formColumnTextareaWrapperStyle}>
              {errors.markused && (
                <span style={formErrorTextStyle}>{errors.markused}</span>
              )}
              <textarea
                style={{
                  ...formTextareaStyle,
                  borderColor: errors.markused ? '#e11d48' : formTextareaStyle.borderColor,
                  marginTop: errors.markused ? 18 : undefined
                }}
                name="markused"
                placeholder={labelsForm.markused}
                maxLength={2000}
                rows={4}
                value={form.markused}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={formMarginBlockStyle}>
          </div>
          <div>
            <input
              className={`wpcf7-form-control wpcf7-submit has-spinner ${formSubmitBtnAnimatedClass}`}
              type="submit"
              value={labelsForm.send}
              style={formSubmitStyle}
            />
          </div>
        </form>
        {!showThankYou && (
          <div
            ref={contactBtnRef}
            className="services-product-btn-group"
            style={{
              ...contactBtnGroupStyle,
              ...getBtnAnimStyle(),
            }}
          >
            <button
              className={productBtnAnimatedClass}
              style={contactBtnStyle}
              onClick={() => navigate('/kontakt')}
            >
              {contactBtnText}
            </button>
          </div>
        )}
      </section>

      <style>{servicesStyles.productBtnAnimatedHoverStyle}</style>
      <style>{formSubmitBtnAnimatedHoverStyle}</style>
      <style>{responsiveStyle}</style>
    </div>
  );
}

export default Services;
