import { API, BASE_URL } from "./constant.api";

export const orderApi = {
    postOrder: (data) => API.post(`${BASE_URL}/order`, data),

};