'use client';
import { Box, Button, Card, CardContent, Container, Grid, Stack, Typography, useTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";
import CheckboxIcon from '@mui/icons-material/CheckBox';
import ArrowRightAltRoundedIcon from "@mui/icons-material/ArrowRightAltRounded";
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import React from "react";
import { projectTier } from "@/data/projectTier";

export default function ProjectTier() {
  const theme: Theme = useTheme();
  return (
    <React.Fragment>
      <Box sx={{
        backgroundColor: "#fefefe",
        backgroundImage: "url(./blue-blob.png)",
        backgroundRepeat: "no-repeat",
        paddingTop: theme.spacing(10)
      }}>
        <Container>
          <Typography variant="h3" textAlign={"center"} fontWeight={"bold"}>
            <span style={{ color: theme.palette.primary.main }}>Flexible</span> Tier for <span style={{ color: "grey" }}>Every</span> Project
          </Typography>
          <Typography variant="body2" textAlign={"center"} paddingBlock={4} fontWeight={"bold"}>
            Find a tier that fits your project, your budget, and your goals.
          </Typography>
          <Grid container spacing={1}>
            {projectTier.map((projectTier, index) => {
              return (
                <Grid key={projectTier.tier} item xs={12} md={12} lg={12 / 3}>
                  <Card sx={{ borderRadius: theme.spacing(4), padding: theme.spacing(1) }} variant="outlined">
                    <CardContent>
                      <Stack direction={"row"}>
                        <Box width={"100%"}>
                          <Typography variant="body1" fontWeight={"bold"}>
                            {projectTier.tier}
                          </Typography>
                          <Typography variant="caption">
                            {projectTier.description}
                          </Typography>
                        </Box>
                        <Typography variant="h4" fontWeight={"bold"}>
                          ${projectTier.price}
                        </Typography>
                      </Stack>
                      <Typography variant="body2" marginTop={3} marginBottom={4} lineHeight={2.5}>
                        {projectTier.services.map((service, index) => {
                          return (
                            <React.Fragment key={index}>
                              <Typography variant="caption" marginBottom={2}>
                                {service.offered && <CheckboxIcon sx={{ color: theme.fluxware.goodTickColor, marginRight: theme.spacing(1) }} />}
                                {!service.offered && <CancelRoundedIcon sx={{ color: theme.fluxware.badTickColor, marginRight: theme.spacing(1) }} />}
                                {service.detail} <br />
                              </Typography>
                            </React.Fragment>
                          )
                        })}
                      </Typography>
                      <Button variant={projectTier.tier.toLowerCase() == "premium" ? "contained" : "outlined"}
                        sx={{
                          width: "100%",
                          borderRadius: "20px"
                        }}
                      >
                        <Typography
                          color={projectTier.tier.toLowerCase() == "premium" ? "#fff" : "#000"}
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