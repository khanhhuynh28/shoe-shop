import React, { useEffect, useState } from "react";
import "./downHeader.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSortDesc } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "../../../../stores/action/product.action";

export default function Dropdwon(props) {

  const [valueSort, setValueSort] = useState('');
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product);
  const { filter, textSearch } = productList;
  useEffect(() => {
    dispatch(
      fetchProductList({
        page: 1,
        limit: 12,
        filter,
        textSearch,
        sort: 'price',
        order: valueSort,
      })
    );
  }, [valueSort]);

  return (
    <div className="select__wrapper">
      <FontAwesomeIcon className="burger__menu" icon={faBars} />
      <select
        className="select_categories"
        name="sort"
        id="sort"
        defaultValue={null}
        onChange={(e) => setValueSort(e.target.value)}
      >
        <option className="category__options" value="">Chọn danh mục</option>
        <option className="category__options" value="asc">Giá Tăng Dần</option>
        <option className="category__options" value="desc">Giá Giảm Dần</option>
      </select>
    </div>
  );
}
