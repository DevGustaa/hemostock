import { Box, TextField } from "@mui/material";
import ListTextStruct from "../../components/ListStruct";
import { MaterialUpdateQtd } from "../../models/MaterialListModel";
import { ChangeEvent, useEffect, useState } from "react";
type PedidoMapProps = {
  id: number;
  cod_almox: number;
  material_name: string;
  qtd_atual: string;
  qtd_base: string;
  status: string;
  onUpdate: (id: number, updates: MaterialUpdateQtd) => void;
};
const PedidoMap = ({
  id,
  material_name,
  cod_almox,
  status,
  qtd_atual,
  qtd_base,
  onUpdate,
}: PedidoMapProps) => {
  const [localQtdAtualInicial, setLocalQtdAtualInicial] = useState<number>(
    Number(qtd_atual) || 0
  );
  const [localQtdAtualNovo, setLocalQtdAtualNovo] = useState<string>("");

  useEffect(() => {
    setLocalQtdAtualInicial(Number(qtd_atual) || 0);
    setLocalQtdAtualNovo(String("")); // importante para mostrar o valor correto
  }, [qtd_atual]);

  const handleEntradaChange = (e: ChangeEvent<HTMLInputElement>) => {
    const valor = e.target.value;
    if (valor.length > 3) return;
    if (/^-/.test(valor)) return; // evita negativo
    setLocalQtdAtualNovo(valor);

    const incremento = Number(valor) || 0;
    onUpdate(id, { qtd_para_adicionar: incremento });
  };

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
      <ListTextStruct text={material_name} tooltip />
      <ListTextStruct text={cod_almox} isNumber />

      <Box
        sx={{
          backgroundColor: status ? "#ADFFD9" : "#FFADAE",
          width: "25%",
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
      <ListTextStruct text={qtd_atual} isNumber />
      <ListTextStruct text={qtd_base} isNumber />
      <ListTextStruct text={Number(qtd_base) - Number(qtd_atual)} isNumber />
      <Box
        sx={{
          boxSizing: "border-box",
          width: "25%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <TextField
          sx={{
            width: "30%",
            "& input": {
              textAlign: "center",
            },
            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
              {
                WebkitAppearance: "none",
                margin: 0,
              },
            "& input[type=number]": {
              MozAppearance: "textfield",
            },
          }}
          fullWidth
          variant="standard"
          type="number"
          size="small"
          value={localQtdAtualNovo}
          onChange={handleEntradaChange}
          onKeyDown={(e) => {
            if (e.key === "-" || e.key === "e") {
              e.preventDefault();
            }
          }}
          onInput={(e) => {
            const input = e.target as HTMLInputElement;
            if (input.value.length > 3) {
              input.value = input.value.slice(0, 3);
            }
          }}
        ></TextField>
      </Box>
    </Box>
  );
};

export default PedidoMap;
