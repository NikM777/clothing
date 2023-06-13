import { createSelector } from "@reduxjs/toolkit";
import {
  CategoryMapType,
  RootState,
} from "../../types/store.types";

const selectCategoryReducer = (state: RootState) => state.category.categories;

export const selectCategoriesList = createSelector(
  [selectCategoryReducer],
  (categoriesSlice) => categoriesSlice
);

export const selectCategoriesMap = createSelector(
  [selectCategoriesList],
  (categories): CategoryMapType =>
    categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMapType)
);
