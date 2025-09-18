import '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        fluxware: {
            goodTickColor: string;
            badTickColor: string;
        }
    }
    interface ThemeOptions {
        fluxware?: {
            goodTickColor?: string;
            badTickColor?: string;
        }
    }
}