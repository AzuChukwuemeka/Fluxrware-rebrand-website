'use client';
import { productOffered } from "@/types/types";
import { Avatar, Box, Grid, Theme, Typography, useMediaQuery, useTheme } from "@mui/material";
import React from "react";
import Image from "next/image";
import FluxPictureText from "../global/fluxUI/FluxPictureText";

interface gridAlternateProp {
    item: productOffered,
    flow: boolean,
    children? : React.ReactElement | string
}

export default function GridAlternate(props : gridAlternateProp) {
    const theme : Theme = useTheme();
    const isSmall = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <React.Fragment>
            {(isSmall) && <SmallScreens item = {props.item} flow = {props.flow}/>}
            {(props.flow && !isSmall) && <Normal item = {props.item} flow = {props.flow}/>}
            {(!props.flow && !isSmall) && <Alternate item = {props.item} flow = {props.flow} />}
       </React.Fragment>
    )
}












// NEED TO FIX JUST NEED PROPS OF TYPE PRODUCT OFFERED
function Normal(props: gridAlternateProp){
    const theme : Theme = useTheme();
    return (
        <>
            <Grid item xs = {12/ 1} md = {6}>
                <FluxPictureText>
                    <Image alt = {props.item.smallImg} width = {50} height = {50} src = {props.item.smallImg} style = {{marginRight: theme.spacing(2)}}/>
                    <Typography variant="h5" textAlign={"justify"} fontWeight={"bold"} >
                        {props.item.title}
                    </Typography>
                </FluxPictureText>
                <Typography variant = "body2" textAlign={"justify"} marginTop={theme.spacing(2)} lineHeight={theme.spacing(3)}>
                    {props.item.description}
                </Typography>
            </Grid>
            <Grid item xs = {12/ 1} md = {6}>
                <Box sx = {{paddingBottom: theme.spacing(10)}}>
                    <img
                        src = {props.item.img} 
                        // width = {1000}
                        // height = {1000}
                        style = {{
                            width: "100%",
                            transform: "rotateZ(-10deg)",
                            display: "block",
                            margin: "auto"
                        }}
                    />
                </Box>
            </Grid>
        </>        
    )
}

function Alternate(props: gridAlternateProp){
    const theme : Theme = useTheme();
    return (
        <>
            <Grid item xs = {12/ 1} md = {6}>
                <Box sx = {{paddingBottom: theme.spacing(10)}}>
                    <img
                        src = {props.item.img} 
                        // width = {1000}
                        // height = {1000}
                        style = {{
                            width: "100%",
                            transform: "rotateZ(10deg)",
                            display: "block",
                            margin: "auto"
                        }}
                    />
                </Box>
            </Grid>
             <Grid item xs = {12/ 1} md = {6}>
                <FluxPictureText>
                    <Image alt = {props.item.smallImg} width = {50} height = {50} src = {props.item.smallImg} style = {{marginRight: theme.spacing(2)}}/>
                    <Typography variant="h5" textAlign={"justify"} fontWeight={"bold"}>
                        {props.item.title}
                    </Typography>
                </FluxPictureText>
                <Typography variant = "body2" textAlign={"justify"} marginTop={theme.spacing(2)} lineHeight={theme.spacing(3)}>
                    {props.item.description}
                </Typography>
            </Grid>
        </>
    )
}

function SmallScreens(props: gridAlternateProp){
    const theme : Theme = useTheme();
    return (
        <>
            <Grid item lg = {1}>
                <FluxPictureText>
                    <Image alt = {props.item.smallImg} width = {50} height = {50} src = {props.item.smallImg} style = {{marginRight: theme.spacing(2)}}/>
                    <Typography variant="h5" fontWeight={"bold"}>
                        {props.item.title}
                    </Typography>
                </FluxPictureText>
                <Typography variant = "body2" textAlign={"justify"} marginTop={theme.spacing(2)} lineHeight={theme.spacing(3)}>
                    {props.item.description}
                </Typography>
            </Grid>
            <Grid item lg={1}>
                <Box>
                    <img
                        src = {props.item.img} 
                        // width = {1000}
                        // height = {1000}
                        style = {{
                            width: "100%",
                            display: "block",
                            margin: "auto"
                        }}
                    />
                </Box>
            </Grid>
        </>        
    )
}
