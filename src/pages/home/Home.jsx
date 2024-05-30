import {
  ModelsList,
  HeroSwiper,
  SpecialOffers,
  Location,
  VisitorsAccordion,
} from "@/widgets";
import { BannerTest } from "@/widgets/banner-test/ui/BannerTest";
import { Box } from "@mui/material";
import React from "react";

export const Home = () => {
  return (
    <Box>
      <HeroSwiper />
      <ModelsList />
      <SpecialOffers />
      <BannerTest />
      <Location />
      <VisitorsAccordion />
    </Box>
  );
};
