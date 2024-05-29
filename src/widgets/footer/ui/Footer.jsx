import { Box, Container, Divider, Typography, useTheme } from "@mui/material";
import React from "react";

export const Footer = () => {
  const theme = useTheme();

  return (
    <Box sx={{ backgroundColor: theme.palette.primary.main, padding: "20px" }}>
      <Container sx={{ color: "#fff" }}>
        <Box></Box>
        <Box>
          <Typography
            variant="body1"
            sx={{ fontSize: "12px", textAlign: "justify" }}
          >
            * Информация касательно стоимости, модельного ряда, характеристик,
            наличия комплектации продукции/автомобиля и наличия опции и/или
            оборудования в такой комплектации (далее – «Информация»), изложенная
            на данном сайте и прайс-листах, носит исключительно информативный
            характер, зависит от местных условий, ограничений и, следовательно
            может различаться в зависимости от моделей и комплектаций, и не
            является публичной офертой, согласно ст. 447 Гражданского Кодекса
            РК.
          </Typography>
          <Divider sx={{ backgroundColor: "#fff", margin: "20px 0" }} />
          <Typography>© 2024, все права защищены</Typography>
        </Box>
      </Container>
    </Box>
  );
};
