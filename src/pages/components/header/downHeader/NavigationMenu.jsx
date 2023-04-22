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
            shoeType: "Men",
            category: "Men's Shoes"
        },
        {
            shoeType: "Women",
            category: "Women's Shoes"
        }
    ]
    return (
        <ul className="naviagtion__menu">
            <li><Link to={"/"} className="home__selected">home</Link></li>
            {Menu.map((item) => (
                <li key={item} onClick={() => filterCategory(item.category)}>{item.shoeType}</li>
            ))}
        </ul>
    )
}