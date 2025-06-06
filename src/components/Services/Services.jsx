import { navbarLabels, homeLabels } from '../translations/navbar-languages.js';
import { businessProducts } from '../utils/bussines-services/bussines-services.js';

const servicesHeaderOuter = {
  width: '100%',
  maxWidth: 1200,
  margin: '40px auto 32px auto',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: 84
};

const servicesHeaderTitle = {
  fontSize: 44,
  fontWeight: 800,
  color: '#555555',
  letterSpacing: '0.04em',
  margin: 0,
  textAlign: 'center',
  textTransform: 'uppercase',
  fontFamily: "'Nunito', 'Poppins', 'Inter', system-ui, sans-serif"
};

const productSectionStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '100%',
};

const productSectionInnerStyle = {
  width: '100%',
  textAlign: 'center'
};

const productCardsContainerStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: 38,
  width: '100%',
  alignItems: 'center',
};

const productRowStyle = {
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  maxWidth: 1100,
  minHeight: 260,
  margin: '0 auto',
  position: 'relative',
  gap: 0,
  background: 'none',
  borderRadius: 0,
  boxShadow: 'none',
  padding: 0,
};

const productImgStyle = {
  width: 300,
  height: 300,
  objectFit: 'contain',
  borderRadius: 0,
  marginRight: 0,
  alignSelf: 'center',
  flexShrink: 0,
  background: 'none',
  boxShadow: 'none',
  display: 'block',
};

const productCardStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  background: '#fff',
  borderRadius: 22,
  boxShadow: '0 2px 12px 0 rgba(60,60,60,0.09)',
  padding: '2.5rem 2.5rem',
  // minHeight: 220,
  maxWidth: 700,
  marginLeft: 32,
  flex: 1,
  minWidth: 0,
  textAlign: 'left',
  position: 'relative',
  gap: 0,
};

const productTitleStyle = {
  fontWeight: 800,
  fontSize: '1.45em',
  marginBottom: 10,
  color: '#e11d48',
  textTransform: 'uppercase',
  letterSpacing: '0.01em',
  textAlign: 'center'
};

const productDescStyle = {
  color: '#23272f',
  fontSize: '1.08em',
  marginBottom: 18,
  fontWeight: 500,
  lineHeight: 1.7,
  whiteSpace: 'pre-line',
  textAlign: 'center',
};

const productBtnAnimatedHoverStyle = `
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

const responsiveStyle = `
@media (max-width: 900px) {
  .services-product-row {
    flex-direction: column !important;
    align-items: center !important;
    padding: 0 !important;
    min-height: unset !important;
    max-width: 98vw !important;
    width: 98vw !important;
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
    margin-top: 16px !important;
  }
}
`;

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

  // If selectedProductId is set, filter to show only that product
  const filteredProducts = selectedProductId
    ? products.filter(p => p.id === selectedProductId)
    : products;

  return (
    <div>
      <div style={servicesHeaderOuter}>
        <h1 style={servicesHeaderTitle}>
          {navbarLabels[lang].services}
        </h1>
      </div>
      <section style={productSectionStyle}>
        <div style={productSectionInnerStyle}>
          <div style={productCardsContainerStyle}>
            {filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="services-product-row"
                style={productRowStyle}
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
                  {/* <div className="services-product-btn-group" style={productBtnGroupStyle}>
                    <button
                      className={productBtnAnimatedClass}
                      style={productBtnStyle}
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
        {productBtnAnimatedHoverStyle}
        {responsiveStyle}
      </style>
    </div>
  );
}

export default Services;
