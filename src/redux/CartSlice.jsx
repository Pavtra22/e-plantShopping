import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({

  name: "cart",

  initialState: [],

  reducers: {

    addItem: (state, action) => {

      const item = state.find(
        i => i.id === action.payload.id
      );

      if (item) {
        item.quantity += 1;
      } else {
        state.push({
          ...action.payload,
          quantity: 1
        });
      }
    },

    removeItem: (state, action) => {
      return state.filter(
        i => i.id !== action.payload
      );
    },

    updateQuantity: (state, action) => {

      const { id, amount } = action.payload;

      const item = state.find(i => i.id === id);

      if (item) {

        item.quantity += amount;

        if (item.quantity <= 0) {
          return state.filter(i => i.id !== id);
        }
      }
    }

  }

});

export const {
  addItem,
  removeItem,
  updateQuantity
} = CartSlice.actions;

export default CartSlice.reducer;