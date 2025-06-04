import React from 'react';
import { homeLabels } from '../translations/navbar-languages.js';
import { useNavigate } from 'react-router-dom';

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

  return (
    <div>

      <section
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: 360,
          background: '#f8f6f1',
          padding: '3rem 0 2rem 0',
          marginTop: 80
        }}
      >
        <div
          style={{
            maxWidth: 700,
            margin: '0 auto',
            textAlign: 'center',
            padding: '2.2rem',
            background: '#fff',
            borderRadius: 18,
            boxShadow: '0 2px 8px 0 rgba(60,60,60,0.07)',
          }}
        >
          <h1 style={{ fontSize: '2.5rem', fontWeight: 700, marginBottom: 16, color: '#555' }}>
            {labels.heroTitle}
          </h1>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 500, color: '#555', marginBottom: 32 }}>
            {labels.heroSubtitle}
          </h2>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <button
              style={{
                padding: '0.7em 2em',
                borderRadius: 8,
                background: '#e11d48',
                color: '#fff',
                fontWeight: 600,
                fontSize: '1.1em',
                border: 'none',
                cursor: 'pointer',
                boxShadow: '0 1px 4px 0 rgba(60,60,60,0.09)',
              }}
              onClick={() => navigate('/kontakt')}
            >
              {labels.contactBtn}
            </button>
          </div>
        </div>
      </section>

      {/* Product Info Section */}
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <div style={{ maxWidth: 1200, width: '100%', textAlign: 'center' }}>
          <div style={{
            display: 'flex',
            gap: 32,
            flexWrap: 'wrap',
            justifyContent: 'center',
            width: '100%',
            maxWidth: 1200,
          }}>
            {products.map((prod) => (
         <div key={prod.id} style={{
  background: '#fff',
  borderRadius: 16,
  boxShadow: '0 1px 4px 0 rgba(60,60,60,0.09)',
  padding: '2rem 1.5rem',
  minWidth: 260,
  maxWidth: 340,
  flex: '1 1 260px',
  textAlign: 'center',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  height: 'auto', 
  position: 'relative', 
}}>
  <img
    src={prod.img}
    alt={prod.name}
    style={{
      maxWidth: '100%',
      margin: '0 auto 18px auto',
      display: 'block'
    }}
  />
  <p style={{ fontWeight: 700, fontSize: '1.15em', marginBottom: 6, color: 'black' }}>
    {prod.title}
  </p>
  <p style={{ color: '#555', fontSize: '1em', marginBottom: 18 }}>
    {prod.desc}
  </p>

  <div style={{ marginTop: 'auto', display: 'flex', gap: 16, justifyContent: 'center' }}>
    <button
      style={{
        padding: '0.4em 1.2em',
        borderRadius: 8,
        color: '#fff',
        fontWeight: 600,
        fontSize: '1.1em',
        border: 'none',
        cursor: 'pointer',
        boxShadow: '0 1px 4px 0 rgba(60,60,60,0.09)',
        background: '#e11d48',  // Example of a custom background color for the button
      }}
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
    </div>
  );
}

export default Home;
