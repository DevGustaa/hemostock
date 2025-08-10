import { Tooltip, Typography } from "@mui/material";

type ListTextStructProps = {
  text: string | number;
  isDecoration?: boolean;
  isNumber?: boolean;
  isBold?: boolean;
  tooltip?: boolean;
};

const ListTextStruct = ({
  text,
  isDecoration,
  isNumber,
  isBold,
  tooltip,
}: ListTextStructProps) => {
  return tooltip ? (
    <Tooltip title={text}>
      <Typography
        sx={{
          fontSize: "14px",
          width: isDecoration ? "100%" : "25%",
          textAlign: "center",
          fontWeight: isBold ? "bold" : "",
          color: isNumber ? "#4A7A9C" : "#0D171C",
          textOverflow: "ellipsis",
          overflow: "hidden",
          whiteSpace: "nowrap",
        }}
      >
        {text}
      </Typography>
    </Tooltip>
  ) : (
    <Typography
      sx={{
        fontSize: "14px",
        width: isDecoration ? "100%" : "25%",
        textAlign: "center",
        fontWeight: isBold ? "bold" : "",
        color: isNumber ? "#4A7A9C" : "#0D171C",
        textOverflow: "ellipsis",
        overflow: "hidden",
        whiteSpace: "nowrap",
      }}
    >
      {text}
    </Typography>
  );
};

export default ListTextStruct;
