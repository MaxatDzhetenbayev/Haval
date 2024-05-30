import { CrossoverModels } from "@/widgets/crossovers-models";
import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const ModelsList = () => {
  const { t } = useTranslation();

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
        {t("models")}
      </Typography>
      <Typography sx={{ textAlign: "center", marginTop: "30px" }}>
        {t("models_text")}
      </Typography>
      <CrossoverModels />
    </Box>
  );
};
