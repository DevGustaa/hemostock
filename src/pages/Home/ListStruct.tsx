import { Typography } from "@mui/material";

type ListTextStructProps = {
  text: string | number;
  isDecoration?: boolean;
  isNumber?: boolean;
  isBold?: boolean;
};

const ListTextStruct = ({
  text,
  isDecoration,
  isNumber,
  isBold,
}: ListTextStructProps) => {
  return (
    <Typography
      sx={{
        fontSize: "14px",
        width: isDecoration ? "100%" : "25%",
        textAlign: "center",
        fontWeight: isBold ? "bold" : "",
        color: isNumber ? "#4A7A9C" : "#0D171C",
      }}
    >
      {text}
    </Typography>
  );
};

export default ListTextStruct;
