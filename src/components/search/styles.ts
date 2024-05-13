import { TextField, alpha, styled } from "@mui/material";

const BaseSearch = styled(TextField)(({ theme }) => ({
  position: "relative",

  "&::-webkit-search-cancel-button": {
    WebkitAppearance: "none",
  },
}));

export { BaseSearch };
