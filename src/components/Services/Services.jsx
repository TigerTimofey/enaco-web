import React from 'react';
import { navbarLabels } from '../utils/languages/navbar-languages.js';

function Services({ lang }) {
  return (
    <div>
      <h1>{navbarLabels[lang].services}</h1>
      {/* Add your Services page content here */}
    </div>
  );
}

export default Services;
