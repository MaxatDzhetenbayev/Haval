import { List, ListItem } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const { t } = useTranslation();

  const navList = [
    {
      title: "navigation.home",
      path: "/",
    },
    {
      title: "navigation.models",
      path: "/models",
    },
    {
      title: "navigation.news",
      path: "/news",
    },
    {
      title: "navigation.contact",
      path: "/contacts",
    },
  ];

  return (
    <List sx={{ display: "flex" }}>
      {navList.map(({ path, title }) => (
        <ListItem key={path}>
          <Link to={path}>{t(title)}</Link>
        </ListItem>
      ))}
    </List>
  );
};
