import React, { useEffect, useState } from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";
import { options, fetchData } from "../utils/fetchData";

const SearchExercises = () => {
  const [search, setSearch] = useState("");

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData("https://exercisedb.p.rapidapi.com/exercises", options);

      console.log("exercises", exercisesData);
    }
  };

  return (
    <Stack alignItems={"center"} width={"100%"} mt={10} justifyContent={"center"}>
      <Typography fontWeight={700} sx={{ fontSize: { lg: "40px", xs: "25px" } }} textAlign={"center"}>
        Awesome Exercise <br />
        you should know
      </Typography>

      <Box position={"relative"} mt={5} mb={10}>
        <TextField
          placeholder="Search Exercises"
          value={search}
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "40px", borderColor: "#ff2625" },
            width: { lg: "720px", xs: "350px" },
            backgroundColor: "#fff",
          }}
        />

        <Button
          variant="contained"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0px",
          }}
          onClick={() => handleSearch()}
        >
          Search
        </Button>
      </Box>
    </Stack>
  );
};

export default SearchExercises;
