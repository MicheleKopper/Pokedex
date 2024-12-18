import { CssBaseline, CSSObject, GlobalStyles } from "@mui/material";
import "@fontsource/dm-sans/100.css";
import "@fontsource/dm-sans/200.css";
import "@fontsource/dm-sans/300.css";
import "@fontsource/dm-sans/400.css";
import "@fontsource/dm-sans/500.css";
import "@fontsource/dm-sans/600.css";
import "@fontsource/dm-sans/700.css";
import "@fontsource/dm-sans/800.css";
import "@fontsource/dm-sans/900.css";

const styles: Record<string, CSSObject> = {
  body: {
    fontFamily: "DM Sans",
  },
};

export function GlobalStyled() {
  return (
    <>
      <CssBaseline />
      <GlobalStyles styles={styles} />
    </>
  );
}
