import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
  cartState: false,
  cartItems: [],
  cartTotalAmount: 0,
};

const CartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    setOpenCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setCloseCart: (state, action) => {
      state.cartState = action.payload.cartState;
    },
    setAddItemToCart: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success(`Item QTY Increased`);
      } else {
        const temp = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(temp);
        toast.success(`${action.payload.title} added to Cart`);
      }
    },
    setRemoveItemFromCart: (state, action) => {
      const removeItem = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.cartItems = removeItem;
      toast.success(`${action.payload.title} Removed From Cart`);
    },
    setIncreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;

        toast.success(`Item QTY Increased`);
      }
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
    setDecreaseItemQTY: (state, action) => {
      const itemIndex = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.cartItems[itemIndex].cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;

        toast.success(`Item QTY Decreased`);
      }
    },
    setGetTotals: (state, action) => {
      let { totalAmount } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const totalPrice = price * cartQuantity;
          cartTotal.totalAmount += totalPrice;
          return cartTotal;
        },
        {
          totalAmount: 0,
        }
      );
      state.cartTotalAmount = totalAmount;
    },
    setProductOrder: (state, action) => {
      state.ProductOrder = action.payload.ProductOrder;
    },
  },
});

export const {
  // Open - Close: Cart
  setOpenCart,
  setCloseCart,

  //* CRUD Products
  setAddItemToCart,
  setIncreaseItemQTY,
  setRemoveItemFromCart,
  setDecreaseItemQTY,

  //* Total
  setGetTotals,
} = CartSlice.actions;

export default CartSlice.reducer;
