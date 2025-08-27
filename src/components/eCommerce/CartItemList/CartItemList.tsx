import { FC } from "react";
import { Button, Image } from "react-bootstrap";
import { CartItem } from "@store/cart/cartSlice";

type Props = {
  products: CartItem[];
  changeQuantityHandler: (id: string, quantity: number) => void;
  removeItemHandler: (id: string) => void;
};

const CartItemList: FC<Props> = ({
  products,
  changeQuantityHandler,
  removeItemHandler,
}) => {
  return (
    <div className="cart-item-list">
      {products.map((item) => (
        <div
          key={item.id}
          className="d-flex align-items-center justify-content-between mb-3 p-2 border rounded"
        >
          <Image
            src={item.image}
            alt={item.title}
            style={{ width: 80, height: 80, objectFit: "cover" }}
            rounded
          />
          <div className="flex-fill ms-3">
            <h5>{item.title}</h5>
            <div className="d-flex align-items-center gap-2">
              <input
                type="number"
                min={1}
                value={item.quantity}
                className="form-control me-5"
                style={{ width: 80 }}
                onChange={(e) =>
                  changeQuantityHandler(item.id, Number(e.target.value))
                }
              />
              <Button
                variant="danger"
                className="mx-2 fs-5 fw-medium"
                onClick={() => removeItemHandler(item.id)}
              >
                Remove
              </Button>
            </div>
          </div>
          <p className="fw-bold ms-3">${(item.price * item.quantity).toFixed(2)}</p>
        </div>
      ))}
    </div>
  );
};

export default CartItemList;
