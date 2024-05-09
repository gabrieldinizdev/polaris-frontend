import { ListSkeleton } from "@/components/list";

import { CardPage } from "../stock/_components/card-page";

export default function ListPage() {
  return (
    <CardPage>
      <ListSkeleton />
    </CardPage>
  );
}
