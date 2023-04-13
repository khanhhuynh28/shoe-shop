import { ShoppingCartOutlined } from "@ant-design/icons";
import { HeartOutlined } from "@ant-design/icons/lib/icons";
import { Rate } from "antd";
import { MDBCard, MDBCardBody, MDBCardImage, MDBCol, MDBIcon, MDBRow } from "mdb-react-ui-kit";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import nike from "../../../assets/nike.png"
import "./style.css";
import { Button, Drawer } from 'antd';
import { useState } from 'react';
export default function ProductCard({ id, sold, name, price, brand, category, thumbnail, cost }) {
  const star = () => <Rate allowHalf defaultValue={3.5} />

  // state = {
  //   addedToCart: false,
  // };
  // addToCart = () => {
  //   const { name, price, imgLink, id, changeCart } = this.props;
  //   const { addedToCart } = this.state;
  //   if (!addedToCart) {
  //     const products = JSON.parse(localStorage.getItem("products"));
  //     products.push({ id, name, price, imgLink });
  //     localStorage.setItem("products", JSON.stringify(products));
  //     this.setState({ addedToCart: true });
  //     changeCart(products.length);
  //   } else {
  //     const products = JSON.parse(localStorage.getItem("products"));
  //     const newProducts = products.filter((item) => item.id !== id);
  //     localStorage.setItem("products", JSON.stringify(newProducts));
  //     this.setState({ addedToCart: false });
  //     changeCart(newProducts.length);
  //   }
  // };

  // componentDidMount() {
  //   const { id, buttons, changeCart } = this.props;
  //   if (typeof buttons === "string") {
  //     const products = JSON.parse(localStorage.getItem("products"));
  //     const addedToCart = products.some((item) => item.id === id);
  //     this.setState({ addedToCart });
  //     changeCart(products.length);
  //   }
  // }
  // const {
  //   name,
  //   price,
  //   imgLink,
  //   category,
  //   buttons,
  //   handleDelete,
  //   handleGetDataForUpdate,
  //   id,
  // } = this.props;

  // const { addedToCart } = this.state;
  // console.log(this.props, 1233333);


  // <div className="p-card ">
  //   <img className="product-img" src="" alt="product" />
  //   <div className="product-btn">
  //     {typeof buttons === "string" ? (
  //       <button >
  //         {/* {addedToCart ? "Delete from cart" : buttons} */}
  //       </button>
  //     ) : (
  //       <>
  //         <button >
  //           Delete
  //         </button>
  //         <a href="#open-modal">
  //           <button >
  //             Edit
  //           </button>
  //         </a>
  //       </>
  //     )}
  //   </div>
  //   <div className="container">
  //     <div className="product-dd">
  //       <h3
  //         className="product-name"

  //       >
  //       </h3>
  //       <p className="product-category">dfhsdhrsdh</p>
  //     </div>

  //     <p className="product-price">$34645554</p>
  //   </div>
  // </div>
  // <MDBRow> 
  return (
    <>
      <MDBCol md="12" lg="3" className="mb-4 mb-lg-0" >
        <MDBCard className="container-card">
          <Link to={`/product/${id}`}>
            <MDBCardImage
              src={thumbnail}
              position="top"
              alt="giày"
            />
            <MDBCardBody style={{ padding: "0 5px" }}>

              <div className="d-flex justify-content-between" style={{ height: "25px" }}>
                <p className="small">
                  <a href="#!" className="text-muted">
                    {category}
                  </a>
                </p>
                <p className="small text-danger">
                  <s>{cost.toLocaleString()}đ</s>
                </p>
              </div>

              <div className="d-flex justify-content-between">
                <p className="mb-0">{name}</p>
                <p className="mb-0 text-danger">{price.toLocaleString()}đ</p>
              </div>
            </MDBCardBody>
          </Link>
        </MDBCard>
      </MDBCol>

    </>
  );
}


