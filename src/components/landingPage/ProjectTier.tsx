import { Avatar, Box, Button, Card, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Theme, Typography, useTheme } from "@mui/material";
import CheckboxIcon from '@mui/icons-material/CheckBox';
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import React from "react";
import { projectTierInformation } from "@/data/fluxData";
import Link from "next/link";

export default function ProjectTier() {
    const theme : Theme = useTheme();
    return (
        <React.Fragment>
          <Box 
            sx = {{
              backgroundColor: "#fefefe",
              backgroundImage: "url(./blue-blob.png)",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
            }}
          >
            <Container>
              <Typography variant = "h3" textAlign={"center"} fontWeight={"bold"}>
                <span style = {{color: theme.palette.primary.main}}>Flexible</span> Tier for <span style = {{color: "grey"}}>Every</span> Project
              </Typography>
              <Typography variant = "body1" textAlign={"center"} paddingBlock={4} fontWeight={"bold"}>
                Find a tier that fits your project, your budget, and your goals.
              </Typography>

              {/* LOOPING OVER PROJECT TIER INFORMATION AVAILABLE IN FLUXDATA */}
              <Grid container spacing = {1}>
                {projectTierInformation.map((value,index) => {
                  return (
                    <Grid item xs={12} md={12/3} lg={12/3}>
                        <Card sx = {{borderRadius: theme.spacing(2), padding: theme.spacing(1)}} variant="outlined">
                          <CardContent>
                            <Box display={"flex"} justifyContent={"space-between"}>
                              <Typography variant = "body2" fontWeight={"bold"}>
                                {value.packageType} <br />
                                {value.packageDescription}
                              </Typography>
                              <Typography variant = "h4">
                                ${value.price}
                              </Typography>
                            </Box>
                            
                            <Typography variant = "body2" marginTop={5}  marginBottom={4} lineHeight={2.5}>
                              {value.packageList.map((serviceDetail, index) => {
                                return (
                                  <>
                                    <CheckboxIcon 
                                      sx = {{
                                        color: (serviceDetail.accepted) ? theme.fluxware.goodTickColor : theme.fluxware.badTickColor
                                      }}
                                    /> {serviceDetail.service} <br />
                                  </>
                                )
                              })}
                            </Typography>

                            <Link href={""}>
                              <Button 
                                variant = {(value.packageType.toLowerCase() == "premium") ? "contained" : "outlined"}
                                sx = {{
                                  width: "100%", 
                                  borderRadius: "20px",
                                }}
                              >
                                  <Typography 
                                    fontWeight={"bold"} 
                                    letterSpacing={1}
                                    color = {(value.packageType.toLowerCase() == "premium") ? "#fff" : ""}
                                  >
                                    Get Started <ArrowRightAltRoundedIcon /> 
                                  </Typography>
                              </Button>
                            </Link>
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