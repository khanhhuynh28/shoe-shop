import React, { Component } from 'react';
import TopFilter from './Top/TopFilter';

import Products from './displayProducts/Products';
import HomeLanding from '../components/Home/home';
import Ad from '../components/Ad/Ad';

export default function Home() {
  // state = {
  //   selectedCategory: 0,
  //   priceRange: 0,
  // };

  // handleChangePrice = (e) => {
  //   this.setState({ priceRange: e.target.value });
  // }
  // handleChangeCategory = (e) => {
  //   this.setState({ selectedCategory: e.target.value });
  // }


  // const { changeCart, inputSearch } = this.props;
  // const { selectedCategory, priceRange } = this.state;
  return (
    <div>
      <HomeLanding />
      <TopFilter
      //  handleChangePrice={this.handleChangePrice} handleChangeCategory={this.handleChangeCategory}
      />
      <Products
      // selectedCategory={selectedCategory} priceRange={priceRange} inputSearch={inputSearch} changeCart={changeCart} 
      />
      <Ad />
    </div>
  );
}
