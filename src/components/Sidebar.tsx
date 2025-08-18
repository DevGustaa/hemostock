import { Box, Typography } from "@mui/material";
import { JSX, useCallback } from "react";
import ButtonSideBar from "./Button";
import {
  ArrowLeft,
  CircleQuestionMark,
  File,
  Home,
  Settings,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const SideBar = (): JSX.Element => {
  const navigate = useNavigate();
  const goHome = useCallback(() => {
    navigate("/home");
  }, [navigate]);
  const test = useCallback(() => {
    navigate("/test");
  }, [navigate]);
  const goOrderEntry = useCallback(() => {
    navigate("/entrada_pedido");
  }, [navigate]);
  const goConfigPage = useCallback(() => {
    navigate("/configuracoes");
  }, [navigate]);
  const goAjudaPage = useCallback(() => {
    navigate("/ajuda");
  }, [navigate]);
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        minWidth: "250px",
        paddingLeft: "40px",
        paddingTop: "36px",
        backgroundColor: "#fcfcfcff",
        height: "100%",
      }}
    >
      <Typography paddingBottom={"16px"}>HemoStock</Typography>
      <ButtonSideBar
        text="Home"
        icon={<Home />}
        onClick={goHome}
        rota="/Home"
      />
      <ButtonSideBar
        text="Saída de material"
        icon={<ArrowLeft />}
        onClick={test}
      />
      <ButtonSideBar
        text="Pedido"
        icon={<File />}
        onClick={goOrderEntry}
        rota="/Entrada_Pedido"
      />
      <ButtonSideBar
        text="Configurações"
        icon={<Settings />}
        onClick={goConfigPage}
        rota="/Configuracoes"
      />
      <ButtonSideBar
        text="Ajuda"
        icon={<CircleQuestionMark />}
        onClick={goAjudaPage}
      />
    </Box>
  );
};

export default SideBar;
