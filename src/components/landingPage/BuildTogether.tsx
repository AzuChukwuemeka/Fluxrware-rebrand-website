'use client';
import { useTheme } from "@mui/material/styles";
import { Box, Card, CardContent, Container, Grid, Theme, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";

export default function BuildTogether() {
    const theme : Theme = useTheme();
    return (
        <React.Fragment>
            <Box style = {{background: "#fefefe"}} paddingTop={theme.spacing(6)}>
                <Container maxWidth = "lg">
                    <Card variant = "outlined" sx = {{padding: theme.spacing(5)}}>
                        <CardContent>
                            <Typography variant = "h4" fontWeight={"bold"}>
                                Let's Build <br /> Something Great <span style = {{color: theme.palette.primary.main}}>Together</span>
                            </Typography>
                            <Typography variant = "body2" marginTop={theme.spacing(4)} fontWeight={"bold"}>
                                From sleek sites to smart apps, Fluxrware brings your vision to life, Just tell us where to start
                            </Typography>
                            <Grid container marginTop={7}>
                                <Grid item xs = {12} md = {12} lg = {7}>
                                    <Typography>
                                        Coming to work on this section
                                    </Typography>
                                </Grid>
                                <Grid item xs = {12} md = {12} lg = {5}>
                                    <Image alt = "building-image" width={1000} height={1000} src = "/final-CTA.png"/>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
            </Box> 
        </React.Fragment>
    )
}