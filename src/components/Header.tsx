import { Box, Button, Typography } from "@mui/material";
import { Bell, DoorOpen, Package2 } from "lucide-react";
import UserAvatar from "./userAvatar";
import { useAuth } from "../context/AuthProvider";
import { useUserProvider } from "../context/UsuarioListProvider";

const Header = () => {
  const { logout } = useAuth();
  return (
    <Box
      sx={{
        display: "flex",
        boxSizing: "border-box",
        justifyContent: "space-between",
        alignItems: "center",
        paddingInline: "40px",
        borderBottom: "1px solid #E5E8EB",
        height: "80px",
        paddingBlock: "12px",
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
  );
};

export default Header;
