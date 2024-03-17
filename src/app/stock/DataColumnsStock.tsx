"use client";

import { ColumnDef } from "@tanstack/react-table";
import { StockWithProduct } from "./actions";

export const DataColumnsStock: ColumnDef<StockWithProduct>[] = [
  {
    accessorKey: "product.name",
    header: "Product"
  },
  {
    accessorKey: "quantity",
    header: () => <div className="text-center">Quantity</div>,
    cell: ({ row }) => {
      const value = row.getValue("quantity") as number;
      return <div className="text-center font-medium">{value}</div>;
    },
  },
  {
    accessorKey: "added",
    header: () => <div className="text-right">Added</div>,
    cell: ({ row }) => {
        const value = row.getValue("added") as Date;
        const formatted = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(value);
        return <div className="text-right font-medium">{formatted}</div>;
      },
  },
  {
    accessorKey: "price",
    header: () => <div className="text-right">Price</div>,
    cell: ({ row }) => {
      const valueToFormat = parseFloat(row.getValue("price"));
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(valueToFormat);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  {
    accessorKey: "expires",
    header: () => <div className="text-right">Expires</div>,
    cell: ({ row }) => {
        const value = row.getValue("expires") as Date;
        const formatted = new Intl.DateTimeFormat("en-US", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        }).format(value);
        return <div className="text-right font-medium">{formatted}</div>;
      },
  },
];
