import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductList } from "../../../../stores/action/product.action";

export default function NavigationMenu() {
    const dispatch = useDispatch();
    const productState = useSelector((state) => state.product);
    let { textSearch, filter } = productState;

    const filterCategory = (key) => {
        dispatch(
            fetchProductList({
                page: 1,
                limit: 12,
                filter: { ...filter, category: key },
                textSearch,
            })
        );
    };

    const Menu = [
        {
            id: 1,
            shoeType: "Giày Nam",
            category: "Giày Nam"
        },
        {
            id: 2,
            shoeType: "Giày Nữ",
            category: "Giày Nữ"
        },

    ]
    return (
        <ul className="navigation__menu">
            <li><Link to={"/"} className="home__selected">Trang Chủ</Link></li>
            {Menu.map((item) => (
                <li key={item.id} onClick={() => filterCategory(item.category)}><Link to={"/"} className="home__selected">{item.shoeType}</Link></li>
            ))}
        </ul>
    )
}