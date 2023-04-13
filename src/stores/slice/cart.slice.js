import { message } from "antd";
import { BUY_PRODUCT, DELETE_PRODUCT } from "../../const/const";

export const cartInitialState = {
    cart: [],
}

const cartReducer = (state = cartInitialState, action) => {
    switch (action.type) {
        case BUY_PRODUCT:
            {
                const productInCart = state.cart.find(
                    (item) => item.id === action.payload.id,
                );
                if (!productInCart) {
                    return {
                        cart: [...state.cart, action.payload],
                    }
                } else {
                    let newCart = state.cart;
                    newCart.findIndex(
                        (obj) => obj.id === action.payload.id
                    );

                    return { cart: [...newCart] }
                }

            }
        default: return state;

        case DELETE_PRODUCT:
            return {
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
    }
}
export default cartReducer;
