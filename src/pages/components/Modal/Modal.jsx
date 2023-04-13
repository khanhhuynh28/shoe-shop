// import Link from 'react-dom';
import React, { Component } from "react";
import "./style.scss";
import axios from "axios";

export default function Modal() {
  // state = {
  //   products: [],
  //   productId: "",
  //   name: "",
  //   price: "",
  //   description: "",
  //   image: "",
  //   category: "",
  //   errorMsg: "",
  // };

  // handleChange = (event) => {
  //   const { name, value } = event.target;
  //   this.setState({ [name]: value });
  // };

  // closeModal = (value) => {
  //   this.setState({ isOpen: false });
  // };

  // addProduct = (e) => {
  //   const { addProductToState } = this.props;
  //   const { name, price, description, image, category } = this.state;
  //   if (!name || !price || !description || !image) {
  //     this.setState({ errorMsg: "Please fill all fields" });
  //   } else {
  //     const data = { name, price, description, image, category };
  //     axios
  //       .post("/api/v1/addProduct", data)
  //       .then((res) => {
  //         const { product } = res.data;
  //         console.log(res.data);
  //         addProductToState(product);
  //         this.setState({
  //           productId: "",
  //           name: "",
  //           price: "",
  //           description: "",
  //           image: "",
  //           category: "",
  //           isOpen: false,
  //         });
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };

  // updateProduct = (id) => {
  //   const { updateProductState } = this.props;

  //   const { name, price, description, image, category } = this.state;
  //   const data = { name, price, description, image, category };
  //   console.log(this.state);
  //   axios
  //     .post(`/api/v1/updateProduct/${id}`, data)
  //     .then((res) => {
  //       updateProductState(id);
  //       this.setState({
  //         name: "",
  //         price: "",
  //         description: "",
  //         image: "",
  //       });
  //       console.log(res, "res");
  //     })
  //     .catch((err) => console.log(err));
  // };

  // const { errorMsg, name, description, price, image, category } = this.state;
  // const categories = ["Select Category", "Men", "Women", "Kids"];
  // const {
  //   idUpdate,
  //   modalOpened,
  //   handleModalOpened,
  //   nameUpdate,
  //   priceUpdate,
  //   descriptionUpdate,
  //   imageUpdate,
  // } = this.props;
  // console.log(this.props, "props init");
  return (
    <>
      <div>
        <a className="add-btn" href="#open-modal" >
          ADD PRODUCT
        </a>
      </div>
      <div id="open-modal" className="modal-window">
        <div className="modal-content">
          <a href="#" title="Close" className="modal-close">
            Close
          </a>
          <h3></h3>
          <form>
            <input
              placeholder="Product Name"
              type="text"
              name="name"
              required
            />
            <input
              placeholder="Product Price (in USD)"
              type="number"
              name="price"
              required
            />
            <textarea
              placeholder="Product Description"
              id=""
              cols="30"
              rows="10"
              name="description"
              required
            ></textarea>
            <select
              name="category"
            // children={
            //   categories &&
            //   categories.map((category) => {
            //     return <option value={category}>{category}</option>;
            //   })
            // }
            />
            <input
              placeholder="Product Image"
              type="url"
              name="image"
              required
            />

            <button

            >
              sdgdsgdf
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
