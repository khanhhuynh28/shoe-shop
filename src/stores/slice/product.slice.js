import { createSlice } from "@reduxjs/toolkit";
import { fetchProductList } from "../action/product.action";
const productInitialState = {
    product: [],
    fetchingProductList: true,
    loadingPostProduct: true,
    pagination: {
        page: 0,
        limit: 12,
        total: 0,
    },
    textSearch: '',
    filter: {},
    sort: {},
};

const productSlice = createSlice({
    name: 'product',
    initialState: productInitialState,
    reducers: {
        changePagination: (state, action) => {
            state.pagination.page = action.payload.page;
            state.pagination.limit = action.payload.limit;
        },
        filterCategory: (state, action) => {
            state.filter = action.payload;
        },
        sortPrice: (state, action) => {
            state.sort.sort = action.payload.sort;
            state.sort.order = action.payload.order;
        },

    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProductList.pending, (state) => {
                state.fetchingProductList = true;
            })
            .addCase(fetchProductList.fulfilled, (state, action) => {
                const { textSearch, filter, sort, order } = action.payload;
                state.fetchingProductList = false;
                state.product = action.payload.product;
                state.pagination = action.payload.pagination;
                console.log(state.pagination, 'pa')
                state.textSearch = textSearch;
                state.filter = filter;
                state.sort = { sort, order };
            })
            .addCase(fetchProductList.rejected, (state) => {
                state.fetchingProductList = false;
            })
    },
});



export const productReducer = productSlice.reducer;
export const { filterCategory, changePagination, sortPrice, incrementProduct } = productSlice.actions;
