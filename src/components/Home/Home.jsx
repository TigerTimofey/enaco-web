import React from 'react';
import { navbarLabels } from '../utils/languages/navbar-languages.js';

function Home({ lang }) {
  return (
    <div>
      <h1>{navbarLabels[lang].home}</h1>
      {/* Add your Home page content here */}
    </div>
  );
}

export default Home;
