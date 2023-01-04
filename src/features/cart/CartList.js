import { useSelector } from "react-redux";

import { cartSelector } from "./cartSlice";
import CartItem from "./CartItem";

import "./CartList.scss";
import { useEffect, useState } from "react";

const CartList = () => {
  const cart = useSelector(cartSelector);
  const [amount, setAmount] = useState(0);
  const [quantity, setQuantity] = useState(cart.length);

  const calcAmount = () => {
    return cart.reduce((sum, item) => sum + item.price, 0);
  };

  // const calcQuantity = () => {
  //   return `Total for ${quantity} ${quantity === 1 ? "item" : "items"}`;
  // }

  useEffect(() => {
    setQuantity(cart.length);
  }, [cart]);

  useEffect(() => {
    setAmount(calcAmount());
  }, [cart]);

  const changeAmount = (sum) => {
    setAmount((amount) => amount + sum);
  };

  const changeQuantity = (num) => {
    setQuantity((quantity) => quantity + num);
  };

  // const amount = cart.reduce((sum, item) => sum + item.price, 0).toFixed(2);
  const totalItems = `Total for ${quantity} ${quantity === 1 ? "item" : "items"}`;

  const renderedCart = cart.map((comic) => {
    return (
      <CartItem
        key={comic.id}
        comic={comic}
        changeAmount={changeAmount}
        changeQuantity={changeQuantity}
      />
    );
  });

  return (
    <div className="cart">
      <ul className="cart__items">{renderedCart}</ul>
      <div className="cart__checkout">
        <div className="cart__checkout-total">
          <span className="cart__checkout-amount">${amount.toFixed(2)}</span>
          <span className="cart__checkout-quantity">{totalItems}</span>
        </div>
        <button className="cart__checkout-btn button">Checkout</button>
      </div>
    </div>
  );
};

export default CartList;
