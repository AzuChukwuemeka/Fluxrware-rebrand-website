import { fluxwareButton } from "@/types/types";
import { useTheme } from "@mui/material/styles";
import { Button, Theme } from "@mui/material";
import Link from "next/link";

export default function FluxwareButton(props: fluxwareButton) {
    const theme: Theme = useTheme();
    const buttonBorderRadius: string = "20px";
    return (
        <Link href={props.link}>
            <Button
                size="large"
                variant={props.variant}
                sx={{
                    borderRadius: buttonBorderRadius,
                    paddingInline: theme.spacing(6),
                    marginInline: theme.spacing(1)
                }}
            >
                {props.children}
            </Button>
        </Link>
    )
}