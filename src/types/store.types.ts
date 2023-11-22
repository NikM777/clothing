//store

import { UserData } from "../utils/firebase/firebase.utils";

export type RootState = {
  cart: CartStateType;
  category: CategoriesStateType;
  user: UserStateType;
};

export type CartItemType = {
  id: number;
  name: string;
  quantity: number;
  price: number;
  imageUrl?: string;
};
export type CartStateType = {
  isCartOpen: boolean;
  cartItems: CartItemType[];
};

export type AddItemPayloadType = {
  id: number;
  name: string;
  price: number;
};

export type RemoveItemPayloadType = {
  id: number;
};

export type ClearItemPayloadType = {
  id: number;
};

export type CategoryItemType = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
};

export type CategoryType = {
  title: string;
  imageUrl: string;
  items: CategoryItemType[];
};

export type CategoriesStateType = {
  categories: CategoryType[];
};

export type CategoryMapType = {
  [key: string]: CategoryItemType[];
};

export type UserStateType = {
  currentUser: UserData | null;
};

export type ProductType = {
  name: string;
  price: number;
  imageUrl: string;
  id: number;
};
