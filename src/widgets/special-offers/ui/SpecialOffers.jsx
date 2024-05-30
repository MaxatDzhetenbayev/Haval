import { KeyboardArrowRight } from "@mui/icons-material";
import { Container, Typography, useTheme } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const SpecialOffers = () => {
  const { t } = useTranslation();
  const {
    palette: { primary },
  } = useTheme();

  return (
    <Container sx={{ padding: "50px 10px" }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "500",
          fontSize: "clamp(32px, 4vw, 48px)",
        }}
      >
        {t("special_news")}
      </Typography>
      <img
        src="images/special-offers.png"
        alt=""
        style={{ width: "100%", margin: "20px 0px" }}
      />
      <Link
        to="/news"
        style={{
          textTransform: "uppercase",
          display: "flex",
          alignItems: "center",
          gap: "3px",
          fontSize: "18px",
        }}
      >
        {t("all_news")}
        <KeyboardArrowRight />
      </Link>
    </Container>
  );
};
