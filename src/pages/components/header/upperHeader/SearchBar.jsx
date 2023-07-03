import React, { useEffect, useRef, useState } from "react";
import "./upperHeader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchProductList } from "../../../../stores/action/product.action";
import useDebounce from "../../hook/use-debounce/UseDebounce";

export default function SearchBar() {
  const dispatch = useDispatch();
  const [valueSearch, setValeSearch] = useState('');
  const debounce = useDebounce(valueSearch, 500);
  const inputRef = useRef();

  const handleChangeSearch = (e) => {
    const valueSearch = e.target.value;
    if (!valueSearch.startsWith(' ')) {
      setValeSearch(valueSearch);
    }
  };
  useEffect(() => {
    if (!debounce.trim()) {
      return;
    }
    dispatch(
      fetchProductList({
        page: 1,
        limit: 12,
        textSearch: debounce,
      })
    );
  }, [debounce]);

  return (
    <div className="main__search__bar__wrapper">
      <input
        ref={inputRef}
        value={valueSearch}
        className="main__search__bar"
        type="text"
        placeholder="Tìm kiếm Sản phẩm"
        onChange={handleChangeSearch}

      />
      <FontAwesomeIcon
        className="search__icon"
        icon={faSearch}
        onClick={() => {
          setValeSearch('');
          inputRef.current.focus();
        }}
      />

    </div>
  );
}
