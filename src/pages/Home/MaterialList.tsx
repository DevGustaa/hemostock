import { Box } from "@mui/material";
import ListTextStruct from "./ListStruct";
import MaterialMap from "./MaterialMap";

type MaterialItem = {
  name: string;
  cod: number;
  stats: boolean;
  quant: number;
};

type MaterialListProps = {
  filtermap: MaterialItem[];
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
      }}
    >
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
            key={index}
            name={item.name}
            cod={item.cod}
            stats={item.stats}
            quant={item.quant}
          />
        ))}
      </Box>
    </Box>
  );
};
export default MaterialList;
