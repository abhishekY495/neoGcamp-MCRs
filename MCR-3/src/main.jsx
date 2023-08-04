import React from "react";
import ReactDOM from "react-dom/client";

import { SnacksDataContextProvider } from "./context/SnacksDataContext";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnacksDataContextProvider>
      <App />
    </SnacksDataContextProvider>
  </React.StrictMode>
);
