import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./appReducers";

export function configureStore(initialState) {
  return createStore(rootReducer, initialState, applyMiddleware(thunk));
}
