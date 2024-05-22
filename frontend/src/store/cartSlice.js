import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  initialState,
  name: "cart",
  reducers: {
    addToCart: (state, action) => {
      const products = [...state?.items];
      const dataExist = products?.find(
        (item) => item?._id === action?.payload?._id
      );
      let itemsToSave;
      if (dataExist) {
        itemsToSave = products?.map((item) =>
          item?._id === action?.payload?._id
            ? { ...item, cartQuantity: action?.payload?.cartQuantity }
            : item
        );
      } else {
        itemsToSave = [...products, action.payload];
      }
      state.items = itemsToSave;
    },
  },
});

export const { addToCart } = cartSlice.actions;
export default cartSlice.reducer;
