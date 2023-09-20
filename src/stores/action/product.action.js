import { createAsyncThunk } from "@reduxjs/toolkit";
import { productAPI } from "../../api/product.api";
import axios from "axios";
import { BASE_URL } from "../../api/constant.api";
export const fetchProductList = createAsyncThunk(
    'product/fetchProductList',
    async (payload) => {
        const { page, limit, filter, textSearch, sort, order } = payload;
        const response = await productAPI.getProductList(
            page,
            limit,
            filter,
            textSearch,
            sort,
            order,

        );
        console.log(page, 'res')
        console.log(limit, 'ad')
        return {
            product: response.data,
            textSearch: textSearch,
            filter: filter,
            sort: sort,
            order: order,
            pagination: {
                page: page,
                limit,
                total: response.headers['x-total-count'],
            },

        };

    }

);


