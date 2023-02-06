import CartEmpty from "./CartEmpty";
import CartItem from "./CartItems";
import { useSelector, useDispatch } from "react-redux";
import { MdKeyboardBackspace } from "react-icons/md";
import { setCloseCart, setGetTotals } from "../../../../../Redux/cartSlice";
import Button from "./../../../../Button/index";
import { useEffect } from "react";

function Cart() {
  const dispatch = useDispatch();
  const { cartState } = useSelector((state) => state.cart);
  const { cartItems } = useSelector((state) => state.cart);
  const { cartTotalAmount } = useSelector((state) => state.cart);
  const toggleCart = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 bg-modal duration-500 w-full h-screen opacity-100 z-[250] ${
        cartState
          ? "opacity-100 visible translate-x-0"
          : "opacity-0 invisible translate-x-8"
      }`}
    >
      <div
        className={`bg-modal duration-500 h-screen max-w-xl w-full absolute right-0 ${
          cartState
            ? "opacity-100 visible translate-x-0"
            : "opacity-0 invisible translate-x-8"
        }`}
      >
        <div className="flex justify-between p-4 items-center">
          <div className="flex">
            <MdKeyboardBackspace
              onClick={toggleCart}
              className="bg-white text-black text-xl cursor-pointer"
            />
            <p className="text-white mx-4 ">Your Cart</p>
            <p className="bg-white px-2">( {cartItems.length} items )</p>
          </div>
        </div>
        {cartItems.length === 0 ? <CartEmpty /> : <CartItem />}
        {cartItems.length >= 1 ? (
          <div className="ml-2">
            <div className="flex text-white mb-2 ">
              <p className="font-semibold">SUBTOTAL : </p>
              <p className="ml-2">{cartTotalAmount} $</p>
            </div>
            <Button
              onClick={toggleCart}
              to="/cart"
              className="bg-white text-black  p-2 text-center"
              title="Check Out"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Cart;
