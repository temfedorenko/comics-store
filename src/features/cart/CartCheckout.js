import { useSelector } from "react-redux";

import { cartSelector } from "./cartSlice";
import "./CartCheckout.scss";

const CartCheckout = () => {
  const cart = useSelector(cartSelector);

  const amount = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  const total = `Total for ${cart.length} ${cart.length === 1 ? "item" : "items"}`;

  return (
    <div className="cart__checkout">
      <div className="cart__checkout-total">
        <span className="cart__checkout-amount">${amount}</span>
        <span className="cart__checkout-quantity">{total}</span>
      </div>
      <button className="cart__checkout-btn button">Checkout</button>
    </div>
  );
};

export default CartCheckout;
