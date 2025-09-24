'use client';
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
    fontFamily: 'var(--font-poppins)',
    h1: {
      fontFamily: 'var(--font-worksans)',
    },
    h2: {
      fontFamily: 'var(--font-worksans)',
    },
    h3: {
      fontFamily: 'var(--font-worksans)',
    },
    h4: {
      fontFamily: 'var(--font-worksans)',
    },
    h5: {
      fontFamily: 'var(--font-worksans)',
    }
  },
  fluxware: {
    goodTickColor: "green",
    badTickColor: "red"
  }
});
theme = responsiveFontSizes(theme);
export default theme;
