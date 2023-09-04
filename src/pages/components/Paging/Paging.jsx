import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductList } from '../../../stores/action/product.action';
import { changePagination } from '../../../stores/slice/product.slice';
import { Pagination } from 'antd';

const Paging = () => {
  const dispatch = useDispatch();
  const scroll = () => window.scrollTo(0, 0);
  const productPagination = useSelector((state) => state.product.pagination);
  // useEffect(() => {
  //   dispatch(fetchProductList({ page: 1, limit: 12 }));
  //   window.scrollTo(0, 0);
  // }, []);

  const handleChangePage = (page, pageSize) => {

    dispatch(
      fetchProductList({ page: page, limit: pageSize }, console.log('1'))
    );

    scroll()
  }
  const handleChangeSizePage = (page, pageSize) => {

    dispatch(
      changePagination({ page: page, limit: pageSize }, console.log('2'))

    );
    console.log('2')
    scroll()
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