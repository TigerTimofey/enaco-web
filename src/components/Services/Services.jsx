import { navbarLabels, homeLabels } from '../translations/navbar-languages.js';
import { businessProducts } from '../utils/bussines-services/bussines-services.js';
import * as servicesStyles from './Services-styles.js';

function getBtnText(name, lang) {
  if (lang === 'ee') return `Täida vorm ${name}`;
  if (lang === 'ru') return `Заполнить форму ${name}`;
  return `Fill form for ${name}`;
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

  return (
    <div>
      <div style={servicesStyles.servicesHeaderOuter}>
        <h1 style={servicesStyles.servicesHeaderTitle}>
          {navbarLabels[lang].services}
        </h1>
      </div>
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
                  {/* <div className="services-product-btn-group" style={servicesStyles.productBtnGroupStyle}>
                    <button
                      className={servicesStyles.productBtnAnimatedClass}
                      style={servicesStyles.productBtnStyle}
                      onClick={() => window.location.href = '/kontakt'}
                    >
                      {prod.btn}
                    </button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <style>
        {servicesStyles.productBtnAnimatedHoverStyle}
        {servicesStyles.responsiveStyle}
      </style>
    </div>
  );
}

export default Services;
