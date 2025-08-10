import { Box } from "@mui/material";
import { JSX } from "react";
import AcessMap from "./AcessMap";
import ListTextStruct from "../../components/ListStruct";
import { UserList } from "../../models/UsuarioListModel";

type AcessListProps = {
  userList: UserList[];
};

const AcessList = ({ userList }: AcessListProps): JSX.Element => {
  return (
    <Box
      sx={{
        width: "100%",
        border: "1px solid #CFDEE8",
        borderRadius: "8px",
        overflow: "auto",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          minWidth: "500px",
          borderBottom: "1px solid #CFDEE8",
        }}
      >
        <ListTextStruct text={"Nome"} isBold />
        <ListTextStruct text={"Coren"} isBold />
        <ListTextStruct text={"Senha"} isBold />
        <Box
          sx={{
            color: "black",
            fontSize: "12px",
            width: "320px",
            paddingLeft: "40px",
          }}
        />
        <Box sx={{ color: "black", fontSize: "12px", width: "320px" }} />
      </Box>
      {userList.map((v) => (
        <AcessMap
          key={v.id}
          id={v.id}
          user={v.nome}
          coren={v.coren}
          senha_hash={v.senha_hash}
          atualizado_em={v.atualizado_em}
          crido_em={v.criado_em}
        />
      ))}
    </Box>
  );
};

export default AcessList;
