import { Box, Button, Typography } from "@mui/material";
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
    navigate("/");
  }, []);
  const test = useCallback(() => {
    navigate("/test");
  }, []);
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        minWidth: "250px",
        paddingLeft: "40px",
        marginTop: "36px",
      }}
    >
      <Typography paddingBottom={"16px"}>HemoStock</Typography>
      <ButtonSideBar text="Home" icon={<Home />} onClick={goHome} rota="/" />
      <ButtonSideBar
        text="Saída de material"
        icon={<ArrowLeft />}
        onClick={test}
      />
      <ButtonSideBar text="Pedido" icon={<File />} onClick={test} />
      <ButtonSideBar text="Configurações" icon={<Settings />} onClick={test} />
      <ButtonSideBar
        text="Ajuda"
        icon={<CircleQuestionMark />}
        onClick={test}
      />
    </Box>
  );
};

export default SideBar;
