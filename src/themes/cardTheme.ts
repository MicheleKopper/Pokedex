import { createTheme } from "@mui/material";

export const cardTheme = createTheme({
  // TYPOGRAFY
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

  //CORES
  palette: {},

  //RESPONSIVIDADE
  breakpoints: {},

  //CUSTOMIZAÇÃO DOS COMPONENTES
  // styleOverrides = altera estilos padrão (cor, margens, espaçamento), define estados (hover, :focus), personaliza CSS global
  // root = define estilos globais

  components: {
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: "#B4B4B3",

          "&:hover": {
            color: "#FE0000",
          },
        },
      },
    },
  },
});
