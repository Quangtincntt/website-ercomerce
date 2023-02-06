import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store from "./Redux/store";
import App from "./App";
import GlobalStyles from "./Components/GlobalStyles";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles>
        <Toaster position="top-left" reverseOrder={false} />
        <App />
      </GlobalStyles>
    </Provider>
  </React.StrictMode>
);
