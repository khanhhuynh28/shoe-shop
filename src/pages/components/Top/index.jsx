import React, { Component, useEffect, useState } from 'react';
import TopFilter from './TopFilter/TopFilter';

import Products from '../Product/Products';
import HomeLanding from '../Home/Home';
import Ad from '../Ad/Ad';
import goToTop from '../../../assets/top.png'

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
    <div >
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
          backgroundColor: '#e2e8f0',
          border: 'none',
          borderRadius: 20,
          boxShadow: '1px 2px 9px 0 rgb(0 0 0 / 30%)'

        }}
          onClick={goOnTop} ><img src={goToTop} alt='goToTop' style={{ width: 30 }}
          /></button>
      )}
    </div>
  );
}
