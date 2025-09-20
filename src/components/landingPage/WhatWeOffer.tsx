import { Avatar, Box, Button, Card, CardContent, Container, FormControl, Grid, InputLabel, MenuItem, Select, Stack, Theme, Typography, useTheme } from "@mui/material";
import FluxPictureText from "../global/fluxUI/FluxPictureText";
import GridSwitchSideByProp from "../global/others/gridItemSwitchByProp";

export default function WhatWeOffer() {
    const theme : Theme = useTheme();
    return (
    <>
      <Box style = {{
        background: "radial-gradient(circle at bottom left, #fefefe 98%, rgba(0,100,250,.1)) 200% 200%"
      }}>
        <Container maxWidth = "lg">
          <Typography variant = "h3" textAlign={"center"} paddingTop={theme.spacing(10)} fontWeight = "bold">
            What We <span style = {{color: theme.palette.primary.main}}>Offer</span>
          </Typography>
          <Typography variant = "body1" textAlign={"center"} paddingTop={theme.spacing(4)} paddingBottom={15} fontWeight={"bold"}>
            Solutions tailored to grow your business from the ground up.
          </Typography>
          <Grid container spacing = {theme.spacing(4)}>
            <GridSwitchSideByProp itemOne={{
                img: "./paint.png",
                title: "Custom Website Design",
                text: "Your website should reflect the heart of your brand. We design custom conversion-focused experiences that not only look great but also guide visitors toward taking action, whether it's booking, buying or reaching out."
              }} itemTwo={{
                bigImage: "./welcome-back.png"
              }} normalFlow={true} />
          </Grid>

          <Grid container spacing = {theme.spacing(4)} sx = {{
            background: "radial-gradient(circle at top right, #fefefe 70%, rgba(250,100,100,.09)) 200% 200%"
          }}>
            <GridSwitchSideByProp itemOne={{
                img: "./screw-driver.png",
                title: "Responsive web Development",
                text: "From mobile to desktop and everything in between, we build fast, reliable websites that adapt beautifully to any screen size Behind the scenes, your code is clean, secure, and optimized for performance."
              }} itemTwo={{
                bigImage: "./responsive.jpg"
              }} normalFlow={false} />
          </Grid>

          <Grid container spacing = {theme.spacing(4)} sx = {{
            background: "radial-gradient(circle at top left, #fefefe 70%, rgba(200,150,150,.09)) 200% 200%"
          }}>
            <GridSwitchSideByProp itemOne={{
                img: "./basket.png",
                title: "E-Commerce Development",
                text: "Want to start selling online? We create smooth, secure online stores that make shopping easy for your customers and managing your business simple for you. From product page to checkout, it's all built just for you."
              }} itemTwo={{
                bigImage: "./pre-order.jpg"
              }} normalFlow={true} />
          </Grid>

          <Grid container spacing = {theme.spacing(4)} sx = {{
            background: "radial-gradient(circle at top right, #fefefe 70%, rgba(250,200,20,.07)) 200% 200%"
          }}>
            <GridSwitchSideByProp itemOne={{
                img: "./rocket.png",
                title: "SEO & Performance Optimization",
                text: "Your website should reflect the heart of your brand. We design custom conversion-focused experiences that not only look great but also guide visitors toward taking action, whether it's booking, buying or reaching out."
              }} itemTwo={{
                bigImage: "./seo.png"
              }} normalFlow={false} />
          </Grid>
          <Grid container 
            spacing = {theme.spacing(4)} sx = {{
              background: "radial-gradient(circle at top left, #fefefe 70%, rgba(100,20,200,.04)) 200% 200%"
            }}
            paddingBottom={theme.spacing(10)}
          >
            <GridSwitchSideByProp itemOne={{
                img: "./spanner.png",
                title: "Ongoing Maintenance & Support",
                text: "Launching your site is just the beginning. We offer reliable support and regular updates to keep everything running smoothly, secure, and up to date, so you can focus on your business while we handle the tech. We also integrate intuitive content management systems like Wordpress. Webflow, or customo dashboards giving you full control to update your website content anytime, without needing to touch code."
              }} itemTwo={{
                bigImage: "./ongoing-maintenance.png"
              }} normalFlow={true} />
          </Grid>
          </Container>
        </Box>
    </>
    )    
}