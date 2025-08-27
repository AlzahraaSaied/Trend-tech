import { createSlice, PayloadAction } from "@reduxjs/toolkit";


export interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
  image: string;
}

interface CartState {
  items: Record<string, CartItem>; 
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: {},
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const id = action.payload.id;

      if (state.items[id]) {
        state.items[id].quantity += action.payload.quantity;
      } else {
        state.items[id] = action.payload;
      }


      const allItems = Object.values(state.items);
      state.totalQuantity = allItems.reduce((acc, i) => acc + i.quantity, 0);
      state.totalPrice = allItems.reduce((acc, i) => acc + i.quantity * i.price, 0);
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      delete state.items[action.payload];

      const allItems = Object.values(state.items);
      state.totalQuantity = allItems.reduce((acc, i) => acc + i.quantity, 0);
      state.totalPrice = allItems.reduce((acc, i) => acc + i.quantity * i.price, 0);
    },
    changeQuantity: (state, action: PayloadAction<{ id: string; quantity: number }>) => {
      const { id, quantity } = action.payload;
      if (state.items[id]) state.items[id].quantity = quantity;

      const allItems = Object.values(state.items);
      state.totalQuantity = allItems.reduce((acc, i) => acc + i.quantity, 0);
      state.totalPrice = allItems.reduce((acc, i) => acc + i.quantity * i.price, 0);
    },
    clearCart: (state) => {
      state.items = {};
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const { addToCart, removeFromCart, changeQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;



