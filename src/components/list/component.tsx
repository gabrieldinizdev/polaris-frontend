"use client";

import type { StockItemSchema } from "@/schemas/stock-item";

import { ListAction } from "./action";
import { EmptyList } from "./empty-stock";
import { StyledTableContainer } from "./styled";
import { ListTable } from "./table";

type ListProps = {
  items: StockItemSchema[];
};

export const List = ({ items }: ListProps) => {
  return (
    <>
      <StyledTableContainer>
        {items.length === 0 ? <EmptyList /> : <ListTable items={items} />}
      </StyledTableContainer>

      {items.length > 0 && <ListAction>Dar Baixa</ListAction>}
    </>
  );
};
