import React from 'react';
import { navbarLabels } from '../utils/languages/navbar-languages.js';

function Guarantees({ lang }) {
  return (
    <div>
      <h1>{navbarLabels[lang].guarantees}</h1>
      {/* Add your Guarantees page content here */}
    </div>
  );
}

export default Guarantees;
