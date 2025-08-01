import React from "react";
import { Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ExerciseDetails from "./pages/ExerciseDetails";
import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Box width={"400px"} sx={{ width: { xl: "1488px" } }}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exercise/:id" element={<ExerciseDetails />} />
      </Routes>

      <Footer />
    </Box>
  );
};

export default App;
