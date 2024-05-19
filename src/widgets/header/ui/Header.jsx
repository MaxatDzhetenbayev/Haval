import { Logo, Navbar } from "@/entities";
import { AppBar, Box, List, ListItem, Toolbar } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Logo />
        <Navbar />
      </Toolbar>
    </AppBar>
  );
};
