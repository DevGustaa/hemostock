import { Box } from "@mui/material";
import ListTextStruct from "../../components/ListStruct";

type MaterialMapProps = {
  codigo_sistema: number;
  codigo_material: number;
  nome: string;
  quantidade: string;
  status: string;
  id: number;
};

const MaterialMap = ({
  nome,
  codigo_sistema,
  status,
  quantidade,
}: MaterialMapProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        boxSizing: "border-box",
        justifyContent: "center",
        alignItems: "center",
        height: "46px",
        paddingInline: "5px",
        borderBottom: "1px solid #CFDEE8",
      }}
    >
      <ListTextStruct text={nome} tooltip />
      <ListTextStruct text={codigo_sistema} isNumber />
      <Box sx={{ width: "25%", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            backgroundColor: status ? "#ADFFD9" : "#FFADAE",
            width: "140px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            borderRadius: "8px",
          }}
        >
          <ListTextStruct
            text={status ? "Possui" : "Falta"}
            isDecoration
            isBold
          />
        </Box>
      </Box>
      <ListTextStruct text={quantidade + " unid"} isNumber />
    </Box>
  );
};
export default MaterialMap;
