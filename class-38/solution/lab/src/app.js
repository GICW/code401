import React from 'react';

import CssBaseline from '@material-ui/core/CssBaseline';

import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Storefront from './components/storefront/storefront.js';

export default props => {
  return (
    <>
      <CssBaseline />
      <Header />
      <Storefront />
      <Footer />
    </>
  )
};
