"use client";

import { Stack } from "@mui/material";

import type { ComponentCommonProps } from "@/types/common/component";

import { StyledPaper } from "./styled";

type CardPageProps = {} & ComponentCommonProps;

export const CardPage = ({ children }: CardPageProps) => {
  return (
    <Stack flexGrow={1}>
      <StyledPaper>{children}</StyledPaper>
    </Stack>
  );
};
