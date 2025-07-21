import React from "react";
import ReactDOM from "react-dom/client";
import StructPage from "./structpage";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <StructPage />
    </BrowserRouter>
  </React.StrictMode>
);
