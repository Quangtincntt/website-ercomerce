import { useFormik } from "formik";
import * as Yup from "yup";
import { useSelector, useDispatch } from "react-redux";
import { setConfirm } from "../../../Redux/confirmationSlice";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Modal from "./modal";

function Input() {
  const dispatch = useDispatch();
  const [information, setInformation] = useState([]);
  const { cartItems } = useSelector((state) => state.cart);
  const btn = () => {
    if (cartItems.length >= 1 && information.length >= 1) {
      return <Modal />;
    }

    if (cartItems.length >= 1 || information.length < 1) {
      return (
        <button type="submit" className="bg-black text-white w-full p-2 mt-4">
          xac nhan
        </button>
      );
    }

    if (cartItems.length === 0) {
      return (
        <button
          type="submit"
          onClick={() => toast.error("This didn't work.")}
          className="bg-black text-white w-full p-2 mt-4"
        >
          xac nhan
        </button>
      );
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      number: "",
      address: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string()
        .required("Required")
        .matches(
          /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/,
          "Please enter a valid email address"
        ),
      number: Yup.string()
        .required("Required")
        .matches(/^[0-9]*$/, "phai la so")
        .min(9, "Please enter the correct account number")
        .max(14, "Please enter the correct account number"),
      address: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      setInformation([values]);
      dispatch(setConfirm({ information: [values] }));
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col">
          <label className="mt-4">Email</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.email}
            className="p-2 my-2 border-zinc-700 border-2"
            name="email"
            id="email"
            placeholder="your.email@gmail.com"
            type="text"
          />
          {formik.errors.email && (
            <span className="text-red-600 mb-2">{formik.errors.email}</span>
          )}
          <label className="mt-4">Card Holder</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.name}
            className="p-2 my-2 border-zinc-700 border-2 uppercase"
            name="name"
            id="name"
            placeholder="YOUR FULL NAME HERE"
            type="text"
          />
          {formik.errors.name && (
            <span className="text-red-600 mb-2">{formik.errors.name}</span>
          )}
          <label className="mt-4">Card Details</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.number}
            className="p-2 my-2 border-zinc-700 border-2"
            name="number"
            id="number"
            placeholder="XXXX-XXXX-XXXX-XXXX"
            type="text"
          />
          {formik.errors.number && (
            <span className="text-red-600 mb-2">{formik.errors.number}</span>
          )}
          <label className="mt-4">Billing Address</label>
          <input
            onChange={formik.handleChange}
            value={formik.values.address}
            className="p-2 my-2 border-zinc-700 border-2"
            name="address"
            id="address"
            placeholder="Street Address"
            type="text"
          />
          {formik.errors.address && (
            <span className="text-red-600 mb-2">{formik.errors.address}</span>
          )}
        </div>
        {btn()}
      </form>
    </div>
  );
}

export default Input;
