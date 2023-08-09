import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import './style.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductList, fetchProductListByPriceRange } from '../../../../stores/action/product.action'
import { Link } from 'react-router-dom'
const DropCategory = () => {
    const productList = useSelector(state => state.product.product)
    const [selectedRange, setSelectedRange] = useState('');
    const dispatch = useDispatch();
    const handleChange = (e) => {
        const selectedValue = e.target.value;
        setSelectedRange(selectedValue);
    };

    useEffect(() => {
        const handlePriceFilter = (minPrice, maxPrice) => {
            const filteredProducts = productList.filter(
                (product) => product.price >= Number(minPrice) && product.price <= Number(maxPrice)
            );
            dispatch(
                fetchProductList({
                    page: 1,
                    limit: 12,
                    filter: filteredProducts,
                })
            );
        };

        if (selectedRange !== '') {
            const [minPrice, maxPrice] = selectedRange.split('-');
            handlePriceFilter(Number(minPrice), Number(maxPrice));
        }
    }, [selectedRange]);

    return (
        <div className='drop-category'>
            <div className="select__wrapper">
                <FontAwesomeIcon className="burger__menu" icon={faBars} />
                <select
                    className="select_categories"
                    name="priceRange"
                    id="priceRange"
                    value={selectedRange}
                    onChange={handleChange}
                >
                    <option className="category__options" value="">Chọn Khoảng Giá</option>
                    <option className="category__options" value="1000000-2000000">1tr - 2tr</option>
                    <option className="category__options" value="2100000-3000000">2tr100 - 3tr</option>
                    <option className="category__options" value="3100000-4000000">3tr100 - 4tr</option>
                    <option className="category__options" value="4100000-5000000">4tr100 - 5tr</option>
                    <option className="category__options" value="5100000">Trên 5tr</option>
                </select>

            </div>
            <Link to={"/filter-product"} className='filter-submit'><p className='title-filter'>OK</p></Link>
        </div>

    );
};

export default DropCategory