import React from "react";
import { Avatar, Box, Button, Card, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Theme, Typography, useTheme } from "@mui/material";

export default function WhoWeAre() {
    const theme : Theme = useTheme();
    return (
        <React.Fragment>
          <Box paddingTop={10}  style = {{background: "radial-gradient(circle at bottom left, #fefefe 90%, lightblue) 200% 200%"}}>
            <Container>
            <Typography variant = "h3" textAlign={"center"}>
              Who We <span style = {{color: theme.palette.primary.main}}>Are</span>
            </Typography>
            <Typography textAlign={"center"} paddingTop={2} fontWeight={"bold"}>
              More than just code, it's about the people behind the projects
            </Typography>
            <Grid container marginTop={6} spacing = {3}>
              <Grid item xs = {12/1} md = {12/1} lg = {7}>
                <Typography variant="h4" fontWeight={"bold"}>
                  What's <span style = {{color: "grey"}}>Fluxrware</span> all about?                  
                </Typography>
                <Typography marginTop={3}>
                  At Fluxrware, we bring ideas to life through impactful digital expertiences. As a forward-thinking web development agency, we design and build sleek, high-performance websites and web apps tailored to your goals. By combining thoughtful UX, modern design, and the latest tech, we turn complex visions into powerful digital platforms.
                </Typography>
              </Grid>
              <Grid item xs = {12/1} md = {12/1} lg = {5}>
                <Grid container spacing = {3}>
                  <Grid item lg = {12/2}>
                    <Box>
                      <img src = "./about-us-1.png" style = {{borderRadius: "20px"}}/>
                      <Typography variant = "h6" fontWeight={"bold"}>
                        Richard Chukwuemeka
                      </Typography>
                      <Typography variant = "body2">
                        Co-Founder, Front-end Developer
                      </Typography>
                    </Box>
                  </Grid>
                  <Grid item lg = {12/2}>
                    <Box>
                      <img src = "./about-us-2.png" style = {{borderRadius: "20px"}}/>
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
            <Typography variant = "h3" textAlign={"center"} marginBlock={8}>
              Rest of the <span style = {{color: theme.palette.primary.main}}>Team</span>
            </Typography>
              <Grid container spacing = {3}>
                <Grid item lg = {12/8}>
                  <Box>
                    <img src = "./about-us.jpg" style = {{borderRadius: "20px"}}/>
                    <Typography variant = "body2" fontWeight={"bold"}>
                      Azu Chukwuemeka
                    </Typography>
                    <Typography variant = "body2">
                      Backend Developer, Software Architect.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg = {12/8}>
                  <Box>
                    <img src = "./about-us-3.jpg" style = {{borderRadius: "20px"}}/>
                    <Typography variant = "body2" fontWeight={"bold"}>
                      Ouwasegun Babalola
                    </Typography>
                    <Typography variant = "body2">
                      ui/ux Designer
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg = {12/8}>
                  <Box>
                    <img src = "./about-us-4.jpg" style = {{borderRadius: "20px"}}/>
                    <Typography variant = "body2" fontWeight={"bold"}>
                      Aishath Bello
                    </Typography>
                    <Typography variant = "body2">
                      Asst Project Manager, UI/UX Designer
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg = {12/8}>
                  <Box>
                    <img src = "./about-us-5.jpg" style = {{borderRadius: "20px"}}/>
                    <Typography variant = "body2" fontWeight={"bold"}>
                      Temityoyo Temisanren
                    </Typography>
                    <Typography variant = "body2">
                      Project Manager, Frontend Developer
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg = {12/8}>
                  <Box>
                    <img src = "./about-us-6.png" style = {{borderRadius: "20px"}}/>
                    <Typography variant = "body2" fontWeight={"bold"}>
                      Habeeb Dere
                    </Typography>
                    <Typography variant = "body2">
                      Product Manager
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg = {12/8}>
                  <Box>
                    <img src = "./about-us-7.png" style = {{borderRadius: "20px"}}/>
                    <Typography variant = "body2" fontWeight={"bold"}>
                      Adedapo Ogunwolu
                    </Typography>
                    <Typography variant = "body2">
                      Cyber Security Specialist
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg = {12/8}>
                  <Box>
                    <img src = "./about-us-8.png" style = {{borderRadius: "20px"}}/>
                    <Typography variant = "body2" fontWeight={"bold"}>
                      Suleiman Ahmed
                    </Typography>
                    <Typography variant = "body2">
                      Branding Expert, UI/UX Designer
                    </Typography>
                  </Box>
                </Grid>
                <Grid item lg = {12/8}>
                  <Box>
                    <img src = "./about-us-9.jpg" style = {{borderRadius: "20px"}}/>
                    <Typography variant = "body2" fontWeight={"bold"}>
                      Yusuf Mahad
                    </Typography>
                    <Typography variant = "body2">
                      Graphics Designer
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </React.Fragment>
    )
}