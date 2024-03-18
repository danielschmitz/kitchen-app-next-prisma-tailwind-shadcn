import Link from "next/link";
import { FindStock, StockWithProduct } from "./actions";
import { DataTableStock } from "./DataTableStock";
import { DataColumnsStock } from "./DataColumnsStock";
import { Button } from "@/components/ui/button";

export default async function Page({ params }: any) {
  const columns = DataColumnsStock;
  const data = await FindStock();

  return (
    <div>
      <DataTableStock columns={columns} data={data} />
    </div>
  );
}
