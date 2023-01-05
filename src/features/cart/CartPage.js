import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import GoBackButton from "../../components/goBackButton/GoBackButton";
import CartList from "./CartList";
import { cartSelector } from "./cartSlice";

const CartPage = () => {
  const cart = useSelector(cartSelector);

  const сontent =
    cart.length === 0 ? (
      <div className="section-info">
        <h2>Please, add comics to the cart </h2>
        <Link to="/comics" className="hero-emoji">
          🦸‍♀️
        </Link>
      </div>
    ) : (
      <CartList />
    );
  return (
    <section>
      <GoBackButton />
      <h1 className="section-title">Cart</h1>
      {сontent}
    </section>
  );
};

export default CartPage;
