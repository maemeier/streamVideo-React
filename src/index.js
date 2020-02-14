import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";

import App from "./component/App";
import reducers from "./reducers";

const composeEnhancers =
  window.__REDUX__DEVTOOLS__EXTENSTION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware()));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
