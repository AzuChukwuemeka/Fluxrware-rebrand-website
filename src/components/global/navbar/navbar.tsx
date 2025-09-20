import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import { Avatar, ListItemButton, Stack} from "@mui/material";
import Link from "next/link";
import { Theme } from "@mui/material/styles/createTheme";
import { useTheme } from "@emotion/react";
import { navigationLinks } from "@/data/fluxData";
import BookIcon from '@mui/icons-material/Book';

export default function Navbar(){
    const [drawerOpen, setDrawerOpen] = useState(false);
    const toggleDrawer = (open: boolean) => () => {
      setDrawerOpen(open);
    };
    const theme : Theme = useTheme();
    return (
      <React.Fragment>
        {/* DESKTOP NAVBAR: */}
        <Box sx={{ flexGrow: 1, width: "75%", justifyContent: "center", marginInline: "auto", marginTop: theme.spacing(3)}}>
          <AppBar
            position="static"
            sx={{
              display: {
                xs: 'none',
                md: 'none',
                lg: 'flex'
              },
              backgroundColor: 'transparent',
              border: `1px solid #000`,
              borderRadius: theme.spacing(6),
              padding: theme.spacing(.7),
              boxShadow: 'none',
            }}
          >
            <Toolbar disableGutters>
              <Typography variant="h6">
                  <Avatar alt="Fluxrware Logo" src="./fluxware-logo.png" sx = {{width: 60, height: 60}}/>
              </Typography>
              <List component = {Stack} direction = "row" flexGrow={1}>
                  {navigationLinks.map((value, index) => {
                    // Map drawer item text to actual URLs
                    return (
                    <ListItem key={index} disablePadding>
                      <ListItemButton sx= {{color: "#000", justifyContent: "center"}}>
                        <Link href={value.url} style = {{
                          display: "block",
                          padding: "5px 20px",
                        }}>
                          <Typography variant="body1">
                            {value.text}
                          </Typography>
                        </Link>
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
              <Link href = "/consultation">
                <Typography variant = "h6" border={"1px solid #000"} borderRadius={theme.spacing(6)} paddingBlock={2} paddingInline={5} fontWeight={"bold"}>
                  Book a free consultation
                </Typography>
              </Link>
            </Toolbar>
          </AppBar>
        </Box>

        {/* MOBILE NAVBAR: */}
        <Box sx={{ flexGrow: 1, width: "95%", justifyContent: "center", marginInline: "auto", marginTop: theme.spacing(1)}}>
          <AppBar
            position="static"
            sx={{
              display: {
                xs: 'flex',
                md: 'flex',
                lg: 'none'
              },
              backgroundColor: 'transparent', // background color
              border: `3px solid ${theme.palette.divider}`,
              borderRadius: theme.spacing(6),
              boxShadow: 'none',
            }}
          >
            <Toolbar sx = {{padding: 0}}>
              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                  <Avatar alt="Fluxrware Logo" src="./fluxware-logo.png" sx = {{width: 60, height: 60}}/>
              </Typography>

              <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Fluxrware
              </Typography>

              <IconButton
                size="large"
                edge="start"
                aria-label="menu"
                sx={{ mr: 2 }}
                onClick={toggleDrawer(true)}
              >
                <MenuIcon />
              </IconButton>
            </Toolbar>
            </AppBar>

            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: 300, background: "radial-gradient(cicle at top left, 20% #fefefe, lightblue) 200% 200%", height: "100%" }}
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                <List>
                  {navigationLinks.map((value, index) => {
                    const [mouseHover, setMouseHover] = useState(false);
                    return (
                      <ListItem key={index} disablePadding>
                        <ListItemButton sx= {{color: "#000"}}>
                          <Link 
                            href={value.url} 
                            style = {{
                              display: "block",
                              padding: "10px 20px",
                            }} 
                            passHref
                          >
                            {value.icon}
                            {value.text}
                          </Link>
                        </ListItemButton>
                      </ListItem>
                    );
                  })}
                  <ListItem disablePadding>
                    <ListItemButton sx= {{color: "#000"}}>
                      <Link 
                        href={"/consultation"} 
                          style = {{
                            display: "block",
                            padding: "10px 20px",
                          }} 
                          passHref
                      >
                        <BookIcon sx = {{marginRight: 1}}/>
                        {"Book a Consultation"}
                        </Link>
                      </ListItemButton>
                    </ListItem>
                </List>
            </Box>
          </Drawer>
      </Box>      
    </React.Fragment>
  )
}