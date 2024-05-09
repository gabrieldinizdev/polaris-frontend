import { Stack } from "@mui/material";

import { PageTitle } from "@/components/page-title";
import { LayoutCommonProps } from "@/types/common";

type ListLayoutProps = {
  skeleton: any;
} & LayoutCommonProps;

export default function ListLayout({ children, skeleton }: ListLayoutProps) {
  return (
    <Stack gap={4}>
      <PageTitle>Lista</PageTitle>
      {skeleton}
      {children}
    </Stack>
  );
}
