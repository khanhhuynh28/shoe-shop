import React, { useRef, useState } from "react";
import "./upperHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { fetchProductList } from "../../../../stores/action/product.action";


export default function SearchBar() {
  const dispatch = useDispatch();
  const [valueSearch, setValeSearch] = useState('');
  const inputRef = useRef();

  const handleChangeSearch = (e) => {
    const valueSearch = e.target.value;
    if (!valueSearch.startsWith(' ')) {
      setValeSearch(valueSearch);
    }
  };
  const handleClick = () => {
    dispatch(
      fetchProductList({
        textSearch: valueSearch,
      })
    );
    setValeSearch('')
  }


  return (
    <div className="main__search__bar__wrapper">
      <input
        ref={inputRef}
        value={valueSearch}
        type="text"
        className="main__search__bar"
        placeholder="Tìm kiếm Sản phẩm"
        onChange={handleChangeSearch}

      />
      <FontAwesomeIcon
        className="search__icon"
        icon={faSearch}
        onClick={handleClick}
      />
    </div>
  );
}
