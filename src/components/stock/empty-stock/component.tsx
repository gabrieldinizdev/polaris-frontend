import Lottie from "react-lottie-player";

import { Box, Typography } from "@mui/material";

import animationEmptyState from "@/lotties/animation-empty-state.json";

export const EmptyStock = () => {
  return (
    <Box
      flexGrow={1}
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Lottie
        loop
        animationData={animationEmptyState}
        play
        speed={0.25}
        style={{ width: "100%" }}
      />

      <Typography variant="body2" textAlign="center">
        Estoque vazio
      </Typography>
    </Box>
  );
};
