import { motion } from "framer-motion";
import { useState } from "react";
import { HiXMark } from "react-icons/hi2";
import { useSelector } from "react-redux";

function Modal() {
  const { information } = useSelector((state) => state.confirmation);
  const { cartItems } = useSelector((state) => state.cart);
  const { cartTotalAmount } = useSelector((state) => state.cart);

  const [open, setOpen] = useState(true);
  return (
    <>
      <button
        onClick={() => setOpen(true)}
        type="submit"
        className="bg-black text-white w-full p-2 mt-4"
      >
        Xac Nhan
      </button>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex fixed top-0 left-0 right-0 bottom-0 bg-modal z-10 "
        >
          <div className=" bg-white m-auto  w-96">
            {information.map((item, index) => {
              const { name, email, number, address } = item;
              return (
                <div key={index} className="p-5">
                  <div className="flex justify-between">
                    <div></div>
                    <h1 className="text-black text-center text-xl mb-4 font-semibold">
                      Confirmation Ticket
                    </h1>
                    <HiXMark className="cursor-pointer" onClick={() => setOpen(false)} />
                  </div>
                  <div className="text-lg">
                    <p className="my-2">Customer's name: {name}</p>
                    <p className="my-2">Email: {email}</p>
                    <p className="my-2">Bank account number: {number}</p>
                    <p className="my-2">Address: {address}</p>
                    <div className="flex">
                      <p>Product: </p>
                    </div>
                    <div className="my-2">
                      {cartItems.map((item, index) => {
                        const { title, cartQuantity, price } = item;
                        return (
                          <div key={index} className="flex justify-between">
                            <p>{title}</p>
                            <p className="ml-2 ">x{cartQuantity}</p>
                            <p>{price * cartQuantity} $</p>
                          </div>
                        );
                      })}
                    </div>
                    <p className="my-2">Shipping: 10 $</p>
                    <p className="mt-4 font-semibold">
                      Total amount: {cartTotalAmount + 10} $
                    </p>
                  </div>
                  <div className="relative bg-black text-white text-center p-4 my-4">
                    <a
                      className="absolute top-1 right-0 left-0 bottom-0"
                      href="https://website-ercomerce.vercel.app/"
                    >
                      Single ticket confirmation
                    </a>
                  </div>
                  <p className="text-center ">
                    Please confirm your order and wait for the operator to
                    contact you, Thank you for shopping at Nike Store ❤
                  </p>
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </>
  );
}
export default Modal;
