import React, { useState } from "react";
import {
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItemButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { SwitchLanguage } from "@/app/feauters";
import { useTranslation } from 'react-i18next';

export const DrawerNavbar = () => {
  const [open, setOpen] = useState(false);

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
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              padding: "10px 0px",
            }}
          >
            <SwitchLanguage />
            <Divider />
          </Box>
          <List>
            {navList.map(({ path, title }) => (
              <ListItemButton key={path} onClick={toggleDrawer(false)}>
                <Link to={path}>{t(title)}</Link>
              </ListItemButton>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
};
