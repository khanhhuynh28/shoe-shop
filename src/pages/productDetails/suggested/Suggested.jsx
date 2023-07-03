import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./style.css"
function Suggested({ category }) {
    const [recommended, setRecommended] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/products')
            .then(response => response.json())
            .then(data => {
                console.log('sd', data.category)
                const gender = category;
                console.log('gender', gender)
                const filteredProducts = data.filter(product => product.category === gender);
                console.log('dm', filteredProducts)
                setRecommended(filteredProducts);
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, []);

    return (
        <>
            {recommended.map(item =>
                <div key={item.id} className="container-suggested">
                    < Link to={`/product/${item.id}`}>
                        <ul className="suggested" >
                            <li className="suggested-product">
                                <div>
                                    <img src={item.thumbnail} alt="" width={225} />
                                    <div className="detail">
                                        <span className="name-product">{item.name}</span>
                                        <span className="price-product">{item.price.toLocaleString()}đ</span>
                                    </div>
                                </div>
                            </li>
                        </ul >
                    </ Link>
                </div>
            )}
        </>

    );
}

export default Suggested;