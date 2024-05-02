import { MobileLayout } from "@/components/layout";
import { LayoutCommonProps } from "@/types/common";

type MainLayoutProps = {} & LayoutCommonProps;

export default function MainLayout({ children }: MainLayoutProps) {
  return <MobileLayout>{children}</MobileLayout>;
}
