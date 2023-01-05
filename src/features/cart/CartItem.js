import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import cn from "classnames";

import { ReactComponent as DeleteIcon } from "../../assets/icons/close.svg";
import { itemAdded, itemRemoved, cartUpdated, cartSelector } from "./cartSlice";

import "./CartItem.scss";

const CartItem = ({ comic }) => {
  const { id, thumbnail, title, price } = comic;
  const dispatch = useDispatch();
  const cart = useSelector(cartSelector);

  const [itemCounter, setItemCounter] = useState(1);

  useEffect(() => {
    setItemCounter(cart.filter((item) => item.id === id).length);
  }, [cart]);

  const removeOneComic = () => {
    if (itemCounter === 1) {
      return;
    }
    const indexToRemove = cart.lastIndexOf(comic);
    const newCart = [...cart];
    newCart.splice(indexToRemove, 1);
    dispatch(cartUpdated(newCart));
  };

  const addOneComic = () => {
    dispatch(itemAdded(comic));
  };

  return (
    <li className="cart__item">
      <div className="cart__item-info">
        <div className="cart__item-delete" onClick={() => dispatch(itemRemoved(id))}>
          <DeleteIcon />
        </div>
        <Link to={`/comics/${id}`}>
          <img className="cart__item-img" src={thumbnail} alt={title} />
        </Link>
        <Link to={`/comics/${id}`}>
          <h2 className="cart__item-title">{title}</h2>
        </Link>
      </div>
      <div className="cart__item-action">
        <div className="cart__item-counter">
          <div
            className={cn({
              "cart__item-counter-btn": true,
              "btn-dec": true,
              "btn-disabled": itemCounter === 1,
            })}
            onClick={removeOneComic}>
            –
          </div>
          <div className="cart__item-counter-digit">{itemCounter}</div>
          <div className="cart__item-counter-btn btn-inc" onClick={addOneComic}>
            +
          </div>
        </div>
        <div className="cart__item-price">${price}</div>
      </div>
    </li>
  );
};

export default CartItem;
