"use client";

import { ReactNode } from "react";

import { Box } from "@mui/material";

import { MobileAppBar } from "./app-bar";
import { MobileContent } from "./content";
import { MobileNavBar } from "./nav-bar";

type MobileAppBarProps = {
  children: ReactNode;
};

export const MobileLayout = ({ children }: MobileAppBarProps) => {
  return (
    <Box component="main" height="100%" flexDirection="column" display="flex">
      <MobileContent>{children}</MobileContent>

      <MobileAppBar>
        <MobileNavBar />
      </MobileAppBar>
    </Box>
  );
};
