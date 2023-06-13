import { RootState } from "../../types/store.types";
import { createSelector } from '@reduxjs/toolkit';
export const selectCurrentUser = createSelector(
    (state: RootState) => state.user.currentUser,
    (currentUser) => currentUser
  );