import {
  common,
  deepPurple,
  green,
  grey,
  indigo,
  lightBlue,
  pink,
  yellow,
} from "@mui/material/colors";
import createPalette from "@mui/material/styles/createPalette";

export const light = createPalette({
  mode: "light",
  primary: {
    main: deepPurple["500"],
  },
  secondary: {
    main: indigo["600"],
  },
  accent: {
    main: pink["A400"],
  },
  success: {
    main: green["700"],
  },
  info: {
    main: lightBlue["800"],
  },
  warning: {
    main: yellow["700"],
    contrastText: common["white"],
  },
  background: {
    default: grey["100"],
    paper: common["white"],
  },
});
