import { Avatar, Box, Button, Card, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Theme, Typography, useTheme } from "@mui/material";
import FluxPictureText from "../global/FluxUI/FluxPictureText";

export default function WhatWeOffer() {
    const theme : Theme = useTheme();
    return (
    <>
      <Box style = {{background: "radial-gradient(circle at bottom left, #fefefe 94%, lightblue) 200% 200%"}}>
        <Container maxWidth = "lg">
          <Typography variant = "h3" textAlign={"center"} paddingTop={theme.spacing(10)} fontWeight = "bold">
            What We <span style = {{color: theme.palette.primary.main}}>Offer</span>
          </Typography>
          <Typography variant = "body1" textAlign={"center"} paddingTop={theme.spacing(4)} paddingBottom={15} fontWeight={"bold"}>
            Solutions tailored to grow your business from the ground up.
          </Typography>
          <Grid container spacing = {theme.spacing(4)}>
            <Grid item xs={12} sm={12} md={5} alignSelf={"center"}>
              <FluxPictureText>
                <Avatar src = "./paint.png" sx = {{marginRight: theme.spacing(2)}}/>
                <Typography variant="h4" textAlign={"justify"} fontWeight={"bold"}>
                  Custom Website Design
                </Typography>
              </FluxPictureText>
              <Typography variant = "body2">
                Your website should reflect the heart of your brand. We design custom conversion-focused experiences that not only look great but also guide visitors toward taking action, whether it's booking, buying or reaching out.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
              <Box paddingBottom={theme.spacing(20)}>
                <img 
                  src = "./welcome-back.png" 
                  style = {{
                    width: "80%",
                    transform: "rotateZ(-10deg)",
                    display: "block",
                    margin: "auto"
                  }}
                  />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing = {theme.spacing(4)}>
            <Grid item xs={12} sm={12} md={7} alignSelf={"center"}>
              <Box paddingBottom={theme.spacing(20)}>
                <img 
                  src = "./responsive.jpg" 
                  style = {{
                    width: "80%",
                    transform: "rotateZ(10deg)",
                    display: "block",
                    margin: "auto"
                  }}
                  />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <FluxPictureText>
                <Avatar src = "./screw-driver.png" sx = {{marginRight: theme.spacing(2)}}/>
                <Typography variant="h5" textAlign={"justify"}  fontWeight={"bold"}>
                  Responsive web Development
                </Typography>
              </FluxPictureText>
              <Typography variant = "body2">
                From mobile to desktop and everything in between, we build fast, reliable websites that adapt beautifully to any screen size Behind the scenes, your code is clean, secure, and optimized for performance.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing = {theme.spacing(4)}>
            <Grid item xs={12} sm={12} md={5} alignSelf={"center"}>
              <FluxPictureText>
                <Avatar src = "./basket.png" sx = {{marginRight: theme.spacing(2)}}/>
                <Typography variant="h4" textAlign={"justify"} fontWeight={"bold"}>
                  E-Commerce Development
                </Typography>
              </FluxPictureText>
              <Typography variant = "body2">
                Want to start selling online? We create smooth, secure online stores that make shopping easy for your customers and managing your business simple for you. From product page to checkout, it's all built just for you.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
              <Box paddingBottom={theme.spacing(20)}>
                <img
                  src = "./pre-order.jpg" 
                  style = {{
                    width: "80%",
                    transform: "rotateZ(-10deg)",
                    display: "block",
                    margin: "auto"
                  }}
                  />
              </Box>
            </Grid>
          </Grid>
          <Grid container spacing = {theme.spacing(4)}>
            <Grid item xs={12} sm={12} md={7} alignSelf={"center"}>
              <Box paddingBottom={20}>
                <img 
                  src = "./seo.png" 
                  style = {{
                    width: "80%",
                    transform: "rotateZ(10deg)",
                    display: "block",
                    margin: "auto"
                  }}
                  />
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={5}>
              <FluxPictureText>
                <Avatar src = "./rocket.png" sx = {{marginRight: theme.spacing(2)}}/>
                <Typography variant="h5" textAlign={"justify"} fontWeight={"bold"}>
                  SEO & Performance Optimization
                </Typography>
              </FluxPictureText>
              <Typography variant = "body2">
                Your website should reflect the heart of your brand. We design custom conversion-focused experiences that not only look great but also guide visitors toward taking action, whether it's booking, buying or reaching out.
              </Typography>
            </Grid>
          </Grid>
          <Grid container spacing = {theme.spacing(4)}>
            <Grid item xs={12} sm={12} md={5} alignSelf={"center"}>
              <FluxPictureText>
                <Avatar src = "./spanner.png" sx = {{marginRight: theme.spacing(2)}}/>
                <Typography variant="h5" textAlign={"justify"} fontWeight={"bold"}>
                  Ongoing Maintenance & Support
                </Typography>
              </FluxPictureText>
              <Typography variant = "body2">
                Launching your site is just the beginning. We offer reliable support and regular updates to keep everything running smoothly, secure, and up to date, so you can focus on your business while we handle the tech. We also integrate intuitive content management systems like Wordpress. Webflow, or customo dashboards giving you full control to update your website content anytime, without needing to touch code.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={7}>
              <Box paddingBottom={20}>
                <img 
                  src = "./ongoing-maintenance.png" 
                  style = {{
                    width: "80%",
                    transform: "rotateZ(-10deg)",
                    display: "block",
                    margin: "auto"
                  }}
                  />
              </Box>
            </Grid>
          </Grid>
          </Container>
        </Box>
    </>
    )    
}