import dynamic from "next/dynamic";

import { CardPage } from "./_components/card-page";

const ITEMS = [
  {
    product: {
      _id: "1",
      name: "Produto 1",
    },
    quantity: 10,
  },
  {
    product: {
      _id: "2",
      name: "Produto 2",
    },
    quantity: 20,
  },
  {
    product: {
      _id: "3",
      name: "Produto 3",
    },
    quantity: 30,
  },
  {
    product: {
      _id: "4",
      name: "Produto 4",
    },
    quantity: 40,
  },
  {
    product: {
      _id: "5",
      name: "Produto 5",
    },
    quantity: 50,
  },
  {
    product: {
      _id: "6",
      name: "Produto 6",
    },
    quantity: 60,
  },
  {
    product: {
      _id: "7",
      name: "Produto 7",
    },
    quantity: 70,
  },
  {
    product: {
      _id: "8",
      name: "Produto 8",
    },
    quantity: 80,
  },
  {
    product: {
      _id: "9",
      name: "Produto 9",
    },
    quantity: 90,
  },
  {
    product: {
      _id: "10",
      name: "Produto 10",
    },
    quantity: 100,
  },
  {
    product: {
      _id: "11",
      name: "Produto 11",
    },
    quantity: 110,
  },
  {
    product: {
      _id: "12",
      name: "Produto 12",
    },
    quantity: 120,
  },
  {
    product: {
      _id: "13",
      name: "Produto 13",
    },
    quantity: 130,
  },
  {
    product: {
      _id: "14",
      name: "Produto 14",
    },
    quantity: 140,
  },
  {
    product: {
      _id: "15",
      name: "Produto 15",
    },
    quantity: 150,
  },
  {
    product: {
      _id: "16",
      name: "Produto 16",
    },
    quantity: 160,
  },
  {
    product: {
      _id: "17",
      name: "Produto 17",
    },
    quantity: 170,
  },
  {
    product: {
      _id: "18",
      name: "Produto 18",
    },
    quantity: 180,
  },
  {
    product: {
      _id: "19",
      name: "Produto 19",
    },
    quantity: 190,
  },
  {
    product: {
      _id: "20",
      name: "Produto 20",
    },
    quantity: 200,
  },
] as any;

const List = dynamic(() => import("@/components/list").then((mod) => mod.List));

export default async function ListPage({ skeleton }: any) {
  return (
    <>
      {skeleton}
      <CardPage>
        <List items={ITEMS} />
      </CardPage>
    </>
  );
}
