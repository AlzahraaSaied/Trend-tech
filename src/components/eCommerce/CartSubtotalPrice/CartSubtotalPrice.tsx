import { FC } from "react";
import { Button } from "react-bootstrap";
import { CartItem } from "@store/cart/cartSlice";

type Props = {
  products: CartItem[];
  totalPrice?: number; 
  clearCartHandler?: () => void; 
};

const CartSubtotalPrice: FC<Props> = ({ products, totalPrice, clearCartHandler }) => {
  const subtotal =
    totalPrice ??
    products.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div className="cart-subtotal p-3 border rounded mt-3">
      <h4>Subtotal:  <span className="text-muted px-3">${subtotal.toFixed(2)}</span> </h4>
      {clearCartHandler && (
        <Button variant="outline-danger" className="mt-2 fs-5 fw-medium" onClick={clearCartHandler}>
          Clear Cart
        </Button>
      )}
    </div>
  );
};

export default CartSubtotalPrice;
