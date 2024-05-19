import { Card, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const ModelCard = ({ item }) => {
  const { modelName, price, mainImage, id } = item;
  return (
    <Link to={"/models/" + id}>
      <Card sx={{ padding: "20px" }}>
        <img
          src={mainImage}
          alt={modelName}
          style={{ width: "100%", maxHeight: "200px" }}
        />
        <Typography variant="h4" sx={{ fontWeight: "600" }}>
          {modelName}
        </Typography>
        <Typography variant="body1" sx={{ fontSize: "18px" }}>
          от {price.toLocaleString()} тг
        </Typography>
        <Typography variant="h6">Подробнее о модели</Typography>
      </Card>
    </Link>
  );
};
