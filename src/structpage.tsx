import { Box } from "@mui/material";
import { JSX, useCallback, useEffect, useState } from "react";

import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import PedidoPage from "./pages/Pedido/PedidoPage";
import ConfigPage from "./pages/Configurações/ConfigPage";
import AjudaPage from "./pages/Ajuda/AjudaPage";
import { useResponsive } from "./hooks/responsive";

const StructPage = (): JSX.Element => {
  const { isTablet } = useResponsive();
  const [sidebarState, setSidebarState] = useState(true);

  useEffect(() => {
    setSidebarState(isTablet ? true : false);
  }, [isTablet]);

  const handleStateSidebar = useCallback(() => {
    setSidebarState((p) => !p);
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Header onClick={handleStateSidebar} />
      <Box sx={{ display: "flex", flex: "1" }}>
        <Box
          sx={{
            height: "100%",
            display: sidebarState ? "none" : "flex",
            position: isTablet ? "fixed" : "relative",
            zIndex: 1,
          }}
        >
          <SideBar />
        </Box>
        <Box
          sx={{
            display: "flex",
            flex: "1",
          }}
        >
          <Routes>
            <Route path="home" element={<HomePage />} />
            <Route path="entrada_pedido" element={<PedidoPage />} />
            <Route path="configuracoes" element={<ConfigPage />} />
            <Route path="ajuda" element={<AjudaPage />} />
          </Routes>
        </Box>
      </Box>
    </Box>
  );
};

export default StructPage;
