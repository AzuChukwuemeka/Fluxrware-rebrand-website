'use client';
import { customerReviewsRowOne, customerReviewsRowThree, customerReviewsRowTwo } from "@/data/customerReviews";
import { generateRandomColor } from "@/utils/helpers";
import { useGSAP } from "@gsap/react";
import { Avatar, Box, Card, CardContent, Container, Grid, Typography, useTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

export default function OurWork() {
  gsap.registerPlugin(ScrollTrigger);
  const topElementRef = useRef<HTMLDivElement | null>(null);
  const rowOneRef = useRef<HTMLDivElement | null>(null);
  const rowTwoRef = useRef<HTMLDivElement | null>(null);
  const rowThreeRef = useRef<HTMLDivElement | null>(null);
  useGSAP(() => {
    gsap.set(rowOneRef.current, { visibility: "visible", xPercent: -50, opacity: 0 })
    gsap.set(rowTwoRef.current, { visibility: "visible", xPercent: 50, opacity: 0 })
    gsap.set(rowThreeRef.current, { visibility: "visible", xPercent: -50, opacity: 0 })
    gsap.to(rowOneRef.current, {
      opacity: 1,
      xPercent: 0,
      scrollTrigger: {
        trigger: topElementRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
        scrub: 1,
      }
    })
    gsap.to(rowTwoRef.current, {
      opacity: 1,
      xPercent: 0,
      scrollTrigger: {
        trigger: rowTwoRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
        scrub: 1,
      }
    })
    gsap.to(rowThreeRef.current, {
      opacity: 1,
      xPercent: 0,
      scrollTrigger: {
        trigger: rowThreeRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
        scrub: 1,
      }
    })
  }, []);
  // MISMATCH ERROR IS DUE TO GENERATING RANDOM COLORS ON THE SERVER AND THEN ON THE CLIENT (UNAVOIDABLE) INTENTIONAL HYRDATION MISMATCH
  const theme: Theme = useTheme();
  return (
    <React.Fragment>
      <Box paddingTop={theme.spacing(10)} style={{ background: "radial-gradient(circle at top right, #fefefe 95%, lightblue) 200% 200%" }}>
        <Container ref={topElementRef}>
          <Typography fontWeight={"bold"} variant="h3" textAlign={"center"}>
            Our <span style={{ color: theme.palette.primary.main }}>Work,</span> Through Their <span style={{ color: "grey" }}>Lens</span>
          </Typography>
          <Typography variant="body1" textAlign={"center"} marginTop={theme.spacing(3)} marginBottom={theme.spacing(5)}>
            Their words, their success, our shared story
          </Typography>
          <Box>
            {/* USING DIFFERENT GRID ROWS TO ACHIEVE A MORE DYNAMIC LAYOUT */}
            {/* ROW ONE */}
            <Grid
              container
              spacing={2}
              justifyContent={"center"}
              paddingBottom={2}
              sx={{ 
                visibility: "hidden",
                overflowX: "hidden"
              }}
              ref={rowOneRef}
            >
              {customerReviewsRowOne.map((customerReview, index) => {
                return (
                  <Grid key={index} item xs={12 / 1} md={12 / 1} lg={12 / 3.5}>
                    <Card sx={{
                      border: "1.5px solid lightblue",
                      borderRadius: theme.spacing(3),
                    }}>
                      <CardContent>
                        <Box display={"flex"} paddingBlock={1} alignItems={"center"}>
                          <Avatar
                            sx={{
                              marginRight: theme.spacing(2),
                              backgroundColor: generateRandomColor()
                            }}
                          >{customerReview.name.charAt(0)}</Avatar>
                          <Typography variant="body1">
                            {customerReview.name}
                          </Typography>
                        </Box>
                        <Typography fontWeight={"bold"} variant="body2">
                          {customerReview.review}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              })}
            </Grid>

            {/* ROW TWO */}
            <Grid 
              container 
              spacing={2} 
              justifyContent={"center"} 
              paddingBottom={2}
              ref = {rowTwoRef}
              sx={{ 
                visibility: "hidden",
                overflowX: "hidden"
              }}
            >
              {customerReviewsRowTwo.map((customerReview, index) => {
                return (
                  <Grid key={index} item xs={12 / 1} md={12 / 1} lg={12 / 4}>
                    <Card sx={{
                      border: "1.5px solid lightblue",
                      borderRadius: theme.spacing(3),
                    }}>
                      <CardContent>
                        <Box display={"flex"} paddingBlock={1} alignItems={"center"}>
                          <Avatar
                            sx={{
                              marginRight: theme.spacing(2),
                              backgroundColor: generateRandomColor()
                            }}
                          >{customerReview.name.charAt(0)}</Avatar>
                          <Typography variant="body1">
                            {customerReview.name}
                          </Typography>
                        </Box>
                        <Typography fontWeight={"bold"} variant="body2">
                          {customerReview.review}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              })}
            </Grid>

            {/* ROW THREE */}
            <Grid 
              container 
              spacing={2} 
              justifyContent={"center"} 
              paddingBottom={2}
              ref = {rowThreeRef}
              sx={{ 
                visibility: "hidden",
                overflowX: "hidden"
              }}
            >
              {customerReviewsRowThree.map((customerReview, index) => {
                return (
                  <Grid key={index} item xs={12 / 1} md={12 / 1} lg={12 / 3.5}>
                    <Card sx={{
                      border: "1.5px solid lightblue",
                      borderRadius: theme.spacing(3),
                    }}>
                      <CardContent>
                        <Box display={"flex"} paddingBlock={1} alignItems={"center"}>
                          <Avatar
                            sx={{
                              marginRight: theme.spacing(2),
                              backgroundColor: generateRandomColor()
                            }}
                          >{customerReview.name.charAt(0)}</Avatar>
                          <Typography variant="body1">
                            {customerReview.name}
                          </Typography>
                        </Box>
                        <Typography fontWeight={"bold"} variant="body2">
                          {customerReview.review}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                )
              })}
            </Grid>

          </Box>
        </Container>
      </Box>
    </React.Fragment>
  )
}