import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface PaletteOptions {
    accent?: PaletteOptions["primary"];
  }
  interface Palette {
    accent?: PaletteOptions["primary"];
  }

  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;

    mobile: true;
    tablet: true;
    desktop: true;
  }
}
