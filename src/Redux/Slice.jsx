import { createSlice } from '@reduxjs/toolkit';

const Slice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    addItem(state, action) {
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        // Update quantity and total price
        existingItem.quantity += action.payload.quantity;
        existingItem.totalPrice = parseFloat(existingItem.price * existingItem.quantity).toFixed(2);
      } else {
        // Add new item with totalPrice field
        const newItem = {
          ...action.payload,
          totalPrice: parseFloat(action.payload.price * action.payload.quantity).toFixed(2),
        };
        state.items.push(newItem);
      }

      // Update overall total
      state.total = state.items.reduce(
        (sum, item) => sum + parseFloat(item.totalPrice),
        0
      );
    },
    removeItem(state, action) {
      const itemToRemove = state.items.find((item) => item.id === action.payload.id);
      if (itemToRemove) {
        state.items = state.items.filter((item) => item.id !== action.payload.id);
        state.total -= parseFloat(itemToRemove.totalPrice);
      }
    },
    clearCart(state) {
      state.items = [];
      state.total = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = Slice.actions;
export default Slice.reducer;
