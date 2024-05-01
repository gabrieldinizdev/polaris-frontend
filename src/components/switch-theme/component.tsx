"use client";

import { SyntheticEvent } from "react";

import { useLayoutStore } from "@/stores/layout";

import { MaterialUISwitch } from "./styled";

export const SwitchTheme = () => {
  const {
    mode,
    actions: { setMode },
  } = useLayoutStore();

  function toggleTheme(_event: SyntheticEvent<Element, Event>, dark: boolean) {
    setMode(dark ? "dark" : "light");
  }

  return (
    <MaterialUISwitch
      checked={mode === "dark" ? true : false}
      value={mode === "dark" ? true : false}
      onChange={toggleTheme}
    />
  );
};
