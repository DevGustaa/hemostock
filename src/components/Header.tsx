import { Box, Button, Typography } from "@mui/material";
import { AlignJustify, DoorOpen, Package2 } from "lucide-react";
import UserAvatar from "./userAvatar";
import { useAuth } from "../context/AuthProvider";
import { useResponsive } from "../hooks/responsive";

type HeaderProps = {
  onClick: () => void;
};

const Header = ({ onClick }: HeaderProps) => {
  const { isTablet } = useResponsive();
  const { logout } = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        boxSizing: "border-box",
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
        paddingInline: "20px",
        borderBottom: "1px solid #E5E8EB",
        height: "80px",
        paddingBlock: "12px",
      }}
    >
      <Button
        onClick={onClick}
        sx={{
          color: "black",
          marginRight: "20px",
          display: isTablet ? "flex" : "none",
        }}
      >
        <AlignJustify />
      </Button>
      <Box
        sx={{
          display: "flex",
          boxSizing: "border-box",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", gap: "4px", alignItems: "center" }}>
          <Package2 size={"20px"} />
          <Typography sx={{ fontWeight: "bold", fontSize: "18px" }}>
            HemoStock
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <UserAvatar />
          <Button
            onClick={logout}
            sx={{
              color: "black",
              width: "40px",
              height: "40px",
              backgroundColor: "#d1d6dfff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "8px",
            }}
          >
            <DoorOpen size={"20px"} />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
