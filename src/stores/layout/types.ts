import { type PaletteMode } from "@mui/material";

export type LayoutStoreProps = {
  mode: PaletteMode;

  actions: {
    setMode: (mode: PaletteMode) => void;
  };
};
