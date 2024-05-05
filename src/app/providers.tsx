"use client";

import { ReactNode, useMemo } from "react";

import {
  CssBaseline,
  ScopedCssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";

import { useLayoutStore } from "@/stores/layout";
import { dark, light } from "@/theme/palette";

type AppProvidersProps = {
  children: ReactNode;
};

const DEFAULT_FONT = { fontFamily: '"Poppins", sans-serif' };

function AppProviders({ children }: AppProvidersProps) {
  const { mode } = useLayoutStore();
  const theme = useMemo(
    () =>
      createTheme({
        palette: mode === "dark" ? dark : light,
        shape: { borderRadius: 8 },
        breakpoints: {
          values: {
            mobile: 425,
            tablet: 768,
            desktop: 1024,
          },
        },
        typography: {
          h1: DEFAULT_FONT,
          h2: DEFAULT_FONT,
          h3: DEFAULT_FONT,
          h4: DEFAULT_FONT,
          h5: DEFAULT_FONT,
          h6: DEFAULT_FONT,

          ...DEFAULT_FONT,
        },
        components: {
          MuiCssBaseline: {
            styleOverrides: `
              html, body {
                min-height: 100vh;
                display: grid;
              }

              :root > * {
                user-select: none;
              }

              a {
                text-decoration: none;
                color: inherit;
              }
            `,
          },
          MuiToolbar: {
            styleOverrides: {
              root: {
                height: "80px",
              },
            },
          },
        },
      }),
    [mode]
  );

  return (
    <AppRouterCacheProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <ScopedCssBaseline>{children}</ScopedCssBaseline>
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}

export { AppProviders };
