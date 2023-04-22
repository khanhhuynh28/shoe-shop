import React, { Component, useEffect, useState } from 'react'
import Dropdwon from '../../components/header/downHeader/Dropdown';
import './style.scss';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '../../../stores/action/product.action';
import { Button, Dropdown, Select, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons'

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
