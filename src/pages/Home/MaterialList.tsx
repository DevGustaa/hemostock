import { Box } from "@mui/material";

import MaterialMap from "./MaterialMap";
import ListTextStruct from "../../components/ListStruct";
import { Material } from "../../models/MaterialListModel";

type MaterialListProps = {
  filtermap: Material[];
};

const MaterialList = ({ filtermap }: MaterialListProps) => {
  return (
    <Box
      sx={{
        marginTop: "12px",
        width: "100%",
        height: "100%",
        border: "1px solid #CFDEE8",
        borderRadius: "8px",
        overflow: "auto",
      }}
    >
      <Box sx={{ minHeight: "300px", minWidth: "600px" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "46px",
            paddingInline: "5px",
            borderBottom: "1px solid #CFDEE8",
          }}
        >
          <ListTextStruct text="Nome do Material" isBold />
          <ListTextStruct text="Código do Sistema" isBold />
          <ListTextStruct text="Status Matech" isBold />
          <ListTextStruct text="Quantidade em Sala" isBold />
        </Box>
        <Box
          sx={{
            height: "330px",
            overflowY: "auto",
          }}
        >
          {filtermap.map((item, index) => (
            <MaterialMap
              id={item.id}
              key={index}
              nome={item.material_name}
              codigo_material={item.cod_material}
              codigo_sistema={item.cod_almox}
              status={item.status}
              quantidade={item.qtd_atual}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
};
export default MaterialList;
