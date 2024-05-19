import { ModelsList, HeroSwiper, SpecialOffers } from "@/widgets";
import { Box } from "@mui/material";
import React from "react";

export const Home = () => {
  return (
    <Box>
      <HeroSwiper />
      <ModelsList />
      <SpecialOffers />
    </Box>
  );
};
