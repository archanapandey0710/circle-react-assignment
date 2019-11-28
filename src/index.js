import React from "react";
import ReactDOM from "react-dom";
import "./style.css";

import App from "./container/App";
import * as serviceWorker from "./serviceWorker";

import { Provider as StoreProvider } from "react-redux";
import { PersistGate } from "redux-persist/lib/integration/react";
import { persistor, store } from "./store";

import "font-awesome/css/font-awesome.min.css";

ReactDOM.render(
  <StoreProvider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </StoreProvider>,
  document.getElementById("root")
);

serviceWorker.unregister();
