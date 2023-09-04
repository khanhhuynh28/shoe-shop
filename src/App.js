import React, { useEffect, useState } from "react";
import {
  Route,
  Routes
} from "react-router-dom";
import "./App.css";

import Cart from "./pages/Cart/Cart";
import Header from "./pages/components/Headers";
import ProductDetail from "./pages/components/Product/ProductDetail/ProductDetail";
import LoginForm from "./pages/components/Form/Login/LoginForm";
import Register from "./pages/components/Form/Register/Register";
import Home from "./pages/components/Top";
import FilterProduct from "./pages/components/Product/FilterProduct/FilterProduct";
import { OrderSuccess } from "./pages/orders/order-success/OrderSuccess";

import NotFound from "./pages/components/NotFound/NotFound";

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import CombinedFooter from "./pages/components/Footer/CombinedFooter";
import { useColorScheme, useHotkeys, useLocalStorage } from "@mantine/hooks";
import { ActionIcon, ColorSchemeProvider, MantineProvider } from "@mantine/core";


function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path={"/product/:id"} element={<ProductDetail />} />
        <Route path={"/login"} element={<LoginForm
        />} />
        <Route path={"/cart"} element={<Cart />} />
        <Route path={"/register"} element={<Register />} />
        <Route exact path={"/"} element={<Home
        />} />
        <Route path={"/filter-product"} element={<FilterProduct />} />
        <Route path={"/order-success"} element={<OrderSuccess />} />
        <Route path={"/notfound"} component={NotFound} />
      </Routes>
      <CombinedFooter />

    </>
  );
}

export default App;
