import { Avatar, Box, Typography } from "@mui/material";
import { Bell, Package2 } from "lucide-react";

const Header = () => {
  function stringAvatar(name: string) {
    return {
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }
  return (
    <Box
      sx={{
        display: "flex",
        boxSizing: "border-box",
        justifyContent: "space-between",
        alignItems: "center",
        paddingInline: "40px",
        borderBottom: "1px solid #E5E8EB",
        height: "8%",
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
        <Box
          sx={{
            width: "40px",
            height: "40px",
            backgroundColor: "#d1d6dfff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: "8px",
          }}
        >
          <Bell size={"20px"} />
        </Box>
        <Avatar {...stringAvatar("Gustavo Albuquerque")} />
      </Box>
    </Box>
  );
};

export default Header;
