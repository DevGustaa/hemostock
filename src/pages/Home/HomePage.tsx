import { Box, Typography } from "@mui/material";
import { JSX, useMemo, useState } from "react";
import TextFieldSearch from "../../components/TextField";
import MaterialList from "./MaterialList";

import { useMaterialProvider } from "../../context/MaterialListProvider";

const HomePage = (): JSX.Element => {
  const { materials } = useMaterialProvider();

  const [search, setSearch] = useState("");
  const filteredMaterials = useMemo(() => {
    return materials.filter((item) =>
      item.material_name.toLowerCase().includes(search.toLowerCase())
    );
  }, [materials, search]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Box
      sx={{
        boxSizing: "border-box",
        marginInline: "20px",
        paddingTop: "32px",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box sx={{ width: "100%", height: "100%" }}>
        <Typography fontSize={"24px"} fontWeight={"bold"}>
          Home
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
            sx={{
              width: "100%",
              height: "100%",
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
export default HomePage;
