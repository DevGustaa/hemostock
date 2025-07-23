import { Box, Typography } from "@mui/material";
import { JSX, useState } from "react";
import TextFieldSearch from "../../components/TextField";
import MaterialList from "./MaterialList";
import { useResponsive } from "../../hooks/responsive";

const materials = [
  { name: "Vertebral 5f", cod: 123123, stats: false, quant: 0 },
  { name: "Simmons 2 5F", cod: 456456, stats: true, quant: 50 },
  { name: "MicroGuia Vascular 0.014", cod: 789789, stats: true, quant: 75 },
  { name: "MicroGuia Neuro 0.014", cod: 147258, stats: true, quant: 20 },
  { name: "Solitare 4AB", cod: 147258, stats: true, quant: 20 },
  { name: "Solitare 6AB", cod: 147258, stats: false, quant: 0 },
  { name: "Apollo 1.5", cod: 147258, stats: true, quant: 20 },
  { name: "Apollo 3", cod: 147258, stats: false, quant: 0 },
  { name: "Apollo 5", cod: 147258, stats: true, quant: 20 },
];

const Home = (): JSX.Element => {
  const [search, setSearch] = useState("");
  const filteredMaterials = materials.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const { isTablet } = useResponsive();
  return (
    <Box
      sx={{
        marginInline: "20px",
        marginTop: "36px",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: isTablet ? "100%" : "80%", height: "100%" }}>
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
          <Box
            sx={{ width: "100%", height: "220px", backgroundColor: "red" }}
          />
          <Box
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <TextFieldSearch search={search} onChange={handleSearchChange} />
            <MaterialList filtermap={filteredMaterials} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default Home;
