import { SwitchLanguage } from "@/app/feauters";
import { Logo, Navbar } from "@/entities";
import { DrawerNavbar } from "@/entities/navbar/DrawerNavbar";
import { AppBar, Container, Toolbar, useMediaQuery } from "@mui/material";
import React from "react";

export const Header = () => {
  const isMobile = useMediaQuery("(max-width: 740px)");

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
          <Logo />
          {isMobile ? (
            <DrawerNavbar />
          ) : (
            <>
              <Navbar />
              <SwitchLanguage variant="white" />
            </>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
};
