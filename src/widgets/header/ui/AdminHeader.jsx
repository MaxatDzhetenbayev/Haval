import { Toolbar, AppBar, Typography } from "@mui/material";
import React from "react";

export const AdminHeader = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography>Админ панель Haval</Typography>
      </Toolbar>
    </AppBar>
  );
};
