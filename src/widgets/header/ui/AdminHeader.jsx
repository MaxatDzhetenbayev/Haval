import { auth } from "@/shared/api/firebaseConfig";
import {
  Toolbar,
  AppBar,
  Typography,
  List,
  ListItem,
  Container,
  Button,
} from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const AdminHeader = () => {
  const navigate = useNavigate();
  const handleExit = async () => {
    await auth.signOut();
    navigate("/");
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography>Админ панель Haval</Typography>
          <List sx={{ display: "flex" }}>
            <ListItem key="create-car">
              <Link to="/admin/create-car">Машины</Link>
            </ListItem>
            <ListItem key="create-news">
              <Link to="/admin/create-news">Новости</Link>
            </ListItem>
          </List>
          <Button color="error" variant="contained" onClick={handleExit}>
            Выйти
          </Button>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
