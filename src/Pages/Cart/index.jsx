import From from "./From";
import Item from "./Item";
import RoutesCart from "./Routes";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setGetTotals } from "../../Redux/cartSlice";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);
  const { cartTotalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setGetTotals());
    return () => {};
  }, [cartItems, dispatch]);

  return (
    <>
      <RoutesCart />
      <div className="mb-10 flex justify-around">
        <div className="px-4 pt-8">
          <p className="text-xl font-medium">Order Summary</p>
          <p className="text-gray-400">
            Check your items. And select a suitable shipping method.
          </p>
          {cartItems.length === 0 ? (
            <img
              className="my-10"
              src="http://hsnbazar.com/images/empty-cart.png"
              alt=""
            />
          ) : (
            <Item  items={cartItems} />
          )}
        </div>
        <From total={cartTotalAmount} />
      </div>
    </>
  );
}

export default Cart;
