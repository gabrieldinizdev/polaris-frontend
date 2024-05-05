"use client";

import {
  Badge,
  Box,
  Button,
  Paper,
  Skeleton,
  Typography,
  lighten,
} from "@mui/material";

import { Image as ImageIcon } from "@phosphor-icons/react";

import type { ProductSchema } from "@/schemas/product";
import type { StockItemSchema } from "@/schemas/stock-item";

import { StockAction } from "./action";
import { StockBox } from "./box";
import { EmptyStock } from "./empty-stock";
import { StyledShelf, StyledShelfContainer } from "./styled";

type StockProps = {
  items: StockItemSchema[];
  loading?: boolean;
};

export const Stock = ({ items, loading = true }: StockProps) => {
  return (
    <>
      <StyledShelfContainer>
        <StyledShelf>
          {items.length === 0 && !loading && <EmptyStock />}

          {items.map((item) => {
            const product = item.product as ProductSchema;
            const quantity = item.quantity;

            return (
              <StockBox
                key={product._id}
                product={product}
                quantity={quantity}
              />
            );
          })}
        </StyledShelf>
      </StyledShelfContainer>

      <StockAction>
        {items.length === 0 ? "Adicionar" : "Atualizar"}
      </StockAction>
    </>
  );
};
