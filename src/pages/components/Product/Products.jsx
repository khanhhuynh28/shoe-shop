import React, { useEffect } from 'react';
import './style.css';
import ProductCard from './ProductCart/ProductCard';
import { useSelector } from 'react-redux';
import Paging from '../Paging/Paging';

export default function Products() {
  const productList = useSelector((state) => state.product.product);

  return <div className='home-products'>
    <div className='products'>
      {
        productList.map((item, index) => <ProductCard key={index} {...item} />)
      }
    </div>
    <div className='pagination'>
      <Paging />
    </div>
  </div>;
}
