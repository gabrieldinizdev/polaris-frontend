"use client";

import { useRouter } from "next/navigation";

import { Box, Divider, IconButton, Stack, Typography } from "@mui/material";

import { CaretLeft } from "@phosphor-icons/react/dist/ssr";

import type { ComponentCommonProps } from "@/types/common/component";

type PageTitleProps = {
  withBackward?: boolean;
} & ComponentCommonProps;

export const PageTitle = ({
  children,
  withBackward = false,
}: PageTitleProps) => {
  const router = useRouter();

  const backward = () => {
    router.back();
  };

  return (
    <Stack display="flex" flexDirection="column" gap={3}>
      <Box display="flex" alignItems="center" gap={1}>
        {withBackward && (
          <IconButton
            aria-label="Voltar"
            sx={{ width: "48px", height: "48px" }}
            onClick={backward}
          >
            <CaretLeft size={32} />
          </IconButton>
        )}

        <Typography variant="h4">{children}</Typography>
      </Box>

      <Divider flexItem />
    </Stack>
  );
};
