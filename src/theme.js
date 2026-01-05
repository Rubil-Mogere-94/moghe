import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { amber, deepOrange, green, grey, blueGrey, common } from '@mui/material/colors';

const getAppTheme = (mode) => {
  const theme = createTheme({
    palette: {
      mode,
      ...(mode === 'light'
        ? {
            // Light mode palette - refined for a cleaner, modern look
            primary: {
              main: '#f57c00', // A warm, inviting orange
              light: '#ffad42',
              dark: '#bb4d00',
              contrastText: common.white,
            },
            secondary: {
              main: '#00bcd4', // A fresh, vibrant cyan
              light: '#5edfe3',
              dark: '#008ba3',
              contrastText: common.white,
            },
            background: {
              default: '#f4f6f8', // Very light grey, almost white
              paper: common.white,   // Pure white for card backgrounds
            },
            text: {
              primary: grey[900], // Very dark grey for primary text
              secondary: grey[700], // Medium grey for secondary text
            },
            success: {
              main: green[600],
            },
            error: {
              main: deepOrange[600],
            },
            divider: grey[300], // Lighter divider for subtle separation
          }
        : {
            // Dark mode palette - designed for a rich, immersive "Netflix-like" feel
            primary: {
              main: '#ffb300', // Brighter amber for good visibility on dark backgrounds
              light: '#ffe54c',
              dark: '#c68400',
              contrastText: common.black, // Ensure contrast on primary
            },
            secondary: {
              main: '#00e5ff', // Bright cyan for accents
              light: '#6effff',
              dark: '#00b2cc',
              contrastText: common.black,
            },
            background: {
              default: '#1a1a1a', // Deep, charcoal-like background
              paper: '#282828',   // Slightly lighter dark for cards and surfaces
            },
            text: {
              primary: common.white, // Pure white for primary text
              secondary: grey[400], // Lighter grey for secondary text
            },
            success: {
              main: green[400],
            },
            error: {
              main: deepOrange[400],
            },
            divider: blueGrey[700], // Darker divider for subtle separation
          }),
    },
    typography: {
      fontFamily: ['Inter', 'sans-serif'].join(','),
      h1: {
        fontWeight: 800, // Extra bold for impact
        fontSize: '3.5rem', // Larger for main titles
        lineHeight: 1.15,
        letterSpacing: '-0.015em', // Slightly tighter for modern feel
        marginBottom: '0.5em',
      },
      h2: {
        fontWeight: 700,
        fontSize: '2.75rem',
        lineHeight: 1.2,
        marginBottom: '0.4em',
      },
      h3: {
          fontWeight: 700,
          fontSize: '2.25rem',
          lineHeight: 1.25,
          marginBottom: '0.3em',
      },
      h4: {
          fontWeight: 600,
          fontSize: '1.75rem',
          lineHeight: 1.3,
          marginBottom: '0.2em',
      },
      h5: {
          fontWeight: 600,
          fontSize: '1.25rem',
          lineHeight: 1.4,
          marginBottom: '0.1em',
      },
      h6: {
          fontWeight: 600,
          fontSize: '1rem',
          lineHeight: 1.5,
      },
      body1: {
          fontSize: '1.05rem', // Slightly larger body text
          lineHeight: 1.7,
      },
      body2: {
          fontSize: '0.9rem',
          lineHeight: 1.6,
      },
      button: {
          textTransform: 'none', // Buttons will not have uppercase text by default
          fontWeight: 700,
          letterSpacing: '0.05em', // Slightly spaced for prominence
      },
    },
    // Custom shadows for more depth
    shadows: [
      'none',
      '0px 1px 3px rgba(0, 0, 0, 0.2), 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12)',
      '0px 2px 4px rgba(0, 0, 0, 0.2), 0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12)',
      '0px 3px 5px rgba(0, 0, 0, 0.2), 0px 3px 4px rgba(0, 0, 0, 0.14), 0px 4px 1px rgba(0, 0, 0, 0.12)',
      '0px 5px 8px rgba(0, 0, 0, 0.2), 0px 5px 10px rgba(0, 0, 0, 0.14), 0px 8px 10px rgba(0, 0, 0, 0.12)',
      '0px 8px 10px rgba(0, 0, 0, 0.2), 0px 10px 14px rgba(0, 0, 0, 0.14), 0px 16px 20px rgba(0, 0, 0, 0.12)',
      '0px 10px 13px rgba(0, 0, 0, 0.2), 0px 12px 17px rgba(0, 0, 0, 0.14), 0px 19px 25px rgba(0, 0, 0, 0.12)',
      '0px 12px 17px rgba(0, 0, 0, 0.2), 0px 14px 21px rgba(0, 0, 0, 0.14), 0px 22px 29px rgba(0, 0, 0, 0.12)',
      '0px 14px 20px rgba(0, 0, 0, 0.2), 0px 17px 26px rgba(0, 0, 0, 0.14), 0px 27px 35px rgba(0, 0, 0, 0.12)',
      '0px 16px 24px rgba(0, 0, 0, 0.2), 0px 20px 30px rgba(0, 0, 0, 0.14), 0px 32px 40px rgba(0, 0, 0, 0.12)',
      '0px 19px 28px rgba(0, 0, 0, 0.2), 0px 24px 36px rgba(0, 0, 0, 0.14), 0px 38px 48px rgba(0, 0, 0, 0.12)',
      '0px 22px 33px rgba(0, 0, 0, 0.2), 0px 28px 42px rgba(0, 0, 0, 0.14), 0px 45px 57px rgba(0, 0, 0, 0.12)',
      '0px 25px 38px rgba(0, 0, 0, 0.2), 0px 32px 48px rgba(0, 0, 0, 0.14), 0px 51px 65px rgba(0, 0, 0, 0.12)',
      '0px 28px 42px rgba(0, 0, 0, 0.2), 0px 36px 54px rgba(0, 0, 0, 0.14), 0px 58px 74px rgba(0, 0, 0, 0.12)',
      '0px 32px 48px rgba(0, 0, 0, 0.2), 0px 40px 60px rgba(0, 0, 0, 0.14), 0px 64px 82px rgba(0, 0, 0, 0.12)',
      '0px 35px 53px rgba(0, 0, 0, 0.2), 0px 44px 66px rgba(0, 0, 0, 0.14), 0px 70px 90px rgba(0, 0, 0, 0.12)',
      '0px 39px 58px rgba(0, 0, 0, 0.2), 0px 49px 74px rgba(0, 0, 0, 0.14), 0px 78px 100px rgba(0, 0, 0, 0.12)',
      '0px 42px 63px rgba(0, 0, 0, 0.2), 0px 53px 80px rgba(0, 0, 0, 0.14), 0px 85px 109px rgba(0, 0, 0, 0.12)',
      '0px 46px 69px rgba(0, 0, 0, 0.2), 0px 58px 87px rgba(0, 0, 0, 0.14), 0px 93px 119px rgba(0, 0, 0, 0.12)',
      '0px 50px 75px rgba(0, 0, 0, 0.2), 0px 63px 95px rgba(0, 0, 0, 0.14), 0px 100px 128px rgba(0, 0, 0, 0.12)',
      '0px 55px 83px rgba(0, 0, 0, 0.2), 0px 69px 104px rgba(0, 0, 0, 0.14), 0px 110px 141px rgba(0, 0, 0, 0.12)',
      '0px 60px 90px rgba(0, 0, 0, 0.2), 0px 75px 113px rgba(0, 0, 0, 0.14), 0px 120px 153px rgba(0, 0, 0, 0.12)',
      '0px 66px 99px rgba(0, 0, 0, 0.2), 0px 83px 125px rgba(0, 0, 0, 0.14), 0px 132px 169px rgba(0, 0, 0, 0.12)',
      '0px 72px 108px rgba(0, 0, 0, 0.2), 0px 90px 135px rgba(0, 0, 0, 0.14), 0px 144px 184px rgba(0, 0, 0, 0.12)',
      '0px 79px 118px rgba(0, 0, 0, 0.2), 0px 99px 149px rgba(0, 0, 0, 0.14), 0px 158px 202px rgba(0, 0, 0, 0.12)',
    ],
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            transition: 'background-color 0.3s ease-in-out', // Smooth background transition
          },
        },
      },
      MuiLink: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.primary.main,
            textDecoration: 'none',
            transition: 'color 0.3s ease',
            '&:hover': {
              color: theme.palette.secondary.main,
              textDecoration: 'underline',
            },
          }),
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: ({ theme }) => ({
            // Use a specific, slightly different background for AppBar in dark mode
            backgroundColor: theme.palette.mode === 'light' ? theme.palette.primary.main : blueGrey[800], // Distinct AppBar background
            boxShadow: theme.shadows[6], // Deeper shadow for AppBar
            padding: theme.spacing(1, 0),
            transition: 'background-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
            // Ensure contrast for text and icons within AppBar
            color: common.white, // Ensure text and icons are white in both modes
          }),
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: 8,
            padding: '10px 24px', // Slightly more padding
            fontWeight: 700,
            textTransform: 'none',
            letterSpacing: '0.02em',
            transition: 'transform 0.2s ease-in-out, background-color 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-2px)', // Subtle lift on hover
              boxShadow: theme.shadows[4], // Increased shadow on hover
            },
          }),
          containedPrimary: ({ theme }) => ({
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.primary.contrastText,
            '&:hover': {
              backgroundColor: theme.palette.primary.dark,
            },
          }),
          outlinedPrimary: ({ theme }) => ({
            borderColor: theme.palette.primary.main,
            color: theme.palette.primary.main,
            '&:hover': {
              borderColor: theme.palette.primary.dark,
              color: theme.palette.primary.dark,
              backgroundColor: theme.palette.action.hover,
            },
          }),
        },
      },
      MuiContainer: {
          styleOverrides: {
              root: ({ theme }) => ({
                  paddingTop: theme.spacing(8), // More vertical padding
                  paddingBottom: theme.spacing(8),
                  [theme.breakpoints.down('sm')]: {
                      paddingTop: theme.spacing(4),
                      paddingBottom: theme.spacing(4),
                  },
              }),
          },
      },
      MuiPaper: {
          styleOverrides: {
              root: ({ theme }) => ({
                  padding: theme.spacing(5), // More padding inside paper
                  borderRadius: theme.shape.borderRadius * 2, // More rounded corners
                  boxShadow: theme.shadows[3], // Default paper shadow
                  transition: 'box-shadow 0.3s ease-in-out',
                  '&:hover': {
                    boxShadow: theme.shadows[8], // Deeper shadow on hover
                  },
                  [theme.breakpoints.down('sm')]: {
                      padding: theme.spacing(3),
                  },
              }),
          },
      },
      MuiCard: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderRadius: theme.shape.borderRadius * 2, // More rounded corners for cards
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out',
            '&:hover': {
              transform: 'translateY(-5px)', // Lift card on hover
              boxShadow: theme.shadows[8], // Deeper shadow on hover
            },
          }),
        },
      },
      MuiList: {
        styleOverrides: {
          root: ({ theme }) => ({
            backgroundColor: theme.palette.background.paper,
            borderRadius: theme.shape.borderRadius * 2,
            padding: 0,
            boxShadow: theme.shadows[1],
          }),
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: ({ theme }) => ({
            '&:not(:last-child)': {
              borderBottom: `1px solid ${theme.palette.divider}`,
            },
            padding: theme.spacing(2),
            transition: 'background-color 0.2s ease-in-out',
            '&:hover': {
              backgroundColor: theme.palette.action.hover,
            },
          }),
        },
      },
    },
  });
  return responsiveFontSizes(theme);
};

export default getAppTheme;