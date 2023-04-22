import React, { useEffect, useState } from "react";
import "./product.css";
import axios from "axios";
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Drawer, Radio, Rate } from "antd";
import { DeleteOutlined, ShoppingCartOutlined } from "@ant-design/icons";
import { buyProduct, deleteProduct } from "../../stores/action/cart.action";
import Suggested from "./suggested/Suggested";

function ProductDet(props) {
  const [options, setOptions] = useState({
    index: 0
  });
  const [productDetail, setProductDetail] = useState([]);
  const [open, setOpen] = useState(false);
  const { id } = useParams();
  const [checkSize, setCheckSize] = useState([]);
  const [colors, setColors] = useState("");
  const productInCart = useSelector(state => state.cart.cart);
  const suggestedProduct = useSelector(state => state.product.product);


  const handleSizeChange = (event) => {
    const sizes = event.target.value
    const newSizes = checkSize.includes(sizes)
      ? checkSize.filter(item => item !== sizes)
      : [sizes];
    setCheckSize(newSizes);

  }

  const showDrawer = () => {
    setOpen(true);
    props.buyProduct(product_current)
  };
  const onClose = () => {
    setOpen(false);
  };
  const product_current = productDetail.map(({ id, price, thumbnail, name, rating }) => (
    {
      id, price, thumbnail, name, colors, checkSize, rating
    }
  ))[0];

  async function fetchData() {
    const response = await axios.get(`http://localhost:3001/api/products/${id}`)
    setProductDetail([response.data]);
  }
  useEffect(() => {
    fetchData();
  }, [id]);



  const handleChangeImage = (index) => {
    setOptions({ index: index });
  }

  const total = productInCart.reduce((item, product, index) => {
    const price = item + product.price;
    return price;
  }, 0)

  const star = () => <Rate disabled defaultValue={product_current.rating} />
  return (
    <>
      <div className="container">
        {productDetail?.map((product) => (
          <>
            <div key={product.id} className="row">
              <div className="col-md-6">
                <div id="slider" className="owl-carousel product-slider">

                  {product.options?.map((img, index) => (
                    <div key={img} className="items">
                      {index === options.index && <img className="productimg" src={img} />}
                    </div>
                  ))}
                  <div id="thumb" className="owl-carousel product-thumb">
                    {product.options?.map((item, index) => (
                      <div key={item} className="item">
                        <img className="images" src={item} onClick={() => handleChangeImage(index)} />
                      </div>
                    ))}

                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="product-dtl">
                  <div className="product-info">
                    <div className="product-name">{product.name}</div>
                    <div className="reviews-counter">
                      <div className="rate">
                        {star()}
                      </div>
                      <span className="span">Đánh giá: {product.stock}</span>
                      <span className="span">Đã bán: {product.sold}</span>
                    </div>
                    <div className="product-price-discount"><span>{product.price.toLocaleString()}đ</span><span className="line-through">{product.cost.toLocaleString()}đ</span></div>
                  </div>
                  <p>{product.description}</p>
                  <div className="row">


                    <div className="col-md-12" >
                      <label >Size:</label>
                      <Radio.Group className="container-select-size" onChange={handleSizeChange} >
                        {product.size.map((size) => (
                          <Radio.Button className="select-size" key={size} value={size} checked={checkSize.includes(size)} >{size}</Radio.Button>
                        ))}
                      </Radio.Group>

                    </div>

                    <div className="col-md-12" style={{ marginTop: 20 }}>
                      <label >Color:</label>

                      <div className="container-select-color" >
                        {product.color.map((color) => (
                          <button
                            className="select-color"
                            key={color}
                            onClick={() => setColors(color)}
                            style={colors === color ? {
                              backgroundColor: color,

                            } : {}}
                          >

                          </button>
                        ))}
                      </div>
                    </div>

                  </div>
                  <div className="product-count">
                    <button onClick={showDrawer} className="round-black-btn buy" > <ShoppingCartOutlined /></button>
                    <Link to={"/cart"}><button className="round-black-btn buy" onClick={() => props.buyProduct(product_current)}>Mua Ngay</button></Link>
                  </div>
                </div>
                <div className="product-policy">
                  <div className="policy">
                    <div className="product-policy__item"><div className="product-policy__icon">
                      <img className="icons" src="https://img.mwc.com.vn/files/Icon/icon3.jpg" alt="Đổi trả với số điện thoại" />
                    </div> <span className="product-policy__title">
                        Bảo hành keo vĩnh viễn
                      </span>
                    </div> <div className="product-policy__item">
                      <div className="product-policy__icon">
                        <img className="icons" src="https://img.mwc.com.vn/files/Icon/icon4.jpg" alt="Miễn phí vận chuyển" />
                      </div> <span className="product-policy__title">
                        Miễn phí vận chuyển toàn quốc<br />
                        cho đơn hàng từ 150k
                      </span>
                    </div>
                    <div className="product-policy__item">
                      <div className="product-policy__icon">
                        <img className="icons" src="https://img.mwc.com.vn/files/Icon/icon5.jpg" alt="Đổi hàng trong 60 ngày" />
                      </div> <span className="product-policy__title">
                        Đổi trả dễ dàng <br />
                        (trong vòng 7 ngày nếu lỗi nhà sản xuất)
                      </span>
                    </div>
                  </div>
                  <div className="policy">
                    <div className="product-policy__item">
                      <div className="product-policy__icon">
                        <img className="icons" src="https://img.mwc.com.vn/files/Icon/icon2.jpg" alt="" style={{ width: "25px" }} />
                      </div>
                      <span className="product-policy__title">
                        Hotline 1900.633.349<br />
                        hỗ trợ từ 8h30-21h30
                      </span>
                    </div>
                    <div className="product-policy__item">
                      <div className="product-policy__icon">
                        <img className="icons" src="https://img.mwc.com.vn/files/Icon/icon1.jpg" alt="Trả hàng tận nơi" />
                      </div> <span className="product-policy__title">
                        Giao hàng tận nơi,<br /> nhận hàng xong thanh toán
                      </span>
                    </div>
                    <div className="product-policy__item">
                      <div className="product-policy__icon">
                        <img className="icons" src="https://img.mwc.com.vn/files/Icon/icon3.jpg" alt="Giao hàng" />
                      </div> <span className="product-policy__title">
                        Ưu đãi tích điểm và <br />hưởng quyền lợi thành viên từ MWC
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div >
            <div className="product-info-tabs">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <a className="nav-link active" id="description-tab" data-toggle="tab" href="#description" role="tab" aria-controls="description" aria-selected="true">Có thể bạn cũng thích</a>
              </ul>
              <div className="suggested-product-item">
                {suggestedProduct.map((item) => <Suggested key={item.id} price={item.price} name={item.name} id={item.id} thumbnail={item.thumbnail} />)}
              </div>

            </div>
          </>
        ))}
      </div >


      <Drawer title="Giỏ hàng" placement="right" onClose={onClose} open={open}>
        {productInCart.map((productInCart) => (
          <div key={productInCart}>
            <div className="container-cart">
              <div className="image-cart">
                <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/99333efb-45c8-4590-be0f-d7f336a8aef4/structure-24-road-running-shoes-9wCgmv.png" alt="" width={70} />
              </div>
              <div className="detail-cart">
                <span className="product-name">{productInCart.name}</span>
                <li>
                  <span>Kích cỡ: </span>
                  <span>{checkSize}</span>
                </li>
                <li>
                  <span>Màu sắc: </span>
                  <span>{colors}</span>
                </li>
                <div className="price-cart">
                  <span><b>{productInCart.price.toLocaleString()}đ</b></span>
                  <span><button className="delete" onClick={() => props.deleteProduct(productInCart)}><DeleteOutlined /></button></span>
                </div>
              </div>
            </div>

          </div>
        ))}
        <div className="totals">
          <div className="total-item">
            <span><b className="total-title">Tạm tính: </b></span>
            <span className="total-title">{total.toLocaleString()}đ</span>
          </div>
        </div>

        <div className="buy-now">
          <div className="buy-now-item"><Link to={"/cart"}><button className="view-cart">XEM GIỎ HÀNG</button></Link></div>
        </div>
      </Drawer>
    </>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    buyProduct: (product_current) =>
      dispatch(buyProduct(product_current)),
    deleteProduct: (product_current) =>
      dispatch(deleteProduct(product_current)),
  };
};



export default connect(null, mapDispatchToProps)(ProductDet);
