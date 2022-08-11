const { createTheme, responsiveFontSizes } = require("@mui/material")
const style = require("../style")

export const theme = responsiveFontSizes(
  createTheme({
    palette: {
      primary: {
        main: style.palette.main,
      },
      secondary: {
        main: style.palette.secondary,
      },
      common: {
        black: style.palette.dark,
        white: style.palette.light,
      },
      background: {
        default: style.palette.light,
      },
      text: { primary: style.palette.dark },
      facebook: {
        main: "#1877f2",
      },
      twitter: {
        main: "#1da1f2",
      },
      whatsapp: {
        main: "#25d366",
      },
      gmail: {
        main: "#ea4335",
      },
    },
    shape: {
      borderRadius: 0,
    },
    breakpoints: {
      values: {
        mobile: 600,
        tablet: 1100,
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
    typography: {
      fontFamily: style.typography.fontFamily,
      lead: {
        "@media (min-width:600px)": {
          fontSize: "1.2rem",
        },
        "@media (min-width:900px)": {
          fontSize: "1.3rem",
        },
        "@media (min-width:1200px)": {
          fontSize: "1.4rem",
        },
        fontSize: "1.15rem",
      },
    },
    components: {
      MuiToolbar: {
        defaultProps: {
          sx: {
            my: 1,
            mx: 10,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          variant: "contained",
          color: "secondary",
        },
      },
      MuiListSubheader: {
        defaultProps: {
          sx: {
            background: style.palette.secondary,
            color: style.palette.light,
          },
        },
      },
      MuiTextField: {
        defaultProps: {
          fullWidth: true,
          required: true,
          InputLabelProps: {
            required: false,
          },
        },
      },
      MuiLink: {
        defaultProps: {
          underline: "hover",
          sx: { cursor: "pointer" },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: "md",
        },
      },
    },
  })
)
