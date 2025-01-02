import { createTheme } from "@mui/material";

export const cardTheme = createTheme({
  typography: {
    fontFamily: "'DM Sans', sans-serif",

    h5: {
      fontSize: 25,
      fontWeight: 700,
      color: "#4C585B",
    },
    h6: {
      fontSize: 16,
      fontWeight: 600,
      color: "#4C585B",
    },
    subtitle1: {
      fontSize: 13,
      fontWeight: 400,
      color: "#4C585B",
    },
  },

  // styleOverrides = altera estilos padrão (cor, margens, espaçamento), define estados (hover, :focus), personaliza CSS global
  // root = define estilos globais
  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#4C585B",
          "&:hover": {
            color: "#C40C0C",
          },
        },
      },
    },

    MuiCssBaseline: {
      styleOverrides: {
        ".card-container": {
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          padding: "50px",
        },
      },
    },

    MuiAlert: {
      styleOverrides: {
        root: {
          display: "flex",
          alignItems: "center",
          justifyContent: "spece-between",
          width: "300px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "50px",
          padding: "10px 20px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        },
        icon: {
          marginRight: "10px",
        },
      },
    },

    MuiPagination: {
      styleOverrides: {
        root: {
          display: "flex",
          justifyContent: "center",
          marginBottom: "50px",
        },
      },
    },
  },
});
