import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import { cartSelector } from "./cartSlice";
import CartItem from "./CartItem";

import "./CartList.scss";
import { useEffect } from "react";

const CartList = () => {
  const cart = useSelector(cartSelector);

  const uniqueCart = [...new Map(cart.map((item) => [item["id"], item])).values()];

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [uniqueCart]);

  const renderedCart = uniqueCart.map((comic) => (
    <CSSTransition key={comic.id} timeout={600} classNames="item">
      <CartItem key={comic.id} comic={comic} />
    </CSSTransition>
  ));

  return (
    <TransitionGroup component="ul" className="cart__items">
      {renderedCart}
    </TransitionGroup>
  );
};

export default CartList;
