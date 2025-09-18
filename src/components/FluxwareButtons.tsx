import { fluxwareButton } from "@/types/types";
import { Button } from "@mui/material";
export default function FluxwareButton(props: fluxwareButton){
    return (
        <Button 
            size = "large" 
            variant={props.variant}
            sx = {{
                borderRadius: "20px",
                paddingInline: "45px"
            }}
        >
            {props.children}
        </Button>
    )    
}