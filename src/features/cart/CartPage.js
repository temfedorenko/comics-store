import { useSelector } from "react-redux";
import GoBackButton from "../../components/goBackButton/GoBackButton";
import CartList from "./CartList";
import { cartSelector } from "./cartSlice";

const CartPage = () => {
  const cart = useSelector(cartSelector);

  const сontent =
    cart.length === 0 ? (
      <h2 className="section-info">Please add comics to the cart</h2>
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
