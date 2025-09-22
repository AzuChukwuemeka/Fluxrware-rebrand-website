'use client';
import React from "react";
import { Avatar, Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";
import Navbar from "../global/navbar/navbar";
import FluxwareButton from "../global/fluxUI/FluxButtonLinks";


export default function HeroSection() {
    const theme : Theme = useTheme();
    return (
        <React.Fragment>
            <Box
                sx={{
                display: "flex",
                flexWrap: "wrap",
                flexDirection: "column",
                background: "radial-gradient(circle, #fefefe 40%, lightblue)",
                }}
            >
                <Container maxWidth = "lg">
                    <Navbar />
                    <Box
                        marginTop={theme.spacing(9)} 
                        paddingBlock={theme.spacing(.5)}
                        paddingInline={theme.spacing(2)}
                        borderRadius={theme.shape.borderRadius}
                        border={1}
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
                        <Typography variant="body2" textAlign="center" letterSpacing={theme.spacing(.1)} fontWeight={500}>
                            Served over 200+ Happy Clients
                        </Typography>
                    </Box>

                    <Box marginTop={theme.spacing(7)}>
                        <Typography variant="h3" component="h2" letterSpacing={3} textAlign="center" fontWeight={"bold"}>
                            Let us <span style = {{color: theme.palette.primary.main}}>Design</span> and <span style = {{color: "grey"}}>Build</span> your <br /> next Website.
                        </Typography>
                        <Typography variant="body1" textAlign="center" padding={theme.spacing(4)} letterSpacing={theme.spacing(.1)}>
                            Elevating brands with custom, responsive web design and robust development
                        </Typography>
                    </Box>
                    <Container 
                        maxWidth = "xs"
                            sx = {{
                                display:"flex",
                                flexWrap: "wrap",
                                padding: theme.spacing(.5),
                                justifyContent: "center",
                            }}
                        >
                        {/* <FluxwareButton variant="outlined">Space for icons</FluxwareButton> */}
                        <FluxwareButton variant="outlined" link = {"/prices"}>Pricing</FluxwareButton>
                        <FluxwareButton variant="contained" link = {""}>Get Started</FluxwareButton>
                    </Container>
                    <img src = "./hero-bottom.png" alt = "Hero Image"/>
                </Container>
            </Box>
        </React.Fragment>
    )
}