'use client';
import { useGSAP } from "@gsap/react";
import { Avatar, Box, Container, Stack, Typography, useTheme } from "@mui/material";
import { Theme } from "@mui/material/styles";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import React, { useRef } from "react";
import FluxwareButton from "../global/fluxUI/FluxButtonLinks";
import Navbar from "../global/navbar/navbar";

export default function HeroSection() {
    const theme: Theme = useTheme();
    const servedRef = useRef<HTMLDivElement | null>(null);
    const titleRef = useRef<HTMLDivElement | null>(null);
    const captionRef = useRef<HTMLDivElement | null>(null);

    useGSAP(() => {
        const timeline = gsap.timeline({
            defaults: {
                duration: 1,
                ease: "power1.out"
            }
        })
        const titleSplit = new SplitText(titleRef.current, { type: 'chars, words, lines' });
        const captionSplit = new SplitText(captionRef.current, { type: 'lines' });
        gsap.set(servedRef.current, {
            yPercent: 100,
            opacity: 0,
            visibility: "visible"
        })
        gsap.set(titleSplit.chars, {
            yPercent: 100,
            opacity: 0,
            visibility: "visible"
        })
        gsap.set(captionSplit.lines, {
            yPercent: 100,
            opacity: 0,
            visibility: "visible"
        })
        timeline.to(servedRef.current, {
            yPercent: 0,
            opacity: 1,
            ease: 'power1.out',
            animationDelay: 1,
            immediateRender: false
        });

        timeline.to(titleSplit.chars,
            {
                yPercent: 0,
                opacity: 1,
                duration: .6,
                ease: 'expo.inOut',
                stagger: 0.04
            }
        )
        timeline.to(captionSplit.lines,
            {
                yPercent: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.4,
                ease: 'expo.inOut',
            }
        )
        timeline.play();
    }, []);

    return (
        <React.Fragment>
            <Box
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    flexDirection: "column",
                    background: "radial-gradient(circle, #fefefe 40%, lightblue)",
                }}
            >
                <Container maxWidth="lg">
                    <Navbar />
                    <Box
                        ref={servedRef}
                        marginTop={theme.spacing(9)}
                        paddingBlock={theme.spacing(.5)}
                        paddingInline={theme.spacing(3)}
                        borderRadius={theme.shape.borderRadius}
                        border={1}
                        borderColor={"divider"}
                        display={"flex"}
                        justifySelf={"center"}
                        alignItems={"center"}
                        sx={{
                            backgroundColor: 'rgba(128, 98, 128, 0.04)',
                            visibility: "hidden"
                        }}
                    >
                        <Stack direction="row" marginRight={1}>
                            <Avatar alt="User Served" src="./served1.jpg" sx={{ width: 24, height: 24 }} />
                            <Avatar alt="User Served" src="./served2.jpg" sx={{ width: 24, height: 24 }} />
                            <Avatar alt="User Served" src="./served3.jpg" sx={{ width: 24, height: 24 }} />
                        </Stack>
                        <Typography 
                            variant="caption" 
                            textAlign="center" 
                            letterSpacing={theme.spacing(.05)} 
                            fontWeight={500}
                        >
                            Served over 200+ Happy Clients
                        </Typography>
                    </Box>

                    <Box
                        marginTop={theme.spacing(7)}
                        sx={{
                            position: "relative"
                        }}
                    >
                        <Typography 
                            ref={titleRef} 
                            variant="h3" 
                            letterSpacing={3} 
                            textAlign="center" 
                            fontWeight={"bold"}
                            sx = {{
                                visibility: "hidden"
                            }}
                        >
                            Let us <span style={{ color: theme.palette.primary.main }}>Design</span> and <span style={{ color: "grey" }}>Build</span> your <br /> next Website.
                        </Typography>
                        <Typography 
                            ref={captionRef} 
                            variant="body1" 
                            textAlign="center" 
                            padding={theme.spacing(4)}
                            sx = {{
                                visibility: "hidden"
                            }}
                        >
                            Elevating brands with custom, responsive web design and robust development
                        </Typography>
                        {/* <LogoBuild /> */}
                    </Box>
                    <Container
                        maxWidth="lg"
                        sx={{
                            display: "flex",
                            flexWrap: "wrap",
                            padding: theme.spacing(.3),
                            justifyContent: "center",
                        }}
                    >
                        {/* <FluxwareButton variant="outlined">Space for icons</FluxwareButton> */}
                        <FluxwareButton variant="outlined" link={"/prices"}>Pricing</FluxwareButton>
                        <FluxwareButton variant="contained" link={""}>Get Started</FluxwareButton>
                    </Container>
                    <img src="./hero-bottom.png" alt="Hero Image" />
                </Container>
            </Box>
        </React.Fragment>
    )
}
