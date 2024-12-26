import { ThemeProvider } from "@emotion/react";
import { GlobalStyled } from "./configs/global/GlobalStyled";
import { AppRoutes } from "./configs/routes/AppRoutes";
import { cardTheme } from "./themes/cardTheme";

function App() {
  return (
    <>
      <ThemeProvider theme={cardTheme}>
        <GlobalStyled />
        <AppRoutes />
      </ThemeProvider>
    </>
  );
}

export default App;
