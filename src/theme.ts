'use client';
import { BorderColor } from '@mui/icons-material';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  components: {
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#000', // force black for all Typography
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // force black for all Typography
        },
      },
    }
  },
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
});
theme = responsiveFontSizes(theme);
export default theme;
