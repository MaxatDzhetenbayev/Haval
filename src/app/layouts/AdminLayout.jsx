import { auth } from "@/shared/api/firebaseConfig";
import { AdminHeader } from "@/widgets/header";
import { Box, Container } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export const AdminLayout = () => {

  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        return navigate("/signin");
      }
    })
  }, []);


  return (
    <Box>
      <AdminHeader />
      <Container component="main">
        <Outlet />
      </Container>
    </Box>
  );
};
