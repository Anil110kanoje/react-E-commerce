import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from 'redux-persist/es/integration/react';

import "./index.css";
import App from "./App";
import store  from "./store";


let persistor = persistStore(store);

ReactDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
