import { ThemeProvider } from "@emotion/react";
import { GlobalStyled } from "./configs/global/GlobalStyled";
import { AppRoutes } from "./configs/routes/AppRoutes";
import { cardTheme } from "./themes/cardTheme";
import { Provider } from "react-redux";
import { store } from "./components/store";


function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={cardTheme}>
        <GlobalStyled />
        <AppRoutes />
      </ThemeProvider>
    </Provider>
  );
}
export default App;
