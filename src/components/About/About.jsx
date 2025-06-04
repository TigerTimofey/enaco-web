import React from 'react';
import { navbarLabels } from '../utils/languages/navbar-languages.js';

function About({ lang }) {
  return (
    <div>
      <h1>{navbarLabels[lang].about}</h1>
      {/* Add your About page content here */}
    </div>
  );
}

export default About;
