import { memo } from "react";
import { Button } from "react-bootstrap";
import { TProduct } from "@types";
import styles from "./styles.module.css";
import SingleProductCard from "@pages/SingleProductCard";

const { cartItem } = styles;

type CartItemProps = TProduct & {
  changeQuantityHandler: (id: number, quantity: number) => void;
  removeItemHandler: (id: number) => void;
};

const CartItem = memo(
  ({ id, title, price, images, removeItemHandler }: CartItemProps) => {

    const handleRemove = () => {
      removeItemHandler(id);
    };

    return (
      <div className={`${cartItem}`}>
        <SingleProductCard
          title={
            <span
              style={{
                marginLeft : "1rem",
                marginRight: "0",
              }}
            >
              {title}
            </span>
          }
          price={price}
    
          img={images[0]}
          direction="column"
        />

        <div className="d-flex align-items-center mt-2">
          
          <Button
            variant="secondary"
            style={{ color: "white", width: "100px" }}
            onClick={handleRemove}
          >
            Remove
          </Button>
        </div>
      </div>
    );
  }
);

CartItem.displayName = "CartItem";
export default CartItem;
