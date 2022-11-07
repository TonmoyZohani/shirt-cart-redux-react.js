import { createSlice } from "@reduxjs/toolkit";
import cartItems from "../../cartItems";

const initialState = {
  cartItems: cartItems,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },

    removeItem: (state, action) => {
      const itemId = action.payload;
      console.log(action);
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },

    increase: (state, action) => {
      const itemId = action.payload;
      console.log(action);
      //   console.log(itemId);
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.amount = cartItem.amount + 1;
    },

    decrease: (state, action) => {
      const itemId = action.payload;
      const cartItem = state.cartItems.find((item) => item.id === itemId);
      cartItem.amount -= 1;
    },

    calculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
});

console.log(cartSlice);

export const { clearCart, removeItem, increase, decrease, calculateTotals } =
  cartSlice.actions;

export default cartSlice.reducer;

// import { createSlice } from "@reduxjs/toolkit";
// import cartItems from "../../cartItems";

// const initialState = {
//   cartItems: cartItems,
//   amount: 4,
//   total: 0,
//   isLoading: true,
// };

// const cartSlice = createSlice({
//   name: "Cart",
//   initialState: initialState,
//   reducers: {
//     clearCart: (state) => {
//       state.cartItems = [];
//     },

//     removeItem: (state, action) => {
//       const itemId = action.payload;
//       state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
//     },

//     increase: (state, { payload }) => {
//       const cartItem = state.cartItems.find((item) => item.id === payload.id);
//       cartItem.amount = cartItem.amount + 1;
//     },

//     decrease: (state, { payload }) => {
//       const cartItem = state.cartItems.find((item) => item.id === payload.id);
//       cartItem.amount = cartItem.amount - 1;
//     },

//     calculateTotal: (state) => {
//       let amount = 0;
//       let total = 0;

//       state.cartItems.forEach((item) => {
//         amount += amount + state.amount;
//         total += item.amount * item.price;
//       });

//       state.amount = amount;
//       state.total = total;
//     },
//   },
// });

// console.log(cartSlice);

// export const { clearCart, removeItem, increase, decrease, calculateTotal } =
//   cartSlice.actions;

// export default cartSlice.reducer;
