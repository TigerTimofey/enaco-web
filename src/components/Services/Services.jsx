import {  homeLabels, formLabels } from '../translations/navbar-languages.js';
import { businessProducts } from '../utils/bussines-services/bussines-services.js';
import * as servicesStyles from './Services-styles.js';
import { orderFormTitleStyle, contactBtnGroupStyle, contactBtnStyle, formSubmitBtnAnimatedClass, formSubmitBtnAnimatedHoverStyle, formErrorTextStyle } from './Services-styles.js';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

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

  // --- Add state for form fields and errors ---
  const initialForm = {
    smark: '', smudel: '', aasta: '', skub: '', mvoimsus: '', mtahis: '', kytus: '', rek: '',
    detail: '', nimi: '', email: '', aadress: '', telefon: '', markused: ''
  };
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [showThankYou, setShowThankYou] = useState(false);

  // --- Validation helpers ---
  const validateEmail = email => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validateRequired = val => !!val && val.trim() !== '';

  // --- Handle input change ---
  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  // --- Handle form submit ---
  const handleSubmit = e => {
    e.preventDefault();
    const newErrors = {};
    // Required fields
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
    if (selectedProductId) {
      selectedProduct = products.find(p => p.id === selectedProductId);
    }
    const logData = {
      ...form,
      productName: selectedProduct ? selectedProduct.name : '',
      productTitle: selectedProduct ? selectedProduct.title : ''
    };
    console.log('Order form submitted:', logData);

    setShowThankYou(true);
    setForm(initialForm);
    setTimeout(() => {
      setShowThankYou(false);
      setErrors({});
    }, 3500);
  };

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
        {showThankYou ? (
          <div
            style={{
              ...servicesStyles.formOuterStyle,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              minHeight: 420,
              maxWidth: 650,
              margin: '0 auto',
              background: 'linear-gradient(90deg, #f0fff4 0%, #e0ffe8 100%)',
              border: '1.5px solid #22c55e',
              boxShadow: '0 2px 12px 0 rgba(34,197,94,0.10)',
              animation: 'fadeInScale 0.7s cubic-bezier(.4,0,.2,1), pulseSuccess 1.8s 0.2s 1',
              willChange: 'transform, opacity',
              transition: 'box-shadow 0.3s, background 0.3s'
            }}
          >
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" style={{ marginBottom: 18, animation: 'popIn 0.5s cubic-bezier(.4,0,.2,1)' }}>
              <circle cx="24" cy="24" r="24" fill="#22c55e" />
              <path d="M15 25.5L22 32.5L34 18.5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span style={{
              color: '#22c55e',
              fontWeight: 700,
              fontSize: 22,
              textAlign: 'center',
              letterSpacing: '0.01em',
              animation: 'slideUpFade 0.7s 0.2s both'
            }}>
              {homeLabels[lang]?.thankYouMessage || "Thank you! We have received your request and will contact you soon."}
            </span>
          </div>
        ) : (
        <form
          onSubmit={handleSubmit}
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
            {/* smark left, smudel right */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {errors.smark && (
                <span style={formErrorTextStyle}>{errors.smark}</span>
              )}
              <input
                style={{
                  ...servicesStyles.formInputStyle,
                  borderColor: errors.smark ? '#e11d48' : servicesStyles.formInputStyle.borderColor,
                  marginTop: errors.smark ? 18 : undefined
                }}
                type="text"
                name="smark"
                placeholder={labelsForm.smark}
                maxLength={400}
                // required
                value={form.smark}
                onChange={handleChange}
              />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {errors.smudel && (
                <span style={formErrorTextStyle}>{errors.smudel}</span>
              )}
              <input
                style={{
                  ...servicesStyles.formInputStyle,
                  borderColor: errors.smudel ? '#e11d48' : servicesStyles.formInputStyle.borderColor,
                  marginTop: errors.smudel ? 18 : undefined
                }}
                name="smudel"
                placeholder={labelsForm.smudel}
                maxLength={400}
                // required
                value={form.smudel}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={servicesStyles.formRowStyle}>
            {/* aasta left, skub right */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {errors.aasta && (
                <span style={formErrorTextStyle}>{errors.aasta}</span>
              )}
              <input
                style={{
                  ...servicesStyles.formInputStyle,
                  borderColor: errors.aasta ? '#e11d48' : servicesStyles.formInputStyle.borderColor,
                  marginTop: errors.aasta ? 18 : undefined
                }}
                type="text"
                name="aasta"
                placeholder={labelsForm.aasta}
                maxLength={400}
                // required
                value={form.aasta}
                onChange={handleChange}
              />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {errors.skub && (
                <span style={formErrorTextStyle}>{errors.skub}</span>
              )}
              <input
                style={{
                  ...servicesStyles.formInputStyle,
                  borderColor: errors.skub ? '#e11d48' : servicesStyles.formInputStyle.borderColor,
                  marginTop: errors.skub ? 18 : undefined
                }}
                type="text"
                name="skub"
                placeholder={labelsForm.skub}
                maxLength={400}
                // required
                value={form.skub}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={servicesStyles.formRowStyle}>
            {/* mvoimsus left, mtahis right */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {errors.mvoimsus && (
                <span style={formErrorTextStyle}>{errors.mvoimsus}</span>
              )}
              <input
                style={{
                  ...servicesStyles.formInputStyle,
                  borderColor: errors.mvoimsus ? '#e11d48' : servicesStyles.formInputStyle.borderColor,
                  marginTop: errors.mvoimsus ? 18 : undefined
                }}
                type="text"
                name="mvoimsus"
                placeholder={labelsForm.mvoimsus}
                maxLength={400}
                // required
                value={form.mvoimsus}
                onChange={handleChange}
              />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {errors.mtahis && (
                <span style={formErrorTextStyle}>{errors.mtahis}</span>
              )}
              <input
                style={{
                  ...servicesStyles.formInputStyle,
                  borderColor: errors.mtahis ? '#e11d48' : servicesStyles.formInputStyle.borderColor,
                  marginTop: errors.mtahis ? 18 : undefined
                }}
                type="text"
                name="mtahis"
                placeholder={labelsForm.mtahis}
                maxLength={400}
                // required
                value={form.mtahis}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={servicesStyles.formRowStyle}>
            {/* kytus left, rek right */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {errors.kytus && (
                <span style={formErrorTextStyle}>{errors.kytus}</span>
              )}
              <input
                style={{
                  ...servicesStyles.formInputStyle,
                  borderColor: errors.kytus ? '#e11d48' : servicesStyles.formInputStyle.borderColor,
                  marginTop: errors.kytus ? 18 : undefined
                }}
                type="text"
                name="kytus"
                placeholder={labelsForm.kytus}
                maxLength={400}
                // required
                value={form.kytus}
                onChange={handleChange}
              />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {errors.rek && (
                <span style={formErrorTextStyle}>{errors.rek}</span>
              )}
              <input
                style={{
                  ...servicesStyles.formInputStyle,
                  borderColor: errors.rek ? '#e11d48' : servicesStyles.formInputStyle.borderColor,
                  marginTop: errors.rek ? 18 : undefined
                }}
                type="text"
                name="rek"
                placeholder={labelsForm.rek}
                maxLength={400}
                // required
                value={form.rek}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            {/* detail textarea */}
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {errors.detail && (
                <span style={formErrorTextStyle}>{errors.detail}</span>
              )}
              <textarea
                style={{
                  ...servicesStyles.formTextareaStyle,
                  borderColor: errors.detail ? '#e11d48' : servicesStyles.formTextareaStyle.borderColor,
                  marginTop: errors.detail ? 18 : undefined
                }}
                name="detail"
                placeholder={labelsForm.detail}
                maxLength={2000}
                rows={4}
                // required
                value={form.detail}
                onChange={handleChange}
              />
            </div>
          </div>
          <h1 style={orderFormTitleStyle}>
            {homeLabels[lang].yourInfoTitle}
          </h1>
          <div style={servicesStyles.formRowStyle}>
            {/* nimi left, email right */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {errors.nimi && (
                <span style={formErrorTextStyle}>{errors.nimi}</span>
              )}
              <input
                style={{
                  ...servicesStyles.formInputStyle,
                  borderColor: errors.nimi ? '#e11d48' : servicesStyles.formInputStyle.borderColor,
                  marginTop: errors.nimi ? 18 : undefined
                }}
                type="text"
                name="nimi"
                placeholder={labelsForm.nimi}
                maxLength={400}
                // required
                value={form.nimi}
                onChange={handleChange}
              />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {errors.email && (
                <span style={formErrorTextStyle}>{errors.email}</span>
              )}
              <input
                style={{
                  ...servicesStyles.formInputStyle,
                  borderColor: errors.email ? '#e11d48' : servicesStyles.formInputStyle.borderColor,
                  marginTop: errors.email ? 18 : undefined
                }}
                type="email"
                name="email"
                placeholder={labelsForm.email}
                maxLength={400}
                // required
                value={form.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div style={servicesStyles.formRowStyle}>
            {/* aadress left, telefon right */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {errors.aadress && (
                <span style={formErrorTextStyle}>{errors.aadress}</span>
              )}
              <input
                style={{
                  ...servicesStyles.formInputStyle,
                  borderColor: errors.aadress ? '#e11d48' : servicesStyles.formInputStyle.borderColor,
                  marginTop: errors.aadress ? 18 : undefined
                }}
                type="text"
                name="aadress"
                placeholder={labelsForm.aadress}
                maxLength={400}
                // required
                value={form.aadress}
                onChange={handleChange}
              />
            </div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {errors.telefon && (
                <span style={formErrorTextStyle}>{errors.telefon}</span>
              )}
              <input
                style={{
                  ...servicesStyles.formInputStyle,
                  borderColor: errors.telefon ? '#e11d48' : servicesStyles.formInputStyle.borderColor,
                  marginTop: errors.telefon ? 18 : undefined
                }}
                type="text"
                name="telefon"
                placeholder={labelsForm.telefon}
                maxLength={400}
                // required
                value={form.telefon}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            {/* markused textarea */}
            <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {errors.markused && (
                <span style={formErrorTextStyle}>{errors.markused}</span>
              )}
              <textarea
                style={{
                  ...servicesStyles.formTextareaStyle,
                  borderColor: errors.markused ? '#e11d48' : servicesStyles.formTextareaStyle.borderColor,
                  marginTop: errors.markused ? 18 : undefined
                }}
                name="markused"
                placeholder={labelsForm.markused}
                maxLength={2000}
                rows={4}
                // required
                value={form.markused}
                onChange={handleChange}
              />
            </div>
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
        )}
        {!showThankYou && (
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
        )}
        <style>
          {`
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
          `}
        </style>
      </section>
    </div>
  );
}

export default Services;
