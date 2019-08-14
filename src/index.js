import { applyMiddleware, createStore } from "redux";

import App from "./App";
import { Provider } from "react-redux";
import React from "react";
import ReactDOM from "react-dom";
import dataGate from "./reducers";
import thunk from "redux-thunk";

// if (module.hot) {
//   module.hot.accept();
// }

let store = createStore(dataGate, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
