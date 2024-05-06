"use client";

import { Box, lighten, styled } from "@mui/material";

export const StyledShelf = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(0),
  width: "100%",
  height: "100%",
  maxHeight: "100%",
  overflow: "auto",
  display: "flex",
  flexWrap: "wrap",
  gap: theme.spacing(2),
  padding: theme.spacing(2),

  "&::-webkit-scrollbar": {
    backgroundColor: lighten(theme.palette.background.default, 0.2),
    width: 4,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: lighten(theme.palette.background.default, 0.1),
    borderRadius: 0.25,
  },
  "&::-moz-scrollbar": {
    backgroundColor: lighten(theme.palette.background.default, 0.2),
    width: 4,
  },
  "&::-moz-scrollbar-thumb": {
    backgroundColor: lighten(theme.palette.background.default, 0.1),
    borderRadius: 0.25,
  },
}));

export const StyledShelfContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
}));
