import { InputAdornment, TextField, Typography } from "@mui/material";
import { Search } from "lucide-react";

type TextFieldSearchProps = {
  search: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const TextFieldSearch = ({ search, onChange }: TextFieldSearchProps) => {
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
        value={search}
        placeholder="Buscar material por nome"
        onChange={onChange}
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
