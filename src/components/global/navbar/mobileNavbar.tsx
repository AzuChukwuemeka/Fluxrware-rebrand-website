'use client';

import { navLinks } from "@/data/navItems";
import { AppBar, Button, Container, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Stack, Theme, Toolbar, Typography, useTheme } from "@mui/material"
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import React, { useState } from "react"

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);
  const theme: Theme = useTheme();
  const toggleDrawer = () => {
    setOpen(prev => !prev);
  };

  return (
    <Container
      maxWidth="lg"
      sx={{
        display: {
          xs: "inherit",
          sm: "inherit",
          md: "none",
          lg: "none"
        }
      }}
    >
      <AppBar
        position="static"
        sx={{
          background: "transparent",
          borderRadius: theme.spacing(8),
          marginTop: theme.spacing(4),
        }}
      >
        <Toolbar disableGutters sx={{ paddingInline: 4 }}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{ width: "100%", padding: 0 }}
          >
            <Link href="">
              <img alt={"Fluxware-logo"} width={50} src="/fluxware-logo.png" />
            </Link>

            <Link href="" style={{ flexGrow: 1 }}>
              <Typography variant="body1" textAlign={"center"}>
                Fluxware
              </Typography>
            </Link>

            {/* Menu Icon */}
            <IconButton edge="end" onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Stack>
        </Toolbar>
      </AppBar>

      {/* Drawer for nav items */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{ padding: 2, minWidth: 250 }}
        >
          <Typography variant="h6">Menu</Typography>
          <IconButton onClick={toggleDrawer}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Divider />
        <List sx={{ display: "flex", flexDirection: "column" }}>
          {navLinks.map((value) => (
            <ListItem key={value.link} disablePadding>
              <ListItemButton>
                <Link href={value.link} style={{ display: "block", width: "100%" }}>
                  <ListItemText primary={value.name} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Container>
  );
}