import { SxProps, Theme, lighten } from "@mui/material";

const scrollbarStyles: SxProps<Theme> = {
  "&::-webkit-scrollbar": {
    backgroundColor: (theme) => lighten(theme.palette.background.default, 0.2),
    width: 4,
  },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: (theme) => lighten(theme.palette.background.default, 0.1),
    borderRadius: 0.25,
  },
  "&::-moz-scrollbar": {
    backgroundColor: (theme) => lighten(theme.palette.background.default, 0.2),
    width: 4,
  },
  "&::-moz-scrollbar-thumb": {
    backgroundColor: (theme) => lighten(theme.palette.background.default, 0.1),
    borderRadius: 0.25,
  },
};

export { scrollbarStyles };
