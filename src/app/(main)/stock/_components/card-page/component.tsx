"use client";

import { Stack } from "@mui/material";

import { InputSearch } from "@/components/search";
import type { ComponentCommonProps } from "@/types/common/component";

import { StyledPaper } from "./styled";

type CardPageProps = {} & ComponentCommonProps;

export const CardPage = ({ children }: CardPageProps) => {
  return (
    <Stack flexGrow={1}>
      <InputSearch label="Procurar produto" />
      <StyledPaper>{children}</StyledPaper>
    </Stack>
  );
};
