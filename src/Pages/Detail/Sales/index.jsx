import axios from "axios";
import { useEffect, useState } from "react";
import Button from "../../../Components/Button";
function Sales() {
  const [result, setResult] = useState([]);
  useEffect(() => {
    axios
      .get("https://json-sever-api.vercel.app/products")
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    return () => {};
  }, []);

  const products = result.slice(5, 8);

  return (
    <div className="grid grid-cols-3 gap-10">
      {products.map((item, index) => {
        const { title, price, img, btn } = item;
        return (
          <div
            className="bg-sky-400  rounded-xl  transition-all duration-700 ease-in-out w-full hover:scale-105"
            key={index}
          >
            <h1 className="text-center text-xl my-4 font-medium ">{title}</h1>
            <img
              className="transitions-theme hover:-rotate-12 h-36 w-64 p-5 mx-auto"
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
  );
}

export default Sales;
