import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  information: [],
};

const confirmationSlice = createSlice({
  initialState,
  name: "confirmationOrder",
  reducers: {
    setConfirm: (state, action) => {
      state.information = action.payload.information;
    },
  },
});

export default confirmationSlice.reducer;
export const { setCartItem, setConfirm } = confirmationSlice.actions;
