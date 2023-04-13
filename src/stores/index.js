import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./slice/auth.slice";
import cartReducer from "./slice/cart.slice";
import { orderReducer } from "./slice/order.slice";
import { productReducer } from "./slice/product.slice";

const rootReducer = {
    auth: authReducer,
    product: productReducer,
    cart: cartReducer,
    order: orderReducer
};

export const store = configureStore({
    reducer: rootReducer,
});