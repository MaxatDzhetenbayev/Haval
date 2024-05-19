import { Box } from "@mui/material";
import { Header } from "@widgets/header";
import React from "react";
import { Outlet } from "react-router-dom";
export const BaseLayout = () => {
  return (
    <>
      <Header />
      <Box>
        <Outlet />
      </Box>
    </>
  );
};
