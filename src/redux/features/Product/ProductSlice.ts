import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the types for the product item and the state
interface ProductItem {
    _id: string;
    title: string;
    price: number;
    imgurl: string;
    rating?: number;
    quantity: number;
    brand?: string;
    category?: string;
    description?: string;
}

interface ProductState {
    products: ProductItem[];
}

// Initial state with defined types
const initialState: ProductState = {
    products: [],
};

export const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<ProductItem>) => {
            state.products.push(action.payload);
        },
        removeSearch: (state) => {
            state.products = []
        },
    },
});

export const { addProduct, removeSearch } = productSlice.actions;
export default productSlice.reducer;
