import { createSlice } from '@reduxjs/toolkit';
import { Product } from '../../api';

export type ExtendedProduct = Product & { quantity: number };
const initialState: { products: ExtendedProduct[] } = {
  products: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, actions) => {
      const prodIndex = state.products.findIndex((item) => item.id === actions.payload.id);
      if (prodIndex === -1) {
        state.products = [
          ...state.products,
          { ...actions.payload, quantity: actions.payload?.quantity || 1 },
        ];
      } else {
        state.products[prodIndex].quantity++;
      }
    },
    removeProduct: (state, actions) => {
      const productId = actions.payload.id;
      const productIndex = state.products.findIndex((item) => item.id === productId);

      if (productIndex !== -1) {
        if (state.products[productIndex].quantity === 0) {
          state.products.splice(productIndex, 1);
        } else {
          state.products[productIndex].quantity--;
        }
      }
    },
    reset: (state, actions) => {
      state.products = [];
    },
  },
});

export default cartSlice.reducer;

export const { addProduct } = cartSlice.actions;
