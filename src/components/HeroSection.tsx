import React from "react";
import { Avatar, Box, Button, Card, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Theme, Typography, useTheme } from "@mui/material";
import Navbar from "./navbar";
import FluxwareButton from "./FluxwareButtons";


export default function HeroSection() {
    const theme : Theme = useTheme();
    return (
        <React.Fragment>
            <Box
                sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                minHeight: "100vh",
                background: "radial-gradient(circle, #fefefe 40%, lightblue)",
                }}
            >
                <Container maxWidth = "lg">
                <Navbar />
                <Box
                    marginTop={8} 
                    paddingBlock={.5}
                    paddingInline={2}
                    borderRadius={50}
                    border={1.3}
                    borderColor={"divider"}
                    display={"flex"}
                    justifySelf={"center"}
                    alignItems={"center"}
                    sx={{
                        backgroundColor: 'rgba(128, 98, 128, 0.04)', // semi-transparent grey   
                    }}
                >
                    <Stack direction = "row" marginRight={1}>
                    <Avatar alt="User Served" src="./served1.jpg" sx = {{width: 24, height: 24}}/>
                    <Avatar alt="User Served" src="./served2.jpg" sx = {{width: 24, height: 24}}/>
                    <Avatar alt="User Served" src="./served3.jpg" sx = {{width: 24, height: 24}}/>
                    </Stack>
                    <Typography variant="body2" textAlign="center" letterSpacing={.6} fontWeight={500}>
                        Served over 200+ Happy Clients
                    </Typography>
                </Box>

                <Box marginTop={7}>
                    <Typography variant="h3" component="h2" letterSpacing={3} textAlign="center">
                    Let us <span style = {{color: theme.palette.primary.main}}>Design</span> and <span style = {{color: "grey"}}>Build</span> your <br /> next Website.
                    </Typography>
                    <Typography variant="body1" textAlign="center" padding={4} letterSpacing={.3}>
                    Elevating brands with custom, responsive web design and robust development
                    </Typography>
                </Box>

                <Box 
                    display={"flex"}
                    flexWrap={"wrap"}
                    padding={1}
                    justifyContent={"space-around"}
                    width={"min(100%,400px)"}
                    marginInline={"auto"}
                >
                    {/* <FluxwareButton variant="outlined">Space for icons</FluxwareButton> */}
                    <FluxwareButton variant="outlined">Pricing</FluxwareButton>
                    <FluxwareButton variant="contained">Get Started</FluxwareButton>
                </Box>
                <img src = "./hero-bottom.png" alt = "Hero Image"/>
                </Container>
            </Box>
        </React.Fragment>
    )
}