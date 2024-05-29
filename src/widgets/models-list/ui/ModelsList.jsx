import { CrossoverModels } from "@/widgets/crossovers-models";
import { Box, Typography } from "@mui/material";
import React from "react";

export const ModelsList = () => {
  return (
    <Box sx={{ padding: "50px 0px" }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "500",
          fontSize: "clamp(36px, 4vw, 52px)",
        }}
      >
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
