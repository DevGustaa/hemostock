import { Box, Typography } from "@mui/material";
import { JSX } from "react";
import AppRoutes from "./routes/AppRoutes";
import { Bell, FunnelX, Package2, UserPlus } from "lucide-react";
import Header from "./components/Header";

const StructPage = (): JSX.Element => {
  return (
    <Box
      sx={{ display: "flex", boxSizing: "border-box", flexDirection: "column" }}
    >
      <Header />
      <AppRoutes />
    </Box>
  );
};

export default StructPage;
