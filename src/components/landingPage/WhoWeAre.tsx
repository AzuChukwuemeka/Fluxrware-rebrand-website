'use client';
import React from "react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { coFounders, restOfTheTeam } from "@/data/restOfTheTeam";
import Image from "next/image";

export default function WhoWeAre() {
  const theme: Theme = useTheme();
  return (
    <React.Fragment>
      <Box paddingTop={theme.spacing(10)} style={{ background: "radial-gradient(circle at bottom left, #fefefe 90%, lightblue) 200% 200%" }}>
        <Container>
          <Typography variant="h2" textAlign={"center"} fontWeight={"bold"}>
            Who We <span style={{ color: theme.palette.primary.main }}>Are</span>
          </Typography>
          <Typography variant="body2" textAlign={"center"} paddingTop={theme.spacing(2)}>
            More than just code, it&apos;s about the people behind the projects
          </Typography>
          <Grid container marginTop={theme.spacing(3)} spacing={theme.spacing(7)}>
            <Grid item xs={12 / 1} md={12 / 1} lg={7}>
              <Typography variant="h3" fontWeight={"bold"}>
                What&apos;s <span style={{ color: "grey" }}>Fluxrware</span> All About?
              </Typography>
              <Typography variant="body2" textAlign={"justify"} paddingTop={theme.spacing(2)} lineHeight={theme.spacing(4)}>
                At Fluxrware, we bring ideas to life through impactful digital expertiences. As a forward-thinking web development agency, we design and build sleek, high-performance websites and web apps tailored to your goals. By combining thoughtful UX, modern design, and the latest tech, we turn complex visions into powerful digital platforms.
              </Typography>
            </Grid>
            <Grid item xs={12 / 1} md={12 / 1} lg={5}>
              <Grid container spacing={theme.spacing(3)}>
                {coFounders.map((coFounders, index) => {
                  return (
                    <Grid key={coFounders.img} item xs={12 / 1} sm={12 / 2} md={12 / 2} lg={12 / 2}>
                      <Box>
                        <Image alt={`Co-Founder: ${coFounders.name}`} src={coFounders.img} height={1000} width={1000} />
                        <Typography variant="h6" fontWeight={"bold"}>
                          {coFounders.name}
                        </Typography>
                        <Typography variant="body2">
                          {coFounders.position}
                        </Typography>
                      </Box>
                    </Grid>
                  )
                })}
              </Grid>
            </Grid>
          </Grid>
          <Typography variant="h2" textAlign={"center"} marginBlock={theme.spacing(10)} fontWeight={"bold"}>
            Rest of The <span style={{ color: theme.palette.primary.main }}>Team</span>
          </Typography>

          <Grid container spacing={theme.spacing(2)}>
            {restOfTheTeam.map((staffData, index) => {
              return (
                <Grid key={staffData.img} item xs={12 / 1} sm={12 / 2} md={12 / 2} lg={12 / 8}>
                  <Box>
                    <Image alt={`Fluxware Staff: ${staffData.name}`} src={staffData.img} style={{ borderRadius: "20px" }} width={1000} height={1000} />
                    <Typography variant="body1" fontWeight={"bold"}>
                      {staffData.name}
                    </Typography>
                    <Typography variant="caption">
                      {staffData.position}
                    </Typography>
                  </Box>
                </Grid>
              )
            })}
          </Grid>
        </Container>
      </Box>
    </React.Fragment>
  )
}