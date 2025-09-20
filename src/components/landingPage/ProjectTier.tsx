import { Box, Button, Card, CardContent, Container, Grid, Typography, useTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";
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
              <Typography variant = "h3" textAlign={"center"} fontWeight={"bold"}>
                <span style = {{color: theme.palette.primary.main}}>Flexible</span> Tier for <span style = {{color: "grey"}}>Every</span> Project
              </Typography>
              <Typography variant = "body2" textAlign={"center"} paddingBlock={4} fontWeight={"bold"}>
                Find a tier that fits your project, your budget, and your goals.
              </Typography>
              <Grid container spacing = {1}>
                <Grid item xs={12} md={12} lg={12/3}>
                    <Card sx = {{borderRadius: theme.spacing(2), padding: theme.spacing(1)}} variant="outlined">
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
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> Full scale Custom website <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> UI/UX system tailored for user flow & engagement <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> Custom Brand Identify Design <br />
                          <CancelRoundedIcon sx = {{color: theme.fluxware.badTickColor}}/> E-commerce integration for product transactions <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> Product Catalog Support <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> 1-year domain registration & hosting <br />
                          <CancelRoundedIcon sx = {{color: theme.fluxware.badTickColor}}/> Full CMS Implementation <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> SEO Implementation <br />
                          <CancelRoundedIcon sx = {{color: theme.fluxware.badTickColor}}/> Google Analytics & Conversion Tracking setup <br />
                          <CancelRoundedIcon sx = {{color: theme.fluxware.badTickColor}}/> Monthly Performance Reporting <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> Yearly past-launch support & maintenance <br />
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
                    <Card sx = {{borderRadius: theme.spacing(2), padding: theme.spacing(1)}} variant="outlined">
                      <CardContent>
                        <Box display={"flex"} justifyContent={"space-between"}>
                          <Typography variant = "body2" fontWeight={"bold"}>
                            Premium <br />
                            Built for professional growth.
                          </Typography>
                          <Typography variant = "h4">
                            $699
                          </Typography>
                        </Box>
                        <Typography variant = "body2" marginTop={5}  marginBottom={4} lineHeight={2.5}>
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> Full scale Custom website <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> UI/UX system tailored for user flow & engagement <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> Custom Brand Identify Design <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> E-commerce integration for product transactions <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> Product Catalog Support <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> 1-year domain registration & hosting <br />
                          <CancelRoundedIcon sx = {{color: theme.fluxware.badTickColor}}/> Full CMS Implementation <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> SEO Implementation <br />
                          <CancelRoundedIcon sx = {{color: theme.fluxware.badTickColor}}/> Google Analytics & Conversion Tracking setup <br />
                          <CancelRoundedIcon sx = {{color: theme.fluxware.badTickColor}}/> Monthly Performance Reporting <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> Yearly past-launch support & maintenance <br />
                        </Typography>
                        <Button variant = "contained" sx = {{
                          width: "100%", 
                          borderRadius: "20px",
                        }}>
                          <Typography fontWeight={"bold"} letterSpacing={1} sx = {{color: theme.palette.background.paper}}>
                            Get Started <ArrowRightAltRoundedIcon />
                          </Typography>
                        </Button>
                      </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={12} lg={12/3}>
                    <Card sx = {{borderRadius: theme.spacing(2), padding: theme.spacing(1)}} variant="outlined">
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
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> Full scale Custom website <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> UI/UX system tailored for user flow & engagement <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> Custom Brand Identify Design <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> E-commerce integration for product transactions <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> Product Catalog Support <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> 1-year domain registration & hosting <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> Full CMS Implementation <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> SEO Implementation <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> Google Analytics & Conversion Tracking setup <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> Monthly Performance Reporting <br />
                          <CheckboxIcon sx = {{color: theme.fluxware.goodTickColor}}/> Yearly past-launch support & maintenance <br />
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