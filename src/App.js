import React, { useEffect, useState } from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import "./App.css";

import Cart from "./pages/Cart/Cart";
import CombinedFooter from "./pages/components/Footer/CombinedFooter";
import Header from "./pages/components/header";
import LoginForm from "./pages/components/Login/LoginForm";
import NotFound from "./pages/components/NotFound/NotFound";
import Home from "./pages/home";
import ProductDet from "./pages/productDetails/ProductDet";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Register from "./pages/components/Register/Register";
import { Pagination } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductList } from "./stores/action/product.action";
import { changePagination } from "./stores/slice/product.slice";
import { OrderSuccess } from "./pages/orders/order-success/OrderSuccess";
// import Seller from "./pages/seller";

function App() {

  const [global, setGlobal] = useState(
    {
      inputSearch: "",
      itemsOfCart: 0,
      isLoggedIn: false,
    }
  )

  const handleLoggedIn = (e) => {
    setGlobal({ isLoggedIn: e });
  };
  const handleSearch = (e) => {
    setGlobal({ inputSearch: e.target.value });
  };
  const changeCart = (e) => {
    setGlobal({ itemsOfCart: e });
  };


  const { itemsOfCart, inputSearch } = global;
  return (
    <>
      <Header
      // itemsOfCart={itemsOfCart}
      // handleSearch={handleSearch}
      // isLoggedIn={global.isLoggedIn}
      />
      <Routes>
        <Route path={"/product/:id"} element={<ProductDet />} />
        <Route path={"/login"} element={<LoginForm
          handleLoggedIn={handleLoggedIn}
        />} />
        {/* <Route exact path={"/seller"} element={<Seller />} /> */}
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/register"} element={<Register />} />
        <Route exact path={"/"} element={<Home
        //  changeCart={changeCart} inputSearch={inputSearch}
        />} />
        <Route path={"/order-success"} element={<OrderSuccess />} />
        <Route path={"/notfound"} component={NotFound} />
      </Routes>

      <CombinedFooter />

    </>
  );
}

export default App;
