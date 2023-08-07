import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import { RestaurantsContextProvider } from "./contexts/RestaurantsContext.jsx";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <RestaurantsContextProvider>
        <App />
      </RestaurantsContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
