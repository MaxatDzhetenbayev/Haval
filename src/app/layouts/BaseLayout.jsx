import { handleSetUserVisit } from "@/shared/helpers/handleSetCountVisits";
import { Footer } from "@/widgets";
import { Box } from "@mui/material";
import { Header } from "@widgets/header";
import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
export const BaseLayout = () => {
  useEffect(() => {
    handleSetUserVisit();
  });

  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box sx={{ flex: 1 }}>
        <Outlet />
      </Box>
      <Footer />
      <ToastContainer />
    </Box>
  );
};
