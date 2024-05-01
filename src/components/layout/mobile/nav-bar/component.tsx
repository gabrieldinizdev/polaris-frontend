"use client";

import { useState, MouseEvent } from "react";

import { ToggleButton, ToggleButtonGroup, Tooltip } from "@mui/material";

import { ListChecks, Package } from "@phosphor-icons/react/dist/ssr";

export const MobileNavBar = () => {
  const [alignment, setAlignment] = useState<string | null>("left");

  const handleAlignment = (
    _: MouseEvent<HTMLElement>,
    newAlignment: string | null
  ) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  return (
    <ToggleButtonGroup
      value={alignment}
      exclusive
      onChange={handleAlignment}
      aria-label="text alignment"
      sx={{
        width: "100%",
        height: "100%",
        py: (theme) => theme.spacing(2),
        justifyContent: "center",
        ".MuiButtonGroup-grouped:not(:last-of-type)": {
          borderColor: "#FFFFFF",
        },
      }}
    >
      <Tooltip title="Estoque" arrow>
        <ToggleButton
          sx={{
            flexGrow: 1,
            "&.Mui-selected, &.Mui-selected:hover": {
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.16)",
            },
            color: "white",
            borderColor: "rgba(255, 255, 255, 0.20)",
          }}
          value="stock"
          aria-label="stock"
        >
          <Package size={32} />
        </ToggleButton>
      </Tooltip>

      <Tooltip title="Lista de Compras" arrow>
        <ToggleButton
          color="standard"
          sx={{
            flexGrow: 1,
            "&.Mui-selected, &.Mui-selected:hover": {
              color: "white",
              backgroundColor: "rgba(255, 255, 255, 0.16)",
            },
            color: "white",
            borderColor: "rgba(255, 255, 255, 0.20)",
          }}
          value="list"
          aria-label="shopping list"
        >
          <ListChecks size={32} />
        </ToggleButton>
      </Tooltip>
    </ToggleButtonGroup>
  );
};
