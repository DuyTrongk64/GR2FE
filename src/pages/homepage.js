import React from 'react';
import { Header } from '../components/header/header';
import Footer from '../components/footer/footer';
import Login from '../components/login/login';

const Homepage = () => {
  return (
    <div style={{ margin: 0, padding: 0, boxSizing: 'border-box' }}>
      <Header />
      <img src='homepic.png' style={{ width: '100%', display: 'block' }} alt='Home Image' />
      <Footer />
    </div>
  );
};

export default Homepage;
