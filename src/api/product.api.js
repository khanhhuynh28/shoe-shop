import { API, BASE_URL } from "./constant.api";

export const productAPI = {
    getProductList: (page = 1, limit = 8, filter = {}, textSearch, sort, order) => {
        const paginationString = `_page=${page}&_limit=${limit}`;
        const filterString = Object.keys(filter)
            .filter(key => filter[key] !== null && filter[key] !== undefined && filter[key] !== '')
            .map(key => `${key}=${filter[key]}`)
            .join('&');
        const textSearchString = textSearch && textSearch !== '' ? `&q=${textSearch}` : '';
        const sortString = `_sort=${sort}&_order=${order}`;
        const queryString = [
            paginationString,
            ...(textSearchString !== '' ? [textSearchString] : []),
            ...(filterString !== '' ? [filterString] : []),
            ...(sortString !== '' ? [sortString] : []),
        ].join('&');
        console.log(textSearchString, 'textSearchString')
        console.log(sortString, 'sortString')
        console.log(queryString, 'queryString')
        console.log(paginationString, 'paginationString')
        console.log(filterString, 'filterString')
        return API.get(`${BASE_URL}/products?${queryString}`);
    }

}
