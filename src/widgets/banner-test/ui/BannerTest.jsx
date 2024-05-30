import {
  Box,
  Button,
  Container,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const BannerTest = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Box sx={{ backgroundColor: "#000" }}>
      <Container
        sx={{
          padding: "60px 10px",
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Box>
          <Typography
            variant="h4"
            sx={{ color: "#fff", textAlign: isMobile ? "center" : "initial" }}
          >
            {t("test_head")}
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: "#fff", textAlign: isMobile ? "center" : "initial" }}
          >
            {t("test_text")}
          </Typography>
        </Box>
        <Link
          to="/test-drive"
          style={{
            backgroundColor: "#fff",
            color: "#000",
            padding: "10px 40px",
            borderRadius: "8px",
          }}
        >
          {t("test_link")}
        </Link>
      </Container>
    </Box>
  );
};
