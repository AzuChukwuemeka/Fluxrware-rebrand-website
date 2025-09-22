import { AppBar, Avatar, Box, Button, Container, Stack, Theme, Toolbar, Typography, useMediaQuery, useTheme } from "@mui/material";
import "./nav.css"
import Link from "next/link";
import React from "react";
import { navLinks } from "@/data/navItems";
import Image from "next/image";

export default function Navbar(){
  const theme : Theme = useTheme();
    return (
      <React.Fragment>
        {/* DESKTOP NAVBAR */}
        <Container maxWidth="md" sx = {{display : {
          xs: "none",
          sm: "none",
          md: "inherit",
          lg: "inherit"
        }}}>
          <AppBar position="static" sx = {{
            background: "transparent",
            borderRadius : theme.spacing(8),
            marginTop: theme.spacing(4),
            boxShadow: "none",
            border: `1px solid #000`
          }}>
            <Toolbar disableGutters sx = {{paddingInline: .5}}>
              <Stack direction={"row"} alignItems={"center"} sx = {{width: "65%", padding: 0}}>
                <Link href = "">
                  <img alt = {"Fluxware-logo"} width = {70} src="/fluxware-logo.png" />
                </Link>
                {navLinks.map((value,index) => {
                  return (
                    <Button key = {value.link} sx = {{flexGrow: 1}}>
                      <Link href = {value.link}>
                        <Typography variant = "body1">
                          {value.name}
                        </Typography>
                      </Link>
                    </Button>
                  )
                })}
              </Stack>
                <Button sx = {{
                  flexGrow: 1,
                  border: "1px solid #000",
                  borderRadius: theme.spacing(5),
                  padding: 2
                }}>
                  <Link href = {""}>
                    <Typography variant="body1">
                      Book a consultation
                    </Typography>
                  </Link>
                </Button>
            </Toolbar>
          </AppBar>
        </Container>

        {/* MOBILE NAVBAR */}
        <Container maxWidth="lg" sx = {{display : {
          xs: "inherit",
          sm: "inherit",
          md: "none",
          lg: "none"
        }}}>
          <AppBar position="static" sx = {{
            background: "transparent",
            borderRadius : theme.spacing(8),
            marginTop: theme.spacing(4),
          }}>
            <Toolbar disableGutters sx = {{paddingInline: 2}}>
              <Stack direction={"row"} alignItems={"center"} sx = {{width: "100%", padding: 0}}>
                <Link href = "">
                  <img alt = {"Fluxware-logo"} width = {50} src="/fluxware-logo.png" />
                </Link>
                <Link href = "" style = {{flexGrow: 1}}>
                  <Typography variant = "body1" textAlign={"center"}>
                    Fluxware
                  </Typography>
                </Link>
                <Button>Menu</Button>
              </Stack>
            </Toolbar>
          </AppBar>
        </Container>
      </React.Fragment>
    )
}