import { useParams } from "react-router";
import { useEffect } from "react";

import { fetchProducts } from "../../Redux/productsSlice";
import { useDispatch, useSelector } from "react-redux";

import Button from "./../../Components/Button/index";
import Sales from "./Sales";
import { setAddItemToCart, setOpenCart } from "../../Redux/cartSlice";

function Detail() {
  const dispatch = useDispatch();
  const { title } = useParams();
  const { data } = useSelector((state) => state.products);

  const detail = data.filter((item) => {
    return item.title === title;
  });
  
  useEffect(() => {
    dispatch(fetchProducts());
    return () => {};
  }, [dispatch]);

  return (
    <div className="p-20">
      {detail.map((item, index) => {
        const { id, title, price, img, text } = item;
        return (
          <div className="flex justify-around md:flex-col" key={index}>
            <div>
              <img className="w-96" src={img} alt="" />
            </div>
            <div className="p-4">
              <p>{id}</p>
              <p className="my-4">{text}</p>
              <p className="text-4xl  my-4">{title}</p>
              <p className="text-4xl">{price} $ </p>
              <Button
                onClick={() => {
                  dispatch(setAddItemToCart(item));
                  dispatch(
                    setOpenCart({
                      cartState: true,
                    })
                  );
                }}
                className="bg-sky-300 p-2 my-4 rounded-xl"
                title="Add To Cart"
              ></Button>
            </div>
          </div>
        );
      })}
      <div>
        <h1 className="text-4xl my-10">Popular Sales</h1>
        <Sales />
      </div>
    </div>
  );
}
export default Detail;
