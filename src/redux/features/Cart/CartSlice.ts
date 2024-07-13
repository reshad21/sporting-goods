import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the types for the cart item and the state
interface CartItem {
    _id: string;
    title: string;
    price: number;
    imgurl: string;
    rating?: number;
    quantity: number;
    brand?: string;
    category?: string;
    description?: string;
    amount?: number;
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

// VAT rate
const VAT_RATE = 0.15; // 15%

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingProduct = state.cart.find(product => product._id === action.payload._id);
            if (existingProduct) {
                existingProduct.amount = (existingProduct.amount ?? 0) + 1;
                existingProduct.quantity -= 1;  // Decrease quantity
                existingProduct.price += action.payload.price;
                existingProduct.price = Number(existingProduct.price.toFixed(2));
                state.totalPrice += action.payload.price;

                // Calculate VAT amount and add to totalPrice
                const vatAmount = action.payload.price * VAT_RATE;
                state.totalPrice += vatAmount;

                state.totalPrice = Number(state.totalPrice.toFixed(2));
            } else {
                state.cart.push({ ...action.payload, amount: 1, quantity: action.payload.quantity - 1 });
                state.totalPrice += action.payload.price;

                // Calculate VAT amount and add to totalPrice
                const vatAmount = action.payload.price * VAT_RATE;
                state.totalPrice += vatAmount;

                state.totalPrice = Number(state.totalPrice.toFixed(2));
            }
        },
        increase: (state, action: PayloadAction<{ _id: string }>) => {
            const existingProduct = state.cart.find(product => product._id === action.payload._id);
            if (existingProduct && existingProduct.quantity > 0) {
                const pricePerUnit = existingProduct.price / (existingProduct.amount ?? 1);
                existingProduct.amount = (existingProduct.amount ?? 0) + 1;
                existingProduct.quantity -= 1;  // Decrease quantity
                existingProduct.price += pricePerUnit;
                state.totalPrice += pricePerUnit;
                existingProduct.price = Number(existingProduct.price.toFixed(2));
                state.totalPrice = Number(state.totalPrice.toFixed(2));
            }
        },
        decrease: (state, action: PayloadAction<{ _id: string }>) => {
            const existingProduct = state.cart.find(product => product._id === action.payload._id);
            if (existingProduct) {
                if (existingProduct.amount && existingProduct.amount > 1) {
                    const pricePerUnit = existingProduct.price / existingProduct.amount;
                    existingProduct.amount -= 1;
                    existingProduct.quantity += 1;  // Increase quantity
                    existingProduct.price -= pricePerUnit;
                    state.totalPrice -= pricePerUnit;
                    existingProduct.price = Number(existingProduct.price.toFixed(2));
                    state.totalPrice = Number(state.totalPrice.toFixed(2));
                } else {
                    state.cart = state.cart.filter(product => product._id !== action.payload._id);
                    state.totalPrice -= existingProduct.price;
                }
            }
        },
        clearCart: (state) => {
            state.cart = [];
            state.totalPrice = 0;
        }
    },
});

export const { addToCart, increase, decrease, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
