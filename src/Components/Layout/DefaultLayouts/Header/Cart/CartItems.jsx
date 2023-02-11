import { useSelector, useDispatch } from "react-redux";
import {
  setRemoveItemFromCart,
  setIncreaseItemQTY,
  setDecreaseItemQTY,
} from "../../../../../Redux/cartSlice";
function CartItem() {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <>
      {cartItems.map((item, index) => {
        const { img, title, text, cartQuantity, price } = item;
        return (
          <div key={index} className="flex justify-around mb-10 ">
            <img className="w-48 md:w-36" src={img} alt="" />
            <div className="text-white">
              <h1 className="">{title}</h1>
              <p className="my-2">{text}</p>
              <div>
                <span
                  className="cursor-pointer	"
                  onClick={() => dispatch(setIncreaseItemQTY(item))}
                >
                  +
                </span>
                <span className="mx-4">{cartQuantity}</span>
                <span
                  className="cursor-pointer"
                  onClick={() => dispatch(setDecreaseItemQTY(item))}
                >
                  -
                </span>
              </div>
            </div>
            <div className="text-white">
              <p>{cartQuantity * price} $</p>
              <p
                onClick={() => dispatch(setRemoveItemFromCart(item))}
                className="bg-white cursor-pointer text-black text-xs p-2 rounded-xl mt-2"
              >
                Remove
              </p>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default CartItem;
