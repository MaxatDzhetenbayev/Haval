import React, { useState } from "react";
import { Box, Drawer, IconButton, List, ListItemButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export const DrawerNavbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <Box>
      <IconButton onClick={toggleDrawer(true)}>
        <MenuIcon sx={{ color: "#fff" }} />
      </IconButton>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box>
          <List>
            <ListItemButton onClick={toggleDrawer(false)}>
              <Link style={{ padding: "5px 20px" }} to="/">
                Главная
              </Link>
            </ListItemButton>
            <ListItemButton onClick={toggleDrawer(false)}>
              <Link style={{ padding: "5px 20px" }} to="/models">
                Модели
              </Link>
            </ListItemButton>
            <ListItemButton onClick={toggleDrawer(false)}>
              <Link style={{ padding: "5px 20px" }} to="/news">
                Новости
              </Link>
            </ListItemButton>
            <ListItemButton onClick={toggleDrawer(false)}>
              <Link style={{ padding: "5px 20px" }} to="/contacts">
                Контакты
              </Link>
            </ListItemButton>
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
