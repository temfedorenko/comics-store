import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { cartSelector } from "./cartSlice";
import CartItem from "./CartItem";

import "./CartList.scss";

const CartList = () => {
  const cart = useSelector(cartSelector);

  const uniqueCart = [...new Map(cart.map((item) => [item["id"], item])).values()];
  const amount = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  const total = `Total for ${cart.length} ${cart.length === 1 ? "item" : "items"}`;

  const renderedCart = uniqueCart.map((comic) => (
    <CSSTransition key={comic.id} timeout={600} classNames="item">
      <CartItem key={comic.id} comic={comic} />
    </CSSTransition>
  ));

  return (
    <div className="cart">
      <TransitionGroup component="ul" className="cart__items">
        {renderedCart}
      </TransitionGroup>
      <div className="cart__checkout">
        <div className="cart__checkout-total">
          <span className="cart__checkout-amount">${amount}</span>
          <span className="cart__checkout-quantity">{total}</span>
        </div>
        <button className="cart__checkout-btn button">Checkout</button>
      </div>
    </div>
  );
};

export default CartList;
