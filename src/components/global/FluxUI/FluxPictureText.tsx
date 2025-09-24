import { Box } from "@mui/material";
import React from "react";
export function FluxPictureText(props: any) {
    return (
        <Box display={"flex"} paddingBlock={1} alignItems={"center"}>
            {props.children}
        </Box>
    )
}