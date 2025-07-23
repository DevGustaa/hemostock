import { Box } from "@mui/material";
import { JSX } from "react";
import AppRoutes from "./routes/AppRoutes";

import Header from "./components/Header";
import SideBar from "./components/Sidebar";

const StructPage = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        boxSizing: "border-box",
        flexDirection: "column",
        width: "100vw",
      }}
    >
      <Header />
      <Box display={"flex"}>
        <SideBar />
        <AppRoutes />
      </Box>
    </Box>
  );
};

export default StructPage;
