import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    loading: false,
    cartItems: [],
    cartCount: 0,
    totalPrice: 0,
    error: null
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const product = (state.cartItems.find(item => item?.product?._id === action.payload?._id))
            if (!product) {
                state.cartItems.push({ product: action.payload, qty: 1 })
                state.cartCount++;
                state.totalPrice += action.payload?.discountAmount;
                return;
            }
            state.cartItems.forEach((item) => {
                if (item?.product?._id === action.payload?._id) {
                    item.qty += 1;
                    state.cartCount++;
                    state.totalPrice += action.payload.discountAmount
                    return;
                }
            })
        },
        changeQty: (state, action) => {
            const { id, change } = action.payload;
            state.cartItems = state.cartItems.map((item) => {
                if (item.product._id === id) {
                    if (item.qty >= 1 && change === 1) {
                        item.qty += change;
                        state.totalPrice += change*item.product.discountAmount
                    }
                    else if(item.qty > 1 && change === -1){
                        item.qty += change
                        state.totalPrice += change * item.product.discountAmount
                    }
                }
                return item;
            })
        },
        removeFromCart: (state, action) => {
            state.cartItems = state.cartItems.filter(item => item?.product?._id !== action.payload)
            state.cartCount = state.cartItems.reduce((acc, curr) => acc += curr?.qty, 0)
            state.totalPrice = 0;
        }
    }
})

export const { addToCart, removeFromCart, changeQty } = cartSlice.actions
export default cartSlice.reducer;