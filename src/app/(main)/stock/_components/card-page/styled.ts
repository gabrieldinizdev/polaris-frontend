import { Paper, styled } from "@mui/material";

export const StyledPaper = styled(Paper)(({ theme }) => ({
  borderRadius: theme.spacing(2),
  display: "flex",
  flexDirection: "column",
  overflow: "hidden",
  flexGrow: 1,
  position: "relative",
}));
