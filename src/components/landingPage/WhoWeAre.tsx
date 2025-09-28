'use client';
import React, { useRef } from "react";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";
import { coFounders, restOfTheTeam } from "@/data/restOfTheTeam";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)


export default function WhoWeAre() {
  const titleRef = useRef<HTMLDivElement | null>(null);
  const theme: Theme = useTheme();
  useGSAP(() => {
    gsap.set(titleRef.current, { visibility: "visible", opacity: 0, yPercent: 30 });
    gsap.to(titleRef.current, {
      opacity: 1,
      yPercent: 0,
      duration: 1,
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
        end: "bottom 80%",
        toggleActions: "play none none reverse",
        scrub: true
      }
    })
  }, []);
  return (
    <React.Fragment>
      <Box paddingTop={theme.spacing(10)} style={{ background: "radial-gradient(circle at bottom left, #fefefe 90%, lightblue) 200% 200%" }}>
        <Container>
          <Typography
            variant="h2"
            textAlign={"center"}
            fontWeight={"bold"}
            sx={{ visibility: "hidden" }}
            ref={titleRef}
          >
            Who We <span style={{ color: theme.palette.primary.main }}>Are</span>
          </Typography>
          <Typography
            variant="body2"
            textAlign={"center"}
            marginTop={theme.spacing(3)}
          >
            More than just code, it&apos;s about the people behind the projects
          </Typography>
          <Grid container marginTop={theme.spacing(1.5)} spacing={theme.spacing(7)}>
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
                {coFounders.map((founder, index) => {
                  return (
                    <Grid key={founder.img} item xs={12 / 1} lg={12 / 2}>
                      <Box display={"flex"} flexDirection={"column"} alignItems={"center"} textAlign={"center"} gap={1}>
                        <Image alt={`Co-Founder: ${founder.name}`} src={founder.img} height={1000} width={1000} style={{
                          height: "200px",
                          width: "200px",
                          borderRadius: theme.spacing(3),
                          objectFit: "cover",
                          // width: "400px"
                        }} />
                        <Typography variant="h6" fontWeight={"bold"}>
                          {founder.name}
                        </Typography>
                        <Typography variant="body2">
                          {founder.position}
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
                <Grid key={staffData.img} item xs={12 / 1} md={12 / 2} lg={12 / 8}>
                  <Box display={"flex"} flexDirection={"column"} alignItems={"center"} textAlign={"center"} gap={1}>
                    <Image alt={`Fluxware Staff: ${staffData.name}`} src={staffData.img}
                      width={700}
                      height={700}
                      style={{
                        height: "200px",
                        width: "200px",
                        borderRadius: theme.spacing(3),
                        backgroundPosition: "0% 0%",
                        objectFit: "cover",
                      }}
                    />
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