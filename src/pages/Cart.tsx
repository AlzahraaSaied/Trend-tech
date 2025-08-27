import { Link } from "react-router-dom";
import useCart from "@hooks/useCart";
import { Heading } from "@components/common";
import { TLoading } from "@types";
import { Loading, LottieHandler } from "@components/feedback";
import { CartItemList, CartSubtotalPrice } from "@components/eCommerce";

const Cart = () => {
  const { items, totalPrice, updateQuantity, removeItem, clearAll } = useCart();


  const loading: TLoading = "idle"; 
  return (
    <>
      <Heading title="Cart" />

      <Loading status={loading} error={""} type="cart">
        {items.length > 0 ? (
          <>

            <CartItemList
              products={items}
              changeQuantityHandler={(id, quantity) => updateQuantity(id, quantity)}
              removeItemHandler={(id) => removeItem(id)}
            />

 
            <CartSubtotalPrice
              products={items}
              totalPrice={totalPrice}       
              clearCartHandler={clearAll} 
            />
          </>
        ) : (
          <div className="text-center mt-4">
            <LottieHandler message="Your cart is empty" type="empty" />
            <p className="mt-3 text-secondary">
              Browse categories to find products you like.
            </p>
            <Link to="/products" className="btn btn-secondary mt-3">
              Explore
            </Link>
          </div>
        )}
      </Loading>
    </>
  );
};

export default Cart;
