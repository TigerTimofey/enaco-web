import React from 'react'
import { homeLabels } from '../translations/navbar-languages.js';
import * as aboutStyles from './About-styles.js';
import { useNavigate } from 'react-router-dom';

function About({ lang }) {
  const t = homeLabels[lang]?.aboutPage || homeLabels.en.aboutPage;
  const navigate = useNavigate();

  return (
    <div>

      <div style={aboutStyles.aboutContainer}>
        <div style={aboutStyles.logoTitleRow} className="about-logo-title-row">
          <img src="/logo.svg" alt="Enaco Group OÜ" style={aboutStyles.aboutLogo} className="about-logo" />
          <div>
            <h1 style={aboutStyles.aboutTitle} className="about-title">
              {t.title}
            </h1>
            <h2 style={aboutStyles.aboutSubtitle}>

              <br />
              {t.specialization}
            </h2>
          </div>
        </div>

        <div style={aboutStyles.columnsRow} className="about-columns">
          <div style={aboutStyles.leftColumn}>
            <div style={aboutStyles.aboutSectionTitle} className="about-section-title">{t.directionsTitle}</div>
            <hr style={aboutStyles.hr} />
            <ul style={aboutStyles.aboutList} className="about-list">
              {t.directions.map((item, i) => (
                <React.Fragment key={i}>
                  <li style={aboutStyles.aboutListItem}>{item}</li>
                  {i < t.directions.length - 1 && <hr style={aboutStyles.hr} />}
                </React.Fragment>
              ))}
            </ul>
          </div>
          <div style={aboutStyles.divider} className="about-divider" />
          <div style={aboutStyles.rightColumn}>
            <div style={aboutStyles.aboutSectionTitle} className="about-section-title">{t.advantagesTitle}</div>
            <hr style={aboutStyles.hr} />
            <ul style={aboutStyles.aboutList} className="about-list">
              {t.advantages.map((item, i) => (
                <React.Fragment key={i}>
                  <li style={aboutStyles.aboutListItem}>{item}</li>
                  {i < t.advantages.length - 1 && <hr style={aboutStyles.hr} />}
                </React.Fragment>
              ))}
              
            </ul>
          </div>
        </div>

        <div style={aboutStyles.aboutCta}>
          {t.cta.split('?')[0]}?
          <span
            style={aboutStyles.aboutCtaLink}
            onClick={() => navigate('/kontakt')}
          >
            {lang === 'ru'
              ? 'Свяжитесь с нами!'
              : lang === 'ee'
                ? 'Võta meiega ühendust!'
                : 'Contact us!'}
          </span>
        </div>
        <div style={aboutStyles.aboutSpecialization}>{t.cta2}</div>
      </div>
      <style>{aboutStyles.responsiveStyle}</style>
    </div>
  );
}

export default About;
