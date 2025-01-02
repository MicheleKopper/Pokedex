import { ThemeProvider } from "@emotion/react";
import { GlobalStyled } from "./configs/global/GlobalStyled";
import { AppRoutes } from "./configs/routes/AppRoutes";
import { cardTheme } from "./themes/cardTheme";
import { Provider } from "react-redux";
import { persistor, store } from "./components/store";
import { PersistGate } from "redux-persist/integration/react";


function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={cardTheme}>
          <GlobalStyled />
          <AppRoutes />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
export default App;
