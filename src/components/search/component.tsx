import { forwardRef } from "react";

import SearchIcon from "@mui/icons-material/Search";
import { IconButton, TextFieldProps } from "@mui/material";

import { BaseSearch } from "./styles";

type SearchProps = {
  onSearchAction?: () => void;
} & TextFieldProps;

const InputSearch = forwardRef<HTMLInputElement, SearchProps>(
  ({ onSearchAction, ...props }: SearchProps, ref) => {
    return (
      <BaseSearch
        variant="outlined"
        size="small"
        fullWidth
        autoComplete="off"
        ref={ref}
        InputProps={{
          endAdornment: (
            <IconButton onClick={onSearchAction}>
              <SearchIcon />
            </IconButton>
          ),
        }}
        {...props}
      />
    );
  }
);

InputSearch.displayName = "InputSearch";

export { InputSearch };
