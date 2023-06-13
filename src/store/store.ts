import { configureStore  } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import categorySlice from "./categories/category.slice";
import cartSlice from "./cart/cart.slice";
import userSlice from "./user/user.slice";

const reducers = combineReducers({
  cart: cartSlice,
  category: categorySlice,
  user: userSlice,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [logger],
});

export const persistor = persistStore(store);
