import React from "react";
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import FluxPictureText from "@/components/global/FluxUI/FluxPictureText";


import { Avatar, Box, Button, Card, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Theme, Typography, useTheme } from "@mui/material";


export default function WorkFlow() {
    const theme : Theme = useTheme();
    return (
        <React.Fragment>
            <Box
                sx={{
                background: "linear-gradient(180deg, lightblue, #fefefe 20%)",
                }}
            >
                <Container maxWidth="lg">
                    <Typography variant = "h3" paddingTop={theme.spacing(6)} textAlign={"center"} fontWeight={"bold"}>
                        <span style = {{color: theme.palette.primary.main}}>Your</span> Website, Our <span style = {{color: "grey"}}>Workflow</span>.
                    </Typography>
                    <Typography variant = "body1" marginTop = {theme.spacing(3)} marginBottom = {theme.spacing(8)} textAlign={"center"} fontWeight={"bold"}>
                        A seamless process designed to bring your unique vision to life, on time and on budget.
                    </Typography>
                    <Grid container spacing={theme.spacing(4)}>
                    <Grid item xs={12} sm={12} md={5}>
                    <Card sx = {{padding: theme.spacing(2)}}>
                        <CardContent sx = {{display: "flex", alignItems: "center"}}>
                            <LightbulbIcon sx = {{color: "purple", marginRight: theme.spacing(2)}} fontSize="large"/>
                            <Typography variant="h4" flexGrow={1} fontWeight={"bold"}>
                                Discovery
                            </Typography>
                            <ArrowForwardIcon fontSize="large"/>
                        </CardContent>
                        <CardContent>
                            <Typography variant="body1" paddingBottom = {theme.spacing(2)} textAlign={"justify"}>
                                <b>Defining Your Vision:</b> We define your vision and goals to lay the foundation for success.
                            </Typography>
                            <Typography variant="body1" paddingBlock = {theme.spacing(2)} textAlign={"justify"}>
                                <b>Blueprint:</b> We map out a perfect solution and detailed plan for your project.
                            </Typography>
                            <Typography variant="body1" paddingBlock = {theme.spacing(2)} textAlign={"justify"}>
                                <b>Align and Plan:</b> We align our expertise with your business goals to craft a clear roadmap.
                            </Typography>
                        </CardContent>
                        <CardContent>
                        <img
                            src = "./professional.png" 
                            alt = "Professional Illustration" 
                            style = {{
                            height: "500px",
                            borderRadius: theme.spacing(4),
                            objectFit: "cover", 
                            }}
                        />
                        </CardContent>
                    </Card>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7}>
                        <Card variant = "outlined" sx = {{marginBottom: theme.spacing(3), borderRadius: theme.spacing(5)}}>
                        <CardContent>
                            <Grid container alignItems="flex-start">
                            <Grid item xs={3} sm={3} md={3} alignSelf = "flex-start">
                                <img
                                src = "./hand-pointing.png"
                                alt = "Design Illustration" 
                                style = {{
                                    height: "200px",
                                    width: "100%",
                                    borderRadius: "26px",
                                    paddingRight: "16px",
                                    objectFit: "cover",
                                }}
                                />
                            </Grid>
                            <Grid item xs={9} sm={9} md={9}  alignSelf = "flex-start">
                                <Box display={"flex"} alignItems={"center"}>
                                    <img src = "./pen.png" style = {{marginRight: theme.spacing(3)}}/>
                                    <Typography variant="h4" flexGrow={1} fontWeight = {"bold"}>
                                        Design & Strategy
                                    </Typography>
                                    <ArrowDownwardIcon fontSize="large"/>
                                </Box>
                                <Typography variant="body1" paddingBlock = {theme.spacing(2)} textAlign={"justify"}>
                                    <b>Crafting The Experience:</b> We translate strategy into a user-centric design that captivates your audience.
                                </Typography>
                                <Typography variant="body1" paddingBlock = {theme.spacing(2)} textAlign={"justify"}>
                                    <b>UI/UX & Branding:</b> We translate strategy into a user-centric design that captivates your audience.
                                </Typography>
                            </Grid>
                            </Grid>
                        </CardContent>
                        </Card>

                        <Card variant = "outlined" sx = {{marginBottom: theme.spacing(3), borderRadius: theme.shape.borderRadius}}>
                        <CardContent sx = {{
                            background: "radial-gradient(circle at top left, transparent 92%, brown) 200% 200%",
                        }}>
                            <Box display={"flex"} alignItems={"center"}>
                                <img src = "./rocket.png" style = {{marginRight: theme.spacing(3)}}/>
                                <Typography variant="h4" flexGrow={1} fontWeight={"bold"}>
                                    Development & Launch
                                </Typography>
                                <ArrowDownwardIcon fontSize="large"/>
                            </Box>
                            <Typography variant="body1" paddingBlock = {theme.spacing(1.5)} textAlign={"justify"}>
                                <b>Precision Development:</b> We build fast, responsive and secure websites with modern code.
                            </Typography>
                            <Typography variant="body1" paddingBlock = {theme.spacing(1.5)} textAlign={"justify"}>
                                <b>Engineering for Performance:</b> We engineer every detail for speed, responsiveness and reliability
                            </Typography>
                            <Typography variant="body1" paddingBlock = {theme.spacing(1.5)} textAlign={"justify"}>
                                <b>Code & Display:</b> We transform designs into flawless websites with a seamless launch.
                            </Typography>
                        </CardContent>
                        </Card>

                        <Card variant = "outlined"  sx = {{marginBottom: theme.spacing(3), borderRadius: theme.spacing(5)}}>
                        <CardContent sx = {{
                            background: "radial-gradient(circle at bottom right, transparent 90%, lightgreen) 200% 200%",
                        }}>
                            <Box display={"flex"} alignItems={"center"}>
                                <img 
                                src = "./leaf.png" 
                                style = {{
                                    marginRight: 10,
                                }}
                                />
                            <Typography variant="h4" flexGrow={1} fontWeight = {"bold"}>
                                Support & Growth
                            </Typography>
                            <ArrowDownwardIcon fontSize="large"/>
                            </Box>
                            <Typography variant="body1" paddingBlock = {theme.spacing(2)} textAlign={"justify"}>
                                <b>Ongoing partnership:</b> We provide continuous support and optimization to keep your website at it's best.
                            </Typography>
                            <Typography variant="body1" paddingBlock = {theme.spacing(2)} textAlign={"justify"}>
                                <b>Evolving for the Future:</b> We offer strategic guidance to help you adapt, scale and stay ahead of the competition.
                            </Typography>
                            <Typography variant="body1" paddingBlock = {theme.spacing(2)} textAlign={"justify"}>
                                <b>Maintenance & Optimization:</b> We provide dedicated support to keep your site running smoothly and help it grow.
                            </Typography>
                        </CardContent>
                        </Card> 
                    </Grid>
                </Grid>
                </Container>
            </Box>
        </React.Fragment>
    )
}