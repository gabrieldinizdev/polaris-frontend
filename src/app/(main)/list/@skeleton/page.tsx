import { Button } from "@mui/material";

export default async function ButtonSkeleton() {
  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        alignSelf: "end",
      }}
    >
      Criar
    </Button>
  );
}
