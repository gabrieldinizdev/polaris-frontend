import { AppBar, Toolbar } from "@mui/material";

import { ComponentCommonProps } from "@/types/common/component";

type MobileAppBarProps = {} & ComponentCommonProps;

export const MobileAppBar = ({ children }: MobileAppBarProps) => {
  return (
    <AppBar
      position="fixed"
      color="primary"
      enableColorOnDark
      sx={{ top: "auto", bottom: 0 }}
    >
      <Toolbar>{children}</Toolbar>
    </AppBar>
  );
};
