
import './Cart.css'
import React, { useState } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import { deleteProduct } from '../../stores/action/cart.action';
import { DeleteOutlined } from '@ant-design/icons';
import { Button, Form, Input } from 'antd';
import { orderAction } from '../../stores/action/order.action';
import { Link } from 'react-router-dom';
import iconCart from "../../assets/giỏ hàng trống.png"
import { SelectAddress } from './select-address/SelectAddress';
function Cart(props) {
  const productInCart = useSelector(state => state.cart.cart);
  const [itemCount, setItemCount] = useState(productInCart.map(() => 1));
  const dispatch = useDispatch();
  const [userInfor, setUserInfor] = useState({
    username: "",
    phone: "",
    address: ""
  });
  const handleChangeUserInfor = (e) => {
    const { value, name } = e.target;
    setUserInfor({
      ...userInfor,
      [name]: value,
    });
  };



  const handleDecrease = (index) => {
    if (itemCount[index] > 1) {
      const newCount = [...itemCount];
      newCount[index] -= 1;
      setItemCount(newCount);
    }
  };

  const handleIncrease = (index) => {
    const newCount = [...itemCount];
    newCount[index] += 1;
    setItemCount(newCount);
  };

  // const [cart, setCart] = useState({
  //   product: []
  // })
  // state = {
  //   products: []
  // }


  // componentDidMount() {
  //   this.setState({ products: JSON.parse(localStorage.getItem('products')) })
  // }

  // deleteFromCart = (id) => {
  //   const { products } = cart
  //   const filtered = products.filter(ele => ele.id !== id)
  //   setCart({ products: filtered })
  //   // localStorage.setItem('products', JSON.stringify(filtered))
  // }

  // removeallCart = () => {
  //   setCart({ products: [] })
  //   localStorage.setItem('products', JSON.stringify([]))
  // }
  // const products = JSON.parse(localStorage.getItem('products')) || [];
  // const { products } = this.state
  // const result = products.map((product) => (

  // ))

  // const prices = products.map(product => {
  //   return +product.price;
  // });

  // const totalPrice = prices.reduce((acc, curr) => acc + curr, 0);

  const totals = productInCart.reduce((item, product, index) => {
    const total = product.price * itemCount[index];

    return item + total
  }, 0)
  console.log(totals.total)
  const totalPayments = totals;
  // const price = productInCart.reduce((item, product, index) => {
  //   const price = item.price * itemCount[index];
  //   return price
  // }, 0)



  const layout = {
    labelCol: {
      span: 4,
    },
    wrapperCol: {
      span: 20,
    },
  };

  const validateMessages = {
    required: 'Vui lòng nhập ${label}!',
  };
  const { username, phone, address } = userInfor;
  const handleChangeOrder = () => {
    dispatch(orderAction(
      {
        username: username,
        phone: phone,
        address: address,
        totalPayments: totalPayments,
        product: productInCart.map((item, index) => {
          return {
            id: item.id,
            name: item.name,
            color: item.color,
            size: item.size,
            price: item.price,
            brand: item.brand,
            category: item.category,
            thumbnail: item.thumbnail,
            quantity: itemCount[index],
          }
        })

      }
    ))
  };

  return (
    <>

      {productInCart.length === 0 ? (
        <>
          <div className='cart-is-empty'>
            <img className='cart-is-empty__icon' src={iconCart} alt="" />
          </div>
          <div className='buy-nows'>
            <button className='buy-product'><Link to={"/"}> Mua Ngay</Link></button>
          </div>
        </>
      ) : (
        <>
          <table className='title-product-cart'>
            <tbody className='table'>
              <tr >
                <th className='product-item '>Sản phẩm</th>
                <th className='count-item'>Số lượng</th>
                <th className='price-item'>Đơn giá</th>
                <th className='operation-item'>Thao tác</th>
              </tr>
            </tbody>
          </table>
          {
            productInCart.map((product, index) => (
              <>
                <div key={product}>

                  <div className="content__order">
                    <div > <img className="img__product" src={product.thumbnail} alt="product" /></div>
                    <div className="tools">
                      <div className="product__name__description">
                        <p>{product.name}</p>
                        <p className="product__description">Màu sắc:  {product.color}</p>
                        <p className="product__description">Kích cỡ: {product.size}</p>
                      </div>
                      <div className="tools2">
                        <div className="btnnnn">
                          <div className="counter">
                            <button className="action-btn btn-minus" onClick={() => handleDecrease(index)}>
                              -
                            </button>
                            <div className="counter-number">{itemCount[index]}</div>
                            <button className="action-btn btn-plus" onClick={() => handleIncrease(index)}>
                              +
                            </button>
                          </div>
                        </div>
                        <div className="price__product">{(product.price * itemCount[index]).toLocaleString()}đ</div>
                        <div className="remove__icon"> <i className="fa-
                    solid fa-trash-can"></i></div>
                      </div>
                      <div className='delete-icon' onClick={() => props.deleteProduct(product)}><DeleteOutlined style={{ color: "red" }} /></div>
                    </div>
                  </div>
                </div>
              </>
            ))

          }
          <hr className="hrr" />
          <div className='container-total'>
            <div className='total'>
              <div className='left'></div>
              <div className='right'>
                <div className='total-items'>
                  <span className='total-title'>Tổng tiền hàng:</span>
                  <span className='total-title'>{totals.toLocaleString()}đ</span>
                </div>
                <div className='total-items'>
                  <span className='total-title'>Phiếu giảm giá:</span>
                  <span className='total-title'>- 00đ</span>
                </div>
                <div className='total-items'>
                  <span className='total-title'>Phí vận chuyển:</span>
                  <span className='total-title'>- 00đ</span>
                </div>
                <hr />
                <div className='total-items'>
                  <span className='total-title'>Tổng:</span>
                  <span className='total-title'>{totalPayments.toLocaleString()}đ</span>
                </div>
              </div>
            </div>
          </div>
          <hr className="hrr" />
          <div className='container-information'>
            <div className='information'>
              <h6 className='information-title'>THÔNG TIN VẬN CHUYỂN</h6>
              <Form
                onFinish={handleChangeOrder}
                className='form-infor'
                {...layout}
                name="nest-messages"
                style={{
                  maxWidth: 900,
                }}
                validateMessages={validateMessages}
              >

                <Form.Item
                  name={['user', 'name']}
                  label="Họ và tên"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    name='username' onChange={handleChangeUserInfor}
                  />
                </Form.Item>

                <Form.Item
                  name={['user', 'phone']}
                  label="Số điện thoại"
                  rules={[
                    {
                      required: true,
                    },
                  ]}
                >
                  <Input
                    name='phone' onChange={handleChangeUserInfor}
                  />
                </Form.Item>
                <Form.Item
                  name={['user', 'address']}
                  label="Địa chỉ"
                  rules={[
                    {
                      required: true,
                    },
                  ]}>
                  <Input.TextArea name='address'
                    onChange={handleChangeUserInfor}
                  />
                </Form.Item>
                <SelectAddress />
                <Form.Item
                  wrapperCol={{
                    ...layout.wrapperCol,
                    offset: 20,
                  }}
                >
                  {validateMessages ? (
                    <Button className='form-submit' htmlType="submit">
                      <Link to={"/order-success"}>Đặt Hàng</Link>
                    </Button>
                  ) : (
                    <Button className='form-submit' htmlType="submit"
                      rules={[
                        {
                          required: true,
                        },
                      ]}
                    >
                      Đặt Hàng
                    </Button>
                  )}
                </Form.Item>
              </Form>
            </div>

          </div>

        </>
      )}

    </>
  )

}
const mapStateToProps = (state) => {
  return {
    cart: state.cart.cart,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    deleteProduct: (product_current) =>
      dispatch(deleteProduct(product_current)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);