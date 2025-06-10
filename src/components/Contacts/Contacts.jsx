import React, { useState, useEffect, useRef } from 'react';
import { businessData } from '../utils/bussines-data/bussines-data.js';
import { contactFormLabels } from '../translations/navbar-languages.js';
import * as contactStyles from './Contacts-styles.js';
import emailjs from 'emailjs-com';


function Contacts({ lang }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [labels, setLabels] = useState(contactFormLabels[lang] || contactFormLabels.en);
  const [sliderMsg, setSliderMsg] = useState(null);

  useEffect(() => {
    setLabels(contactFormLabels[lang] || contactFormLabels.en);

    setErrors(prevErrors => {
      const newErrors = {};
      if (prevErrors.email) newErrors.email = (contactFormLabels[lang] || contactFormLabels.en).invalidEmail;
      if (prevErrors.phone) newErrors.phone = (contactFormLabels[lang] || contactFormLabels.en).invalidPhone;
      if (prevErrors.name) newErrors.name = (contactFormLabels[lang] || contactFormLabels.en).invalidName;
      if (prevErrors.message) newErrors.message = (contactFormLabels[lang] || contactFormLabels.en).invalidMessage;
      return newErrors;
    });
  }, [lang]);

  const contactHeading = labels.heading;

  const validateEmail = email =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validatePhone = phone =>
    /^[0-9+\-\s()]{6,}$/.test(phone);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const EMAILJS_USER_ID = import.meta.env.VITE_EMAILJS_USER_ID;

  const handleSubmit = async e => {
    e.preventDefault();
    const newErrors = {};
    if (!validateEmail(form.email)) {
      newErrors.email = labels.invalidEmail;
    }
    if (!validatePhone(form.phone)) {
      newErrors.phone = labels.invalidPhone;
    }
    if (!form.name.trim()) {
      newErrors.name = labels.invalidName;
    }
    if (!form.message.trim()) {
      newErrors.message = labels.invalidMessage;
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    const templateParams = {
      from_name: form.name,
      from_email: form.email,
      from_phone: form.phone,
      message: form.message,
      time: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_USER_ID
      );
      setSliderMsg(labels.thankYou);
      setForm({ name: '', email: '', phone: '', message: '' });
      setErrors({});
      setTimeout(() => {
        setSliderMsg(null);
      }, 3000);
    } catch (e) {
      setSliderMsg('Failed to send. Please try again later.');
      setTimeout(() => setSliderMsg(null), 3000);
      console.error('EmailJS error:', e);
      throw new Error('Email sending failed: ' + (e?.text || e?.message || e));
    }
  };

  const cardRefs = useRef([]);
  const [visibleCards, setVisibleCards] = useState([false, false]);
  const [scrollDir, setScrollDir] = useState('down');
  const lastScrollY = useRef(window.scrollY);

  useEffect(() => {
    function onScroll() {
      const currY = window.scrollY;
      setScrollDir(currY > lastScrollY.current ? 'down' : 'up');
      lastScrollY.current = currY;

      setVisibleCards([0, 1].map(idx => {
        const el = cardRefs.current[idx];
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.bottom > 40 && rect.top < window.innerHeight - 40;
      }));
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

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

  return (
    <div>
      {sliderMsg && (
        <div
          className="thank-you-slider"
          style={contactStyles.thankYouSlider}
        >
          <svg width="32" height="32" viewBox="0 0 48 48" fill="none" style={contactStyles.thankYouSliderIcon}>
            <circle cx="24" cy="24" r="24" fill="#fff" opacity="0.18" />
            <path d="M15 25.5L22 32.5L34 18.5" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>
            {sliderMsg}
          </span>
        </div>
      )}
      <div
        className="contacts-grid"
        style={contactStyles.contactsGrid}
      >
        <div
          ref={el => (cardRefs.current[0] = el)}
          className="contacts-info"
          style={{
            ...contactStyles.contactsInfo,
            ...getCardAnimStyle(0),
          }}
        >
          <img
            src="/logo.svg"
            alt="Enaco Logo"
            style={contactStyles.logoImg}
          />
          <hr style={contactStyles.hr} />
          <div style={contactStyles.infoText}>
            <div style={contactStyles.infoCompany}>{businessData.contactCompany}</div>
            <hr style={contactStyles.hr} />
            <div>{businessData.address}</div>
            <hr style={contactStyles.hr} />
            <div>
              <a href={`tel:${businessData.phone}`} style={contactStyles.infoLink}>
                {businessData.phone}
              </a>
            </div>
            <hr style={contactStyles.hr} />
            <div>
              <a href={`mailto:${businessData.contactEmail}`} style={contactStyles.infoLink}>
                {businessData.contactEmail}
              </a>
            </div>
            <hr style={contactStyles.hr} />
            <div>{businessData.contactRegCode}</div>
            <hr style={contactStyles.hr} />
            <div>{businessData.contactVat}</div>
          </div>
        </div>
        <div
          ref={el => (cardRefs.current[1] = el)}
          className="contacts-form"
          style={{
            ...contactStyles.contactsForm,
            ...getCardAnimStyle(1),
          }}
        >
          <h2 style={contactStyles.formTitle}>
            {contactHeading}
          </h2>
          <div style={contactStyles.formOuter}>
            <form
              onSubmit={handleSubmit}
              style={contactStyles.form}
              noValidate
            >
              <input
                type="text"
                name="name"
                placeholder={labels.name}
                value={form.name}
                onChange={handleChange}
                required
                style={{
                  ...contactStyles.input,
                  borderColor: errors.name ? '#e11d48' : contactStyles.input.borderColor
                }}
              />
              {errors.name && (
                <span style={contactStyles.errorText}>{errors.name}</span>
              )}
              <input
                type="email"
                name="email"
                placeholder={labels.email}
                value={form.email}
                onChange={handleChange}
                required
                style={{
                  ...contactStyles.input,
                  borderColor: errors.email ? '#e11d48' : contactStyles.input.borderColor
                }}
              />
              {errors.email && (
                <span style={contactStyles.errorText}>{errors.email}</span>
              )}
              <input
                type="tel"
                name="phone"
                placeholder={labels.phone}
                value={form.phone}
                onChange={handleChange}
                required
                style={{
                  ...contactStyles.input,
                  borderColor: errors.phone ? '#e11d48' : contactStyles.input.borderColor
                }}
              />
              {errors.phone && (
                <span style={contactStyles.errorText}>{errors.phone}</span>
              )}
              <textarea
                name="message"
                placeholder={labels.message}
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                style={{
                  ...contactStyles.textarea,
                  borderColor: errors.message ? '#e11d48' : contactStyles.textarea.borderColor
                }}
              />
              {errors.message && (
                <span style={contactStyles.errorText}>{errors.message}</span>
              )}
              <button
                type="submit"
                style={contactStyles.submitBtn}
              >
                {labels.send}
              </button>
            </form>
                <hr style={contactStyles.hr} />
          </div>
          
        </div>
      </div>
      <div style={contactStyles.mapOuter}>
        <div style={contactStyles.mapInner}>
          <iframe
            title="Allika tee 7, Peetri, Estonia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1998.4215394815778!2d24.829776076751147!3d59.395353774623695!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4692e18f2f0b3f4f%3A0x5c659f8b40a19101!2sAllika%20tee%202%2C%20Peetri%2C%20Estonia!5e0!3m2!1sen!2see!4v1717679259095!5m2!1sen!2see"
            width="100%"
            height="320"
            style={contactStyles.mapIframe}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
      <style>
        {contactStyles.responsiveAndKeyframes}
      </style>
    </div>
  );
}

export default Contacts;
