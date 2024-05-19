import { ModelCard } from "@/shared/ui";
import { Box, Container, Typography } from "@mui/material";
import React from "react";

export const BaseModels = ({ items }) => {
  return (
    <Container sx={{ padding: "40px 10px" }}>
      <Typography variant="h4">{items.title}</Typography>
      <Box
        sx={{
          marginTop: "30px",
          display: "flex",
          flexWrap: "wrap",
          gap: "20px",
        }}
      >
        {items.models.map((item) => (
          <ModelCard key={item.title} item={item} />
        ))}
      </Box>
    </Container>
  );
};
