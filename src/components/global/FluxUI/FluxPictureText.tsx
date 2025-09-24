import { Box } from "@mui/material";
import React from "react";
type picture = {
    children: any
}
export function FluxPictureText(props: picture) {
    return (
        <Box display={"flex"} paddingBlock={1} alignItems={"center"}>
            {props.children}
        </Box>
    )
}