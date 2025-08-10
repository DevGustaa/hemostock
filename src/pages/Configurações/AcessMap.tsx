import { Box, Button } from "@mui/material";
import { JSX } from "react";
import ListTextStruct from "../../components/ListStruct";

type AcessMapProps = {
  id: number;
  user: string;
  coren: number;
  senha_hash: string;
  crido_em: number;
  atualizado_em: number;
};

const AcessMap = ({ user, coren }: AcessMapProps): JSX.Element => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        borderBottom: "1px solid #CFDEE8",
        paddingInline: "5px",
      }}
    >
      <ListTextStruct text={user} />
      <ListTextStruct text={coren} />
      <ListTextStruct text="*****************" />

      <Box sx={{ width: "320px", paddingLeft: "40px" }}>
        <Button sx={{ color: "black", fontSize: "12px", fontWeight: "bold" }}>
          Mudar senha
        </Button>
      </Box>
      <Box sx={{ width: "320px" }}>
        <Button sx={{ color: "black", fontSize: "12px", fontWeight: "bold" }}>
          Excluir
        </Button>
      </Box>
    </Box>
  );
};

export default AcessMap;
