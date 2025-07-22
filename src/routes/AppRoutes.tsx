import { JSX } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/Home/Home";
import Test from "../pages/test";

const AppRoutes = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/test" element={<Test />} />
    </Routes>
  );
};

export default AppRoutes;
