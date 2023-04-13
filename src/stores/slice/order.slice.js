import { createSlice } from "@reduxjs/toolkit";
import { orderAction } from "../action/order.action";

export const orderInitState = {
    order: [],
    loadingOrder: false,
    loadingOrderList: false,
}
const orderSlice = createSlice({
    name: 'order',
    initialState: orderInitState,
    extraReducers: (builder) => {
        builder
            .addCase(orderAction.pending, (state) => {
                state.loadingOrder = true;
            })
            .addCase(orderAction.fulfilled, (state, action) => {
                state.order.push(action.payload);
                state.loadingOrder = false;
                state.order.find((item) => item.id === action.payload.id,)

            })
            .addCase(orderAction.rejected, (state) => {
                state.loadingOrder = true;
            })


    },
});

export const orderReducer = orderSlice.reducer