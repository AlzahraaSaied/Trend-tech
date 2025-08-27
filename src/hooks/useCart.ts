import { useAppDispatch, useAppSelector } from "@store/hooks";
import { CartItem, addToCart, removeFromCart, changeQuantity, clearCart } from "@store/cart/cartSlice";
import { getCartItemsSelector, getCartTotalPriceSelector } from "@store/cart/selectors/index";

const useCart = () => {
  const dispatch = useAppDispatch();
  const items = useAppSelector(getCartItemsSelector);
  const totalPrice = useAppSelector(getCartTotalPriceSelector);

  const addItem = (item: Omit<CartItem, "quantity">, quantity: number = 1) => {
    dispatch(addToCart({ ...item, quantity }));
  };

  const removeItem = (id: string) => {
    dispatch(removeFromCart(id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    dispatch(changeQuantity({ id, quantity }));
  };

  const clearAll = () => {
    dispatch(clearCart());
  };

  return { items, totalPrice, addItem, removeItem, updateQuantity, clearAll };
};

export default useCart;
