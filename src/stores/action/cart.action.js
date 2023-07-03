import { BUY_PRODUCT, DELETE_PRODUCT } from "../../const/const";

export const buyProduct = (product) => {
    return {
        type: BUY_PRODUCT,
        payload: product,
    }
};

export const deleteProduct = (product) => {
    return {
        type: DELETE_PRODUCT,
        payload: product,
    }
}


