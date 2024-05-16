import { Typography } from "@mui/material";

import { Image as ImageIcon } from "@phosphor-icons/react/dist/ssr";

import type { ProductSchema } from "@/schemas/product";

import { StyledBadge, StyledPaper } from "./styled";

type StockBoxProps = {
  product: ProductSchema;
  quantity: number;
};

export const StockBox = ({ product, quantity }: StockBoxProps) => {
  return (
    <StyledPaper variant="elevation" elevation={4}>
      <StyledBadge showZero badgeContent={quantity} color="secondary">
        <ImageIcon size={64} weight="light" />

        <Typography variant="body2">{product.name}</Typography>
      </StyledBadge>
    </StyledPaper>
  );
};
