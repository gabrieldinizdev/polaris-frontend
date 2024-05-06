"use client";

import { Box, Skeleton } from "@mui/material";

import { StyledSkeletonShelf, StyledSkeletonShelfContainer } from "./styled";

export const StockSkeleton = () => {
  return (
    <>
      <StyledSkeletonShelfContainer>
        <StyledSkeletonShelf>
          {Array.from(new Array(12)).map((_, index) => {
            return (
              <Skeleton
                key={index}
                variant="rounded"
                height={128}
                sx={{ width: (theme) => `calc(50% - ${theme.spacing(1)})` }}
              />
            );
          })}
        </StyledSkeletonShelf>
      </StyledSkeletonShelfContainer>

      <Box p={2} width="100%">
        <Skeleton variant="rounded" height={40} />
      </Box>
    </>
  );
};
