import { Box, Typography } from "@mui/material";
import { JSX } from "react";

type ModeloAjudaProps = {
  title: string;
  text: string;
};

const ModeloAjuda = ({ title, text }: ModeloAjudaProps): JSX.Element => {
  return (
    <Box
      sx={{
        boxSizing: "border-box",
        paddingLeft: "20px",
        paddingBottom: "16px",
      }}
    >
      <Typography
        sx={{
          fontWeight: "bold",
          fontSize: "18px",
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ fontSize: "16px" }}>{text}</Typography>
    </Box>
  );
};

export default ModeloAjuda;
