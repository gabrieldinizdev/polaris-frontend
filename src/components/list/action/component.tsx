import { Button, Paper } from "@mui/material";

import type { ComponentCommonProps } from "@/types/common/component";

type ListActionProps = {} & ComponentCommonProps;

export const ListAction = ({ children }: ListActionProps) => {
  return (
    <Paper
      sx={{
        borderRadius: 0,
        width: "100%",
        padding: 2,
        borderTopWidth: 1,
        borderTopColor: "divider",
        borderTopStyle: "solid",
      }}
    >
      <Button variant="contained" fullWidth>
        {children}
      </Button>
    </Paper>
  );
};
