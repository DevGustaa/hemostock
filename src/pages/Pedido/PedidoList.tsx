import { Box, Typography } from "@mui/material";
import ListTextStruct from "../../components/ListStruct";
import PedidoMap from "./PedidoMap";
import { Material, MaterialUpdateQtd } from "../../models/MaterialListModel";

type PedidoListProps = {
  materialFiltred: Material[];
  onChange: (id: number, updates: MaterialUpdateQtd) => void;
};

const PedidoList = ({ onChange, materialFiltred }: PedidoListProps) => {
  const materialsFiltred = materialFiltred;
  const lenghtFilter = materialsFiltred.length;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        border: "1px solid #1e6ea3ff",
        borderRadius: "12px",
        overflow: "auto",
      }}
    >
      <Box sx={{ minHeight: "300px", minWidth: "600px" }}>
        <Box
          sx={{
            display: "flex",
            height: "46px",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ListTextStruct text={"Nome do material"} isBold />
          <ListTextStruct text={"Código do almox"} isBold />
          <ListTextStruct text={"Status"} isBold />
          <ListTextStruct text={"Quantidade Atual"} isBold />
          <ListTextStruct text={"Quantidade Base"} isBold />
          <ListTextStruct text={"Pendente"} isBold />
          <ListTextStruct text={"Dar entrada"} isBold />
        </Box>
        {lenghtFilter > 0 ? (
          <Box sx={{ width: "100%" }}>
            {materialsFiltred.map((i) => (
              <PedidoMap
                key={i.id}
                id={i.id}
                material_name={i.material_name}
                cod_almox={i.cod_almox}
                status={i.status}
                qtd_atual={i.qtd_atual}
                qtd_base={i.qtd_base}
                onUpdate={onChange}
              />
            ))}
          </Box>
        ) : (
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              borderTop: "1px solid #1e6ea3ff",
              paddingBlock: "5px",
            }}
          >
            <Typography fontWeight={"bold"}>Não existe pendências</Typography>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default PedidoList;
