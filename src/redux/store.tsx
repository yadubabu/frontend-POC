import React from "react";
import { createStore } from "redux";
import { applyMiddleware, compose } from "redux";
import "bootstrap/dist/css/bootstrap.min.css";
import reducers from "./reducers";
import promiseMiddleware from "redux-promise";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = composeEnhansers(
  applyMiddleware(promiseMiddleware)
)(createStore);

export const store = createStoreWithMiddleware(reducers);
