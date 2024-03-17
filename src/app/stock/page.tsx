import Link from "next/link";
import { FindStock, StockWithProduct } from "./actions";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableStock } from "./DataTableStock";
import { DataColumnsStock } from "./DataColumnsStock";


export default async function Page({ params }: any) {
  
  const columns  = DataColumnsStock;
  const data = await FindStock();

  return (
    <div>
      <Link href="/stock/new">New Stock</Link>
      <DataTableStock columns={columns} data={data} />
    </div>
  );
}
