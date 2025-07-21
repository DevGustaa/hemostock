import React from "react";
import ReactDOM from "react-dom/client";
import StructPage from "./structpage";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StructPage />
  </React.StrictMode>
);
