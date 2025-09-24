'use client';
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { whatWeOffer } from "@/data/whatWeOffer";
import GridAlternate from "./GridAlternate";

export default function WhatWeOffer() {
  const theme: Theme = useTheme();
  return (
    <>
      <Box style={{ background: "radial-gradient(circle at bottom left, #fefefe 94%, lightblue) 200% 200%" }}>
        <Container maxWidth="lg">
          <Typography variant="h3" textAlign={"center"} paddingTop={theme.spacing(10)} fontWeight="bold">
            What We <span style={{ color: theme.palette.primary.main }}>Offer</span>
          </Typography>
          <Typography variant="body1" textAlign={"center"} paddingTop={theme.spacing(4)} paddingBottom={10}>
            Solutions tailored to grow your business from the ground up.
          </Typography>
          <Grid container spacing={theme.spacing(10)} alignItems={"center"}>
            {whatWeOffer.map((value, index) => {
              return (
                <GridAlternate key={value.title} item={value} flow={((index + 1) % 2 == 0) ? false : true} />
              )
            })}
          </Grid>
        </Container>
      </Box>
    </>
  )
}