import { CrossoverModels } from "@/widgets/crossovers-models";
import { Box, Typography } from "@mui/material";
import React from "react";

export const ModelsList = () => {
  return (
    <Box sx={{ padding: "50px 20px" }}>
      <Typography variant="h3" sx={{ textAlign: "center", fontWeight: "500" }}>
        Модельньный ряд
      </Typography>
      <Typography sx={{ textAlign: "center", marginTop: "30px" }}>
        Выбор за вами! Оцените технологичные кроссоверы, пикапы и внедорожник
        Haval, адаптированные к казахстанским условиям.
      </Typography>
      <CrossoverModels />
    </Box>
  );
};
