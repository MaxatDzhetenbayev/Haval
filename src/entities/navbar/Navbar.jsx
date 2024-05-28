import { List, ListItem } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const navList = [
    {
      title: "Главная",
      path: "/",
    },
    {
      title: "Модели",
      path: "/models",
    },
    {
      title: "Новости",
      path: "/news",
    },
    {
      title: "Контакты",
      path: "/contacts",
    },
  ];

  return (
    <List sx={{ display: "flex" }}>
      {navList.map(({ path, title }) => (
        <ListItem key={path}>
          <Link to={path}>{title}</Link>
        </ListItem>
      ))}
    </List>
  );
};
