"use client";

import { Box, Toolbar, Stack, Typography } from "@mui/material";

import { ComponentCommonProps } from "@/types/common/component";

type ContentProps = {} & ComponentCommonProps;

export const MobileContent = ({ children }: ContentProps) => {
  return (
    <Stack component="main" height="100%" flexDirection="column" display="flex">
      <Box
        p={4}
        flexGrow={1}
        display="grid"
        sx={{ backgroundColor: "background.default" }}
      >
        {children}
      </Box>

      <Toolbar />
    </Stack>
  );
};
