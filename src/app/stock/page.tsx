import Link from "next/link";
import { FindStock, StockWithProduct } from "./actions";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableStock } from "./DataTableStock";

export default async function Page({ params }: any) {
  const columns: ColumnDef<StockWithProduct>[] = [
    {
      accessorKey: "product.name",
      header: "Product",
    },
    {
      accessorKey: "quantity",
      header: "Quantity",
    },
    {
      accessorKey: "expires",
      header: "expires",
    },
    {
      accessorKey: "added",
      header: "Added",
    },
    {
      accessorKey: "price",
      header: "Price",
    },
  ];

  const data = await FindStock();

  return (
    <div>
      <Link href="/stock/new">New Stock</Link>
      <DataTableStock columns={columns} data={data}  />
    </div>
  );
}
