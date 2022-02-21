import { createTheme } from "@mui/material";

export const muiTheme = createTheme({
    palette: {
        common: {
            white: '#fff',
            black: '#000'
        },
        text: {
            primary: "#fff",
        },
        secondary: {
            main: '#fff'
        },
        primary: {
            main: "#1B0863",
        },
        success: {
            main: "#99FF99",
        },
        info: {
            main: "#397874",
        },
        background: {
            default: "#F56F54",
        },
    },

    components: {
        MuiPaper: {
            defaultProps: {
                variant: "outlined",
            },
        },
        MuiButton: {
            defaultProps: {
                disableElevation: true,
                variant: "contained",
                sx: { pt: 1.4, px: 3, fontWeight: "bold" },
            },
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',
                    textTransform: "none",
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                    borderRadius: 0,
                    color: '#1B0863',
                    "&:hover": {
                        color: "#fff",
                    },
                    boxShadow: '15px 15px 6px rgba(27, 8, 99, 0.2)',
                    minWidth: '200px',
                    transition: '0.7s',
                    fontFamily: "'Noto Serif Georgian', serif",
                    letterSpacing: '10px',
                    textAlign: 'center'
                },
            },
        },
        MuiCheckbox: {
            defaultProps: {
                color: "primary",
            },
        },
        MuiSwitch: {
            defaultProps: {
                color: "primary",
            },
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    input: { color: 'black' }
                },
            },

        }
        // MuiCssBaseline: {
        //     styleOverrides: { fontFamily: "'Noto Serif Georgian', serif" },
        // },
    },
    typography: {
        h1: {
            fontFamily: 'Noto Serif Georgian, Thin"',
        }
    },
});
