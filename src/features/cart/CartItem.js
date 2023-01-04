import { ReactComponent as DeleteIcon } from "../../assets/icons/close.svg";

import "./CartItem.scss";

const CartItem = ({ comic: { thumbnail, title, price } }) => {
  return (
    <li className="cart__item">
      <div className="cart__item-info">
        <div className="cart__item-delete">
          <DeleteIcon />
        </div>
        <img className="cart__item-img" src={thumbnail} alt={title} />
        <h2 className="cart__item-title">{title}</h2>
      </div>
      <div className="cart__item-action">
        <div className="cart__item-counter"></div>
        <div className="cart__item-price">${price}</div>
      </div>
    </li>
  );
};

export default CartItem;
