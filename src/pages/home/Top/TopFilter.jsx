import React from 'react'
import Dropdwon from '../../components/header/downHeader/Dropdown';
import './style.scss';

export default function TopFilter() {

  return (
    <div className='trend-with-filter'>
      <Dropdwon />
      <div className='pHeader'>
        <p>SẢN PHẨM HÀNG ĐẦU</p>
        <h1>XU HƯỚNG TUẦN NÀY</h1>
      </div>
      <Dropdwon />
    </div>
  )
}
