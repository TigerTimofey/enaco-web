import React from 'react';
import { navbarLabels } from '../utils/languages/navbar-languages.js';

function Contacts({ lang }) {
  return (
    <div>
      <h1>{navbarLabels[lang].contacts}</h1>
      {/* Add your Contacts page content here */}
    </div>
  );
}

export default Contacts;
