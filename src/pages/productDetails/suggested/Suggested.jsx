import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchProductList } from "../../../stores/action/product.action";
import "./style.css"
function Suggested({ id, name, thumbnail, price }) {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchProductList({ page: 1, limit: 5 }));
    }, [])
    return (
        <div className="container-suggested">
            < Link to={`/product/${id}`}>
                <ul className="suggested" >
                    <li className="suggested-product">
                        <div>
                            <img src={thumbnail} alt="" width={225} />
                            <div className="detail">
                                <span className="name-product">{name}</span>
                                <span className="price-product">{price.toLocaleString()}đ</span>
                            </div>
                        </div>
                    </li>

                </ul >
            </ Link>
        </div>

    );
}

export default Suggested;