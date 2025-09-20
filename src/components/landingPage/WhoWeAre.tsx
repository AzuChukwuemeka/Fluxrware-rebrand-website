import React from "react";
import { Avatar, Box, Button, Card, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Theme, Typography, useTheme } from "@mui/material";
import { fluxWareStaff } from "@/types/types";
import { restOfTheTeam } from "@/data/fluxData";

export default function WhoWeAre() {
    const theme : Theme = useTheme();
    return (
        <React.Fragment>
          <Box paddingTop={theme.spacing(10)}  style = {{background: "radial-gradient(circle at bottom left, #fefefe 90%, rgba(220,240,230,9)) 200% 200%"}}>
            <Container>
              <Typography variant = "h3" textAlign={"center"} fontWeight={"bold"}>
                Who We <span style = {{color: theme.palette.primary.main}}>Are</span>
              </Typography>
              <Typography variant={"body2"} textAlign={"center"} paddingTop={theme.spacing(2)} fontWeight={"bold"}>
                More than just code, it's about the people behind the projects
              </Typography>
              <Grid container marginTop={theme.spacing(6)} spacing = {theme.spacing(3)}>
                <Grid item xs = {12/1} md = {12/2} lg = {7}>
                  <Typography variant="h3" fontWeight={"bold"}>
                    What's <span style = {{color: "grey"}}>Fluxrware</span> all about?                  
                  </Typography>
                  <Typography variant = "body2" marginTop={3} textAlign={"justify"}>
                    At Fluxrware, we bring ideas to life through impactful digital expertiences. As a forward-thinking web development agency, we design and build sleek, high-performance websites and web apps tailored to your goals. By combining thoughtful UX, modern design, and the latest tech, we turn complex visions into powerful digital platforms.
                  </Typography>
                </Grid>
                <Grid item xs = {12/1} md = {12/2} lg = {5}>
                  <Grid container spacing = {theme.spacing(3)}>
                    <Grid item xs={12/2} md={12/2} lg = {12/2}>
                      <Box>
                        <img src = "./about-us-1.png" style = {{width: "1000px", borderRadius: "20px"}}/>
                        <Typography variant = "h6" fontWeight={"bold"}>
                          Richard Chukwuemeka
                        </Typography>
                        <Typography variant = "body2">
                          Co-Founder, Front-end Developer
                        </Typography>
                      </Box>
                    </Grid>
                    <Grid item  xs={12/2} md={12/2} lg = {12/2}>
                      <Box>
                        <img src = "./about-us-2.png" style = {{width: "1000px", borderRadius: "20px"}}/>
                        <Typography variant = "h6" fontWeight={"bold"}>
                          Rhema Emmanuel
                        </Typography>
                        <Typography variant = "body2">
                          Co-Founder, Front-end Developer
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <Typography variant = "h3" textAlign={"center"} marginBlock={theme.spacing(8)} fontWeight = {"bold"}>
                Rest of the <span style = {{color: theme.palette.primary.main}}>Team</span>
              </Typography>
                <Grid container spacing = {theme.spacing(3)}>
                  {restOfTheTeam.map((value, index) => {
                    return (
                      <Grid item lg = {12/8} key = {index}>
                        <Box>
                          <img src = {value.img} style = {{borderRadius: "20px"}}/>
                          <Typography variant = "body2" fontWeight={"bold"}>
                            {value.name}
                          </Typography>
                          <Typography variant = "body2">
                            {value.jobRole}
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