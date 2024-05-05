import { Stack } from "@mui/material";

import { PageTitle } from "@/components/page-title";
import { LayoutCommonProps } from "@/types/common";

type StockLayoutProps = {} & LayoutCommonProps;

export default function StockLayout({ children }: StockLayoutProps) {
  return (
    <Stack gap={4}>
      <PageTitle>Estoque</PageTitle>

      {children}
    </Stack>
  );
}
