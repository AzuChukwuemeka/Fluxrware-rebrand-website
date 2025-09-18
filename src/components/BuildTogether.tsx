import { useTheme } from "@emotion/react";
import { Box, Card, CardContent, Container, Grid, Theme, Typography } from "@mui/material";
import React from "react";

export default function BuildTogether() {
    const th : Theme = useTheme();
    return (
        <React.Fragment>
            <Box style = {{background: "#fefefe"}} paddingTop={8}>
                <Container maxWidth = "lg">
                    <Card variant = "outlined" sx = {{padding: "40px"}}>
                        <CardContent>
                            <Typography variant = "h4">
                                Let's Build <br /> Something Great <span style = {{color: th.palette.primary.main}}>Together</span>
                            </Typography>
                            <Typography variant = "body2" marginTop={4}>
                                From sleek sites to smart apps, Fluxrware brings your vision to life, Just tell us where to start
                            </Typography>
                            <Grid container marginTop={7}>
                                <Grid item xs = {12} md = {12} lg = {7}>
                                    <p>Coming back for this right now</p>
                                </Grid>
                                <Grid item xs = {12} md = {12} lg = {5}>
                                    <img src = "./build-something-great.png"/>
                                </Grid>
                            </Grid>
                        </CardContent>
                    </Card>
                </Container>
            </Box> 
        </React.Fragment>
    )
}