import { createSlice } from "@reduxjs/toolkit";
import { CategoriesStateType } from "../../types/store.types";

const initialState: CategoriesStateType = {
  categories: [],
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload;
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;
