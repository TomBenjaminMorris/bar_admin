import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import axios from "./axios-bars";
import thunk from "redux-thunk";
import authReducer from "./store/reducers/auth";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  auth: authReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

const app = (
  <Provider store={store}>
    <App />
  </Provider>
);


axios
  .get("/jwt")
  .then((response) => {
    axios.defaults.headers.common["Authorization"] = "jwt " + response.data;
    ReactDOM.render(app, document.getElementById("root"));
    registerServiceWorker();
  })
  .catch((error) => {
    console.log("Index error: " + error);
  });
