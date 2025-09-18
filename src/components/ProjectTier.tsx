import { Avatar, Box, Button, Card, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Theme, Typography, useTheme } from "@mui/material";
import CheckboxIcon from '@mui/icons-material/CheckBox';
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import React from "react";

export default function ProjectTier() {
    const theme : Theme = useTheme();
    return (
        <React.Fragment>
          <Box style = {{background: "radial-gradient(circle at left, #fefefe 90%, lightblue) 200% 200%"}}>
            <Container>
              <Typography variant = "h3" textAlign={"center"}>
                <span style = {{color: theme.palette.primary.main}}>Flexible</span> Tier for <span style = {{color: "grey"}}>Every</span> Project
              </Typography>
              <Typography variant = "body2" textAlign={"center"} paddingBlock={4} fontWeight={"bold"}>
                Find a tier that fits your project, your budget, and your goals.
              </Typography>
              <Grid container spacing = {1}>
                <Grid item xs={12} md={12} lg={12/3}>
                    <Card sx = {{borderRadius: "20px"}}>
                      <CardContent>
                        <Box display={"flex"} justifyContent={"space-between"}>
                          <Typography variant = "body2" fontWeight={"bold"}>
                            Standard <br />
                            Perfect for start-ups or personal brands.
                          </Typography>
                          <Typography variant = "h4">
                            $399
                          </Typography>
                        </Box>
                        <Typography variant = "body2" marginTop={5}  marginBottom={4} lineHeight={2.5}>
                          <CheckboxIcon sx = {{color: "green"}}/> Full scale Custom website <br />
                          <CheckboxIcon sx = {{color: "green"}}/> UI/UX system tailored for user flow & engagement <br />
                          <CheckboxIcon sx = {{color: "green"}}/> Custom Brand Identify Design <br />
                          <CancelRoundedIcon sx = {{color: "red"}}/> E-commerce integration for product transactions <br />
                          <CheckboxIcon sx = {{color: "green"}}/> Product Catalog Support <br />
                          <CheckboxIcon sx = {{color: "green"}}/> 1-year domain registration & hosting <br />
                          <CancelRoundedIcon sx = {{color: "red"}}/> Full CMS Implementation <br />
                          <CheckboxIcon sx = {{color: "green"}}/> SEO Implementation <br />
                          <CancelRoundedIcon sx = {{color: "red"}}/> Google Analytics & Conversion Tracking setup <br />
                          <CancelRoundedIcon sx = {{color: "red"}}/> Monthly Performance Reporting <br />
                          <CheckboxIcon sx = {{color: "green"}}/> Yearly past-launch support & maintenance <br />
                        </Typography>
                        <Button variant = "outlined" sx = {{
                          width: "100%", 
                          borderRadius: "20px"
                        }}>
                          <Typography fontWeight={"bold"} letterSpacing={1}>
                            Get Started <ArrowRightAltRoundedIcon /> 
                          </Typography>
                        </Button>
                      </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} lg={12/3}>
                    <Card sx = {{borderRadius: "20px"}}>
                      <CardContent>
                        <Box display={"flex"} justifyContent={"space-between"}>
                          <Typography variant = "body2" fontWeight={"bold"}>
                            Premium <br />
                            Built for professionals ready to grow online.
                          </Typography>
                          <Typography variant = "h4">
                            $699
                          </Typography>
                        </Box>
                        <Typography variant = "body2" marginTop={5}  marginBottom={4} lineHeight={2.5}>
                          <CheckboxIcon sx = {{color: "green"}}/> Full scale Custom website <br />
                          <CheckboxIcon sx = {{color: "green"}}/> UI/UX system tailored for user flow & engagement <br />
                          <CheckboxIcon sx = {{color: "green"}}/> Custom Brand Identify Design <br />
                          <CheckboxIcon sx = {{color: "green"}}/> E-commerce integration for product transactions <br />
                          <CheckboxIcon sx = {{color: "green"}}/> Product Catalog Support <br />
                          <CheckboxIcon sx = {{color: "green"}}/> 1-year domain registration & hosting <br />
                          <CancelRoundedIcon sx = {{color: "red"}}/> Full CMS Implementation <br />
                          <CheckboxIcon sx = {{color: "green"}}/> SEO Implementation <br />
                          <CancelRoundedIcon sx = {{color: "red"}}/> Google Analytics & Conversion Tracking setup <br />
                          <CancelRoundedIcon sx = {{color: "red"}}/> Monthly Performance Reporting <br />
                          <CheckboxIcon sx = {{color: "green"}}/> Yearly past-launch support & maintenance <br />
                        </Typography>
                        <Button variant = "contained" sx = {{
                          width: "100%", 
                          borderRadius: "20px"
                        }}>
                          <Typography fontWeight={"bold"} letterSpacing={1}>
                            Get Started <ArrowRightAltRoundedIcon />
                          </Typography>
                        </Button>
                      </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} lg={12/3}>
                    <Card sx = {{borderRadius: "20px"}}>
                      <CardContent>
                        <Box display={"flex"} justifyContent={"space-between"}>
                          <Typography variant = "body2" fontWeight={"bold"}>
                            Enterprise <br />
                            Best for scaled brand digital presence.
                          </Typography>
                          <Typography variant = "h4">
                            $999
                          </Typography>
                        </Box>
                        <Typography variant = "body2" marginTop={5}  marginBottom={4} lineHeight={2.5}>
                          <CheckboxIcon sx = {{color: "green"}}/> Full scale Custom website <br />
                          <CheckboxIcon sx = {{color: "green"}}/> UI/UX system tailored for user flow & engagement <br />
                          <CheckboxIcon sx = {{color: "green"}}/> Custom Brand Identify Design <br />
                          <CheckboxIcon sx = {{color: "green"}}/> E-commerce integration for product transactions <br />
                          <CheckboxIcon sx = {{color: "green"}}/> Product Catalog Support <br />
                          <CheckboxIcon sx = {{color: "green"}}/> 1-year domain registration & hosting <br />
                          <CheckboxIcon sx = {{color: "green"}}/> Full CMS Implementation <br />
                          <CheckboxIcon sx = {{color: "green"}}/> SEO Implementation <br />
                          <CheckboxIcon sx = {{color: "green"}}/> Google Analytics & Conversion Tracking setup <br />
                          <CheckboxIcon sx = {{color: "green"}}/> Monthly Performance Reporting <br />
                          <CheckboxIcon sx = {{color: "green"}}/> Yearly past-launch support & maintenance <br />
                        </Typography>
                        <Button variant = "outlined" sx = {{
                          width: "100%", 
                          borderRadius: "20px"
                        }}>
                          <Typography fontWeight={"bold"} letterSpacing={1}>
                            Get Started <ArrowRightAltRoundedIcon />
                          </Typography>
                        </Button>
                      </CardContent>
                    </Card>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </React.Fragment>        
    );
}