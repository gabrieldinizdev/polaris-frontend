"use client";

import { Box, Toolbar } from "@mui/material";

import { ComponentCommonProps } from "@/types/common/component";

type ContentProps = {} & ComponentCommonProps;

export const MobileContent = ({ children }: ContentProps) => {
  return (
    <Box component="main" height="100%" flexDirection="column" display="flex">
      <Box
        flexGrow={1}
        display="grid"
        p={2}
        sx={{ backgroundColor: "background.default" }}
      >
        {children}
      </Box>

      <Toolbar />
    </Box>
  );
};
