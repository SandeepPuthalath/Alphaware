import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import instance from "../api/instance";

export const fetchAllProduct = createAsyncThunk("product/fetching", async () => {
    try {
        const response = await instance.post("/product/getAllProduct");
        return response.data;
    } catch (error) {
        return Promise.reject(error)
    }
})

const initialState = {
    loading: false,
    products: null,
    error: null
}

const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllProduct.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchAllProduct.fulfilled, (state, action) => {
                state.loading = false;
                state.products = action.payload;
            })
            .addCase(fetchAllProduct.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })
    }
})

export default productSlice.reducer;