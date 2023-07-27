import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '../../../stores/action/product.action';
import { changePagination } from '../../../stores/slice/product.slice';
import { Pagination } from 'antd';

const Paging = () => {
  const dispatch = useDispatch();
  const productPagination = useSelector((state) => state.product.pagination);
  const handleChangePage = (page, pageSize) => {
    dispatch(fetchProductList({ page: page, limit: pageSize }));
    window.scrollTo(0, 0);
  }
  const handleChangeSizePage = (page, pageSize) => {
    dispatch(changePagination({ page, limit: pageSize }));
    window.scrollTo(0, 0);
  }
  return (
    <div>
      <Pagination
        onChange={handleChangePage}
        onShowSizeChange={handleChangeSizePage}
        current={Number(productPagination.page)}
        total={Number(productPagination.total)}
        pageSize={Number(productPagination.limit)}
      />
    </div>
  )
}

export default Paging