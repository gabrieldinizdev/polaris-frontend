import dynamic from "next/dynamic";

import { getMainStock, returnItemsFromStockById } from "@/actions/stocks";

import { CardPage } from "./_components/card-page";

const Stock = dynamic(() =>
  import("@/components/stock").then((mod) => mod.Stock)
);

export default async function StockPage() {
  const { _id: id } = await getMainStock();
  const data = await returnItemsFromStockById(id, { page: 1, size: 10 });

  return (
    <CardPage>
      <Stock items={data} />
    </CardPage>
  );
}
