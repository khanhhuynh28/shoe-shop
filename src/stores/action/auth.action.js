import { createAsyncThunk } from "@reduxjs/toolkit";
import { authApi } from "../../api/auth.api";

export const loginAction = createAsyncThunk(
    'auth/login',
    async (payload) => {
        const response = await authApi.login(payload);
        return response.data;
    }
);

export const registerAction = createAsyncThunk(
    'auth/register',
    async (payload) => {
        const response = await authApi.register(payload);
        return response.data;
    }
);