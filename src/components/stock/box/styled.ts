"use client";

import { Badge, Paper, styled } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  width: `calc(50% - ${theme.spacing(1)})`,
  height: theme.spacing(16),
}));

export const StyledBadge = styled(Badge)(({ theme }) => ({
  width: "100%",
  height: "100%",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  gap: theme.spacing(1),

  "& .MuiBadge-badge": {
    padding: theme.spacing(1),
    height: theme.spacing(4),
    width: theme.spacing(4),
  },
}));
