import React, { Component, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import ProductCard from '../../components/Product/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '../../../stores/action/product.action';
import { Pagination } from 'antd';
import { changePagination } from '../../../stores/slice/product.slice';

export default function Products() {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.product);
  const productPagination = useSelector((state) => state.product.pagination);

  useEffect(() => {
    dispatch(fetchProductList({ page: 1, limit: 12 }));
  }, []);

  // state = {
  //   products: [],
  //   filteredProducts: [],
  // };
  // componentDidMount() {
  //   axios.get('/api/v1/getProducts').then(res => this.setState({ products: res.data, filteredProducts: res.data }));
  //   !localStorage.getItem('products') && localStorage.setItem('products', JSON.stringify([]));
  // }
  // checkPrice = (priceRange, product) => {
  //   if (priceRange) {
  //     if (priceRange === '100<') {
  //       return product.price < 100;
  //     } else if (priceRange === '100 - 200') {
  //       return product.price >= 100 && product.price < 200;
  //     } else if (priceRange === '200>') {
  //       return product.price >= 200;
  //     } else {
  //       return true;
  //     }
  //   }
  // }

  // checkCategory = (selectedCategory, product) => {
  //   if (selectedCategory === 'Filter by Category' || selectedCategory.trim() === '') {
  //     return true;
  //   }
  //   return product.category === selectedCategory.toLowerCase();

  // }

  //   const { products } = this.state;
  //   const { changeCart, inputSearch, priceRange, selectedCategory } = this.props;
  return <div className='home-products'>
    {/* {products.filter((product => (inputSearch ? product.name.toLowerCase().includes(inputSearch.toLowerCase()) : true) &&
        (priceRange ? this.checkPrice(priceRange, product) : true) && (selectedCategory ? this.checkCategory(selectedCategory, product) : true)))
        .map(({ id, name, price, image, category }) => <ProductCard changeCart={changeCart} key={id} id={id} name={name} price={+price} imgLink={image} category={category} buttons={'Add to cart'} />)} */}
    <div className='products'>
      {
        productList.map((item) => <ProductCard key={item} id={item.id} options={item.options} cost={item.cost} name={item.name} price={item.price} brand={item.brand} category={item.category} sold={item.sold} thumbnail={item.thumbnail} />)
      }
    </div>
    <div className='pagination'>
      <Pagination
        onChange={(page, pageSize) => {
          dispatch(fetchProductList({ page: page, limit: pageSize }));
          dispatch(changePagination({ page, limit: pageSize }));
        }}
        current={Number(productPagination.page)}
        total={Number(productPagination.total)}
        pageSize={Number(productPagination.limit)}
      />
    </div>
  </div>;
}
