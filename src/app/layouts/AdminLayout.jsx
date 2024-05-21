import { AdminHeader } from "@/widgets/header";
import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";

export const AdminLayout = () => {
  return (
    <Box>
      <AdminHeader />
      <Container component="main">
        <Outlet />
      </Container>
    </Box>
  );
};
