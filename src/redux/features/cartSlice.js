import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    cartItems: [],
    cartCount: 0,
    error: null
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = state.cartItems.filter(item => item?.product?._id === action.payload?._id)
            if (!product[0]) {
                console.log("got here")
                state.cartItems.push({ product: action.payload, qty: 1 })
                state.cartCount++;
                return;
            }
            state.cartItems.forEach((item) => {
                if (item?.product?._id === action.payload?._id) {
                    item.qty += 1;
                    state.cartCount++;
                    return;
                }
            })
        },
        removeFromCart: (state, action) => {
            const product = state.cartItems.filter(item => item?.product?._id === action.payload);
            if (product?.qty === 1) {
                state.cartItems = state.cartItems.filter(item => item?.product?._id !== action.payload)
                state.cartCount--;
                return;
            }
            state.cartItems = state.cartItems.map(item => {
                if (item?.product?._id === action?.payload) {
                    item.qty--;
                    state.cartCount--
                }
                return item;
            })
        }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer;