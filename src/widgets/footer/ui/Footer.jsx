import { Box, Container, Divider, Typography, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const theme = useTheme();
  const { t } = useTranslation();

  return (
    <Box sx={{ backgroundColor: theme.palette.primary.main, padding: "20px" }}>
      <Container sx={{ color: "#fff" }}>
        <Box></Box>
        <Box>
          <Typography
            variant="body1"
            sx={{ fontSize: "12px", textAlign: "justify" }}
          >
            {t("footer_text")}
          </Typography>
          <Divider sx={{ backgroundColor: "#fff", margin: "20px 0" }} />
          <Typography>{t("footer_right")}</Typography>
        </Box>
      </Container>
    </Box>
  );
};
