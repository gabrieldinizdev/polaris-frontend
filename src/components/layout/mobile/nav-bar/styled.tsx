import { ToggleButton, ToggleButtonGroup, styled } from "@mui/material";

export const StyledToggleButtonGroup = styled(ToggleButtonGroup)(
  ({ theme }) => ({
    height: "100%",
    padding: `${theme.spacing(2)} 0`,
    justifyContent: "center",
    ".MuiButtonGroup-grouped:not(:last-of-type)": {
      borderColor: "#FFFFFF",
    },
  })
);

export const StyledToggleButton = styled(ToggleButton)(() => ({
  flexGrow: 1,
  color: "white",
  borderColor: "rgba(255, 255, 255, 0.20)",
  "&.Mui-selected, &.Mui-selected:hover": {
    color: "white",
    backgroundColor: "rgba(255, 255, 255, 0.16)",
  },
}));
