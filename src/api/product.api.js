import { API, BASE_URL } from "./constant.api";

export const productAPI = {
    getProductList: (page = 1, limit = 8, filter = {}, textSearch, sort, order) => {
        const paginationString = `_page=${page}&_limit=${limit}`;
        const filterString = Object.keys(filter)
            .map((key) => {
                if (key && key !== '' && filter[key] && filter[key] !== '') return `${key}=${filter[key]}`;
            })
            .join('&');
        const textSearchString = textSearch && textSearch !== '' ? `&q=${textSearch}` : '';
        const sortString = `_sort=${sort}&_order=${order}`;
        const queryString = [
            paginationString,
            ...(textSearchString !== '' ? [textSearchString] : []),
            ...(filterString !== '' ? [filterString] : []),
            ...(sortString !== '' ? [sortString] : []),
        ].join('&');
        return API.get(`${BASE_URL}/products?${queryString}`);
    }
}