import { Card, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const ModelCard = ({ item }) => {
  const { name,cardImage, id } = item;
  return (
    <Link to={"/models/" + id} >
      <Card sx={{ padding: "20px", height: "100%", display: "flex", flexDirection: "column" }}>
        <img
          src={cardImage}
          alt={name}
          style={{ width: "100%", flex: "1"}}
        />
        <Typography variant="h4" sx={{ fontWeight: "600", flex: "auto" }}>
          {name}
        </Typography>
        <Typography  variant="h6">Подробнее о модели</Typography>
      </Card>
    </Link>
  );
};