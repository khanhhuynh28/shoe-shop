import React, { Component, useEffect, useState } from 'react';
import TopFilter from './Top/TopFilter';

import Products from './displayProducts/Products';
import HomeLanding from '../components/Home/home';
import Ad from '../components/Ad/Ad';

export default function Home() {
  const [showGoToTop, setShowGoToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowGoToTop(window.scrollY >= 500);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

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
          bottom: 20
        }}>go to top</button>
      )}
    </div>
  );
}
