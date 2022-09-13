import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import { PlanetProvider } from "./contexts/planet.context";

import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <PlanetProvider>
        <App />
      </PlanetProvider>
    </BrowserRouter>
  </React.StrictMode>
);
