import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import "semantic-ui-css/semantic.min.css";
import { store } from "./store/rootReducer";
import setupAxios from "./services/setupAxios";
import mockAxios from "./services/mockAxios";
import axios from "axios";
mockAxios(axios);
setupAxios(axios, store);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
