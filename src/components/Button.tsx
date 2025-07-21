import { Box, Button, Typography } from "@mui/material";
import { Home } from "lucide-react";
import { JSX } from "react";

type ButtonSideBarProps = {
  text: string;
  icon: JSX.Element;
  onClick: () => void;
};

const ButtonSideBar = ({ text, icon, onClick }: ButtonSideBarProps) => {
  return (
    <Button
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        borderRadius: "8px",
        textTransform: "none",
        color: "#0D171C",
        gap: "12px",
      }}
      onClick={onClick}
    >
      {icon}
      <Typography fontSize={"14px"}>{text}</Typography>
    </Button>
  );
};

export default ButtonSideBar;
