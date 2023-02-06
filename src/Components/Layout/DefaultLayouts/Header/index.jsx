import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Cart from "./Cart";
import { Page } from "./Routes";
import { setOpenCart } from "../../../../Redux/cartSlice";

function Header() {
  const dispatch = useDispatch();
  const toggleCart = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };
  return (
    <>
      <header className="fixed top-0 w-full  flex justify-between bg-black text-white p-2 z-10">
        <h1 className="mx-4">Nike Store</h1>
        <ul className="flex items-center">
          {Page.map((page, index) => {
            return (
              <Link to={page.path} key={index}>
                <li className="mx-4 cursor-pointer">{page.title}</li>
              </Link>
            );
          })}
          <FaShoppingCart
            onClick={toggleCart}
            className="mx-4 cursor-pointer"
          />
        </ul>
      </header>
      <Cart />
    </>
  );
}

export default Header;
