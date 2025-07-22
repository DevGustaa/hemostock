import { InputAdornment, TextField, Typography } from "@mui/material";
import { Search } from "lucide-react";

const TextFieldSearch = () => {
  return (
    <>
      <Typography
        sx={{ marginTop: "16px", marginBottom: "8px", fontWeight: "bold" }}
      >
        Lista de Materiais
      </Typography>
      <TextField
        size="small"
        type="text"
        placeholder="Buscar material por nome"
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <Search size={"16px"} />
              </InputAdornment>
            ),
          },
        }}
        sx={{ backgroundColor: "#E8EDF5", width: "100%" }}
      />
    </>
  );
};

export default TextFieldSearch;
