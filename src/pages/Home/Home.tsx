import { Box, Typography } from "@mui/material";
import { JSX } from "react";
import TextFieldSearch from "../../components/TextField";

const Home = (): JSX.Element => {
  return (
    <Box
      sx={{
        marginInline: "20px",
        marginTop: "36px",
        width: "100%",
        height: "100%",
      }}
    >
      <Typography fontSize={"24px"} fontWeight={"bold"}>
        Home
      </Typography>
      <Typography
        sx={{ marginTop: "16px", marginBottom: "8px", fontWeight: "bold" }}
      >
        Avisos
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box sx={{ width: "100%", height: "220px", backgroundColor: "red" }} />
        <Box
          sx={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            flexDirection: "column",
          }}
        >
          <TextFieldSearch />
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
