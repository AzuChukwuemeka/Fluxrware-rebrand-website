'use client';
import { Box, Button, Card, CardContent, Container, Grid, Typography, useTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";
import CheckboxIcon from '@mui/icons-material/CheckBox';
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import React from "react";
import { projectTier } from "@/data/projectTier";

export default function ProjectTier() {
    const theme : Theme = useTheme();
    return (
        <React.Fragment>
          <Box sx = {{
            backgroundColor: "#fefefe", 
            backgroundImage: "url(./blue-blob.png)",
            backgroundRepeat: "no-repeat",
            paddingTop: theme.spacing(10)
          }}>
            <Container>
              <Typography variant = "h3" textAlign={"center"} fontWeight={"bold"}>
                <span style = {{color: theme.palette.primary.main}}>Flexible</span> Tier for <span style = {{color: "grey"}}>Every</span> Project
              </Typography>
              <Typography variant = "body2" textAlign={"center"} paddingBlock={4} fontWeight={"bold"}>
                Find a tier that fits your project, your budget, and your goals.
              </Typography>
              <Grid container spacing = {1}>
                {projectTier.map((projectTier,index) => {
                  return (
                    <Grid key = {projectTier.tier} item xs={12} md={12} lg={12/3}>
                        <Card sx = {{borderRadius: theme.spacing(4), padding: theme.spacing(1)}} variant="outlined">
                          <CardContent>
                            <Box display={"flex"} justifyContent={"space-between"}>
                              <Typography variant = "body2" fontWeight={"bold"}>
                                {projectTier.tier} <br />
                                {projectTier.description}
                              </Typography>
                              <Typography variant = "h4">
                                ${projectTier.price}
                              </Typography>
                            </Box>
                            <Typography variant = "body2" marginTop={3}  marginBottom={4} lineHeight={2.5}>
                              {projectTier.services.map((service,index) => {
                                return (
                                  <React.Fragment key = {index}>
                                    {service.offered && <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}} />}
                                    {!service.offered && <CancelRoundedIcon sx = {{color: theme.fluxware.badTickColor}} />}
                                    {service.detail} <br />
                                  </React.Fragment>                                  
                                )
                              })}
                            </Typography>
                            <Button variant = {projectTier.tier.toLowerCase() == "premium" ? "contained" : "outlined"}
                              sx = {{
                                width: "100%", 
                                borderRadius: "20px"
                              }}
                            >
                              <Typography
                                color = {projectTier.tier.toLowerCase() == "premium" ? "#fff" : "#000"}
                                fontWeight={"bold"} 
                                letterSpacing={1}
                              >
                                Get Started <ArrowRightAltRoundedIcon /> 
                              </Typography>
                            </Button>
                          </CardContent>
                        </Card>
                    </Grid>
                  )
                })}
              </Grid>
            </Container>
          </Box>
        </React.Fragment>        
    );
}