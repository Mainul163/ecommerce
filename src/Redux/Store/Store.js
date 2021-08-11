import { combineReducers, compose, createStore } from "redux";
import {
  productReducer,
  selectedProductReducer,
} from "../Reducer/ProductReducer";

// const composeEnhancers =
//   (typeof window !== "undefined" &&
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
//   compose;

const reducers = combineReducers({
  allproduct: productReducer,
  product: selectedProductReducer,
});
export const store = createStore(reducers);
