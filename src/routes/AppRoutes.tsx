import { JSX } from "react";
import { Route, Routes } from "react-router-dom";

import LoginPage from "../pages/Login/LoginPage";
import StructPage from "../structpage";
import PrivateRoute from "./PrivateRoute";

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <StructPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
