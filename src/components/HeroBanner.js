import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";
import BannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box sx={{ mt: { lg: "212px", xs: "70px" }, ml: { sm: "50px" }, position: "relative", p: "20px" }}>
      <Typography mb={"24px"} color="#FF2625" fontWeight="600" fontSize="26px">
        Fitness Club
      </Typography>

      <Typography fontWeight={700} lineHeight={"42px"} mb={3} sx={{ fontSize: { lg: "44px", xs: "40px" } }}>
        Sweat, Smile <br />
        and Repeat
      </Typography>

      <Typography mb={3}>Check out the most effective exercises</Typography>

      <Button variant="contained" href="#exercises" sx={{ backgroundColor: "#FF2625", padding: "10px", width: "172px" }}>
        Explore
      </Button>

      <Typography fontWeight={600} color="#FF2625" sx={{ opacity: ".1", display: { lg: "flex", xs: "none" }, fontSize: "180px" }}>
        Exercises
      </Typography>

      <img src={BannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;
