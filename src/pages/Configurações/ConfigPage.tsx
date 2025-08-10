import { Box, Typography } from "@mui/material";
import { JSX } from "react";
import AcessList from "./AcessList";
import { useUserProvider } from "../../context/UsuarioListProvider";

const ConfigPage = (): JSX.Element => {
  const { users } = useUserProvider();

  return (
    <Box
      sx={{
        width: "100%",
        boxSizing: "border-box",
        paddingTop: "36px",
        paddingInline: "16px",
      }}
    >
      <Typography fontWeight={"bold"} fontSize={"32px"}>
        Acesso de Profissionais
      </Typography>
      <AcessList userList={users} />
    </Box>
  );
};

export default ConfigPage;
