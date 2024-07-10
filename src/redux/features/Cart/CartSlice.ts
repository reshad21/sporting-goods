import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the types for the cart item and the state
interface CartItem {
    id: string;
    name: string;
    title: string;
    price: number;
    quantity: number;
}

interface CartState {
    cart: CartItem[];
    totalPrice: number;
}

// Initial state with defined types
const initialState: CartState = {
    cart: [],
    totalPrice: 0,
};

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingProduct = state.cart.find(product => product.id === action.payload.id);
            if (existingProduct) {
                existingProduct.quantity += 1;
                existingProduct.price += action.payload.price;
                existingProduct.price = Number(existingProduct.price.toFixed(2));
                state.totalPrice = Number(state.totalPrice.toFixed(2));
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
                state.totalPrice += action.payload.price;
            }
            state.totalPrice = Number(state.totalPrice.toFixed(2));
        },
        increase: (state, action: PayloadAction<{ id: string }>) => {
            const existingProduct = state.cart.find(product => product.id === action.payload.id);
            if (existingProduct) {
                const pricePerUnit = existingProduct.price / existingProduct.quantity;
                existingProduct.quantity += 1;
                existingProduct.price += pricePerUnit;
                state.totalPrice += pricePerUnit;
                existingProduct.price = Number(existingProduct.price.toFixed(2));
                state.totalPrice = Number(state.totalPrice.toFixed(2));
            }
        },
        decrease: (state, action: PayloadAction<{ id: string }>) => {
            const existingProduct = state.cart.find(product => product.id === action.payload.id);
            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                    const pricePerUnit = existingProduct.price / existingProduct.quantity;
                    existingProduct.quantity -= 1;
                    existingProduct.price -= pricePerUnit;
                    state.totalPrice -= pricePerUnit;
                    existingProduct.price = Number(existingProduct.price.toFixed(2));
                    state.totalPrice = Number(state.totalPrice.toFixed(2));
                } else {
                    state.cart = state.cart.filter(product => product.id !== action.payload.id);
                    state.totalPrice -= existingProduct.price;
                }
            }
        },
    },
});

export const { addToCart, increase, decrease } = cartSlice.actions;
export default cartSlice.reducer;
