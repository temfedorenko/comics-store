import { useSelector } from "react-redux";

import { cartSelector } from "./cartSlice";
import CartItem from "./CartItem";

import "./CartList.scss";
import { useEffect, useState } from "react";

const CartList = () => {
  const cart = useSelector(cartSelector);

  const uniqueCart = [...new Map(cart.map((item) => [item["id"], item])).values()];
  const amount = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  const total = `Total for ${cart.length} ${cart.length === 1 ? "item" : "items"}`;

  const renderedCart = uniqueCart.map((comic) => {
    return <CartItem key={comic.id} comic={comic} />;
  });

  return (
    <div className="cart">
      <ul className="cart__items">{renderedCart}</ul>
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
