import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App.jsx";
import { BooksDataContextProvider } from "./contexts/BooksDataContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <BooksDataContextProvider>
        <App />
      </BooksDataContextProvider>
    </Router>
  </React.StrictMode>
);
