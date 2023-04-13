import { createAsyncThunk } from "@reduxjs/toolkit";
import { productAPI } from "../../api/product.api";
export const fetchProductList = createAsyncThunk(
    'product/fetchProductList',
    async (payload) => {
        const { page, limit, filter, textSearch, sort, order } = payload;

        const reponse = await productAPI.getProductList(
            page,
            limit,
            filter,
            textSearch,
            sort,
            order
        );
        return {
            product: reponse.data,
            textSearch: textSearch,
            filter: filter,
            sort: sort,
            order: order,
            pagination: {
                page,
                limit,
                total: reponse.headers['x-total-count'],
            },

        };

    }
);

