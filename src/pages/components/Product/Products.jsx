import React, { useEffect } from 'react';
import './style.css';
import ProductCard from './ProductCart/ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '../../../stores/action/product.action';
import { Pagination } from 'antd';
import { changePagination } from '../../../stores/slice/product.slice';
import Paging from '../Paging/Paging';

export default function Products() {

  const productList = useSelector((state) => state.product.product);


  // useEffect(() => {
  //   dispatch(fetchProductList({ page: 1, limit: 12 }));
  //   window.scrollTo(0, 0);
  // }, []);



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
