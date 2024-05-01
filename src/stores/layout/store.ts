import { PaletteMode } from "@mui/material";

import { create } from "zustand";

import { LayoutStoreProps } from "./types";

export const useLayoutStore = create<LayoutStoreProps>((set) => ({
  mode: "dark",

  actions: {
    setMode: (mode?: PaletteMode) =>
      set(() => ({
        mode,
      })),
  },
}));
