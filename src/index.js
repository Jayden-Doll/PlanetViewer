import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { PlanetProvider } from "./contexts/planet.context";

import App from "./App";

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
