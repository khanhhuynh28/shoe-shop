import React, { Component } from 'react'
import Dropdwon from '../../components/header/downHeader/Dropdown';
import './style.scss';

export default function TopFilter() {
  // const { handleChangePrice, handleChangeCategory } = this.props;
  return (
    <div className='trend-with-filter'>
      <Dropdwon options={['Chọn danh mục', 'Men', 'Women']} />
      <div className='pHeader'>
        <p>SẢN PHẨM HÀNG ĐẦU</p>
        <h1>XU HƯỚNG TUẦN NÀY</h1>
      </div>
      <Dropdwon options={['Chọn theo giá', '100<', '100 - 200', '200>']} />

    </div>
  )
}
