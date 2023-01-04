import { useDispatch } from "react-redux";
import { ReactComponent as DeleteIcon } from "../../assets/icons/close.svg";
import { removeFromCart } from "./cartSlice";

import "./CartItem.scss";
import { useState } from "react";

const CartItem = ({ changeAmount, changeQuantity, comic: { id, thumbnail, title, price } }) => {
  const dispatch = useDispatch();

  const [counter, setCounter] = useState(1);

  const incCounter = () => {
    setCounter((counter) => counter + 1);
    changeAmount(price);
    changeQuantity(1);
  };
  const decCounter = () => {
    if (counter < 2) return;

    setCounter((counter) => counter - 1);
    changeAmount(-price);
    changeQuantity(-1);
  };

  return (
    <li className="cart__item">
      <div className="cart__item-info">
        <div className="cart__item-delete" onClick={() => dispatch(removeFromCart(id))}>
          <DeleteIcon />
        </div>
        <img className="cart__item-img" src={thumbnail} alt={title} />
        <h2 className="cart__item-title">{title}</h2>
      </div>
      <div className="cart__item-action">
        <div className="cart__item-counter">
          <div className="cart__item-counter-btn btn-dec" onClick={decCounter}>
            –
          </div>
          <span className="cart__item-counter-digit">{counter}</span>
          <div className="cart__item-counter-btn btn-inc" onClick={incCounter}>
            +
          </div>
        </div>
        <div className="cart__item-price">${price}</div>
      </div>
    </li>
  );
};

export default CartItem;
