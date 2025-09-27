'use client';
import { useTheme } from "@emotion/react";
import { Box, useMediaQuery } from "@mui/material";
import Image from "next/image";
import React from "react";
import { Theme } from "@mui/material/styles";

export default function LogoBuild() {
    const theme : Theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <React.Fragment>
            {!isMobile && <DesktopVersion />}
            {isMobile && <MobileVersion />}
        </React.Fragment>
    )
}

function DesktopVersion() {
    return (
        <Box sx={{
            position: "absolute",
            top: "0%",
            left: "12%",
            height: "200px"
        }}>
            <Image
                src="/figma-logo.png"
                alt="Figma Logo"
                width={60}
                height={60}
                style={{
                    position: "relative",
                    top: "30%",
                    left: "140%",
                }}
            />
            <Image
                src="/flutter.png"
                alt="Figma Logo"
                width={50}
                height={40}
                style={{
                    position: "relative",
                    top: "40%",
                    left: "5%",
                }}
            />
            <Image
                src="/code-block.png"
                alt="Figma Logo"
                width={30}
                height={30}
                style={{
                    position: "relative",
                    top: "50%",
                    left: "250%",
                }}
            />
        </Box>
    )
}

function MobileVersion() {
        return (
            <Box sx={{
                position: "absolute",
                top: "0%",
                left: "0%",
                height: "200px"
            }}>
                <Image
                    src="/figma-logo.png"
                    alt="Figma Logo"
                    width={60}
                    height={60}
                    style={{
                        position: "relative",
                        top: "25%",
                        left: "110%",
                    }}
                />
                <Image
                    src="/flutter.png"
                    alt="Figma Logo"
                    width={40}
                    height={30}
                    style={{
                        position: "relative",
                        top: "60%",
                        left: "5%",
                    }}
                />
                <Image
                    src="/code-block.png"
                    alt="Figma Logo"
                    width={30}
                    height={30}
                    style={{
                        position: "relative",
                        top: "60%",
                        left: "120%",
                    }}
                />
            </Box>
        )
    }