import React from 'react';
import { navbarLabels } from '../translations/navbar-languages.js';

function Guarantees({ lang }) {
  return (
    <div>
      <h1>{navbarLabels[lang].guarantees}</h1>
      {/* Add your Guarantees page content here */}
    </div>
  );
}

export default Guarantees;
