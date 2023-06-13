import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  CartStateType,
  AddItemPayloadType,
  RemoveItemPayloadType,
  ClearItemPayloadType,
} from "../../types/store.types";

const initialState: CartStateType = {
  isCartOpen: false,
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, { payload }: PayloadAction<AddItemPayloadType>) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === payload.id
      );

      if (existingCartItem) {
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem.id === payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        state.cartItems.push({ ...payload, quantity: 1 });
      }
    },
    removeCartItem: (state, { payload }: PayloadAction<RemoveItemPayloadType>) => {
      const existingCartItem = state.cartItems.find(
        (cartItem) => cartItem.id === payload.id
      );

      if (existingCartItem?.quantity === 1) {
        state.cartItems = state.cartItems.filter(
          (cartItem) => cartItem.id !== payload.id
        );
      }

      state.cartItems = state.cartItems.map((cartItem) =>
        cartItem.id === payload.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
    },

    clearCartItem: (state, { payload }: PayloadAction<ClearItemPayloadType>) => {
      state.cartItems = state.cartItems.filter((cartItem) => {
        return cartItem.id !== payload.id;
      });
    },

    setIsCartOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isCartOpen = payload;
    },
  },
});

export const { addItemToCart, removeCartItem, setIsCartOpen, clearCartItem } =
  cartSlice.actions;

export default cartSlice.reducer;
