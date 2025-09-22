'use client';
import { navLinks } from "@/data/navItems";
import { AppBar, Button, Container, Stack, Theme, Toolbar, Typography, useTheme } from "@mui/material"
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import Link from "next/link";
import React from "react"

export default function Desktopnavbar() {
    const theme : Theme = useTheme();
    return (
        <React.Fragment>
            <Container maxWidth="md" sx={{
                display: {
                    xs: "none",
                    sm: "none",
                    md: "inherit",
                    lg: "inherit"
                }
            }}>
                <AppBar position="static" sx={{
                    background: "transparent",
                    borderRadius: theme.spacing(8),
                    marginTop: theme.spacing(4),
                    boxShadow: "none",
                    border: `1px solid #000`
                }}>
                    <Toolbar disableGutters sx={{ paddingInline: .5 }}>
                        <Stack direction={"row"} alignItems={"center"} sx={{ width: "65%", padding: 0 }}>
                            <Link href="">
                                <img alt={"Fluxware-logo"} width={70} src="/fluxware-logo.png" />
                            </Link>
                            {navLinks.map((value, index) => {
                                return (
                                    <Button key={value.link} sx={{ flexGrow: 1 }}>
                                        <Link href={value.link}>
                                            <Typography variant="body1">
                                                {value.name}
                                            </Typography>
                                        </Link>
                                    </Button>
                                )
                            })}
                        </Stack>
                        <Button sx={{
                            flexGrow: 1,
                            border: "1px solid #000",
                            borderRadius: theme.spacing(5),
                        }}>
                            <Link href={"/consultation"} style={{ width: "100%", display: "block", padding: 12 }} >
                                <Typography variant="body1">
                                    Book a consultation <ArrowOutwardIcon fontSize="medium" />
                                </Typography>
                            </Link>
                        </Button>
                    </Toolbar>
                </AppBar>
            </Container>
        </React.Fragment>
    )
}