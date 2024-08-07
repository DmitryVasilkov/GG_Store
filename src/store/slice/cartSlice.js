// src/features/cart/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cartItems: [],
  isCartVisible: false,
  isOrderModalOpen: false,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].quantity += 1;
        state.cartItems[itemIndex].totalPrice = state.cartItems[itemIndex].quantity * parseFloat(state.cartItems[itemIndex].price);
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1, totalPrice: parseFloat(action.payload.price) });
      }
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload.id);
    },
    clearCart(state) {
      state.cartItems = [];
    },
    toggleCartVisibility(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    toggleOrderModal(state) {
      state.isOrderModalOpen = !state.isOrderModalOpen;
    },
  },
});

export const {
  addToCart, removeFromCart, clearCart, toggleCartVisibility, toggleOrderModal,
} = cartSlice.actions;
export default cartSlice.reducer;
