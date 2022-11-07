import React, { useEffect } from "react";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, calculateTotals } from "../features/cart/cartSlice";
import { openModal } from "../features/cart/modal/modalSlice";

const CartContainer = () => {
  const dispatch = useDispatch();

  const { cartItems, amount, total } = useSelector((store) => store.cart);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems]);

  if (amount < 1) {
    return (
      <section className="cart">
        <header>
          <h2>
            {" "}
            <u>T-Shirt Cart Bag</u>
          </h2>
          <h4 className="empty-cart">Is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <section className="cart">
      <header>
        <h2>
          {" "}
          <u>T-Shirt Cart Bag</u>
        </h2>
      </header>
      <div>
        {cartItems.map((item) => {
          return <CartItem key={item.id} {...item} />;
        })}
      </div>
      <footer>
        <hr />
        <div className="cart-total">
          <h4>
            total <span>${total.toFixed(2)}</span>
          </h4>
        </div>
        <button
          className="btn clear-btn"
          onClick={() => {
            dispatch(openModal());
          }}
        >
          Clear Cart
        </button>
      </footer>
    </section>
  );
};

export default CartContainer;
