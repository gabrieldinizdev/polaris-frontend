import type { ProductSchema } from "@/schemas/product";
import type { StockItemSchema } from "@/schemas/stock-item";

import { StockAction } from "./action";
import { StockBox } from "./box";
import { EmptyStock } from "./empty-stock";
import { StyledShelf, StyledShelfContainer } from "./styled";

type StockProps = {
  items: StockItemSchema[];
};

export const Stock = ({ items }: StockProps) => {
  return (
    <>
      <StyledShelfContainer>
        <StyledShelf>
          {items.length === 0 && <EmptyStock />}

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
