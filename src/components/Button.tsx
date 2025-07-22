import { Button, Typography } from "@mui/material";
import { JSX } from "react";
import { useLocation } from "react-router-dom";

type ButtonSideBarProps = {
  text: string;
  icon: JSX.Element;
  onClick: () => void;
  rota?: string;
};
const ButtonSideBar = ({ text, icon, onClick, rota }: ButtonSideBarProps) => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <Button
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        borderRadius: "8px",
        textTransform: "none",
        backgroundColor: currentPath === rota ? "#E8EDF5" : "",
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
