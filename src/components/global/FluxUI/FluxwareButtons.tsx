import { fluxwareButton } from "@/types/types";
import { useTheme } from "@emotion/react";
import { Button, Theme } from "@mui/material";
export default function FluxwareButton(props: fluxwareButton){
    const theme : Theme = useTheme();
    const buttonBorderRadius : string = "20px";
    return (
        <Button 
            size = "large" 
            variant={props.variant}
            sx = {{
                borderRadius: buttonBorderRadius,
                paddingInline: theme.spacing(6),
                marginInline: theme.spacing(1)
            }}
        >
            {props.children}
        </Button>
    )    
}