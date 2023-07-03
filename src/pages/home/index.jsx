import React, { Component, useEffect, useState } from 'react';
import TopFilter from './Top/TopFilter';

import Products from './displayProducts/Products';
import HomeLanding from '../components/Home/home';
import Ad from '../components/Ad/Ad';
import goToTop from '../../assets/top.png'

export default function Home() {
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 500);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);

    }
  }, [])
  const goOnTop = () => {
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <HomeLanding />
      <TopFilter
      />
      <Products
      />
      <Ad />

      {showGoToTop && (
        <button style={{
          position: 'fixed',
          right: 20,
          bottom: 20,
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          border: 'none'
        }}
          onClick={goOnTop} ><img src={goToTop} alt='goToTop' width={30}
          /></button>
      )}
    </div>
  );
}
