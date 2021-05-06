// configure store
import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";

const logger = (store) => {
  return (next) => {
    return (action) => {
      console.log("[Middleware Dispatching]", action);
      const result = next(action);
      console.log("[Middleware] next state", store.getState());
      return result;
    };
  };
};

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function configureStore(initialState) {
  return createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware(logger))
  );
}
