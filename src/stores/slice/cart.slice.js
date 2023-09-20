import { createSlice } from "@reduxjs/toolkit";
import { Spin } from "antd";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    },
    reducers: {
        buyProduct: (state, action) => {
            const productInCart = state.cart.find((item) => item.id === action.payload.id);
            if (!productInCart) {
                state.cart.push(action.payload);
            }
        },
        deleteProduct: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);
        },
    },
});

export const { buyProduct, deleteProduct } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
