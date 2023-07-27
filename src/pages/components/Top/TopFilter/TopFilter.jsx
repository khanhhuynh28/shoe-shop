import React from 'react'
import './style.scss';
import DropCategory from '../DropCategory/DropCategory';
import Dropdown from '../../Headers/DownHeader/Dropdown';

export default function TopFilter() {

  return (
    <div className='trend-with-filter'>
      <Dropdown />
      <div className='pHeader'>
        <p>SẢN PHẨM HÀNG ĐẦU</p>
        <h1>XU HƯỚNG TUẦN NÀY</h1>
      </div>
      <DropCategory />
    </div>
  )
}
