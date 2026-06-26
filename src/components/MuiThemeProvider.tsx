'use client';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#DE5B27',    // WACREN Brand Orange
      dark: '#C43B11',    // Darker orange for hover states
      light: '#E97A4D',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#4A1618',    // Deep Maroon
      dark: '#3a1012',
      light: '#6B2023',
      contrastText: '#ffffff',
    },
    background: {
      default: '#FDF6F3', // Warm off-white
      paper: '#ffffff',
    },
    text: {
      primary: '#2A1210',  // Near-black warm brown
      secondary: '#5C3428',
    },
  },
  typography: {
    fontFamily: 'var(--font-outfit), sans-serif',
    h1: {
      fontWeight: 700,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: false, // Keep ripple but remove focus ring
      },
      styleOverrides: {
        root: {
          outline: 'none !important',
          boxShadow: 'none !important',
          '&:focus': {
            outline: 'none !important',
          },
          '&:active': {
            outline: 'none !important',
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          '&:focus': {
            outline: 'none !important',
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          '&:focus': {
            outline: 'none !important',
          },
        },
      },
    },
  },
});

export default function MuiThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}