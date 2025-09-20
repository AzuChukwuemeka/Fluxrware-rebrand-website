import { Avatar, Box, Grid, Typography, useMediaQuery } from "@mui/material"
import React from "react"
import FluxPictureText from "../fluxUI/FluxPictureText"
import { Theme } from "@mui/material/styles/createTheme"
import { useTheme } from "@emotion/react"

interface gridSwitch {
    children?: null,
    itemOne: {
        img: string,
        title: string,
        text: string
    }
    itemTwo: {
        bigImage: string
    },
    normalFlow: boolean
}
export default function GridSwitchSideByProp(props: gridSwitch) {
    const theme: Theme = useTheme();
    const isSm = useMediaQuery(theme.breakpoints.up("sm"));
    const isMd = useMediaQuery(theme.breakpoints.up("md"));
    const isLg = useMediaQuery(theme.breakpoints.up("lg"));
    let rotation = 0;
    if(isLg)  rotation = 20;
    if(props.normalFlow) rotation = -rotation; 

    return (
        <React.Fragment>
            <Grid item xs={12} sm={12} md ={12} lg={5} 
                alignSelf={"center"}
                alignItems={"center"}
                sx = {{
                    order: {
                        xs: 1,
                        md: 1,
                        lg: (props.normalFlow) ? 1 : 2
                    }
                }}
            >
                <FluxPictureText>
                    <Avatar src = {props.itemOne.img} sx = {{marginRight: theme.spacing(2)}}/>
                    <Typography variant="h4" fontWeight={"bold"}>
                        {props.itemOne.title}
                    </Typography>
                </FluxPictureText>
                <Typography variant = "body2" textAlign={"justify"}>
                    {props.itemOne.text}
                </Typography>
            </Grid>
            <Grid item xs={12} sm={12} md ={12}  lg={7}
                sx = {{
                    order: {
                        xs: 2,
                        md: 2,
                        lg: (props.normalFlow) ? 2 : 1
                    }
                }}
            >
                <Box paddingBottom={30}
                    sx = {{
                        paddingBottom : 10
                    }}
                >
                    <img 
                        src = {props.itemTwo.bigImage} 
                        style = {{
                        width: "80%",
                        transform: `rotateZ(${rotation}deg)`,
                        display: "block",
                        margin: "auto"
                        }}
                    />
                </Box>
            </Grid>
        </React.Fragment>
    )
}