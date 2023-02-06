function Item({ items }) {
  return (
    <>
      {items.map((item, index) => {
        const { img, title, text, cartQuantity, price } = item;
        return (
          <div key={index} className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
            <div className="flex rounded-lg bg-white sm:flex-row">
              <img
                className="m-2 rounded-md w-64 object-cover object-center"
                src={img}
                alt=""
              />
              <div className="w-full px-4 py-4">
                <div className="flex justify-between">
                  <div>
                    <span className="font-semibold">{title}</span>
                    <p className="my-2">{text}</p>
                  </div>
                  <span className="ml-6">x {cartQuantity}</span>
                </div>
                <p className="text-lg font-bold">$ {price}</p>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Item;
