import { Box } from "@mui/material";
import { JSX } from "react";

import Header from "./components/Header";
import SideBar from "./components/Sidebar";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/HomePage";
import PedidoPage from "./pages/Pedido/PedidoPage";
import ConfigPage from "./pages/Configurações/ConfigPage";
import AjudaPage from "./pages/Ajuda/AjudaPage";

const StructPage = (): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      <Header />
      <Box sx={{ display: "flex", flex: "1" }}>
        <SideBar />
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
