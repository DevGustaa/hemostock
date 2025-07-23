import { Box } from "@mui/material";
import ListTextStruct from "./ListStruct";
import { useEffect, useState } from "react";

type MaterialMapProps = {
  name: string;
  cod: number;
  stats: boolean;
  quant: number;
};

const MaterialMap = ({ name, cod, stats, quant }: MaterialMapProps) => {
  const [status, setStatus] = useState("");
  useEffect(() => {
    setStatus(stats ? "Possui" : "Falta");
  }, [stats]);

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
      <ListTextStruct text={name} />
      <ListTextStruct text={cod} isNumber />
      <Box sx={{ width: "25%", display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            backgroundColor: stats ? "#ADFFD9" : "#FFADAE",
            width: "140px",
            height: "32px",
            display: "flex",
            alignItems: "center",
            borderRadius: "8px",
          }}
        >
          <ListTextStruct text={status} isDecoration isBold />
        </Box>
      </Box>
      <ListTextStruct text={quant + " unid"} isNumber />
    </Box>
  );
};
export default MaterialMap;
