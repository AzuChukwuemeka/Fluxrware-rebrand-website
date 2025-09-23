'use client';
import { navLinks } from "@/data/navItems";
import { Box, Container, Stack, Theme, Typography, useTheme } from "@mui/material";
import Link from "next/link";

export default function Footer() {
    const theme: Theme = useTheme();
    return (
        <Box sx={{
            background: "#fefefe"
        }}
            paddingTop={theme.spacing(10)}
        >
            <Container maxWidth="lg">
                <Stack direction={"row"} justifyContent={"space-between"}>
                    <Box>
                        <Typography variant="h4" fontWeight={"bold"}>Fluxrware Tech</Typography>
                        <Typography variant="caption">Fluxrware@gmail.com <br /></Typography>
                        <Typography variant="caption">+2349030107031 <br /></Typography>
                        <Typography variant="caption">+2347041099662 <br /></Typography>
                    </Box>
                    <Box>
                        {navLinks.map((value, index) => {
                            return (
                                <Link key = {value.link} href={value.link} style={{ display: "block" }}>
                                    <Typography fontWeight={"bold"} variant="caption">{value.name}</Typography>
                                </Link>
                            )
                        })}
                        <Link href={"/terms"} style={{ display: "block" }}>
                            <Typography fontWeight={"bold"} variant="caption">Terms of Service</Typography>
                        </Link>
                    </Box>
                </Stack>

                <Stack direction={"row"} justifyContent={"space-between"}  paddingTop={theme.spacing(4)}>
                    <Box>
                        <Typography variant="caption" color = {theme.palette.primary.main}>All right reserved</Typography>
                    </Box>
                    <Box>
                        <Typography variant="caption" color = {theme.palette.primary.main}>&copy; 2025</Typography>
                    </Box>
                </Stack>
                <Typography fontSize={"12vw"} whiteSpace={"no-wrap"} sx={{
                    background: "linear-gradient(90deg, lightblue, blue)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    color: "transparent"
                }}>
                    FLUXRWARE
                </Typography>
            </Container>
        </Box >
    )
}