import { Middleware } from "redux";
import { RootState } from "../../types/store.types";

type Action = {
  type: string;
  payload?: any;
};

export const loggerMiddleware: Middleware<object, RootState> =
  (store) => (next) => (action: Action) => {
    if (!action.type) {
      return next(action);
    }

    console.log("type: ", action.type);
    console.log("payload: ", action.payload, 'payload');
    console.log("currentState: ", store.getState());

    next(action);

    console.log("next state: ", store.getState());
  };
