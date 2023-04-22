import React, { useEffect } from 'react';
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

  return <div className='home-products'>

    <div className='products'>
      {
        productList.map((item) => <ProductCard key={item.id} id={item.id} options={item.options} cost={item.cost} name={item.name} price={item.price} brand={item.brand} category={item.category} sold={item.sold} thumbnail={item.thumbnail} />)
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
