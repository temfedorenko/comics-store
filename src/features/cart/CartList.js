import { useSelector } from "react-redux";

import { cartSelector } from "./cartSlice";
import CartItem from "./CartItem";

import "./CartList.scss";

const CartList = () => {
  const cart = useSelector(cartSelector);

  const renderedCart = cart.map((comic) => {
    return <CartItem key={comic.id} comic={comic} />;
  });

  return <ul className="cart__items">{renderedCart}</ul>;
};

export default CartList;
