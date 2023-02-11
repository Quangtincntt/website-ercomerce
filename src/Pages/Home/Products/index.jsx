import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../../Components/Button";
import { fetchProducts } from "../../../Redux/productsSlice";
function Products() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className="px-5">
      <h1 className="text-4xl my-12 text-center">PRODUCTS</h1>
      <div className="grid grid-cols-4 gap-8 md:grid-cols-2">
        {data.map((item, index) => {
          const { title, price, img, btn } = item;
          return (
            <div
              className="bg-sky-400  rounded-xl  transition-all duration-700 ease-in-out w-full hover:scale-105"
              key={index}
            >
              <h1 className="text-center text-xl my-4 font-medium ">{title}</h1>
              <img
                className="transitions-theme hover:-rotate-12 h-36 w-64 p-5"
                src={img}
                alt=""
              />
              <p className="text-center text-xl">{price} $</p>
              <Button
                to={`/detail/${title}`}
                className="bg-white p-2 my-4 ml-3 rounded-xl "
                title={btn}
              ></Button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
