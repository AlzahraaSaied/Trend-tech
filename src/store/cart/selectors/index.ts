import { RootState } from "@store";
export const getCartItemsSelector = (state: RootState) => Object.values(state.cart.items);
export const getCartTotalQuantitySelector = (state: RootState) =>
  Object.values(state.cart.items).reduce((acc, i) => acc + i.quantity, 0);
export const getCartTotalPriceSelector = (state: RootState) =>
  Object.values(state.cart.items).reduce((acc, i) => acc + i.quantity * i.price, 0); 