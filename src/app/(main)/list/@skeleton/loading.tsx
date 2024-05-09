import { Box, Skeleton } from "@mui/material";

export default function ListPage() {
  return (
    <Box width={89} alignSelf="flex-end">
      <Skeleton variant="rounded" width="100%" height={40} />
    </Box>
  );
}
