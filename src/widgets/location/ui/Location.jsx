import {
  Box,
  Container,
  Paper,
  Typography,
  useMediaQuery,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";

export const Location = () => {
  const { t } = useTranslation();
  const isMobile = useMediaQuery("(max-width: 600px)");

  return (
    <Container sx={{ padding: "50px 10px" }}>
      <Typography
        variant="h3"
        sx={{
          textAlign: "center",
          fontWeight: "500",
          fontSize: "clamp(36px, 4vw, 52px)",
        }}
      >
        {t("location_head")}
      </Typography>
      <Typography
        variant="body1"
        sx={{ textAlign: "center", marginTop: "20px" }}
      >
        {t("location_text")}
      </Typography>
      <Paper
        sx={{
          display: "flex",
          height: "400px",
          marginTop: "30px",
          flexDirection: isMobile ? "column" : "row",
        }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Box
            sx={{
              padding: "10px 20px",
              backgroundColor: "#000",
              color: "#fff",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "500" }}>
              Семей
            </Typography>
          </Box>
          <Box sx={{ padding: "20px" }}>
            <Typography variant="h5" sx={{ fontWeight: "600" }}>
              Haval
            </Typography>
            <Typography variant="body1">ул. Валиханова 147</Typography>
            <Typography variant="body1">Телефон: 8 (727) 310-37-16</Typography>
            <Typography variant="body1">
              Email: m.reseptionhaval@mycar.kz
            </Typography>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 2 }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2542.540933974716!2d80.2529768765318!3d50.412392471585015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x42f26556f95cabb7%3A0x517f202361471378!2z0JDQstGC0L7RgdCw0LvQvtC9IEhhdmFs!5e0!3m2!1sru!2skz!4v1716123859381!5m2!1sru!2skz"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </Box>
      </Paper>
    </Container>
  );
};
