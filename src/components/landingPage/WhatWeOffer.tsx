'use client';
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { whatWeOffer } from "@/data/whatWeOffer";
import GridAlternate from "./GridAlternate";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { slideBottomDefaultState, slideBottomToProperties } from "@/animations/slideBottom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeOffer() {
  const offerTitleRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    // Initial state
    gsap.set(offerTitleRef.current, slideBottomDefaultState);

    // Animate on scroll
    gsap.to(offerTitleRef.current, {
      ...slideBottomToProperties,
      duration: 1,
      ease: "expo.inOut",
      scrollTrigger: {
        trigger: offerTitleRef.current,
        start: "top bottom",
        end: "bottom 90%",
        scrub: 1,
        toggleActions: "play none none reverse",
      }
    });

  }, []);

  const theme: Theme = useTheme();

  return (
    <Box style={{ background: "radial-gradient(circle at bottom left, #fefefe 94%, lightblue) 200% 200%" }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          textAlign="center"
          paddingTop={theme.spacing(10)}
          fontWeight="bold"
          ref={offerTitleRef}
          sx={{ visibility: "hidden" }}
        >
          What We <span style={{ color: theme.palette.primary.main }}>Offer</span>
        </Typography>
        <Typography variant="body1" textAlign="center" paddingTop={theme.spacing(4)} paddingBottom={10}>
          Solutions tailored to grow your business from the ground up.
        </Typography>
        <Grid container spacing={theme.spacing(10)} alignItems="center">
          {whatWeOffer.map((value, index) => (
            <GridAlternate
              key={value.title}
              item={value}
              flow={(index + 1) % 2 !== 0}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
