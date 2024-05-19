import { Card, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const ModelCard = ({ item }) => {
  const { title, price, image, path } = item;
  return (
    <Link to={path} style={{ flexGrow: 1, flexBasis: "250px" }}>
      <Card sx={{ padding: "20px" }}>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", maxHeight: "100px" }}
        />
        <Typography variant="h5">{title}</Typography>
        <Typography variant="body1">от {price.toLocaleString()}</Typography>
      </Card>
    </Link>
  );
};
